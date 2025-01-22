// app/api/upload/route.js
import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import connectDB from '../../utils/dbConnect';
import Invite from '../../../../models/Invite';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const title = formData.get('title');
    const tags = formData.get('tags').split(',').map(tag => tag.trim());
    const type = formData.get('type');

    if (!file || !title || !tags || !type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64File = `data:${file.type};base64,${buffer.toString('base64')}`;

    // Upload to Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.upload(base64File, {
      resource_type: 'auto',
    });

    // Connect to MongoDB and save invite
    await connectDB();
    const invite = await Invite.create({
      title,
      imageUrl: cloudinaryResponse.secure_url,
      cloudinaryId: cloudinaryResponse.public_id,
      tags,
      type,
    });

    return NextResponse.json(invite, { status: 201 });
  } catch (error) {
    console.error('Error uploading invite:', error);
    return NextResponse.json(
      { error: 'Error uploading invite' },
      { status: 500 }
    );
  }
}
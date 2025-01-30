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
    const title = formData.get('title');
    const tags = formData.get('tags').split(',').map(tag => tag.trim());
    const uploadType = formData.get('uploadType');

    if (!title || !tags || !uploadType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await connectDB();
    let media = [];

    if (uploadType === 'file') {
      const files = formData.getAll('file');
      if (!files || files.length === 0) {
        return NextResponse.json(
          { error: 'No files uploaded' },
          { status: 400 }
        );
      }

      // Process each file
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const base64File = `data:${file.type};base64,${buffer.toString('base64')}`;

        // Upload to Cloudinary
        const cloudinaryResponse = await cloudinary.uploader.upload(base64File, {
          resource_type: 'auto',
        });

        media.push({
          url: cloudinaryResponse.secure_url,
          cloudinaryId: cloudinaryResponse.public_id,
          type: formData.get('type') || 'photo',
          isYoutubeVideo: false,
          order: parseInt(formData.get('order') || '1') + i
        });
      }

    } else if (uploadType === 'youtube') {
      const youtubeVideoId = formData.get('youtubeVideoId');
      if (!youtubeVideoId) {
        return NextResponse.json(
          { error: 'Invalid YouTube URL' },
          { status: 400 }
        );
      }

      media.push({
        url: `https://www.youtube.com/embed/${youtubeVideoId}`,
        type: 'video',
        isYoutubeVideo: true,
        cloudinaryId: null,
        order: parseInt(formData.get('order') || '1')
      });
    } else {
      return NextResponse.json(
        { error: 'Invalid upload type' },
        { status: 400 }
      );
    }

    // Create invite with the new schema structure
    const invite = new Invite({
      title,
      media, // This should be an array of media objects
      tags
    });

    await invite.save();
    return NextResponse.json(invite, { status: 201 });

  } catch (error) {
    console.error('Error uploading invite:', error);
    return NextResponse.json(
      { error: error.message || 'Error uploading invite' },
      { status: 500 }
    );
  }
}
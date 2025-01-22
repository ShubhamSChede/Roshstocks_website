import { IncomingForm } from 'formidable';
import cloudinary from '../../utils/cloudinary';
import dbConnect from '../../utils/dbConnect';
import Invite from '../../../../models/Invite';

// app/api/invites/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await dbConnect();
    const invites = await Invite.find({}).sort({ createdAt: -1 });
    return NextResponse.json(invites);
  } catch (error) {
    console.error('Error fetching invites:', error);
    return NextResponse.json({ error: 'Error fetching invites' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    
    const invite = await Invite.create({
      title: data.title,
      imageUrl: data.imageUrl,
      cloudinaryId: data.cloudinaryId,
      tags: data.tags,
      type: data.type,
    });

    return NextResponse.json(invite, { status: 201 });
  } catch (error) {
    console.error('Error creating invite:', error);
    return NextResponse.json({ error: 'Error creating invite' }, { status: 500 });
  }
}
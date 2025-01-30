// app/api/invites/route.js
import { NextResponse } from 'next/server';
import dbConnect from '../../utils/dbConnect';
import Invite from '../../../../models/Invite';

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
    
    // Ensure media array is provided and has at least one item
    if (!data.media || !Array.isArray(data.media) || data.media.length === 0) {
      return NextResponse.json(
        { error: 'At least one media item is required' },
        { status: 400 }
      );
    }

    // Validate each media item has required fields
    for (const item of data.media) {
      if (!item.url || !item.type || !item.order) {
        return NextResponse.json(
          { error: 'Each media item must have url, type, and order' },
          { status: 400 }
        );
      }
    }
    
    const invite = await Invite.create({
      title: data.title,
      media: data.media,
      tags: data.tags,
    });

    return NextResponse.json(invite, { status: 201 });
  } catch (error) {
    console.error('Error creating invite:', error);
    return NextResponse.json({ error: 'Error creating invite' }, { status: 500 });
  }
}
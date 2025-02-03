// app/api/invites/[id]/route.js
import { NextResponse } from 'next/server';
import dbConnect from '../../../utils/dbConnect';
import Invite from '../../../../../models/Invite';

export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const data = await request.json();

    // Validate input data
    if (!data.media || !Array.isArray(data.media) || data.media.length === 0) {
      return NextResponse.json(
        { error: 'At least one media item is required' },
        { status: 400 }
      );
    }

    const updatedInvite = await Invite.findByIdAndUpdate(
      id,
      {
        title: data.title,
        media: data.media,
        tags: data.tags,
      },
      { new: true, runValidators: true }
    );

    if (!updatedInvite) {
      return NextResponse.json({ error: 'Invite not found' }, { status: 404 });
    }

    return NextResponse.json(updatedInvite);
  } catch (error) {
    console.error('Error updating invite:', error);
    return NextResponse.json({ error: 'Error updating invite' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    
    const deletedInvite = await Invite.findByIdAndDelete(id);
    
    if (!deletedInvite) {
      return NextResponse.json({ error: 'Invite not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Invite deleted successfully' });
  } catch (error) {
    console.error('Error deleting invite:', error);
    return NextResponse.json({ error: 'Error deleting invite' }, { status: 500 });
  }
}
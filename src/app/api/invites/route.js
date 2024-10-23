// src/app/api/invites/route.js
import connectToDatabase from '../../../../utils/dbConnect';
import Invite from '../../../../models/Invite';

export async function GET(req) {
    await connectToDatabase();
    const url = new URL(req.url);
    const category = url.searchParams.get('category');

    try {
        console.log('Fetching invites with category:', category);
        const invites = await Invite.find(category ? { category } : {});
        console.log('Invites fetched successfully:', invites);
        return new Response(JSON.stringify(invites), { status: 200 });
    } catch (error) {
        console.error('Error fetching invites:', error);
        return new Response(JSON.stringify({ message: 'Failed to fetch invites', error: error.message }), { status: 500 });
    }
}


export async function POST(req) {
    await connectToDatabase();
    try {
        const inviteData = await req.json();
        const invite = new Invite(inviteData);
        await invite.save();
        return new Response(JSON.stringify(invite), { status: 201 });
    } catch (error) {
        console.error('Error creating invite:', error);
        return new Response(JSON.stringify({ message: 'Failed to create invite', error: error.message }), { status: 500 });
    }
}

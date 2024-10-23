// models/Invite.js
import mongoose from 'mongoose';

const InviteSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    ytLink: {
        type: String,
        required: false,
    },
    estimatedPrice: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
},
{
    timestamps: true
});

export default mongoose.models.Invite || mongoose.model('Invite', InviteSchema);

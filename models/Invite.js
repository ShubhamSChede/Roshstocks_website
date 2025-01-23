// models/Invite.js
import mongoose from 'mongoose';

const InviteSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  imageUrl: { 
    type: String, 
    required: true 
  },
  cloudinaryId: { 
    type: String,
    default: null
  },
  tags: [{ 
    type: String 
  }],
  type: { 
    type: String, 
    enum: ['photo', 'video'], 
    required: true 
  },
  isYoutubeVideo: {
    type: Boolean,
    default: false
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

const Invite = mongoose.models.Invite || mongoose.model('Invite', InviteSchema);
export default Invite;
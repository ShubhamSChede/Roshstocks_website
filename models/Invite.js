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
    required: true 
  },
  tags: [{ 
    type: String 
  }],
  type: { 
    type: String, 
    enum: ['photo', 'video'], 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

export default mongoose.models.Invite || mongoose.model('Invite', InviteSchema);
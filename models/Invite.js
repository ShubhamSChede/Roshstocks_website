import mongoose from 'mongoose';

const MediaItemSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  cloudinaryId: {
    type: String,
    default: null
  },
  type: {
    type: String,
    enum: ['photo', 'video'],
    required: true
  },
  isYoutubeVideo: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    required: true
  }
});

const InviteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  media: {
    type: [MediaItemSchema],
    validate: {
      validator: function(media) {
        return media.length > 0; // Ensure at least one media item exists
      },
      message: 'At least one media item is required'
    }
  },
  tags: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add an index to support sorting media items by order
InviteSchema.index({ 'media.order': 1 });

const Invite = mongoose.models.Invite || mongoose.model('Invite', InviteSchema);
export default Invite;
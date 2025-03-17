'use server'
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env');
}

// Use global variable to maintain connection across requests
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  // If already connected, return the existing connection
  if (cached.conn) {
    console.log('MongoDB is already connected');
    return cached.conn;
  }

  // If connection is in progress, wait for it
  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    // Store the connection promise to reuse
    cached.promise = mongoose.connect(MONGO_URI, opts)
      .then((mongoose) => {
        console.log('MongoDB connected successfully');
        return mongoose;
      })
      .catch((error) => {
        console.error('MongoDB connection failed:', error);
        cached.promise = null; // Reset on error to allow retrying
        throw error;
      });
  }

  try {
    // Wait for the connection
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    // Handle any errors that weren't caught in the promise
    console.error('Error resolving MongoDB connection:', error);
    throw error;
  }
}

export default connectToDatabase;
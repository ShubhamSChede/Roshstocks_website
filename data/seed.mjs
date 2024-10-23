// seed.mjs
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.local
dotenv.config({ path: path.join(path.dirname(__dirname), '.env.local') });

// Import your Invite model - adjust the path as needed
import Invite from '../models/Invite.js';

// Database connection function
async function dbConnect() {
    if (!process.env.MONGODB_URI) {
        throw new Error('MONGODB_URI is not defined in environment variables');
    }
    
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

const seed = async () => {
    try {
        await dbConnect();

        // Read data from JSON file - adjust path as needed
        const jsonPath = path.join(__dirname, 'seed', 'invites.json');
        const data = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

        // Clear the collection first (optional)
        await Invite.deleteMany({});
        
        // Insert the data
        await Invite.insertMany(data);
        console.log('Data successfully added to the database!');
    } catch (error) {
        console.error('Error during seeding:', error);
    } finally {
        // Close the database connection
        await mongoose.connection.close();
        console.log('Database connection closed');
    }
};

// Run the seed function
seed().catch(console.error);
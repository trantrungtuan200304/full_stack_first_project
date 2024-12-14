import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGOURL = process.env.MONGO_URL;

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGOURL)
        console.log(`MongoDB connected: ${conn.connection.host}`);

    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
    
}


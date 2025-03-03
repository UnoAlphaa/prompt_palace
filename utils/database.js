import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        mongoose.set('strictQuery', true);

        const connection = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = connection.connections[0].readyState === 1;
        if (isConnected) {
            console.log('MongoDB connected');
        }
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

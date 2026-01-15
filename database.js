import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("BD connected")
    } catch (error){
        console.error("Error connecting", error)
    }
};
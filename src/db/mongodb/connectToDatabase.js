import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        });
        console.log("Connected to database 🎉");
    } catch (error) {
        console.log("Something went wron while connecting to detabase 😓");
    }
}

export default connectToDatabase;
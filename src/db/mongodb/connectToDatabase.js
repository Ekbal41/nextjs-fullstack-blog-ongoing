import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        mongoose.set('strictQuery', true);
       mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to database 🎉");
    } catch (error) {
        console.log("Something went wron while connecting to detabase 😓");
    }
}

// const connectToDatabase = async () => {
//     mongoose.connect(process.env.MONGODB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     console.log("Connected to database 🎉");
// }

const closeDbConnection = async () => {
  
    console.log("Closed database connection 🎉");
}

export {
    connectToDatabase,
    closeDbConnection,
}
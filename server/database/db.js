import mongoose from 'mongoose';
import dotenv from "dotenv"
dotenv.config();

const Connection = async (username, password) => {
    // const URL = "mongodb://127.0.0.1:27017"
    

    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

        await mongoose.connect(process.env.URL);
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;
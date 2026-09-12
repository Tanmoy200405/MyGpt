import mongoose from 'mongoose';
import dns from 'dns';

dns.setServers(['8.8.8.8', '2001:4860:4860::8888']);

const connectDB = async () =>{
    try {
        mongoose.connection.on('connected', ()=> console.log('Database connected'))
        await mongoose.connect(`${process.env.MONGODB_URI}/quickgpt`)
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDB;
import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb+srv://user123:user123@cluster0.se0oi7k.mongodb.net/?retryWrites=true&w=majority", {
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        });
        console.log(`MongoDB connect: ${conn.connection.host}`.cyan.underline)
    }catch(error){
        console.error(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
}
export default connectDB;
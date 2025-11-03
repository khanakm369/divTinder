import mongoose from "mongoose";


const connectDb = async () => {
    try{
        await mongoose.connect(
        "mongodb+srv://khanakm369_db_user:Wonderful1999@cluster0.qrguztc.mongodb.net/devTinder"
    )
    .then(console.log("database connected like a pro"))
    }
    catch(err)
    {
        console.error("Database Can not be connected");
    }
    
    
}

export default connectDb
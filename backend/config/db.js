import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://dubbinut:Dubbinut841434@cluster0.z5lttiy.mongodb.net/QuickBite').then(()=>console.log("DB Connected"))
}


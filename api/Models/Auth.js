import mongoose, { Schema } from "mongoose";
const userSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true,
},
password:{
    type:String,
    required:true,
},
createdAt:{
    type:Date,
    default:Date.now,
},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true
}
})
const User = mongoose.model("User",userSchema);
export default  User;
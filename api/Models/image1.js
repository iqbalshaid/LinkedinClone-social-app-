import mongoose from "mongoose";
const Img = new mongoose.Schema({
    userId:{
        type:String,
    },
    name:String,

});
const Image1 = mongoose.model("Image1",Img);
export default Image1;
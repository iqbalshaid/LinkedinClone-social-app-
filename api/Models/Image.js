import mongoose from "mongoose";
const Img = new mongoose.Schema({
    userId:{
        type:String,
    },
    name:String,

});
const Image = mongoose.model("Image",Img);
export default Image;
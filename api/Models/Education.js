import mongoose,{Schema} from "mongoose"
const datas = new mongoose.Schema({
    userId:{
        type:String,
    },
    school:{
        type:String,
        required:true
    },
    degree:{
        type:String,
        required:true
    },
    field:{
        type:String,
        required:true
    },
    startYear:{
        type:Number,
        required:true
    },
    endYear:{
        type:Number,
        required:true
    },
    stor:[{
        type:String,
        required:true}
    ]

})
const Education = mongoose.model("Education",datas);
export default Education;
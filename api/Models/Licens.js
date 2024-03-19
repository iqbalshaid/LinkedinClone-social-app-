import mongoose from "mongoose";
const datas = new mongoose.Schema({
    userId:{type:String},
    name:{
        type:String,
        required:true
    },
    issue:{
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
    credientalId:{
        type:String
    },
    url: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(value) {
                // Regular expression to validate URLs
                // This regex matches most common URL formats
                return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value);
            },
            message: props => `${props.value} is not a valid URL!`
        }
    },
    stor:[{
        type:String,
        required:true}
    ],
  


})
const Licens = mongoose.model("licens",datas);
export default Licens;
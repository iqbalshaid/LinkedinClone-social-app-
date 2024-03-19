import mongoose,{Schema} from "mongoose";
const Profileschema = new mongoose.Schema({
    userId:{
        type:String,
    },
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    skills:[{
        type:String,
        required:true,
    }],
    gender:{
        type:String,
        required:true
    },
    industry:{
        type:String,
        required:true,
    },
    cour:{
        type:String,
        required:true,
    },
    stateopt:{
        type:String,
        required:true,
    },
    dist:{
        type:String,
        required:true,
    },

})
const Profile = mongoose.model("Profile",Profileschema);
export default Profile;
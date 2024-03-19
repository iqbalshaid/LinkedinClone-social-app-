import express from "express";
import Profile from "../Models/Profile.js";
const route = express.Router();
route.post("/profile",async (req,res)=>{
    try{
        console.log("hello");
    const {userId,firstname,lastname,skills,gender,industry,cour,stateopt,dist} = req.body;
  //  console.log("user",userId);
    const get = await Profile.findOne({userId});
    //console.log(get,"kon");
    if(get){
        return res.status(400).json("user has already inserted");
    }
    const ProfileData = new Profile({userId,firstname,lastname,skills,gender,industry,cour,stateopt,dist});
    await ProfileData.save();
    res.status(200).send(ProfileData);
    }
    catch(err){
        console.log("something error",err);
        res.status(500).json("something error");
    }
})
route.get("/profile/:userId",async (req,res)=>{
    try{
    const userId = req.params.userId;
    console.log(userId);
    const find = await Profile.findOne({userId});
   // console.log(find,"hello");
    if (!find) {
        return res.status(404).json({ message: "User not found" });
        console.log("hell");
      }
     
      res.status(200).json(find);
      console.log("kon")
    }
    catch(err){
        res.status(500).json({ message: "Error retrieveing" });
    }
})
route.put("/profile/:userId",async (req,res)=>{
    console.log("saale");
    try{
        const userId = req.params.userId;
        const {skills,industry,cour,stateopt,dist} = req.body;
        //console.log(userId);
        const updateData = {
            skills,
            industry,
            cour,
            stateopt,
            dist
            // Add more fields as needed
        };

        // Find the profile by userId and update it
        const updatedProfile = await Profile.findOneAndUpdate(
            { userId },
            updateData,
            { new: true } // Return the updated document
        );

        if (!updatedProfile) {
            return res.status(404).json({ message: "Profile not found" });
        }

        // Send the updated profile back to the client
        res.json(updatedProfile);
        
    }
    catch(err){
        res.status(500).json({ message: "Error retrieveing" });
    }
})
export default route;
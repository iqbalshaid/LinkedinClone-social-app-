import express from "express";
import Education from "../Models/Education.js";
const route = express.Router();
route.post("/education",async (req,res)=>{
    try{
        console.log("hello");
    const {userId,school,degree,field,startYear,endYear,stor} = req.body;
    console.log("user",userId);
    
    const ProfileData = new Education({userId,school,degree,field,startYear,endYear,stor});
    await ProfileData.save();
    res.status(200).send(ProfileData);
    }
    catch(err){
        console.log("something error",err);
        res.status(500).json("something error");
    }
})
route.get("/education/:userId",async (req,res)=>{
    try{
    const userId = req.params.userId;
    console.log(userId);
    const find = await Education.find({userId});
    //console.log(find,"hello");
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
route.delete('/education/:school/:userId', async (req, res) => {
    const school = req.params.school;
    const userId = req.params.userId;

    try {
        // Find and delete the education data based on school and userId
        const deletedData = await Education.findOneAndDelete({ school: school, userId: userId });

        if (!deletedData) {
            // If no data was deleted, send a 404 Not Found response
            return res.status(404).json({ message: 'Data not found' });
        }

        // If data was deleted successfully, send a success response
        res.json({ message: 'Data deleted successfully', deletedData: deletedData });
    } catch (error) {
        // If an error occurred, send a 500 Internal Server Error response
        console.error('Error deleting data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
export default route;
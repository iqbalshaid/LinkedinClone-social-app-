import express from "express";
import Licens from "../Models/Licens.js";
const route = express.Router();
route.post("/licens",async (req,res)=>{
    try{
        console.log("hello");
    const {userId,name,issue,startYear,endYear,credientalId,url,stor} = req.body;
   // console.log("user",userId);
    
    const ProfileData = new Licens({userId,name,issue,startYear,endYear,credientalId,url,stor});
    await ProfileData.save();
    res.status(200).send(ProfileData);
    }
    catch(err){
        console.log("something error",err);
        res.status(500).json("something error");
    }
})
route.get("/licens/:userId",async (req,res)=>{
    try{
    const userId = req.params.userId;
    console.log(userId);
    const find = await Licens.find({userId});
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
route.delete('/licens/:endYear/:userId', async (req, res) => {
    const endYear = req.params.endYear;
    const userId = req.params.userId;

    try {
        // Find and delete the education data based on school and userId
        const deletedData = await Licens.findOneAndDelete({ endYear:endYear, userId: userId });

        if (!deletedData) {
            // If no data was deleted, send a 404 Not Found response
            return res.status(404).json({ message: 'Data not found' });
        }

        // If data was deleted successfully, send a success response
        res.json({ message: 'Data deleted successfully', deletedData: deletedData });
        console.log("heelo");
    } catch (error) {
        // If an error occurred, send a 500 Internal Server Error response
        console.error('Error deleting data:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
export default route;
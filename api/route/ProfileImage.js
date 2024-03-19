import express from "express"
const route = express.Router();
import Image1 from "../Models/image1.js";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '../client/src/images')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the destination folder where images will be stored
    cb(null, './public/images1');
  },
  filename: function (req, file, cb) {
    // Use the original filename provided by the user
    cb(null, file.originalname);
  }
});

// Initialize multer with custom storage options
const upload = multer({ storage: storage });

route.post("/images",upload.single('image'),async (req,res)=>{
    try {
        // Create a new Image document
        console.log("kutte");
        console.log(req.file);
        const { userId } = req.body;
        const newImage = new Image1({
         userId:userId,
          name: req.file.originalname,
        
        });
        
        // Save the image to the database
        await newImage.save();
        
        res.set("Content-Type", "image/jpeg"); // Set the content type to JPEG image
res.status(200).send(newImage); // Send the image buffer

      } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).send('Error uploading image');
      }
})

route.get("/images/:userId",async (req,res)=>{
   try{   
    const userId = req.params.userId;
    //console.log(userId)
    console.log("juio","shahid");
    const images = await Image1.findOne({ userId });
   //console.log(images,"hello");
    if (!images) {
      return res.status(404).json({ message: "Image not found" });
    }

    console.log(images,"sh");
    res.set("Content-Type", "image/jpeg");
    res.status(200).json(images);
   
    //console.log("kon")
  }
  catch(err){
      res.status(500).json({ message: "Error retrieveing" });
  }
})
route.put("/images/:userId",upload.single('image'),async (req,res)=>{
  console.log("saale");
  try{
      const userId = req.params.userId;
     const name = req.file.originalname;
    
      //console.log(userId);
      const updateData = {
          name
          // Add more fields as needed
      };

      // Find the profile by userId and update it
      const updatedProfile = await Image1.findOneAndUpdate(
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
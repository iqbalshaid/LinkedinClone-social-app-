import express from "express";
import dotenv from "dotenv"
import axios from "axios";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import cors from "cors";
import crypto from "crypto"
dotenv.config();
import User from "./Models/Auth.js";
import ProfileRoute from "./route/Profile.js"
import ProfileBackRoute from "./route/ProfleBack.js"
import EducationRoute from "./route/Education.js"
import LicensRoute from "./route/Licens.js"
import ProfileImageRoute from "./route/ProfileImage.js"

const app = express();
app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',}
));

const PORT = process.env.PORT||5000; // Change the port number here

app.get('/', (req, res) => {
    res.send('Hello World!');
  });
const conect = ()=>{
    
         mongoose.connect("mongodb://127.0.0.1:27017/Linkedin",{
            //useNewUrlParser:true,
            useUnifiedTopology:true,
            
        }).then(()=>
        console.log("database was connected"))
    .catch((err)=>{
        console.log("database was disconnected");

    })
}
 // Call the connection function

app.listen(PORT, () => {
    conect();
    console.log(`Server is running on port ${PORT}`);
});
app.post("/register", async (req,res)=>{
    console.log("how are you");
    try{
       // console.log("shahid");
       const {name,email,password} = req.body;
       //check the email are registered or not
      // console.log(name);
       //console.log("hello");
       const findemail = await User.findOne({email});
       if(findemail){
        return res.status(400).json("email is already registered")
       }
       // create a new user
       const newuser = new User({name,email,password});
       //generate and store the verification token
       
       //save the user in the database
       console.log(process.env.JWT);
       await newuser.save();
       res.send(newuser);
    }
    catch(err){
        console.log("something error on register",err);
        res.status(500).json("not registered");

    }
})
// const generateSecretKey = ()=>{
//       const secretKey = crypto.randomBytes(32).toString("hex");
//       return secretKey;
//   }
//   const secretKey = generateSecretKey();
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        console.log(user);

        if (user.password!=password) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const pass = bcrypt.compareSync(password,user.password);
        if(!pass){
        
        const expiresInDays = 7;
         const token = Jwt.sign({ userId: user._id }, process.env.JWT, { expiresIn: expiresInDays * 24 * 60 * 60 });
        
        // Set the cookie
        //console.log(token);
        res.cookie('token', token, { httpOnly: true});
        console.log(req.cookies.token);
        // Send the response
        const {password,...others} = user._doc;
        return res.status(200).json({ message: "Login successful",others });
    } }catch (err) {
        console.error("Error during login:", err);
        return res.status(500).json({ message: "Login failed" });
    }
});

 
app.use("",ProfileRoute);
app.use("",ProfileBackRoute)
app.use("",EducationRoute);
app.use("",LicensRoute);
app.use("",ProfileImageRoute);
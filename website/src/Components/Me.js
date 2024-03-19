import React, { useEffect, useState } from "react";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userType } from "../UserContext";
const Me =  ({position})=>{
  const {userId} = useContext(userType);
    const [open,setOpen] = useState(false);
    const click = ()=>{
        setOpen(!open);
    }
const navigate = useNavigate(); 
const [profileData, setProfileData] = useState(null);
const fetchData = async ()=>{
  try{
const res = await axios.get(`http://127.0.0.1:5000/profile/${userId}`);
setProfileData(res.data);
}
catch(err){
  console.log("error from the backend",err);
}
}
const [profileData4,setProfileData4] = useState("");
const fetchData4 = async ()=>{
  await axios.get(`http://127.0.0.1:5000/images/${userId}`).then(response => {
      // Handle response
      setProfileData4(response.data.name);
      console.log(response.data);
    }).catch(error => {
      // Handle error
      console.log("not upload img");
    });
}


useEffect(()=>{
  fetchData();
  fetchData4();
},[userId]);
const logout = async ()=>{
try{
  localStorage.removeItem("user");
  localStorage.removeItem("image");
  localStorage.removeItem("image1");
  navigate("/");
}
catch(err){
  console.log("error on logout");
}
}
    return (
        <>
 <div>
 Me<span className="text-center text-gray-500 max-xl:text-[12px]" onClick={click}><KeyboardArrowDownIcon /></span>
 {open && (
                        <div className="bg-white border rounded mt-32  max-md:w-[60%]"
          style={{
            position: 'absolute',
            top: `${position}`,
            left: '55%',
            transform: 'translate(-30%, -20%)',
           width:"20%",
            
            padding: '10px',
          }}>
               
              <div className=" mx-5 flex justify-items-start">
              <img src={`http://127.0.0.1:5000/images1/${profileData4}`} alt="" className="rounded-full w-10 h-10 mx-2 my-2 "/>
                <div>
                <h1 className="text-2xl text-black my-1">{profileData?.firstname} {profileData?.lastname}</h1>
                <p className="text-[12px] text-gray-400 my-1">{profileData?.skills}</p>
                </div>
              </div>
              <button className="w-[90%] border-[1px] border-blue-500 text-center my-2 text-xl text-blue-500 mx-4 rounded-full" ><Link to="/profile">View Profile</Link></button>
              <div className="border-b-2 border-gray-500 "></div>
              <div className="border-b-2 border-gray-500 my-3 mx-5">
                
                    <h3 className="text-black text-lg my-2">Accounts</h3>
                    <div className="flex justify-items-start"><div className="text-yellow-700 cursor-pointer"><ChatBubbleIcon /></div>
                <h2 className="text-black text-lg cursor-pointer">Try Premium For $0</h2></div>
              <p className="text-gray-400 text-sm  my-2 cursor-pointer">Settings and Privacy</p>  
              <p className="text-gray-400 text-sm  my-2 cursor-pointer">Help</p>
              <p className="text-gray-400 text-sm  my-2 cursor-pointer">Language</p>
                
                
              </div>
              <div className="border-b-2 border-gray-500 my-3 mx-5">
              <h3 className="text-black text-lg my-2 cursor-pointer">Manage</h3>
                   
              <p className="text-gray-400 text-sm  my-2 cursor-pointer">Post and Activity</p>  
              <p className="text-gray-400 text-sm  my-2 cursor-pointer">Job posting Account</p>
              </div>
             
              <div className=" my-4 mx-5">
                
                <h2 className="text-black text-lg cursor-pointer" onClick={logout}>SignOut</h2>
              </div>
              
              </div>
 )}
            </div>
            
        </>
    )
}
export default Me;
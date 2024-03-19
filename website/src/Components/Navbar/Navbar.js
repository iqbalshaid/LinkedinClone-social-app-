import React, { useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkIcon from '@mui/icons-material/Work';
import DialpadIcon from '@mui/icons-material/Dialpad';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import Me from "../Me";
import AppsIcon from '@mui/icons-material/Apps';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { userType } from "../../UserContext";

const Navbar = ({position})=>{
   
    console.log(position);
    const [open,setOpen] = useState(false);
    
    const {userId} = useContext(userType);
    const click = ()=>{
        setOpen(!open);
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
    fetchData4();
},[userId])

    return (
        <>
         {open && (<div className="bg-white border rounded mt-2 opacity-100"
          style={{
            position: 'absolute',
            top: "50%",
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width:"50%",
            padding: '10px',
          }}>
              <ul className="block">
                        <li className=" text-center my-5 text-gray-500"><div className=" text-gray-500 "><HomeIcon /></div><Link to="/home">Home</Link></li>
                        <li className=" text-center my-5 text-gray-500"><div className=" text-gray-500 "><DialpadIcon /></div><Link to="/network">My Network</Link></li>
                        <li className=" text-center my-5 text-gray-500" ><div className=" text-gray-500 "><WorkIcon /></div><Link to="/jobs">Jobs</Link></li>
                        <li className=" text-center my-5 text-gray-500 "><div className=" text-gray-500 "><LocalPostOfficeIcon /></div>Messages</li>
                        <li className=" text-center my-5 text-gray-500"><div className=" text-gray-500 "><NotificationsIcon /></div><Link to="/notification">Notification</Link></li>
                        <li className=" text-center my-5 text-gray-500 "><Me position = {position}/></li>
                    </ul>
                    </div> 
        )}
            <div className="flex items-center justify-around bg-white fixed top-0 left-0 w-[100%] h-[100px]">
           
          

                
                <div className="hidden max-md:block max-md:my-3" onClick={click}><AppsIcon /></div>
               
                <div className="flex items-center justify-start">
                    <div class = "flex items-center justify-center">
                    <div className="text-blue-700 p-2"><LinkedInIcon className="text-9xl"/></div>
                    <div className="flex items-center bg-blue-100  gap-3 rounded-lg border-2 border-black max-xl:gap-1"><div className="text-gray-500 text-2xl font-bold"><SearchIcon /></div>
                        <input className="bg-blue-100  text-start" placeholder="search" value="" type="text" />
                        </div>
                    </div>
                    </div>
                    <ul className="flex items-center justify-between max-md:hidden">
                        <li className=" p-6 text-gray-500 max-xl:p-3 max-xl:text-[12px] max-[850px]:text-[8px]"><div className="text-center text-gray-500 max-xl:text-[12px]"><HomeIcon /></div><Link to="/home">Home</Link></li>
                        <li className=" p-6 text-gray-500 max-xl:p-3 max-xl:text-[12px] max-[850px]:text-[8px]"><div className="text-center text-gray-500 max-xl:text-[12px]"><DialpadIcon /></div><Link to="/network">My Network</Link></li>
                        <li className=" p-6 text-gray-500 max-xl:p-3 max-xl:text-[12px] max-[850px]:text-[8px]" ><div className="text-center text-gray-500 max-xl:text-[12px]"><WorkIcon /></div><Link to="/jobs">Jobs</Link></li>
                        <li className=" p-6 text-gray-500 max-xl:p-3 max-xl:text-[12px] max-[850px]:text-[8px]"><div className="text-center text-gray-500 max-xl:text-[12px]"><LocalPostOfficeIcon /></div>Messages</li>
                        <li className=" p-6 text-gray-500 max-xl:p-3 max-xl:text-[12px] max-[850px]:text-[8px]"><div className="text-center text-gray-500 max-xl:text-[12px]"><NotificationsIcon /></div><Link to="/notification">Notification</Link></li>
                        <li className=" p-6 text-gray-500 max-xl:p-3 max-xl:text-[12px] max-[850px]:text-[8px] cursor-pointer"><div className="flex gap-2"><img src={`http://127.0.0.1:5000/images1/${profileData4}`} alt="" className="rounded-full w-10 h-10" /><Me /></div></li>
                    </ul>
                    <div className="max-md:hidden">
                    <div className="text-center text-gray-500"><DialpadIcon /></div>
                   <div className="flex items-center"> <h1 className="text-gray-500">For Business</h1>
                    <span className="text-center text-gray-500"><KeyboardArrowDownIcon /></span></div>
                </div>
                
                </div>
                
               
            
        </>
    )
}
export default Navbar;
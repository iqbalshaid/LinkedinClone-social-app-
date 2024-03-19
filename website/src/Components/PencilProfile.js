import React, { useEffect } from "react";
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import SearchIcon from '@mui/icons-material/Search';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AddIcon from '@mui/icons-material/Add';
import { courses,states } from "./list";
import { useContext } from "react";
import { userType } from "../UserContext";
import axios from "axios";
const PencilProfile = ({position})=>{
    const [open1,setOpen1] = useState(false);
    const {userId} = useContext(userType);
    const click1 = ()=>{
        setOpen1(!open1);
        console.log("shah")
    }
    const click2 = ()=>{
        setOpen1(false);
    }
    const [stat,setSat] = useState(states);
    const [cour,setCour] = useState();
    const [firstname,setFirstName] = useState("");
    const [lastname,setLastName] = useState("");
    const [skills,setSkills] = useState("");
    const [gender,setGender] = useState("");
    const [industry,setIndustry] = useState("");
    console.log(userId);
    const [stateopt,setStateOpt] = useState();
    const [dist,setDist] = useState();
    const filteredDistricts = stateopt ? stat.find(item => item.state === stateopt)?.districts : [];
    const [count,setCount] = useState(0);
    const handlSubmit = async  (e)=>{
      e.preventDefault();
      console.log("me");
      try{
        console.log("kon");
       await axios.post("http://127.0.0.1:5000/profile",
        {userId,
        firstname,
        lastname,
        skills,
        gender,
        industry,
        cour,
        stateopt,
        dist}


        );
        setOpen1(false);
        alert("sucessfully inserted");
        setCount(1);
      }
      catch(err){
        alert("not insert the data");
      }
    }
    const handlSubmit1 = async  (e)=>{
      e.preventDefault();
      console.log("me");
      try{
        console.log("kon");
       await axios.put(`http://127.0.0.1:5000/profile/${userId}`,
        {skills,
       industry,
        cour,
        stateopt,
        dist}


        );
        setOpen1(false);
        alert(" updated sucessfully");
        
      }
      catch(err){
        alert("not insert the data");
      }
    }
    let head = skills;
    const maxlength = 45;
    if(head.length>maxlength){
      head = head.slice(0,maxlength)+"...";
    }

 console.log(firstname);
    return (
        <>
        <div className="float-right mr-5 my-3" onClick={click1}><BorderColorIcon /></div>
  
                    {open1 && (
                        <div className="bg-white border rounded mt-2  max-md:w-[90%]"
          style={{
            position: 'absolute',
            top: `${position}`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
          
            
            padding: '10px',
          }}>
                                 <div className="flex items-center justify-between mx-4 border-b-[1px] border-gray-400 my-2 ">
            <h1 className="text-black text-xl font-medium my-2">Edit intro</h1>
            <div className="my-2" onClick={click2}><ClearIcon /></div>
          </div>
          <div className="h-[300px] overflow-y-scroll scroll-ms-2">
          <p className=" ml-3 text-[10px] text-gray-400 my-1">*indicates required</p>       
          <div>
          
          <h3 className="ml-4 text-base text-black">First Name*</h3>
          <input value={firstname} placeholder="" type="text" onChange={(e)=>setFirstName(e.target.value)} maxLength="75" className="mx-3 my-2 border-[1px] border-gray-400 rounded-3xl w-[90%]" required = "true"/>
         
          <h3 className="ml-4 text-base text-black">Last Name*</h3>
          <input value={lastname} placeholder="" type="text" onChange={(e)=>setLastName(e.target.value)} maxLength="75" className="mx-3 my-2 border-[1px] border-gray-400 rounded-3xl w-[90%]" required = "true"/>
          <h3 className="ml-4 text-base text-black">Skills*</h3>
          <input value={skills} placeholder="" type="text" onChange={(e)=>setSkills(e.target.value)} className="mx-3 my-2 border-[1px] border-gray-400 rounded-3xl w-[90%]" required = "true"/>
          
          <h4 className="ml-3 text-[13px] text-gray-400 my-2">Name pronunciation</h4>
         <p className="ml-3 text-[10px] text-gray-400 my-2"> This can only be added using our mobile app</p>          
          
            <h3 className="ml-4 text-base text-black">Pronoun</h3>
        
          <select className="mx-3 my-2 border-[1px] border-gray-400 rounded-3xl w-[90%] " onChange={(e)=>setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
                  
               
          </select>
          <p className="text-[10px] text-gray-400 mt-[-4px] ml-3">Let others know how to refer to you.</p>
          <p className="my-2 mx-3">Learn more about <span className="text-blue-500"> gender pronouns.</span></p>
          <h2>Headline*</h2>
          <div className="mx-1 my-2 border-[1px] border-gray-400 rounded-xl w-[90%]">
            <p className="my-2 mx-3">{head}</p>
            <div className="mx-3 my-2 border-[1px] border-gray-400 rounded-3xl"></div>
            <div className="flex justify-items-start mx-3 my-2"><div className="text-yellow-700"><ChatBubbleIcon /></div>
                <h2 className="text-blue-500 text-base">Get AI suggestions
 <span className="text-gray-400 text-sm">with Premium</span></h2></div>

              
          </div>
          <h2 className="mx-3 my-4">Current Position</h2>
 <div className="flex gap-2 mx-3 my-4 text-blue-500">
 <AddIcon/>
    <h2>Add New Position</h2>
 </div>
 <h3 className="ml-4 text-base text-black">Industry*</h3>
          <input value={industry} placeholder="" type="text" onChange={(e)=>setIndustry(e.target.value)} maxLength="200" className="mx-3 mt-2 border-[1px] border-gray-400 rounded-3xl w-[90%]" required = "true"/>
        
          <p className="text-gray-400 text-sm mx-2">Learn more about 
 <span className="text-blue-500 text-sm"> industry options</span></p>  
 <h2 className="ml-4 text-base text-black my-3">Education*</h2>
 <p className="text-gray-400 text-sm ml-4">Education</p>
 <select onChange={(e)=>setCour(e.target.value)} className="mx-3 my-1 border-[1px] border-gray-400 rounded-3xl w-[90%] overflow-scroll">
          
        {courses.map((item,index)=>(
          <option key={index} value={item.course}>{item.course}</option>
        ))}
      
 </select>
 <div className="flex gap-2 mx-3 my-4 text-blue-500">
 <AddIcon/>
    <h2>Add New Education</h2>
 </div>

 <div className="my-2 ml-1 flex justify-items-start gap-2">
            <input type="checkbox"  className="rounded-full ml-3"/>
            <h2>Show education in my intro</h2></div>
            </div>
            <h2 className="ml-4 text-base text-black my-3">Location*</h2>
 <p className="text-gray-400 text-sm ml-4">Country/Region*</p>
 <select className="mx-3 my-1 border-[1px] border-gray-400 rounded-3xl w-[90%]">
          
          <option>India</option>
          </select>
 <h3 className="ml-4 text-base text-black">City*</h3>

 <select className="mx-3 my-1 border-[1px] border-gray-400 rounded-3xl w-[90%] overflow-scroll" onChange={(e)=>setStateOpt(e.target.value)}>
          
 {stat.map((item,index)=>(
          <option key={index} value={item.state}>{item.state}</option>
          ))}      
      
 </select>       
    <h3 className="ml-4 text-base text-black">District*</h3>

 <select onChange={(e)=>setDist(e.target.value)} className="mx-3 my-1 border-[1px] border-gray-400 rounded-3xl w-[90%] overflow-scroll">
          
 {filteredDistricts.map((districts,index)=>(
          <option key={index} value={districts}>{districts}</option>
          ))}      
      
 </select>       
    
          
          
          <h2 className="text-gray-400 text-xl ml-4 my-2">Contact info</h2>
          <p className="text-gray-400 text-sm ml-4 my-2">Add or edit your profile URL, email, and more</p>
            <h2 className="text-blue-500 text-sm ml-4 my-2">Edit contact info</h2>
          <div className="border-b-[1px] border-gray-400 my-4"></div>
          <div className="flex justify-around">   
          <button className="rounded-full bg-blue-700 text-white text-base float-right mx-3 p-3" onClick={handlSubmit1}>Update</button>
            <button className="rounded-full bg-blue-700 text-white text-base float-right mx-3 p-3" onClick={handlSubmit}>Save</button></div>

          </div>
                            </div>
                    )}
        </>
    )
}
export default PencilProfile;
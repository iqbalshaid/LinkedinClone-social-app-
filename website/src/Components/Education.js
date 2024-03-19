import React, { useContext, useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import month from "./Month/month.js";
import  years  from "./Month/Year.js";
import data from "../Pages/Linkedin.js"
import axios from "axios";
const Education = ({position,userId})=>{
    const [open,setOpen] = useState(false);
    const click = ()=>{
        setOpen(!open);
    }
    const click2 = ()=>{
        setOpen(false);
    }
    const [start,setStart] = useState(month);
    const [end,setEnd] = useState(years);
    const [rap,setRap] = useState(data);
    const [show,setShow] = useState(false);
    const [stor,setStor] = useState([]);
    const [school,setSchool] = useState("");
    const [degree,setDegree] = useState("");
    const [field,setField] = useState("");
    const [startYear,setStartYear] = useState("");
    const [endYear,setEndYear] = useState("");
    
    const valuechange = (e)=>{
         setStor([...stor,e.target.value]);
         setShow(false);
    }
    const remove = (index)=>{
      setStor(prev=>prev.filter((_,i)=>i!==index))
    };
    const handlSubmit = async  (e)=>{
      e.preventDefault();
      console.log("me");
      try{
        console.log("kon");
       await axios.post("http://127.0.0.1:5000/education",
        {userId,
        school,
        degree,
        field,
        startYear,
        endYear,
        stor}


        );
        setOpen(false);
        alert("sucessfully inserted");
        
      }
      catch(err){
        alert("not insert the data");
      }
    }
    return (
        <>
         <div onClick={click}><AddIcon /></div>
         {open && (<div className="bg-white border rounded mt-2  max-md:w-[90%]"
          style={{
            position: 'absolute',
            top: `${position}`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            
            
            padding: '10px',
          }}>
  <div className="flex items-center justify-between mx-4 border-b-[1px] border-gray-400 my-4 ">
            <h1 className="text-black text-xl font-medium my-2">Add Education</h1>
            <div className="my-2" onClick={click2}><ClearIcon /></div>
          </div>
          <div className="h-[300px] overflow-y-scroll scroll-ms-2">
          <h2 className="mx-5 my-2 text-black text-lg">Where do you currently work?</h2>
          <p className=" ml-3 text-[10px] text-gray-400 my-1">*indicates required</p> 
          <h3 className="ml-4 text-base text-black">School*</h3>
          <input placeholder="school" type="text" value={school}  onChange = {(e)=>setSchool(e.target.value)} maxLength="200" className="mx-3 mt-2 border-[1px] border-gray-400 rounded-3xl w-[90%]" required = "true"/>
          
 
          <h3 className="ml-4 text-base text-black">Degree*</h3>
          <input placeholder="Ex Bachelaor" type="text" value={degree} onChange = {(e)=>setDegree(e.target.value)} maxLength="200" className="mx-3 mt-2 border-[1px] border-gray-400 rounded-3xl w-[90%]" required = "true"/>
          <h3 className="ml-4 text-base text-black">Field of Study</h3>
          <input placeholder="Ex:Buisness" type="text" value={field} onChange = {(e)=>setField(e.target.value)} maxLength="200" className="mx-3 mt-2 border-[1px] border-gray-400 rounded-3xl w-[90%]" required = "true"/>
          
          <div className="flex items-center justify-around mx-2 my-2">
          <div>            <h3>Start Date*</h3>
          <div className="mr-3 my-2 border-[1px] text-center border-gray-400 rounded-3xl w-[100%]">
          <select className="border-none">
          {start.map((item)=>(
          <option value={item}>{item}</option>
          ))}
                  
               
          </select>
          </div>
          </div>
          <div className="mt-6">            
          <div className="mr-3 my-2 border-[1px] text-center border-gray-400 rounded-3xl w-[100%]">
          <select className="border-none" onChange = {(e)=>setStartYear(e.target.value)}>
          {end.map((item)=>(
          <option value={item}>{item}</option>
          ))}
                  
               
          </select>
          </div>
          </div>
            </div>
            <div className="flex items-center justify-around mx-2 my-2">
          <div>            <h3>End Date*</h3>
          <div className="mr-3 my-2 border-[1px] text-center border-gray-400 rounded-3xl w-[100%]">
          <select className="border-none">
          {start.map((item)=>(
          <option value={item}>{item}</option>
          ))}
                  
               
          </select>
          </div>
          </div>
          <div className="mt-6">            
          <div className="mr-3 my-2 border-[1px] text-center border-gray-400 rounded-3xl w-[100%]">
          <select className="border-none" onChange = {(e)=>setEndYear(e.target.value)}>
          {end.map((item)=>(
          <option value={item}>{item}</option>
          ))}
                  
               
          </select>
          </div>
          </div>
            </div>
        
          <h3 className="ml-4 text-base text-black">Grade</h3>
          <input placeholder="" type="text" maxLength="200" className="mx-3 mt-2 border-[1px] border-gray-400 rounded-3xl w-[90%]" required = "true"/>
          <h3 className="ml-4 text-base text-black">Activities and Society</h3>
          <textarea id="message" name="message" rows="4" cols="50"></textarea>
          <h3 className="ml-4 text-base text-black">Description</h3>
          <textarea id="message" name="message" rows="4" cols="50"></textarea>
          <h3 className="ml-4 text-base text-blue-500">Skills</h3>
          <div className="grid grid-cols-3 gap-[4px]">
          {stor.length > 0 && stor?.map((item,index)=>( 
            <div className="flex justify-between" key={index}>
               
                <ClearIcon  onClick = {()=>remove(index)} />
                <p >{item}</p>
            </div>
            ))}
          </div>
       
          {!show ?(
          <div className="flex gap-2 mx-3 my-4 text-blue-500 border-[1px] border-blue-500 rounded-3xl w-[30%] cursor-pointer" onClick={()=>setShow(true)}>
 <AddIcon/>
    <h2 >Add Skills</h2>
 </div>):(
 <select className="w-[90%] mx-3 my-4 rounded-xl border-[2px] border-gray-400" onChange={valuechange}>
 {rap?.map((item)=>(
  <option value={item?.titles}>{item?.titles}</option>
  ))}
 </select>)}
 <h3 className="ml-4 text-base text-blue-500">Media</h3>
 <div className="grid grid-cols-3 gap-[4px]">
            <div className="flex justify-between gap-2   ">
               
                <ClearIcon  />
                <p >Softwre Engineer</p>
            </div>
          </div>
          <div className="flex gap-2 mx-3 my-4 text-blue-500 border-[1px] border-blue-500 rounded-3xl w-[30%]">
 <AddIcon/>
    <h2>Add Media</h2>
 </div>
 <div className="border-b-[1px] border-gray-400 my-4"></div>
            <button className="rounded-full bg-blue-700 text-white text-base float-right mx-3 p-3" onClick={handlSubmit}>Save</button>
 </div>
 </div>
 )}
        </>
    )
}
export default Education;
import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
const Skills = ({position})=>{
    const [open,setOpen] = useState(false);
    const click = ()=>{
        setOpen(!open);
    }
    const click2 = ()=>{
        setOpen(false);
    }

    return (
        <>
<div onClick={click}><AddIcon /></div>
   {open && (<div className="bg-white border rounded mt-2 max-md:w-[90%]"
          style={{
            position: 'absolute',
            top:`${position}`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
           
              
            
            padding: '10px',
          }}>
  <div className="flex items-center justify-between mx-4 border-b-[1px] border-gray-400 my-4 ">
            <h1 className="text-black text-xl font-medium my-2 max-md:text-xs">Add Licenses & certifications</h1>
            <div className="my-2" onClick={click2}><ClearIcon /></div>
          </div>
          <div className="h-[300px] overflow-y-scroll scroll-ms-2">
        
          <p className=" ml-3 text-[10px] text-gray-400 my-1">*indicates required</p> 
          <h3 className="ml-4 text-base text-black">Industry*</h3>
          <input placeholder="" type="text" maxLength="200" className="mx-3 mt-2 border-[1px] border-gray-400 rounded-3xl w-[90%]" required = "true"/>
          <div className="border-[1px] border-gray-400 rounded-xl mx-3 my-3">
          <div className="flex justify-between mx-3 my-3">
          <h5 className="max-md:text-[10px]">Suggested based on your profile</h5>
            <ClearIcon/>
          </div><div className="grid grid-cols-4 gap-2 mx-5 my-3">
          <div className="mx-3 my-2 text-gray-500 border-[1px] border-gray-400 rounded-xl">
 
    <h2 className="text-center my-[4px] mx-1 font-bold max-md:text-xs max-md:font-normal">Add Skills</h2>
 </div>
          </div>
          </div>
          <div className="border-b-[1px] border-gray-400 my-4"></div>
            <button className="rounded-full bg-blue-700 text-white text-base float-right mr-10 p-3">Save</button>
          </div>
          </div>
   )}
        </>
    )
}
export default Skills;
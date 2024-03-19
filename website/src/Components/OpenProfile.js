import React from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
const OpenProfile = ({position})=>{
    const [open1,setOpen1] = useState(false);
    const click2 = ()=>{
        setOpen1(false);
    }
    
    const click = ()=>{
        setOpen1(!open1);
    }
    return (
        <>
        <div onClick={click}><BorderColorIcon /></div>
        {open1 && (
            <div className="bg-white border rounded mt-2  max-md:w-[90%]"
          style={{
            position: 'absolute',
            top: "50%",
            left: '50%',
            transform: 'translate(-50%, -50%)',
            
            
            padding: '10px',
          }}>
        <div className="flex items-center justify-between mx-4 border-b-[1px] border-gray-400 my-4 ">
            <h1 className="text-black text-xl font-medium my-2">Edit Job Preferences</h1>
            <div className="my-2" onClick={click2}><ClearIcon /></div>
            </div>
            <div className="h-[300px] overflow-y-scroll scroll-ms-2">
          <p className=" ml-3 text-[10px] text-gray-400 my-1">*indicates required</p> 
        
          <h2 className="text-gray-500 text-base font-medium my-2 ml-2">Job titles*</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex justify-between gap-2 mx-2 border-[1px] border-gray-400 rounded-xl ">
                <p className="mx-2">Softwre Engineer</p>
                <ClearIcon  className="mx-2"/>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
          <div className="flex gap-2 mx-3 my-4 text-blue-500 border-[1px] border-blue-500 rounded-3xl p-2">
 <AddIcon/>
    <h2>Add New Position</h2>
 </div>
 <div></div>
 <div></div>
 </div>
 <h2 className="text-gray-500 text-base font-medium my-2 ml-2">Job titles*</h2>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex justify-between gap-2 mx-2 border-[1px] border-gray-400 rounded-xl ">
                <p className="mx-2 text-[10px]">Softwre Engineer</p>
                <ClearIcon  className="mx-2"/>
            </div>
          </div>
          <h2 className="text-gray-500 text-base font-medium my-2 ml-2">Job titles*</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex justify-between gap-2 mx-2 border-[1px] border-gray-400 rounded-xl ">
                <p className="mx-2">Softwre Engineer</p>
                <ClearIcon  className="mx-2"/>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
          <div className="flex gap-2 mx-3 my-4 text-blue-500 border-[1px] border-blue-500 rounded-3xl p-2">
 <AddIcon/>
    <h2>Add New Position</h2>
 </div>
 <div></div>
 <div></div>
 </div>
 <h2 className="text-gray-500 text-base font-medium my-2 ml-2">Job titles*</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex justify-between gap-2 mx-2 border-[1px] border-gray-400 rounded-xl ">
                <p className="mx-2">Softwre Engineer</p>
                <ClearIcon  className="mx-2"/>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
          <div className="flex gap-2 mx-3 my-4 text-blue-500 border-[1px] border-blue-500 rounded-3xl p-2">
 <AddIcon/>
    <h2>Add New Position</h2>
 </div>
 <div></div>
 <div></div>
 </div>
 <h3 className="text-gray-500 text-base font-medium my-2 ml-2">Start Date</h3>
        
          <div className="flex justify-items-start gap-1 ml-4">
          <div><PanoramaFishEyeIcon /></div>
            <p>Immediately, I am actively applying</p>
            </div>
            <div className="flex justify-items-start gap-1 ml-4">
            <div><PanoramaFishEyeIcon /></div>
                <p>Flexible, I am casually looking</p>
            </div>
          
 <h2 className="text-gray-500 text-base font-medium my-2 ml-2">Employment types</h2>
 <div className="grid grid-cols-4 gap-2">
            <div className="flex justify-between gap-2 mx-2 border-[1px] border-gray-400 rounded-xl ">
                <p className="mx-2">Softwre Engineer</p>
                <ClearIcon  className="mx-2"/>
            </div>
          </div>
          <p className="mx-4 my-3 text-xs text-gray-400">Visibility (who can view you’re open to work) </p>
          <div className=" mt-5 flex flex-wrap gap-2">
                <div className="basis-[10%] text-blue-500 ml-3 my-2"><PanoramaFishEyeIcon /></div>
               
                <div className="basis-[50%]  my-2">
                <p className="text-base text-gray-400">Recruiters only</p>
                    <p className="text-[11px] text-gray-400">Limited to people using LinkedIn Recruiter
While we take steps not to show recruiters at your current company, we can’t guarantee complete privacy.</p>
                </div>
                <div className="basis-[10%] ml-3 my-2">
                    <img src="" alt="" />
                </div>
            </div>
            <div className=" mt-5 flex flex-wrap gap-2">
                <div className="basis-[10%] text-blue-500 ml-3 my-2"><PanoramaFishEyeIcon /></div>
               
                <div className="basis-[50%]  my-2">
                <p className="text-base text-gray-400">All LinkedIn members</p>
                    <p className="text-[11px] text-gray-400">Includes recruiters and people at your current company
This selection adds the #OpenToWork photo frame.</p>
                </div>
                <div className="basis-[10%] ml-3 my-2">
                    <img src="" alt="" />
                </div>
            </div>
            <h4 className="ml-4 text-blue-500 text-base font-medium my-2">Learn more about your privacy</h4>
            <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3"></div>
          <div className="flex justify-between mx-3 my-2"> 
          <h2>Delete</h2>           
           <button className="rounded-full bg-blue-700 text-white text-base float-right mx-3 p-2">Save</button>
          </div>

          </div>
          </div>
        )}

        </>
    )
}
export default OpenProfile;
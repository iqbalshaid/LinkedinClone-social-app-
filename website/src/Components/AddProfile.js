import React from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Education from "./Education";
const AddProfile = ({position,userId})=>{
    const [open1,setOpen1] = useState(false);
    const [open,setOpen] = useState(false);
    const [open2,setOpen2] = useState(false);
    const [open3,setOpen3] = useState(false);
    console.log(userId,"addprofile");
    const click1 = ()=>{
        setOpen1(!open1);
    }
    const click3 = ()=>{
        setOpen2(!open2);
    }
    const click4 = ()=>{
        setOpen3(!open3);
    }
    const click5 = ()=>{
        setOpen(!open);
    }
    const click2 = ()=>{
        setOpen1(false);
    }
    
    return (
        <>
        <div onClick={click1}>Add Profile Section</div>
         {open1 && (
                        <div className="bg-white border rounded mt-2  max-md:w-[90%]"
          style={{
            position: 'absolute',
            top: `${position}`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            
            
            padding: '10px',
          }}>
 <div className="flex items-center justify-between mx-4  my-4 ">
            <h1 className="text-black text-xl font-medium my-2">Add To Profile</h1>
            <div className="my-2" onClick={click2}><ClearIcon /></div>
          </div>
          <div className="border-[1px] border-gray-400 rounded-3xl mx-5 my-3"></div>
          <div className="flex items-center justify-between mx-4  my-4 ">
            <h1 className="text-black text-xl font-medium my-2">Core</h1>
            <div className="my-2" onClick={click3}><KeyboardArrowDownIcon /></div>
          </div>
          { open2 && (<div>
            <p className="text-gray-400 text-[10px] ml-4">Start with the basics. Filling out these sections will help you be discovered by recruiters <br />
            and people you may know</p>
            
            <h2 className="text-gray-400 text-sm ml-4">Add education</h2>
            
            <div className="border-[1px] border-gray-400 rounded-3xl mx-5 my-3"></div>
            <h2 className="text-gray-400 text-sm ml-4">Add position</h2>
            <div className="border-[1px] border-gray-400 rounded-3xl mx-5 my-3"></div>
            <h2 className="text-gray-400 text-sm ml-4">Add services</h2>
            <div className="border-[1px] border-gray-400 rounded-3xl mx-5 my-3"></div>
            <h2 className="text-gray-400 text-sm ml-4">Add career break</h2>
            <div className="border-[1px] border-gray-400 rounded-3xl mx-5 my-3"></div>
            <h2 className="text-gray-400 text-sm ml-4">Add skills</h2>
            
            </div>
          )}
          <div className="border-[1px] border-gray-400 rounded-3xl mx-5 my-3"></div>
          <div className="flex items-center justify-between mx-4  my-4 ">
            <h1 className="text-black text-xl font-medium my-2">Recommended</h1>
            <div className="my-2" onClick={click4}><KeyboardArrowDownIcon /></div>
          </div>
          {open3 && (<div>
            <p className="text-gray-400 text-[10px] ml-4">Start with the basics. Filling out these sections will help you be discovered by recruiters <br />
            and people you may know</p>
            <h2 className="text-gray-400 text-sm ml-4">Add featured</h2>
            <div className="border-[1px] border-gray-400 rounded-3xl mx-5 my-3"></div>
            <h2 className="text-gray-400 text-sm ml-4">Add licens & certification</h2>
            <div className="border-[1px] border-gray-400 rounded-3xl mx-5 my-3"></div>
            <h2 className="text-gray-400 text-sm ml-4">Add projects</h2>
            <div className="border-[1px] border-gray-400 rounded-3xl mx-5 my-3"></div>
            <h2 className="text-gray-400 text-sm ml-4">Add courses</h2>
            <div className="border-[1px] border-gray-400 rounded-3xl mx-5 my-3"></div>
            <h2 className="text-gray-400 text-sm ml-4">Add recommendation</h2>
            
            </div>
          )}
          <div className="border-[1px] border-gray-400 rounded-3xl mx-5 my-3"></div>
          <div className="flex items-center justify-between mx-4  my-4 ">
            <h1 className="text-black text-xl font-medium my-2">Additional</h1>
            <div className="my-2" onClick={click5}><KeyboardArrowDownIcon /></div>
          </div>
          {open && (<div>
            <p className="text-gray-400 text-[10px] ml-4">Start with the basics. Filling out these sections will help you be discovered by recruiters <br />
            and people you may know</p>
            <h2 className="text-gray-400 text-sm ml-4">Add volunteer experiences</h2>
            <div className="border-[1px] border-gray-400 rounded-3xl mx-5 my-3"></div>
            <h2 className="text-gray-400 text-sm ml-4">Add publication</h2>
            <div className="border-[1px] border-gray-400 rounded-3xl mx-5 my-3"></div>
            <h2 className="text-gray-400 text-sm ml-4">Add patents</h2>
            <div className="border-[1px] border-gray-400 rounded-3xl mx-5 my-3"></div>
            <h2 className="text-gray-400 text-sm ml-4">Add honours & awards</h2>
            <div className="border-[1px] border-gray-400 rounded-3xl mx-5 my-3"></div>
            <h2 className="text-gray-400 text-sm ml-4">Add tests</h2>
            <div className="border-[1px] border-gray-400 rounded-3xl mx-5 my-3"></div>
            <h2 className="text-gray-400 text-sm ml-4">Add languages</h2>
            <div className="border-[1px] border-gray-400 rounded-3xl mx-5 my-3"></div>
            <h2 className="text-gray-400 text-sm ml-4">Add organizatios</h2>
            </div>
          )}
          </div>)}
          
        </>
    )
}
export default AddProfile;
import React, { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
const Addposition = ({position})=>{
    const [open,setOpen] = useState(false);
    const click = ()=>{
        setOpen(!open);
    }
    const click2 = ()=>{
        setOpen(false);
    }
    
    return (
        <>
         <button className="text-gray-400 text-center mx-4 my-2" onClick={click}>Add position</button>
         {open && (<div className="bg-white border rounded mt-2  max-md:w-[90%]"
          style={{
            position: 'absolute',
            top: `${position}`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            
            
            padding: '10px',
          }}>
  <div className="flex items-center justify-between mx-4 border-b-[1px] border-gray-400 my-4 ">
            <h1 className="text-black text-xl font-medium my-2">Add Experiences</h1>
            <div className="my-2" onClick={click2}><ClearIcon /></div>
          </div>
          <div className="h-[300px] overflow-y-scroll scroll-ms-2">
          <h2 className="mx-5 my-2 text-black text-lg">Where do you currently work?</h2>
          <p className=" ml-3 text-[10px] text-gray-400 my-1">*indicates required</p> 
          <h3 className="ml-4 text-base text-black">Industry*</h3>
          <input placeholder="" type="text" maxLength="200" className="mx-3 mt-2 border-[1px] border-gray-400 rounded-3xl w-[90%]" required = "true"/>
          <p className="text-gray-400 mt-4 text-sm ml-4">Education</p>
 <select className="mx-3 my-1 border-[1px] border-gray-400 rounded-3xl w-[90%]">
          
          <option>India</option>
   <option>India</option>
   <option>India</option>
   <option>India</option>
   <option>India</option>
   <option>India</option>
      
 </select>
 <p className="text-gray-400 text-sm ml-4">Learn more about <span className="text-blue-500">employment types.</span></p>
          <h3 className="ml-4 text-base text-black">Industry*</h3>
          <input placeholder="" type="text" maxLength="200" className="mx-3 mt-2 border-[1px] border-gray-400 rounded-3xl w-[90%]" required = "true"/>
          <h3 className="ml-4 text-base text-black">Industry*</h3>
          <input placeholder="" type="text" maxLength="200" className="mx-3 mt-2 border-[1px] border-gray-400 rounded-3xl w-[90%]" required = "true"/>
          <h3 className="ml-4 text-base text-black">Industry*</h3>
          <input placeholder="" type="text" maxLength="200" className="mx-3 mt-2 border-[1px] border-gray-400 rounded-3xl w-[90%]" required = "true"/>
          <div className="my-2 ml-1 flex justify-items-start gap-2">
            <input type="checkbox"  className="rounded-full ml-3"/>
            <h2>Show education in my intro</h2></div>
          <div className="flex items-center justify-items-start mx-2 my-2">
          <div>            <h3>Start Date*</h3>
          <input placeholder="Start Date" type="number" required = "true" className="mr-3 my-2 border-[1px] text-center border-gray-400 rounded-3xl w-[90%]"/>
          </div>
          <div className="mt-6">            
          <input placeholder="Start Year" type="number" required = "true" className="mr-3 my-2 border-[1px] text-center border-gray-400 rounded-3xl w-[90%]"/>
          </div>
            </div>
            <div className="flex items-center justify-items-start mx-2 my-2">
          <div>            <h3>End Date*</h3>
          <input placeholder="End Date" type="number" required = "true" className="mr-3 my-2 border-[1px] text-center border-gray-400 rounded-3xl w-[90%]"/>
          </div>
          <div className="mt-6">            
          <input placeholder="End Year" type="number" required = "true" className="mr-3 my-2 border-[1px] text-center border-gray-400 rounded-3xl w-[90%]"/>
          </div>
            </div>
        
          <h3 className="ml-4 text-base text-black">Industry*</h3>
          <input placeholder="" type="text" maxLength="200" className="mx-3 mt-2 border-[1px] border-gray-400 rounded-3xl w-[90%]" required = "true"/>
        <p>LinkedIn uses industry information to provide more relevant recommendations</p>
          <p className="text-gray-400 text-sm mx-2 my-3">Learn more about 
 <span className="text-blue-500 text-sm"> industry options</span></p>  
 <div className="border-b-[1px] border-gray-400 my-4"></div>
            <button className="rounded-full bg-blue-700 text-white text-base float-right mx-3 p-3">Save</button>
 </div>
 </div>
 )}
        </>
    )
}
export default Addposition;
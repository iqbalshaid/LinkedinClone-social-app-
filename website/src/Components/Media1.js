import React, { useContext } from "react";
import { useState } from "react";
import CollectionsIcon from '@mui/icons-material/Collections';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ClearIcon from '@mui/icons-material/Clear';
import axios from "axios"
import { userType } from "../UserContext";
const Media1 = ()=>{
  const {userId} = useContext(userType);
    const [open1,setOpen1] = useState(false);
    const click1 = ()=>{
        setOpen1(!open1);
    }
    const click2 = ()=>{
        setOpen1(false);
    }
    const [files,setFiles] = useState(null);
    const handlesubmit = (e)=>{
       const file = e.target.files[0];
       setFiles(file);
      
    }
    // console.log(files.name,"sh");
    if (files) {
      console.log(files.name); // Access the name property only if files is not null or undefined
      
    }
    const das = localStorage.getItem("image");
    const upload = async (e)=>{
      e.preventDefault();
      const formData = new FormData();
formData.append('image', files);
formData.append('userId',userId);// Assuming 'file' is the File object you want to upload

 if(das==null){ await axios.post('http://127.0.0.1:5000/upload', formData).then(response => {
  // Handle response
  alert("upload image successfully");
  setOpen1(false);
  localStorage.setItem("image",1);
  
}).catch(error => {
  // Handle error
  console.log("not upload img");
})}
else{
  await axios.put(`http://127.0.0.1:5000/upload/${userId}`, formData).then(response => {
  // Handle response
  alert("upload image successfully");
  setOpen1(false);
  
}).catch(error => {
  // Handle error
  console.log("not upload img");}
)}
    }
    return (
        <>
  <div className="flex items-center gap-3 my-5 max-[400px]:gap-1 cursor-pointer hover:bg-[#abd1d2]" onClick={click1}>
  <CameraAltIcon />
                    </div>
                    {open1 && (
                        <div className="bg-white border rounded mt-2  max-md:w-[90%]"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            
            
            padding: '10px',
          }}>
                                 <div className="flex items-center justify-between mx-4 border-b-[1px] border-gray-400 my-4 ">
            <h1 className="text-black text-xl font-medium my-2">Editor</h1>
            <div className="my-2" onClick={click2}><ClearIcon /></div>
          </div>
          <div className="my-4 h-[50%] w-[100%] border-b-[1px] border-gray-400  bg-[url(https://thenextscoop.com/wp-content/uploads/2020/01/7-LinkedIn-Content-Mistakes-You-Should-Avoid-in-2020.png)]">
          <div className="text-center py-[5%]">
            <h3>Select Files from the begining </h3>
            <p className="text-[10px] text-gray-300 mt-[4px]">Share images or a single video in your post.</p>
            <label htmlFor="fileInput" className="rounded-full border-1 bg-[#00CED1] text-white text-base my-2 cursor-pointer">
  Update From Computer
  <input id="fileInput" type="file"  name = "image" style={{ display: 'none' }} accept="image/*" onChange={handlesubmit} />
</label>

            </div>

          </div>
          <div className="border-b-[1px] border-gray-400 my-4"></div>
            <button className={`rounded-full ${files?"bg-blue-700":"bg-gray-400"} text-white text-base float-right mx-3 p-3`} onClick={upload}>Next</button>
          
                            </div>
                    )}
        </>
    )
}
export default Media1;
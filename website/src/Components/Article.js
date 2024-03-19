import React from "react";
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import FeedIcon from '@mui/icons-material/Feed';
const Article = ()=>{
    const [open1,setOpen1] = useState(false);
    const click1 = ()=>{
        setOpen1(!open1);
    }
    const click2 = ()=>{
        setOpen1(false);
    }
    return (
        <>
  <div className="flex items-center gap-3 max-[400px]:gap-1 cursor-pointer hover:bg-[#abd1d2]" onClick={click1}>
                        <div className="text-red-400"><FeedIcon /></div>
                        <h3 className="text-gray-400 text-base">Write Article</h3>
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
            <button type="file" className="rounded-full border-1 bg-[#00CED1] text-white text-base my-2 ">Update From Computer</button>
            </div>
          </div>
          <div className="border-b-[1px] border-gray-400 my-4"></div>
            <button className="rounded-full bg-blue-700 text-white text-base float-right mx-3 p-3">Next</button>
          
                            </div>
                    )}
        </>
    )
}
export default Article;
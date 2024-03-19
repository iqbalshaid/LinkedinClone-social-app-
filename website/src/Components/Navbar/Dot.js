import React, { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FlagIcon from '@mui/icons-material/Flag';
import CancelIcon from '@mui/icons-material/Cancel';
import ClearIcon from '@mui/icons-material/Clear';
const Dot = ({data})=>{
    
   const click = ()=>{
    console.log("s");
      return data+1;
   }
    return (
        <>
       <div>
       <div className="float-right mr-2 mt-1 mb-1 cursor-pointer" onClick={click}><ClearIcon /></div>
        <ul className=" my-5 ml-5">
        <li className="flex justify-items-start gap-2 mt-2"><div><BookmarkIcon /></div><h2>Save</h2></li>
                    <li className="flex justify-items-start gap-2 mt-2"><div><InsertLinkIcon /></div><h2>Copy Link to Post</h2></li>
                    <li className="flex justify-items-start gap-2 mt-2"><div><CodeOffIcon /></div><h2>Embed this post</h2></li>
                    <li className="flex justify-items-start gap-2 mt-2"><div><VisibilityOffIcon /></div><h2>I don't want to see this</h2></li>
                    <li className="flex justify-items-start gap-2 mt-2"><div><CancelIcon /></div><h2>Unfollow Md shahid</h2></li>
                    <li className="flex justify-items-start gap-2 mt-2"><div><FlagIcon /></div><h2>Report Post</h2></li>
        </ul>
       </div>
        </>
    )
}
export default Dot;
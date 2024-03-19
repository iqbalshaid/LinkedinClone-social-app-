import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyIcon from '@mui/icons-material/Key';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Navbar from "../Components/Navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
const Notification = ()=>{
    const[position,setPosition] = useState(0);
    useEffect(()=>{
        function handleScroll() {
            const newPos = window.scrollY;
            setPosition(newPos => newPos+500);
            console.log(newPos);
          }
      
          // Add event listener when the component mounts
          window.addEventListener('scroll', handleScroll);
      
          // Cleanup function to remove event listener when the component unmounts
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
},[])
    return (
<>
<Navbar position = {position} />
    <div className="flex flex-wrap gap-5">
    <div></div>
        <div className="float-right basis-[25%] bg-white border-[1px] border-gray-400 rounded-3xl mt-8 h-36">
        <p className="text-black text-base  my-2 p-1">Manage</p>  
              <p className="text-black text-base  p-1 my-2">Notification</p>
              <p className="text-blue-500 text-base p-1  my-2">View Setting</p>
        </div>
        <div className="basis-[35%] mt-8">
            <div className=" bg-white rounded-2xl  border-[1px] border-gray-400">
                <ul className="flex items-center justify-start gap-3 ml-4">
                    <li className="text-black text-base font-medium my-4 rounded-2xl  border-[1px] border-gray-400 p-3">All</li>
                    <li className="text-black text-base font-medium my-4 rounded-2xl  border-[1px] border-gray-400 p-3">My Posts</li>
                    <li className="text-black text-base font-medium my-4 rounded-2xl  border-[1px] border-gray-400 p-3">Mentioneds</li>
                </ul>
            </div>
            <div className="bg-blue-300 mt-5 flex flex-wrap gap-3 rounded-xl">
                <div className="basis-[10%] text-blue-500 ml-3 my-2"><FiberManualRecordIcon /></div>
                <div className="basis-[10%] ml-3 my-2">
                    <img src="" alt="" />
                </div>
                <div className="basis-[50%] ml-3 my-2">
                    <p>History is an academic discipline which uses a narrative to describe,<br />
                     examine, question, and analyze past events, and investigate their patterns <br />
                     of cause and effect.[6][7] Historians debate which narrative best explains an<br />
                     event, as well as the significance of different causes and effects. Historians <br />
                     debate the nature of history as an</p>
                </div>
                <div className="basis-[10%]  my-2 text-right">
                    <p className="text-gray-400 text-xs">19m</p>
                    <div className="my-[1px]"><MoreHorizIcon /></div>
                </div>
            </div>
        </div>
        <div>
        <div className="bg-white rounded-3xl border-2 border-gray-500 my-10 shadow-xl basis-[25%]">
                                  <p className="float-right mr-3">Ad <MoreHorizIcon /></p>
                                  <h4 className="mt-4 mx-4">MD shahid,unlock your full potential with linkedin premium</h4>
                                  <div className="flex items-center justify-around">
                                    <img src = "" alt = "" />
                                    <div className="text-blue-500 h-12 w-12"><KeyIcon /> </div>

                                  </div>
                                  <h4 className="mt-4 mx-4">See Who's view Your Profile in the Last 90 days</h4>
                                  <div className="text-center my-5">
                                  <button className="text-center p-3 border-2 border-blue-400 rounded-3xl text-blue-500 font-semibold">Follow</button>
                                  </div>
           
                                  </div>
                                  <div>
                                    
                                        <ul className="flex items-center justify-around my-3">
                                            <li className="text-black font-medium">About</li>
                                            <li className="text-black font-medium">Accessibility</li>
                                            <li className="text-black font-medium">Help center</li>
                                        </ul>
                                        <ul className="flex items-center justify-around my-3">
                                            <li className="text-black font-medium">Privacy & Terms
                                            <select className="bg-white">
                                            <option></option><option>Privacy Policy</option>
                                            <option>User Aggreement</option>
                                            <option>Pages Terms</option>
                                            <option>Cooking Policies</option>
                                            <option>Copyright Policy</option></select></li>
                                            <li className="text-black font-medium">Ad Choices</li>
                                            
                                        </ul>
                                        <ul className="flex items-center justify-around my-3">
                                            <li className="text-black font-medium">Advertising</li>
                                            <li className="text-black font-medium">Business Services 
                                           </li>
                                    
                                        </ul>
                                        <ul className="flex items-center justify-around my-3">
                                            <li className="text-black font-medium">Get The Linkedin App</li>
                                            <li className="text-black font-medium">More</li>
                                            
                                        </ul>
                                        <div className="flex items-center justify-around"><h2 className="text-blue-500 text-xl font-medium">Linkedin<LinkedInIcon/></h2>
                                            <span>LinkedIn Corporation © 2024</span>
                                        </div>
                                    
                                  </div>
                                  </div>
        
    </div>
</>
    )
}
export default Notification;
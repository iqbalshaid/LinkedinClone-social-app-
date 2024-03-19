import React from "react";
import GroupsIcon from '@mui/icons-material/Groups';
import LayersIcon from '@mui/icons-material/Layers';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ClearIcon from '@mui/icons-material/Clear';
import TagIcon from '@mui/icons-material/Tag';
import PersonIcon from '@mui/icons-material/Person';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyIcon from '@mui/icons-material/Key';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import Navbar from "../Components/Navbar/Navbar";
import { useEffect } from "react";
import { useState } from "react";
const Network = ()=>{
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
           <div className="flex items-center justify-items-start mt-20">
            <div className="flex justify-around">
                <div></div>
                <div className="float-right max-lg:hidden">
                <ul className=" my-5 mx-5 bg-white border-[1px] border-gray-400 rounded-3xl mt-8 h-auto">
        <li className="flex justify-between gap-2 mt-2 mx-2"><div className="flex justify-items-start gap-2 mx-3"><div><GroupsIcon /></div><h2>Connections</h2></div><p>23</p></li>
                    <li className="flex justify-between gap-2 mt-2 mx-2"><div className="flex justify-items-start gap-2 mx-3"><div><ContactPageIcon /></div><h2>Contacts</h2></div><p>23</p></li>
                    <li className="flex justify-between gap-2 mt-2 mx-2"><div className="flex justify-items-start gap-2 mx-3"><div><PersonIcon /></div><h2>Following & Followers</h2></div><p>23</p></li>
                    <li className="flex justify-between gap-2 mt-2 mx-2"><div className="flex justify-items-start gap-2 mx-3"><div><GroupsIcon /></div><h2>Groups</h2></div><p>23</p></li>
                    <li className="flex justify-between gap-2 mt-2 mx-2"><div className="flex justify-items-start gap-2 mx-3"><div><CalendarMonthIcon /></div><h2>Events</h2></div><p>23</p></li>
                    <li className="flex justify-between gap-2 mt-2 mx-2"><div className="flex justify-items-start gap-2 mx-3"><div><LayersIcon /></div><h2>Pages</h2></div><p>23</p></li>
                    <li className="flex justify-between gap-2 mt-2 mx-2"><div className="flex justify-items-start gap-2 mx-3"> <div><NewspaperIcon /></div><h2>Newsletters</h2></div><p>23</p></li>
                    <li className="flex justify-between gap-2 mt-2 mx-2"><div className="flex justify-items-start gap-2 mx-3"> <div><TagIcon /></div><h2>Hastags</h2></div><p>23</p></li>
        </ul>
        <div className="bg-white mx-5 rounded-3xl border-2 border-gray-500 my-2 shadow-xl basis-[25%]">
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
        </div>
               
            </div>
        
            <div className="my-5 mx-5 bg-white border-[1px] border-gray-400 rounded-3xl mt-8 h-auto w-[55%] max-lg:w-[90%]">
                <div className="flex justify-between mx-4 my-3">
                    <p>People you may know in Greater Raipur Area</p>
                    <span>See all</span>
                </div>
                <div className="grid grid-cols-4 gap-3 max-md:grid-cols-2 max-md:gap-4 max-[1100px]:grid-cols-3">     
                           <div className="text-center p-2 my-3 mx-3  bg-white border-[1px] border-gray-400 rounded-3xl">
                           <div className="float-right"><CancelIcon /></div>
                    <img src="" alt="" />
                    <h2 className="text-black text-sm my-2 max-md:text-[12px]">Md shahid Iqbal</h2>
                    <h4 className="text-gray-400 text-[10px] my-1 max-lg:text-[7px]">Software Developer</h4>
                    <p className="text-gray-400 text-[10px] my-3 max-lg:text-[7px]">Mutual Connections</p>
                    <button className="text-blue-500 border-[2px] border-blue-500 rounded-3xl text-center mx-2 my-2 gap-2"><PersonAddAltIcon />Connect</button>
                </div>
              
                

            </div>
           
            </div>
            
            
            

            <div>

            </div>
           </div>
        </>
    )
}
export default Network;
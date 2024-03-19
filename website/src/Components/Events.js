import React from "react";
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import SearchIcon from '@mui/icons-material/Search';
const Events = ()=>{
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
                        <div className="text-yellow-400"><CalendarMonthIcon /></div>
                        <h3 className="text-gray-400 text-base">Events</h3>
                    </div>
                    
                    {open1 && (
                        <div className="bg-white border rounded mt-2  max-md:w-[90%]"
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            
            
            padding: '10px',
          }}>
                                 <div className="flex items-center justify-between mx-4 border-b-[1px] border-gray-400 my-4 ">
            <h1 className="text-black text-xl font-medium my-2">Create an Event</h1>
            <div className="my-2" onClick={click2}><ClearIcon /></div>
          </div>
          <div className="h-[300px] overflow-y-scroll scroll-m-2">
          <img src="https://thenextscoop.com/wp-content/uploads/2020/01/7-LinkedIn-Content-Mistakes-You-Should-Avoid-in-2020.png" className="h-44 mt-5 w-full" alt="" />
        
          <div>
          <h3 className="ml-4 text-xl text-black">Event type</h3>
          <div className="my-3 ml-4 flex items-center justify-items-start gap-3">
          <div className="flex justify-items-start gap-1">
          <div><PanoramaFishEyeIcon /></div>
            <p>Online</p>
            </div>
            <div className="flex justify-items-start gap-1">
            <div><PanoramaFishEyeIcon /></div>
                <p>Offline</p>
            </div>
          </div>
          <h3 className="ml-4 text-base text-black">Event Name*</h3>
          <input placeholder="" type="text" maxLength="75" className="mx-3 my-2 border-[1px] border-gray-400 rounded-3xl w-[90%]" required = "true"/>
          <p className="float-right mr-3 text-[10px] text-gray-400 my-2">0/75</p>
          <h3 className="ml-4 text-base text-black">TimeZone*</h3>
        
          <select className="mx-3 my-2 border-[1px] border-gray-400 rounded-3xl w-[90%]">
          
                   <option>India</option>
            <option>India</option>
            <option>India</option>
            <option>India</option>
            <option>India</option>
            <option>India</option>
            <option>India</option>
            <option>India</option>
            <option>India</option>
            <option>India</option>
            <option>India</option>
            <option>India</option>
            <option>India</option>
            <option>India</option>        
          </select>
          
          <div className="flex items-center justify-items-start mx-2 my-2">
          <div>            <h3>Start Date*</h3>
          <input placeholder="Start Date" type="number" required = "true" className="mr-3 my-2 border-[1px] text-center border-gray-400 rounded-3xl w-[90%]"/>
          </div>
          <div>            <h3>Start Time*</h3>
          <input placeholder="Start Time" type="number" required = "true" className="mr-3 my-2 border-[1px] text-center border-gray-400 rounded-3xl w-[90%]"/>
          </div>
            </div>
            <div className="my-2 ml-1 flex justify-items-start gap-2">
            <input type="checkbox"  className="rounded-full ml-3"/>
            <h2>Add end Date and Time</h2></div>
            </div>
            <div className="flex items-center justify-items-start mx-2 my-2">
          <div>            <h3>End Date*</h3>
          <input placeholder="Start Date" type="number" required = "true" className="mr-3 my-2 border-[1px] text-center border-gray-400 rounded-3xl w-[90%]"/>
          </div>
          <div>            <h3>End Time*</h3>
          <input placeholder="Start Time" type="number" required = "true" className="mr-3 my-2 border-[1px] text-center border-gray-400 rounded-3xl w-[90%]"/>
          </div>
            </div>
            <h3 className="ml-4 text-base text-black">External event Link*</h3>
          <input placeholder="" type="text" maxLength="200" className="mx-3 mt-2 border-[1px] border-gray-400 rounded-3xl w-[90%]" required = "true"/>
          <p className="float-right mr-5 text-[10px] text-gray-400 mt-[4px]">0/1,025</p>
          <h3 className="ml-4 text-base text-black">Description*</h3>
          <input placeholder="write your text" type="text" maxLength="400" className="mx-3 h-24  my-2 border-[1px] border-gray-400 rounded-3xl w-[90%]" required = "true"/>
          <p className="float-right mr-3 text-[10px] text-gray-400 mt-5">0/75</p>
          <h2 className="ml-4">Speakers</h2>
          <div className="mx-3 my-2 border-[1px] border-gray-400 rounded-3xl w-[90%] flex justify-items-start gap-2">
          <SearchIcon className="mt-3 ml-3"/>
          <input placeholder="" type="text" maxLength="60" className="border-hidden" required = "true"/>
          </div>
          <p className="ml-4 my-2 text-[10px] text-gray-400 ">Add connections to speak at the event. Speakers can join the event early andwill be 
          shown in the event’s Details section and presenter area. They cannot allow attendees <br/>
          to speak or end the event.
</p>
<p className="ml-4 my-2 text-[14px] text-gray-400 ">By continuing, you agree with <span className="text-blue-500">Linkedin's Event Policy</span></p>
<p className="ml-4 my-2 text-[14px] text-gray-400 ">Make the most of LinkedIn Events.  <span className="text-blue-500">Learn More</span></p>

          <div className="border-b-[1px] border-gray-400 my-4"></div>
            <button className="rounded-full bg-blue-700 text-white text-base float-right mx-3 p-3">Next</button>
          </div>
                            </div>
                    )}
        </>
    )
}
export default Events;
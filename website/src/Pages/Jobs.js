import React, { useState } from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyIcon from '@mui/icons-material/Key';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FlagIcon from '@mui/icons-material/Flag';
import CancelIcon from '@mui/icons-material/Cancel';
import SettingsIcon from '@mui/icons-material/Settings';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import data from "./Search";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect } from "react";
const Jobs = ()=>{
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
    const [rap,setRap] = useState(data);
    return (
        <>
        <Navbar position = {position} />
             <div className="flex flex-wrap gap-5 mt-20">
    <div></div>
        <div className="float-right basis-[25%] max-md:hidden">
        <ul className=" my-5 ml-5 bg-white border-[1px] border-gray-400 rounded-3xl mt-8 h-auto">
        <li className="flex justify-items-start gap-2 mt-2 ml-2"><div><BookmarkIcon /></div><h2>My Jobs</h2></li>
                    <li className="flex justify-items-start gap-2 mt-2 ml-2"><div><InsertLinkIcon /></div><h2>Preferences</h2></li>
                    <li className="flex justify-items-start gap-2 mt-2 ml-2"><div><CodeOffIcon /></div><h2>Skill Assesment</h2></li>
                    <li className="flex justify-items-start gap-2 mt-2 ml-2"><div><VisibilityOffIcon /></div><h2>Interview Prep</h2></li>
                    <li className="flex justify-items-start gap-2 mt-2 ml-2"><div><CancelIcon /></div><h2>Resume Builder</h2></li>
                    <li className="flex justify-items-start gap-2 mt-2 ml-2"><div><FlagIcon /></div><h2>Job Seeker guidence</h2></li>
                    <li className="flex justify-items-start gap-2 mt-2 ml-2"><div><SettingsIcon /></div><h2>Application settings</h2></li>
        </ul>
        <div className="border-[1px] ml-5 border-blue-500 rounded-3xl my-5 text-center  text-blue-500  text-xl">
        <BorderColorIcon />Post For free Job
        </div>
        </div>
        
        <div>
        {rap?.map((item,index)=>(
        <div className="basis-[35%] max-xl:basis-[60%] ml-5 mt-8 border-[1px] border-gray-400 rounded-3xl h-auto max-md:mx-8 max-md:w-full" key={index}>
        <h2 className="text-black  text-[20px] my-[3px] ml-4">Recommended For You</h2>
        <p className="text-gray-400 text-[16px] my-[3px] ml-4">Based on your profile and search history</p>
        <div className=" flex justify-around gap-3 rounded-xl">
                
                <div className=" ml-3 my-2">
                    <img src="" alt="" className="rounded-full w-10 h-10" />
                </div>
                <div className=" ml-3 my-2">
                   <h2 className="text-blue-500 text-[20px] my-[3px]">{item?.job_title}</h2>
                   <h3 className="text-gray-400 text-[16px] my-[3px]">{item?.company}</h3>
                   <h3 className="text-gray-400 text-[16px] my-[3px]">{item?.location}</h3>
                   <div className="flex justify-items-start gap-2 max-xl:gap-1">
                  <p className="text-gray-400 text-[14px] my-[3px] max-xl:text-[10px]">Promoted .</p>
                  <p className="text-gray-400 text-[12px] my-[3px] max-xl:text-[10px]">{item?.posted_time} .</p>
                 <div> <p className="text-gray-400 text-[10px] my-[3px] max-xl:text-[10px]"> <LinkedInIcon className="text-blue-400" />Easy Apply</p>
                   </div>
                   </div>
                </div>
                <div className="my-2">
                   
                    <div className="my-[1px]"><ClearIcon /></div>
                </div>
            </div>
        </div>
        ))}
        <div className="ml-6 mt-8 border-[1px] border-gray-400 rounded-3xl h-auto basis-[35%]">
            <div className="flex justify-between mx-3 my-3">
                <h2>Suggested jobs Search</h2>
                <ClearIcon />
            </div>
            
            <div className="flex justify-around gap-3 mx-2 ">
                <h3 className="border-[1px] border-gray-400 rounded-3xl text-blue-400"><SearchIcon />Remote job</h3>
                <h3 className="border-[1px] border-gray-400 rounded-3xl text-blue-400"><SearchIcon />Marketing Manager</h3>
                <h3 className="border-[1px] border-gray-400 rounded-3xl text-blue-400"><SearchIcon />hr</h3>
                </div>
                <div className="flex justify-around gap-3 mx-2 my-2">
                <h3 className="border-[1px] border-gray-400 rounded-3xl text-blue-400"><SearchIcon />legal</h3>
                <h3 className="border-[1px] border-gray-400 rounded-3xl text-blue-400"><SearchIcon />sales</h3>
                <h3 className="border-[1px] border-gray-400 rounded-3xl text-blue-400"><SearchIcon />amazon</h3>
                <h3 className="border-[1px] border-gray-400 rounded-3xl text-blue-400"><SearchIcon />google</h3>
            </div>
            
        </div>
        {rap?.map((item,index)=>(
        <div className="basis-[35%] max-xl:basis-[60%] ml-5 mt-8 border-[1px] border-gray-400 rounded-3xl h-auto max-md:mx-8 max-md:w-full" key={index}>
        <div className="flex justify-between mx-2 my-2"><div><h2 className="text-black  text-[20px] my-[3px] ml-4">Software Engineer</h2>
        <p className="text-gray-400 text-[16px] my-[3px] ml-4">Durg, Chhattisgarh, India (within 25 miles)</p></div>
        <CreateIcon />
        </div>
        <div className=" flex justify-around gap-3 rounded-xl">
                
                <div className=" ml-3 my-2">
                    <img src="" alt="" className="rounded-full w-10 h-10" />
                </div>
                <div className=" ml-3 my-2">
                   <h2 className="text-blue-500 text-[20px] my-[3px]">{item?.job_title}</h2>
                   <h3 className="text-gray-400 text-[16px] my-[3px]">{item?.company}</h3>
                   <h3 className="text-gray-400 text-[16px] my-[3px]">{item?.location}</h3>
                   <div className="flex justify-items-start gap-2 max-xl:gap-1">
                  <p className="text-gray-400 text-[14px] my-[3px] max-xl:text-[10px]">Promoted .</p>
                  <p className="text-gray-400 text-[12px] my-[3px] max-xl:text-[10px]">{item?.posted_time}.</p>
                 <div> <p className="text-gray-400 text-[10px] my-[3px] max-xl:text-[10px]"> <LinkedInIcon className="text-blue-400" />Easy Apply</p>
                   </div>
                   </div>
                </div>
                <div className="my-2">
                   
                    <div className="my-[1px]"><ClearIcon /></div>
                </div>
            </div>
        </div>
        ))}
        {rap?.map((item,index)=>(
        <div className="basis-[35%] max-xl:basis-[60%] ml-5 mt-8 border-[1px] border-gray-400 rounded-3xl h-auto max-md:mx-8 max-md:w-full" key={index}>
        <h2 className="text-black  text-[20px] my-[3px] ml-4">Still Hiring</h2>
        <p className="text-gray-400 text-[16px] my-[3px] ml-4">Jobs you may have missed</p>
       
        <div className=" flex justify-around gap-3 rounded-xl">
                
                <div className=" ml-3 my-2">
                    <img src={item?.company_url} alt="" className="rounded-full w-10 h-10" />
                </div>
                <div className=" ml-3 my-2">
                   <h2 className="text-blue-500 text-[20px] my-[3px]">{item?.job_title}</h2>
                   <h3 className="text-gray-400 text-[16px] my-[3px]">{item?.company}</h3>
                   <h3 className="text-gray-400 text-[16px] my-[3px]">{item?.location}</h3>
                   <div className="flex justify-items-start gap-2 max-xl:gap-1">
                  <p className="text-gray-400 text-[14px] my-[3px] max-xl:text-[10px]">Promoted .</p>
                  <p className="text-gray-400 text-[12px] my-[3px] max-xl:text-[10px]">{item?.posted_time} .</p>
                 <div> <p className="text-gray-400 text-[10px] my-[3px] max-xl:text-[10px]"> <LinkedInIcon className="text-blue-400" />Easy Apply</p>
                   </div>
                   </div>
                </div>
                <div className="my-2">
                   
                    <div className="my-[1px]"><ClearIcon /></div>
                </div>
            </div>
        </div>
        ))}
        <div className="basis-[35%] max-xl:basis-[60%] ml-5 mt-8 border-[1px] border-gray-400 rounded-3xl h-auto max-md:mx-8 max-md:w-full">
        <h2 className="text-black  text-[20px] my-[3px] ml-4">Hiring on your Network</h2>
        <p className="text-gray-400 text-[16px] my-[3px] ml-4">Explore relevant jobs in your network</p>
       
        <div className=" flex justify-around gap-3 rounded-xl">
                
                <div className=" ml-3 my-2">
                    <img src="" alt=""  className="rounded-full w-10 h-10"/>
                </div>
                <div className=" ml-3 my-2">
                   <h2 className="text-blue-500 text-[20px] my-[3px]">Full stack Developer</h2>
                   <h3 className="text-gray-400 text-[16px] my-[3px]">Uber</h3>
                   <h3 className="text-gray-400 text-[16px] my-[3px]">India(Remote)</h3>
                   <div className="flex justify-items-start gap-2 max-xl:gap-1">
                  <p className="text-gray-400 text-[14px] my-[3px] max-xl:text-[10px]">Promoted .</p>
                  <p className="text-gray-400 text-[12px] my-[3px] max-xl:text-[10px]">Weeks Ago .</p>
                 <div> <p className="text-gray-400 text-[10px] my-[3px] max-xl:text-[10px]"> <LinkedInIcon className="text-blue-400" />Easy Apply</p>
                   </div>
                   </div>
                </div>
                <div className="my-2">
                   
                    <div className="my-[1px]"><ClearIcon /></div>
                </div>
            </div>
        </div>
        <div className="basis-[35%] max-xl:basis-[60%] ml-5 mt-8 border-[1px] border-gray-400 rounded-3xl h-auto max-md:mx-8 max-md:w-full">
        <h2 className="text-black  text-[20px] my-[3px] ml-4">Hybrid opportunities</h2>
        <p className="text-gray-400 text-[16px] my-[3px] ml-4">Because you expressed interest in hybrid work</p>
       
        <div className=" flex justify-around gap-3 rounded-xl">
                
                <div className=" ml-3 my-2">
                    <img src="" alt=""  className="rounded-full w-10 h-10"/>
                </div>
                <div className=" ml-3 my-2">
                   <h2 className="text-blue-500 text-[20px] my-[3px]">Full stack Developer</h2>
                   <h3 className="text-gray-400 text-[16px] my-[3px]">Uber</h3>
                   <h3 className="text-gray-400 text-[16px] my-[3px]">India(Remote)</h3>
                   <div className="flex justify-items-start gap-2 max-xl:gap-1">
                  <p className="text-gray-400 text-[14px] my-[3px] max-xl:text-[10px]">Promoted .</p>
                  <p className="text-gray-400 text-[12px] my-[3px] max-xl:text-[10px]">Weeks Ago .</p>
                 <div> <p className="text-gray-400 text-[10px] my-[3px] max-xl:text-[10px]"> <LinkedInIcon className="text-blue-400" />Easy Apply</p>
                   </div>
                   </div>
                </div>
                <div className="my-2">
                   
                    <div className="my-[1px]"><ClearIcon /></div>
                </div>
            </div>
        </div>
        <div className="basis-[35%] max-xl:basis-[60%] ml-5 mt-8 border-[1px] border-gray-400 rounded-3xl h-auto max-md:mx-8 max-md:w-full">
        <h2 className="text-black  text-[20px] my-[3px] ml-4">Remote opportunities</h2>
        <p className="text-gray-400 text-[16px] my-[3px] ml-4">Because you expressed interest in remote work</p>
       
        <div className=" flex justify-around gap-3 rounded-xl">
                
                <div className=" ml-3 my-2">
                    <img src="" alt="" className="rounded-full w-10 h-10" />
                </div>
                <div className=" ml-3 my-2">
                   <h2 className="text-blue-500 text-[20px] my-[3px]">Full stack Developer</h2>
                   <h3 className="text-gray-400 text-[16px] my-[3px]">Uber</h3>
                   <h3 className="text-gray-400 text-[16px] my-[3px]">India(Remote)</h3>
                   <div className="flex justify-items-start gap-2 max-xl:gap-1">
                  <p className="text-gray-400 text-[14px] my-[3px] max-xl:text-[10px]">Promoted .</p>
                  <p className="text-gray-400 text-[12px] my-[3px] max-xl:text-[10px]">Weeks Ago .</p>
                 <div> <p className="text-gray-400 text-[10px] my-[3px] max-xl:text-[10px]"> <LinkedInIcon className="text-blue-400" />Easy Apply</p>
                   </div>
                   </div>
                </div>
                <div className="my-2">
                   
                    <div className="my-[1px]"><ClearIcon /></div>
                </div>
            </div>
        </div>
        <div className="basis-[35%] max-xl:basis-[60%] ml-5 mt-8 border-[1px] border-gray-400 rounded-3xl h-auto max-md:mx-8 max-md:w-full">
        <h2 className="text-black  text-[20px] my-[3px] ml-4">More Jobs For You</h2>
        <p className="text-gray-400 text-[16px] my-[3px] ml-4">Based on your profile and search history</p>
       
        <div className=" flex justify-around gap-3 rounded-xl">
                
                <div className=" ml-3 my-2">
                    <img src="" alt="" className="rounded-full w-10 h-10" />
                </div>
                <div className=" ml-3 my-2">
                   <h2 className="text-blue-500 text-[20px] my-[3px]">Full stack Developer</h2>
                   <h3 className="text-gray-400 text-[16px] my-[3px]">Uber</h3>
                   <h3 className="text-gray-400 text-[16px] my-[3px]">India(Remote)</h3>
                   <div className="flex justify-items-start gap-2 max-xl:gap-1">
                  <p className="text-gray-400 text-[14px] my-[3px] max-xl:text-[10px]">Promoted .</p>
                  <p className="text-gray-400 text-[12px] my-[3px] max-xl:text-[10px]">Weeks Ago .</p>
                 <div> <p className="text-gray-400 text-[10px] my-[3px] max-xl:text-[10px]"> <LinkedInIcon className="text-blue-400" />Easy Apply</p>
                   </div>
                   </div>
                </div>
                <div className="my-2">
                   
                    <div className="my-[1px]"><ClearIcon /></div>
                </div>
            </div>
        </div>
    
        </div>
        
        <div>
        <div className="bg-white rounded-3xl border-2 border-gray-500 my-10 shadow-xl basis-[25%] max-[1350px]:hidden">
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
        
    </div>
        </>
    )
}
export default Jobs;
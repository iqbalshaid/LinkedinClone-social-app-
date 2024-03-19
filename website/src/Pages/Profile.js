import React, { useEffect, useState } from "react";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GroupIcon from '@mui/icons-material/Group';
import BarChartIcon from '@mui/icons-material/BarChart';
import SearchIcon from '@mui/icons-material/Search';
import EastIcon from '@mui/icons-material/East';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyIcon from '@mui/icons-material/Key';
import PencilProfile from "../Components/PencilProfile";
import AddProfile from "../Components/AddProfile";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import OpenProfile from "../Components/OpenProfile";
import Addposition from "../Components/Addposition";
import CreatePost from "../Components/createPost";
import Skills from "../Components/Skill";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";
import { useContext } from "react";
import { userType } from "../UserContext";
import Media from "../Components/Media";
import Media1 from "../Components/Media1";
import Education from "../Components/Education";
import { Link } from "react-router-dom";
import Media2 from "../Components/media2";

const Profile = ()=>{
    const [open,setOpen] = useState(false);
    const {userId} = useContext(userType);
  //const userId = localStorage.getItem("user");
  
    const[position,setPosition] = useState(0);
    useEffect(()=>{
        function handleScroll() {
            const newPos = window.scrollY;
            setPosition(newPos);
            console.log(newPos);
          }
      
          // Add event listener when the component mounts
          window.addEventListener('scroll', handleScroll);
      
          // Cleanup function to remove event listener when the component unmounts
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
},[])
   const maxLength = 40;
    const [open1,setOpen1] = useState(false);
    const click = ()=>{
        setOpen(!open);
    }
    const click1 = ()=>{
        setOpen1(!open1);
    }
    const [profileData, setProfileData] = useState(null);
    const [profileData1, setProfileData1] = useState([]);
    const [profileData2,setProfileData2] = useState([]);
    const fetchData = async ()=>{
        try{
     const res = await axios.get(`http://127.0.0.1:5000/profile/${userId}`);
      setProfileData(res.data);
      }
      catch(err){
        console.log("error from the backend",err);
      }
    }
   
    const fetchData1 = async ()=>{
        try{
     const res = await axios.get(`http://127.0.0.1:5000/education/${userId}`);
      setProfileData1(res.data);
      console.log(res.data);
      }
      catch(err){
        console.log("error from the backend",err);
      }
    }
    const fetchData2 = async ()=>{
        try{
     const res = await axios.get(`http://127.0.0.1:5000/licens/${userId}`);
      setProfileData2(res.data);
      console.log(res.data);
      }
      catch(err){
        console.log("error from the backend",err);
      }
    }
    const [profileData3,setProfileData3] = useState("");
    const [profileData4,setProfileData4] = useState("");
    const image = localStorage.getItem("image");
    const fetchData3 = async ()=>{
        await axios.get(`http://127.0.0.1:5000/upload/${userId}`).then(response => {
            // Handle response
            setProfileData3(response.data.name);
            console.log(response.data);
          }).catch(error => {
            // Handle error
            console.log("not upload img");
          });
    }
    const fetchData4 = async ()=>{
        await axios.get(`http://127.0.0.1:5000/images/${userId}`).then(response => {
            // Handle response
            setProfileData4(response.data.name);
            console.log(response.data);
          }).catch(error => {
            // Handle error
            console.log("not upload img");
          });
    }
    useEffect(()=>{
        fetchData();
      fetchData1();
      fetchData2();
      fetchData3();
      fetchData4();
    },[userId]);
    const remov = async (school,index)=>{
        
        try{
            await axios.delete(`http://127.0.0.1:5000/education/${school}/${userId}`);
            alert("Delete Successfully");
            setProfileData1(prev=>prev.filter((_,i)=>i!==index));
        }
        catch(err){
        alert("Not Deleted Data");
        }
    }
    const remov1 = async (endYear,index)=>{
        
        try{
            await axios.delete(`http://127.0.0.1:5000/licens/${endYear}/${userId}`);
            alert("Delete Successfully");
            setProfileData1(prev=>prev.filter((_,i)=>i!==index && index!==0));
        }
        catch(err){
        alert("Not Deleted Data");
        }
    }
    
 
  console.log(image,"don");
  
  console.log(profileData3?.name,"image");
    console.log(profileData?.firstname,"hello");
   
    return (
        <>
        <Navbar/>
            <div className="flex justify-between mt-28">
                <div>
                    <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3">
                    <div className="h-[250px] w-full mb-2 rounded-3xl overflow-hidden bg-cover bg-center" style={{backgroundImage: `url(http://127.0.0.1:5000/images/${profileData3})`}}>
                    
                    
    

        
      
                    
                        
                        <div className="float-right mr-3  rounded-full"><div className="text-blue-500 text-center p-2"><Media1 />
                        </div></div>
                    </div>
                   <PencilProfile />
                    <div className="float-right mt-8">
                            <div className="flex justify-items-start gap-2 my-3 mx-2 ">
                                <div className=" rounded h-5 w-5"><img src="https://th.bing.com/th/id/OIP.bhVPgAcuDxNBBew1WZ10pgHaHa?rs=1&pid=ImgDetMain" alt="" className="w-10 h-10 rounded-full" /></div>
                                <h4 className="max-md:text-[10px]">Rungta group of Institution and technology</h4>
                            </div>
                        </div>
                    
                        <div className="mx-4  my-4">
                        <img src={`http://127.0.0.1:5000/images1/${profileData4}`} alt="" className="w-20 h-20 rounded-full border-[1px] ml-[-30px] border-gray-400 mt-[-45px] opacity-100"/>
                        <div className="float-left mt-[-50px] ml-[55px] rounded-full "><div className="text-blue-500 p-2"><Media2 />
                        </div></div>
                        
                        <div className="ml-5 overflow-hidden">
                        
                       
                            <h2 className="text-black text-lg my-2 max-md:text-[17px]">{profileData?.firstname} {profileData?.lastname}</h2>
                            {/* {(profileData?.skills!==null && profileData?.skills!==undefined && String(profileData?.skills).match(/.{0,25}(\s|$)/g))?.map((line,i)=>( */}
                            <p className=" my-2  text-base text-gray-400 max-md:text-[9px] max-md:my-0">{profileData?.skills}</p>
                            <p className=" my-2  text-base text-gray-400"> {profileData?.dist}, {profileData?.stateopt}, India  <span className="text-blue-700 text-sm">Contact info</span></p>
                            <p>Connections</p>
                            
                <ul className="flex items-center justify-start gap-3 ml-4">
                    <li className="text-black text-base font-medium my-4 rounded-3xl  border-[1px] border-gray-400 p-2 cursor-pointer" onClick={click}>Open to</li>
                    {open && (
                        <div className="bg-white  mt-2 border-[1px] border-gray-400 rounded-xl"
          style={{
            position: 'absolute',
            top: '76%',
            left: '15%',
            
            transform: 'translate(-50%, -50%)',
            
           
            padding: '10px',
            '@media (max-width: 760px)': {
        left: '50%'
    },
          }}>
                       
   <div className="mx-3 my-2"><h2 className="text-black text-sm my-2">Hiring</h2>
   <p className="text-gray-400 text-xs my-2">Share that you’re hiring and attract qualified candidates</p>
   </div>
   <div className="mx-3 my-2"><h2 className="text-black text-sm my-2">Hiring</h2>
   <p className="text-gray-400 text-xs my-2">Share that you’re hiring and attract qualified candidates</p>
   </div>
              </div>      )}
                    <li className="text-black text-base font-medium my-4 rounded-3xl  border-[1px] border-gray-400 p-2 cursor-pointer"><AddProfile /></li>
                    <li className="text-black text-base font-medium my-4 rounded-3xl  border-[1px] border-gray-400 p-2 cursor-pointer" onClick={click1}>More
                    {open1 && (
                        <div className="bg-white  mt-2 border-[1px] border-gray-400 rounded-xl"
          style={{
            position: 'absolute',
            top: '80%',
            left: '30%',
            transform: 'translate(-50%, -50%)',
            
            
            padding: '10px',
          }}>
                        <ul className=" my-5 ml-5">
        <li className="flex justify-items-start gap-2 mt-2 ml-2"><div><BookmarkIcon /></div><h2>Send file in a message</h2></li>
                    <li className="flex justify-items-start gap-2 mt-2 ml-2"><div><InsertLinkIcon /></div><h2>Save pdf</h2></li>
                    <li className="flex justify-items-start gap-2 mt-2 ml-2"><div><CodeOffIcon /></div><h2>Build a resume</h2></li>
                    <li className="flex justify-items-start gap-2 mt-2 ml-2"><div><VisibilityOffIcon /></div><h2>About this profile</h2></li>
                   
        </ul>
        </div>
                    )}</li>
                </ul>
                <div className="grid grid-cols-2 gap-8 ml-3 my-3 ">
                    <div className="border-[1px] border-gray-400 rounded-3xl  ">
                        <div className="flex justify-between mx-5 my-3 max-sm:text-[10px] max-sm:mx-1"><h2>Open To Work</h2>
                        <OpenProfile  position = {position} className = "max-sm:text-[9px] max-sm:mx-1"/></div>
                        <p className="mx-5  text-base text-gray-400 max-sm:text-[9px] max-sm:mx-1">Software Engineer and Frontend Developer role</p>
                        <p className="mx-5 my-1 text-base text-blue-600 max-sm:text-[10px] max-sm:mx-1">Show Details</p>
                    </div>
                    <div className="border-[1px] border-gray-400 rounded-3xl  ">
                    <div className="flex justify-between mx-5 my-3"><h2 className="mx-5 my-2 text-black text-base max-sm:text-[10px] max-sm:mx-1">Showcase your services<br />
                    <span className="text-sm text-gray-400 max-sm:text-[9px] max-sm:mx-1"> as a section on your profile so your business can be easily discovered.</span></h2>
                        <ClearIcon className = "max-sm:text-[7px] max-sm:mx-1"/></div>
                        
                        <p className="my-1 text-base text-blue-600 mx-3 max-sm:text-[10px] max-sm:ml-5 max-sm:my-0">Get Started</p>
                    </div>
                </div>
            

                        </div>
                       
                    </div>
                    </div>
                    {parseInt(position) > 550 && (
                        <div className=" fixed top-16 left-0 w-[100%] flex justify-around bg-white  gap-2 my-4 border-[1px] border-gray-400 rounded-xl max-md:hidden">
                            <div className="flex gap-3 my-3 max-sm:gap-[6px]">
                                <img src={`http://127.0.0.1:5000/images1/${profileData4}`} alt=""  className="w-10 h-10 rounded-full border-[1px] border-gray-400"/>
                                <div>
                                    <h2 className="max-sm:text-[11px]">{profileData?.firstname} {profileData?.lastname}</h2>
                                    <p className="my-1 text-[9px] text-gray-400 max-sm:text-[7px]">{profileData?.skills}</p>
                                </div>
                            </div>
                            <div>  <ul className="flex items-center justify-start gap-3 mx-3 max-sm:gap-[2px]">
                    <li className="text-black text-base font-medium my-4 rounded-3xl  border-[1px] border-gray-400 p-2 cursor-pointer max-sm:text-[9px] max-sm:p-[3px]" onClick={click}>Open to
                    {open && (
                        <div className="bg-white  mt-2 border-[1px] border-gray-400 rounded-xl"
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            
            
            padding: '10px',
          }}>
                       
   <div className="mx-3 my-2"><h2 className="text-black text-sm my-2">Hiring</h2>
   <p className="text-gray-400 text-xs my-2">Share that you’re hiring and attract qualified candidates</p>
   </div>
   <div className="mx-3 my-2"><h2 className="text-black text-sm my-2">Hiring</h2>
   <p className="text-gray-400 text-xs my-2">Share that you’re hiring and attract qualified candidates</p>
   </div>
              </div>      )}</li>
                    <li className="text-black text-base font-medium my-4 rounded-3xl  border-[1px] border-gray-400 p-2 cursor-pointer max-sm:text-[9px] max-sm:p-[3px]"> 
          <AddProfile position = {position} userId = {userId}/></li>
                    <li className="text-black text-base font-medium my-4 rounded-3xl  border-[1px] border-gray-400 p-2 max-sm:text-[9px] max-sm:p-[3px] cursor-pointer" onClick={click1}>More
                    {open1 && (
                        <div className="bg-white  mt-2 border-[1px] border-gray-400 rounded-xl"
          style={{
            position: 'absolute',
            top: '20%',
            left: '60%',
            transform: 'translate(-50%, -50%)',
            width:"40%",
            
            padding: '10px',
          }}>
                        <ul className=" my-5 ml-5">
        <li className="flex justify-items-start gap-2 mt-2 ml-2"><div><BookmarkIcon /></div><h2>Send file in a message</h2></li>
                    <li className="flex justify-items-start gap-2 mt-2 ml-2"><div><InsertLinkIcon /></div><h2>Save pdf</h2></li>
                    <li className="flex justify-items-start gap-2 mt-2 ml-2"><div><CodeOffIcon /></div><h2>Build a resume</h2></li>
                    <li className="flex justify-items-start gap-2 mt-2 ml-2"><div><VisibilityOffIcon /></div><h2>About this profile</h2></li>
                   
        </ul>
        </div>
                    )}</li>
                    </ul></div>
                        </div>
                    )}
                    <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3">
                        <h2 className="mx-5 my-2 text-black text-lg">Suggesed For You</h2>
                        <div className="flex justify-items-start gap-1 mx-5 my-2">
                        <RemoveRedEyeIcon />
                            <p>Private To you</p>
                        </div>
                        <h4 className="mx-5 my-1 text-black text-sm">Intermediate</h4>
                        <p className="mx-5 my-1 text-gray-400 text-xs">Complete 1 Step to achieve-<span className="text-blue-700">All Star</span></p>
                <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-2">
                <div className=" float-right my-3 mr-5"><ClearIcon /></div>
                        <h2 className="mx-5 my-2 text-black text-lg">Where do you currently work?</h2>
                        <p className="mx-5 my-1 text-gray-400 text-xs">Members who include at least one position receive up to 3.5 times as many profile views.</p>
                        <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-2 w-32">
                       <Addposition  position = {position}/></div>
                    
                    
                </div>
                    </div>
                    <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3">
                    <h2 className="mx-5 my-2 text-black text-lg">Analytics</h2>
                        <div className="flex justify-items-start gap-1 mx-5 my-2">
                        <RemoveRedEyeIcon />
                            <p>Private To you</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mx-5 my-3">
                        <div className="flex justify-items-start gap-2">
                        <GroupIcon />
                            <div>
                                <h4>Profile Views</h4>
                                <p>Discover who's viewed your profile.</p>
                            </div>
                        </div>
                        <div className="flex justify-items-start gap-2">
                        <BarChartIcon />
                            <div>
                                <h4>Post Impersions</h4>
                                <p>Check out who's engaging with your posts.</p>
                            </div>
                        </div>
                        <div className="flex justify-items-start gap-2">
                        <SearchIcon />
                            <div>
                                <h4>Search appearances</h4>
                                <p>See how often you appear in search results.</p>
                            </div>
                        </div>

                        </div>
                        <div className="border-[1px] border-gray-400 rounded-3xl mx-2 my-2"></div>
                        <div className="flex justify-center my-3 gap-2">
                        <h2 className="">Show All</h2>
                       <EastIcon />
                        </div>
                    </div>
                    <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3">
                    <h2 className="mx-5 my-2 text-black text-lg">Resources</h2>
                        <div className="flex justify-items-start gap-1 mx-5 my-2">
                        <RemoveRedEyeIcon />
                            <p>Private To you</p>
                        </div>
                        <div className="flex justify-items-start gap-2 mx-5 my-3">
                        <SearchIcon />
                            <div>
                                <h4>Create Mode <span className="bg-gray-400 border-[1px] border-gray-400 rounded-[7px] mx-2 my-2 text-sm text-white text-center">Off</span></h4>
                                <p>See how often you appear in search results.</p>
                            </div>
                        </div>
                        <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3"></div>
                        <div className="flex justify-items-start gap-2 mx-5 my-3">
                        <GroupIcon />
                            <div>
                                <h4>My Network</h4>
                                <p>See how often you appear in search results.</p>
                            </div>
                        </div>
                        <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3"></div>
                        <div className="flex justify-center my-3 gap-2">
                        <h2 className="">Show All resources</h2>
                       <EastIcon />
                        </div>
                    </div>
                    <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3">
                        <div className="flex justify-between mx-5 my-3">
                            <h2 className="text-black text-xl">About</h2>
                            <BorderColorIcon />
                        </div>
                        <p className="mx-5 my-3 text-gray-400 text-base">
                        Currently I have pursuing B.tech in Data Science on Rungta group of institution and technology
I am a MERN Stack developer as well as React Native Developer and Problem solver
I also try to learn new things everyday that will help you to up-date you are in Tech
                        </p>
                    </div>
                    <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3">
                        <div className="flex justify-between mx-5 my-3">
                        <div>
                        <h2 className="text-black text-xl">Activity</h2>
                        <p className="text-blue-500">followers</p>
                        </div>
                            <div className="flex justify-items-start gap-2">
                            <button className="border-[2px] border-blue-500 rounded-3xl p-2 text-blue-700 font-semibold">Create a Post</button>
                                <BorderColorIcon />
                            </div>
                        </div>
                        <ul className="flex items-center justify-start gap-3 ml-4">
                    <li className="text-black text-base font-medium my-2 rounded-3xl  border-[1px] border-gray-400 p-2">Post</li>
                    <li className="text-black text-base font-medium my-2 rounded-3xl  border-[1px] border-gray-400 p-2">Comments</li>
                    <li className="text-black text-base font-medium my-2 rounded-3xl  border-[1px] border-gray-400 p-2">Video</li>
                    <li className="text-black text-base font-medium my-2 rounded-3xl  border-[1px] border-gray-400 p-2">Images</li>
                </ul>
                <h2 className="mx-5 my-2 text-black text-sm">Md shahid iqbal <span className="text-gray-400 text-[10px]">posted this . 2d</span></h2>
                <div className="flex justify-between mx-5">
                        <div className="flex justify-items-start gap-2 mx-5 my-3">
                        <GroupIcon />
                            <div>
                                <h4>My Network</h4>
                                <p>See how often you appear in search results.</p>
                            </div>
                        </div>
                        <p>...Show more</p>
                        </div>
                        <div className="flex justify-between mx-5 my-3">
                            <p className="text-[10px] text-gray-400">md shahid iqbal and 3 others</p>
                            <p className="text-[10px] text-gray-400">Comments</p>
                        </div>
                        <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3"></div>
                        <div className="flex justify-center my-3 gap-2">
                        <h2 className="">Show All </h2>
                       <EastIcon />
                        </div>
                    </div>
                    <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3">
                    <h2 className="mx-5 my-2 text-black text-xl font-bold">Education</h2>
                    
                    { profileData1.length>0 ? ( profileData1.map((item,index)=>(
                    <div className="flex justify-between mx-5 my-3" key={index}>
                  
                        <div className="flex justify-items-start gap-3">
                        
                        <img src="https://th.bing.com/th/id/OIP.bhVPgAcuDxNBBew1WZ10pgHaHa?rs=1&pid=ImgDetMain" alt=""  className="w-10 h-10 rounded-full"/>
                        <div className="my-2">                        <h2 className="text-black text-xl">{item.school}</h2>
                        <p className="text-gray-600">{item.degree}</p>
                        <p>{item.startYear}-{item.endYear}</p>
                        </div>
                      

                        </div>
                            <div className="flex justify-items-start gap-2">
                                <Education position={position} userId = {userId} />
                                <BorderColorIcon className="cursor-pointer"  onClick = {()=>remov(item.school,index)}/>
                            </div>
                        </div>
                    ))):(<div className="flex justify-between mx-5 my-3">
                  
                  <div className="flex justify-items-start gap-3">
                  
                  <img src="https://th.bing.com/th/id/OIP.bhVPgAcuDxNBBew1WZ10pgHaHa?rs=1&pid=ImgDetMain" alt=""  className="w-10 h-10 rounded-full"/>
                  <div className="my-2">                        <h2 className="text-black text-xl">Adarsh Vidyalaya</h2>
                  <p className="text-gray-600">B.Tech</p>
                  <p>2018-2020</p>
                  </div>
                

                  </div>
                      <div className="flex justify-items-start gap-2">
                          <Education position={position} userId = {userId} />
                          <BorderColorIcon className="cursor-pointer" />
                      </div>
                  </div>)}
                        <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3"></div>
                        </div>
                        <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3">
                    <h2 className="mx-5 my-2 text-black text-xl font-bold">Licenses & certifications</h2>
                    {profileData2.map((item,index)=>(
                    <div className="flex justify-between mx-5 my-3" key={index}>
                    
                        <div className="flex justify-items-start gap-3">
                        <img src="https://th.bing.com/th/id/OIP.bhVPgAcuDxNBBew1WZ10pgHaHa?rs=1&pid=ImgDetMain" alt="" className="w-10 h-10 rounded-full" />
                        <div className="my-2">                        <h2 className="text-black text-xl">{item.name}</h2>
                        <p className="text-gray-600">{item.issue}</p>
                        <p className="text-gray-600">issue {item.endYear} {item.startYear}</p>
                        <p className="text-gray-600">{item.credientalId}</p>
                        <div className=" mx-2 my-4 text-gray-500 border-[1px] border-gray-500 rounded-3xl p-2">
                            <h2><Link to={item.url}>Show Credientals</Link></h2>
                        </div>
                        </div>

                        </div>
                            <div className="flex justify-items-start gap-2">
                                <CreatePost  position = {position}/>
                                <BorderColorIcon  className="cursor-pointer"  onClick = {()=>remov1(item.endYear,index)}/>
                            </div>
                            
                        </div>
                        
                        ))}
                        <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3"></div>
                        </div>
                        <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3">
                    <h2 className="mx-5 my-2 text-black text-xl font-bold">Skills</h2>
                    {profileData1.map((item,index)=>(
                    <div className="flex justify-between mx-5 my-3" key={index}>
                    
                        <div className="flex justify-items-start gap-3">
                        <img src="https://th.bing.com/th/id/OIP.bhVPgAcuDxNBBew1WZ10pgHaHa?rs=1&pid=ImgDetMain" alt=""  className="w-10 h-10 rounded-full"/>
                        <div className="my-2">  
                                  
                        {item.stor.map((storItem, storIndex) => (
                    <p className="text-gray-600" key={storIndex}>{storItem}</p>
                ))}
                        
                        </div>

                        </div>
                            <div className="flex justify-items-start gap-2">
                                <Skills  position = {position}/>
                                <BorderColorIcon className="cursor-pointer"    onClick = {()=>remov(item.school,index)}/>
                            </div>
                        </div>
                        ))}
                        <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3"></div>
                        <div className="flex justify-center my-3 gap-2">
                        <h2 className="">Show All </h2>
                       <EastIcon />
                        </div>
                        </div>
                        <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3">
                    <h2 className="mx-5 my-2 text-black text-xl font-bold">Interest</h2>
                   <ul className="flex justify-start gap-5 mx-5 my-3 ">
                    <li>Top Voices</li>
                    <li>Companies</li>
                    <li>Groups</li>
                    <li>Newsletters</li>
                    <li>Schools</li>
                   </ul>
                   <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3"></div>
                        <div className="grid grid-cols-2 gap-3">
                        <div className="flex justify-start mx-5 my-3">
                        <img src="" alt="" />
                        <div className="my-2">     
                        <h2 className="text-black text-xl">Adarsh Vidyalaya</h2>                 
                        <p className="text-gray-600">fkakcscnksc</p>
                        <p className="text-gray-600">fkakcscnksc</p>
                        <button className="border-[2px] border-gray-400 rounded-3xl p-2 text-gray-400 font-semibold my-2">Create a Post</button>
                        </div>
                        </div>

                        </div>
                            
                        
                        <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3"></div>
                        <div className="flex justify-center my-3 gap-2">
                        <h2 className="">Show All </h2>
                       <EastIcon />
                        </div>
                        </div>
                        
                </div>
                <div className="max-xl:hidden">
                <div  className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3 h-auto">
                <div className="flex justify-between mx-3  my-3"><h2>Profile Language<br />
                
                English</h2>
                        <BorderColorIcon /></div>
                        <div  className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3" ></div>
                        <div className="flex justify-between my-3 mx-3"><div><h2>Profile Language</h2>
                <p>English</p></div>
                        <BorderColorIcon /></div>
                        <div  className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3" ></div>
                </div>
                <div className="bg-white rounded-3xl border-2 border-gray-500  shadow-xl mx-5 my-3">
                                  <p className="float-right mr-3">Ad <MoreHorizIcon /></p>
                                  <h4 className="mt-4 mx-4">MD shahid,unlock your full potential with linkedin premium</h4>
                                  <div className="flex items-center justify-around">
                                    <img src = "" alt = "" />
                                    <div className="text-blue-500 h-12 w-12"><KeyIcon /> </div>

                                  </div>
                                  <h4 className="mt-4 mx-4">See Who's view Your Profile in the Last 90 days</h4>
                                  <div className="text-center my-5">
                                  <button className="text-center p-3 border-2 border-blue-400 rounded-3xl text-blue-500 font-semibold">Try For Free</button>
                                  </div>
           
                                  </div>
                                  <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3">
                    <h2 className="mx-5 my-2 text-black text-xl font-bold">People also viewed</h2>
                    <div className="flex justify-start mx-5 my-3">
                        <img src="" alt="" />
                        <div className="my-2">     
                        <h2 className="text-black text-xl">Adarsh Vidyalaya</h2>                 
                        <p className="text-gray-600">fkakcscnksc</p>
                        <p className="text-gray-600">fkakcscnksc</p>
                        <button className="border-[2px] border-gray-400 rounded-3xl p-2 text-gray-400 font-semibold my-2">Create a Post</button>
                        </div>
                        </div>
                        <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3"></div>
                        <div className="flex justify-center my-3 gap-2">
                        <h2 className="">Show All </h2>
                       <EastIcon />
                        </div>
                    </div>
                    <div className='border-[1px] border-gray-400 rounded-3xl mx-4 my-3'>
                    <h2 className="mx-5 my-2 text-black text-xl font-bold">People may be Viewed</h2>
                    <div className="flex justify-start mx-5 my-3">
                        <img src="" alt="" />
                        <div className="my-2">     
                        <h2 className="text-black text-xl">Adarsh Vidyalaya</h2>                 
                        <p className="text-gray-600">fkakcscnksc</p>
                        <p className="text-gray-600">fkakcscnksc</p>
                        <button className="border-[2px] border-gray-400 rounded-3xl p-2 text-gray-400 font-semibold my-2">Create a Post</button>
                        </div>
                        </div>
                        <div className="border-[1px] border-gray-400 rounded-3xl mx-4 my-3"></div>
                        <div className="flex justify-center my-3 gap-2">
                        <h2 className="">Show All </h2>
                       <EastIcon />
                        </div>
                    </div>
                                  </div>
                                  </div>
            
        </>
    )
}
export default Profile;
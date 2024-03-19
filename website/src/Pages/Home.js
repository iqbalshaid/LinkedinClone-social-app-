import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import AdjustIcon from '@mui/icons-material/Adjust';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyIcon from '@mui/icons-material/Key';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import GroupsIcon from '@mui/icons-material/Groups';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import LanguageIcon from '@mui/icons-material/Language';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import TextsmsIcon from '@mui/icons-material/Textsms';
import SendIcon from '@mui/icons-material/Send';
import CropFreeIcon from '@mui/icons-material/CropFree';
import { useState } from "react";
import Dot from "../Components/Navbar/Dot";
import Media from "../Components/Media";
import Events from "../Components/Events";
import Article from "../Components/Article";
import Navbar from "../Components/Navbar/Navbar";
import { useContext } from "react";
import { userType } from "../UserContext";
import axios from "axios";
import { useEffect } from "react";
import data from "./Linkedin";
import { Link } from "react-router-dom";
const Home = ()=>{
    const {userId} = useContext(userType);
    const [open,setOpen] = useState(null);
    const [clicks,setClicks] = useState(false);
     console.log(userId);
     const click = (index) => {
      setClicks(!clicks);
      setOpen((prevOpen) => {
        // If the current state is the same as the new state, do nothing
        if (index === prevOpen) {
          return prevOpen;
        }
        // Otherwise, update the state
        return index;
      });
    };
    
     const [profileData, setProfileData] = useState(null);
    const fetchData = async ()=>{
        try{
     const res = await axios.get(`http://127.0.0.1:5000/profile/${userId}`);
      setProfileData(res.data);
      }
      catch(err){
        console.log("error from the backend",err);
      }
    }
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
const [profileData4,setProfileData4] = useState("");
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
      fetchData4();
    },[userId]);
    const [rap,setRap] = useState(data);
   
const [showText,setShowtext] = useState(null);
const [ok,setOk] = useState(false);
const toggleText = (index)=>{
  // const updatedExpanded = [...showText];
  // updatedExpanded[index] = i;
  // setShowtext(updatedExpanded);
  setOk(true);
  setShowtext((prevOpen) => {
    // If the current state is the same as the new state, do nothing
    if (index === prevOpen) {
      return prevOpen;
    }
    // Otherwise, update the state
    return index;
  });
}


    return (
        <>
        <Navbar position = {position}/>
        <div className="bg-gray-300  flex flex-wrap gap-10 max-[1300px]:flex max-[1300px]:items-center max-[1300px]:justify-around">
            <div className="basis-[30%] flex items-start justify-end mt-32 max-md:hidden mb-10 overflow-hidden">
            <div className="bg-gray-300 flex-1"></div>
            <div className="bg-white rounded-3xl border-2 border-gray-500 shadow-xl">
              <div className="text-center border-b-2 border-gray-500  mx-5">
              <img src={`http://127.0.0.1:5000/images1/${profileData4}`} alt="" className="rounded-full w-20 h-20 ml-16 my-2  "/>
                <h1 className="text-xl text-black my-1">{profileData?.firstname} {profileData?.lastname}</h1>
                <p className="text-[7px] text-gray-400 my-1 overflow-hidden">{profileData?.skills}</p>
              </div>
              <div className="border-b-2 border-gray-500 my-4 mx-5">
                <div className="flex items-center justify-between my-2">
                    <h3>Profile Viewers</h3>
                    <p>4</p>
                </div>
                <div className="flex items-center justify-between my-2">
                <h3>Post Impersions</h3>
                    <p>100</p>
                </div>
              </div>
              <div className="border-b-2 border-gray-500 my-4 mx-5">
                <p>Grow Your Career or Business with <br />
                Premium</p>
                <div className="flex justify-items-start"><div className="text-yellow-700"><ChatBubbleIcon /></div>
                <h2 className="text-black text-lg">Try Premium For $0</h2></div>
              </div>
              <div className="border-b-2 border-gray-500 my-4 mx-5">
                <div className="flex justify-items-start gap-3"><div className="text-gray-400"><GroupsIcon /></div>
                <h2 className="text-black text-lg">My Teams</h2></div>
              </div>
              </div>
            </div>
            <div>
            <div className="bg-white border-2 border-gray-500 rounded-2xl shadow-md basis-[30%]  mt-32">
            <div className="flex justify-items-start gap-2 mx-2 my-2">
                <img src={`http://127.0.0.1:5000/images1/${profileData4}`} alt="" className="w-16 h-16 rounded-full mx-3 my-3"/>
                <input placeholder="start a post" type="text"   className="border-2 border-gray-500 rounded-3xl bg-white mx-5 text-xl h-20 mt-4 max-[400px]:mx-1 "/>
                </div><div className="flex items-center justify-around ">
                <Media />
                <Events/> 
                <Article /> 
                   
                </div>
              
            </div>
            <div className="flex items-center flex-wrap my-3">
             <div className="basis-[65%]"><svg width="full" height="1">
  <line x1="0" y1="0" x2="100%" y2="0"  className="stroke-black stroke-1 max-[430px]:w-[50%]" />
</svg></div>
               <div className="ml-3"> <span >Sort By:-
                <select className="bg-gray-300 border-none "> <option className="mt-3 ml-3">Top</option>
                <option className="mt-3 ml-3">Recent</option>
                </select></span></div>
            </div>
            {rap?.map((item,index)=>(
            <div className="bg-white border-2 border-gray-500 rounded-2xl shadow-md basis-[30%] mt-5 overflow-hidden" key={index}>
            
                <div className="flex items-center justify-between mx-4 border-b-[1px] border-gray-500 my-4" >
                    <div className="flex justify-items-start gap-1 my-2">
                    <img src={item.postUrl && item.postUrl} alt="" className="rounded-full w-10 h-10"/>

                        <h2>{item && item.urn}</h2>
                        <span>like this</span>
                    </div>
                    <div className="flex justify-items-start gap-1">
                        <div onClick={()=>click(index)} className="hover:bg-gray-300 hover:rounded-full"><MoreHorizIcon /></div>
                        {open === index && clicks && (
                            <div className="bg-white border rounded mt-2"
          style={{
            position: 'absolute',
            top: `${position}`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '20%',
            padding: '10px',
          }}>
                                <Dot data = {open}/>
                            </div>
                        )}
                        <div className="hover:bg-gray-300 rounded-full"><ClearIcon /></div>
                    </div>
                </div>
                <div className="mx-4 border-b-[1px] border-gray-500 my-4 ">                <div className="flex items-center justify-between ">
                    <div className="flex justify-items-start gap-1">
                    <img src={item.author && item.author.url} alt="" className="rounded-full w-10 h-10 overflow-hidden"/>
                    <div><div className="flex justify-items-start">
                        <h2>{item?.author?.firstName}.
                        </h2>
                        <span>{item?.postedAt}</span>
                        </div>
                        <p className="text-[12px] text-gray-500 my-1">{item?.titles}  <Link to="/profile" className="text-[2px]"><MoreHorizIcon /></Link> </p>
                <div className="flex justify-items-start">
                <p>{item?.postedAt}</p> . <LanguageIcon />
                </div>
                <p className="text-gray-600 mt-3">
                </p>
                        </div>                    </div>
                    <div className="flex justify-items-start gap-1">
                        <div className="text-blue-500 font-semibold"><AddIcon /></div>
                        <h1 className="text-blue-500 text-sm font-semibold">FOLLOW</h1>
                    </div>
                   
                </div>
                {ok && showText===index ? (
                  
        <p  className=" mt-5 mx-3 ">
        {(item?.text !== null && item?.text !== undefined && String(item?.text).match(/.{0,60}(\s|$)/g))?.map((line, i) => (
    <p key={i} className="text-gray-600">{line}</p>
))}



          
        </p>
      ) : (
        <p  className=" mt-5 mx-3 ">
        { item?.text?.map((line, lineIndex) => (
          <div className="flex justify-start gap-1">
  <p key={lineIndex} className="text-gray-600">{line.substring(0,40)}</p>
  <button  onClick={()=>toggleText(index)} className="bg-white text-gray-600">...See More</button>
  </div>
))}

         
        </p>
      )}
              
                <img src={item?.image && item.image[0]?.url}  alt=""  className=" overflow-hidden w-full h-60"/>
                <div className="flex justify-between my-2 mx-3">
                    <div></div>
                    <div className="flex justify-items-start">
                        <p className="text-gray-500 text-[8px]">{item?.commentsCount}Comments</p> 
                        <p className="text-gray-500 text-[8px] ml-1">{item?.repostsCount} Reports</p>
                    </div>
                </div>
              
            </div>
            <ul className="flex items-center justify-around mx-3 my-3">
                    <li className="flex justify-items-start gap-1"><div><ThumbUpAltIcon /></div><h2>Like</h2></li>
                    <li className="flex justify-items-start gap-1"><div><TextsmsIcon /></div><h2>Comment</h2></li>
                    <li className="flex justify-items-start gap-1"><div><CropFreeIcon /></div><h2>Repost</h2></li>
                    <li className="flex justify-items-start gap-1"><div><SendIcon /></div><h2>Send</h2></li>
                </ul>
               
            </div>
            
              
            ))}
            </div>
            <div className="basis-[30%] mt-32 max-[1300px]:hidden mb-10">
            <div className="bg-white rounded-3xl border-2 border-gray-500 ">
            <div className="flex items-center justify-between mt-5 mx-1">
                <h1 className="font-medium">Linkedin News</h1>
                <div><GolfCourseIcon /></div>
            </div>
              <h2 className="mt-4 mx-3"> <AdjustIcon /> India Inc on CTC talent hunt</h2>
                                  <p className="text-gray-400 ml-5">4d ago</p>
                                  <h2 className="mt-4 mx-3"> <AdjustIcon /> SpiceJet to lay off 1,400 people</h2>
                                  <p className="text-gray-400 ml-5">4h ago</p>
                                  <h2 className="mt-4 mx-3"> <AdjustIcon /> Chart your online course</h2>
                                  <p className="text-gray-400 ml-5">6d ago</p>
                                  <h2 className="mt-4 mx-3"> <AdjustIcon /> Perks to spur return to office</h2>
                                  <p className="text-gray-400 ml-5">1h ago</p>
                                  <h2 className="mt-4 mx-3"> <AdjustIcon /> B2B fintech set to soar</h2>
                                  <p className="text-gray-400 ml-5">1d ago</p>
                                  </div>
                                  
                                  <div>
                               <div className="  bg-white rounded-3xl border-2 border-gray-500 my-10 shadow-xl">
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
                                  <div>
                                    
                                        <ul className="flex items-center justify-around my-3">
                                            <li className="text-black font-medium">About</li>
                                            <li className="text-black font-medium">Accessibility</li>
                                            <li className="text-black font-medium">Help center</li>
                                        </ul>
                                        <ul className="flex items-center justify-around my-3">
                                            <li className="text-black font-medium">Privacy & Terms
                                            <select className="bg-gray-300">
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
export default Home;
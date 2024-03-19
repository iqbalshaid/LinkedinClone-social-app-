import {Link, useNavigate, useParams} from "react-router-dom";
import { useState} from "react";
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {id} = useParams();
  
 
 const navigate = useNavigate();
 const [userId,setUserId] = useState("");
 const path = useLocation().pathname.split("/")[2];
 
  // useEffect(()=>{
  //   const data = localStorage.getItem('user');
  //   console.log(data);
  //   setUserId(data);
  //   const checkLoginStatus = async()=>{
  //     try{
  //       console.log("hellochutiya");
  //       console.log(userId)
  //        if(userId.length>0){
        
  //       navigate('/home');
  //         console.log("hello1");
  //      }}
  //      catch(err){
  //       console.log("error in login",err);
  //       navigate('/');
  //      }}
  //      checkLoginStatus();
  // },[])
  
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    console.log("how  you");
    
      await axios.post('http://127.0.0.1:5000/login', {email,password})
      .then((res)=>{
       console.log(res.data.others.name);
      localStorage.setItem("user",res.data.others._id)
       navigate('/home');
     
    //   console.log(data.role);
    //   console.log("sha")
     }).
     catch((e)=>{
      console.log("something wrong");
     })
      
    }  
  


  return (
    <>
    <div className="mt-0 grow flex items-center justify-around">
      <div className="mb-40">
      <img className="text-center" src = "https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png" alt=""/>
        <h1 className="text-4xl text-center mb-2">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input type="email"
                 placeholder="your@email.com"
                 value={email}
                 onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
                 placeholder="password"
                 value={password}
                 onChange={ev => setPassword(ev.target.value)} />
                          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className="underline text-black" to="register">Register now</Link>
          </div>
        
        </form>
       
       </div>
    </div>
    </>
  );
}
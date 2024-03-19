import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
const userType = createContext();
const UserContext =  ({children}) =>{
    const [userId,setUserId] = useState("");
    const fetchData = async ()=>{
        try{
       const data = localStorage.getItem("user");
        setUserId( data);
        }
        catch(err){
            console.log("error from the backend");
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <userType.Provider value={{userId,setUserId}}>{children}</userType.Provider>
    )
}
export {UserContext,userType};
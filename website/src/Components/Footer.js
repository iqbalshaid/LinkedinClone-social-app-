import React from "react";
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import ContrastIcon from '@mui/icons-material/Contrast';
const Footer = ()=>{
    const page = [
        {
            id:"1",
            name:"About"
        },
        {
            id:"2",
            name:"Comuunity Guidlines"
        },
        {
            id:"3",
            name:"Privacy and Terms"
        },
        {
            id:"4",
            name:"Safe Solutions"
        },
        {
            id:"5",
            name:"Safety Center"
        },
    ];
    const page1 = [
        {
            id:"1",
            name:"Accessibility"
        },
        {
            id:"2",
            name:"Careers"
        },
        {
            id:"3",
            name:"Ad Choices"
        },
        {
            id:"4",
            name:"Mobile"
        },
     
    ];
    const page2 = [
        {
            id:"1",
            name:"Talent Solutions"
        },
        {
            id:"2",
            name:" Marketing Solutions"
        },
        {
            id:"3",
            name:"Advertising"
        },
        {
            id:"4",
            name:"Small Business"
        },
         ]
         const page3 = [
            {
                id:"1",
                name:"Questions?",
                p:"Visit our Help Cente",
                logo:<HelpIcon />,
            },
            {
                id:"2",
                name:"Manage your account and privacy",
                p:"Go to your Settings.",
                logo:<SettingsIcon />,
            },
            {
                id:"3",
                name:"Recommendation transparency",
                p:"Learn more about Recommended Content.",
                logo:<ContrastIcon />,
            },
           
        ]
    return (
        <>
        <div  className="flex justify-around my-28 max-md:block">
            <div className="flex justify-between gap-40 mx-5 max-lg:gap-5 max-md:block max-md:my-5 max-md:text-center"> 
                <ul className="block gap-2 ">
                    {page.map((item)=>(
                        <li key={item.id} className="my-2">{item.name}</li>
                    ))}
                </ul>
                <div className="hidden border-[2px] border-gray-400 rounded-xl max-md:block"></div>
                <ul className="block gap-2 ">
                    {page1.map((item)=>(
                        <li key={item.id} className="my-2">{item.name}</li>
                    ))}
                </ul>
                <div className="hidden border-[2px] border-gray-400 rounded-xl max-md:block"></div>
                <ul className="block gap-2 ">
                    {page2.map((item)=>(
                        <li key={item.id} className="my-2">{item.name}</li>
                    ))}
                </ul>
                <div className="hidden border-[2px] border-gray-400 rounded-xl max-md:block"></div>
                <ul className="block gap-2">
                    {page3.map((item)=>(
                        <li key={item.id} className="my-2"><div className="flex justify-items-start gap-4">{item.logo}<div><h4>{item.name}</h4>
                        <p className="text-gray-400">{item.p}</p></div></div></li>
                    ))}
                </ul>

                <div className="hidden border-[2px] border-gray-400 rounded-xl max-md:block"></div>
            </div>
            <div className="mr-5 max-md:text-center">
                <h3 className="text-black font-bold">Select a Language</h3>
                <select className="border-[2px] border-gray-400 rounded-xl my-5 px-12 py-1">
                    <option>sk</option>
                    <option>sk</option>
                    <option>sk</option>
                    <option>sk</option>
                    <option>sk</option>
                    <option>sk</option>
                    <option>sk</option>
                    <option>sk</option>
                </select>
            </div>
        </div>
        </>
    )
} 
export default Footer;
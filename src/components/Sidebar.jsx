import React, {useState} from 'react'
import { BsFillGrid1X2Fill } from "react-icons/bs";
import {BsFillPersonFill} from "react-icons/bs";
import {BsFillPlusCircleFill} from "react-icons/bs"
import {BsReverseLayoutTextWindowReverse} from "react-icons/bs"
import {BsReverseListColumnsReverse} from "react-icons/bs"
import {BsFillCartCheckFill}from "react-icons/bs"
import {BsFillEmojiSmileFill}from "react-icons/bs"
import {BsFillFilePersonFill}from "react-icons/bs"
import {BsBox2HeartFill} from "react-icons/bs";
import {BsBorderWidth} from 'react-icons/bs'
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
  const[isOpen , setIsOpen] =useState(false)
  const toggle =()=>setIsOpen(!isOpen)
  const menuItem=[
    {
      name: "Dashboard",
      icon: <BsFillGrid1X2Fill />,
      path:  "/dashboard",
    },
    {
      name: "User",
      icon: <BsFillPersonFill/>,
      path: "/user",
    },
    {
      name: "Roles",
      icon: <BsFillPlusCircleFill />,
      path: "/roles",
    },
    {
      name: "Category",
      icon: <BsReverseLayoutTextWindowReverse />,
      path: "/category",
    },
    {
      name: "SubCategory",
      icon: <BsReverseListColumnsReverse/>,
      path: "/subcategory",
    },
    {
      name: "Retailers",
      icon: <BsBox2HeartFill/>,
      path: "/retailers",
    },
    {
      name: "Customer",
      icon: <BsFillEmojiSmileFill/>,
      path: "/customer",
    },
    {
      name: "Offer",
      icon: <BsFillCartCheckFill/>,
      path: "/offer",
    },
     {
      name: "Third Party Product",
      icon: <BsFillFilePersonFill/>,
      path: "/thirdpartyproduct",
    },
   
  ];
  
  return (
    <div className="container">
       <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
           <div className="top_section">
               <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
               <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                   <BsBorderWidth onClick={toggle}/>
               </div>
           </div>
           {
               menuItem.map((item, index)=>(
                   <NavLink to={item.path} key={index} className="link" activeclassName="active">
                       <div className="icon">{item.icon}</div>
                       <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                   </NavLink>
               ))
           }
       </div>
       <main>{children}</main>
    </div>
  )}
   export default Sidebar

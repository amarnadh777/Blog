import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "./Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faSearch } from '@fortawesome/free-solid-svg-icons'
import DarkmodeContext from '../../Utils/Mycontext'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from '../../pages/Loginpage/Login'

function Navbar() {
  const state = useSelector(state => state)
 const {darkmode,setdarkmode,userLogined,setuserLogined ,opensidebar,setopenSidebar }  = useContext(DarkmodeContext)

 const setdark = () =>
 {
   setdarkmode(!darkmode)

 }

 const sidebarOpen = () =>
 {
   return setopenSidebar(!opensidebar)
 }
 const auhtorInfo = JSON.parse(localStorage.getItem("authorInfo"))

  return (
    <div className='navbar'>
  
       <Link to="/"><div className="n-logo"><img src={logo} alt="" /></div></Link>   
        <div className="n-menus">
          


        </div>
        <div className="n-profilebar">
    

          {!userLogined && ( <>  <Link  to="/login" className='Link'> <button className='n-login'>Loign</button></Link>   
         <Link to="/register" className='Link'>  <button className={darkmode ? `n-signup` :`darkmode-n-signup` }>SignUp</button></Link> </>) }
          {userLogined && (<>      <Link className='Link' to="/createpost">  <FontAwesomeIcon icon={faPen}></FontAwesomeIcon> Write  </Link>    <img  onClick={sidebarOpen}  src={auhtorInfo.profileurl} alt="" /> </>)  }
            
        </div>

      
    </div>
  )
}

export default Navbar

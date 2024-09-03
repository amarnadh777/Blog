import React, { useContext } from 'react'
import "./Sidebar.css"
import p from "./p.png"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faFloppyDisk, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import DarkmodeContext from '../../Utils/Mycontext'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import actionTypes from '../../Redux/actionTyoes'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'

function Sidebar() {
  const dispatch = useDispatch()

  



  const navigate = useNavigate()

    const {opensidebar,setopenSidebar,setuserLogined,authorDetails} = useContext(DarkmodeContext)
    const Logout = () =>
        {
     
         localStorage.removeItem("authorInfo")
         setuserLogined(false)
         setopenSidebar(!opensidebar)
         navigate("/login")
      
         
        }
        
  return (
    <div>
      <div className={opensidebar ? `sidebar` : `hide`} >
      <div className='close-btn' onClick={() =>setopenSidebar(!opensidebar)}> <FontAwesomeIcon icon={faClose}></FontAwesomeIcon> </div>
        <div className="sidebar-profile">
            <img src={authorDetails.profileurl} alt="" />
            <div><h6>Profile name</h6>
            <p>{authorDetails.username}</p>
            </div>
        </div>
       
        <div className='sidebar-list' onClick={() =>setopenSidebar(!opensidebar)}> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> <Link to={`/myprofile/${authorDetails.authorId}`}>My profile</Link></div>
         <div className='sidebar-list' onClick={() =>setopenSidebar(!opensidebar)} > <FontAwesomeIcon icon={faBook}></FontAwesomeIcon><Link to={`/mypost/${authorDetails.authorId}`}> My postes</Link>    </div> 
        <div className='sidebar-list' onClick={() =>setopenSidebar(!opensidebar)}> <FontAwesomeIcon icon={faFloppyDisk}></FontAwesomeIcon> Saved postes</div>

       
        <div className='sidebar-list'  onClick={Logout          }> <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon> Logout</div>

      </div>
    </div>
  )
}

export default Sidebar

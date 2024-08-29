import React, { useContext } from 'react'
import "./Sidebar.css"
import p from "./p.png"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faFloppyDisk, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import DarkmodeContext from '../../Utils/Mycontext'
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {
  const authorInfo  = localStorage.getItem("authorInfo")
  if(JSON.parse(authorInfo))
  {
      const {authorId }  = JSON.parse(authorInfo)

  }
  const navigate = useNavigate()

    const {opensidebar,setuserLogined} = useContext(DarkmodeContext)
    const Logout = () =>
        {
         localStorage.removeItem("authorInfo")
         navigate("/login")
         setuserLogined(false)
        }
        
  return (
    <div>
      <div className={opensidebar ? `sidebar` : `hide`} >
        <div className="sidebar-profile">
            <img src={p} alt="" />
            <div><h6>Profile name</h6>
            <p>Username</p>
            </div>
        </div>
        {/* <div className='sidebar-list'> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> <Link to={`/myprofile/${authorId}`}>My profile</Link></div>
         <div className='sidebar-list' > <FontAwesomeIcon icon={faBook}></FontAwesomeIcon><Link to={`/mypost/${authorId}`}> My postes</Link>    </div> 
        <div className='sidebar-list'> <FontAwesomeIcon icon={faFloppyDisk}></FontAwesomeIcon> Saved postes</div> */}

       
        <div className='sidebar-list' onClick={Logout}> <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon> Logout</div>

      </div>
    </div>
  )
}

export default Sidebar

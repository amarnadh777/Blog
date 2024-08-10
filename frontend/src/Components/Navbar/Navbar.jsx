import React from 'react'
import "./Navbar.css"
import logo from "./Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
    <div className='navbar'>
        <div className="n-logo"><img src={logo} alt="" /></div>
        <div className="n-menus">
            <ul>
                <li>Home</li>
                <li>Blog</li>
                 <li>Single post</li>
                 <li>Pages</li>
                 <li>Contacts</li>
            </ul>


        </div>
        <div className="n-searchbar">
            <input type="text" placeholder='Search' />
            <FontAwesomeIcon icon={faSearch} className='n-searchicon'></FontAwesomeIcon>
            
            <button>Light mode</button>
        </div>

      
    </div>
  )
}

export default Navbar

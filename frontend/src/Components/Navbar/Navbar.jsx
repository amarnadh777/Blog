import React, { useContext } from 'react'
import "./Navbar.css"
import logo from "./Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faSearch } from '@fortawesome/free-solid-svg-icons'
import DarkmodeContext from '../../Utils/Mycontext'
import { Link } from 'react-router-dom'

function Navbar() {
 const {darkmode,setdarkmode,userLogined,setuserLogined }  = useContext(DarkmodeContext)

 const setdark = () =>
 {
   setdarkmode(!darkmode)

 }
 console.log("dark",darkmode);
 
  return (
    <div className='navbar'>
        <div className="n-logo"><img src={logo} alt="" /></div>
        <div className="n-menus">
            <ul>
                <li>Home</li>
             
                 <li>Pages</li>
                 <li>Contacts</li>
            </ul>


        </div>
        <div className="n-searchbar">
            <input type="text" placeholder='Search' />
            <FontAwesomeIcon icon={faSearch} className='n-searchicon'></FontAwesomeIcon>

          {!userLogined && ( <>  <Link  to="/login" className='Link'> <button className='n-login'>Loign</button></Link>   
         <Link to="/register" className='Link'>  <button className={darkmode ? `n-signup` :`darkmode-n-signup` }>SignUp</button></Link> </>) }
          {userLogined && (<>   <h3>Hi user</h3> <Link className='Link' to="/createpost"> <FontAwesomeIcon icon={faPen}></FontAwesomeIcon> Write  </Link>  </>)  }
            <button onClick={setdark}>Light mode  </button>
        </div>

      
    </div>
  )
}

export default Navbar

import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Postes from '../../Components/Postes/Postes'
import axios from  "axios"
import Sidebar from '../../Components/Sidebar/Sidebar'
import DarkmodeContext from '../../Utils/Mycontext'
function Homepage() {
  const {setuserLogined} = useContext(DarkmodeContext)
  const [postes,setpostes] = useState([])
  const [error,seterror] = useState("")
  const [loading,setloading] = useState(false)

  useEffect(() =>{
 const fetchpost =async () =>
  {
    try {
      setloading(true)
      const response = await axios.get("https://test-ndv4.onrender.com/api/post/getallpost")
      if(response.status == 200)
      {
           setloading(false)
      }
      setpostes(response.data.data)
    } catch (error) {
      setloading(false)
      seterror("some thing went wromg")
      console.log(error);
      
    }

  
  }
  fetchpost()
  },[])
  console.log(postes);
  useEffect(() =>
    {
      const check =   () =>
      {
        const authorInfo  = JSON.parse(localStorage.getItem("authorInfo"))
        
        if(authorInfo)
        {
          return setuserLogined(true)
        }
      }
      check()
    },[])
  return (
    <div>
        <Navbar></Navbar>
        {/* <Sidebar></Sidebar> */}
       {/* <Header></Header>
        */}
       <Postes data={postes}></Postes>
       {loading && <h1> loadingg........... </h1>}
       {error && <h1>404 server not responding</h1>}

</div>
  )
}

export default Homepage

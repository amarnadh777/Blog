import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Postes from '../../Components/Postes/Postes'
import axios from  "axios"
function Homepage() {
  const [postes,setpostes] = useState([])
  useEffect(() =>{
 const fetchpost =async () =>
  {
    try {
      const response = await axios.get("http://localhost:8000/api/post/getallpost")
      setpostes(response.data.data)
    } catch (error) {
      console.log(error);
      
    }

  
  }
  fetchpost()
  },[])
  console.log(postes);
  
  return (
    <div>
        <Navbar></Navbar>
        
       <Header></Header>

       <Postes data={postes}></Postes>
   

</div>
  )
}

export default Homepage

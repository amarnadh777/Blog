import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Postes from '../../Components/Postes/Postes'
import Navbar from '../../Components/Navbar/Navbar'
import Loading from '../../Components/Loading/Loading'
import Sidebar from '../../Components/Sidebar/Sidebar'


function Mypostes() {
    const {authorId} = useParams()
    const [postes, setpostes] = useState([])
    const [error,seterror] = useState("")
const [loading,setloading] = useState(false)
    useEffect(() => {
      
    
   
    
        const getMypostes = async() =>
            {
                try {
                  setloading(true)
                    const response = await axios.get(`https://test-ndv4.onrender.com/api/post/getpostbyauthor/${authorId}`)
                    if(response.data.data)
                    {
                      setloading(false)
                    }
                    setpostes(response.data.data)
                } catch (error) {
                    setloading(false)
                }
            }
      getMypostes()
    },  [])
    
  return (
    <div>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
      <h1>My postes</h1>
      {loading && <Loading></Loading>}
    { !loading && <Postes data={postes}></Postes>}
         
    </div>
  )
}

export default Mypostes

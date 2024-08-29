import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Postes from '../../Components/Postes/Postes'
import Navbar from '../../Components/Navbar/Navbar'


function Mypostes() {
    const {authorId} = useParams()
    const [postes, setpostes] = useState([])
    useEffect(() => {
      
    
   
    
        const getMypostes = async() =>
            {
                try {
                    const response = await axios.get(`http://localhost:8000/api/post/getpostbyauthor/${authorId}`)
                    setpostes(response.data.data)
                } catch (error) {
                    
                }
            }
      getMypostes()
    },  [])
    
  return (
    <div>
        <Navbar></Navbar>
      <h1>My postes</h1>
      
       <Postes data={postes}></Postes>
         
    </div>
  )
}

export default Mypostes

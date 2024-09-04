import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Postes from "../../Components/Postes/Postes";
import axios from "axios";
import Sidebar from "../../Components/Sidebar/Sidebar";
import DarkmodeContext from "../../Utils/Mycontext";
import Loading from "../../Components/Loading/Loading";
import "./Homepage.css"
import { useDispatch, useSelector } from "react-redux";
function Homepage() {
  const { setuserLogined, setopenSidebar, opensidebar } =
    useContext(DarkmodeContext);
  const [postes, setpostes] = useState([]);
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  const [category, setcategory] = useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
 

  useEffect(() => {
    const fetchpost = async () => {
      try {
        const authorInfo = JSON.parse(localStorage.getItem("authorInfo"));

        setloading(true);
        const response = await axios.get(
          "https://test-ndv4.onrender.com/api/post/getallpost"
        );
        if (response.status == 200) {
          setloading(false);
        }
        setpostes(response.data.data);
      } catch (error) {
        setloading(false);
        seterror("some thing went wromg");
        console.log(error);
      }
    };
    fetchpost();
  }, []);
 
  useEffect(() => {
    const check = () => {
      const authorInfo = JSON.parse(localStorage.getItem("authorInfo"));

      if (authorInfo) {
        return setuserLogined(true);
      }
    };
    check();
  }, []);
  
  return (
    <div
      
    >
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <div className="filter">
        <select
          name=""
          id=""
          onChange={async(e) => {
       
              try {
                e.preventDefault()
                const response = await axios.get(`http://localhost:8000/api/post/getpostbycategory?category=${e.target.value}`)
              
                setpostes(response.data.data)
              } catch (error) {
                
              }
          }}
        >
          <option value="All">All</option>

          <option value="Science">Science</option>

          <option value="Entertainment">Entertainment</option>
          <option value="Politics">Politcs</option>
        </select>
      </div>

      {/* <Header></Header>
       */}
      <Postes data={postes}></Postes>
      {loading && <Loading></Loading>}
    {error && <h1>404 server not responding</h1>}
    </div>
  );
}

export default Homepage;

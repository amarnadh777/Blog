import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter as Router, Routes,Route,Link, json } from 'react-router-dom';
import Postdetailed from './pages/Postdeatailed/Postdetailed';
import DarkmodeContext from './Utils/Mycontext';
import { createContext, useEffect, useState } from 'react';
import Login from './pages/Loginpage/Login';
import Register from './pages/Registerpage/Register';
import Createpost from './pages/Createpost/Createpost';
import Sidebar from './Components/Sidebar/Sidebar';
import Myprofile from './pages/Myprofile/Myprofile';
import Mypostes from './pages/Mypostes/Mypostes';
import Loading from './Components/Loading/Loading';

function App() {


 const [darkmode,setdarkmode] = useState(true)
 const [userLogined,setuserLogined] = useState(false)
 
 const [opensidebar,setopenSidebar] = useState(true)
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
    <div className={darkmode ? `lightmode` : `darkmode` }>
  
<Router>
<DarkmodeContext.Provider value={{darkmode,setdarkmode,userLogined,setuserLogined,opensidebar,setopenSidebar}} >   

  <Routes>
    
    
    <Route path='/' element={<Homepage></Homepage>}></Route>
    <Route path='/postdetails/:postId' element={<Postdetailed></Postdetailed>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path='/createpost' element={<Createpost></Createpost>}></Route>
    <Route path='/myprofile/:authorId' element={<Myprofile></Myprofile>}></Route>
    <Route path='/mypost/:authorId' element={<Mypostes></Mypostes>}></Route>


 
  </Routes>
  </DarkmodeContext.Provider>

</Router>









    </div>
  );
}

export default App;

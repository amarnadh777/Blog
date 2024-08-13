import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import Postdetailed from './pages/Postdeatailed/Postdetailed';
import DarkmodeContext from './Utils/Mycontext';
import { createContext, useEffect, useState } from 'react';
import Login from './pages/Loginpage/Login';
import Register from './pages/Registerpage/Register';
import Createpost from './pages/Createpost/Createpost';

function App() {


 const [darkmode,setdarkmode] = useState(true)
 const [userLogined,setuserLogined] = useState(false)
 useEffect(() =>
  {
    const check =   () =>
    {
      const username  = localStorage.getItem("username")
      if(username)
      {
        return setuserLogined(true)
      }
    }
    check()
  },[])
  return (
    <div className="App" class={darkmode ? `lightmode` : `darkmode` }>
<Router>
<DarkmodeContext.Provider value={{darkmode,setdarkmode,userLogined,setuserLogined}} >   

  <Routes>
    
    
    <Route path='/' element={<Homepage></Homepage>}></Route>
    <Route path='/postdetails/:postId' element={<Postdetailed></Postdetailed>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path='/createpost' element={<Createpost></Createpost>}></Route>

 
  </Routes>
  </DarkmodeContext.Provider>

</Router>









    </div>
  );
}

export default App;

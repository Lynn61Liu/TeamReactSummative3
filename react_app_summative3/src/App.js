
import Login from './pages/Login'
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom";
import React ,{ useState}from 'react'
import './App.css';

function App() {
  const  [userInfor,setUserInfor] = useState({ userID:" ", userRole:" "})

const getUID =(userObg)=>{
let temp = { ...userInfor, userID: userObg._id, userRole: userObg.userRole};
setUserInfor(temp);
}

  return (
    <div className="App">
    <Routes>
  
          <Route path="/" element={<Login getUID={getUID}/> }/>
          <Route path="/home/*" element={<Home {...userInfor}/> }/>

         
    </Routes>
    
    </div>
  );
}

export default App;

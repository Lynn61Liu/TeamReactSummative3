
import Login from './pages/Login'
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom";
import React ,{useState}from 'react'
import './App.css';
// const  gUserID="user007"
function App() {
  
const [userID, setuserID] = useState("")

const getUID =(loginID)=>{
 console.log('app return loginID=',loginID);
setuserID(loginID)
}


  return (
    <div className="App">
    <Routes>
  
          <Route path="/" element={<Login getUID={getUID}/> }/>
          <Route path="/home/*" element={<Home uID={userID} /> }/>
          {/* <Route path="/home/detail" element={<Detail postID={postID} userID={userID}/>}/> */}
          {/* <Route path="/add" element={<Add/>}/> */}
         
    </Routes>
    
    </div>
  );
}

export default App;

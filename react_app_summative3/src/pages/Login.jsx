import React ,{useState}from 'react'
import { Link } from 'react-router-dom'

function Login(props) {
  return (
    <>
     <h3> This is login page</h3>
     <h3> Task </h3>
     <ol>
       <li>build login Form</li>
       <li>user Name and Password validation</li>
       <li>Storing login information in Cookies</li>
       
     </ol>
       <button onClick={()=>{props.getUID("user001");}}> Simulate get userID from DB</button>
       <nav>
      <Link to="/home" ><button>Login</button></Link>
     </nav>
    </>
  )
}

export default Login
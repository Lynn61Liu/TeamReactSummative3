import React,{useEffect, useState}from 'react'
import axios from 'axios'
import useGetData from '../common/useGetData'

function ConnectDB() {
    const { data, isLoading, isError,error }=useGetData("http://localhost:4000/api/animals/624183ae3c89efb61c18040b")
    console.log('ConnectDB=' ,data);
    // const [mydata,setMyData]=useState();

    useEffect(() => {
      axios.delete("http://localhost:4000/api/delete-animals/").then((res) => {
        // setMyData(res.data);
         console.log(res.data);
      });
    }, []);
  return (
    <>
   <h4>get</h4>  
          <ul >
            <li >http://localhost:4000/api/animals <div style={{'color':'pink'}}> ---View all posts </div></li>
            <li>http://localhost:4000/api/animals-detail/:postID <div style={{'color':'pink'}}>---View detail</div></li>
            <li>http://localhost:4000/api/profile/:userID <div style={{'color':'pink'}}>--- View profile</div></li>
            <li>http://localhost:4000/api/login-by-email/:email <div style={{'color':'pink'}}>---check email</div></li>
            <li>http://localhost:4000/api/comments/:postID <div style={{'color':'pink'}}>--list all comments </div></li>
          </ul>
    </>
  )
}

export default ConnectDB
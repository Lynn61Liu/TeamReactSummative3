import React from 'react'
import { Link } from "react-router-dom";
function Profile(props) {
  return (
    <>
    <h3> This is Profile  page</h3>
     <h3> Task </h3>
     <ol>
       <li>get login user infor from DB </li>
       <li>Listing all own posts </li>
       <li>view the post detail</li>
       <li>can delete posts </li>
       <li>can edit posts </li>    
     </ol>

     <h3>The following parameters come to props: </h3>
    <div>userID:props.uID={props.uID}</div>

    <nav>
        <Link to="/home/detail">
          <button onClick={() => {props.getPostID("onclick post from profile page & postid42394283");}}>
            i'm a post
          </button>
        </Link>
      </nav>
    </>
  )
}

export default Profile
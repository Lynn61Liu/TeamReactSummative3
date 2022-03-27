import React from 'react'
import { Link } from "react-router-dom";
function Discover(props) {
  return (
    <>

    <h3> This is browse/home page</h3>
     <h3> Task </h3>
     <ol>
       <li>Listing all posts</li>
       <li>click any image will see more information</li>
       <li>admin can see the delete btn and other user cannot</li>
       <li>filter by Category</li>    
     </ol>
     <h4> userID = {props.uID}  </h4>

      <nav>
        <Link to="/home/detail">
          <button onClick={() => {props.getPostID("post68787");}}>
            i'm a post
          </button>
        </Link>
      </nav>
    </>
    
  )
}

export default Discover
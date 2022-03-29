import React from 'react'
import { Link } from "react-router-dom";
import '../css/profile.css';
import imgMike from '../img/mike.jpg'



function Profile(props) {
  return (
    <>
  <div className='profileDisplay'>
      
  <div className='profileDetails'>
      <div className='profileImg'></div>
      <div>
        <h3>username</h3>
        <p>User number:</p>
      </div>
    </div>

<hr />

    <div className='profileDescription'>
      <h3>Description</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio, animi dolor voluptas, est ea nulla dolores, ipsam nisi quis sapiente a sunt odio? Omnis fugiat esse nesciunt assumenda debitis optio, quod numquam possimus recusandae repellat beatae eos nobis veritatis?</p>
    </div>

    <hr />

    <div className='pastPosts'>
      <h3>Past Posts</h3>
      <div className='profileGallery'>
      <div className='profilePost'>
        <img src="" alt="" />
        <div>
          <img src="" alt="" />
          <div>
            <p><span>username</span></p>
            <p>date posted</p>
          </div>
          <a href="">icon</a>
        </div>
      </div>
      </div>
    </div>

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
  </div>

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
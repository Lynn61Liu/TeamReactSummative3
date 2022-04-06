import React,{useEffect,useState} from 'react';
import axios from 'axios';
import '../css/profile.css';
import Editbtn from '../components/Editbtn.jsx';
import Cookies from 'js-cookie';


function Profile(props) {
 
  const [profileData,setprofileData]=useState({});
  // const [myPost,setmyPost]=useState([]);

useEffect(() => {
  axios.get(`http://localhost:4000/api/profile/${Cookies.get('userID')}` )
  .then((response) => {
     console.log(response.data.profile);
     setprofileData(response.data.profile[0].userID);
    //  setmyPost(response.data.profile);
  });
}, [])

 
  return (
    <>
      <div className="profileDisplay">
        <div className="profileDetails">
          <div className="profileImg">
            <img src={profileData.userImg} alt=" " />
          </div>
          <div>
            <h3>{profileData.userName}</h3>
            <p> user Role:{profileData.userRole}</p>
          </div>
        </div>

        <hr />

        <div className="profileDescription">
          <h3>Description</h3>
          <p>
            {profileData.userDescription}
          </p>
         
        </div>

        <hr />

        <div className="pastPosts">
          <h3>Past Posts</h3>
          <div className="profileGallery">
            <div className="profilePost">
              <div className="userpostImg"></div>
              <div className="userpostMenu">
                <div>
                  <p>
                    <span>animal</span>
                  </p>
                  <p>post date</p>
                </div>
                <div>
                  <a href=" ">
                    
                    <Editbtn />
                  </a>
                </div>
              </div>
            </div>

            <div className="profilePost">
              <div className="userpostImg"></div>
              <div className="userpostMenu">
                <div>
                  <p>
                    <span>animal</span>
                  </p>
                  <p>post date</p>
                </div>
                <div>
                  <a href=" ">
                    {' '}
                    <Editbtn />{' '}
                  </a>
                </div>
              </div>
            </div>

            <div className="profilePost">
              <div className="userpostImg"></div>
              <div className="userpostMenu">
                <div>
                  <p>
                    <span>animal</span>
                  </p>
                  <p>post date</p>
                </div>
                <div>
                  <a href="">
                    {' '}
                    <Editbtn />{' '}
                  </a>
                </div>
              </div>
            </div>

            <div className="profilePost">
              <div className="userpostImg"></div>
              <div className="userpostMenu">
                <div>
                  <p>
                    <span>animal</span>
                  </p>
                  <p>post date</p>
                </div>
                <div>
                  <a href="">
                    {' '}
                    <Editbtn />{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <ol>
          <li>get login user infor from DB </li>
          <li>Listing all own posts </li>
          <li>view the post detail</li>
          <li>can delete posts </li>
          <li>can edit posts </li>
        </ol>

        <h3>The following parameters come to props: </h3>
        <div>userID:props.uID={props.uID}</div> */}
      </div>

      {/* <nav>
        <Link to="/home/detail">
          <button
            onClick={() => {
              props.getPostID(
                'onclick post from profile page & postid42394283',
              );
            }}
          >
            i'm a post
          </button>
        </Link>
      </nav> */}
    </>
  );
}

export default Profile;

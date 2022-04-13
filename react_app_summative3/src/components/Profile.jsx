import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/profile.css";
// import Editbtn from "../components/Editbtn.jsx";
import Cookies from "js-cookie";
import PostCardItem from './PostCardItem'

function Profile(props) {
  const [profileData, setprofileData] = useState({});
  const [myPost,setmyPost]=useState([]);
   const [delFlag, setdelFlag] = useState(false);
   const profileHandleDel =(delFlag)=>{
    setdelFlag(delFlag);
   }
const [isLoading,setisLoading]=useState(false);
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`http://localhost:4000/api/profile/${Cookies.get("userID")}`)
      .then((response) => {
         console.log(response.data.profile);
        setprofileData(response.data.profile[0].userID);
        setmyPost(response.data.profile);
      });

  }, [delFlag]);

  return (
    <>
      <div className="profileDisplay">
        <div className="profileDetails">
          <div className="profileImg">
            <img src={profileData.userImg} alt=" " />
          </div>
          <div className="userDetails">
            <h3>{profileData.userName}</h3>
            <div>user Role: {profileData.userRole}</div>
          </div>
        </div>
        <hr />
        <div className="profileDescription">
          <h3>Description</h3>
          <p>{profileData.userDescription}</p>
        </div>
        <hr />

        <div className="pastPosts">
          <h3>Past Posts</h3>
          <div className="profileGallery">
            {isLoading &&
              myPost.map((item, id) => {
                return (
                  <PostCardItem
                    {...item}
                    key={id}
                    getPostID={props.getPostID}
                    profileHandleDel={profileHandleDel}
                    delFlag={delFlag}
                  />
                );
              })}
          </div>
        </div>

    
      </div>
    </>
  );
}

export default Profile;

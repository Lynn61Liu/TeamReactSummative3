import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Add from "../components/Add";
import Detail from "../components/Detail";
import About from "../components/About";
import Contact from "../components/Contact";
import Discover from "../components/Discover";
import Profile from "../components/Profile";
function Home(props) {
  const [postID, setPostID] = useState("");
  const getPostID = (PostID) => {
    console.log("homepage return PostID=", PostID);
    setPostID(PostID);
  };
  return (
    <>
 
    <h1 style={{ backgroundColor: "grey",'width':'100%','marginTop':0}}>Top app bar 
    <Link to="/home/about"><button > about</button> </Link>
        <Link to="/home/contact"><button > contact</button> </Link>
        {/* <Link to="/home/profile"><button > profile</button> </Link> */}
    </h1>
   {/* fix top */}
      <div style={{ backgroundColor: "pink" }}>
        <Routes>
        <Route index element={<Discover getPostID={getPostID} uID={props.uID}/>} />
        <Route path=":postId" element={<Detail uID={props.uID} pID={postID} />}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/profile" element={<Profile uID={props.uID} getPostID={getPostID}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>

      {/* fix bottom */}
      <h1 style={{ backgroundColor: "grey",'width':'100%','marginBottom':0}}>
        Bottom navigation
        <Link to="/home"><button > home</button> </Link>
        <Link to="/home/add"><button > add</button> </Link>
        <Link to="/home/profile"><button > profile</button> </Link>
     
         </h1>
         
    </>
  );
}

export default Home;

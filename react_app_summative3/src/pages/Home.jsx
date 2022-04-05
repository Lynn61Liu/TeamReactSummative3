import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Add from "../components/Add";
import Detail from "../components/Detail";
import About from "../components/About";
import Contact from "../components/Contact";
import Discover from "../components/Discover";
import Profile from "../components/Profile";
import Appbar from "../components/Appbar";
import BottomAppBar from "../components/BottomAppBar.jsx";

function Home(props) {
  // console.log(props);
  const [postID, setPostID] = useState("");
  const getPostID = (PostID) => {
    console.log("homepage return PostID=", PostID);
    setPostID(PostID);
  };

  return (
    <>
      <Appbar />
      {/* fix top */}
      <div style={{ backgroundColor: "white", marginTop: "65px",paddingBottom: "95px" }}>
        <Routes>
          <Route
            index
            element={<Discover getPostID={getPostID} uID={props.userID} />}
          />
          <Route
            path=":postId"
            element={<Detail uID={props.userID} pID={postID} />}
          />
          <Route path="/add" element={<Add />} />
          <Route
            path="/profile"
            element={<Profile uID={props.userID} getPostID={getPostID} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <BottomAppBar />
    </>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import "../css/discover.css";
import axios from "axios";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import PostCardItem from "./PostCardItem";

function Discover(props) {
  const [dicoverData, setdicoverData] = useState({});
  const [discoverIsLoading, setDiscoverisLoading] = useState(true);
  const [discoverIsError, setDiscoverIsError] = useState(false);
  const [discoverError, setDiscoverError] = useState("");
  const [havePostData, sethavePostData] = useState(false);
  const [delFlag, setdelFlag] = useState(false);
  const [url, setUrl] = useState("http://localhost:4000/api/animals");
  const handleGetData = (url) => {
    axios
      .get(url)
      .then((response) => {
        setdicoverData(response.data.animals);
        sethavePostData(true);
      })
      .catch(function (error) {
        //  setdetailisLoading(false);
        setDiscoverIsError(true);
        setDiscoverError(error);
      });
  };
  useEffect(() => {
  
    setDiscoverisLoading(false);
    handleGetData(url);
  }, [delFlag, url]);
  const profileHandleDel = (delFlag) => {
    setdelFlag(delFlag);
  };

  const handleCategory = (e) => {
    if (e.target.value === "all") {
      setUrl("http://localhost:4000/api/animals");
    } 
  else {
   setUrl(`http://localhost:4000/api/animals-category/${e.target.value}`);   
    }
   
  };

  return (
    <>
      {discoverIsLoading ? (
        <div>
          <Stack
            sx={{ color: "grey.500" }}
            spacing={2}
            direction="row"
            className="pageLoading"
          >
            <CircularProgress color="inherit" />
          </Stack>
          <h3>Page Loading...</h3>
        </div>
      ) : discoverError ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          CONNECTION DB ERRORS !{discoverError}
        </Alert>
      ) : (
        havePostData && (
          <div className="discoverDisplay">
            <div className="discoverDetails">
              <h3>Discover NZ Wildlife</h3>
            </div>
            <div className="searchButtons">
              <button value="all" onClick={handleCategory}>
                ALL
              </button>
              <button value="marinemammals" onClick={handleCategory}>
                MARINE MAMMALS
              </button>
              <button value="reptilesandfrogs" onClick={handleCategory}>
                REPTILES AND FROGS
              </button>
              <button value="rodents" onClick={handleCategory}>
                RODENTS
              </button>
              <button value="birds" onClick={handleCategory}>
                BIRDS
              </button>
              <button value="insects" onClick={handleCategory}>
                INSECTS
              </button>
            </div>
            <div className="pastPosts">
              <div className="discoveryGallery containerDiscover">
                {dicoverData.map((item, id) => {
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
        )
      )}
    </>
  );
}

export default Discover;

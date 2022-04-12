import React, { useEffect, useState } from "react";
import "../css/postPage.css";
import Backbtn from "../components/Backbtn.jsx";
import Avatar from "@mui/material/Avatar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import InfoIcon from "@mui/icons-material/Info";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CommentItem from "./CommentItem";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
import "moment/locale/en-nz";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";

//  the tabbar SwipeableViews start
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
//  the tabbar SwipeableViews   end

//CUSTOM INPUT CSS
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#1ca3a6",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#1ca3a6",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#B5B2B2",
    },
    "&:hover fieldset": {
      borderColor: "#1ca3a6",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1ca3a6",
    },
  },
});
//=============================================================================================================
function Detail(props) {
  // console.log('detail props=',props);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  ////////DialogActions  about new comment
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setHaveComment(false);
    setcommentValue("");
  };
  const [author, setauthor] = useState(Cookies.get("userID"));
  const [commentValue, setcommentValue] = useState("");
  const [havecomment, setHaveComment] = useState(false);

  const handlecommentChange = (e) => {
    setcommentValue(e.target.value);
    if (e.target.value.replace(/\s/g, "") === "") {
      setHaveComment(false);
    } else {
      setHaveComment(true);
    }
  };
  const handlePost = (e) => {
    e.preventDefault();
    if (updateCID.length > 0) {
      let update = {
        comment: e.target.newcomment.value,
        updateTime: new Date(),
      };
      axios
        .patch(`//localhost:4000/api/update-comment/${updateCID}`, update)
        .then((response) => {
          console.log(response.data);
          sethaveUpdate(!haveUpdate);
        });
      setupdateCID("");
    } else {
      // console.log("here is new comment");
      let formdata = {
        postID: props.pID,
        comment: e.target.newcomment.value,
        userID: author,
        createTime: new Date(),
        updateTime: new Date(),
      };
      axios
        .post("//localhost:4000/api/add-comment", formdata)
        .then((response) => {
          setupdatData(response.data._id);
          setcommentValue("");
          // console.log('SAVE It');
        });
    }
    //end updat post

    handleClose();
  };

  //getdata
  const [detailData, setDetailData] = useState({});
  const [updatData, setupdatData] = useState();
  const [detailisLoading, setdetailisLoading] = useState(false);
  const [detailisError, setdetailisError] = useState(false);
  const [detailError, setdetailError] = useState("");
 const [havePostData, sethavePostData] = useState(false);
  useEffect(() => {
    console.log("detai= use effect start");
    setdetailisLoading(false);
    axios
      .get(`http://localhost:4000/api/animals-detail/${props.pID}`)
      .then((response) => {
        setDetailData(response.data.post_detail);
        sethavePostData(true);
      console.log(detailisLoading);
      console.log(detailisError);
       
      })
      .catch(function (error) {
      //  setdetailisLoading(false);
        setdetailisError(true);
        setdetailError(error);
      });
  }, []);

  //GET COMMENT DATA
  const [commentData, setcommentData] = useState({});
  const [iscommentLoading, setiscommentLoading] = useState(false);
  const [flagDele, setsflagDele] = useState(false);
  const [haveUpdate, sethaveUpdate] = useState(false);
  const shortcomment = (newflag) => {
    setsflagDele(newflag);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/comments/${props.pID}`)
      .then((response) => {
        setcommentData(response.data);
        setiscommentLoading(true);

      });
  }, [flagDele, updatData, haveUpdate]);

  //GET COMMENT DATA END

  //UPDATE COMMENT
  const [updateCID, setupdateCID] = useState("");
  const updatecomment = (cid) => {
    setupdateCID(cid);
    handleClickOpen();
    const updateItem = commentData.filter((e) => e._id === cid);
    setcommentValue(updateItem[0].comment);
  };

  moment.locale("en-nz");

  return (
    <>
      {detailisLoading ? (
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
      ) : detailError ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          CONNECTION DB ERRORS !
        </Alert>
      ) : (
        havePostData && (
          <div className="postPage">
            <div className="title">
              <Link to="/home">
                <Backbtn />
              </Link>
              {/* <h2>Animal {detailData.category}</h2> */}
            </div>

            <div className="postDetail">
              <div className="detailImg">
                <img src={detailData.images} alt="" />
              </div>
              <div className="postMenu">
                <div className="postMenuLeft">
                  <div> {detailData.category} </div>
                  <div> {detailData.titleName}</div>
                </div>
                <div className="postMenuRight">
                  <Avatar src={detailData.userID.userImg} />
                   {/* <div> {detailData.userID.userName}</div> */}

                  <div>{moment(detailData.postTime).format("LL")}</div>
                </div>
              </div>
            </div>

            {/* ================tab bar========================= */}
            <Box
              sx={{
                width: "100%",
                margin: "20px 0px",
                "& .MuiPaper-root": {
                  backgroundColor: "white",
                  boxShadow: "none",
                },
              }}
            >
              <AppBar position="static">
                <Tabs
                  className="detail-tab"
                  value={value}
                  onChange={handleChange}
                  variant="fullWidth"
                  aria-label="full width tabs example"
                  sx={{
                    //MuiButtonBase-root-MuiTab-root
                    "& .MuiTabs-indicator": {
                      backgroundColor: "#1ca3a6",
                    },
                    "& .Mui-selected": {
                      color: "rgb(28, 163, 166) !important ",
                      //color: "#1ca3a6",
                    },
                  }}
                >
                  <Tab
                    icon={<InfoIcon />}
                    aria-label="Item One"
                    {...a11yProps(0)}
                  />
                  <Tab icon={<ForumOutlinedIcon />} {...a11yProps(1)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <div className="TabPanelWrap">
                    <div className="tab-title">Description</div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: detailData.description,
                      }}
                    />
                  </div>
                </TabPanel>

                {/* ===========================comments =========================== */}
                <TabPanel
                  value={value}
                  index={1}
                  dir={theme.direction}
                  sx={{ margin: "20px 0px" }}
                >
                  <div className="TabPanelWrap">
                    <div className="comments">
                      <Avatar alt="" src={Cookies.get("userImg")} />

                      <input
                        type="text"
                        placeholder="Write a comment..."
                        className="postComment"
                        onClick={handleClickOpen}
                      />
                    </div>
                    {
                    iscommentLoading &&
                      commentData.map((item, id) => {
                        return (
                          <CommentItem
                            {...item}
                            key={id}
                            shortcomment={shortcomment}
                            updatecomment={updatecomment}
                            flagDele={flagDele}
                          />
                        );
                      })}
                  </div>
                </TabPanel>
              </SwipeableViews>
            </Box>
          </div>
         )
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="comment-title">
          <span> Comment</span>
          <div className="comment-cancel" onClick={handleClose}>
            {" "}
            x
          </div>
        </DialogTitle>
        <DialogContent sx={{ m: 1 }}>
          <form onSubmit={handlePost} className="comment-form">
            <CssTextField
              fullWidth
              autoFocus
              multiline
              rows={8}
              name="newcomment"
              value={commentValue}
              onChange={handlecommentChange}
              // defaultValue="Write a comment..."
              // label="Write a comment"
            />

            <div className="post-wrap">
              <input
                type="submit"
                value="Post"
                disabled={!havecomment}
                className="comment-post"
              />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Detail;

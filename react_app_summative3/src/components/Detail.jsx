import React, { useEffect } from "react";
import "../css/postPage.css";
import Backbtn from "../components/Backbtn.jsx";
import mike from "../img/mike.jpg";
import bird from "../img/bird.jpg";

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

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import CommentItem from "./CommentItem";

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

function Detail(props) {
  // console.log(props);
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  ////////DialogActions
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    // console.log("handleClose")
    setOpen(false);
  };

  const handlePost = (e) => {
    e.preventDefault();
    console.log(e.target.newcomment.value);
  };

  return (
    <>
      <div className="postPage">
        <div className="title">
          <a href=" ">
            <Backbtn />
          </a>
          <h2>Animal Title</h2>
        </div>

        <div className="postDetail">
          <div className="detailImg">
            <img src={bird} alt="" />
          </div>
          <div className="postMenu">
            <span className="post-name">Australia Bird</span>
            <span>2022-10-08</span>
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
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                  unde hic nesciunt quis asperiores voluptate officia vitae
                  corrupti rem. Perferendis iure voluptas quod omnis magnam
                  libero dolorum dolores aliquam, accusamus provident ipsum odit
                  alias veniam recusandae expedita possimus dicta. Ad in numquam
                  alias, aliquam veritatis ducimus rem deserunt corporis
                  exercitationem.
                </p>
              </div>
            </TabPanel>

            {/* ===========================comments =========================== */}
            <TabPanel
              value={value}
              index={1}
              dir={theme.direction}
              sx={{ margin: "20px 0px" }}
              //   // MuiBox-root css-19kzrtu
              //   "& .css-19kzrtu": {
              //      margin: "20px 0px",
              //     padding: "20px 0px",
              //   },
              // }}
            >
              <div className="TabPanelWrap">
                <div className="comments">
                  <Avatar alt="Mike" src={mike} />

                  <input
                    type="text"
                    placeholder="Write a comment..."
                    className="postComment"
                    onClick={handleClickOpen}
                  />
                  {/* <a href=" ">Post</a> */}
                </div>
                <CommentItem />
                <CommentItem />
                <CommentItem />
              </div>
            </TabPanel>
          </SwipeableViews>
        </Box>
      </div>

      {/* //DialogActions */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="comment-title">
          <span>Add Comment</span>
          <div className="comment-cancel" onClick={handleClose}> x
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
              // defaultValue="Write a comment..."
              // label="Write a comment"
            />

            <div className="post-wrap">
              <input type="submit" value="Post" className="comment-post" />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Detail;

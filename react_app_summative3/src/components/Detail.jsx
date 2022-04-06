import React from "react";
import "../css/postPage.css";
import Backbtn from "../components/Backbtn.jsx";
import mike from "../img/mike.jpg";
import bird from "../img/bird.jpg";

import Avatar from "@mui/material/Avatar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import InfoIcon from "@mui/icons-material/Info";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
// import Typography from "@mui/material/Typography";
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
                  color: "rgb(28, 163, 166) ",
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
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div className="TabPanelWrap">
                <div className="comments">
                  <Avatar alt="Mike" src={mike} />

                  <input
                    type="text"
                    placeholder="Write a comment..."
                    className="postComment"
                  />
                  <a href=" ">Post</a>
                </div>
                <div className="commentsDone">
                  <Avatar alt="Mike" src={mike} />
                  <div id="comment-box" className="postComment">
                    <p>
                      {" "}
                      Where did you spot that bird? <br />
                      beautiful creature updating
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
          </SwipeableViews>
        </Box>
      </div>
    </>
  );
}

export default Detail;

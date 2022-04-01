import * as React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ZIPlogo from '../img/logo.png'
import EmailIcon from '@mui/icons-material/Email';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import '../css/Appbar.css'



export default function ButtonAppBar() {
  const [state, setState] = React.useState({
    top: false,
  });
   const [flag,setFlag]=React.useState(false);
  const [anchor, setAnchor] = React.useState("top");

  const toggleDrawer = (anchor, flag) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
   
    setState({ ...state, [anchor]: flag });
    setFlag(!flag);

  };

  const list = (anchor) => (
    <Box
      // sx={{ top: '100px'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{backgroundColor:'#555452',color:'white'}}>

      <Link to="/home/about" className="appBarLink" >
        <ListItem button >
          <ListItemIcon sx={{fontSize:30,color:'white'}}><GroupIcon /></ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        </Link >

        <Link to="/home/contact" className="appBarLink">
        <ListItem button>
          <ListItemIcon sx={{fontSize:30,color:'white'}}><EmailIcon /></ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
        </Link>

        <Link to="/login" className="appBarLink">
        <ListItem button>
          <ListItemIcon sx={{fontSize:30,color:'white'}}><LogoutIcon /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
        </Link>

    
      </List>
    </Box>
  );

  

  return (
    <Box sx={{ flexGrow: 1}} className="AppbarTool" >
      <AppBar  sx={{ bottom: "auto", top: 0,backgroundColor:"#272727"}}>
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <img src={ZIPlogo} style={{width:'130px'}} alt=" " />
          <div>
            <React.Fragment key={anchor}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(anchor, flag)}
              >
                <MenuIcon />
              </IconButton>
           
            </React.Fragment>
          </div>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer className="AppbarDrawer"
      sx={{
        '& .MuiModal-root': { zIndex: 200,color:'white'},
         '& .MuiDrawer-paper': {top: '56px'}, 
      }}
   

                disableScrollLock={true}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
      </SwipeableDrawer>
    </Box>
  );
}

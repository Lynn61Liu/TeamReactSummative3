import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
   color:'white',
  backgroundColor:'#1ca3a6'
  
});

export default function BottomAppBar() {
 
  return (
    <React.Fragment>
      <AppBar sx={{ top: "auto", bottom: 0, backgroundColor: "#555452" }}>
        <Toolbar sx={{ justifyContent: "space-between"}}>
          <Link to="/home">
            <BottomNavigationAction
              sx={{ maxWidth: "50%", padding: 0 }}
              icon={<HomeIcon sx={{ color: "white", fontSize: 40 }} />}
            />
          </Link>
          <Link to="/home/add">
            <StyledFab  aria-label="add">
              <AddIcon />
            </StyledFab>
          </Link>
          <Link to="/home/profile">
            <BottomNavigationAction
              sx={{ maxWidth: "50%", padding: 0 }}
              icon={<PersonIcon sx={{ color: "white", fontSize: 40 }} />}
              />
            
              
          
          </Link>
         
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

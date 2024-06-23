import { useState } from "react";

import Menu from "./Menu";
import MenuButtons from "./MenuButtons";
import AuthorizationModal from "./AuthorizationModal";
import SidebarMenu from "./SidebarMenu";

import { menuItems } from "./data";

import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Colors } from "../../theme/appTheme";
import { AppContainer } from "../App/AppContainer";


export default function Navbar() {

  let [isLoginModalOpen, setLoginModalOpen] = useState(false);
  let [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  let [sidebarOpen, setSidebarOpen] = useState(false);
  
  let handleLoginModalOpen = () => setLoginModalOpen(true);
  let handleLoginModalClose = () => setLoginModalOpen(false);

  let handleSignUpModalOpen = () => setSignUpModalOpen(true);
  let handleSignUpModalClose = () => setSignUpModalOpen(false);

  return (
    <>
      <AppBar 
        position="sticky"
        sx={{
          boxShadow: "none",
          backgroundColor: "#fff", 
        }}
      >
        <AppContainer>
          <Toolbar 
            sx={{
              justifyContent: {xs: 'space-between', md: 'flex-start'} 
            }}
          >
            <Typography 
              variant="h4" 
              component="h2"
              sx={{
                mr: 5, 
                fontWeight: 700, 
                fontSize: "2.5rem", 
                color: Colors.darkBlue
              }}
            >
              Shortly
            </Typography>
            <Menu menuItems={menuItems} />
            <MenuButtons loginModalOpen={handleLoginModalOpen} signUpModalOpen={handleSignUpModalOpen}/>
            <IconButton
              aria-label="menu-button"
              sx={{ display: {md: 'none'} }}
              onClick={() => setSidebarOpen(true)}
            >
              <MenuIcon 
                sx={{ 
                  fontSize: "2.5rem", 
                  color: Colors.gray
                  }} 
              />
            </IconButton>
            <SidebarMenu 
              menuItems={menuItems} 
              open={sidebarOpen} 
              loginModalOpen={handleLoginModalOpen}
              signUpModalOpen={handleSignUpModalOpen} 
              setSidebarOpen={setSidebarOpen}
            />
          </Toolbar>
        </AppContainer> 
      </AppBar>
      <AuthorizationModal content="login" open={isLoginModalOpen} handleClose={handleLoginModalClose}/>
      <AuthorizationModal content="signUp" open={isSignUpModalOpen} handleClose={handleSignUpModalClose}/>
    </>
  )
}

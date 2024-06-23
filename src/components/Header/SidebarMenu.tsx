import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LoginIcon from '@mui/icons-material/Login';

import type { MenuItem } from "./data";

type SideBarProps = {
  menuItems: MenuItem[];
  open: boolean;
  setSidebarOpen: (value: boolean) => void;
  loginModalOpen: () => void;
  signUpModalOpen: () => void;
};

export default function SidebarMenu({menuItems, open, setSidebarOpen, loginModalOpen, signUpModalOpen}: SideBarProps) {

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setSidebarOpen(false)}>
      <List>
        {menuItems.map(item => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <MenuOpenIcon />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Login', 'SignUp',].map(item => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText 
                primary={item} 
                onClick={item === 'Login' ? loginModalOpen : signUpModalOpen}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );



  return (
    <>
      <Drawer
        anchor={"right"} 
        open={open} 
        onClose={() => setSidebarOpen(false)}
        sx={{".MuiDrawer-paper": {maxHeight: "50vh"}}}
      >
        {DrawerList}
      </Drawer>
    </>
  )
}

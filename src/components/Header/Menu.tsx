import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Colors } from "../../theme/appTheme";

import type { MenuItem } from "./data";

type MenuProps = {
  menuItems: MenuItem[];
};

export default function Menu({menuItems}: MenuProps) {
  return (
    <List 
      sx={{ 
        alignSelf: "flex-start", 
        display: {xs: 'none', md: 'flex'}
      }}
    >
      {menuItems.map((item: MenuItem)  => (
        <ListItem key={item.name} disablePadding>
          <ListItemButton
            component="a" 
            href={item.url} 
            sx={{ '&:hover': { background: "none" }}}
          >
            <ListItemText 
              primary={item.name} 
              sx={{ 
                color: Colors.grayViolet, 
                '& .MuiListItemText-primary': {
                  fontWeight: 700,
                  fontSize: "0.8rem"
                },
                '&:hover': {
                  color: "#000",
                } 
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}

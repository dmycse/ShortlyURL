import { Box, Button } from "@mui/material";
import { Colors } from "../../theme/appTheme";

type MenuButtonsProps = {
  loginModalOpen: () => void;
  signUpModalOpen: () => void;
}

let buttonStyles = {
  p: 1,
  px: 3,
  fontSize: "0.7rem", 
  fontWeight: 700, 
  textTransform: "none",
  borderRadius: 4,
  color: Colors.grayViolet,
  '&:hover': {
    color: "#000",
    backgroundColor: "primary.main",
  } 
};

export default function MenuButtons({loginModalOpen, signUpModalOpen}: MenuButtonsProps) {
  let token = null;

  return (
    <Box 
      sx={{
        flexGrow: 1, 
        display: {xs: 'none', md: 'flex'}, 
        justifyContent: "flex-end"
        }}
      >
        {token
          ? <Button sx={{...buttonStyles, mr: 1}}>Log out</Button>
          : (
            <>
              <Button 
                sx={{...buttonStyles, mr: 1}}
                onClick={loginModalOpen}
              >
                Login
              </Button>
              <Button 
                sx={{
                ...buttonStyles,
                color: "#fff", 
                backgroundColor: "primary.main", 
                padding: "2px 18px"
                }}
                onClick={signUpModalOpen}
              >
                Sign Up
              </Button>
            </>
          )
        }
    </Box>
  )
}

import { Stack, styled } from "@mui/material";


export const AppContainer = styled(Stack)(({theme}) => ({
  margin: "0 auto",
  width: "100%",
  maxWidth: 1440,
  [theme.breakpoints.down("md")]: {
    padding: "0 0.8rem"
  },
  [theme.breakpoints.up("md")]: {
    padding: "0 6.25rem"
  }
}));

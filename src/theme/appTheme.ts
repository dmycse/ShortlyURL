import { createTheme } from "@mui/material";

export const Colors = {
  primary: "hsl(180, 66%, 49%)",
  secondary: "hsl(0, 87%, 67%)",
  violet: "hsl(257, 27%, 26%)",
  // Neutral
  light: "hsl(225, 33%, 95%)",
  gray: "hsl(0, 0%, 75%)",
  grayViolet: "hsl(257, 7%, 63%)",
  darkBlue: "hsl(255, 11%, 22%)",
  darkViolet: "hsl(260, 8%, 14%)"
};

const appTheme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
      dark: Colors.violet
    },
    secondary: {
      main: Colors.secondary
    }
  },
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  }
})

export default appTheme;
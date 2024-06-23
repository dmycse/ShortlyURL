import { Box, Button, Typography } from "@mui/material";
import { Colors } from "../../theme/appTheme";
import Img from '../../assets/svg/illustration-working.svg';
import { AppContainer } from "../App/AppContainer";


export default function Hero() {
  return (
    <Box component="section" >
      <AppContainer
        sx={{
          padding: {xs: "2rem", md: "3rem 0 3rem 6.25rem"},
          flexDirection: {xs: "column", md: "row-reverse"},
          alignItems: "center",
          gap: "4rem",
          overflow: "hidden"
        }}
      >
        <Box 
          component="div"
          sx={{
            width: {xs: "100", md: "60%"},
          }}
        >
          <Box 
            component="img"
            alt="hero"
            src={Img}
            sx={{
              width: {xs: "100%", md: "90%"}, 
              marginRight: "auto"
            }}
          />
        </Box>
        <Box 
          component="article" 
          sx={{
            pl: 3,
            textAlign: {xs: "center", md: "left"},
            flex: "0 1 50%"
          }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            sx={{
              mt: {md: 0},
              mb: {xs: "0.75rem"},
              fontWeight: 700,
              fontSize: {xs: "2.5rem", md: "3rem", lg: "4rem"},
              lineHeight: {md: "1.25"},
              color: Colors.darkViolet,
              opacity: "0.9"
            }}
          >
            More than just shorter links
          </Typography>
          <Typography 
            variant="body1" 
            paragraph
            sx={{
              mb: 4,
              fontSize: 18,
              fontWeight: 500,
              color: Colors.gray
            }}
          >
            Buid your brand's recognition and get detailed insights on how your links are performing.
          </Typography>
          <Button 
            size="large"
            sx={{
              py: 0.5,
              px: "1.8rem",
              textTransform: 'none',
              fontWeight: 700,
              lineHeight: "2.5",
              borderRadius: 6,
              backgroundColor: "primary.main",
              color: "#fff",
              ':hover': {
                bgcolor:  "primary.main",
                opacity: "0.5"
              }
            }}
          >
            Get Started
          </Button>
        </Box>
      </AppContainer>
    </Box>
  )
}

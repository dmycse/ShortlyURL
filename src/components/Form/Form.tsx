import { Box, Button, Stack, TextField } from "@mui/material";
import { Colors } from "../../theme/appTheme";
import { AppContainer } from "../App/AppContainer";


export default function Form() {
  return (
    <Box
      component="section"
      sx={{
        background: `linear-gradient(white 50%, ${Colors.light} 50%)`,
        backgroundSize: "cover"
      }}
    >
      <AppContainer
        sx={{
          px: {xs: "calc(0.8rem + 24px)", md: "calc(6.25rem + 24px)"}
        }}
      >
        <Box
          component="form"
          autoComplete="off"
          sx={{
            padding: "2.5rem 2rem",

            display: "flex", 
            justifyContent: "center",
            flexDirection: {xs: "column", md: "row"}, 
            gap: "1rem",

            background: Colors.violet,
            backgroundImage: {
              xs: "url('../src/assets/svg/bg-shorten-mobile.svg')",
              md: "url('../src/assets/svg/bg-shorten-desktop.svg')"
            },
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            backgroundSize: "cover",

            borderRadius: 3
          }}
        >
          <TextField 
            id="outlined-basic" 
            placeholder="Shorten a link here..." 
            variant="outlined"
            type="url"
            // inputProps = {{
            //   sx: {
            //       '&::placeholder': {
            //         color: 'red',
            //         opacity: 1, // otherwise firefox shows a lighter color
            //       }
            //     }
            // }}
            sx={{ 
              mr: {xs: "0", md: "1rem"}, 
              flex: "1 1 50%", 
              lineHeight: "2.5",
              borderRadius: 2,
              backgroundColor: "#fff",
              border: "none",
              outlined: "none",
              "& fieldset": { border: 'none' }
            }}
          />
          <Button 
            size="large"
            type="submit"
            sx={{
              py: 0.5,
              px: "2rem",
              textTransform: 'none',
              fontWeight: 700,
              lineHeight: "2.5",
              borderRadius: 2,
              backgroundColor: "primary.main",
              color: "#fff",
              ':hover': {
                bgcolor:  "primary.main",
                opacity: "0.8"
                }
            }}
          >
            Shorten it!
          </Button>
        </Box>
      </AppContainer>
    </Box>
  )
}

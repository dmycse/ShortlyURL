import { Fragment } from "react";
import { Box, Stack, Typography, styled } from "@mui/material";
import { Colors } from "../../theme/appTheme";
import { AppContainer } from "../App/AppContainer";

import { features } from "./data";

let StyledImg = styled('img')({
  width: "50%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "1"
})

export default function Features() {
  return (
    <Box
      component="section"
      sx={{
        pt: {xs: 8, md: 12},
        pb: {xs: 10, md: 22},
        background: Colors.light,
      }}
    >
      <AppContainer>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Typography 
            component="h2" 
            variant="h4" 
            sx={{
              paddingBottom: 3,
              fontWeight: 700,
              color: Colors.darkViolet
            }}
          >
            {features.title}
          </Typography>
          <Typography 
            sx={{
              paddingBottom: 8,
              maxWidth: {xs: "60%", md: "40%"},
              fontSize: "1rem",
              fontWeight: 500,
              textAlign: "center",
              color: Colors.gray
            }}
          >
            {features.description}
          </Typography>
        </Stack>
        <Stack 
          sx={{
            mx: "auto",
            flexDirection: {xs: "column", md: "row"},
          }}
        >
          {features.items.map((item, index) => (
            <Fragment key={item.id}>
              <Box 
                component="article"
                sx={{
                  ...(index === 1 && {transform: {md: "translateY(3rem)"}}),
                  ...(index === 2 && {transform: {md: "translateY(6rem)"}}),
                  px: 3,
                  pb: 3,
                  borderRadius: 2, 
                  backgroundColor: "#fff"
                }}
              >
                <Box 
                  sx={{
                    mx: {xs: "auto", md: 0},
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    backgroundColor: Colors.violet,
                    position: "relative",
                    transform:  "translateY(-50%)",
                }}>
                  <StyledImg src={item.icon} alt={item.title} />
                </Box>
                <Typography 
                  component="h3"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    textAlign: {xs: "center", md: "left"}
                  }}
                >
                  {item.title}
                </Typography>
                <Typography 
                  sx={{
                    fontSize: "0.85rem",
                    textAlign: {xs: "center", md: "left"},
                    color: Colors.gray
                  }}
                >
                  {item.body}
                </Typography>
              </Box>
              {(index === 0 || index === 1) && (
                <Box 
                  sx={{
                    mx: {xs: "auto", md: 0},
                    mt: {xs: 0, md: 18},
                    width: {xs: 5, md: 70},
                    height: {xs: 70, md: 5},
                    backgroundColor: Colors.primary,
                  }}
                />
                )
              }
            </Fragment>
            ))
          }
        </Stack>
      </AppContainer>
    </Box>
  )
}

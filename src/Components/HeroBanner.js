import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HeroBannerimg from "../images/coverimg.jpeg";
import HeroBannerimgtwo from "../images/covertwo.jpeg";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="30px"
    >
      <Typography color="#e30000" fontWeight="600" fontSize="36px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Get Fit, <br /> Don't Quit
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        “All progress takes place outside the comfort zone.”
      </Typography>
      <Stack>
        {" "}
        <a
          href="#exercises"
          style={{
            marginTop: "45px",
            marginBottom: "35px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#FF2625",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Explore Exercises
        </a>
      </Stack>

      <Typography
        fontWeight={600}
        color="#e30000"
        sx={{
          opacity: "0.3",
          display: { md: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Exercise
      </Typography>
   
        <img
          src={HeroBannerimg}
          alt="hero-banner"
          className="herobannerimg"
          sx={{ display: { md: "block", xs: "none" } }}
        />
  
        <img
          src={HeroBannerimgtwo}
          alt="hero-banner"
          className="herobannerimg2"
          sx={{ display: { md: "block", xs: "none" } }}
        />
    
    </Box>
  );
};

export default HeroBanner;

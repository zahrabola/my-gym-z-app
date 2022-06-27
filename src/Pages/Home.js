import React from "react";
import { Box } from "@mui/material";
import HeroBanner from "../Components/HeroBanner";
import SearchExercise from "../Components/SearchExercise";
import Bmi from "../Components/Bmi";
import Exercise from "../Components/Exercise";

const Home = () => {
  return (
    <Box>
        <HeroBanner />
        <Bmi />
        <SearchExercise />
        <Exercise />
    </Box>
  )
};

export default Home;

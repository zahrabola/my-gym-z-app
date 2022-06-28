import React, {useState} from "react";
import { Box } from "@mui/material";
import HeroBanner from "../Components/HeroBanner";
import SearchExercise from "../Components/SearchExercise";
import Bmi from "../Components/Bmi";
import Exercise from "../Components/Exercise";

const Home = () => {
    const [bodyexercises, setBodyExercises] = useState([]);
      const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <HeroBanner />
      <Bmi />
      <SearchExercise
        setBodyExercises={setBodyExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercise
        setBodyExercises={setBodyExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  );
};

export default Home;

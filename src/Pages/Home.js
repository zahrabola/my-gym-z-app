import React, {useState} from "react";
import { Box } from "@mui/material";
import HeroBanner from "../Components/HeroBanner";
import SearchExercise from "../Components/SearchExercise";
import Bmi from "../Components/Bmi";
import Exercise from "../Components/Exercise";

const Home = () => {
    const [exercises, setExercises] = useState([]);
      const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <HeroBanner />
      <Bmi />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercise
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;

import React from "react";
//import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
//import { exerciseOptions, fetchData } from "../Data/fetchData";
import ExerciseCard from "../Components/ExerciseCard";


const Exercise = (bodyPart, exercises, setExercises) => {
  console.log(exercises);
  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="40px" p="20px">
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="40px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercise;

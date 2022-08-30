import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";
import Scrollbar from "./Scrollbar";

const SimilarExercise = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {" "}
          Target Muscle
        </span>
        Exercieses
      </Typography>
      <Stack>
        {targetMuscleExercises.length !== 0 ? (
          <Scrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {" "}
          Equipment{" "}
        </span>{" "}
        Exercieses
      </Typography>
      <Stack>
        {equipmentExercises.length !== 0 ? (
          <Scrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercise;

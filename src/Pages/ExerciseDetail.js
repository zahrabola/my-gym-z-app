import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData } from "../Data/fetchData";
import Detail from "../Components/Detail";
import ExerciseVideo from "../Components/ExerciseVideo";
import SimilarExercise from "../Components/SimilarExercies";

const ExerciseDetail = () => {

    return (
        <Box>
            
<Detail />
<ExerciseVideo />
<SimilarExercise />
        </Box>
       
    )
}

export default ExerciseDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData } from "../Data/fetchData";
import Detail from "../Components/Detail";
import ExerciseVideo from "../Components/ExerciseVideo";
import SimilarExercise from "../Components/SimilarExercies";

const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({});
    const {id} = useParams ();


    useEffect(()=> {
        const fetchExercisesData = async () => {
//Api calls
const exerciseDbUrl =  'https://exercisedb.p.rapidapi.com';
//youtube
//const YoutubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';


const exerciseDetailData = await fetchData(
  `${exerciseDbUrl}/exercises/exercise/${id}`,
  exerciseOptions
);
console.log({ exerciseDetailData });
setExerciseDetail(exerciseDetailData);

        }
        fetchExercisesData (); 
    }, [id]);

    return (
      <Box>
        <Detail ExerciseDetail={exerciseDetail} />
        <ExerciseVideo />
        <SimilarExercise />
      </Box>
    );
}

export default ExerciseDetail;

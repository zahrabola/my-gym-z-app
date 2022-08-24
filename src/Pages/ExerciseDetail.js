import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData, youtubeOptions } from "../Data/fetchData";
import Detail from "../Components/Detail";
import ExerciseVideo from "../Components/ExerciseVideo";
import SimilarExercise from "../Components/SimilarExercies";

const ExerciseDetail = () => {

    const [exerciseDetail, setExerciseDetail] = useState({});
const [exerciseVideos, setExerciseVideos] = useState([]);


    const {id} = useParams ();


    useEffect(()=> {
        const fetchExercisesData = async () => {
//Api calls
//const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
//youtube
//const YoutubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';


const exerciseDetailData = await fetchData(
  `${exerciseDbUrl}/exercises/exercise/${id}`,
  exerciseOptions
);
///console.log({ exerciseDetailData });
setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);





        }
        fetchExercisesData (); 
    }, [id]);

    return (
      <Box>
        <Detail ExerciseDetail={exerciseDetail} />
        <ExerciseVideo
          exerciseVideos={exerciseVideos}
          name={exerciseDetail.name}
        />
        <SimilarExercise />
      </Box>
    );
}

export default ExerciseDetail;

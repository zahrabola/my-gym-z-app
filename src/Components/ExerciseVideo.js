import React from "react";
import { Typography, Box, Stack } from '@mui/material';
import Loader from "./Loader";
import { width } from "@mui/system";


const ExerciseVideo = ({ exerciseVideos, name }) => {
console.log(exerciseVideos);


   if (!exerciseVideos.length) return <Loader />;



  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {" "}
          {name}
        </span>
        Exercise Videos
      </Typography>
      <Stack
        direction="row"
        gap="24px"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 4)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="video-img"
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              style={{ borderTopLeftRadius: "30px" }}
            />
            <Box>
              <Typography
                sx={{ fontSize: { lg: "20px", xs: "15px" } }}
                fontWeight={400}
                color="#000"
              >
                {item.video.title}
              </Typography>
              <Typography fontSize="12px" color="#000">
                {" "}
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  ); 
};

export default ExerciseVideo;

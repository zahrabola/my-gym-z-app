import React from "react";
import { Typography, Box, Stack } from '@mui/material';


const ExerciseVideo = ({  name }) => {
  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography>
        Watch <span> {name}</span>
        Exercise Videos
      </Typography>
      <Stack>
        <a>
          <img />
          <Box>
            <Typography>item video</Typography>
            <Typography>item video channelname</Typography>
          </Box>
        </a>
      </Stack>
    </Box>
  ); 
};

export default ExerciseVideo;

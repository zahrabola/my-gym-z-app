import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const SearchExercise = () => {
  return (
    <Stack alignItems="center" justifyContent="center" p="20px" mt="40px">
      <Typography
        fontWeight={500}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        {" "}
        Exercises You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="80px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => {}}
          placeholder="Search..."
          type="text"
        ></TextField>
        <Button
          className="searchbtn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
        >
          Search
        </Button>
      </Box>
      <Box>Scroll bar</Box>
    </Stack>
  );
};

export default SearchExercise;

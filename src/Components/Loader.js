import React from "react";
import { Stack, Typography } from "@mui/material";


const Loader = () => (
  <Stack
    direction="row"
    justifyContent="center"
    alignItems="center"
    width="100%"
  >
    <Typography
      variant="h4"
      fontWeight="bold"
      sx={{ fontSize: { lg: "44px", xs: "30px" } }}
      mb="46px"
    >
Loading...
    </Typography>
  </Stack>
);

export default Loader;

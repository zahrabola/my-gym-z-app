import React from "react";
import { Stack, Typography } from "@mui/material";
import { FaBeer } from "react-icons/fa";
import Icon from "../images/gym.png";

const BodyParts = () => {
    return (
      <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodypartcard"
      >
        <img
          src={Icon}
          alt="dumbell"
          style={{ width: "40px", height: "40px" }}
        />
        <Typography></Typography>
      </Stack>
    );
}





export default BodyParts
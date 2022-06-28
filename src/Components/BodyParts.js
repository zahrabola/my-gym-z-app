import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../images/gym.png";

const BodyParts = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodypartcard"
      sx={
        bodyPart === item
          ? {
              borderTop: "4ps solid #FF2625",
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "40px",
            }
          : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "40px",
            }
      }
    >
      <img
        src={Icon}
        alt="dumbell"
        style={{ width: "140px", height: "140px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#FF2625"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};





export default BodyParts
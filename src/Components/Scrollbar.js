import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";


const Scrollbar = ({data}) => {
    return (
      <divz>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            {item}
          </Box>
        ))}
      </divz>
    );
}

export default Scrollbar 
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BodyParts from "./BodyParts";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="rightarrow">
      <FaArrowLeft size="1.8em" />
    </Typography>
  );
};


const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="leftarrow">
      <FaArrowRight size="1.8em" />
    </Typography>
  );
};






const Scrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
return (
  <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        <BodyParts item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    ))}
  </ScrollMenu>
);
   
  
};

export default Scrollbar 
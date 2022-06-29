import React from "react";
import { Typography, Stack, Button } from "@mui/material";
//import Bodypartimg from "../images/bodypart.png";
////import Equipmentimg from "../images/equipment.png";
//import Targetimg from "../images/target.png";

const Detail = () => {

    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  return (
<Stack gap="60px" sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
    <img src={gifUrl} alt={name} loading="lazy" className="detailimg"/>
    <Stack>
        <Typography>
            name
        </Typography>
        <Typography>
            Exercise, Keeps you going strong 
            <span> name</span>
            text about target
        </Typography>
        <Stack >
            <Button>
                <img />
            </Button>
            <Typography>
                item name 
            </Typography>
        </Stack>



    </Stack>
</Stack> 





  )
};

export default Detail;

import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";


const Bmi = () => {
   const [bmi, setBmi] = useState();
   const [info, setInfo] = useState();
   const [height, setHeight] = useState();
   const [weight, setWeight] = useState();

   const handleBmi =() => {
    let mass = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(3);
    setBmi(mass);
     if (mass < 18.5) {
      setInfo("Under Weight");
    } else if (mass > 18.5 && mass <= 24.9) {
      setInfo("Healthy");
    } else if (mass > 24.9 && mass < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };
   

  return (
    <Stack alignItems="center" justifyContent="center" p="10px" mt="20px">
      <h1>BMI Calculator</h1>
      <p>Enter your weight and height below.</p>
      <Box position="relative" mb="22px">
        <Typography>Weight</Typography>
        <TextField
          height="80px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "700px", xs: "350px", margin: "10px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          placeholder="Weight in kg"
          onChange={(e) => setWeight(e.target.value)}
        ></TextField>
        <Typography>Height</Typography>
        <TextField
          height="80px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "700px", xs: "350px", margin: "10px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height in cm"
        ></TextField>
        <Button
          className="searchbtn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            top: "-42px",
            marginTop: "40px",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleBmi}
        >
          Calculate
        </Button>
      </Box>
        <h1>{bmi}</h1>
      <h2>{info}</h2>
    </Stack>
  );
};

export default Bmi;

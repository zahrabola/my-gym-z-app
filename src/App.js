import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import './App.css';
import ExerciseDetail from "./Pages/ExerciseDetail";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"

function App() {
  return (
    <Box >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" eleement={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;

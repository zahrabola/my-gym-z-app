import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";


import Logo from "../images/Logo.png";
const Navbar = () => {
    return (
      <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
          gap: { sm: "123px", xs: "40px" },
          mt: { sm: "32px", xs: "20px" },
          justifyContent: "none",
        }}
        px="20px"
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "50px",
              height: "50px",
              margin: "0, 20px",
            }}
          />
        </Link>
        <Stack
          direction="row"
          gap="50px"
          fontFamily="Alegreya"
          fontSize="24px"
          alignItems="flex-end"
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#e30000",
              borderBottom: "3px solid #FF2625",
            }}
          >
            Home
          </Link>
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#e30000" }}
          >
            Exercise
          </a>
          <a
            href="#login"
            style={{ textDecoration: "none", color: "#e30000" }}
          >
         Login
          </a>
        </Stack>
      </Stack>
    );
}




export default Navbar;
import React from "react";
import { Box, Avatar, Divider } from "@mui/material";

const Header = () => {
  return (
    <div>
      <Box className="hero" sx={{ mx: 5 }}>
        <Avatar
          src={require("../Imgs/Max.jpg")}
          alt="My dog being held by me."
          sx={{ width: 200, height: 200 }}
        />
        <section className="details">
          <h1>I'm Max Wykes,</h1>
          <h2>I'm a new Front End Developer</h2>
          <Divider />
          <p>
            I'm looking for entry level remote roles that will allow me to build
            on my skills.
          </p>
          <p>
            I'd love to learn more about backend development as well, and
            eventually become a full stack developer.
          </p>
        </section>
      </Box>
    </div>
  );
};

export default Header;

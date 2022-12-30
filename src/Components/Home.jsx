import { Divider } from "@mui/material";
import React from "react";
import Header from "./HomepageSections/Header";
import Reviews from "./HomepageSections/Reviews";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Divider variant="middle" />
      <Reviews />
    </div>
  );
};

export default Home;

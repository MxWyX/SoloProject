import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Routing.css";
import Home from "./Home";
import Pordle from "./GameFiles/Pordle";
import ErrorPage from "./ErrorPage";

const Routing = () => {
  return (
    <Router>
      {/* Link uses a prop to, this is how we call the link */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="Pordle">Pokemon Wordle</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Pordle" element={<Pordle />}></Route>
        {/* Error Page always comes to the bottom */}
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
};

export default Routing;

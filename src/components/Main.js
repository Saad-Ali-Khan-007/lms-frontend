import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Route, Routes as Switch } from "react-router-dom";
import About from "./About";
import React from "react";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Switch>

      <Footer />
    </div>
  );
};

export default Main;

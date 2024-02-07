import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import CourseDetail from "./CourseDetail";
import React from "react";
import Login from "./User/Login";
import Register from "./User/Register";
const Main = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:course_id" element={<CourseDetail />}></Route>
        <Route path="/user-login" element={<Login />}></Route>
        <Route path="/user-register" element={<Register />}></Route>
      </Routes>

      <Footer />
    </div>
  );
};

export default Main;

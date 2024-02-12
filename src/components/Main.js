import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import CourseDetail from "./CourseDetail";
import React from "react";
import Login from "./User/Login";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";
import Mycourses from "./User/MyCourses";
import TeacherRegister from "./Teacher/TeacherRegister";
import TeacherLogin from "./Teacher/TeacherLogin";
import Teachers from "./Teachers";
import TeacherLogout from "./Teacher/TeacherLogout";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import TeacherCourses from "./Teacher/TeacherCourses";
import AddCourses from "./Teacher/AddCourses";
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
        <Route path="/teacher-register" element={<TeacherRegister />}></Route>
        <Route path="/teacher-login" element={<TeacherLogin />}></Route>
        <Route path="/teacher-logout" element={<TeacherLogout />}></Route>
        <Route path="/teachers" element={<Teachers />}></Route>
        <Route path="/teacher-dashboard" element={<TeacherDashboard />}>
          <Route path="teacher-courses" element={<TeacherCourses />}></Route>
          <Route path="add-courses" element={<AddCourses />}></Route>
        </Route>
        <Route path="/user-dashboard" element={<Dashboard />}>
          <Route path="user-courses" element={<Mycourses />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;

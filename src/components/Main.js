import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import CourseDetail from "./CourseDetail";
import React from "react";
import Login from "./User/Login";
import Logout from "./User/Logout";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";
import Mycourses from "./User/MyCourses";
import TeacherRegister from "./Teacher/TeacherRegister";
import TeacherLogin from "./Teacher/TeacherLogin";
import Teachers from "./Teachers";
import TeacherLogout from "./Teacher/TeacherLogout";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import TeacherCourses from "./Teacher/TeacherCourses";
import TeacherDetail from "./TeacherDetail";
import AddCourses from "./Teacher/AddCourses";
import EditCourse from "./Teacher/EditCourse";
import AddChapter from "./Teacher/AddChapter";
import AllChapter from "./Teacher/AllChapter";
import EditChapter from "./Teacher/EditChapter";
import EnrolledStudents from "./Teacher/EnrolledStudents";
import CourseCategory from "./CourseCategory";
import TeacherSkillCourse from "./TeacherSkillCourse";
import AllStudent from "./Teacher/AllStudent";
import TeacherProfile from "./Teacher/TeacherProfile";
import ForgotPassword from "./Teacher/ForgotPassword";
import DashboardAnalytics from "./Teacher/DashboardAnalytics";
import RecommendedCourses from "./User/RecommendedCourses";
import FavouriteCourse from "./User/FavouriteCourse";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route
          path="/category/:category_slug"
          element={<CourseCategory />}
        ></Route>
        <Route
          path="/teacher-skill-course/:skill_name/:teacher_id"
          element={<TeacherSkillCourse />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:course_id" element={<CourseDetail />}></Route>
        <Route
          path="/teacher-detail/:teacher_id"
          element={<TeacherDetail />}
        ></Route>
        <Route path="/user-login" element={<Login />}></Route>
        <Route path="/user-logout" element={<Logout />}></Route>
        <Route path="/user-register" element={<Register />}></Route>
        <Route path="/teacher-register" element={<TeacherRegister />}></Route>
        <Route path="/teacher-login" element={<TeacherLogin />}></Route>
        <Route path="/teacher-logout" element={<TeacherLogout />}></Route>
        <Route path="/teachers" element={<Teachers />}></Route>
        <Route path="/teacher-dashboard" element={<TeacherDashboard />}>
          <Route path="teacher-courses" element={<TeacherCourses />}></Route>
          <Route path="add-courses" element={<AddCourses />}></Route>
          <Route
            path="dashboard-analytics"
            element={<DashboardAnalytics />}
          ></Route>
          <Route path="edit-course/:course_id" element={<EditCourse />}></Route>
          <Route path="add-chapter/:course_id" element={<AddChapter />}></Route>
          <Route path="forgot-password" element={<ForgotPassword />}></Route>
          <Route
            path="edit-teacher-profile"
            element={<TeacherProfile />}
          ></Route>
          <Route
            path="edit-chapter/:chapter_id"
            element={<EditChapter />}
          ></Route>
          <Route
            path="enrolled-students/:course_id"
            element={<EnrolledStudents />}
          ></Route>
          <Route path="all-students" element={<AllStudent />}></Route>
          <Route path="all-chapter/:course_id" element={<AllChapter />}></Route>
        </Route>
        <Route path="/user-dashboard" element={<Dashboard />}>
          <Route path="user-courses" element={<Mycourses />}></Route>
          <Route
            path="recommended-courses"
            element={<RecommendedCourses />}
          ></Route>
          <Route path="favourite-courses" element={<FavouriteCourse />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;

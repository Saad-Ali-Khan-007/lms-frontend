import React, { useEffect } from "react";
import TeacherSidebar from "./TeacherSidebar";
import { Outlet } from "react-router-dom";

const TeacherDashboard = () => {
  useEffect(() => {
    document.title = "Teacher Dashboard";
  }, []);
  return (
    <div className="flex justify-evenly mt-4">
      <TeacherSidebar />
      <Outlet />
    </div>
  );
};

export default TeacherDashboard;

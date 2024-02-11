import React from "react";
import Sidebar from "./Sidebar";
import { Outlet, Route, Routes } from "react-router-dom";
import Mycourses from "./Mycourses";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default Dashboard;

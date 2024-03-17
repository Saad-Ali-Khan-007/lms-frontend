import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex justify-evenly mt-4">
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default Dashboard;

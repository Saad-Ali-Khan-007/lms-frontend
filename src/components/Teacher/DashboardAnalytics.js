import React from "react";
import { useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineVideoSettings } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:8000/api";

const DashboardAnalytics = () => {
  const [dashboard, setDashboard] = useState();
  const teacher_id = localStorage.getItem("teacher_id");

  const getData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/teacher-dashboard/${teacher_id}`
      );
      setDashboard(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(dashboard);
  useEffect(() => {
    getData();
    document.title = "Teacher Dashboard";
  }, []);
  return (
    <div className="basis-1/2">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div className=" py-8 px-4 sm:rounded-lg sm:px-10 flex flex-col justify-center bg-white shadow-xl rounded-xl">
          <div className="">
            <img
              className="w-32 mx-auto shadow-xl rounded-full"
              src={dashboard?.profile_img}
              alt="Profile face"
            />
          </div>
          <div className="text-center mt-5">
            <p className="text-xl sm:text-2xl font-semibold text-gray-900">
              {dashboard?.full_name}
            </p>
            <p className="text-xs sm:text-base text-gray-800 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
              {dashboard?.qualification}
            </p>
            <div className="flex align-center justify-center mt-4">
              <Link
                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800  hover:text-white transition-colors duration-300"
                to="/teacher-dashboard/teacher-courses"
              >
                <FaLaptopCode />
                <span>Courses: </span>
                <span>{dashboard?.teacher_total_course_count}</span>
              </Link>
              <Link
                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-800 hover:bg-pink-800  hover:text-white transition-colors duration-300"
                to="/teacher-dashboard/teacher-courses"
              >
                <MdOutlineVideoSettings />

                <span>Chapters: </span>
                <span>{dashboard?.teacher_all_chapter_count}</span>
              </Link>
              <Link
                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-800  hover:text-white transition-colors duration-300"
                to="/teacher-dashboard/all-students"
              >
                <PiStudentFill />
                <span>Students: </span>
                <span>{dashboard?.teacher_all_students_count}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAnalytics;

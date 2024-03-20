import React from "react";
import { useState, useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineVideoSettings } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:8000/api";

const StudentDashboardAnalytics = () => {
  const [dashboard, setDashboard] = useState();
  const student_id = localStorage.getItem("user_id");

  const getData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/student-dashboard/${student_id}/`
      );
      setDashboard(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(dashboard);
  useEffect(() => {
    getData();
    document.title = "Student Dashboard";
  }, []);
  return (
    <div className="basis-1/2">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
                to="/user-dashboard/user-courses"
              >
                <FaLaptopCode />
                <span>Courses: </span>
                <span>{dashboard?.student_enrolled_course_count}</span>
              </Link>
              <Link
                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-800 hover:bg-pink-800  hover:text-white transition-colors duration-300"
                to="/user-dashboard/favourite-courses"
              >
                <MdOutlineVideoSettings />

                <span>Favourites: </span>
                <span>{dashboard?.student_favourite_course_count}</span>
              </Link>
              <Link
                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-800  hover:text-white transition-colors duration-300"
                to={`/user-dashboard/teacher-assignment/${dashboard?.id}`}
              >
                <PiStudentFill />
                <span>Completed: </span>
                <span>{dashboard?.student_completed_assignment_count}</span>
              </Link>
              <Link
                className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-800  hover:text-white transition-colors duration-300"
                to={`/user-dashboard/teacher-assignment/${dashboard?.id}`}
              >
                <PiStudentFill />
                <span>Pending: </span>
                <span>{dashboard?.student_pending_assignment_count}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardAnalytics;

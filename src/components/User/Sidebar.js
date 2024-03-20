import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";
const Sidebar = () => {
  const [notification, setNotification] = useState([]);
  const student_id = localStorage.getItem("user_id");
  const Swal = require("sweetalert2");
  const handleLogout = () => {
    Swal.fire({
      title: "Logout!",
      text: "Do you want to logout",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          window.location.href = "/user-logout";
        } catch (error) {
          Swal.fire("error", "Something went wrong.!!!");
        }
      } else {
        Swal.fire("error", "Something went wrong.!!!");
      }
    });
  };

  const getData = async () => {
    const response = await axios.get(
      `${baseUrl}/student/notification/${student_id}`
    );
    setNotification(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <div className="mt-14">
          <div>
            <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <Link
                to="/user-dashboard/dashboard-analytics"
                className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Dashboard
              </Link>
            </span>
          </div>
          <div>
            <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <Link
                to="/user-dashboard/user-courses"
                className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                My Courses
              </Link>
            </span>
          </div>

          <div>
            <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <Link
                to={`/user-dashboard/teacher-assignment/${student_id}`}
                className="flex items-center  text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Assignment
                <span className="ml-12 bg-red-500 w-[25px] h-[100%] rounded-[100%] text-white">
                  <span className="ml-[7.5px]">{notification.length}</span>
                </span>
              </Link>
            </span>
          </div>
          <div>
            <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <Link
                to="/user-dashboard/recommended-courses"
                className="flex items-center  text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Recommended Courses
              </Link>
            </span>
          </div>

          <div>
            <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <Link
                to="/user-dashboard/favourite-courses"
                className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Favourites
              </Link>
            </span>
          </div>

          <div>
            <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <Link
                to="/user-dashboard/edit-user-profile"
                className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Profile Settings
              </Link>
            </span>
          </div>

          <div>
            <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <Link
                to="/user-dashboard/forgot-password"
                className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Forgot Password
              </Link>
            </span>
          </div>

          <div>
            <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <button
                onClick={() => handleLogout()}
                className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Logout
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

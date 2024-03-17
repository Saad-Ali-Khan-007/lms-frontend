import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const Swal = require("sweetalert2");
  const handleDelete = () => {
    Swal.fire({
      title: "Logout!",
      text: "Do you want to logout",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          window.location.href = "/teacher-logout";
        } catch (error) {
          Swal.fire("error", "Something went wrong.!!!");
        }
      } else {
        Swal.fire("error", "Something went wrong.!!!");
      }
    });
  };

  return (
    <>
      <div>
        <div className="mt-14">
          <div>
            <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <Link
                to="/teacher-dashboard/dashboard-analytics"
                className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Dashboard
              </Link>
            </span>
          </div>
          <div>
            <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <Link
                to="/teacher-dashboard/teacher-courses"
                className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                My Courses
              </Link>
            </span>
          </div>

          <div>
            <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <Link
                to="/teacher-dashboard/add-courses"
                className="flex items-center  text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Add Courses
              </Link>
            </span>
          </div>

          <div>
            <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <Link
                to="/teacher-dashboard/all-students"
                className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                All Students
              </Link>
            </span>
          </div>

          <div>
            <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <Link
                to="/teacher-dashboard/edit-teacher-profile"
                className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Profile Settings
              </Link>
            </span>
          </div>

          <div>
            <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <Link
                to="/teacher-dashboard/forgot-password"
                className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Forgot Password
              </Link>
            </span>
          </div>

          <div>
            <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <button
                onClick={() => handleDelete()}
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

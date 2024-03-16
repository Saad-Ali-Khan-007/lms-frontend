import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div>
        <div className="mt-14">
          <div>
            <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <Link
                to="/teacher-dashboard/teacher-courses"
                class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                My Courses
              </Link>
            </span>
          </div>

          <div>
            <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <Link
                to="/teacher-dashboard/add-courses"
                class="flex items-center  text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Add Courses
              </Link>
            </span>
          </div>

          <div>
            <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <Link
                to="/teacher-dashboard/all-students"
                class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                All Students
              </Link>
            </span>
          </div>

          <div>
            <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <a
                href="javascript:;"
                class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Users
              </a>
            </span>
          </div>

          <div>
            <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <a
                href="javascript:;"
                class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Orders
              </a>
            </span>
          </div>

          <div>
            <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <a
                href="javascript:;"
                class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Track Order
              </a>
            </span>
          </div>

          <div>
            <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <a
                href="javascript:;"
                class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Products
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

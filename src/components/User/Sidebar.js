import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div class="bg-white m-auto max-w">
      <div class="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

      <div class="flex items-center justify-between px-8 py-5">
        <div class="flex items-center mr-5">
          <div class="mr-5">
            <div class="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]"></div>
          </div>
        </div>
        <a
          class="inline-flex relative items-center group justify-end text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-[.95rem] transition-colors duration-150 ease-in-out text-dark bg-transparent shadow-none border-0"
          href="javascript:void(0)"
        >
          <span class="leading-none transition-colors duration-200 ease-in-out peer shrink-0 group-hover:text-primary text-secondary-dark"></span>
        </a>
      </div>

      <div class="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>

      <div class="relative pl-3 my-5 overflow-y-scroll">
        <div class="flex flex-col w-full font-medium">
          <div>
            <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <Link
                to="/user-dashboard/my-courses"
                class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                My Courses
              </Link>
            </span>
          </div>

          <div>
            <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <a
                href="javascript:;"
                class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Profile
              </a>
            </span>
          </div>

          <div>
            <span class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
              <a
                href="javascript:;"
                class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
              >
                Settings
              </a>
            </span>
          </div>

          <div class="block pt-5 pb-[.15rem]">
            <div class="px-4 py-[.65rem]">
              <span class="font-semibold text-[0.95rem] uppercase dark:text-neutral-500/80 text-secondary-dark">
                Applications
              </span>
            </div>
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
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
const AddCourses = () => {
  return (
    <div className="basis-1/2">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form method="POST" action="#">
          <div class="mt-6">
            <label
              for="title"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Course Title
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="title"
                name="title"
                //   onChange={handleChange}
                type="text"
                required=""
                //   value={teacherData.full_name}
                class="appearance-none w-full block px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div class="mt-6">
            <label
              for="description"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Description
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <textarea
                id="description"
                name="description"
                //   onChange={handleChange}
                type="text"
                required=""
                //   value={teacherData.email}
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div class="mt-6">
            <label
              for="image"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Image
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="image"
                name="image"
                //   onChange={handleChange}
                type="file"
                //   value={teacherData.password}
                required=""
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div class="mt-6">
            <label
              for="technology"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Technologies
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="phone"
                name="phone_no"
                //   onChange={handleChange}
                type="text"
                required=""
                //   value={teacherData.phone_no}
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                //   onClick={handleSubmit}
                class="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Add Course
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourses;

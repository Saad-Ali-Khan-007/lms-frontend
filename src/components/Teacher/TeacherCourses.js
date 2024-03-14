import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const baseUrl = "http://localhost:8000/api";

const TeacherCourses = () => {
  const [courseData, setCourseData] = useState([]);

  const teacher_id = localStorage.getItem("teacher_id");

  const getData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/teacher-courses/${teacher_id}`
      );
      setCourseData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(courseData);

  useEffect(() => {
    document.title = "Teacher Courses";
    getData();
  }, []);

  return (
    <div className="basis-1/2">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th scope="col" class="px-6 py-4">
                Enrolled Student
              </th>
              <th scope="col" class="px-6 py-4">
                Title
              </th>
              <th scope="col" class="px-6 py-4">
                Edit Course
              </th>
              <th scope="col" class="px-6 py-4">
                Add Course
              </th>
              <th scope="col" class="px-6 py-4">
                Delete Course
              </th>
              <th scope="col" class="px-6 py-4">
                Duration
              </th>
            </tr>
          </thead>

          {courseData.map((courseData, index) => (
            <tbody>
              <tr class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                <td class="whitespace-nowrap px-6 py-4 font-medium">
                  {courseData.total_enrolled_students}
                </td>
                <td class="whitespace-nowrap px-6 py-4">{courseData.title}</td>
                <td class="whitespace-nowrap px-6 py-4">
                  <Link to={`/teacher-dashboard/edit-course/${courseData.id}`}>
                    <button
                      className="mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      key={index}
                    >
                      Edit Course
                    </button>
                  </Link>
                </td>
                <td class="whitespace-nowrap px-6 py-4">
                  <Link to={`/teacher-dashboard/add-chapter/${courseData.id}`}>
                    <button
                      className="ml-4 mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      key={index}
                    >
                      Add course
                    </button>
                  </Link>
                </td>
                <td class="whitespace-nowrap px-6 py-4">
                  <Link to={`/teacher-dashboard/add-chapter/${courseData.id}`}>
                    <button
                      className="ml-4 mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      key={index}
                    >
                      Delete Course
                    </button>
                  </Link>
                </td>
                <td class="whitespace-nowrap px-6 py-4">1 hour 30 mins</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TeacherCourses;

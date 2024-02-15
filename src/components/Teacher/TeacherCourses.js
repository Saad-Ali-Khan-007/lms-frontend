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

  useEffect(() => {
    document.title = "Teacher Courses";
    getData();
  }, []);

  return (
    <div className="basis-1/2">
      <div className="bg-white flex justify-between items-center py-8 px-4 shadow sm:rounded-lg sm:px-10 mt-14">
        <div>
          {courseData.map((courseList, index) => (
            <h1 className="mb-4 text-xl font-semibold" key={index}>
              {courseList.title}
            </h1>
          ))}
        </div>
        <div>
          {courseData.map((courseList, index) => (
            <img
              width="50"
              src={courseList.featured_img}
              alt={courseList.title}
              className="mb-4"
              key={index}
            ></img>
          ))}
        </div>
        <div>
          {courseData.map((courseList, index) => (
            <Link
              to={`/teacher-dashboard/add-chapter/${courseList.id}`}
              className="mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              key={index}
            >
              Chapter
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherCourses;

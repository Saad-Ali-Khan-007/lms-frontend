import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const baseUrl = "http://localhost:8000/api";

const FavouriteCourse = () => {
  const [studentData, setStudentData] = useState([]);

  const student_id = localStorage.getItem("user_id");

  const getData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/specific-student-favourite-course/${student_id}/`
      );
      setStudentData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    document.title = "Student Courses";
    getData();
  }, []);

  return (
    <div className="basis-1/2">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th scope="col" className="px-6 py-4">
                Title
              </th>
              <th scope="col" className="px-6 py-4">
                Teacher
              </th>
              <th scope="col" className="px-6 py-4">
                View Course
              </th>

              <th scope="col" className="px-6 py-4">
                Duration
              </th>
            </tr>
          </thead>

          {studentData.map((studentData, index) => (
            <tbody>
              <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {studentData.course?.title}
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  <Link
                    to={`/teacher-detail/${studentData.course?.teachers_category?.id}`}
                  >
                    {studentData.course?.teachers_category?.full_name}
                  </Link>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <Link to={`/detail/${studentData.course?.id}`}>
                    <button
                      className="mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      key={index}
                    >
                      View Course
                    </button>
                  </Link>
                </td>

                <td className="whitespace-nowrap px-6 py-4">1 hour 30 mins</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default FavouriteCourse;

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
  const Swal = require("sweetalert2");
  const handleDelete = (course_id) => {
    Swal.fire({
      title: "Delete!",
      text: "Do you want delete the course",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios
            .delete(baseUrl + "/teacher-course-detail/" + course_id)
            .then((res) => {
              window.location.reload();
            });
        } catch (error) {
          Swal.fire("error", "Data has not been deleted.!!!");
        }
      } else {
        Swal.fire("error", "Data has not been deleted.!!!");
      }
    });
  };

  useEffect(() => {
    document.title = "Teacher Courses";
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
                Enrolled Student
              </th>
              <th scope="col" className="px-6 py-4">
                Edit Course
              </th>
              <th scope="col" className="px-6 py-4">
                Add Chapter
              </th>
              <th scope="col" className="px-6 py-4">
                Add Study Material
              </th>
              <th scope="col" className="px-6 py-4">
                Assign Quiz
              </th>
              <th scope="col" className="px-6 py-4">
                Delete Course
              </th>

              <th scope="col" className="px-6 py-4">
                Rating
              </th>
            </tr>
          </thead>

          {courseData.map((courseData, index) => (
            <tbody>
              <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  <Link to={`/teacher-dashboard/all-chapter/${courseData.id}`}>
                    {courseData.title}
                  </Link>
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  <Link
                    to={`/teacher-dashboard/enrolled-students/${courseData.id}`}
                  >
                    {courseData.total_enrolled_students}
                  </Link>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <Link to={`/teacher-dashboard/edit-course/${courseData.id}`}>
                    <button
                      className="mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      key={index}
                    >
                      Edit Course
                    </button>
                  </Link>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <Link to={`/teacher-dashboard/add-chapter/${courseData.id}`}>
                    <button
                      className="ml-4 mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-indigo active:bg-orange-700 transition duration-150 ease-in-out"
                      key={index}
                    >
                      Add Chapter
                    </button>
                  </Link>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <Link
                    to={`/teacher-dashboard/study-material/${courseData.id}`}
                  >
                    <button
                      className="ml-4 mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-indigo active:bg-green-700 transition duration-150 ease-in-out"
                      key={index}
                    >
                      Study Material
                    </button>
                  </Link>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <Link to={`/teacher-dashboard/assign-quiz/${courseData.id}`}>
                    <button
                      className="ml-4 mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-blue-500 focus:shadow-outline-indigo active:bg-blue-700 transition duration-150 ease-in-out"
                      key={index}
                    >
                      Assign
                    </button>
                  </Link>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <button
                    onClick={() => handleDelete(courseData.id)}
                    className="ml-4 mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-indigo active:bg-orange-700 transition duration-150 ease-in-out"
                    key={index}
                  >
                    Delete Course
                  </button>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {courseData.average_course_rating}/5
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TeacherCourses;

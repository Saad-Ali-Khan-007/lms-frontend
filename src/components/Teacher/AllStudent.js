import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const baseUrl = "http://localhost:8000/api";

const AllStudent = () => {
  const [studentData, setStudentData] = useState([]);

  const teacher_id = localStorage.getItem("teacher_id");

  const getData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/teacher-all-student/${teacher_id}/`
      );
      setStudentData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    document.title = "Teacher Students";
    getData();
  }, []);

  return (
    <div className="basis-1/2">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Email
              </th>
              <th scope="col" className="px-6 py-4">
                Course
              </th>
              <th scope="col" className="px-6 py-4">
                Assignments
              </th>
            </tr>
          </thead>

          {studentData.map((student, index) => (
            <tbody>
              <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {student.student?.full_name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {student.student?.email}
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {student.course?.title}
                </td>

                <td className="flex whitespace-nowrap px-6 py-4 font-medium">
                  <Link to="">
                    <button
                      className="mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:border-yellow-700 focus:shadow-outline-indigo active:bg-yellow-700 transition duration-150 ease-in-out"
                      key={index}
                    >
                      Assignment
                    </button>
                  </Link>
                  <Link
                    to={`/teacher-dashboard/add-assignment/${student.student?.id}/${teacher_id}`}
                  >
                    <button
                      className="ml-4 mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-indigo active:bg-green-700 transition duration-150 ease-in-out"
                      key={index}
                    >
                      Add Assignment
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllStudent;

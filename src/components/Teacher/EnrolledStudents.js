import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const baseUrl = "http://localhost:8000/api";

const EnrolledStudents = () => {
  const [studentData, setStudentData] = useState([]);

  const { course_id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/student-enrolled-course/${course_id}/`
      );
      setStudentData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(studentData);

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
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Email
              </th>
              <th scope="col" className="px-6 py-4">
                View
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

                <td className="whitespace-nowrap px-6 py-4">
                  <Link to={`/teacher-dashboard/student-detail/${student.id}`}>
                    <button
                      className="h-[42px] w-[72px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      key={index}
                    >
                      View
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

export default EnrolledStudents;

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const baseUrl = "http://127.0.0.1:8000/api";

const StudentAssignment = () => {
  const [assignmentData, setAssignmentData] = useState([]);
  const { student_id } = useParams();
  const { teacher_id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/student-assignment/${student_id}/${teacher_id}/`
      );
      setAssignmentData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(assignmentData);

  useEffect(() => {
    document.title = "Assignment";
    getData();
  }, []);
  return (
    <div className="basis-1/2">
      <h1 className="text-2xl">All Assignment {assignmentData.length}</h1>

      <div className="flex mt-12 flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Title
                    </th>

                    <th scope="col" className="px-6 py-4">
                      Description
                    </th>
                  </tr>
                </thead>
                {assignmentData.map((assignment) => (
                  <tbody>
                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4">
                        {assignment.title}
                      </td>

                      <td className=" flex flex-wrap  px-6 py-4">
                        {assignment.description}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentAssignment;

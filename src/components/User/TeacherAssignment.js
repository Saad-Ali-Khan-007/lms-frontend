import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const baseUrl = "http://127.0.0.1:8000/api";

const TeacherAssignment = () => {
  const [assignmentData, setAssignmentData] = useState([]);
  const [assignmentStatus, setAssignmentStatus] = useState("");

  const { student_id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/teacher-assigned-assignment/${student_id}/`
      );
      setAssignmentData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const markAsCompleted = (
    assignment_id,
    teacher_id,
    student_id,
    title,
    description
  ) => {
    const _formData = new FormData();
    _formData.append("teacher", teacher_id);
    _formData.append("student", student_id);
    _formData.append("title", title);
    _formData.append("description", description);
    _formData.append("student_status", true);
    axios
      .put(`${baseUrl}/student-mark-assignment/${assignment_id}/`, _formData)
      .then((response) => {
        if ((response.status = 200)) {
          Swal.fire({
            title: "Marked As Done",
            icon: "success",
            toast: true,
            timer: 3000,
            position: "top-right",
            timerProgressBar: true,
            showConfirmButton: false,
          });
          setAssignmentStatus("success");
        }
      });
  };

  useEffect(() => {
    document.title = "Assignment";
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [assignmentStatus]);

  return (
    <div className="basis-1/2">
      <h1 className="text-2xl">Assignment ({assignmentData.length})</h1>

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
                    <th scope="col" className="px-6 py-4">
                      Teacher
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
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
                      <td className="whitespace-nowrap px-6 py-4">
                        {assignment.teacher?.full_name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {assignment.student_status == false && (
                          <button
                            onClick={() =>
                              markAsCompleted(
                                assignment.id,
                                assignment.teacher?.id,
                                assignment.student?.id,
                                assignment.title,
                                assignment.description
                              )
                            }
                            className="ml-4 mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-indigo active:bg-orange-700 transition duration-150 ease-in-out"
                          >
                            Mark As Done
                          </button>
                        )}
                        {assignment.student_status == true && (
                          <p>Assignment Completed</p>
                        )}
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
export default TeacherAssignment;

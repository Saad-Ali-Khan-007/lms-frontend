import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const baseurl = "http://localhost:8000/api";

const AddAssignment = () => {
  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
  });

  const { teacher_id } = useParams();
  const { student_id } = useParams();

  const handleChange = (e) => {
    setAssignment({
      ...assignment,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(assignment);

  const handleSubmit = (e) => {
    const _formData = new FormData();
    _formData.append("teacher", teacher_id);
    _formData.append("student", student_id);
    _formData.append("title", assignment.title);
    _formData.append("description", assignment.description);

    try {
      axios
        .post(
          `${baseurl}/student-assignment/${student_id}/${teacher_id}/`,
          _formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          window.location.href = `/teacher-dashboard/add-assignment/${student_id}/${teacher_id}/`;
        });
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
  };

  useEffect(() => {
    document.title = "Add Assignment";
  }, []);

  return (
    <div className="basis-1/2">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form method="POST" action="#">
          <div className="mt-6">
            <label
              for="title"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Title
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="title"
                name="title"
                onChange={handleChange}
                type="text"
                required=""
                value={assignment.title}
                className="appearance-none w-full block px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              for="description"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Description
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <textarea
                id="description"
                name="description"
                onChange={handleChange}
                type="text"
                required=""
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Add Assignment
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAssignment;

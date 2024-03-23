import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const baseurl = "http://localhost:8000/api";

const AddMaterial = () => {
  const { course_id } = useParams();
  const [courseMaterial, setCourseMaterial] = useState({
    title: "",
    description: "",
    study_material: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setCourseMaterial({
      ...courseMaterial,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(courseMaterial);

  const handleFileChange = (e) => {
    setCourseMaterial({
      ...courseMaterial,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    const _formData = new FormData();
    _formData.append("course", course_id);
    _formData.append("title", courseMaterial.title);
    _formData.append("description", courseMaterial.description);
    _formData.append(
      "study_material",
      courseMaterial.study_material,
      courseMaterial.study_material.name
    );
    _formData.append("remarks", courseMaterial.remarks);

    try {
      axios
        .post(baseurl + "/study-material/", _formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          window.location.href = `/teacher-dashboard/add-study-material/${course_id}`;
        });
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
  };

  useEffect(() => {
    document.title = "Add Course";
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
                value={courseMaterial.title}
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
                value={courseMaterial.description}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              for="study_material"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Study material
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="study_material"
                name="study_material"
                onChange={handleFileChange}
                type="file"
                required=""
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              for="remarks"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Remarks
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <textarea
                id="remarks"
                name="remarks"
                onChange={handleChange}
                type="text"
                required=""
                value={courseMaterial.remarks}
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
                Add Material
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMaterial;

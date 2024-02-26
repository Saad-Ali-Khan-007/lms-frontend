import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const baseurl = "http://localhost:8000/api";

const AddChapter = () => {
  const { course_id } = useParams();
  const [courseChapter, setCourseChapter] = useState({
    title: "",
    description: "",
    video: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setCourseChapter({
      ...courseChapter,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(courseChapter);

  const handleFileChange = (e) => {
    setCourseChapter({
      ...courseChapter,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    const _formData = new FormData();
    _formData.append("course", course_id);
    _formData.append("title", courseChapter.title);
    _formData.append("description", courseChapter.description);
    _formData.append("video", courseChapter.video, courseChapter.video.name);
    _formData.append("remarks", courseChapter.remarks);

    try {
      axios
        .post(baseurl + "/chapter/", _formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          window.location.href = `/teacher-dashboard/add-chapter/${course_id}`;
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
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form method="POST" action="#">
          <div class="mt-6">
            <label
              for="title"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Title
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="title"
                name="title"
                onChange={handleChange}
                type="text"
                required=""
                value={courseChapter.title}
                class="appearance-none w-full block px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div class="mt-6">
            <label
              for="description"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Description
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <textarea
                id="description"
                name="description"
                onChange={handleChange}
                type="text"
                required=""
                value={courseChapter.description}
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div class="mt-6">
            <label
              for="video"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Video
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="video"
                name="video"
                onChange={handleFileChange}
                type="file"
                required=""
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div class="mt-6">
            <label
              for="remarks"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Remarks
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <textarea
                id="remarks"
                name="remarks"
                onChange={handleChange}
                type="text"
                required=""
                value={courseChapter.remarks}
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                onClick={handleSubmit}
                class="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Add Chapter
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddChapter;

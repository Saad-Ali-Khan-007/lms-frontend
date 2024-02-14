import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const baseurl = "http://localhost:8000/api";

const AddCourses = () => {
  const [cats, setCats] = useState([]);
  const [courseData, setCourseData] = useState({
    course_category: "",
    title: "",
    description: "",
    featured_img: "",
    techs: "",
  });

  const getData = () => {
    try {
      axios.get(baseurl + "/category/").then((response) => {
        setCats(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(courseData);

  const handleFileChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    const _formData = new FormData();
    _formData.append("course_category", courseData.course_category);
    _formData.append("teachers_category", 1);
    _formData.append("title", courseData.title);
    _formData.append("description", courseData.description);
    _formData.append(
      "featured_img",
      courseData.featured_img,
      courseData.featured_img.name
    );
    _formData.append("techs", courseData.techs);

    try {
      axios
        .post(baseurl + "/course/", _formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
  };

  useEffect(() => {
    getData();
    document.title = "Add Course";
  }, []);

  return (
    <div className="basis-1/2">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form method="POST" action="#">
          <div class="mt-6">
            <label
              for="category"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Category
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <select
                name="course_category"
                onChange={handleChange}
                value={courseData.category}
                class="appearance-none w-full block px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              >
                {cats.map((cat, index) => (
                  <option value={cat.id} key={index}>
                    {cat.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div class="mt-6">
            <label
              for="title"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Course Title
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="title"
                name="title"
                onChange={handleChange}
                type="text"
                required=""
                value={courseData.title}
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
                value={courseData.description}
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div class="mt-6">
            <label
              for="image"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Image
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="image"
                name="featured_img"
                onChange={handleFileChange}
                type="file"
                // value={courseData.featured_img}
                required=""
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div class="mt-6">
            <label
              for="technology"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Technologies
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="technology"
                name="techs"
                onChange={handleChange}
                type="text"
                required=""
                value={courseData.techs}
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
                Add Course
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourses;

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const baseurl = "http://localhost:8000/api";

const TeacherProfile = () => {
  const [teacherData, setTeacherData] = useState({
    full_name: "",
    description: "",
    email: "",
    password: "",
    prev_img: "",
    profile_img: "",
    phone_no: "",
    qualification: "",
    skills: "",
  });

  const teacher_id = localStorage.getItem("teacher_id");

  const handleChange = (event) => {
    setTeacherData({
      ...teacherData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (e) => {
    setTeacherData({
      ...teacherData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    const teacherFormData = new FormData();
    teacherFormData.append("full_name", teacherData.full_name);
    teacherFormData.append("description", teacherData.description);

    teacherFormData.append("email", teacherData.email);
    teacherFormData.append("password", teacherData.password);
    if (teacherData.profile_img !== "") {
      teacherFormData.append(
        "profile_img",
        teacherData.profile_img,
        teacherData.profile_img.name
      );
    }
    teacherFormData.append("phone_no", teacherData.phone_no);
    teacherFormData.append("qualification", teacherData.qualification);
    teacherFormData.append("skills", teacherData.skills);

    console.log(teacherData.profile_img);

    try {
      axios
        .put(baseurl + "/teachers/" + teacher_id + "/", teacherFormData, {
          headers: {
            "Content-Type": "multipart/from-data",
          },
        })
        .then((response) => {
          if ((response.status = 200)) {
            Swal.fire({
              title: "Data has been updated",
              icon: "success",
              toast: true,
              timer: 3000,
              position: "top-right",
              timerProgressBar: true,
              showConfirmButton: false,
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
  };
  const getData = async () => {
    try {
      const response = await axios.get(`${baseurl}/teachers/${teacher_id}/`);
      setTeacherData({
        full_name: response.data.full_name,
        description: response.data.description,
        email: response.data.email,
        password: response.data.password,
        phone_no: response.data.phone_no,
        qualification: response.data.qualification,
        skills: response.data.skills,
        prev_img: response.data.profile_img,
        profile_img: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    document.title = "Edit Profile";
  }, []);

  return (
    <div className="basis-1/2">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form method="POST" action="#">
          <div className="mt-6">
            <label
              for="full_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Full Name
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="full_name"
                name="full_name"
                onChange={handleChange}
                type="text"
                required=""
                value={teacherData.full_name}
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
                value={teacherData.description}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              for="email"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Email
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="email"
                name="email"
                onChange={handleChange}
                type="text"
                required=""
                value={teacherData.email}
                className="appearance-none w-full block px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              for="password"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Password
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="password"
                name="password"
                onChange={handleChange}
                type="password"
                required=""
                value={teacherData.password}
                className="appearance-none w-full block px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              for="image"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Image
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="image"
                name="profile_img"
                onChange={handleFileChange}
                type="file"
                required=""
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
            {teacherData.prev_img && (
              <img width="100%" height="100%" src={teacherData.prev_img} />
            )}
          </div>

          <div className="mt-6">
            <label
              for="phone_no"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Phone No
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="phone_no"
                name="phone_no"
                onChange={handleChange}
                type="text"
                required=""
                value={teacherData.phone_no}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              for="qualification"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Qualification
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="qualification"
                name="qualification"
                onChange={handleChange}
                type="text"
                required=""
                value={teacherData.qualification}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              for="skills"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Skills
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="skills"
                name="skills"
                onChange={handleChange}
                type="text"
                required=""
                value={teacherData.skills}
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
                Edit Info
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherProfile;

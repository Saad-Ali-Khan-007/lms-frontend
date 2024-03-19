import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const baseurl = "http://localhost:8000/api";

const UserProfile = () => {
  const [userData, setUserData] = useState({
    full_name: "",

    email: "",

    prev_img: "",
    profile_img: "",
    phone_no: "",
    qualification: "",
    address: "",
    interested_categories: "",
  });

  const student_id = localStorage.getItem("user_id");

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    const userFormData = new FormData();
    userFormData.append("full_name", userData.full_name);

    userFormData.append("email", userData.email);

    if (userData.profile_img !== "") {
      userFormData.append(
        "profile_img",
        userData.profile_img,
        userData.profile_img.name
      );
    }
    userFormData.append("phone_no", userData.phone_no);
    userFormData.append("qualification", userData.qualification);
    userFormData.append("address", userData.address);
    userFormData.append(
      "interested_categories",
      userData.interested_categories
    );

    try {
      axios
        .put(baseurl + "/user/" + student_id, userFormData, {
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
      const response = await axios.get(`${baseurl}/user/${student_id}`);

      http: setUserData({
        full_name: response.data.full_name,

        email: response.data.email,

        phone_no: response.data.phone_no,
        qualification: response.data.qualification,
        address: response.data.address,
        interested_categories: response.data.interested_categories,
        prev_img: response.data.profile_img,
        profile_img: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const userLoginStatus = localStorage.getItem("userLoginStatus");
  if (userLoginStatus != "true") {
    window.location.href = "/user-login";
  }

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
                value={userData.full_name}
                className="appearance-none w-full block px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
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
                type="email"
                required=""
                value={userData.email}
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
            {userData.prev_img && (
              <img width="100%" height="100%" src={userData.prev_img} />
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
                value={userData.phone_no}
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
                value={userData.qualification}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              for="address"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Address
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="address"
                name="address"
                onChange={handleChange}
                type="text"
                required=""
                value={userData.address}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              for="interested_categories"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Interested Categories
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="interested_categories"
                name="interested_categories"
                onChange={handleChange}
                type="text"
                required=""
                value={userData.interested_categories}
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

export default UserProfile;

import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = "http://localhost:8000/api";
const Register = () => {
  const [userData, setUserData] = useState({
    full_name: "",
    email: "",
    password: "",
    phone_no: "",
    qualification: "",
    address: "",
    interested_categories: "",
    status: "",
  });
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    const userFormData = new FormData();
    userFormData.append("full_name", userData.full_name);
    userFormData.append("email", userData.email);
    userFormData.append("password", userData.password);
    userFormData.append("phone_no", userData.phone_no);
    userFormData.append("qualification", userData.qualification);
    userFormData.append("address", userData.address);
    userFormData.append(
      "interested_categories",
      userData.interested_categories
    );

    try {
      axios.post(baseUrl + "/users/", userFormData).then((response) => {
        setUserData({
          full_name: "",
          email: "",
          password: "",
          phone_no: "",
          qualification: "",
          address: "",
          interested_categories: "",
          status: "success",
        });
      });
    } catch (error) {
      console.log(error);
      setUserData({ status: "error" });
    }
    e.preventDefault();
  };

  // const userLoginStatus = localStorage.getItem("userLoginStatus");
  // if (userLoginStatus === "true") {
  //   window.location.href = "/";
  // }

  useEffect(() => {
    document.title = "User Registration";
  });
  return (
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        {userData.status === "success" && (
          <p className="text-center text-green-500">
            User Successfuly Registered
          </p>
        )}
        {userData.status === "error" && (
          <p className="text-center text-red-500">Something went Wrong</p>
        )}
        <img
          class="mx-auto h-10 w-auto"
          src="https://www.svgrepo.com/show/301692/login.svg"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Create a new account
        </h2>
        <p class="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
          Or
          <Link
            to="/user-login"
            class="font-medium ml-3 text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            login to your account
          </Link>
        </p>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form method="POST" action="#">
            <div class="mt-6">
              <label
                for="name"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Name
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="name"
                  name="full_name"
                  onChange={handleChange}
                  type="text"
                  required=""
                  value={userData.full_name}
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div class="mt-6">
              <label
                for="email"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Email
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  onChange={handleChange}
                  type="email"
                  required=""
                  value={userData.email}
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div class="mt-6">
              <label
                for="password"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  value={userData.password}
                  required=""
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div class="mt-6">
              <label
                for="phone"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Cell No
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="phone"
                  name="phone_no"
                  onChange={handleChange}
                  type="text"
                  required=""
                  value={userData.phone_no}
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div class="mt-6">
              <label
                for="qualification"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Qualification
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="qualification"
                  name="qualification"
                  onChange={handleChange}
                  type="text"
                  value={userData.qualification}
                  required=""
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div class="mt-6">
              <label
                for="address"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Address
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="address"
                  name="address"
                  onChange={handleChange}
                  type="text"
                  value={userData.address}
                  required=""
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div class="mt-6">
              <label
                for="interested_categories"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Interested Categories
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="interested_categories"
                  name="interested_categories"
                  onChange={handleChange}
                  type="text"
                  value={userData.interested_categories}
                  required=""
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div class="mt-6">
              <span class="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Create account
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const baseurl = "http://localhost:8000/api";
const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const handleChange = (event) => {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    const userLoginForm = new FormData();
    userLoginForm.append("email", userLogin.email);
    userLoginForm.append("password", userLogin.password);
    try {
      axios.post(baseurl + "/user/login/", userLoginForm).then((response) => {
        console.log(response.data);
        if (response.data.bool == true) {
          localStorage.setItem("userLoginStatus", true);
          localStorage.setItem("user_id", response.data.user_id);
          window.location.href = "/user-dashboard/user-courses";
        } else {
          setErrorMsg("Invalid Email or Password!!");
        }
      });
    } catch (error) {
      console.log(error);
    }
    event.preventDefault();
  };

  const userLoginStatus = localStorage.getItem("userLoginStatus");
  if (userLoginStatus === "true") {
    window.location.href = "/";
  }

  useEffect(() => {
    document.title = "Teacher Login";
  }, []);

  return (
    <div class="mt-10 relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div class="w-full">
        <div class="text-center">
          <h1 class="text-3xl font-semibold text-gray-900">Sign in</h1>
          <p class="mt-2 text-gray-500">Sign in below to access your account</p>
          {errorMsg && <p className="text-center text-red-500">{errorMsg}</p>}
        </div>
        <div class="mt-5">
          <form action="">
            <div class="relative mt-6">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={userLogin.email}
                id="email"
                placeholder="Email Address"
                class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                autocomplete="NA"
              />
              <label
                for="email"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Email Address
              </label>
            </div>
            <div class="relative mt-6">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={userLogin.password}
                id="password"
                placeholder="Password"
                class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              />
              <label
                for="password"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Password
              </label>
            </div>
            <div class="my-6">
              <button
                onClick={handleSubmit}
                type="submit"
                class="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
              >
                Sign in
              </button>
            </div>
            <p class="text-center text-sm text-gray-500">
              Don&#x27;t have an account yet?
              <Link
                to="/teacher-register"
                class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
              >
                Sign up
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

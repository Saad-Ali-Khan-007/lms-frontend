import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const baseurl = "http://localhost:8000/api";

const ForgotPassword = () => {
  const [teacherData, setTeacherData] = useState({
    password: "",
  });

  const teacher_id = localStorage.getItem("teacher_id");

  const handleChange = (event) => {
    setTeacherData({
      ...teacherData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    const teacherFormData = new FormData();

    teacherFormData.append("password", teacherData.password);

    try {
      axios
        .post(
          baseurl + "/teacher-forgot-password/" + teacher_id + "/",
          teacherFormData
        )
        .then((response) => {
          if ((response.status = 200)) {
            window.location.href = "/teacher-logout";
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
        password: response.data.password,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const teacherLoginStatus = localStorage.getItem("teacherLoginStatus");
  if (teacherLoginStatus != "true") {
    window.location.href = "/teacher-login";
  }
  useEffect(() => {
    getData();
    document.title = "Forgot Password";
  }, []);

  return (
    <div className="basis-1/2">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form method="PUT" action="#">
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
            <span className="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Change Password
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

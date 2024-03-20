import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const baseurl = "http://localhost:8000/api";

const EditQuiz = () => {
  const [quiz, setQuiz] = useState({
    title: "",
    detail: "",
  });

  const { quiz_id } = useParams();

  const handleChange = (e) => {
    setQuiz({
      ...quiz,
      [e.target.name]: e.target.value,
    });
  };

  const teacher_id = localStorage.getItem("teacher_id");

  const handleSubmit = (e) => {
    const _formData = new FormData();

    _formData.append("teacher", teacher_id);
    _formData.append("title", quiz.title);
    _formData.append("detail", quiz.detail);

    try {
      axios
        .put(baseurl + "/teacher-quiz-detail/" + quiz_id, _formData, {
          headers: {
            "Content-Type": "multipart/form-data",
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

  const getPrevData = async () => {
    try {
      const response = await axios.get(
        `${baseurl}/teacher-quiz-detail/${quiz_id}`
      );
      setQuiz({
        title: response.data.title,
        detail: response.data.detail,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPrevData();

    document.title = "Edit Quiz";
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
              Quiz Title
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="title"
                name="title"
                onChange={handleChange}
                type="text"
                value={quiz.title}
                className="appearance-none w-full block px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              for="detail"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Detail
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <textarea
                id="detail"
                name="detail"
                onChange={handleChange}
                type="text"
                required=""
                value={quiz.detail}
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
                Edit Quiz
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditQuiz;

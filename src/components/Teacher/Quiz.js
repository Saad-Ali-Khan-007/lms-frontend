import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const baseUrl = "http://localhost:8000/api";

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);

  const teacher_id = localStorage.getItem("teacher_id");

  const getData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/quiz/${teacher_id}/`);
      setQuizData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const Swal = require("sweetalert2");
  const handleDelete = (quiz_id) => {
    Swal.fire({
      title: "Delete!",
      text: "Do you want delete the course",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios
            .delete(baseUrl + "/teacher-quiz-detail/" + quiz_id)
            .then((res) => {
              window.location.reload();
            });
        } catch (error) {
          Swal.fire("error", "Data has not been deleted.!!!");
        }
      } else {
        Swal.fire("error", "Data has not been deleted.!!!");
      }
    });
  };

  useEffect(() => {
    document.title = "Quiz";
    getData();
  }, []);

  return (
    <div className="basis-1/2">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th scope="col" className="px-6 py-4">
                Title
              </th>
              <th scope="col" className="px-6 py-4">
                Quiz
              </th>
              <th scope="col" className="px-6 py-4">
                Question
              </th>
              <th scope="col" className="px-6 py-4">
                Delete
              </th>
            </tr>
          </thead>

          {quizData.map((quiz, index) => (
            <tbody>
              <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  <Link
                    to={`/teacher-dashboard/quiz-question-detail/${quiz.id}`}
                  >
                    {quiz.title}
                  </Link>
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  <Link to={`/teacher-dashboard/edit-quiz/${quiz.id}`}>
                    <button
                      className="mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      key={index}
                    >
                      Edit Quiz
                    </button>
                  </Link>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <Link to={`/teacher-dashboard/quiz-question/${quiz.id}`}>
                    <button
                      className="mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      key={index}
                    >
                      Add Question
                    </button>
                  </Link>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <button
                    onClick={() => handleDelete(quiz.id)}
                    className="ml-4 mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-orange-700 focus:shadow-outline-indigo active:bg-orange-700 transition duration-150 ease-in-out"
                    key={index}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Quiz;

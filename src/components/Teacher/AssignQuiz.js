import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const baseUrl = "http://localhost:8000/api";

const AssignQuiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [assignStatus, setAssignStatus] = useState(null);

  const { course_id } = useParams();

  const teacher_id = localStorage.getItem("teacher_id");

  const getData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/quiz/${teacher_id}/`);
      setQuizData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  console.log("assignquiz:", assignStatus);

  const assignQuiz = (quiz_id) => {
    const quizAssignForm = new FormData();
    quizAssignForm.append("course", course_id);
    quizAssignForm.append("quiz", quiz_id);

    try {
      axios
        .post(`${baseUrl}/assign-quiz-course/`, quizAssignForm, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            Swal.fire({
              title: "You have successfully assigned quiz to the course",
              icon: "success",
              toast: true,
              timer: 10000,
              position: "top-right",
              timerProgressBar: true,
              showConfirmButton: false,
            });
          }
        });
    } catch (err) {
      console.log(console.log(err));
    }
  };

  useEffect(() => {
    document.title = "Assign Quiz";
    getData();
  }, []);
  useEffect(() => {}, []);

  return (
    <div className="basis-1/2">
      <h1 className="text-2xl">Assign Quiz </h1>
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
                  {quiz.assign_status == 1 && (
                    <p>Quiz is assigned to a course</p>
                  )}{" "}
                  {quiz.assign_status == 0 && (
                    <button
                      onClick={() => assignQuiz(quiz.id)}
                      className="mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                      key={index}
                    >
                      Assign
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AssignQuiz;

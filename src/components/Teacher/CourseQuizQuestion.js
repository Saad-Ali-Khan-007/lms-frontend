import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import VideoPopup from "../videoPopup/VideoPopup";

const baseUrl = "http://127.0.0.1:8000/api";

const CourseQuizQuestion = () => {
  const [questionData, setQuizQuestionData] = useState([]);

  const { quiz_id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/course-quiz-question/${quiz_id}`
      );
      setQuizQuestionData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const Swal = require("sweetalert2");
  const handleDelete = (question_id) => {
    Swal.fire({
      title: "Delete!",
      text: "Do you want delete the chapter",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios
            .delete(baseUrl + "/course-quiz-question-detail/" + question_id)
            .then((res) => {
              window.location.reload();
              // console.log(res);
              // setChapterData(res.data);
            });
          // Swal.fire("success", "Data has been deleted.");
        } catch (error) {
          Swal.fire("error", "Data has not been deleted.!!!");
        }
      } else {
        Swal.fire("error", "Data has not been deleted.!!!");
      }
    });
  };

  useEffect(() => {
    document.title = "Questions";
    getData();
  }, []);
  return (
    <div className="basis-1/2">
      <h1 className="text-2xl">All Questions {questionData.length}</h1>

      <div className="flex mt-12 flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      No
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Answer
                    </th>

                    <th scope="col" className="px-6 py-4">
                      Edit
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Delete
                    </th>
                  </tr>
                </thead>
                {questionData.map((question) => (
                  <tbody>
                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {question.id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {question.question}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {question.right_ans}
                      </td>

                      <td className="whitespace-nowrap px-6 py-4">
                        <Link
                          to={`/teacher-dashboard/edit-question/${question.id}`}
                          className="mr-4 h-[42px] w-[72px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button
                          onClick={() => handleDelete(question.id)}
                          className="  h-[42px] w-[72px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
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
        </div>
      </div>
    </div>
  );
};
export default CourseQuizQuestion;

import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

const baseUrl = "http://localhost:8000/api";
const CheckQuizStatusStudent = (props) => {
  const [quizData, setQuizData] = useState([]);
  const student_id = localStorage.getItem("user_id");

  const getData = async () => {
    const response = await axios.get(
      `${baseUrl}/fetch-quiz-attempt-status/${props.quiz.quiz?.id}/${student_id}`
    );
    setQuizData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(quizData);

  return (
    <div>
      {" "}
      <td className="whitespace-nowrap px-6 py-4">
        {quizData.bool == false && (
          <Link to={`/user-dashboard/quiz-question/${props.quiz.quiz?.id}`}>
            <button className="ml-4 mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-indigo active:bg-green-700 transition duration-150 ease-in-out">
              Attempt Quiz
            </button>
          </Link>
        )}
        {quizData.bool == true && <p className="text-green-600">Attempted</p>}
      </td>
    </div>
  );
};

export default CheckQuizStatusStudent;

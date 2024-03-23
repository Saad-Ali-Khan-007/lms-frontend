import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CheckQuizStatusStudent from "./CheckQuizStatusStudent";
const baseUrl = "http://localhost:8000/api";

const AllQuiz = () => {
  const [courseQuiz, setCourseQuiz] = useState([]);
  const { course_id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/course-quiz/${course_id}`);
      setCourseQuiz(response.data);
    } catch (err) {
      console.log(err);
    }
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
            </tr>
          </thead>

          {courseQuiz.map((quiz, index) => (
            <tbody>
              <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {quiz.quiz?.title}
                </td>
                <CheckQuizStatusStudent quiz={quiz} />
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllQuiz;

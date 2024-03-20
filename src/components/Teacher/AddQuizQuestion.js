import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const baseurl = "http://localhost:8000/api";

const AddQuizQuestion = () => {
  const { quiz_id } = useParams();
  const [quizQuestion, setQuizQuestion] = useState({
    question: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    right_ans: "",
  });

  const handleChange = (e) => {
    setQuizQuestion({
      ...quizQuestion,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const _formData = new FormData();
    _formData.append("quiz", quiz_id);
    _formData.append("question", quizQuestion.question);
    _formData.append("ans1", quizQuestion.ans1);
    _formData.append("ans2", quizQuestion.ans2);
    _formData.append("ans3", quizQuestion.ans3);
    _formData.append("ans4", quizQuestion.ans4);
    _formData.append("right_ans", quizQuestion.right_ans);

    try {
      axios
        .post(baseurl + "/quiz-question/", _formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          window.location.href = `/teacher-dashboard/quiz-question/${quiz_id}`;
        });
    } catch (error) {
      console.log(error);
    }
    e.preventDefault();
  };

  useEffect(() => {
    document.title = "Add Quiz Question";
  }, []);

  return (
    <div className="basis-1/2">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form method="POST" action="#">
          <div className="mt-6">
            <label
              for="question"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Question
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                id="question"
                name="question"
                onChange={handleChange}
                type="text"
                required=""
                value={quizQuestion.question}
                className="appearance-none w-full block px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              for="ans1"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Answer 1
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <textarea
                id="ans1"
                name="ans1"
                onChange={handleChange}
                type="text"
                required=""
                value={quizQuestion.ans1}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              for="ans2"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Answer 2
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <textarea
                id="ans2"
                name="ans2"
                onChange={handleChange}
                type="text"
                required=""
                value={quizQuestion.ans2}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              for="ans3"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Answer 3
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <textarea
                id="ans3"
                name="ans3"
                onChange={handleChange}
                type="text"
                required=""
                value={quizQuestion.ans3}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              for="ans4"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Answer 4
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <textarea
                id="ans4"
                name="ans4"
                onChange={handleChange}
                type="text"
                required=""
                value={quizQuestion.ans4}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              for="right_ans"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Right Answer
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <textarea
                id="right_ans"
                name="right_ans"
                onChange={handleChange}
                type="text"
                required=""
                value={quizQuestion.right_ans}
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
                Add Question
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuizQuestion;

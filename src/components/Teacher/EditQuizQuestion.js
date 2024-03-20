import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const baseurl = "http://localhost:8000/api";

const EditquestionData = () => {
  const { question_id } = useParams();

  const [questionData, setQuestionData] = useState({
    question: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    right_ans: "",
  });

  const handleChange = (e) => {
    setQuestionData({
      ...questionData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(questionData);

  const handleSubmit = (e) => {
    const _formData = new FormData();
    _formData.append("quiz", questionData.quiz.id);
    _formData.append("question", questionData.question);
    _formData.append("ans1", questionData.ans1);
    _formData.append("ans2", questionData.ans2);
    _formData.append("ans3", questionData.ans3);
    _formData.append("ans4", questionData.ans4);
    _formData.append("right_ans", questionData.right_ans);

    try {
      axios
        .put(
          baseurl + "/course-quiz-question-detail/" + question_id,
          _formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
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

  const getData = async () => {
    try {
      const response = await axios.get(
        `${baseurl}/course-quiz-question-detail/${question_id}`
      );
      setQuestionData({
        quiz: response.data.quiz,
        question: response.data.question,
        ans1: response.data.ans1,
        ans2: response.data.ans2,
        ans3: response.data.ans3,
        ans4: response.data.ans4,
        right_ans: response.data.right_ans,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    document.title = "Edit Quiz Question";
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
                value={questionData.question}
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
                value={questionData.ans1}
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
                value={questionData.ans2}
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
                value={questionData.ans3}
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
                value={questionData.ans4}
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
                value={questionData.right_ans}
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
                Edit Question
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditquestionData;

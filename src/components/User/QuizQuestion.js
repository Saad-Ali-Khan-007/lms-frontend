import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const baseUrl = "http://localhost:8000/api";

const QuizQuestion = () => {
  const [questionData, setQuestionData] = useState([]);

  const student_id = localStorage.getItem("user_id");

  const { quiz_id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/course-quiz-question/${quiz_id}/1`
      );
      setQuestionData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (question_id, right_ans) => {
    const _formData = new FormData();
    _formData.append("student", student_id);
    _formData.append("question", question_id);
    _formData.append("right_ans", right_ans);

    try {
      const response = await axios.post(baseUrl + "/attempt-quiz/", _formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const new_data = await axios.get(
        `${baseUrl}/course-quiz-question/next-question/${quiz_id}/${question_id}`
      );

      console.log("updated:", new_data);
      setQuestionData(new_data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(questionData);
  useEffect(() => {
    getData();
    document.title = "Attempt Quiz";
  }, []);

  return (
    <div className="basis-1/2">
      <h1 className="text-2xl">All Questions {questionData.length}</h1>

      <div className="flex mt-12 flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              {questionData.map((question) => (
                <>
                  <h1 className="mb-4 text-2xl">{question.quiz?.title}</h1>
                  <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                    <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                      <tr className="whitespace-nowrap">
                        <p className="m-2">{question.question}</p>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                        <tr className=" whitespace-nowrap px-6 py-4">
                          <button
                            onClick={() =>
                              handleSubmit(question.id, question.ans1)
                            }
                            className="m-2 hover:text-red-600"
                          >
                            1 ) {question.ans1}
                          </button>
                        </tr>
                        <tr className="whitespace-nowrap px-6 py-4">
                          <button
                            onClick={() =>
                              handleSubmit(question.id, question.ans2)
                            }
                            className="m-2 hover:text-red-600"
                          >
                            2 ) {question.ans2}
                          </button>
                        </tr>
                        <tr className="whitespace-nowrap px-6 py-4">
                          <button
                            onClick={() =>
                              handleSubmit(question.id, question.ans3)
                            }
                            className="m-2 hover:text-red-600"
                          >
                            3 ) {question.ans3}
                          </button>
                        </tr>
                        <tr className="whitespace-nowrap px-6 py-4">
                          <button
                            onClick={() =>
                              handleSubmit(question.id, question.ans4)
                            }
                            className="m-2 hover:text-red-600"
                          >
                            4 ) {question.ans4}
                          </button>
                        </tr>
                      </tr>
                    </tbody>
                  </table>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;

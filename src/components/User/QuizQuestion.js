import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const baseUrl = "http://localhost:8000/api";

const QuizQuestion = () => {
  useEffect(() => {
    document.title = "Attempt Quiz";
  }, []);

  return (
    <div className="basis-1/2">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <h1 scope="col" className="text-3xl px-6 py-4">
                Course Title
              </h1>
            </tr>
            <tr>
              <th scope="col" className="px-6 py-4">
                Question
              </th>
            </tr>
          </thead>

          <tbody>
            <td className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
              <tr className="flex whitespace-nowrap px-6 py-4 font-medium">
                <input type="radio" />
                <p className="ml-2">Option1</p>
              </tr>
              <tr className="flex whitespace-nowrap px-6 py-4 font-medium">
                <input type="radio" />
                <p className="ml-2">Option1</p>
              </tr>
              <tr className="flex whitespace-nowrap px-6 py-4 font-medium">
                <input type="radio" />
                <p className="ml-2">Option1</p>
              </tr>
              <tr className="flex whitespace-nowrap px-6 py-4 font-medium">
                <input type="radio" />
                <p className="ml-2">Option1</p>
              </tr>
              <td className="flex m-4">
                <button className="ml-4 mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-indigo active:bg-gray-700 transition duration-150 ease-in-out">
                  Skip
                </button>
                <button className="ml-4 mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-indigo active:bg-green-700 transition duration-150 ease-in-out">
                  Submit
                </button>
              </td>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuizQuestion;

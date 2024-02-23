import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const baseUrl = "http://127.0.0.1:8000/api";

const AllChapter = () => {
  const [chapterData, setChapterData] = useState([]);

  const { course_id } = useParams();

  const getData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/course-chapters/${course_id}`
      );
      setChapterData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    document.title = "Chapters";
    getData();
  }, []);
  return (
    <div className="basis-1/2">
      <div className="bg-white flex justify-between items-center py-8 px-4 shadow sm:rounded-lg sm:px-10 mt-14">
        <div>
          <h1 className="mb-4 text-xl font-semibold">Title</h1>
          {chapterData.map((chapterList, index) => (
            <h1 key={index}>{chapterList.title}</h1>
          ))}
        </div>
        <div>
          <h1 className="mb-4 text-xl font-semibold">Remarks</h1>
          {chapterData.map((chapterList, index) => (
            <p key={index}>{chapterList.remarks}</p>
          ))}
        </div>
        <div>
          <h1 className="flex items-center justify-center mb-4 text-xl font-semibold">
            Buttons
          </h1>
          {chapterData.map((chapterList, index) => (
            <div className="flex gap-2">
              <button className="mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                Video
              </button>
              <video width="320" height="240" controls>
                <source src={chapterList.video.url} type="video/mp4" />
                <source src={chapterList.video.url} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <button className="mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                Edit
              </button>
              <button className="mb-4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllChapter;

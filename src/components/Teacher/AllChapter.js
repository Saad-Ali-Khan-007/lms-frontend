import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Video from "./Video";

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
  const Swal = require("sweetalert2");
  const handleDelete = (chapter_id) => {
    Swal.fire({
      title: "Delete!",
      text: "Do you want delete the chapter",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(baseUrl + "/chapter/" + chapter_id).then((res) => {
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
    document.title = "Chapters";
    getData();
  }, []);
  return (
    <div className="basis-1/2">
      <h1 className="text-2xl">All Chapters {chapterData.length}</h1>
      <div className="bg-white flex justify-between items-center py-8 px-4 shadow sm:rounded-lg sm:px-10 mt-14">
        <div>
          <h1 className="mb-4 text-xl font-semibold">Title</h1>
          {chapterData.map((chapterList, index) => (
            <h1 key={index}>{chapterList.title}</h1>
          ))}
        </div>
        <div>
          {chapterData.map((chapterList, index) => (
            <div className="flex gap-2">
              <Video key={index} chapterList={chapterList} />
              <div>
                <h1 className="mb-4 text-xl font-semibold">Remarks</h1>
                {chapterData.map((chapterList, index) => (
                  <p key={index}>{chapterList.remarks}</p>
                ))}
              </div>
              <div className="flex flex-col">
                <h1 className="mb-4 text-xl font-semibold">Buttons</h1>
                <div className="flex">
                  <Link
                    to={`/teacher-dashboard/edit-chapter/${chapterList.id}`}
                    className="mr-4 h-[42px] w-[72px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(chapterList.id)}
                    className="  h-[42px] w-[72px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AllChapter;

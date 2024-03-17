import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import VideoPopup from "../videoPopup/VideoPopup";

const baseUrl = "http://127.0.0.1:8000/api";

const AllChapter = () => {
  const [chapterData, setChapterData] = useState([]);
  const [show, setShow] = useState(false);
  const [videoLink, setVideoLink] = useState(null);

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
                      Watch
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Remarks
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Edit
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Delete
                    </th>
                  </tr>
                </thead>
                {chapterData.map((chapter) => (
                  <tbody>
                    <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {chapter.id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {chapter.title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button
                          onClick={() => {
                            setShow(true);
                            setVideoLink(chapter.video);
                          }}
                          className="  h-[42px] w-[72px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        >
                          Watch
                        </button>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {chapter.remarks}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Link
                          to={`/teacher-dashboard/edit-chapter/${chapter.id}`}
                          className="mr-4 h-[42px] w-[72px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <button
                          onClick={() => handleDelete(chapter.id)}
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
      <VideoPopup
        show={show}
        setShow={setShow}
        videoLink={videoLink}
        setVideoLink={setVideoLink}
      />
    </div>
  );
};
export default AllChapter;

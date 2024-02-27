import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const baseurl = "http://localhost:8000/api";

const EditChapter = () => {
  const { chapter_id } = useParams();

  const [chapterData, setChapterData] = useState({
    course: "",
    title: "",
    description: "",
    prev_video: "",
    video: "",
    remarks: "",
  });

  const handleChange = (e) => {
    setChapterData({
      ...chapterData,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(chapterData);

  const handleFileChange = (e) => {
    setChapterData({
      ...chapterData,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    const _formData = new FormData();
    _formData.append("course", chapterData.course);
    _formData.append("title", chapterData.title);
    _formData.append("description", chapterData.description);
    if (chapterData.video !== "") {
      _formData.append("video", chapterData.video, chapterData.video.name);
    }

    _formData.append("remarks", chapterData.remarks);

    try {
      axios
        .put(baseurl + "/chapter/" + chapter_id, _formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if ((response.status = 200)) {
            Swal.fire({
              title: "Data ha been updated",
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
      const response = await axios.get(`${baseurl}/chapter/${chapter_id}`);
      setChapterData({
        course: response.data.course,
        title: response.data.title,
        description: response.data.description,
        prev_video: response.data.video,
        remarks: response.data.remarks,
        video: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    document.title = "Add Course";
  }, []);

  return (
    <div className="basis-1/2">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form method="POST" action="#">
          <div class="mt-6">
            <label
              for="title"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Title
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="title"
                name="title"
                onChange={handleChange}
                type="text"
                value={chapterData.title}
                class="appearance-none w-full block px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
          <div class="mt-6">
            <label
              for="description"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Description
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <textarea
                id="description"
                name="description"
                onChange={handleChange}
                type="text"
                value={chapterData.description}
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div class="mt-6">
            <label
              for="video"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Video
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="video"
                name="video"
                onChange={handleFileChange}
                type="file"
                // value={chapterData.prev_video}
                required=""
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
              {chapterData.prev_video && (
                <video width="100%" height="100%" className="mt-4" controls>
                  <source src={chapterData.prev_video} type="video/mp4" />
                  <source src={chapterData.prev_video} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
          <div class="mt-6">
            <label
              for="remarks"
              class="block text-sm font-medium leading-5 text-gray-700"
            >
              Remarks
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <textarea
                id="remarks"
                name="remarks"
                onChange={handleChange}
                type="text"
                required=""
                value={chapterData.remarks}
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>

          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                onClick={handleSubmit}
                class="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                Edit Chapter
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditChapter;

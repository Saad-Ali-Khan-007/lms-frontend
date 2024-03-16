import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const baseUrl = "http://localhost:8000/api";

export default function RatingModal({
  CourseDetail,
  enrollStatus,
  studentLoginStatus,
}) {
  const [modal, setModal] = useState(false);
  const [ratingData, setRatingData] = useState({
    rating: "",
    reviews: "",
  });
  const [ratingStatus, setRatingStatus] = useState();

  const getEnrollStatus = async () => {
    const response = await axios.get(
      `${baseUrl}/rating-status/${student_id}/${course_id}/`
    );
    setRatingStatus(response.data.bool);
  };

  const { course_id } = useParams();

  const student_id = localStorage.getItem("user_id");

  const handleChange = (event) => {
    {
      setRatingData({
        ...ratingData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    const _formData = new FormData();
    _formData.append("course", course_id);
    _formData.append("student", student_id);
    _formData.append("rating", ratingData.rating);
    _formData.append("reviews", ratingData.reviews);

    try {
      axios
        .post(baseUrl + "/course-rating-review/" + course_id, _formData)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            Swal.fire({
              title: "Thanks your review is highly appreciated",
              icon: "success",
              toast: true,
              timer: 10000,
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
  useEffect(() => {
    getEnrollStatus();
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      {enrollStatus == true && studentLoginStatus == "success" && (
        <>
          {ratingStatus != true && (
            <button
              onClick={toggleModal}
              className="flex items-center justify-center w-full p-3  text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
            >
              Rate Course
            </button>
          )}

          {modal && (
            <div className="modal ">
              <div
                onClick={toggleModal}
                className="h-screen w-screen top-0 left-0 right-0 bottom-0 fixed bg-[rgba(49,49,49,0.8)]"
              ></div>
              <div className="absolute top-[40%] left-[40%] bg-white w-[25%] h-fit p-4 rounded-lg max-sm:w-[70%] max-sm:left-12 max-md:w-[50%] max-md:left-44 ">
                <p className="text-black text-xl font-semibold">
                  Rating And Review
                </p>
                <p className="mt-4 text-black text-base font-medium">Rating</p>
                <div className="relative">
                  <select
                    name="rating"
                    onChange={handleChange}
                    className="appearance-none w-full block px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    id=""
                  >
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </select>

                  <p className="mt-4 text-black text-base font-medium">
                    Review
                  </p>

                  <textarea
                    onChange={handleChange}
                    className="appearance-none w-full block px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    name="reviews"
                    id=""
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={toggleModal}
                    className="flex items-center justify-center mt-4 w-full p-3 mr-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex items-center mt-4 justify-center w-full p-3 mr-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

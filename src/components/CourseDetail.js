import React from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import VideoPopup from "./videoPopup/VideoPopup";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import RatingModal from "./RatingModal";
import { addToCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const siteUrl = "http://localhost:8000/";
const baseUrl = "http://localhost:8000/api";

const CourseDetail = () => {
  const dispatch = useDispatch();
  const { course_id } = useParams();
  const [course, setCourse] = useState();
  const [teacher, setTeacher] = useState();
  const [chapter, setChapter] = useState([]);
  const [relatedCourse, setRelatedCourse] = useState([]);
  const [techList, setTechList] = useState([]);
  const [show, setShow] = useState(false);
  const [videoLink, setVideoLink] = useState(null);
  const [studentLoginStatus, setStudentLoginStatus] = useState();
  const [enrollStatus, setEnrollStatus] = useState();
  const [avgRating, setAvgRating] = useState(0);
  const [favouriteStatus, setFavouriteStatus] = useState();
  const [courseViews, setCourseViews] = useState(0);

  const location = useLocation();

  const CourseDetail = location.state;

  const getChapterData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/course-chapters/${course_id}`
      );
      setChapter(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getData = async () => {
    const response = await axios.get(`${baseUrl}/course/${course_id}`);
    setCourse(response.data);
    setTeacher(response.data.teachers_category);

    setTechList(response.data.tech_list);
    setAvgRating(response.data.average_course_rating);
    setRelatedCourse(JSON.parse(response.data.related_courses));
  };
  console.log(course);

  const student_id = localStorage.getItem("user_id");

  const getEnrollStatus = async () => {
    const response = await axios.get(
      `${baseUrl}/enroll-status/${student_id}/${course_id}/`
    );
    setEnrollStatus(response.data.bool);
  };

  const getViews = async () => {
    const response = await axios.get(`${baseUrl}/course-views/${course_id}`);
    setCourseViews(response.data.views);
  };

  const enrollCourse = () => {
    const enrolledCourseForm = new FormData();
    enrolledCourseForm.append("course", course_id);
    enrolledCourseForm.append("student", student_id);

    try {
      axios
        .post(`${baseUrl}/enroll-course/`, enrolledCourseForm, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            Swal.fire({
              title: "You have successfully enrolled in the course",
              icon: "success",
              toast: true,
              timer: 10000,
              position: "top-right",
              timerProgressBar: true,
              showConfirmButton: false,
            });
            setEnrollStatus(true);
          }
        });
    } catch (err) {
      console.log(console.log(err));
    }
  };

  const getFavouriteStatus = async () => {
    const response = await axios.get(
      `${baseUrl}/student-favourite-course-status/${student_id}/${course_id}/`
    );
    if (response.data.bool == true) {
      setFavouriteStatus("success");
    } else {
      setFavouriteStatus("");
    }
  };

  const addToFavourites = () => {
    const _formData = new FormData();
    _formData.append("course", course_id);
    _formData.append("student", student_id);
    _formData.append("status", true);
    try {
      axios
        .post(`${baseUrl}/student-favourite-course/`, _formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            Swal.fire({
              title: "You have added the course to favourites",
              icon: "success",
              toast: true,
              timer: 10000,
              position: "top-right",
              timerProgressBar: true,
              showConfirmButton: false,
            });
            setFavouriteStatus("success");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
  const removeFavourite = () => {
    const _formData = new FormData();
    _formData.append("course", course_id);
    _formData.append("student", student_id);
    _formData.append("status", false);
    try {
      axios
        .get(
          `${baseUrl}/student-remove-favourite-course/${student_id}/${course_id}`,
          _formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            Swal.fire({
              title: "You have remove course from the favourites",
              icon: "success",
              toast: true,
              timer: 10000,
              position: "top-right",
              timerProgressBar: true,
              showConfirmButton: false,
            });
            setFavouriteStatus("");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    getViews();
    getEnrollStatus();
    getFavouriteStatus();
    getChapterData();
    document.title = "Course Detail";
  }, []);

  useEffect(() => {
    const userLoginStatus = localStorage.getItem("userLoginStatus");
    if (userLoginStatus === "true") {
      setStudentLoginStatus("success");
    }
  }, []);

  return (
    <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
      <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 ">
            <div className=" top-0 z-50 overflow-hidden ">
              <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                <img
                  src={course?.featured_img}
                  alt=""
                  className="object-cover w-full lg:h-full "
                ></img>
              </div>
              <div className="flex-wrap hidden md:flex "></div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 ">
            <div className="lg:pl-20">
              <div className="mb-8 ">
                <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                  {course?.title}
                </h2>
                <div className="flex items-center mb-6">
                  <RatingModal
                    enrollStatus={enrollStatus}
                    CourseDetail={CourseDetail}
                    studentLoginStatus={studentLoginStatus}
                  />
                  <p className="ml-4 text-xs dark:text-gray-400 ">
                    (Total Enrolled: {course?.total_enrolled_students})
                  </p>
                </div>
                <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                  Views : {courseViews}
                </span>
                <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                  {course?.description}
                </p>
                <button
                  onClick={() => dispatch(addToCart(course))}
                  className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                >
                  Add to Cart
                </button>
                <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                  <span>{avgRating}/5</span>
                </p>
                <Link to={`/teacher-detail/${teacher?.id}`}>
                  <p className="text-green-600 dark:text-green-300 ">
                    Course By: {teacher?.full_name}
                  </p>
                </Link>
              </div>
              <div className="flex  items-center mb-8">
                <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                  Techs:
                </h2>
                <div className="flex flex-wrap -mx-4">
                  {techList.map((tech) => (
                    <Link
                      to={`/category/${tech}`}
                      className="ml-1 text-green-600"
                    >
                      {tech}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center -mx-4 ">
                <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                  {studentLoginStatus === "success" &&
                    enrollStatus === true && (
                      <p>You are enrolled in this course</p>
                    )}

                  {studentLoginStatus === "success" &&
                    enrollStatus !== true && (
                      <button
                        onClick={enrollCourse}
                        className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                      >
                        Enroll in Course
                      </button>
                    )}
                  {studentLoginStatus !== "success" && (
                    <Link
                      to="/user-login"
                      className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                    >
                      Enroll in Course
                    </Link>
                  )}
                </div>
                <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                  {studentLoginStatus === "success" &&
                    favouriteStatus !== "success" && (
                      <button
                        onClick={addToFavourites}
                        title="Favourites"
                        className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                      >
                        Add to Favourites
                      </button>
                    )}
                  {studentLoginStatus === "success" &&
                    favouriteStatus === "success" && (
                      <button
                        onClick={removeFavourite}
                        title="Remove Favourites"
                        className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                      >
                        Remove From Favourites
                      </button>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-12 flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              {studentLoginStatus === "success" && enrollStatus === true && (
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
                          Duration
                        </th>
                      </tr>
                    </thead>

                    {chapter.map((chapter) => (
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
                            {chapter.chapter_duration}
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* // Trending Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-2 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Related Courses
            </h2>
            <h2 className="text-xl font-bold tracking-tight text-gray-900">
              <Link to="/courses">See All</Link>
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {relatedCourse.map((course) => (
              <div key={course.pk} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={`${siteUrl}media/${course.fields.featured_img}`}
                    alt={course.fields.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link target="__blank" to={`/detail/${course.pk}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {course.fields.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoLink={videoLink}
        setVideoLink={setVideoLink}
      />
    </section>
  );
};

export default CourseDetail;

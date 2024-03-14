import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import VideoPopup from "./videoPopup/VideoPopup";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const siteUrl = "http://localhost:8000/";
const baseUrl = "http://localhost:8000/api";

const CourseDetail = () => {
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
  const getData = async () => {
    const response = await axios.get(`${baseUrl}/course/${course_id}`);
    setCourse(response.data);
    setTeacher(response.data.teachers_category);
    setChapter(response.data.course_chapters);
    setTechList(response.data.tech_list);
    setRelatedCourse(JSON.parse(response.data.related_courses));
  };

  const student_id = localStorage.getItem("user_id");

  const getEnrollStatus = async () => {
    const response = await axios.get(
      `${baseUrl}/enroll-status/${student_id}/${course_id}/`
    );
    setEnrollStatus(response.data.bool);
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

  useEffect(() => {
    getData();
    getEnrollStatus();
    document.title = "Course Detail";
  }, []);

  useEffect(() => {
    const userLoginStatus = localStorage.getItem("userLoginStatus");
    if (userLoginStatus === "true") {
      setStudentLoginStatus("success");
    }
  }, []);

  return (
    <section class="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
      <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4 md:w-1/2 ">
            <div class="sticky top-0 z-50 overflow-hidden ">
              <div class="relative mb-6 lg:mb-10 lg:h-2/4 ">
                <img
                  src={course?.featured_img}
                  alt=""
                  class="object-cover w-full lg:h-full "
                ></img>
              </div>
              <div class="flex-wrap hidden md:flex "></div>
            </div>
          </div>
          <div class="w-full px-4 md:w-1/2 ">
            <div class="lg:pl-20">
              <div class="mb-8 ">
                <span class="text-lg font-medium text-rose-500 dark:text-rose-200">
                  New
                </span>
                <h2 class="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                  {course?.title}
                </h2>
                <div class="flex items-center mb-6">
                  <ul class="flex mr-2">
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <p class="text-xs dark:text-gray-400 ">
                    (Total Enrolled: {course?.total_enrolled_students})
                  </p>
                </div>
                <p class="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                  {course?.description}
                </p>
                <p class="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                  <span>$1000.99</span>
                  <span class="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                    $1500.99
                  </span>
                </p>
                <Link to={`/teacher-detail/${teacher?.id}`}>
                  <p class="text-green-600 dark:text-green-300 ">
                    Course By: {teacher?.full_name}
                  </p>
                </Link>
              </div>
              <div class="flex  items-center mb-8">
                <h2 class="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                  Techs:
                </h2>
                <div class="flex flex-wrap -mx-2">
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
              <div class="flex flex-wrap items-center -mx-4 ">
                <div class="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                  {studentLoginStatus === "success" &&
                    enrollStatus === true && (
                      <p>You are enrolled in this course</p>
                    )}

                  {studentLoginStatus === "success" &&
                    enrollStatus !== true && (
                      <button
                        onClick={enrollCourse}
                        class="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                      >
                        Enroll in Course
                      </button>
                    )}
                  {studentLoginStatus !== "success" && (
                    <Link
                      to="/user-login"
                      class="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                    >
                      Enroll in Course
                    </Link>
                  )}
                </div>
                <div class="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                  <button class="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                    Add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mt-12 flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              {studentLoginStatus === "success" && enrollStatus === true && (
                <div class="overflow-hidden">
                  <table class="min-w-full text-left text-sm font-light text-surface dark:text-white">
                    <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                      <tr>
                        <th scope="col" class="px-6 py-4">
                          No
                        </th>
                        <th scope="col" class="px-6 py-4">
                          Title
                        </th>
                        <th scope="col" class="px-6 py-4">
                          Watch
                        </th>
                        <th scope="col" class="px-6 py-4">
                          Duration
                        </th>
                      </tr>
                    </thead>

                    {chapter.map((chapter) => (
                      <tbody>
                        <tr class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">
                            {chapter.id}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {chapter.title}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
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
                          <td class="whitespace-nowrap px-6 py-4">
                            1 hour 30 mins
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

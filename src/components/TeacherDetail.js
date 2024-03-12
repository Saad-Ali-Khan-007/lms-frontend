import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const baseUrl = "http://localhost:8000/api";
const TeacherDetail = () => {
  const { teacher_id } = useParams();
  const [course, setCourse] = useState([]);
  const [teacher, setTeacher] = useState();

  const getData = async () => {
    const response = await axios.get(`${baseUrl}/teachers/${teacher_id}`);
    setTeacher(response.data);
    setCourse(response.data.teacher_courses);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section class="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
      <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4 md:w-1/2 ">
            <div class="sticky top-0 z-50 overflow-hidden ">
              <div class="relative mb-6 lg:mb-10 lg:h-2/4 ">
                <img
                  src={teacher?.featured_img}
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
                  {teacher?.full_name}
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
                  <p class="text-xs dark:text-gray-400 ">(Total Enrolled)</p>
                </div>
                <p class="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                  {teacher?.description}
                </p>
              </div>
              <div class="flex  items-center mb-8">
                <h2 class="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                  Skills:
                </h2>
                <div class="flex flex-wrap -mx-2">
                  <p>{teacher?.skills}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mt-12 flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
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
                        View
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  {course.map((course) => (
                    <tbody>
                      <tr class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                          {course.id}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          {course.title}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          <Link target="__blank" to={"/detail/" + course.id}>
                            <button className="  h-[42px] w-[72px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                              View
                            </button>
                          </Link>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">
                          1 hour 30 mins
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherDetail;

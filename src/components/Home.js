import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const popular = [
  {
    id: 1,
    name: "Course Name",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 1,
    name: "Course Name",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 1,
    name: "Course Name",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 1,
    name: "Course Name",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
];
const teacher = [
  {
    id: 1,
    name: "Course Name",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 1,
    name: "Course Name",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 1,
    name: "Course Name",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 1,
    name: "Course Name",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
];
const baseurl = "http://localhost:8000/api";
export default function Home() {
  const [course, setCourse] = useState([]);
  const [popularCourse, setPopularCourse] = useState([]);
  const [popularTeachers, setPopularTeachers] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [studentReviews, setStudentReviews] = useState([]);
  const getData = () => {
    axios.get(baseurl + "/course/?result=4").then((response) => {
      setCourse(response.data);
    });
  };
  const getCourseData = () => {
    axios.get(baseurl + "/course/").then((response) => {
      setCourseData(response.data);
    });
  };

  const getPopularCourses = () => {
    axios.get(baseurl + "/popular-courses/?popular=1").then((response) => {
      setPopularCourse(response.data);
    });
  };
  const getPopularTeachers = () => {
    axios.get(baseurl + "/popular-teachers/?popular=1").then((response) => {
      setPopularTeachers(response.data);
    });
  };

  const getStudentReviews = () => {
    axios.get(baseurl + "/student-reviews/").then((response) => {
      setStudentReviews(response.data);
    });
  };

  console.log(studentReviews);
  useEffect(() => {
    getStudentReviews();
    getPopularTeachers();
    getData();
    getPopularCourses();
    getCourseData();
    document.title = "Home";
  }, []);
  return (
    <>
      {/* // Latest Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-2 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Latest Courses
            </h2>
            <h2 className="text-xl font-bold tracking-tight text-gray-900">
              <Link to="/courses">See All</Link>
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {course.map((course) => (
              <div key={course.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={course.featured_img}
                    alt={course.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/detail/${course.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {course.title}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* // Popular Courses */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-2 py-5 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Popular Courses
            </h2>
            <h2 className="text-xl font-bold tracking-tight text-gray-900">
              <Link to="/popular-courses">See All</Link>
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {popularCourse.map((course) => {
              const popular = courseData.find(
                (popularcourse) => popularcourse.id === course.id
              );

              return (
                <div key={course.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={popular?.featured_img}
                      alt={popular?.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link to={`/detail/${popular?.id}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {popular?.title}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* // Featured teachers */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-2 py-5 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Featured Teachers
            </h2>
            <h2 className="text-xl font-bold tracking-tight text-gray-900">
              <Link to="/teachers">See All</Link>
            </h2>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {popularTeachers.map((popular) => (
              <div key={popular.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={popular?.profile_img}
                    alt={popular?.full_name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/teacher-detail/${popular?.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {popular?.full_name}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto my-10 max-w-6xl grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        {studentReviews.map((review) => (
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {review.rating}/5
              </h3>
              <p className="my-4">{review.reviews}</p>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div className="text-center">{review.student?.full_name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 ">
                  Course: {review.course.title}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

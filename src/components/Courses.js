import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const baseurl = "http://localhost:8000/api";
export default function Courses() {
  const [course, setCourse] = useState([]);
  const getData = () => {
    axios.get(baseurl + "/course/").then((response) => {
      setCourse(response.data);
    });
  };
  useEffect(() => {
    document.title = "Courses";
    getData();
  }, []);
  return (
    <>
      {/* // Featured courses */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-2 py-5 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Courses
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
    </>
  );
}

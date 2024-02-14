import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://localhost:8000/api";

const TeacherCourses = () => {
  const [courseData, setCourseData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(baseUrl + "/teacher-courses/1/");
      setCourseData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    document.title = "Teacher Courses";
    getData();
  }, []);

  return (
    <div className="basis-1/2">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 mt-14">
        {courseData.map((courseList, index) => (
          <h3 className="mb-4" key={index}>
            {courseList.title}
          </h3>
        ))}
      </div>
    </div>
  );
};

export default TeacherCourses;

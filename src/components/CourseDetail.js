import React from "react";
import { useParams } from "react-router-dom";
const CourseDetail = () => {
  let { course_id } = useParams();
  return <div>CourseDetail {course_id}</div>;
};

export default CourseDetail;

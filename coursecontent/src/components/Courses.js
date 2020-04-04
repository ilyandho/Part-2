import React from "react";

import Course from "./Course";

const Courses = ({ courses }) => {
  console.log(courses);
  return (
    <div>
      {courses.map((course, i) => (
        <Course course={course} key={i} />
      ))}
    </div>
  );
};

export default Courses;

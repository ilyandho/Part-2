import React from "react";

const Course = ({ course }) => {
  const { parts } = course;

  const reducer = (s, p) => s + p.exercises;
  const total = parts.reduce(reducer, 0);

  return (
    <div>
      <h2>{course.name}</h2>

      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}

      <h4> total of {total} exercises</h4>
    </div>
  );
};

export default Course;

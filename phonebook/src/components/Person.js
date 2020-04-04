import React from "react";

const Person = ({ persons, filters }) => {
  return (
    <div>
      {persons
        .filter((person) => person.name.toLowerCase().includes(filters))
        .map((person) => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))}
    </div>
  );
};

export default Person;

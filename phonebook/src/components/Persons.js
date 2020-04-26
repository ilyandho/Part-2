import React from 'react';

const Person = ({ persons, filters, handleDelete }) => {
  return (
    <div>
      {persons
        .filter((person) => {
          return person.name.toLowerCase().includes(filters);
        })
        .map((person) => (
          <p key={person.id}>
            {person.name} {person.number} {person.id}{' '}
            <button
              type="button"
              onClick={() => handleDelete(person.id, person.name)}>
              delete
            </button>
          </p>
        ))}
    </div>
  );
};

// .filter((person) => person.name.toLowerCase().includes(filters))

export default Person;

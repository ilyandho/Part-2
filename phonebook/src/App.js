import React, { useState } from "react";

import Filter from "./components/Filter";
import Persons from "./components/Person";
import NewNumbers from "./components/NewNumbers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  // const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState("");

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const contact = { name: newName, number: newNumber };
    let exists = false;
    for (let i = 0; i < persons.length; i++) {
      //Check if the contact name is not alreayd added
      if (persons[i].name.toLowerCase() === newName.toLowerCase()) {
        exists = true;
      }
    }

    exists
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(contact));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filters={filters} setFilters={setFilters} />
      <h2>Add a new</h2>
      <NewNumbers
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filters={filters} />
    </div>
  );
};

export default App;

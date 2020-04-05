import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import Persons from "./components/Person";
import NewNumbers from "./components/NewNumbers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
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

  const personsHook = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };
  useEffect(personsHook, []);

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

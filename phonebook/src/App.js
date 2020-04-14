import React, { useState, useEffect } from "react";

import Filter from "./components/Filter";
import Persons from "./components/Persons";
import NewNumbers from "./components/NewNumbers";
import Notification from "./components/Notification";

import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filters, setFilters] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

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
    let existingUserId;
    for (let i = 0; i < persons.length; i++) {
      //Check if the contact name is not alreayd added
      if (persons[i].name.toLowerCase() === newName.toLowerCase()) {
        exists = true;
        existingUserId = persons[i].id;
      }
    }

    exists
      ? window.confirm(
          `${newName} is already added to phonebook, replace the old one with a new one?`
        )
        ? updatePerson(existingUserId, contact)
        : console.log("Not added")
      : personService.create(contact).then((returnedPersons) => {
          setPersons(persons.concat(returnedPersons));
          setErrorMessage([`Added ${newName} `, "success"]);
          setTimeout(() => setErrorMessage(null), 5000);
        });
  };

  const handleDelete = (id, name) => {
    console.log("deleting ...");
    console.log("id", id);
    const confirmation = window.confirm(`Delete ${name}`);
    console.log(confirmation);

    confirmation
      ? personService
          .remove(id)
          .then((response) => {
            console.log("deleted", response);
            setErrorMessage([
              `${name} has succeccfully been deleted`,
              "danger",
            ]);
            setTimeout(() => setErrorMessage(null), 5000);
            const afterDelete = persons.filter((person) => {
              console.log(person.id, response.id, id);
              return person.id !== id;
            });
            console.log("after", afterDelete);
            setPersons(afterDelete);
          })
          .catch((err) => {
            setErrorMessage([
              `${name} has already been removed from the server`,
              "danger",
            ]);
            setTimeout(() => setErrorMessage(null), 5000);
          })
      : console.log("not deleted");
  };

  const updatePerson = (id, userObject) => {
    personService.update(id, userObject).then((updateInfo) => {
      setPersons(
        persons.map((person) => (person.id !== id ? person : updateInfo))
      );
      setErrorMessage([`${newName} has been updated`, "success"]);
      setTimeout(() => setErrorMessage(null), 5000);
      console.log(persons);
    });
  };
  const personsHook = () => {
    personService
      .getAll()
      .then((innititalPersons) =>
        setPersons(
          innititalPersons.filter((person) => person.name !== undefined)
        )
      );
  };
  useEffect(personsHook, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
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
      <Persons
        persons={persons}
        filters={filters}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;

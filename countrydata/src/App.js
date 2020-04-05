import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import Countries from "./components/Countries";
require("dotenv").config();
console.log("process", process.env.system);
function App() {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [weatherDetails, setWeatherDetails] = useState({});
  const handleFilterChange = (e) => {
    setFilter(e.target.value.trim());
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(e.target.value.trim())
    );
    setFilteredCountries(filtered);
  };

  const weatherData = (capital) => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=926937b5a64d65ef67ca5acd7703b5cf&query=${capital}`
      )
      .then((response) => setWeatherDetails(response.data.current));
  };

  const fetchData = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  };
  useEffect(fetchData, []);

  return (
    <div className="App">
      <h1>Data for countries</h1>
      <Filter setFilter={filter} handleFilterChange={handleFilterChange} />
      <Countries
        countries={countries}
        filteredCountries={filteredCountries}
        filter={filter}
        weatherData={weatherData}
        weatherDetails={weatherDetails}
      />
    </div>
  );
}

export default App;

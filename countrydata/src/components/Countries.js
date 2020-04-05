import React from "react";

import Country from "./Country";

const Countries = ({
  countries,
  filter,
  filteredCountries,
  weatherData,
  weatherDetails,
}) => {
  console.log("weather details", weatherDetails);
  return (
    <div>
      {filter.length === 0 ? (
        countries.map((country, i) => <p key={i}>{country.name}</p>)
      ) : (
        <div>
          {filteredCountries.length > 10 ? (
            <p>Too many matches, specify another filter</p>
          ) : filteredCountries.length < 1 ? (
            <p>no match found</p>
          ) : filteredCountries.length === 1 ? (
            <Country
              country={filteredCountries[0]}
              weatherData={weatherData}
              weatherDetails={weatherDetails}
            />
          ) : (
            filteredCountries.map((country, i) => (
              <p key={i}>
                {country.name} <button type="button">show</button>
              </p>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Countries;

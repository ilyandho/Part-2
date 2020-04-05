import React from "react";

const Country = ({ country, weatherData, weatherDetails }) => {
  weatherData(country.capital); // Send capital for weather details

  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <div>
        <h3>languages</h3>
        <ul>
          {country.languages.map((lang, i) => (
            <li key={i}>{lang.name}</li>
          ))}
        </ul>
      </div>
      <img src={country.flag} alt="flag" width="200px" />
      <h3>Weather in {country.name}</h3>
      {weatherDetails ? (
        <div>
          <h5>{weatherDetails.weather_descriptions}</h5>
          <p>temperature: {weatherDetails.temperature}</p>
          <img src={weatherDetails.weather_icons} alt="weather icon" />
          <p>
            wind:{weatherDetails.wind_speed} mph direction{" "}
            {weatherDetails.wind_dir}
          </p>
        </div>
      ) : (
        <h5>Can not get weather details now</h5>
      )}
    </div>
  );
};

export default Country;

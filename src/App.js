import React, { useState } from "react";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  let [city, setCity] = useState("");

  function handleSearch(inputCity) {
    setCity(inputCity);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search onSearch={handleSearch} />
      <Weather city={city} />
      <Forecast />
      <p className="footer">This project was coded by <a href="https://www.linkedin.com/in/carolin-krahmer-94661399/" target="_blank" rel="noreferrer">Carolin Krahmer</a> and is on  <a href="https://github.com/carok76/react-weather-app/" target="_blank" rel="noreferrer">GitHub</a> and hosted on <a href="https://caros-react-weather-app.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>.</p>
    </div>
  );
}
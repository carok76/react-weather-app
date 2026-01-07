import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function Weather(props) {
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (!props.city) return; // nur bei gültiger Stadt starten

    // Wetterdaten zurücksetzen – sonst sieht man alte Ergebnisse beim "Loading"
    setTemperature(null);
    setDescription(null);
    setHumidity(null);
    setWind(null);
    setIcon(null);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=be81f193e065bf5feb2d944c7336968b&units=metric`;

    axios
      .get(url)
      .then((response) => {
        setTemperature(response.data.main.temp);
        setDescription(response.data.weather[0].description);
        setHumidity(response.data.main.humidity);
        setWind(response.data.wind.speed);
        setIcon(
          `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        );
      })
      .catch((error) => {
        console.error("Fehler beim Abrufen der Wetterdaten:", error);
      });
  }, [props.city]);

  if (
    temperature !== null &&
    description !== null &&
    humidity !== null &&
    wind !== null &&
    icon !== null
  ) {
    return (
      <div className="current-weather"> 
      <ul className="current-weather-layout">
        <div className="current-city-temp">
        <li className="current-city">{props.city}</li>
        <li className="current-temp">Temperature: {Math.round(temperature)}°C</li>
        <li className="current-temp">
          <img src={icon} alt={description} />
        </li>
        </div>
        <div className="current-details">
        <li className="description">Description: {description}</li>
        <li className="humidity">Humidity: {humidity}%</li>
        <li className="wind">Wind: {wind} km/h</li>
        </div>
      </ul>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon.js";
import WeatherUnit from "./WeatherUnit.js";
import Forecast from "./Forecast.js";
import "./App.css";

export default function Weather(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!props.city) return; // nur bei gültiger Stadt starten

    const apikey = "be81f193e065bf5feb2d944c7336968b"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apikey}&units=metric`;

    let cancelled = false;

    setLoading(true);
    setError(null);
    setData(null);

    axios
      .get(url)
      .then((response) => {
        if (cancelled) return;
        setData ({
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        icon: response.data.weather[0].icon,
        city: response.data.name,
        coordinates: response.data.coord,
        date: new Date(response.data.dt * 1000),
        })
      })
      .catch((error) => {
        if (cancelled) return;
        setError("Fehler beim Abrufen der Wetterdaten.");
      })
      .finally(() => {
        if (cancelled) return;
        setLoading(false);
      });
    return () => {
    cancelled = true;
  };
  }, [props.city]);

  if (!props.city) return <p>Please enter a city.</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return null;

  return (
    <div className="current-weather"> 
    <ul className="current-weather-layout">
      <div className="current-city-temp">
        <li className="current-city">{data.city}</li>
        <li className="current-date-description">
          <FormattedDate date={data.date} />, {data.description}
        </li>
        <li className="current-details">
          Humidity: {data.humidity}%, Wind: {data.wind} km/h
        </li>
      </div>
      <div className="current-temperature">
        <li className="current-temp"><WeatherIcon code={data.icon} size={72} color="#000" /> <WeatherUnit celsius={data.temperature} /></li>
      </div>
    </ul>
    <Forecast coordinates={data.coordinates} />
    </div>
    );
  }
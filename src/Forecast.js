import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import ForecastDay from "./ForecastDay";
import "./App.css";

export default function Forecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [days, setDays] = useState([]);

  useEffect(() => {
    if (!props.coordinates) return;

    let apikey = "be81f193e065bf5feb2d944c7336968b";
    let {lat, lon} = props.coordinates;
    let apiurl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

    axios.get(apiurl).then((response) => {
        const list = response.data.list;
        const midday = list.filter((item) => item.dt_txt.includes("12:00:00"));
        setDays(midday.slice(0, 5));
        setLoaded(true);
    });
  }, [props.coordinates]);

    if (!loaded) return <p>Loading forecast...</p>;

    return (
        <div className="weather-forecast">
            <div className="row">
                {days.map((dayData) => (
                <div className="col" key={dayData.dt}>
                    <ForecastDay data={dayData} />
                </div>
                ))}
            </div>
        </div>
    );
}
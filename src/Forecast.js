import React, { useEffect, useState } from "react";
import axios from "axios";
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

        const byDate = new Map();
        list.forEach((item) => {
        const dateKey = item.dt_txt.slice(0, 10); // z.B. "2026-01-12"
        if (!byDate.has(dateKey)) byDate.set(dateKey, []);
        byDate.get(dateKey).push(item);
      });

        const daily = Array.from(byDate.entries())
        .map(([dateKey, items]) => {
          let min = Infinity;
          let max = -Infinity;

          items.forEach((it) => {
            min = Math.min(min, it.main.temp_min);
            max = Math.max(max, it.main.temp_max);
          });

          const noon = items.find((it) => it.dt_txt.includes("12:00:00"));
          const ref = noon || items[0];

          return {
            dateKey,
            dt: ref.dt, // für Wochentag
            tempMin: Math.round(min),
            tempMax: Math.round(max),
            icon: ref.weather?.[0]?.icon,
          };
        })
        .sort((a, b) => a.dt - b.dt) // chronologisch
        .slice(0, 5); // 5 Tage

        setDays(daily);
        setLoaded(true);
    });
  }, [props.coordinates]);

    if (!loaded) return <p>Loading forecast...</p>;

    return (
        <div className="weather-forecast">
            <div className="row">
                {days.map((day) => (
            <div className="col" key={day.dateKey}>
                <ForecastDay day={day} />
            </div>
                ))}
            </div>
        </div>
    );
}
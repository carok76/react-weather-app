import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
      const { dt, tempMin, tempMax, icon } = props.day;

  function dayName() {
    const date = new Date(dt * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

    return (
    <div>
        <div className="forecast-day">{dayName()}</div>
                    {icon && <WeatherIcon code={icon} size={36} />}
                    <div className="weather-forecast-temps">
                        <span className="weather-forecast-temps-max">{tempMax}°C</span>
                        <span className="weather-forecast-temps-min">{tempMin}°C</span>
                    </div>
    </div>
    )         
}


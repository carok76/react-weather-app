import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
    const data = props.data;

    function maxTemperature() {
        let temperature = Math.round(data.main.temp_max);
        return `${temperature}`;
    }

    function minTemperature() {
        let temperature = Math.round(data.main.temp_min);
        return `${temperature}`;
    }

    function day() {
        let date = new Date(data.dt * 1000);
        let dayIndex = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[dayIndex];
    }

    return (
    <div>
        <div className="forecast-day">{day()}</div>
                    <WeatherIcon code={data.weather[0].icon} size={36} />
                    <div className="weather-forecast-temps">
                        <span className="weather-forecast-temps-max">{maxTemperature()}°C</span>
                        <span className="weather-forecast-temps-min">{minTemperature()}°C</span>
                    </div>
    </div>
    )         
}


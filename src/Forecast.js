import React from "react";
import "./App.css";

export default function Forecast ({props}) {

    return (
        <div className="weather-forecast">
            <div className="forecast-day">
                <ul>
                    <li>Mon</li>
                    <li><img 
                        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                        alt="sunny"
                        className="forecast-icon"
                    /></li>
                    <li>20°C</li>
                </ul>
            </div>
            <div className="forecast-day">
                <ul>
                    <li>Tue</li>
                    <li><img 
                        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                        alt="sunny"
                        className="forecast-icon"
                    /></li>
                    <li>20°C</li>
                </ul>
            </div>
            <div className="forecast-day">
                <ul>
                    <li>Wed</li>
                    <li><img 
                        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                        alt="sunny"
                        className="forecast-icon"
                    /></li>
                    <li>20°C</li>
                </ul>
            </div>
                        <div className="forecast-day">
                <ul>
                    <li>Thu</li>
                    <li><img 
                        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                        alt="sunny"
                        className="forecast-icon"
                    /></li>
                    <li>20°C</li>
                </ul>
            </div>
                        <div className="forecast-day">
                <ul>
                    <li>Fri</li>
                    <li><img 
                        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                        alt="sunny"
                        className="forecast-icon"
                    /></li>
                    <li>20°C</li>
                </ul>
            </div>
        </div>
    );
}
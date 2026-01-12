import React from "react";
import { 
    WiDaySunny, 
    WiNightClear, 
    WiDayCloudy, 
    WiCloud, 
    WiCloudy, 
    WiNightCloudy, 
    WiRain, 
    WiDayShowers, 
    WiNightShowers, 
    WiStormShowers, 
    WiSnowflakeCold, 
    WiFog 
} from 'weather-icons-react';

export default function WeatherIcon({ code, size, color }) {
    function getWeatherIcon(c) {
        switch (code) {
            case "01d": 
                return <WiDaySunny size = {size} color = {color} />;
            case "01n": 
                return <WiNightClear size = {size} color = {color} />;
            case "02d": 
                return <WiDayCloudy size = {size} color = {color} />;
            case "02n": 
                return <WiNightCloudy size = {size} color = {color} />;
            case "03d": 
                return <WiCloud size = {size} color = {color} />;
            case "03n": 
                return <WiCloud size = {size} color = {color} />;
            case "04d": 
                return <WiCloudy size = {size} color = {color} />;
            case "04n": 
                return <WiCloudy size = {size} color = {color} />;
            case "09d": 
                return <WiRain size = {size} color = {color} />;
            case "09n": 
                return <WiRain size = {size} color = {color} />;
            case "10d": 
                return <WiDayShowers size = {size} color = {color} />;
            case "10n": 
                return <WiNightShowers size = {size} color = {color} />;
            case "11d": 
                return <WiStormShowers size = {size} color = {color} />;
            case "11n": 
                return <WiStormShowers size = {size} color = {color} />;
            case "13d": 
                return <WiSnowflakeCold size = {size} color = {color} />;
            case "13n": 
                return <WiSnowflakeCold size = {size} color = {color} />;
            case "50d": 
                return <WiFog size = {size} color = {color} />;
            case "50n": 
                return <WiFog size = {size} color = {color} />;
            default:
                return <WiDaySunny size = {size} color = {color} />;
    }
}

return getWeatherIcon(code);
}
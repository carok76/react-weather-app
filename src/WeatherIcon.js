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

export default function WeatherIcon({ code, size = 48, color="#000" }) {
    function getWeatherIcon(c) {
        switch (code) {
            case "01d": 
                return <WiDaySunny size = {size} />;
            case "01n": 
                return <WiNightClear size = {size} />;
            case "02d": 
                return <WiDayCloudy size = {size} />;
            case "02n": 
                return <WiNightCloudy size = {size} />;
            case "03d": 
                return <WiCloud size = {size} />;
            case "03n": 
                return <WiCloud size = {size} />;
            case "04d": 
                return <WiCloudy size = {size} />;
            case "04n": 
                return <WiCloudy size = {size} />;
            case "09d": 
                return <WiRain size = {size} />;
            case "09n": 
                return <WiRain size = {size} />;
            case "10d": 
                return <WiDayShowers size = {size} />;
            case "10n": 
                return <WiNightShowers size = {size} />;
            case "11d": 
                return <WiStormShowers size = {size} />;
            case "11n": 
                return <WiStormShowers size = {size} />;
            case "13d": 
                return <WiSnowflakeCold size = {size} />;
            case "13n": 
                return <WiSnowflakeCold size = {size} />;
            case "50d": 
                return <WiFog size = {size} />;
            case "50n": 
                return <WiFog size = {size} />;
            default:
                return <WiDaySunny size = {size} />;
    }
}

return getWeatherIcon(code);
}
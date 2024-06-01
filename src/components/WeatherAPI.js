import React, { useState } from "react";
import axios from "axios";
import WeatherForm from "./WeatherForm";

export const WeatherAPI = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const fetchWeather = async (city) => {
    try {
      const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError("City not found");
      setWeatherData(null);
    }
  };


  return (
    <div>
      <WeatherForm fetchWeather={fetchWeather} />
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h3>Weather in {weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Feels Like :{weatherData.main.feels_like}</p>
          <p>Today Min: {weatherData.main.temp_min}</p>
    
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
           
          />
        </div>
      )}
   =
    </div>
  );
};

import React, {useState, ChangeEvent, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import {IWeatherInfo} from "./interfaces/Weather"
import axios, {AxiosResponse} from "axios";





function App() {
  const [weatherData, setWeatherData] = useState<IWeatherInfo[]>([])
  const [city, setCity] = useState("")
  const handleChange = (event: ChangeEvent<HTMLInputElement>) :void => {
    setCity(event.target.value);
}
  const getWeather  = async () => {
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_APP_API_KEY}`).then(response => response.json()).then((data) => console.log(data["weather"])).catch((error) => console.log(error))
  }
  // useEffect(() => {getWeather()}, [city, getWeather])

  useEffect(() => {
    axios.get<IWeatherInfo[]>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_APP_API_KEY}`).then((response: AxiosResponse) => {console.log(response.data)})
  }, [city])
  return (
    <div className="App">
    <div className="input-container">
      <input onChange={handleChange} type="text" name="city" value={city} />
      <div> {city}</div>
    
    </div>
    </div>
  );
}

export default App;

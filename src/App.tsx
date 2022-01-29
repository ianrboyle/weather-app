import React, {useState, ChangeEvent, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import {IWeatherInfo} from "./interfaces/Weather"
import axios, {AxiosResponse} from "axios";
import { isDataView } from 'util/types';


interface IData {
  main: Main[]
}
interface Main {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number
}

function App() {
  const [weatherData, setWeatherData] = useState<IWeatherInfo[]>([])
  const [data, setData] = useState<IData>()
  const [city, setCity] = useState("")
  const handleChange = (event: ChangeEvent<HTMLInputElement>) :void => {
    setCity(event.target.value);
}
  useEffect(() =>  {
     axios.get<IWeatherInfo[]>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_APP_API_KEY}`).then((response: AxiosResponse) => {
       setData(response.data["main"]); 
       console.log("data: ", data);
      //  console.log(response.data["main"])
      })
  }, [city])
  return (
    <div className="App">
    <div className="input-container">
      <input onChange={handleChange} type="text" name="city" value={city} />
     {JSON.stringify(data)}
    
    </div>
    </div>
  );
}

export default App;

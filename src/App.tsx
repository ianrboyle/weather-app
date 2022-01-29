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


interface IWeatherData {
  name: string,
  temp: number,
  description: string,
  icon: string,
}


function App() {
  const [weatherData, setWeatherData] = useState<IWeatherData>()
  const [city, setCity] = useState("")
  const handleChange = (event: ChangeEvent<HTMLInputElement>) :void => {
    setCity(event.target.value);
}

const handleClick = ():void => {
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_APP_API_KEY}`).then((response: AxiosResponse) => {
         console.log(response.data["weather"][0].description);
         setWeatherData({
           name: response.data.name,
           temp: response.data["main"].temp,
           description: response.data["weather"][0].description,
           icon: response.data["weather"][0].icon
         })

        })
}
  // useEffect(() =>  {
  //    axios.get<IWeatherInfo[]>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_APP_API_KEY}`).then((response: AxiosResponse) => {
  //      setData(response.data["main"]); 
  //      console.log("data: ", data);
  //     //  console.log(response.data["main"])
  //     })
  // }, [city])
  return (
    <div className="App">
      <div className="input-container">
        <input onChange={handleChange} type="text" name="city" value={city} />
        <button onClick={handleClick}>Submit</button>
      </div>
      <div>
        {weatherData?.description}
      </div>
    </div>
  );
}

export default App;

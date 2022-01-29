import React, {useState, ChangeEvent} from 'react';

import './App.css';

import axios, {AxiosResponse} from "axios";
import WeatherInfo from './WeatherInfo';



export interface IWeatherData {
  weatherData: {
    name: string,
    temp: number,
    description: string,
    icon: string,
  }[]

}


function App() {
  const [weatherData, setWeatherData] = useState<IWeatherData["weatherData"]>([])
  const [city, setCity] = useState("")
  const handleChange = (event: ChangeEvent<HTMLInputElement>) :void => {
    setCity(event.target.value);
}

const handleClick = ():void => {
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_APP_API_KEY}`).then((response: AxiosResponse) => {
         console.log(response.data["weather"][0].description);

         setWeatherData([...weatherData, {
           name: response.data.name,
           temp: response.data["main"].temp,
           description: response.data["weather"][0].description,
           icon: response.data["weather"][0].icon
         }])

        })
}
  return (
    <div className="App">
      <div className="input-container">
        <input onChange={handleChange} type="text" name="city" value={city} />
        <button onClick={handleClick}>Submit</button>
      </div>
      {city.length > 0 && <WeatherInfo weatherData={weatherData}/>}
    </div>
  );
}

export default App;

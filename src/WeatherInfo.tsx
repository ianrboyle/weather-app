import React from "react"
import { IWeatherData as Props } from "./App"


const WeatherInfo: React.FC<Props> = ({weatherData}) => {
  const renderWeatherInfo = (): JSX.Element[] => {
    return weatherData.map((d, i) => {
      return (<li key={i}>
        <div>
          <h1>{d.name}</h1>
          <p>{d.description}</p>
          <p>{((Number(d.temp) - 273.15) * 9/5 + 32).toFixed(2)} F</p>
        </div>
      </li>)
    })
  }
  return (
    <div>
      Weather Info:
      <ul>{renderWeatherInfo()}
</ul>
      
    </div>
  )
}
export default WeatherInfo
import React from "react";

export interface IWeatherInfo {
  coord: Coord,
  weather: Weather[],
  base: string,
  main: Main,
  visibility: string,
  wind: Wind,
  clouds: Clouds,
  dt: number,
  sys: System,
  timezone: number,
  id: number,
  name: string,
  cod: number
}

export interface Weather {
  id: number,
  main: string,
  description: string,
  icon: string
}

export interface Coord {
  lon: number,
  lat: number
}


export interface Main {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number
}

export interface Wind {
  speed: number,
  deg: number,
  gust: number
}

export interface Clouds {
  all: number
}

export interface System {
  type: number,
  id: number,
  country: string,
  sunrise: number,
  sunset: number
}
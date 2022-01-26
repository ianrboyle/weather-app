import React from "react";

export interface IWeatherInfo {
  weather: Weather;
  visibility: string;
  name: string;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}


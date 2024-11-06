import { GetWeatherService } from "./GetWeatherService";
import { FullWeather } from "model/FullWeather";

export const fullWeatherMock: FullWeather = {
  location: {
    name: "Oliveira",
    region: "Minas Gerais",
    country: "Brazil",
    lat: -20.6833,
    lon: -44.8167,
    tz_id: "America/Sao_Paulo",
    localtime: new Date("2024-11-01 15:26"),
  },
  current: {
    last_updated: new Date("2024-11-01 15:15"),
    is_day: 1,
    temp_c: 29,
    temp_f: 84.2,
    condition: {
      text: "Possibilidade de chuva irregular",
      icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
    },
    wind_kph: 8.3,
    humidity: 38,
    cloud: 69,
    feelslike_c: 28.7,
    feelslike_f: 83.7,
    uv: 7,
  },
};

export const GetWeatherServiceMock: GetWeatherService = {
  getWeatherInfo: function (): Promise<FullWeather> {
    return new Promise<FullWeather>(() => fullWeatherMock);
  },
};

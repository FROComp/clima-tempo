import { FullWeather } from "../model/FullWeather";

export interface GetWeatherService {
  getWeatherInfo(cityName: string): Promise<FullWeather>;
}

import { HttpClient } from "infra/HttpClient";
import { HttpMethod } from "infra/Http";
import { GetWeatherService } from "./GetWeatherService";
import { FullWeather } from "model/FullWeather";

export class GetWeatherServiceImpl implements GetWeatherService {
  constructor(private httpClient: HttpClient) {}

  getWeatherInfo(cityName: string): Promise<FullWeather> {
    return this.httpClient.request({
      method: HttpMethod.GET,
      url: "current.json",
      params: { q: cityName, lang: "pt" },
    });
  }
}

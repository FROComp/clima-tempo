import { useState, ChangeEvent } from "react";
import { FullWeather } from "model/FullWeather";
import { GetWeatherService } from "services/GetWeatherService";

export const useHomeModel = (service: GetWeatherService) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [city, setCity] = useState<string>("");
  const [data, setData] = useState<FullWeather | null>(null);

  const handleGetWeatherInfo = async () => {
    setLoading(true);
    await service
      .getWeatherInfo(city)
      .then((response) => setData(response))
      .catch((error) => console.log(error?.message))
      .finally(() => setLoading(false));
  };

  const handleChangeCity = (event: ChangeEvent<HTMLInputElement>) =>
    setCity(event.target.value);

  return {
    loading,
    city,
    data,
    handleGetWeatherInfo,
    handleChangeCity,
  };
};

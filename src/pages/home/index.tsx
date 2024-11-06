import React from "react";

import { HomeView } from "./view";
import { useHomeModel } from "./model";
import { GetWeatherServiceImpl } from "services/GetWeatherServiceImpl";
import { HttpClient } from "infra/HttpClient";

const Home: React.FC = () => {
  const httpClient = HttpClient.create();
  const service = new GetWeatherServiceImpl(httpClient);
  const model = useHomeModel(service);

  return <HomeView {...model} />;
};

export { Home };

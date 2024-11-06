import { Location } from "./Location";
import { Weather } from "./Weather";

export interface FullWeather {
  current: Weather;
  location: Location;
}

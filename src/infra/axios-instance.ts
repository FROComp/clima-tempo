import axios from "axios";

const BASE_URL = "http://api.weatherapi.com/v1/";
const KEY = "8f02a5c457064b4fba402622240111";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    key: KEY,
    lang: "pt",
  },
});

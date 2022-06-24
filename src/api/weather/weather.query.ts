import { weather_api } from "./weather.instance";

export const searchCityWeather = async (city: string) =>
  await weather_api.get("search.json", {
    params: {
      q: city,
    },
  });
export const getCityWeather = async (current_city: string) =>
  await weather_api.get("current.json", {
    params: {
      q: current_city,
    },
  });
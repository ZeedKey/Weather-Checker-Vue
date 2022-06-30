import type { LocationResponseType } from "@/types/location-response";
import type { WeatherResponseType } from "@/types/weather-response";
import { defineStore } from "pinia";

export const useStore = defineStore("geolocation-store", {
  state: () => {
    return {
      weather: {} as WeatherResponseType,
      location: {} as LocationResponseType,
      last_viewed: JSON.parse(window.localStorage.getItem('last-viewed')??'[]') as string[],
      searched_cities: [] as string[],
      request_error: "" as string,
      city_name: "" as string,
    };
  },

  getters: {
    getCondition: (state) => state.weather.current.condition.text,
    getWeather: (state) => state.weather,
    getCity: (state) => state.location.addresses[0].address.localName,
    getLocation: (state) => state.location.addresses[0].address,
    getRequestErrorMessage: (state) => state.request_error,
  },

  actions: {
    setLocation(pos: LocationResponseType) {
      this.location = pos;
    },
    setWeather(weather: WeatherResponseType) {
      this.weather = weather;
      this.last_viewed.push(weather.location.name)

      if(this.last_viewed.length>=5){
          this.last_viewed = this.last_viewed.slice(1)
      }
      
      window.localStorage.setItem('last-viewed', JSON.stringify(this.last_viewed))
    },
    setSearchedCities(cities: string[]) {
      this.searched_cities = cities;
    },
    setRequestError(error: string) {
      this.request_error = error;
    },
  },
});

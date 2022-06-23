<template>
  <main>
    <section class="main__display">
      <h4>the.weather</h4>
      <city-weather-list :geolocation="city_weather" />
    </section>
    <section class="main__panel">
      <left-arrow-icon />
      <div class="panel__inner">
        <city-input @on-input="onCitySearch" />
        <search-city-list @on-click="onClick" :search_cities="city_search"/>

        <separator />
        <h2>Weather details</h2>
        <city-weather-details-list :geolocation="city_weather" />
        <separator />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import axios from "axios";
import type { WeatherResponseType } from "./types/weather.response";
import type { CityType } from "./types/city.type";
import "@/assets/base.css";
export default {
  data() {
    return {
      city: {} as CityType,
      city_weather: {},
      city_search: [],
      position: {},
      geo_api_url: import.meta.env.VITE_APP_GEO_API_URL,
      geo_api_key: import.meta.env.VITE_APP_GEO_API_KEY,
      weather_api_url: import.meta.env.VITE_APP_WEATHER_API_URL,
      weather_api_key: import.meta.env.VITE_APP_WEATHER_API_KEY,
    };
  },

  methods: {
    async onCitySearch(value: string) {
      const weather_response = await axios.get(
        `${this.weather_api_url}search.json?key=${this.weather_api_key}&q=${value}`
      );
      this.city_search=weather_response.data;
    },
    async onClick(value: string) {
      const weather_response = await axios.get(
        `${this.weather_api_url}current.json?key=${this.weather_api_key}&q=${value}`
      );
      this.city_weather = weather_response.data;
    },


    async onGeoSuccess(pos: GeolocationPosition) {
      const location_response = await axios.get(
        `${this.geo_api_url}${pos.coords?.latitude},${pos.coords?.longitude}.json?key=${this.geo_api_key}&language=EN`
      );
      this.city = location_response.data.addresses[0].address;

      const weather_response = await axios.get<WeatherResponseType>(
        `${this.weather_api_url}current.json?key=${this.weather_api_key}&q=${this.city?.localName}`
      );

      this.city_weather = weather_response.data;
    },
    onGeoFailed() {
      console.log("BAD!");
    },
  },

  async created() {
    navigator.geolocation.getCurrentPosition(
      this.onGeoSuccess,
      this.onGeoFailed
    );
  },
};
</script>

<style>
body {
  background-image: url(https://images.hdqwalls.com/download/thunder-storm-4k-r8-1920x1080.jpg);
}
main {
  display: grid;
  grid-template-columns: 75% 25%;
  margin: 0;
  height: 100%;
}

.main__display {
  padding: 3em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  max-width: 600px;
}
.main__panel {
  transition: 1s all;
  display: flex;
  align-items: center;
  transform: translateX(calc(100% - 30px));
}
.main__panel:hover {
  transform: translateX(0);
}
.panel__inner {
  height: 100%;
  width: 100%;
  padding: 2em;
  color: white;
  backdrop-filter: blur(10px);
  background: rgba(50, 50, 50, 0.4);
}
</style>

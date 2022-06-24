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
        <search-city-list
          :search_cities="search_city_list"
          @on-click="onCityClick"
        />
        <separator />
        <h3>Weather details</h3>
        <city-weather-details-list :geolocation="city_weather" />
        <separator />

        <h3>Recently viewed</h3>
        <viewied-city-list
          :viewed_cities="viewed_city_list"
          :geolocation="city_weather"
          @on-item-click="onViewedCityClick"
        />
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { getCityWeather, searchCityWeather } from "./api/weather/weather.query";
import { getLocation } from "./api/location/location.query";
import "@/assets/base.css";

export default {
  data() {
    return {
      user_city: "",
      city_weather: {},
      viewed_city_list: [] as string[],
      search_city_list: [],
    };
  },

  methods: {
    async onCitySearch(city: string) {
      this.search_city_list = (await searchCityWeather(city)).data;
    },
    async onCityClick(city: string) {
      this.city_weather = (await getCityWeather(city)).data;
      this.viewed_city_list.push(city);
    },
    async onViewedCityClick(value: string) {
      console.log(value);
    },

    async onGeoSuccess(pos: GeolocationPosition) {
      this.user_city = (
        await getLocation(pos)
      ).data.addresses[0].address.localName;
      this.city_weather = (await getCityWeather(this.user_city)).data;
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
  grid-template-columns: 9fr 3fr;
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

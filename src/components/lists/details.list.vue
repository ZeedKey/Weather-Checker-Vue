<template>
  <div class="list">
    <div class="list__row">
      <p class="list__item">Cloudy</p>
      <p class="list__item">{{geolocation.current.cloud}}%</p>
    </div>

    <div class="list__row">
      <p class="list__item">Humidity</p>
      <p class="list__item">{{geolocation.current.humidity}}%</p>
    </div>

    <div class="list__row">
      <p class="list__item">Wind</p>
      <p class="list__item">{{geolocation.current.wind_mph}} mp/h</p>
    </div>
  </div>
</template>

<script lang="ts">
import type { WeatherResponseType } from '@/types/weather.response';
import type { PropType } from 'vue';
export default {
  name: "city-weather-details-list",
  props: {
    geolocation: {
      type: Object as PropType<WeatherResponseType>,
      required: true,
    }
  }
};
</script>

<style>
.list {
  color: rgba(255, 255, 255, 0.8);
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.list__row {
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <div class="weather">
    <p class="weather__temp">{{ geolocation.current.feelslike_c }}°</p>
    <p class="weather__city">{{ geolocation.location.name }}</p>
    <p class="weather__date">{{ date }}</p>
    <div class="weather__icon">
      <img :src="geolocation.current.condition.icon" />
      <p>{{ geolocation.current.condition.text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import type { WeatherResponseType } from "@/types/weather.response";
import type { PropType } from "vue";
import { formatDate } from "../../utils/format-date";
export default {
  name: "city-weather-list",
  data() {
    return {
      date: formatDate(this.geolocation.location.localtime),
    };
  },
  watch: {
    geolocation(newGeo: WeatherResponseType) {
      this.date = formatDate(newGeo.location.localtime);
    },
  },
  props: {
    geolocation: {
      type: Object as PropType<WeatherResponseType>,
      required: true,
    },
  },
};
</script>

<style scoped>
.weather {
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-areas: "temp city icon" "temp date icon";
  min-width: 40em;
}
.weather__temp {
  font-size: 10ch;
  grid-area: temp;
}
.weather__city {
  font-size: 4ch;
  grid-area: city;
  align-self: flex-end;
}
.weather__date {
  font-size: 2ch;
  grid-area: date;
  align-self: flex-start;
}
.weather__icon {
  grid-area: icon;
  text-align: center;
}
</style>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import { storeToRefs } from "pinia";
import { formatDate } from "@/utils/format-date";

export default {
  name: "city-weather-list",

  setup() {
    const { weather } = storeToRefs(useStore());
    return {
      temp: computed(() => weather.value?.current?.temp_c),
      location: computed(() => weather.value?.location?.name),
      condition: computed(() => weather.value?.current?.condition?.text),
      icon: computed(() => weather.value?.current?.condition?.icon),
      date: computed(() => formatDate(weather.value?.location?.localtime)),
    };
  },
};
</script>

<template>
  <div class="weather">
    <p class="weather__temp">{{ temp }}°</p>
    <p class="weather__city">{{ location }}</p>
    <p class="weather__date">{{ date }}</p>
    <div class="weather__icon">
      <img :src="icon" />
      <p>{{ condition }}</p>
    </div>
  </div>
</template>

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

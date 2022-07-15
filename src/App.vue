<script lang="ts">
import { getCityWeather } from "./api/weather/weather.query";
import { getLocation } from "./api/location/location.query";
import { useStore } from "./store";
import { computed } from "vue";
import "@/assets/base.css";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = useStore();

    return {
      store: computed(() => store),
      weather: computed(() => store?.weather?.current),
      error: computed(() => store?.request_error),
    };
  },
  created() {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        getLocation(pos)
          .then((data) => {
            this.store.setLocation(data.data);
            return data.data.addresses[0].address.localName;
          })
          .then((city_name) => {
            getCityWeather(city_name).then((data) =>
              this.store.setWeather(data.data)
            );
          });
      },
      (error) => {
        getCityWeather("London").then((data) =>
          this.store.setWeather(data.data)
        );
      }
    );
  },
};
</script>

<template>
  <particles-background />
  <main v-if="weather">
    <the-display />
    <the-panel />
  </main>
  <loading-indicator v-if="!weather && !error" />
  <error-alert v-if="storeref" />
</template>

<style scoped>
@media screen and (max-width: 1200px) {
  main {
    display: flex;
    flex-direction: column;
  }
}
main {
  display: grid;
  grid-template-columns: auto 400px;
  margin: 0;
  height: 100%;
}
</style>

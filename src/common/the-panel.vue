<script lang="ts">
import { useStore } from "@/store";
import { computed } from "vue";
import { getCityWeather, searchCityWeather } from "@/api/weather/weather.query";
import LeftArrowIcon from "@/icons/left-arrow.vue";

export default {
  name: "the-panel",

  components: {
    LeftArrowIcon,
  },

  setup() {
    const store = useStore();
    return {
      store: computed(() => store),
    };
  },

  created() {
    this.onCityInput = (event) => {
      searchCityWeather(event).then((response) =>
        this.store.setSearchedCities(response.data)
      );
    };
    this.onCityClick = (event) => {
      getCityWeather(event).then((response) =>
        this.store.setWeather(response.data)
      );
    };
  },
};
</script>

<template>
  <section>
    <left-arrow-icon />
    <div class="section__inner">
      <city-input @on-input="onCityInput" />
      <city-list @on-item-click="onCityClick" />

      <hr />
      <h3>Weather details</h3>
      <city-details-list />
      <hr />

      <h3>Recently viewed</h3>
      <city-viewed-list @on-item-click="onCityClick" />
    </div>
  </section>
</template>

<style scoped>
section {
  transition: 1s all;
  display: flex;
  align-items: center;
  height: 100vh;
  transform: translateX(calc(100% - 30px));
}

section:hover {
  transform: translateX(0);
}
.section__inner {
  height: 100%;
  width: 100%;
  padding: 2em;
  color: white;
  backdrop-filter: blur(10px);
  background: rgba(50, 50, 50, 0.4);

  -webkit-backdrop-filter: blur(10px);
  -moz-backdrop-filter: blur(10px);
}
</style>

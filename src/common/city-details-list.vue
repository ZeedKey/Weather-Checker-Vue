<script lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import { storeToRefs } from "pinia";

export default {
  name: "city-details-list",
  setup() {
    const { weather } = storeToRefs(useStore());
    return {
      cloud: computed(() => weather.value?.current?.cloud),
      humidity: computed(() => weather.value?.current?.humidity),
      wind: computed(() => weather.value?.current?.wind_mph),
    };
  },
};
</script>

<template>
  <div class="list">
    <div class="list__row">
      <p>Cloudy</p>
      <p>{{ cloud }}%</p>
    </div>

    <div class="list__row">
      <p>Humidity</p>
      <p>{{ humidity }}%</p>
    </div>

    <div class="list__row">
      <p>Wind</p>
      <p>{{ wind }} mp/h</p>
    </div>
  </div>
</template>

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

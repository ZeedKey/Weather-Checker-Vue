<script lang="ts">
import { useStore } from "@/store";
import { computed } from "vue";

export default {
  name: "city-list",

  setup() {
    const store = useStore();
    return {
      searched_cities: computed(() => store.searched_cities),
    };
  },

  created() {
    this.onClick = (city) => this.$emit("on-item-click", city);
  },

  computed: {
    isVisible() {
      return this.searched_cities.length > 1
        ? "max-height: 5rem"
        : "max-height: 0rem";
    },
  },
};
</script>

<template>
  <div class="list" :style="isVisible">
    <city-button
      class="list__item"
      v-for="city in this.searched_cities"
      :key="city.name"
      :city_name="city.name"
      @on-click="onClick"
    >
      {{ city.name }}
    </city-button>
  </div>
</template>

<style scoped>
.list {
  color: rgba(255, 255, 255, 0.5);
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 2em;
  max-height: 6em;
  overflow: scroll;
  overflow-x: hidden;
}

.list__item {
  cursor: pointer;
}
</style>

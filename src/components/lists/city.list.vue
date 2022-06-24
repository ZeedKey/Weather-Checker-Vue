<template>
  <div class="list" :style="isVisible">
    <select-city-button
      class="list__item"
      v-for="city in this.search_cities"
      :key="city.name"
      :city_name="city.name"
      @on-click="onClick"
    >
      {{ city.name }}
    </select-city-button>
  </div>
</template>

<script>
export default {
  name: "search-city-list",

  props: {
    search_cities: Array,
  },

  created() {
    this.onClick = (city) => this.$emit("on-click", city);
  },

  computed: {
    isVisible() {
      return this.search_cities.length > 1
        ? "max-height: 8rem"
        : "max-height: 0rem";
    },
  },
};
</script>

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

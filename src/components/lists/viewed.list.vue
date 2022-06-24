<template>
  <div class="list">
    <select-city-button
      v-for="city in this.viewed_cities"
      :key="city"
      :city_name="city"
      @on-click="onClick"
    >
      {{ city }}
    </select-city-button>
  </div>
</template>

<script>
export default {
  name: "viewied-city-list",
  props: {
    viewed_cities: {
      type: Array,
      required: true,
    },
  },
  created() {
    this.onClick = (city) => this.$emit("on-item-click", city);
  },
};
</script>

<style scoped>
.list {
  height: max-content;
  overflow: unset;
  overflow-x: hidden;
  height: 17rem;
}
</style>

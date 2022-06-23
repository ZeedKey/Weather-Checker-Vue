<template>
  <div class="list">
    <div
      class="list__item"
      v-for="city in this.search_cities"
      :key="city.name"
      @click="onClick"
    >
      {{ city.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "search-city-list",

  props: {
    search_cities: Array,
  },

  created() {
    this.onClick = (event) => this.$emit('on-click', event.target.innerHTML);
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
  max-height: 10rem;
  overflow: scroll;
}
</style>
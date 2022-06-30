<template>
  <section>
    <h4>the.weather</h4>
    <city-weather-list />
  </section>
</template>

<script lang="ts">
export default {
  name: "the-display",
};
</script>

<style scoped>
section {
  padding: 3em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  max-width: 10px;
}
</style>

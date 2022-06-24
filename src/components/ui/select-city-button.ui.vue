<template>
  <button :name="city_name" @click="onClickHandler">
    {{ city_name }}
  </button>
</template>

<script>
export default {
  name: "select-city-button",

  props: {
    city_name: {
      type: String,
      required: true,
    },
  },

  methods: {
    onClickHandler() {
      this.$emit("on-click", this.city_name);
    },
  },
};
</script>

<style>
button {
  text-decoration: none;
  background: transparent;
  border: none;
  font: inherit;
  cursor: pointer;
  color: inherit;
  text-align: left;
}
</style>

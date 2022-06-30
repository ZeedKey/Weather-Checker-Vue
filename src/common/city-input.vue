<template>
  <input @input="onInput" />
</template>

<script lang="ts">
import { debounce } from "@/utils/debounce";
export default {
  name: "city-input",

  created() {
    this.onInput = debounce((event) => {
      this.$emit("on-input", (event.target as HTMLInputElement).value);
    }, 500);
  },
};
</script>

<style scoped>
input {
  width: 100%;
  outline: none;
  padding: 0.5rem 0;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}
</style>

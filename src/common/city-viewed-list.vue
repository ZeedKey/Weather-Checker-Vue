<script lang="ts">
import { useStore } from "@/store";
import { storeToRefs } from "pinia";
import { computed } from "vue";

export default {
  name: "city-viewed-list",

  setup() {
    const store = storeToRefs(useStore());

    return {
      viewed_city_list: computed(() => store.last_viewed.value),
    };
  },

  created() {
    this.onClick = (city) => this.$emit("on-item-click", city);
  },
};
</script>

<template>
  <div class="list">
    <city-button
      v-for="city in this.viewed_city_list"
      :key="city"
      :city_name="city"
      @on-click="onClick"
    >
      {{ city }}
    </city-button>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column-reverse;
  height: max-content;
  overflow: unset;
  text-overflow: hidden;
  overflow-x: hidden;
  max-height: calc(100vh - 580px);
}
</style>

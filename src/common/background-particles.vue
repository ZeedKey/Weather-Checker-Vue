<template>
  <canvas ref="canvas" class="canvas_default" :class="[condition_style]" />
</template>

<script lang="ts">
import { Scene } from "@/scene/index";
import { resolveCondition } from "@/utils/resolve-condition";
import { useStore } from "@/store";
import { computed } from "vue";
import { storeToRefs } from "pinia";

export default {
  name: "particles-background",
  setup() {
    const { weather } = storeToRefs(useStore());
    return {
      condition: computed(
        () =>
          resolveCondition(weather?.value?.current?.condition?.text, "value") ??
          ""
      ),
      condition_style: computed(
        () =>
          resolveCondition(weather?.value?.current?.condition?.text, "style") ??
          ""
      ),
    };
  },

  mounted() {
    const canvas = Scene.getInstance(
      this.$refs.canvas as HTMLCanvasElement,
      this.condition
    );
    canvas.init(this.condition);
  },
  updated() {
    const canvas = Scene.getInstance(
      this.$refs.canvas as HTMLCanvasElement,
      this.condition
    );
    canvas.init(this.condition);
  },
};
</script>

<style scoped>
div {
  backdrop-filter: blur(20px);
}
.canvas_default {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
}
.canvas_sunny_theme {
  background: linear-gradient(-45deg, #f7a1a1, #ffbc57, #818181);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
}
.canvas_rainy_theme {
  background: linear-gradient(-45deg, #ff430a, #e4e4e4, #004d69, #000000);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
}
.canvas_cloudy_theme {
  background: linear-gradient(-45deg, #ff430a, #e4e4e4, #004d69, #000000);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
}
.canvas_snowy_theme {
  background: linear-gradient(-45deg, #ff430a, #e4e4e4, #004d69, #000000);
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
}
@-webkit-keyframes Gradient {
  0% {
    background-position: 40% 0%;
  }
  50% {
    background-position: 40% 100%;
  }
  100% {
    background-position: 40% 0%;
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 40% 0%;
  }
  50% {
    background-position: 40% 100%;
  }
  100% {
    background-position: 40% 0%;
  }
}

@keyframes Gradient {
  0% {
    background-position: 30% 0%;
  }
  50% {
    background-position: 30% 100%;
  }
  100% {
    background-position: 30% 0%;
  }
}
</style>

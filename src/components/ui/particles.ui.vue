<template>
  <canvas ref="canvas" class="canvas_default" :class="[canvas_css]" />
</template>

<script lang="ts">
import { Scene } from "@/scene/index";
import type { WeatherResponseType } from "@/types/weather.response";
import type { PropType } from "vue";
import { resolveCondition } from "@/utils/resolveCondition";

export default {
  name: "particles-background",
  props: {
    geolocation: {
      required: true,
      type: Object as PropType<WeatherResponseType>,
    },
  },
  data() {
    return {
      canvas_css: "",
    };
  },
  watch: {
    async geolocation(newGeo: WeatherResponseType) {
      if (newGeo) {
        const canvas = Scene.getInstance(
          this.$refs.canvas as HTMLCanvasElement
        );

        const conditionStyle =
          resolveCondition(newGeo.current.condition.text, "style") ?? "";
        const conditionValue =
          resolveCondition(newGeo.current.condition.text, "value") ?? "";

        this.canvas_css = conditionStyle;
        canvas.init(conditionValue);
      }
    },
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
  -webkit-animation: Gradient 50s ease infinite;
  -moz-animation: Gradient 50s ease infinite;
  animation: Gradient 50s ease infinite;
}
.canvas_sunny_theme {
  background: linear-gradient(-45deg, #ffffff, #f7a1a1, #fffeed, #fff07a);
  background-size: 400% 400%;
  -webkit-animation: Gradient 50s ease infinite;
  -moz-animation: Gradient 50s ease infinite;
  animation: Gradient 50s ease infinite;
}
.canvas_rainy_theme {
  background: linear-gradient(-45deg, #ff430a, #e4e4e4, #004d69, #000000);
  background-size: 400% 400%;
  -webkit-animation: Gradient 50s ease infinite;
  -moz-animation: Gradient 50s ease infinite;
  animation: Gradient 50s ease infinite;
}
.canvas_cloudy_theme {
  background: linear-gradient(-45deg, #ff430a, #e4e4e4, #004d69, #000000);
  background-size: 400% 400%;
  -webkit-animation: Gradient 50s ease infinite;
  -moz-animation: Gradient 50s ease infinite;
  animation: Gradient 50s ease infinite;
}
.canvas_snowy_theme {
  background: linear-gradient(-45deg, #ff430a, #e4e4e4, #004d69, #000000);
  background-size: 400% 400%;
  -webkit-animation: Gradient 50s ease infinite;
  -moz-animation: Gradient 50s ease infinite;
  animation: Gradient 50s ease infinite;
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

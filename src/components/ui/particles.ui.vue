<template>
  <canvas ref="canvas"> </canvas>
</template>

<script lang="ts">
import { Scene } from "../../scene/index";
import { Raindrop } from "../../scene/raindrop";
export default {
  name: "particles-background",

  mounted() {
    const canvas = new Scene(this.$refs.canvas as HTMLCanvasElement);
    canvas.init();

    setInterval(() => {
      canvas.spawnRaindrop();
    }, 1000);

    // setInterval(() => {
    //   const rand_pos_x = window.innerWidth - Math.random() * window.innerWidth;
    //   const rand_pos_y =
    //     window.innerHeight - Math.random() * window.innerHeight;
    //   this.context.beginPath();
    //   this.context.moveTo(rand_pos_x, rand_pos_y) + this.context.lineWidth;
    //   this.context.lineTo(rand_pos_x, rand_pos_y + 10);
    //   this.context.stroke();
    //   this.context.closePath();
    // }, 100);
    // setInterval(() => {
    //   const rand_pos_x = window.innerWidth - Math.random() * window.innerWidth;
    //   const rand_pos_y =
    //     window.innerHeight - Math.random() * window.innerHeight;

    //   this.context.beginPath();
    //   this.context.moveTo(rand_pos_x, rand_pos_y) + this.context.lineWidth;
    //   this.context.lineTo(rand_pos_x, rand_pos_y + 10);
    //   this.context.stroke();
    //   this.context.closePath();
    // }, 100);
  },
};
</script>

<style scoped>
div {
  backdrop-filter: blur(20px);
}
canvas {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: black;
}
</style>

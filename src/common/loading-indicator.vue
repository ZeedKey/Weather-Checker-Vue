<template>
  <div class="preloader">
    <div class="preloader__content">
      <svg
        version="1.1"
        id="cloud"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="10px"
        height="10px"
        viewBox="0 0 10 10"
        enable-background="new 0 0 10 10"
        xml:space="preserve"
      >
        <path
          fill="none"
          d="M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"
        ></path>
      </svg>

      <div class="rain">
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
        <span class="drop"></span>
      </div>

      <div class="text">LOOKING OUTSIDE FOR YOU... ONE SEC</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading-indicator",
};
</script>

<style scoped>
.preloader {
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(10px);
  background: rgba(50, 50, 50, 0.4);
}

svg {
  width: 110px;
  height: 110px;
}

path {
  stroke: #9ea1a4;
  stroke-width: 0.25;
  fill: #241e20;
}

#cloud {
  position: relative;
  z-index: 2;
  transform: rotate(180deg);
}

#cloud path {
  fill: #efefef;
  transform: rotate(180deg);
  transform-origin: 50% 50%;
}

#sun {
  margin-left: -10px;
  margin-top: 6px;
  opacity: 0;
  width: 60px;
  height: 60px;
  z-index: 1;

  animation-name: rotate;
  animation-duration: 16000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

#sun path {
  stroke-width: 0.18;
  fill: #9ea1a4;
}

@keyframes rotate {
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
}

/* Rain */
.rain {
  position: absolute;
  width: 70px;
  height: 70px;
  margin-top: -32px;
  margin-left: 19px;
}

.drop {
  opacity: 1;
  background: #9ea1a4;
  display: block;
  float: left;
  width: 3px;
  height: 10px;
  margin-left: 4px;
  border-radius: 0px 0px 6px 6px;

  animation-name: drop;
  animation-duration: 350ms;
  animation-iteration-count: infinite;
}

.drop:nth-child(1) {
  animation-delay: -130ms;
}

.drop:nth-child(2) {
  animation-delay: -240ms;
}

.drop:nth-child(3) {
  animation-delay: -390ms;
}

.drop:nth-child(4) {
  animation-delay: -525ms;
}

.drop:nth-child(5) {
  animation-delay: -640ms;
}

.drop:nth-child(6) {
  animation-delay: -790ms;
}

.drop:nth-child(7) {
  animation-delay: -900ms;
}

.drop:nth-child(8) {
  animation-delay: -1050ms;
}

.drop:nth-child(9) {
  animation-delay: -1130ms;
}

.drop:nth-child(10) {
  animation-delay: -1300ms;
}

@keyframes drop {
  50% {
    height: 45px;
    opacity: 0;
  }

  51% {
    opacity: 0;
  }

  100% {
    height: 1px;
    opacity: 0;
  }
}

.text {
  letter-spacing: 1px;
  text-align: center;
  margin-left: -43px;
  font-weight: bold;
  margin-top: 20px;
  font-size: 11px;
  color: white;
  width: 200px;
}
</style>

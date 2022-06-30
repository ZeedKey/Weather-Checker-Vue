<script>
export default {
  name: "error-alert",
};
</script>

<template>
  <div class="error">
    <div class="error_header">
      <h1 class="title">Oops!</h1>
    </div>
    <div class="error__content">
      <p class="description">
        For a rich experience we would like you to allow geolocation
      </p>
      <p class="postscriptum">We don't share your information</p>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: white;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

.title {
  font-size: 8ch;
}

.error__content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>

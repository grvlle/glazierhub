<template>
  <div class="border"></div>
</template>

<script>
export default {
  name: "top-border",
};
</script>

<style lang="scss">

.border {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 58px;
  background-image: linear-gradient(90deg, (#8dd9ff, #52a0fd));
  z-index: 100;
}
</style>
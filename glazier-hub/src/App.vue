<template>
  <top-border></top-border>
  <div id="app">
    <video-bg></video-bg>

    <info-box></info-box>
  </div>
</template>

<script>
import InfoBox from "./components/InfoBox.vue";
import VideoBg from "./components/Video.vue";
import TopBorder from "./components/TopBorder";

export default {
  name: "App",
  components: {
    InfoBox,
    VideoBg,
    TopBorder,
  },
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

body,
html {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  max-width: 100%;
}
#app {
  height: 100%;
  width: 100%;
  text-align: center;
  position: fixed;
  // background-image: url("assets/img/bg.png");
  // -webkit-background-size: cover;
  // -moz-background-size: cover;
  // -o-background-size: cover;
  // background-size: cover;
  overflow: hidden;
  transform: scale(1.1);
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<template>
  <top-border></top-border>

  <div id="app">
    <video-bg></video-bg>

    <info-box></info-box>
  </div>
  <div></div>
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
  overflow: hidden;
  -webkit-font-smoothing: none;
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
  
  -webkit-font-smoothing: none;
}
</style>

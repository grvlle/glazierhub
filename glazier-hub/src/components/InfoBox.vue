<template>
  <div class="box">
    <img src="../assets/img/logo.png" />
    <h1>Glacier<span style="color: #8dd9ff">Hub</span></h1>
    <p>
      We're a consultancy business that specializes in distributed systems and
      storage solutions.
      <br /><br />
      Our team consists of software engineers with years of experience in
      building <b>scalable</b> and <b>low-latency</b> distributed software.
    </p>
    <cta-btn></cta-btn>
  </div>
</template>

<script>
import CtaBtn from "./Button.vue";

export default {
  name: "info-box",
  components: {
    CtaBtn,
  },
};
</script>

<style lang="scss">
.box {
  display: flexbox;
  color: #1d1d1d;
  background-color: rgba(158, 158, 158, 0.185);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  box-shadow: rgba(114, 114, 114, 0.281) 0px 0px 20px 0px;
  width: 17em;
  padding: 15px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

img {
  width: 25%;
  height: 18%;
  margin-bottom: -30px;
  margin-top: 20px;
}

h1 {
  font-family: "Montserrat", sans-serif;
  color: aliceblue;
  font-size: 40px;
  font-weight: bold;
}

p {
  font-family: "Verdana", sans-serif;
  font-size: 12px;
  opacity: 0.7;
  color: rgb(243, 243, 243);
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: 10px;
}
</style>
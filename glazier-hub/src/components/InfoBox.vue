<template>
  <div class="vertical-center justify-content-center">
    <div class="terminal">
      <span class="terminal_icon__aA_71"></span>
      <span class="terminal_icon__aA_71"></span>
      <span class="terminal_icon__aA_71"></span>
      <br />
      <type-effect />
    </div>
    <div class="box">
      <div v-if="!$store.showContactForm">
        <img src="../assets/img/logo.png" />
        <h1>Glacier<span style="color: #8dd9ff">Hub</span></h1><br />
        <p>
          We're a consultancy business that specializes in distributed systems
          and storage solutions.
          <br /><br />
          Our team consists of software engineers with years of experience in
          building <b>scalable</b> and <b>low-latency</b> distributed software.
        </p>
      </div>
      <contact-form v-if="$store.showContactForm" />
      <cta-btn :btn-text="btnText" @click="contactUs"></cta-btn>
    </div>
  </div>
</template>

<script>
import CtaBtn from "./Button.vue";
import ContactForm from "./ContactForm.vue";
import TypeEffect from "./TypeEffect.vue";

export default {
  name: "info-box",
  components: {
    CtaBtn,
    ContactForm,
    TypeEffect,
  },
  data() {
    return {
      showContactForm: false,
      btnText: "Contact",
    };
  },
  methods: {
    contactUs: function () {
      this.$store.showContactForm = !this.$store.showContactForm;
      if (this.$store.showContactForm) {
          this.btnText = "Go Back"
      } else {
          this.btnText = "Contact"
      }
    },
  },
};
</script>

<style lang="scss">

.vertical-center {
  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
  min-height: 100vh; /* These two lines are counted as one :-)       */

  display: flex;
  align-items: center;
}


.terminal {
  background-color: #191724;
  float: left;
  width: 72%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  height: 510px;
  flex-grow: 1;
  text-align: left;
  max-width: 47em;
  min-width: 40em;
  box-shadow: rgba(31, 31, 31, 0.651) 0px 0px 20px 0px;
}

.terminal_icon__aA_71 {
  border-radius: 50%;
  display: inline-block;
  margin-top: 10px;
  width: 10px;
  height: 10px;
}

.terminal_icon__aA_71:first-of-type {
  background: #ff5f56;
  margin-left: 12px;
}

.terminal_icon__aA_71:nth-of-type(2) {
  background: #ffbd2e;
  margin-left: 12px;
}

.terminal_icon__aA_71:nth-of-type(3) {
  background: #27c93f;
  margin-left: 12px;
}

.box {
  height: 510px;
  float: right;
  display: flexbox;
  color: #1d1d1d;
  background-color: rgba(29, 27, 41, 0.5);
  backdrop-filter: blur(15px);
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(31, 31, 31, 0.651) 0px 0px 20px 0px;
  max-width: 17em;
  min-width: 17em;
  padding: 15px;
}

img {
  width: 25%;
  height: 18%;
  margin-bottom: 0px;
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
  font-size: 13px;
  opacity: 0.7;
  color: rgb(243, 243, 243);
  margin-bottom: 10px;
  margin-top: 20px;
}
</style>
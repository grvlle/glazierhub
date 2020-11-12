<template>
  <form class="contact-form" @submit.prevent="sendEmail">
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <button type="submit" class="btn fancy-button bg-gradient1"><span>SEND IT</span></button>
  </form>

</template>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('service_ducx66m', 'template_pap7zau', e.target, 'user_jpmayVYOD7Ud2zRQ23MFc')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    },
  }
}
</script>

<style lang="scss" scoped>
body {
  background: #f1f1f1;
  font-family: "Roboto", sans-serif;
}

.btn {
  background: none; /* Green */
  border: none;
  text-decoration: none;
  outline:none;
    &:hover,
  &:focus,
  &:after,
  &:active {
    text-decoration: none;
    border: none;
    outline:none;
  }
}

/* Mixins */
@mixin gradientBg($startColor, $endColor) {
  background: $startColor;
  background: -moz-linear-gradient(
    left,
    $startColor 0%,
    $endColor 80%,
    $endColor 100%
  );
  background: -webkit-linear-gradient(
    left,
    $startColor 0%,
    $endColor 80%,
    $endColor 100%
  );
  background: linear-gradient(
    to right,
    $startColor 0%,
    $endColor 80%,
    $endColor 100%
  );
}

/* bg shortcodes */
.bg-gradient1 span,
.bg-gradient1:before {
  @include gradientBg(#52a0fd, #8dd9ff);
}


/* General */
.wrapper {
  margin: 5% auto;
  text-align: center;
  transform-style: perserve-3d;
}
a {
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
}

/* fancy Button */
.fancy-button {
  display: inline-block;
  margin: 20px;
  margin-bottom: 0px;
  margin-top: 40px;
  font-family: "Verdana", Helvetica, Arial, sans-serif;
  font-size: 11px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffffff;
  position: relative;

  &:before {
    content: "";
    display: inline-block;
    height: 40px;
    position: absolute;
    bottom: -5px;
    left: 30px;
    right: 30px;
    z-index: -1;
    border-radius: 30em;
    filter: blur(20px) brightness(0.95);
    transform-style: preserve-3d;
    transition: all 0.3s ease-out;
  }
  i {
    margin-top: -1px;
    margin-right: 20px;
    font-size: 1.265em;
    vertical-align: middle;
  }
  span {
    display: inline-block;
    padding: 13px 68px;
    border-radius: 50em;
    position: relative;
    z-index: 2;
    will-change: transform, filter;
    transform-style: preserve-3d;
    transition: all 0.3s ease-out;
  }
  &:focus,
  &:active {
    color: #ffffff;
  }
  &:hover {
    color: #ffffff;

    span {
      filter: brightness(1.05) contrast(1.05);
      transform: scale(0.95);
    }
    &:before {
      bottom: 0;
      filter: blur(10px) brightness(0.95);
    }
  }
  &.pop-onhover {
    &:before {
      opacity: 0;
      bottom: 10px;
    }
    &:hover {
      &:before {
        bottom: -7px;
        opacity: 1;
        filter: blur(20px);
      }
      span {
        transform: scale(1.04);
      }
      &:active {
        span {
          filter: brightness(1) contrast(1);
          transform: scale(1);
          transition: all 0.15s ease-out;
        }
        &:before {
          bottom: 0;
          filter: blur(10px) brightness(0.95);
          transition: all 0.2s ease-out;
        }
      }
    }
  }
}

.contact-form {
  font-family: 16px;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
}

.contact-form .separator {
  border-bottom: solid 1px #ccc;
  margin-bottom: 15px;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  color: #333;
  text-align: left;
  font-size: 28px;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  border: solid 1px #e8e8e8;
  font-family: "Roboto", sans-serif;
  padding: 10px 7px;
  margin-bottom: 15px;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #da552f;
  border: solid 1px #da552f;
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  text-align: center;
  text-transform: uppercase;
}

.contact-form .button:hover {
  background: #ea532a;
  border: solid 1px #ea532a;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px;
}
</style>
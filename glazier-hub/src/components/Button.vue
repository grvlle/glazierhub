<template>
  <div>
    <a href="#" class="fancy-button bg-gradient1"
      ><span>{{ btnText }}</span></a
    >
  </div>
</template>

<script>

export default {
  name: "cta-btn",
  props: {
      btnText: {
          type: String,
          required: true,
          default: "Contact"
      }
  }
};
</script>

<style lang="scss">
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
    border-radius: 50em;
    position: relative;
    padding: 10px 63px;
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
</style>
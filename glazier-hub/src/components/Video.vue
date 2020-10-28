<template>
  <div class="videobg">
    <video playsinline autoplay muted loop>
      <!-- 
      - Video needs to be muted, since Chrome 66+ will not autoplay video with sound.
      WCAG general accessibility recommendation is that media such as background video play through only once. Loop turned on for the purposes of illustration; if removed, the end of the video will fade in the same way created by pressing the "Pause" button  -->
      <source
        src="https://drive.google.com/uc?export=download&id=1K7AavfDcSmukHfmtjhDRsxrcM3XE49Uo"
        type="video/webm; codecs=vp9,vorbis"
      />
      <source
        src="https://drive.google.com/uc?export=download&id=1v2Z4ItWcxzw-oJU3TOA1LNm01dSzKkH6"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<script>
export default {
  name: "video-bg",
};
</script>

<style lang="scss">
.videobg video {
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  z-index: -100;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.videobg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  background-attachment: scroll;
}
</style>
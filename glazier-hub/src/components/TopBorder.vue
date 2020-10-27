<template>
  <div class="border"></div>
</template>

<script>
export default {
    name: "top-border",

}
</script>

<style lang="scss">
.border {
    width: 100%;
    margin-top: 7%;
    height: 5px;
    position: fixed;
    background-image: linear-gradient(90deg, (#8dd9ff, #52a0fd));
}
</style>
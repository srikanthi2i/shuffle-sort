<template>
  <header>
    <p>Shuffle and Sort</p>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="scss" scoped>
header {
  height: $header-footer-height;
  background-color: $text-color;
  color: $bg-color;
  @include content-centered;
  p {
    font-size: 2.4rem;
    font-weight: $font-weight-bold;
  }
  @include media_desktop {
    background-color: $bg-color;
    color: $text-color;
  }
}
</style>

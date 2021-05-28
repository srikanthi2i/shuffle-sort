<template>
  <footer>
    <p>Shuffle and sort by Algonomy</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss" scoped>
footer {
  height: $header-footer-height;
  @include content-centered;
  p {
    font-size: 1.4rem;
    font-style: italic;
  }
}
</style>

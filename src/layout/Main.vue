<template>
  <section class="main">
    <Home />
  </section>
</template>

<script>
import Home from '../pages/Home.vue';

export default {
  name: 'Main',
  components: {
    Home
  }
};
</script>

<style lang="scss" scoped>
section.main {
  max-height: calc(100vh - #{$header-footer-height * 2});
  background-color: $bg-color;
  overflow: auto;
  @include media_desktop {
    background-color: $secondary;
  }
}
</style>

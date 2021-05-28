<template>
  <div class="card" :class="[bgColor]">
    <p>{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    value: Number,
    bgColor: String
  }
};
</script>

<style lang="scss" scoped>
.card {
  height: 50px;
  width: 100%;
  margin-bottom: 0.5rem;
  @include content-centered;
  p {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
  }
  @include media-desktop {
    height: 225px;
    width: 33.33%;
    margin-bottom: 0;
    p {
      font-size: 9.2rem;
      font-weight: 600;
      text-align: center;
    }
  }
}
</style>

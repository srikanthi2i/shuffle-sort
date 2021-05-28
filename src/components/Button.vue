<template>
  <div class="button-wrapper">
    <button @click="$emit(eventAction)">{{ label }}</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: String,
    eventAction: String
  }
};
</script>

<style lang="scss" scoped>
.button-wrapper {
  height: 50px;
  margin: 3.5rem 3.5rem 0;
  background-color: $primary;
  width: calc(50% - 7rem);
  max-width: 225px;
  display: flex;
  border-radius: 8px;
  button {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    border: none;
    width: 100%;
    background: transparent;
    color: $bg-color;
  }
  &:last-child {
    margin-bottom: 3.5rem;
  }
  @include media-desktop {
    width: calc(75% - 7rem);
    max-width: unset;
    height: 65px;
    button {
      font-size: 2rem;
    }
  }
}
</style>

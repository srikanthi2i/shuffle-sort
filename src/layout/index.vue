<template>
  <Header />
  <Main />
  <Footer />
</template>

<script>
import Header from './Header.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';

export default {
  name: 'Layout',
  components: {
    Header,
    Main,
    Footer
  }
};
</script>

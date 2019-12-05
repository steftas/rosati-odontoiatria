<template>
  <div id="app">
    <header v-if="!hideHeaderFooter">
      <Header />
    </header>

    <router-view/>

    <footer v-if="!hideHeaderFooter">
      <Footer />
    </footer>
  </div>
</template>

<script lang="ts">
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';

  export default {
    data() {
      return {
        hideHeaderFooter: false,
      }
    },
    components: {
      Header,
      Footer,
    },
    watch: {
      $route: function() {
        if (this.$route.name === 'adminattivita') {
          this.hideHeaderFooter = true;
        } else {
          this.hideHeaderFooter = false;
        }
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Mada:300,400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');

  #app {
    background-color: #f9f9f9;
    overflow-x: hidden;

    * {
      font-family: 'Mada', sans-serif;
    }
  }
</style>

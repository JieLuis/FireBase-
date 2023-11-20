<template>
  <Navbar />
  <div class="homecontainer">
    <p class="title">
      Good moring, good afternoon, good evening and good night
      <br />
      早上好
    </p>
    <div class="break"></div>
    <button class="btn btn--primary">VERY GOOD好</button>
  </div>
  <Weathercard />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Weathercard from "./components/Weathercard.vue";
export default { components: { Navbar, Weathercard } };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

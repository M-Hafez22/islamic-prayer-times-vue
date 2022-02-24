<template>
  <Clock />
  <PrayTimes />
</template>

<script>
import Clock from "./components/Clock.vue";
import PrayTimes from "./components/prayerTimes/PrayTimes.vue";

export default {
  name: "App",
  components: {
    Clock,
    PrayTimes,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

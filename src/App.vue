<template>
  <div :class="[theme, 'app']">
    <Clock />
    <PrayTimes />
    <Footer />
  </div>
</template>

<script>
import Clock from "./components/Clock.vue";
import PrayTimes from "./components/prayerTimes/PrayTimes.vue";
import Footer from "./components/footer/Footer.vue";

import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Clock,
    PrayTimes,
    Footer,
  },
  computed: {
    ...mapState(["theme"]),
  },
};
</script>

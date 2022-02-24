<template>
  <h1>Prayer Times</h1>
  <div v-if="loading">
    <h1>Loading...</h1>
  </div>
  <HijriDate v-if="!loading" :hijri="hijri" :gregorian="gregorian" />
  <PrayCard />
  <RemaineTime />
</template>

<script>
import PrayCard from "./PrayCard.vue";
import RemaineTime from "./RemaineTime.vue";
import HijriDate from "./HijriDate.vue";
import { mapState } from "vuex";

export default {
  name: "PrayTimes",
  data() {
    return {
      Loading: true,
      data: {},
      timings: {},
      praysTimes: [],
      praysNames: [],
      latitude: "51.508515",
      longitude: "-0.1254872",
      gregorian: {},
      hijri: {},
      remaineTime: "",
      nextPray: 1,
      date: Math.floor(Date.now() / 1000),
    };
  },
  components: {
    HijriDate,
    PrayCard,
    RemaineTime,
  },
  mounted() {
    setInterval(() => this.setTime(), 1000);
  },
  methods: {
    setTime() {
      this.date = new Date();
    },
  },
  computed: {
    ...mapState(["theme"]),
  },
  async created() {
    // Get Current Position
    const success = (position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    };
    // Print error
    const error = (position) => {
      console.log(position.message);
    };
    // check Browser for navigator
    !navigator.geolocation
      ? console.log("Geolocation is not supported by your browser")
      : navigator.geolocation.getCurrentPosition(success, error);

    // GET request using fetch with async/await
    const response = await fetch(
      `https://api.aladhan.com/v1/timings/${this.date}?latitude=${this.latitude}&longitude=${this.longitude}&method=5`
    );
    const data = await response.json();
    this.data = data.data;
    this.Loading = false;

    // additional data to be removed
    const additional = ["Sunrise", "Imsak", "Midnight", "Sunset"];
    // Remove additional data
    additional.forEach((i) => delete data.data.timings[i]);
    // Set Local states
    this.timings = data.data.timings;
    this.praysNames = Object.keys(data.data.timings);
    this.praysTimes = Object.values(data.data.timings);
    this.gregorian = data.data.date.gregorian;
    this.hijri = data.data.date.hijri;
  },
};
</script>
<template>
  <h1>Prayer Times</h1>
  <div v-if="loading">
    <h1>Loading...</h1>
  </div>
  <div v-else>
    <h1>Data is Loaded</h1>
  </div>
  <HijriDate />
  <PrayCard />
  <RemaineTime />
</template>

<script>
import HijriDate from "./HijriDate.vue";
import PrayCard from "./PrayCard.vue";
import RemaineTime from "./RemaineTime.vue";

export default {
  name: "PrayTimes",
  date() {
    return {
      loaded: false,
      prayData: {},
    };
  },
  components: {
    HijriDate,
    PrayCard,
    RemaineTime,
  },
  async created() {
    let latitude = "51.508515";
    let longitude = "-0.1254872";
    // Get Current Position
    const success = (position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    };
    // Print error
    const error = (position) => {
      console.log(position.message);
    };
    // check Browser for navigator
    !navigator.geolocation
      ? console.log("Geolocation is not supported by your browser")
      : navigator.geolocation.getCurrentPosition(success, error);

    console.log("latitude", latitude);
    // GET request using fetch with async/await
    const response = await fetch(
      `https://api.aladhan.com/v1/timings/${Math.floor(
        Date.now() / 1000
      )}?latitude=${latitude}&longitude=${longitude}&method=5`
    );
    const data = await response.json();
    // this.prayData = data.data;
    console.log(data.data);
    this.loaded = true;
  },
};
</script>
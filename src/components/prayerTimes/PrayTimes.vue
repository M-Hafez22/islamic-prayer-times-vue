<script setup>
import { ref, watch } from "vue";
import PrayCard from "./PrayCard.vue";
import RemaineTime from "./RemaineTime.vue";
import HijriDate from "./HijriDate.vue";

// Initial URl
const latitude = ref("51.508515");
const longitude = ref("-0.1254872");
const date = ref(Math.floor(Date.now() / 1000));
const apiUrl = ref(
  `https://api.aladhan.com/v1/timings/${date.value}?latitude=${latitude.value}&longitude=${longitude.value}&method=5`
);

const loaded = ref(null);
const timings = ref(null);
const praysNames = ref(null);
const praysTimes = ref(null);
const gregorian = ref(null);
const hijri = ref(null);
const timeZone = ref(null);

// Update URL with the Current Loaction
// Get Current Position
const success = (position) => {
  latitude.value = position.coords.latitude;
  longitude.value = position.coords.longitude;
  apiUrl.value = `https://api.aladhan.com/v1/timings/${date.value}?latitude=${latitude.value}&longitude=${longitude.value}&method=5`;
};
// Print error
const error = (position) => {
  console.log(position.message);
};
// check Browser for navigator
!navigator.geolocation
  ? console.log("Geolocation is not supported by your browser")
  : navigator.geolocation.getCurrentPosition(success, error);

// API content holder
const prayData = ref(null);

// Fetching API
async function fetchData() {
  prayData.value = null;
  const res = await fetch(apiUrl.value);
  const data = await res.json();
  prayData.value = data.data;
  loaded.value = true;

  // additional data to be removed
  const additional = [
    "Sunrise",
    "Imsak",
    "Midnight",
    "Sunset",
    "Firstthird",
    "Lastthird",
  ];
  // Remove additional data
  additional.forEach((i) => delete data.data.timings[i]);
  // Set Local states
  timings.value = prayData.value.timings;
  praysNames.value = Object.keys(prayData.value.timings);
  praysTimes.value = Object.values(prayData.value.timings);
  gregorian.value = prayData.value.date.gregorian;
  hijri.value = prayData.value.date.hijri;
  timeZone.value = prayData.value.meta.timezone;
}

fetchData();

watch(apiUrl, fetchData);
</script>

<template>
  <div class="prayTime">
    <div v-if="!loaded">
      <h1>Loading...</h1>
    </div>

    <HijriDate v-if="loaded" :hijri="hijri" :gregorian="gregorian" />
    <ul class="prayList" v-if="loaded">
      <PrayCard
        v-for="(pray, index) in praysNames"
        :key="pray"
        :name="pray"
        :index="index"
        :time="timings[pray].slice(0, 5)"
        :praysTimes="praysTimes"
      />
    </ul>
    <RemaineTime
      v-if="loaded"
      :praysNames="praysNames"
      :praysTimes="praysTimes"
    />
  </div>
  <h3>{{ timeZone }}</h3>
</template>

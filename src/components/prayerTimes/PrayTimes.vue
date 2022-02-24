<template>
  <h1>Prayer Times</h1>

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
    return {};
  },
  components: {
    HijriDate,
    PrayCard,
    RemaineTime,
  },
};
</script>
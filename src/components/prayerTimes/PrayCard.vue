<template>
  <li
    :class="[
      theme === 'dark' ? 'prayCardDark' : 'prayCardLight',
      nextPray === index ? 'active' : '',
    ]"
  >
    <h3>{{ translateNames }}</h3>
    <h3>{{ time }}</h3>
  </li>
</template>

<script>
import { mapState } from "vuex";
import nextPray from "../../helper/nextPray.js";

export default {
  name: "PrayCard",
  data() {
    return {
      remaineTime: "",
      nextPray: 9,
    };
  },
  props: ["name", "time", "index", "praysTimes"],
  computed: {
    ...mapState(["lang", "prayNames_ar", "theme"]),
    translateNames() {
      return this.lang === "en" ? this.name : this.prayNames_ar[this.index];
    },
  },
  mounted() {
    setInterval(() => {
      [this.remaineTime, this.nextPray] = nextPray(this.praysTimes);
    }, 1000);
  },
};
</script>

<template>
  <li>
    <h3>{{ translateNames }}</h3>
    <h3>{{ time }}</h3>
  </li>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PrayCard",
  props: ["name", "time", "index"],
  computed: {
    ...mapState(["lang", "prayNames_ar"]),
    translateNames() {
      return this.lang === "en" ? this.name : this.prayNames_ar[this.index];
    },
  },
};
</script>

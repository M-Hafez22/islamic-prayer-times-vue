<template>
  <h2>{{translatedDate}}</h2>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HijriDate",
  props: ["hijri", "gregorian"],
  computed: {
    ...mapState(["lang"]),
    translatedDate() {
      return this.lang === "en"
        ? `${this.gregorian.weekday.en} ${this.hijri.day} ${this.hijri.month.en} ${this.hijri.year}`
        : `${this.hijri.weekday.ar} ${this.hijri.day} ${this.hijri.month.ar} ${this.hijri.year}`;
    },
  },
};
</script>

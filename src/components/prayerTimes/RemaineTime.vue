<template>
  <p class="remainTime">
     {{ remainTimeMsg }} {{ prayInLang }} 
    <span> {{ remaineTime }}</span>
  </p>
</template>

<script>
import nextPray from "../../helper/nextPray";
import { mapState } from "vuex";

export default {
  name: "RemaineTime",
  data() {
    return {
      remaineTime: "",
      nextPray: 9,
    };
  },
  props: ["praysTimes", "praysNames"],
  mounted() {
    setInterval(() => {
      [this.remaineTime, this.nextPray] = nextPray(this.praysTimes);
    }, 1000);
  },
  computed: {
    ...mapState(["lang", "prayNames_ar"]),
    remainTimeMsg() {
      return this.lang === "en" ? "Remaining time to " : "يتبقى على رفع أذان ";
    },
    prayInLang() {
      return this.lang === "en"
        ? this.praysNames[this.nextPray]
        : this.prayNames_ar[this.nextPray];
    },
  },
};
</script>

<style scoped>
.ar {
  display: flex;
  flex-direction: row-reverse;
}
</style>
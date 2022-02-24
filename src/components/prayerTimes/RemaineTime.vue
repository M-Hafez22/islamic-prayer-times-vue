<template>
  <p class="remainTime">Remaining time to {{ praysNames[this.nextPray] }} <span> {{ remaineTime }}</span></p>
</template>

<script>
import nextPray from "../../helper/nextPray";

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
};
</script>

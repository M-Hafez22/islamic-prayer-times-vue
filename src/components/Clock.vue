<template>
  <div class="clock">
    <div class="main">
      {{timeOn12Formate}}<span class="small">:{{ second }}</span>
    </div>
  </div>
</template>

<script>
import { addLeadingZero, to12Format } from "../helper/formatTime";

export default {
  name: "Clock",
  data() {
    return {
      hour: 0,
      minute: 0,
      second: 0,
    };
  },
  mounted() {
    setInterval(() => this.setTime(), 1000);
  },
  computed:{
      timeOn12Formate(){
        return to12Format(`${this.hour}:${this.minute}`)
      }
  },
  methods: {
    setTime() {
      const date = new Date();
      this.hour = addLeadingZero(date.getHours());
      this.minute = addLeadingZero(date.getMinutes());
      this.second = addLeadingZero(date.getSeconds());
    },
  },
};
</script>
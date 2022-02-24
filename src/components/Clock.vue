<template>
  <div class="clock">
    <div class="main">
      {{ hour }}:{{ minute }}
      <span class="small">:{{ second }}</span>
    </div>
  </div>
</template>

<script>
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
  methods: {
    setTime() {
      const date = new Date();
      this.hour = date.getHours();
      this.minute = date.getMinutes();
      this.second = date.getSeconds();
    },
  },
};
</script>
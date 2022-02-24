<template>
  <li>
    <h3>{{ name }}</h3>
    <h3>{{ time }}</h3>
  </li>
</template>

<script>
export default {
  name: "PrayCard",
  props: ["name", "time"],
};
</script>

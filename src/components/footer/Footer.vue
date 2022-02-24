<template>
  <footer>
    <button class="setting-btn" @click="toggleSettings">⚙️</button>
    <AppSettings v-show="isOpen" />
  </footer>
</template>

<script>
import AppSettings from "./AppSettings.vue";

export default {
  name: "Footer",
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    toggleSettings() {
      this.isOpen = !this.isOpen;
    },
  },
  components: {
    AppSettings,
  },
};
</script>
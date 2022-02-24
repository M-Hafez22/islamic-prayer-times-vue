<template>
  <footer :class="theme === 'dark' ? 'footerDark' : 'footerLight'">
    <button class="setting-btn" @click="toggleSettings">⚙️</button>
    <AppSettings v-show="isOpen" />
  </footer>
</template>

<script>
import AppSettings from "./AppSettings.vue";
import { mapState } from "vuex";

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
  computed: {
    ...mapState(["theme"]),
  },
};
</script>
<template>
  <footer>
    <button @click="toggleSettings">{{isOpen ? "Close" : "Open"}}</button>
    <p v-show="isOpen">Settings</p>
  </footer>
</template>

<script>
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
};
</script>
<template>
  <div class="settings">
    <changeLanguage />
    <ChangeTheme />
  </div>
</template>

<script>
import changeLanguage from "./appSettings/changeLanguage.vue";
import ChangeTheme from "./appSettings/ChangeTheme.vue";

export default {
  name: "Settings",
  components: {
    changeLanguage,
    ChangeTheme,
  },
};
</script>
<template>
  <div :class="theme === 'dark' ? 'optionsDark' : 'optionsLight'">
    <button
      class="option"
      v-for="t in themes"
      :key="t"
      :class="[t == theme ? 'active' : '', 'option']"
      @click="changeTheme(t)"
    >
      {{ t }}
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "ChangeTheme",
  data() {
    return {
      themes: ["dark", "light"],
    };
  },
  computed: {
    ...mapState(["theme", "lang"]),
  },
  methods: {
    ...mapMutations(["changeTheme"]),
  },
};
</script>

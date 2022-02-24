<template>
  <div :class="theme === 'dark' ? 'optionsDark' : 'optionsLight'">
    <button
      class="option"
      v-for="language in languages"
      :key="language"
      :class="[language == lang ? 'active' : '', 'option']"
      @click="changeLang(language)"
    >
      {{ language }}
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "changeLanguage",
  data() {
    return {
      languages: ["ar", "en"],
    };
  },
  methods: {
    ...mapMutations(["changeLang"]),
  },
  computed: {
    ...mapState(["theme", "lang"]),
  },
};
</script>

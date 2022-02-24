<template>
  <div>
    <button
      class="option"
      v-for="language in languages"
      :key="language"
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

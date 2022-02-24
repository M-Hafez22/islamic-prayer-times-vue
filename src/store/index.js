import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: "dark",
    lang: "en",
    prayNames_ar: ["الفجر", "الظهر", "العصر", "المغرب", "العشاء"],
  },
  getters: {
  },
  mutations: {
    changeTheme(state, payload) {
      state.theme = payload
    },
    changeLang(state, payload) {
      state.lang = payload;
    },
  },
  actions: {
  },
  modules: {
  }
})

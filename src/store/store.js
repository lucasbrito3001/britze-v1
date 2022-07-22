// Store vuex
import Vue from "vue";
import Vuex from "vuex";

import HOME_TEXTS from '../static/texts/home.json'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        lang: 'pt',
        texts_home: HOME_TEXTS
    },
    mutations: {
        changeLang(state, newValue) {
            state.lang = newValue
        }
    },
    getters: {}
})
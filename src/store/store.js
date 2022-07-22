// Store vuex
import Vue from "vue";
import Vuex from "vuex";

import HOME_TEXTS from '../static/texts/home.json'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        lang: 'pt',
        texts_home: HOME_TEXTS,
        default_phone_number: '+55 (18) 99735-1747',
        default_email: 'britze@gmail.com'
    },
    mutations: {
        changeLang(state, newValue) {
            state.lang = newValue
        }
    },
    getters: {}
})
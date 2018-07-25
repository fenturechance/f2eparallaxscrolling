import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import initAnimation from './components/initAnimation';
import Q1 from './components/Q1';
import Q2 from './components/Q2';
import Q3 from './components/Q3';
import allDone from './components/allDone';

Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        nowComponent : initAnimation
    },
    mutations: {
        changeNowComponent(state,component) {
            state.nowComponent = component;
        }
    }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

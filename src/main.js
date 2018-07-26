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
        changeNowComponent(state,text) {
            switch (text) {
                case 'Q1':
                    state.nowComponent = Q1;
                    break;
                case 'Q2':
                    state.nowComponent = Q2;
                    break;
                case 'Q3':
                    state.nowComponent = Q3;
                    break;
                case 'allDone':
                    state.nowComponent = allDone;
                    break;
                default:
                    break;
            }
        }
    }
})

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

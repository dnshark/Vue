import Vue from 'vue-native-core';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from './state';
Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});

export default store;
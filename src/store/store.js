import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js'
import * as actions from './actions.js'
import * as mutations from './mutations'

Vue.use (Vuex);

export const store = new Vuex.Store({
    state: {
        userLogged: { },
        logged: false,
        usersAccounts:[],
        gamesToPurchase: [],
    },
    getters,
    actions,
    mutations
})
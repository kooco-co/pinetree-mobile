import Vue from 'vue';
import { all, promised } from "q";

const state = () => ({
    isloggedin: false
})

const getters = {
}
const actions = {
    setlogin({ commit }, payload) {
        commit("setlogin", payload);
    },
}
const mutations = {
    setlogin: function(state, payload){
        state.isloggedin = payload;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
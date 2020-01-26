import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0,
    },
    getters: {
        counter(state) {
            return state.counter
        }
    },
    mutations: {
        increment: (state) => {
            console.log("state.counter", state.counter)
            state.counter++
        }
    },
    actions: {
        incrementAction: ({ commit }) => {
            commit('increment')
        }
    }
});

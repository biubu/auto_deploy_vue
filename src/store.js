import Vue from 'vue';
import Vuex from 'vuex';
import Api from './lib/api';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        result:0
    },
    mutations: {
        incrementMutations(state){
            state.result ++;
        }
    },
    actions: {
        test() {
            Api.test().then(result => {
                sessionStorage.data = JSON.stringify(result);
            });
        },
        incrementAction({commit}){
            commit('incrementMutations');
        }
    }
});

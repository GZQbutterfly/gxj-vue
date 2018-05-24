import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import cache from './cache';
import http from '../http';



const store = new Vuex.Store({
    modules: {},
    state: {
        $http: http(),
        cache
    },
    mutations,
    actions,
    getters
});


export default store;

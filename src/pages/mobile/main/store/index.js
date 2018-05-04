import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import cache from './cache';

const store = new Vuex.Store({
    modules: {},
    state: {
        cache
    },
    mutations,
    actions,
    getters
});


export default store;

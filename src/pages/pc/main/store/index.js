import Vuex from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const store = new Vuex.Store({
    modules: {},
    state: {
        
    },
    mutations,
    actions,
    getters
});


export default store;

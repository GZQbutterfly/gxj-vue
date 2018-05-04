import './module';
import './main.scss';

import store from './store';
import router from './router';
import Vue from 'vue';
import App from './app.vue';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
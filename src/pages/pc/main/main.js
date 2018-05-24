import './module';
import store from './store';
import router from './router';
import './main.scss';
import Vue from 'vue';
import App from './app.vue';
import preinit from './preinit';

preinit().then((flag)=>{
    if(!flag){
        return;
    }
    new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App),
    });
});
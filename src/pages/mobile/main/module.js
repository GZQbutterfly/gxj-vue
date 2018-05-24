import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);



// ==> 外部组件
import Cube from 'cube-ui';

Vue.use(Cube);





// ==> 内部扩展组件
import headerComponents from '../components/header/header.vue';
Vue.component('app-header', headerComponents);

import footerComponents from '../components/footer/footer.vue';
Vue.component('app-footer', footerComponents);
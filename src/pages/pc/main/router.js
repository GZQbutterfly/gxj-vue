import VueRouter from 'vue-router';

// import { Home } from '../home/home';
import  Home  from '../home/home.vue';
// import CompanyIntroduction from "../company_introduction/company_introduction.vue";
// import Joinus from "../join_us/join_us.vue";
// import News from "../news/news.vue";
// ==>
const routes = [
    {
        path: '/',
        redirect: {
            name: 'home'
        }
    }, {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path:"/company_introduction",
        name:"company_introduction",
        component: resolve => {
            require.ensure([], require => {
                resolve(require('../company_introduction/company_introduction.vue'));
            }, 'pages/company_introduction');
        }
    },
     {
        path:"/join_us",
        name:"join_us",
         component: resolve => {
             require.ensure([], require => {
                 resolve(require('../join_us/join_us.vue'));
             }, 'pages/join_us');
         }
    },
     {
        path:"/news",
        name:"news",
         component: resolve => {
             require.ensure([], require => {
                 resolve(require('../news/news.vue'));
             }, 'pages/news');
         }
    },
    
];


// ==>
const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    },
});
// ==>
export default router;

import VueRouter from 'vue-router';
// ==> route
import Home from '../home/home.vue';

// ==> config
const routes = [
    // 首页
    {
        path: '/',
        component: Home
    },
    // 公司介绍
    {
        path: '/companyinfo',
        name: 'companyinfo',
        component: resolve => {
            require.ensure([], require => {
                resolve(require('../companyinfo/companyinfo.vue'));
            }, 'pages/companyinfo');
        }
    },
    // 新闻中心
    {
        path: '/newcenter',
        name: 'newcenter',
        component: resolve => {
            require.ensure([], require => {
                resolve(require('../newcenter/newcenter.vue'));
            }, 'pages/newcenter');
        }
    },
    // 加入我们
    {
        path: '/joinmy',
        name: 'joinmy',
        component: resolve => {
            require.ensure([], require => {
                resolve(require('../joinmy/joinmy.vue'));
            }, 'pages/joinmy');
        }
    }
];

// ==>
const router = new VueRouter({
    mode: 'history',
    routes
});

// ==>
export default router;

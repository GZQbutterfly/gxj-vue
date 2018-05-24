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
    {
        path: '/home',
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
        path: '/newscenter',
        name: 'newscenter',
        component: resolve => {
            require.ensure([], require => {
                resolve(require('../newscenter/newscenter.vue'));
            }, 'pages/newscenter');
        }
    },
    // 加入我们
    {
        path: '/jobs',
        name: 'jobs',
        component: resolve => {
            require.ensure([], require => {
                resolve(require('../jobs/jobs.vue'));
            }, 'pages/jobs');
        }
    },
    {
        path: '**',
        redirect: '/'
    }
];

// ==>
const router = new VueRouter({
    mode: process.env.R_M == 'hash' ? 'hash' : 'history',
    routes
});

// ==>
export default router;

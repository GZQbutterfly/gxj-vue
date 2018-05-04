import VueRouter from 'vue-router';

// import { Home } from '../home/home';
import  Home  from '../home/home.vue';
import CompanyIntroduction from "../company_introduction/company_introduction.vue";
import Joinus from "../join_us/join_us.vue";
import News from "../news/news.vue";
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
        component:CompanyIntroduction
    },
     {
        path:"/join_us",
        name:"join_us",
        component:Joinus
    },
     {
        path:"/news",
        name:"news",
        component:News
    },
    
];


// ==>
const router = new VueRouter({
    mode: 'history',
    routes
});

// ==>
export default router;

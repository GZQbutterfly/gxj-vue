<template>
    <div class="header-container" ref="hedaerContainerRef">
        <div class="header-title flex flex-align-m">
            <div class="flex__item">
                <!-- 谷小酒 -->
                <img class="logo-img" :src="require('../../../../static/images/build/logo.png')" alt="">
            </div>
            <div @click="expendMenu"><img :src="isMenuExpend ? closeMenuImg : menuImg" alt=""></div>
        </div>
        <div class="header-menu text-center"  :class="{'head-menu-show': isMenuExpend}">
            <div v-for="(item, index) in menus" :key="index" @click="goPath(item)">{{item.label}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isMenuExpend: false,
            isMenu: false,
            menuImg: require('../../../../static/images/build/meun.png'),
            closeMenuImg: require('../../../../static/images/build/close.png'),
            menus: [
                // {label: '服务', to: ''},
                // {label: '登录', to: ''},
                {label: '首页', to: '/'},
                {label: '公司介绍', to: '/companyinfo'},
                {label: '新闻中心', to: '/newscenter'},
                {label: '联系我们', to: '/jobs'},
                // {label: '联系客服', to: ''}
            ]
        }
    },
    mounted(){
        this.$nextTick(()=>{
        });
    },
    methods: {
        expendMenu(){
           this.isMenuExpend = !this.isMenuExpend;
        },
        goPath(item){
            if(item.to){
                this.expendMenu();
                this.$router.push(item.to);
            }
        }
    }
}
</script>

<style lang="scss">
.header-container{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 100;
    font-size: 15px;
    .header-title{
        padding: 0 12.5px;
        background-color: #fff;
        border-bottom: 1px solid #dcdcdc;
        height: 50px;
        .logo-img{
            width: 54px;
            height: 19px;
        }
    }
    .header-menu{
        background-color: #1f1f1f;
        color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        z-index: -1;
        transition: transform .5s;
        transform: translateY(-100%);
        line-height: 50px;
    }
    .head-menu-show{
        transform: translateY(0);
    }
}
</style>



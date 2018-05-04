<template>
    <div class="header-container" ref="hedaerContainerRef">
        <div class="flex flex-align-m">
            <div class="flex__item">
                <!-- 谷小酒 -->
                <img :src="require('../../../../static/images/build/logo.png')" alt="">
            </div>
            <div @click="expendMenu"><img :src="isMenuExpend ? closeMenuImg : menuImg" alt=""></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isMenuExpend: false,
            menuImg: require('../../../../static/images/build/meun.png'),
            closeMenuImg: require('../../../../static/images/build/close.png')
        }
    },
    mounted(){
        this.$nextTick(()=>{
             
        });
    },
    methods: {
        expendMenu(){
           this.isMenuExpend = !this.isMenuExpend;
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
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #dcdcdc;
    padding: 0 12.5px;
    font-family: STZhongsong;
    background-color: #fff;
}
</style>



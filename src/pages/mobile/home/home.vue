<template>
    <div class="home-container" ref="homeContainerRef">
        <div>
            <div class="home-container_hd text-center">
                <div class="title">谷小酒微醺版</div>
                <div class="info">精选五粮|冰川泉水|固态发酵|大师之作</div>
                <div class="buy-btn" @click="goBuy">点击购买</div>
            </div>
            <div class="home-container_bd">
                <div class="swiper-container" ref="swiperRef">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in bannerList" :key="index" @click="bannerToUrl(item)">
                            <img :src="item.imgUrl" alt="">
                        </div>
                    </div>
                    <div class="swiper-pagination" v-show="showPage"></div>
                </div>
            </div>
            <div class="home-container_ft" v-show="showFt">
                <div>
                    <img :src="item.imgsrc" :alt="item.label" v-for="(item, index) in mainList" :key="index" @click="goPath(item)">
                </div>
                <div class="company-flag text-center">
                    <div>Copyright © guxiaojiu.</div>
                    <div>All Rights Reserved 蜀ICP备18007116号</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default require("./home");
</script>
<style lang="scss">
@import "./home.scss";
</style>

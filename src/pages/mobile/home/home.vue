<template>
    <div class="home-container" ref="homeContainerRef">
        <div>
            <div class="home-container_hd text-center">
                <div><h3>谷小酒微醺版</h3></div>
                <div>五粮酿造|冰川泉水|固态发酵|大师之作</div>
                <div class="buy-btn">点击购买</div>
            </div>
            <div class="home-container_bd">
                <div class="swiper-container" ref="swiperRef">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in bannerList" :key="index">
                            <img :src="item.imgsrc" alt="">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="home-container_ft">
                <div>
                    <img :src="item.imgsrc" :alt="item.label" v-for="(item, index) in mainList" :key="index" @click="goPath(item)">
                </div>
                <div class="company-info text-center">
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

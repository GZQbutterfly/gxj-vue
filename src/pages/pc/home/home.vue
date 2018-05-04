<template>
   <div class="home-container">
       <div class="swiper-container" ref="bannerSwiper" v-if="bannerImgLists.length!==0">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item) in bannerImgLists">
                <img :src="item.imgUrl" />
            </div>
            <!-- <div class="swiper-slide">
                 <img src="/static/images/pc/bannner1 (2).png" />
            </div> -->
        </div>
        <div class="swiper-button-prev"></div> 
        <div class="swiper-button-next"></div>
    </div>
    <div class="imgNav">
       <p @click="jump(item)" v-for="(item,i) in imgNavLists"><img :src="item.imgUrl" alt=""><span :class="{'color-fff':(i==0||i==2),'color-5c':i==1}">{{item.name}}</span></p>
    </div>
      <pc-footer></pc-footer>
   </div>
</template>
<script>
export default require("./home");
</script>
<style lang="scss" scoped>
 @import "./home.scss";
</style>

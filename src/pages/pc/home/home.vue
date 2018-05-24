<template>
   <div class="home-container">
         <pc-header></pc-header>
      
       <div class="swiper-container media-768" ref="bannerSwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item) in bannerImgLists">
                <img :src="item.imgUrl" @click="goTo(item)"/>
                 <div class="product" v-if="item.bigTitle||item.smallTitle||item.buttonText">
                    <h1 class="product-name text-size-32" v-if="item.bigTitle">{{item.bigTitle}}</h1>
                    <div class="product-des size-15" v-if="item.smallTitle">
                        <span>{{item.smallTitle}}</span>
                    </div>
                    <div class="product-buy text-size-16" @click="goTo(item)" v-if="item.buttonText">{{item.buttonText}}</div>
                </div>
            </div>
        </div>
        <div class="swiper-button-prev"></div> 
        <div class="swiper-button-next"></div>
    </div>
    <div class="imgNav media-768">
       <p @click="jump(item)" v-for="(item,i) in imgNavLists"><img :src="item.imgUrl" alt=""><span :class="{'color-fff':i==0|i==2,'color-5c':i==1}">{{item.name}}</span></p>
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

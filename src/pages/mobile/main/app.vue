<template>
    <div class="mobile-container">
        <app-header></app-header>
        <div class="mobile-wrap" ref="wrap">
            <router-view></router-view>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
export default {

   watch:{
       '$route': {
            handler(){
               this.$refs.wrap.scrollTop = 0;
            }
       }
   }
  
}
</script>


<style lang="scss">
.mobile-container{
    height: 100%;
    width: 100%;
    position: relative;
    box-sizing: content-box;
    .mobile-wrap{
        font-size: 15px;
        margin-top: 50px;
        height: calc( 100% - 50px );
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
    }
    .company-flag{
        font-size: 14px;
        height: 60px;
        color: #b8b8b8;
        line-height: 25px;
        margin-top: 20px;
    }
}
</style>

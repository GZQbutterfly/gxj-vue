<template>
    <div class="mobile-container">
        <app-header></app-header>
        <div class="mobile-wrap">
            <router-view></router-view>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
export default {
  
}
</script>


<style lang="scss">
.mobile-container{
    height: 100%;
    width: 100%;
    position: relative;
    box-sizing: content-box;
    .mobile-wrap{
        margin-top: 50px;
        height: calc( 100% - 50px );
    }
}
</style>

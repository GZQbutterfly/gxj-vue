<template>
     <div class="container">
        <pc-header></pc-header>
        <router-view></router-view>
        <pc-footer></pc-footer>
    </div>
</template>
<style lang="scss" scoped>
.container{
    height: 100%;
    width: 100%;
    position: relative;
    box-sizing: border-box;
}
</style>


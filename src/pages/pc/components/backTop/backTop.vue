<template>
     <div class="backTop" @click="backToTop">
            <img src="/static/images/pc/backToTop.svg" alt="">
            <span>回顶部</span>
    </div>
</template>

<script>
export default {
   methods: {
       backToTop(){
           window.scrollTo(0,0);
       }
   }
}
</script>
<style lang="scss" scoped>
.backTop{
    height:80px;
    width:80px;
    border:1px solid #E0E0E0;
    position:fixed;
    z-index:99;
    bottom:10%;
    right:10%;
    background:#fff;
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     cursor: pointer;
    img{
        width:40px;
        height:20px;
    }
    span{
        color:#646464;
        font-size:14px;
        margin-top:11px;
    }
}
</style>

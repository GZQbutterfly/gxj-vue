<template>
  <div class="footer">
      <div class="footer_in">Copyright&copy;guxiaojiu. All Rights Reserved&emsp;<span @click="goTo">蜀ICP备18007116号</span> </div>
  </div>
</template>

<script>
export default {
methods: {
   goTo(){
       location.href="http://www.miitbeian.gov.cn";
   } 
}
}
</script>

<style lang='scss' scoped>
 .footer{
    //  margin-top: 80px;
     height: 80px;
     position: relative;
     z-index: 99;
    //  background-color: #FAFAFA;
     .footer_in{
         height: 20px;
         text-align: center;
         margin: 30px auto;
         color: #b0b0b0;
         font-size: 15px;
         span{
             cursor: pointer;  
         }
     }
   
 }
</style>

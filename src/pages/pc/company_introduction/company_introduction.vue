<template>
  <div class="company">
        <pc-header :titleShow="titleShow" titleName="公司简介"></pc-header>
       <div class="banner">
          <div class="bg-img media-768">
             <img src="/static/images/pc/company_introduction.svg" alt="">  
             <h1 class="text-size-28">公司简介</h1>   
          </div> 
       </div>
       <div class="content">
         <!-- <h1>公司简介</h1> -->
         <div class="content_in media-708">
           <ul>
               <li>
                   <h3 class="text-size-26">关于谷小酒</h3>
                   <!-- <p></p> -->
                   <p class="text-size-14">谷小酒是成都米小酒酒业有限公司旗下高品质白酒品牌。<br>成都米小酒酒业有限公司是一家专注高品质酒水及其周边食品的研发与销售的公司。由前小米高级品牌公关总监刘飞2017年年底创立，总部位于四川成都，团队成员主要来自京东、小米、阿里巴巴等国内顶级互联网公司。<br>基于对于年轻人的口感需求，用高端白酒的品质研发了谷小酒。</p>
                   <!-- <p</p> -->
               </li>
                <li>
                   <h3 class="text-size-26">谷小酒理念</h3>
                   <p class="mar-20 text-size-14">利用互联网模式及其特有的高效率创造个全新的白酒产品模式，同时通过自营渠道建设，打造酒类和周边产品垂直领域新零售平台，公司坚持产品品质第一位的原则，立志做快消品领域用户认可的放心品牌。<br> 一瓶只赚一块钱。</p>
                   <!-- <p ></p> -->
                    <div class="ideaImg">
                        <img src="/static/images/pc/about-us.jpg" alt="">
                    </div>
               </li>
                <li>
                   <h3 class="text-size-26">名字的由来</h3>
                   <p class="text-size-14">谷小酒的名字来源是纯粮食酿造的小瓶白酒。谷物是粮食的统称，代表谷小酒始终坚持使用优质粮食为消费者酿造高品质酒水的理念。</p>
               </li>
           </ul>
        </div>
       
       </div>
         <back-top></back-top>
       <pc-footer></pc-footer> 
  </div>
  
</template>

<script>
export default  require("./company_introduction");
</script>

<style lang="scss" scoped>
@import "./company_introduction.scss";
</style>

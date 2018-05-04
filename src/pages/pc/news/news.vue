<template>
    <div class="news">
       <div class="banner">
           <img src="/static/images/pc/bannner1 (1).png" alt="">
       </div>
       <div class="content">
         <h1>新闻中心</h1>
         <div class="content_in">
           <ul>
               <!--图 文-->
               <li>  
                   <div class="lef">
                    <h3>关于谷小酒</h3>
                    <h4>副标题<span>时间&nbsp;|&nbsp;来源</span></h4>
                    <p><img src="/static/images/pc/bannner1 (1).png" alt=""></p>
                    <p>谷小酒 <span>查看原文></span></p>
                   </div>
                   <div class="lef">
                    <h3>关于谷小酒</h3>
                    <h4>副标题<span>时间|来源</span></h4>
                    <p><img src="/static/images/pc/bannner1 (1).png" alt=""></p>
                    <p>谷小酒<span>查看原文></span></p>
                   </div>
               </li>
               <!-- 纯文字 -->
                <li>  
                   <div>
                    <h3>关于谷小酒</h3>
                    <h4>副标题</h4>
                    <p class="margin-20">详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情</p>
                    <p>时间&nbsp;|&nbsp;来源<span>查看原文></span></p>
                   </div>
               </li>
           </ul>
        </div>
         <pc-footer></pc-footer>
       </div>
    </div>   
</template>

<script>
export default require("./news");
</script>

<style lang="scss" scoped>
@import "./news.scss";
</style>

<template>
    <div class="joinUs">
        <pc-header :titleShow="titleShow" titleName="联系我们"></pc-header>
       <div class="banner">
           <!-- <img src="/static/images/pc/join_us-BG.svg" alt=""> -->
           <div class="bg-img media-768">
             <img src="/static/images/pc/join-us.svg" alt="">  
             <h1 class="text-size-28">联系我们</h1>   
          </div> 
       </div>
       <div class="content">
         <!-- <h1>联系我们</h1> -->
         <div class="content_in media-708">
           <ul>
                 <li class="list_content media-708">
                   <h3 class="text-size-26">坚持纯粮酿造，做每个人都喝得起高品质的酒水</h3> 
                    <p class="text-size-14">我们是一群90后（除了老板）酒鬼，我们希望用敬畏之心与追求极致的态度做一款年轻人都喝得习惯也喝得起的高品质白酒，一瓶只赚一块钱。同时我们还在全球寻找符合年轻人消费习惯的高品质酒水以及周边美食，让每个人都可以享受美食美酒的乐趣。
<br>你愿意与我们携手同行吗？</p> 
               </li>
                <li class="list_content media-708">
                   <h3 class="text-size-26">招聘职位</h3>
                    <p class="text-size-14">请投简历至hr@guxiaojiu.com,并在邮箱标题注明所投职位</p>
                   <div class="job">
                       <ul class="job_list" v-for="item in jobLists">
                           <h4 class="job_title">{{item.title}}</h4>
                           <li class="job_item" v-for="v in item.jobs">{{v}}</li>
                       </ul>
                   </div>
               </li>
                <li class="list_content media-708 text-size-14">
                   <h3 class="text-size-26">联系合作</h3>
                   <p>供应链合作：wuxing@guxiaojiu.com</p>
                   <p>商务及广告合作：zhengtianming@guxiaojiu.com</p>
                   <p>销售渠道合作：qubo@guxiaojiu.com</p>
                   <p>代理商加盟：wuxing@guxiaojiu.com</p>
               </li>
                <li class="list_content media-708 text-size-14">
                   <h3 class="text-size-26">公司地址</h3>
                   <p>成都：四川省成都市高新区蜀锦路88号楚峰国际中心1901室</p>
                   <p>北京：北京市海淀区永泰庄路25号建金中心332</p>
               </li>
           </ul>
        </div>
       </div>
        <back-top></back-top>
        <pc-footer></pc-footer> 
    </div>   
</template>

<script>
export default  require("./join_us");
</script>

<style scoped lang="scss">
@import "./join_us.scss";
</style>

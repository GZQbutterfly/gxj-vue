<template>
    <div class="news" ref="scroll_content">
      <pc-header :titleShow="titleShow" titleName="新闻中心"></pc-header>
       <div class="banner">
           <div class="bg-img media-768">
             <img src="/static/images/pc/news-center.svg" alt="">  
             <h1 class="text-size-28">新闻中心</h1>   
          </div>    
       </div>
       <div class="content">
         <!-- <h1>新闻中心</h1> -->
         <div class="content_in media-708">
           <ul class="article">
               <!--图 文-->
               <li v-for="item in articleLists">  
                    <!--图 文-->
                    <template  v-if="item.imgASndTextArr">
                        <div class="lef" @click="readTheWholePassage(v)" v-for="v in item.imgASndTextArr">
                            <h3 class="text-size-18 text-size-16">{{v.title}}</h3>
                            <h4 class="text-size-13 text-color-999 size-10"><span v-if="v.subTitle">{{v.subTitle}}</span><span class="normal">{{v.publishDate}}&nbsp;|&nbsp;{{v.author}}</span></h4>
                            <p><img :src="v.cover.box_aside.img" alt=""></p>
                            <p class="padding-60 text-color-999 size-14"><span>{{v.coverText}}</span><span class="color-cece text-size-14 size-12">查看原文></span></p>
                        </div>                  
                    </template>
                    <!-- 纯文字 -->
                   <div v-else class="box-text" @click="readTheWholePassage(item)">
                        <h3 class="text-size-18 text-size-16">{{item.title}}</h3>
                        <h4 v-if="item.subTitle" class="text-size-13 text-color-999">{{item.subTitle}}</h4>
                        <p class="margin-20 line-height-2 text-color-666 small-screen-14">{{item.coverText}}</p>
                        <p class="flex-space text-size-13 text-color-999"><span>{{item.publishDate}}&nbsp;|&nbsp;{{item.author}}</span><span  class="color-cece text-size-14">查看原文></span></p>
                   </div>
               </li>
           </ul>
        </div>
       <ul class="pagination" v-if="pageNumber.length&&pageNumber.length!=1">
            <li v-show="page!=1" class="next_page"><a href="#" @click="prevPage">上一页</a></li>
            <li @click="loadNextData(item)" v-for="(item,i) in pageNumber" v-if="pageNumber.length!=1"><a href="#" :class="{'active':page==i+1}">{{item}}</a></li>
            <li v-show="pageNumber.length>page" class="next_page"><a href="#" @click="nextPage">下一页</a></li>
        </ul>
       </div>
     <back-top></back-top>
     <pc-footer></pc-footer>    
    </div>   
</template>

<script>
export default require("./news");
</script>

<style lang="scss" scoped>
@import "./news.scss";
</style>

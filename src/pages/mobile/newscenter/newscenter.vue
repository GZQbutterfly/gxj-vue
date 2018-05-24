<template>
    <div class="newscenter-container" ref="newscenterContainerRef">
       <cube-scroll
            ref="scroll"
            :options="{
                pullUpLoad: {
                    threshold: 0,
                    txt: {
                        more: '加载更多',
                        noMore: '没有更多数据了'
                    }
                }
            }"
            @pulling-up="onPullingUp">
            <div class="container">
                    <div class="info-box" v-for="(item, index) in infoList" :key="index">
                        <div class="info-box_hd " @click="viewSource(item)"><h3>{{item.title}}</h3></div>
                        <div class="info-box_bd" @click="viewSource(item)">
                            <img :src="item._img" alt="" v-if="item._img">
                            <div v-else-if="item.coverText">{{item.coverText}}</div>
                        </div>
                        <div class="info-box_ft flex">
                            <div class="flex__item">
                                {{item.publishDate}} | {{item.author}}
                            </div>
                            <div @click="viewSource(item)">查看原文></div>
                        </div>
                    </div>
                </div>
        </cube-scroll>
        <!-- <app-scroll ref="scroll"
              :scrollbar="true"
              :pullUpLoad="true"
              @pullingUp="onPullingUp"
              :click="true"
              >
                <div class="container">
                    <div class="info-box" v-for="(item, index) in infoList" :key="index">
                        <div class="info-box_hd " @click="viewSource(item)"><h3>{{item.title}}</h3></div>
                        <div class="info-box_bd" @click="viewSource(item)">
                            <img :src="item._img" alt="" v-if="item._img">
                            <div v-else-if="item.coverText">{{item.coverText}}</div>
                        </div>
                        <div class="info-box_ft flex">
                            <div class="flex__item">
                                {{item.publishDate}} | {{item.author}}
                            </div>
                            <div @click="viewSource(item)">查看原文></div>
                        </div>
                    </div>
                </div>
        </app-scroll> -->
    </div>
</template>
<script>
export default require("./newscenter");
</script>
<style lang="scss">
@import "./newscenter.scss";
</style>

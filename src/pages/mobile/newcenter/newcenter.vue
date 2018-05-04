<template>
    <div class="newcenter-container" ref="newcenterContainerRef">
        <app-scroll ref="scroll"
              :scrollbar="true"
              :pullUpLoad="true"
              @pullingUp="onPullingUp"
              :click="true"
              >
                <div class="container">
                    <div class="info-box" v-for="(item, index) in infoList" :key="index">
                        <div class="info-box_hd"><h2>{{item.title}}</h2></div>
                        <div class="info-box_bd">
                            <img :src="item.imgsrc" alt="" v-if="item.imgsrc">
                            <div v-else-if="item.content">{{item.content}}</div>
                        </div>
                        <div class="info-box_ft flex">
                            <div class="flex__item">
                                {{item.date}} | {{item.author}}
                            </div>
                            <div @click="viewSource(item)">查看原文></div>
                        </div>
                    </div>
                </div>
        </app-scroll>
    </div>
</template>
<script>
export default require("./newcenter");
</script>
<style lang="scss">
@import "./newcenter.scss";
</style>

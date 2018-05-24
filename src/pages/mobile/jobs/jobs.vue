<template>
    <div class="jobs-container" ref="jobsContainerRef">
        <div class="container text-center">
            <div class="jobs-container_hd">
                <div class="title">坚持纯粮酿造，</div>
                <div class="title">做每个人都喝得起高品质的酒水</div>
                
                <div class="info text-left">
                    <div>我们是一群90后（除了老板）酒鬼，我们希望用敬畏之心与追求极致的态度做一款年轻人都喝得习惯也喝得起的高品质白酒，一瓶只赚一块钱。同时我们还在全球寻找符合年轻人消费习惯的高品质酒水以及周边美食，让每个人都可以享受美食美酒的乐趣。</div>
                    <div>你愿意与我们携手同行吗？</div>
                </div>
            </div>
            <div class="jobs-container_bd">
                <h2 class="title">招聘职位</h2>
                <div class="info">
                    <div>请投简历至 {{hrmail}}，</div>
                    <div>并在邮箱标题注明所投职位</div>
                </div>
            </div>
            <div class="jobs-container_ft">
                <div v-for="(item, index) in jobList" :key="index">
                    <div class="job-desc">{{item.label}}</div>
                    <h3 class="job-info" v-for="(info, key) in item.jobs" :key="key">{{info}}</h3>
                </div>
                <div class="company-flag text-center">
                    <div>Copyright © guxiaojiu.</div>
                    <div>All Rights Reserved 蜀ICP备18007116号</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default require("./jobs");
</script>
<style lang="scss">
@import "./jobs.scss";
</style>

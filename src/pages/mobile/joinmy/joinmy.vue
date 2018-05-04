<template>
    <div class="joinmy-container" ref="joinmyContainerRef">
        <div class="container text-center">
            <div class="joinmy-container_hd">
                <h2 class="title">招聘信息</h2>
                <div class="info text-left">内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情</div>
            </div>
            <div class="joinmy-container_bd">
                <h2 class="title">招聘职位</h2>
                <div class="info">
                    <div>请投简历致 *********************,</div>
                    <div>并在邮件标题注明所投职位</div>
                    <div>你更感兴趣谷小酒哪一方面的工作?</div>
                </div>
            </div>
            <div class="joinmy-container_ft">
                <div v-for="(item, index) in jobList" :key="index">
                    <div class="job-desc">{{item.label}}</div>
                    <div class="job-info" v-for="(info, key) in item.jobs" :key="key">{{info}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default require("./joinmy");
</script>
<style lang="scss">
@import "./joinmy.scss";
</style>

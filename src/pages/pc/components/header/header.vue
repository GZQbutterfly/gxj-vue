<template>
  <div class="header">
      <div class="header_in">
       <div class="logo" @click="toHome"><img src="/static/images/pc/logo@2x.png"></div>        
        <ul class="nav">
            <li v-for="(item,i) in navList" @click="jump(item,i)" :class="{'active':currentIndex==i}">{{item.name}}</li>
        </ul>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { url: "home", name: "首页" },
        { url: "news", name: "新闻中心" },
        { url: "company_introduction", name: "公司简介" },
        { url: "join_us", name: "加入我们" }
      ],
      currentIndex: 0
    };
  },
  mounted() {
    this.initCurrentIndex();
  },
  methods: {
    jump(item, i) {
      this.currentIndex = i;
      this.$router.push({ path: item.url });
    },
    initCurrentIndex() {
      let _routename = this.$route.name;
      switch (_routename) {
        case "home":
          this.currentIndex = 0;
          break;
        case "news":
          this.currentIndex = 1;
          break;
        case "company_introduction":
          this.currentIndex = 2;
          break;
        case "join_us":
          this.currentIndex = 3;
          break;
      }
    },
    toHome(){
          this.$router.push({ path:'home'});
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  font-size: 15px;
  height: 60px;
  line-height: 60px;
  z-index: 99;
  border-bottom: 1px solid #dcdcdc;
  font-family: STZhongsong;
  background-color: #fff;
  .header_in {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .logo {
    height: 37px;
    width: 107px;
    cursor: pointer;
    img {
      height: 100%;
      width: 100%;
      margin-top: 12px;
    }
  }
  ul {
    display: flex;
    width: 300px;
    li {
      margin: 0 10px;
      cursor: pointer;
      color: #acacac;
    }
    li:hover {
      color: #000;
    }
    .active {
      color: #000;
    }
  }
}
</style>

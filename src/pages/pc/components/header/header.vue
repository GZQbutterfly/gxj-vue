<template>
  <div class="header">
      <div class="header_in media-708">
     
       <div class="logo">
         <div class="bg-logo"></div>
          <img src="/static/images/pc/logo.svg" alt="" @click="toHome">  
            <!-- <img src="/static/images/pc/logo@2x.png"  @click="toHome"> -->
          <!-- <svg  xmlns="http://www.w3.org/2000/svg" @click="toHome">
            <g   xmlns="http://www.w3.org/2000/svg" id="logo" transform="translate(-0.011)">
                <path id="Path_13" data-name="Path 13" class="cls-1" d="M620.987,78.9h4.385a.082.082,0,0,1,.087.087v4.091a.082.082,0,0,1-.087.087h-4.385a.082.082,0,0,1-.087-.087V78.987A.087.087,0,0,1,620.987,78.9Z" transform="translate(-567.078 -72.062)"/>
                <path id="Path_14" data-name="Path 14" class="cls-1" d="M620.987,0h4.385a.082.082,0,0,1,.087.087V4.177a.082.082,0,0,1-.087.087h-4.385a.082.082,0,0,1-.087-.087V.087A.082.082,0,0,1,620.987,0Z" transform="translate(-567.078 0)"/>
                <path id="Path_15" data-name="Path 15" class="cls-1" d="M620.987,157.8h4.385a.082.082,0,0,1,.087.087V170a.082.082,0,0,1-.087.087h-4.385A.082.082,0,0,1,620.9,170V157.887A.087.087,0,0,1,620.987,157.8Z" transform="translate(-567.078 -144.124)"/>
                <path id="Path_16" data-name="Path 16" class="cls-1" d="M415.187,0h4.975a.082.082,0,0,1,.087.087V25.879a.082.082,0,0,1-.087.087h-4.975a.082.082,0,0,1-.087-.087V.087A.082.082,0,0,1,415.187,0Z" transform="translate(-379.114 0)"/>
                <path id="Path_17" data-name="Path 17" class="cls-1" d="M306.664,89.7l-6.344,11.007a.1.1,0,0,1-.121.035h0l-3.753-2.167a.1.1,0,0,1-.035-.121h0l6.344-11.007a.1.1,0,0,1,.121-.035h0l3.753,2.167a.088.088,0,0,1,.035.121Z" transform="translate(-270.705 -79.828)"/>
                <path id="Path_18" data-name="Path 18" class="cls-1" d="M480.915,100.666l-6.344-11.007a.088.088,0,0,1,.035-.121h0l3.753-2.167a.088.088,0,0,1,.121.035l6.344,11.007a.088.088,0,0,1-.035.121h0l-3.744,2.167a.1.1,0,0,1-.13-.035Z" transform="translate(-433.42 -79.788)"/>
                <path id="Path_19" data-name="Path 19" class="cls-1" d="M704.247,3.571V.1a.1.1,0,0,0-.1-.1H687.3a.1.1,0,0,0-.1.1h0V3.562a.1.1,0,0,0,.1.1h6.2a.056.056,0,0,1,.052.052h0V5.1a.056.056,0,0,1-.052.052H687.6a.1.1,0,0,0-.1.1V25.87a.1.1,0,0,0,.1.1h16.051a.1.1,0,0,0,.1-.1h0V5.252a.111.111,0,0,0-.1-.1h-6.093A.056.056,0,0,1,697.5,5.1h0V3.709a.056.056,0,0,1,.052-.052h6.587a.087.087,0,0,0,.1-.087ZM699.741,22h-8.225a.056.056,0,0,1-.052-.052V20.271a.056.056,0,0,1,.052-.052h6.292a.1.1,0,0,0,.1-.1V16.363a.1.1,0,0,0-.1-.1h-6.292a.05.05,0,0,1-.052-.052h0V8.173a.056.056,0,0,1,.052-.052H693.5a.056.056,0,0,1,.052.052h0v6.24a.05.05,0,0,0,.052.052h6.145a.056.056,0,0,1,.052.052v7.436a.074.074,0,0,1-.061.052Zm.052-13.832v2.288a.041.041,0,0,1-.043.043h-2.193a.041.041,0,0,1-.043-.043h0V8.173a.041.041,0,0,1,.043-.043h2.193c.017,0,.035.017.043.043Z" transform="translate(-627.632 0)"/>
                <path id="Path_20" data-name="Path 20" class="cls-1" d="M167.983,6.532,165.244,9.47a.093.093,0,0,1-.121.009L158.276,3.75a.084.084,0,0,1-.009-.121l.009-.009L161.1.794a.1.1,0,0,1,.121,0l6.76,5.616a.084.084,0,0,1,0,.121Z" transform="translate(-144.52 -0.708)"/>
                <path id="Path_21" data-name="Path 21" class="cls-1" d="M22.933,3.681,16.086,9.41a.093.093,0,0,1-.121-.009L13.226,6.463a.084.084,0,0,1,0-.121h.009L19.995.726a.084.084,0,0,1,.121,0l2.825,2.825a.084.084,0,0,1,0,.121Z" transform="translate(-12.046 -0.639)"/>
                <path id="Path_22" data-name="Path 22" class="cls-1" d="M12.17,48.126.045,58.214a.1.1,0,0,0-.009.139h0l3.025,3.207a.105.105,0,0,0,.139.009l2.037-1.69a.046.046,0,0,1,.069.009c.009.009.009.017.009.035v9.915a.1.1,0,0,0,.1.1H19.285a.1.1,0,0,0,.1-.1h0V59.878a.056.056,0,0,1,.052-.052.052.052,0,0,1,.035.009l1.95,1.586a.094.094,0,0,0,.13-.009l3.111-3.155a.105.105,0,0,0,0-.139l-.009-.009L12.3,48.126A.094.094,0,0,0,12.17,48.126Zm3.068,17.611H9.466a.041.041,0,0,1-.043-.043V62.071a.041.041,0,0,1,.043-.043h5.772a.041.041,0,0,1,.043.043h0v3.623a.041.041,0,0,1-.043.043ZM7.776,57.763l4.463-3.718a.091.091,0,0,1,.113,0l4.567,3.718a.053.053,0,0,1,.009.061.045.045,0,0,1-.035.017H7.8a.041.041,0,0,1-.026-.078Z" transform="translate(0 -43.931)"/>
            </g>
         </svg> -->
         <b v-show="titleShow">·</b><span v-show="titleShow">{{titleName}}</span></div>        
        <ul class="nav">
            <li v-for="(item,i) in navList" @click="jump(item,i)" :class="{'active':currentIndex==i}">{{item.name}}</li>
        </ul>
        </div>
  </div>
</template>

<script>
export default {
   props: {
      titleShow: {
        type: Boolean,
        default: false
      },
      titleName: {
        type: String,
        default:"新闻中心"
      },
   },
  data() {
    return {
      navList: [
        { url: "home", name: "首页" },
        { url: "news", name: "新闻中心" },
        { url: "company_introduction", name: "公司介绍" },
        { url: "join_us", name: "联系我们" }
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
          this.initCurrentIndex();
    }
  }
};
</script>

<style lang="scss" scoped>
 .cls-1 {
                    fill: #484848;
                  }
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  font-size: 15px;
  height: 60px;
  line-height: 60px;
  z-index: 99999;
  border-bottom: 1px solid #dcdcdc;
  background-color: #fff;
  .header_in {
    width: 1200px;
    height:60px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .logo {
     line-height: 16px;
     display: flex;
     align-items: center;
    //  .bg-logo{
    //   height: 30px;
    //   width:90px;
    //    background:url("/static/images/pc/logo.svg") no-repeat center center;
    //    background-size:100% 100%;
    //  }
    img {
       cursor: pointer;
      height: 26px;
      width:76.6px;
      // margin-top: 12px;
    }
    svg{
       cursor: pointer;
      height: 30px;
      width:90px;
    }
    span{
      font-size: 20px;
      // font-weight: 600;
        color:#C81125;
    }
    b{
      font-size: 20px;
      margin: 0 10px;
      color:#C81125;
    }
  }
  ul {
    display: flex;
    // width: 300px;
    li {
      margin: 0 10px;
      font-size:14px;
      cursor: pointer;
      color: #9E9E9E;
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

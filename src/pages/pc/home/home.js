import Swiper from '../../../assets/swiper/swiper';

export default {
    data() {
        return {
            swiper:"",
            bannerImgLists:[{imgUrl:"/static/images/pc/banner.png"},{imgUrl:"/static/images/pc/banner.png"}],
            imgNavLists:[{url:"company_introduction",name:"公司简介",imgUrl:"/static/images/pc/bannner1 (2).png"},{url:"news",name:"新闻中心",imgUrl:"/static/images/pc/banner.png"},{url:"join_us",name:"加入我们",imgUrl:"/static/images/pc/banner.png"}]
        }
    },
    mounted(){
     this.$nextTick(()=>{
     this.renderSwiper();
     })
    },
    methods:{
      renderSwiper(){
           this.swiper = new Swiper(this.$refs.bannerSwiper, {
                      autoplay:true,
                      observer:true ,
                      observeParents:true,
                      loop:true,
                      navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                       },
                     centeredSlides: true,
                });
      }
    }
}
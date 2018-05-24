import Swiper from '../../../assets/swiper/swiper';
import service from './home.service';
export default {
    data() {
        return {
            swiper: "",
            _$service: "",
            bannerImgLists: [],
            imgNavLists: [{ url: "company_introduction", name: "公司简介", imgUrl: "/static/images/pc/company_introduction.svg" }, { url: "news", name: "新闻中心", imgUrl: "/static/images/pc/news-center.svg" }, { url: "join_us", name: "联系我们", imgUrl: "/static/images/pc/join-us.svg" }]
        }
    },
    mounted() {
        this._$service = service(this.$store);
        let _self = this;
        this.$nextTick(() => {
           // this.renderSwiper();
            this._$service.queryBanner().then(res => {
                _self.bannerImgLists = res.data.data;
                _self.renderSwiper();
            //    console.log(_self.bannerImgLists,res.data,11)
            })
        })
    },
    methods: {
        renderSwiper() {
            this.swiper = new Swiper(this.$refs.bannerSwiper, {
                speed:1200,
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false,
                },
                observer: true,
                observeParents: true,
                // loop: true,/开启loop模式，会有个bug，上一个切换按钮失效
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                centeredSlides: true,
            });
        },
        jump(item) {
            event.preventDefault();
            this.$router.push({ path: item.url });
        },
        goTo(item){
            event.preventDefault();
            if (item.linkTarget){
                location.href = item.linkTarget;
            }
           // location.href ="https://youpin.mi.com/detail?gid=101417";
        },
        buyNow(){
            location.href = "https://youpin.mi.com/detail?gid=101417";
        }
    }
}

import Swiper from '../../../assets/swiper/swiper';

import service from './home.service';

export default {
    data() {
        return {
            name: 'asdads',
            bannerList: [],
            mainList: [
                {label: '公司介绍', imgsrc: './static/images/build/companyinfo.png', to: 'companyinfo'},
                {label: '新闻中心', imgsrc: './static/images/build/newscenter.png', to: 'newscenter'},
                {label: '联系我们', imgsrc: './static/images/build/jobs.png', to: 'jobs'},
            ],
            showPage: false,
            showFt: false
        }
    },
    mounted() {
        document.title = '谷小酒';
        this._$service = service(this.$store);
        this.$nextTick(() => {
            this.initPage();
        });
    },
    methods: {
        initPage() {
            this.queryHomeBanner();
        },
        queryHomeBanner() {
            this._$service.queryHomeBanner().then((res) => {
                let _result = res.data;
                this.bannerList = _result.data;
                this.renderSwiper();
            });
        },
        renderSwiper() {
            let _self = this;
            this.swiper = new Swiper(this.$refs.swiperRef, {
                direction: 'horizontal',
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                observer: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                on:{
                    init(){
                        setTimeout(()=>{
                            _self.showPage = true;
                            _self.showFt = true;
                        }, 100);
                    }
                }
            });
        },
        goPath(item){
            this.$router.push(item.to);
        },
        bannerToUrl(item){
            if(/http/.test(item.linkTarget)){
                location.href = item.linkTarget;
            }else{
                this.$router.push(item.linkTarget);
            }
        },
        goBuy(){
            // location.href = 'https://youpin.mi.com/detail?gid=101417';
        }
    }
}
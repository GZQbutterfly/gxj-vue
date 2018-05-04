import BScroll from '../../../assets/bscroll/bscroll';

import Swiper from '../../../assets/swiper/swiper';


import service from './home.service';

export default {
    data() {
        return {
            name: 'asdads',
            bannerList: [],
            mainList: [
                {label: '公司介绍', imgsrc: './static/images/build/companyinfo.png', to: 'companyinfo'},
                {label: '新闻中心', imgsrc: './static/images/build/newcenter.png', to: 'newcenter'},
                {label: '加入我们', imgsrc: './static/images/build/joinmy.png', to: 'joinmy'},
            ]
        }
    },
    mounted() {
        this._$service = service();
        this.$nextTick(() => {
            this.initPage();
        });
    },
    methods: {
        initPage() {
            this.bscroll = new  BScroll(this.$refs.homeContainerRef,{
                click: true,
                scrollbar: {
                    fade: true,
                    interactive: false
                },
            })
            this.queryHomeBanner();
           
        },
        queryHomeBanner() {
            this._$service.queryHomeBanner().then((res) => {
                let _result = res.data;
                this.bannerList = _result;
                this.renderSwiper();
            });
        },
        renderSwiper() {
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
                }
            });
        },
        goPath(item){
            this.$router.push(item.to);
        }
    }
}
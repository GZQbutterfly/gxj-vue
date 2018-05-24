import Loading from "../components/loading/loading.vue";
// import { debug } from "util";
import service from './news.service';
export default {
    components: {
        loading: Loading
    },
    data() {
        return {
            loadingShow:false,
            _$service:"",
            articleLists:[],
            page:1,
            pageNumber:[],
            firstLoad :true,
            titleShow:false
        }
    },
    mounted(){
        this._$service = service(this.$store);
        let _self = this;
        this.$nextTick(() => {
            this.fetchData();
           this.addEventListenerScroll();
        })
    },
    methods:{
        addEventListenerScroll(){
            let _self = this;
            window.addEventListener("scroll", function () {
                event.preventDefault();
                let scrollTop = document.documentElement.scrollTop;
                if (scrollTop >= 146) {
                    _self.titleShow = true;
                } else {
                    _self.titleShow = false;
                }
            })
        },
        fetchData(page=1){
            let _self = this;
            this._$service.queryNews(page).then(res => {
                let obj = { imgASndTextArr: [] };
                let textArr = [];
                let arr = [];
                res.data.data.forEach((news) => {
                    news.cover = JSON.parse(news.cover);
                    if (news.cover.box_aside) {
                        obj.imgASndTextArr.push(news);
                    } else {
                        textArr.push(news);
                    }
                });
                if (obj.imgASndTextArr.length) {
                    arr.push(obj)
                }
                arr.push(...textArr);
                _self.articleLists = arr;
                if(_self.firstLoad){
                    _self.firstLoad = false;
                    let totalPages = res.data.recordsTotal;
                    for (let i = 0, len = Math.ceil(totalPages / 4);i<len;i++){
                       _self.pageNumber.push(i+1);
                    }
                    // Math.ceil(totalPages/4)
                    // debugger
                }
            })
        },
        loadNextData(page){
            this.page = page;
            this.firstLoad = false;
            this.fetchData(page);
        },
        nextPage(){
            this.page++;
            if (this.page <=this.pageNumber.length){
                this.fetchData(this.page); 
            }else{
                this.page--;
            }     
        },
        prevPage(){
            this.page--;
            if (this.page >=1) {
                this.fetchData(this.page);
            } else {
                this.page=1;
            }  
        },
        readTheWholePassage(item){
     
            if(item.url){
                location.href = item.url;
            }
        }
    }
}
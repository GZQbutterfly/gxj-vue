

export default {
    data() {
        return {
           jobLists:[
               { title: "市场类", jobs: ["新媒体文案策划","新媒体运营"]},
               { title: "设计类", jobs: ["工业设计师", "包材设计师"] },
               { title: "供应链", jobs: ["食品类供应链主管"] },
               { title: "销售类", jobs: ["电商销售经理"] },
           ],
            titleShow:false
        }
    },
    mounted(){
     this.$nextTick(()=>{
         this.addEventListenerScroll();
     })
    },
    methods:{
        addEventListenerScroll() {
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
    }
}
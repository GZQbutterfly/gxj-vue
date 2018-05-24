

export default {
    data() {
        return {
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
import BScroll from '../../../assets/bscroll/bscroll';

export default {
    data() {
        return {

        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initPage();
        });
    },
    methods: {
        initPage() {
            this.bscroll = new  BScroll(this.$refs.companyinfoContainerRef,{
                click: true,
                scrollbar: {
                    fade: true,
                    interactive: false
                },
            })
        },
        goPath(item){
            this.$router.push(item.to);
        }
    }
}
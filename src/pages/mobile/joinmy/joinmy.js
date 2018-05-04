import BScroll from '../../../assets/bscroll/bscroll';

export default {
    data() {
        return {
            jobList: [
                { label: '产品', jobs: ['全栈工程师'] },
                { label: '运营', jobs: ['新媒体运营', '文案策划'] },
                { label: '设计', jobs: ['产品设计'] }
            ]
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initPage();
        });
    },
    methods: {
        initPage() {
            this.bscroll = new BScroll(this.$refs.joinmyContainerRef, {
                click: true,
                scrollbar: {
                    fade: true,
                    interactive: false
                },
            })
        }
    }
}
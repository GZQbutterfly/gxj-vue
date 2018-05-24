

export default {
    data() {
        return {
            jobList: [
                { label: '市场类', jobs: ['新媒体文案策划', '新媒体运营'] },
                { label: '设计类', jobs: ['工业设计师', '包材设计师'] },
                { label: '供应链', jobs: ['食品类供应链主管'] },
                { label: '销售类', jobs: ['电商销售经理'] }
            ],
            hrmail: 'hr@guxiaojiu.com'
        }
    },
    mounted() {
        document.title = '联系我们';
        this.$nextTick(() => {
            this.initPage();
        });
    },
    methods: {
        initPage() {

        }
    }
}
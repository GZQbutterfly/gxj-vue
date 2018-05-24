
export default {
    data() {
        return {

        }
    },
    mounted() {
        document.title = '公司介绍';
        this.$nextTick(() => {
            this.initPage();
        });
    },
    methods: {
        initPage() {

        },
        goPath(item){
            this.$router.push(item.to);
        }
    }
}
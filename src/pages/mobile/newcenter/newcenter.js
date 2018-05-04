import BScroll from '../../../assets/bscroll/bscroll';

import scroll from '../components/scroller/scroll/scroll.vue';
import service from './newconter.service';
import { EHOSTUNREACH } from 'constants';

export default {
    components: {
        'app-scroll': scroll
    },
    data() {
        return {
            pullDownRefresh: true,
            page: 0,
            limit: 10,
            infoList: [],
            count: 0
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
            this.queryNext().then((datas) => {
                this.setList(datas);
            });
        },
        async queryInfoList(data) {
            let _result = (await this._$service.queryInfoList(data)).data;
            return _result;
        },
        queryNext() {
            let data = {
                page: ++this.page,
                limit: this.limit
            };
            return this.queryInfoList(data);
        },
        setList(datas) {
            for (let i = 0, len = datas.length; i < len; i++) {
                datas[i].id = ++this.count;
            }
            this.infoList.push(...datas);
        },
        onPullingUp(done) {
            // 更新数据
            let _result = this.queryNext();
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    console.log('有数据');
                    _result.then((datas) => {
                        this.setList(datas);
                    });
                } else {
                    console.log('没有数据');
                }
                done();
            }, 500)
        },
        viewSource(item){
          console.log('查看原文:', item);
        }
    }
}
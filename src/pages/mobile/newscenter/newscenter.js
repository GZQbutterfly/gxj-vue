
import { get, isArray, find } from 'lodash';


import scroll from '../components/scroller/scroll/scroll.vue';
import service from './newscenter.service';

export default {
    // components: {
    //     'app-scroll': scroll
    // },
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
        document.title = '新闻中心';
        this._$service = service(this.$store);
        this.$nextTick(() => {
            this.initPage();
        });
    },
    methods: {
        initPage() {
            this.scroll = this.$refs.scroll;
            this.queryNext().then((datas) => {
                this.setList(datas);
            });
        },
        async queryInfoList(data) {
            let _result = (await this._$service.queryInfoList(data)).data;
            return _result.data || [];
        },
        queryNext() {
            let data = {
                page: ++this.page,
                limit: this.limit
            };
            return this.queryInfoList(data);
        },
        setList(datas) {
            let len = datas.length;
            let _newList = [];
            for (let i = 0; i < len; i++) {
                let _data = datas[i];
                if (!find(this.infoList, { id: _data.id })) {
                    let _obj = JSON.parse(_data.cover);
                    let _img = get(_obj, 'box_aside.img');
                    if (_img) {
                        _data._img = isArray(_img) ? _img[0] : _img;
                    } else {
                        // _data._content = get(_obj, 'box_text');
                        // _data.coverText
                        _data.coverText = _data.coverText + '';
                        _data.coverText = _data.coverText.length > 60 ? _data.coverText.substr(0, 60) + '...' : _data.coverText;
                    }
                    _newList.push(_data);
                }
            }
            this.infoList.push(..._newList);
            if (len < this.limit) {
                this.page--;
                return;
            }
        },
        onPullingUp() {
            // 更新数据
            let _result = this.queryNext();
            setTimeout(() => {
                _result.then((datas) => {
                    this.setList(datas);
                });
                this.scroll.forceUpdate();
            }, 500)
        },
        viewSource(item) {
            console.log('查看原文:', item);
            item.url && (location.href = item.url);
        }
    }
}
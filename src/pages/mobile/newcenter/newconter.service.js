import axios from 'axios';

export default () => {

    return {

        /**
         * 
         */
        async queryInfoList() {
            return {
                data: [
                    { title: '标题1', imgsrc: './static/images/build/tmp_01.png', date: '2018-05-03', author: '小明' },
                    { title: '标题2', imgsrc: './static/images/build/tmp_02.png', date: '2018-05-03', author: '小明' },
                    { title: '标题3', content: '内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情', date: '2018-05-03', author: '小明' },
                    { title: '标题4', content: '内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情', date: '2018-05-03', author: '小明' },
                ]
            }
        }

    }
}
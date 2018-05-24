

export default (store) => {

    let q = store.state.$http;
    return {

        /**
         * 
         */
        async queryInfoList(data) {
            return q('api/q_api_contents', {platform: 'webAPP', ...data });

            // return {
            //     data: {
            //         data: [
            //             { title: '标题1', imgsrc: './static/images/build/tmp_01.png', publishDate: '2018-05-03', author: '小明' },
            //             { title: '标题2', imgsrc: './static/images/build/tmp_02.png', publishDate: '2018-05-03', author: '小明' },
            //             { title: '标题3', content: '内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情', publishDate: '2018-05-03', author: '小明' },
            //             { title: '标题4', content: '内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情', publishDate: '2018-05-03', author: '小明' },
            //         ]
            //     }
            // }
        }

    }
}
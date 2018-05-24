
export default (store) => {
    let q = store.state.$http;

    return {

        /**
         * 获取首页banner
         */
        async queryHomeBanner() {
            
            return q('api/q_store_ads', {posId: 1 });


            // return {
            //     data: [
            //         {imgsrc: './static/images/build/home_banner.png'},
            //         {imgsrc: './static/images/build/home_banner.png'},
            //         {imgsrc: './static/images/build/home_banner.png'},
            //         {imgsrc: './static/images/build/home_banner.png'},
            //     ]
            // }
        }

    }
}
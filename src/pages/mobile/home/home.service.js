import axios from 'axios';

export default () => {

    return {

        /**
         * 获取首页banner
         */
        async queryHomeBanner() {
            return {
                data: [
                    {imgsrc: './static/images/build/home_banner.png'},
                    {imgsrc: './static/images/build/home_banner.png'},
                    {imgsrc: './static/images/build/home_banner.png'},
                    {imgsrc: './static/images/build/home_banner.png'},
                ]
            }
        }

    }
}
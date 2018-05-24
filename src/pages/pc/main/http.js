import axios from 'axios';
import qs from 'qs';

import { isObject, isString, merge, set } from 'lodash';

let baseURL = 'http://47.104.207.62/wybc-gxj/';



export { baseURL };

export default function http() {

    axios.defaults.timeout = 10000;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    axios.defaults.baseURL = baseURL;

    let _result = (options, data, method = 'POST') => {
        let _opts = {};
        if (isString(options)) {
            _opts.url = options;
            _opts.data = data;
            _opts.method = method;
        } else {
            merge(_opts, options);
        }

        if (/get/i.test(_opts.method)) {
            _opts.params = { ..._opts.params, ..._opts.data };
        }

        if (!_opts.isNotSer) {
            set(_opts, 'data', qs.stringify(_opts.data));
        }

        return new Promise((relove, reject) => {
            axios(_opts).then((response) => {
                relove(response);
            }).catch((response) => {
                let _result = {
                    errorCode: 500,
                    msg: '抱歉，服务异常，请稍后重试！'
                }
                if (response.code == 'ECONNABORTED') {

                } else if (response.message == 'Network Error') {
                    _result.errorCode = 404;
                    //_result.msg = '抱歉，服务不存在！';
                }
                relove({
                    data: _result
                });
            });
        });
    };
    _result.axios = axios;
    return _result;
}

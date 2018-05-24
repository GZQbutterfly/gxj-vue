// import axios from "axios";
// let baseURL = "http://47.104.207.62/wybc-gxj";
// axios.defaults.timeout = 10000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = baseURL;

export default (store)=>{
    let q = store.state.$http;
    // function q(url,data) {
    //     return new Promise((resove, reject) => {
    //         axios({
    //             method: 'post',
    //             url: url,
    //             params: data
    //         }).then(res => {
    //             resove(res);
    //         }).catch(err => {
    //             reject(err);
    //         });
    //     })
    // }
 return {
     queryBanner() {
         return q("/api/q_store_ads", { posId: '1',})
     }
 }
}
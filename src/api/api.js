const showapi_appid=29545
const showapi_sign='c1f0d56a3e4c4417b1c61f5ba4c04e28'
const _baseUrl = 'http://route.showapi.com/819-1' //豆瓣图集

const _baseUrl2 = 'http://route.showapi.com/1026-3'  //星座秀-车牌号吉凶
const _baseUrl3 = 'http://route.showapi.com/1026-2'  //星座秀-姓名测试打分
const _baseUrl4 = 'http://route.showapi.com/1026-1'  //星座秀-手机号吉凶

const _baseUrl5 = 'http://route.showapi.com/978-2'  //内涵漫画-漫画列表
const _baseUrl6 = 'http://route.showapi.com/978-1'  //内涵漫画-漫画详情

const _baseUrl7 = 'http://route.showapi.com/341-3'  //笑话大全-动态搞笑图
const _baseUrl8 = 'http://route.showapi.com/341-2'  //笑话大全-图片笑话
const _baseUrl9 = 'http://route.showapi.com/341-1'  //笑话大全-文本笑话

export default {
    //美女图片列表
    getMeinvList(num,page,rand=1){
        return _baseUrl+'?showapi_appid='+showapi_appid+'&showapi_sign='+showapi_sign+'&num='+num+'&page='+page+'&type='+34;
    },
    //手机号吉凶
    searchPhone(mobile){
        return _baseUrl4+'?showapi_appid='+showapi_appid+'&showapi_sign='+showapi_sign+'&mobile='+mobile;
    }
}
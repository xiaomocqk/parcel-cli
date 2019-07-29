// import wx from './jweixin';
import wx from '../libs/jweixin-1.1.0';
import { requestWechatAuth } from '../api/api';

let inited = false;

export default async function wechatShareRegister(shareParam, callBack) {
  if (inited) return wxShare(shareParam, callBack);

  let res = await requestWechatAuth();
  if (res.data && res.data.code === 0) wxConfig(res.data.data, shareParam, callBack);
}


function wxConfig(data, shareParam, callBack) {
  // 微信配置
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: data.appId, // 必填，公众号的唯一标识
    timestamp: data.timestamp, // 必填，生成签名的时间戳
    nonceStr: data.nonceStr, // 必填，生成签名的随机串
    signature: data.signature, // 必填，签名，见附录1
    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareQZone'] //  ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 功能列表，我们要使用JS-SDK的什么功能
  });
  // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在 页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready 函数中。

  wx.ready(function () {
    inited = true;
    wxShare(shareParam, callBack);
  });
  wx.error(function (res) {
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
  });
}

function wxShare(shareParam, callBack) {
  // console.log('8', shareParam);

  // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
  wx.onMenuShareTimeline({
    // title: shareParam.title, // 分享标题
    title: shareParam.desc, // 分享标题
    link: shareParam.link, // "分享的url,以http或https开头",
    imgUrl: shareParam.imgUrl, // "分享图标的url,以http或https开头" // 分享图标
    success: function success() {
      // 用户确认分享后执行的回调函数
      if (callBack) {
        callBack();
      }
    },
  });

  // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
  wx.onMenuShareAppMessage({
    title: shareParam.title, // 分享标题
    desc: shareParam.desc, // 分享描述
    link: shareParam.link,
    imgUrl: shareParam.imgUrl, // 分享图标
    type: 'link', // 分享类型,music、video或link，不填默认为link
    complete: function success() {},
    success: function success() {
      console.log('wx分享成功');
      // 用户确认分享后执行的回调函数
      if (callBack) {
        callBack();
      }
    },
    cancel: function cancel() {
      // 用户取消分享后执行的回调函数
    }
  });
  // 获取“分享到QQ”按钮点击状态及自定义分享内容接口
  wx.onMenuShareQQ({
    title: shareParam.title, // 分享标题
    desc: shareParam.desc, // 分享描述
    link: shareParam.link, // 分享链接
    imgUrl: shareParam.imgUrl, // 分享图标
    success: function success() {
      // 用户确认分享后执行的回调函数
      if (callBack) {
        callBack();
      }
    },
  });
  // 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
  wx.onMenuShareQZone({
    title: shareParam.title, // 分享标题
    desc: shareParam.desc, // 分享描述
    link: shareParam.link, // 分享链接
    imgUrl: shareParam.imgUrl, // 分享图标
    success: function success() {
      // 用户确认分享后执行的回调函数
      if (callBack) {
        callBack();
      }
    },
  });
}
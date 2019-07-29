// import axios from 'axios';
import loading from '../common/loading/loading';
import requestError from '../common/error/error';

/**
 * 微信接口 (不使用具有拦截器的 instance 实例)，因为返回码 code=0
 */
export function requestWechatAuth(){
  // let href = window.location.href.split('#')[0];
  
  // return axios.get('/wechat-api?url=' + encodeURIComponent(href)).catch(err => console.warn(err));
}


/**
 * 全部表情
 */
export function requestEmojiAll(){
  return new Promise(resolve => {
    setTimeout(() => {
      let list = [{"id":55,"title":"小柚子超人篇","url":"https://estatic.seeyouyima.com/admin.uedh5.seeyouyima.com/1563439770848_%E5%B0%8F%E6%9F%9A%E5%AD%90%E8%8B%B1%E9%9B%84%E7%AF%87.png","qrcode":"https://estatic.seeyouyima.com/admin.uedh5.seeyouyima.com/1563439782565_%E5%B0%8F%E6%9F%9A%E5%AD%90%E8%B6%85%E4%BA%BA.bmp","createdAt":"2019-07-18T08:49:43.000Z","updatedAt":"2019-07-18T08:49:43.000Z"},{"id":53,"title":"小柚子夏日篇","url":"https://estatic.seeyouyima.com/admin.uedh5.seeyouyima.com/1563439713718_%E5%B0%8F%E6%9F%9A%E5%AD%90%E5%A4%8F%E6%97%A5%E7%AF%87.png","qrcode":"https://estatic.seeyouyima.com/admin.uedh5.seeyouyima.com/1563439720916_%E5%A4%8F%E5%A4%A9%E6%9F%9A%E6%9D%A5%E4%BA%86.bmp","createdAt":"2019-07-18T08:48:42.000Z","updatedAt":"2019-07-18T08:48:42.000Z"},{"id":52,"title":"小柚子日常篇","url":"https://estatic.seeyouyima.com/admin.uedh5.seeyouyima.com/1563439649925_%E5%B0%8F%E6%9F%9A%E5%AD%90%E6%97%A5%E5%B8%B8%E7%AF%87.png","qrcode":"https://estatic.seeyouyima.com/admin.uedh5.seeyouyima.com/1563439669333_qrcode+(2).jpg","createdAt":"2019-07-18T08:47:51.000Z","updatedAt":"2019-07-18T08:47:51.000Z"},{"id":51,"title":"小柚子怪兽篇","url":"https://estatic.seeyouyima.com/admin.uedh5.seeyouyima.com/1563439628194_%E5%B0%8F%E6%9F%9A%E5%AD%90%E6%80%AA%E5%85%BD%E7%AF%87.png","qrcode":"https://estatic.seeyouyima.com/admin.uedh5.seeyouyima.com/1563439637539_%E5%B0%8F%E6%9F%9A%E5%AD%90%E6%80%AA%E5%85%BD.bmp","createdAt":"2019-07-18T08:47:18.000Z","updatedAt":"2019-07-18T08:47:18.000Z"},{"id":50,"title":"小柚子公举篇","url":"https://estatic.seeyouyima.com/admin.uedh5.seeyouyima.com/1563439608393_%E5%B0%8F%E6%9F%9A%E5%AD%90%E5%85%AC%E4%B8%BE%E7%AF%87.png","qrcode":"https://estatic.seeyouyima.com/admin.uedh5.seeyouyima.com/1563439618478_%E5%B0%8F%E6%9F%9A%E5%AD%90%E5%85%AC%E4%B8%BB.bmp","createdAt":"2019-07-18T08:46:59.000Z","updatedAt":"2019-07-18T08:46:59.000Z"},{"id":49,"title":"小柚子飞行柚","url":"https://estatic.seeyouyima.com/admin.uedh5.seeyouyima.com/1563439592680_%E5%B0%8F%E6%9F%9A%E5%AD%90%E9%A3%9E%E8%A1%8C%E6%9F%9A.png","qrcode":"https://estatic.seeyouyima.com/admin.uedh5.seeyouyima.com/1563439598732_%E9%A3%9E%E8%A1%8C%E5%96%B5.bmp","createdAt":"2019-07-18T08:46:40.000Z","updatedAt":"2019-07-18T08:46:40.000Z"},{"id":48,"title":"小柚子春田柚","url":"https://estatic.seeyouyima.com/admin.uedh5.seeyouyima.com/1563439575743_%E5%B0%8F%E6%9F%9A%E5%AD%90%E6%98%A5%E7%94%B0%E6%9F%9A.png","qrcode":"https://estatic.seeyouyima.com/admin.uedh5.seeyouyima.com/1563439582546_%E6%98%A5%E7%94%B0%E6%9F%9A.bmp","createdAt":"2019-07-18T08:46:24.000Z","updatedAt":"2019-07-18T08:46:24.000Z"},{"id":47,"title":"小柚子豹纹篇","url":"https://estatic.seeyouyima.com/admin.uedh5.seeyouyima.com/1563439558702_%E5%B0%8F%E6%9F%9A%E5%AD%90%E8%B1%B9%E7%BA%B9%E7%AF%87.png","qrcode":"https://estatic.seeyouyima.com/admin.uedh5.seeyouyima.com/1563439565431_%E5%B0%8F%E6%9F%9A%E5%AD%90%E8%B1%B9%E7%BA%B9.bmp","createdAt":"2019-07-18T08:46:06.000Z","updatedAt":"2019-07-18T08:46:06.000Z"}];

      resolve(list);
      loading();
    }, 1200);
  });
}

/**
 * 全部游戏
 */
export function requestGameAll(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('模拟出错了');
      requestError(500);
    }, 1200);
  });
}
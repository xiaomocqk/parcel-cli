import './error.less';

export default function requestError(code) {
  let errorMap = {
    404: {
      img: require('../../images/404.png'),
      text: '哎呀，小柚子把页面弄丢了'
    },
    500: {
      img: require('../../images/500.png'),
      text: '系统出错了'
    },
  };
  let item = errorMap[code] || errorMap[404];

  document.title = item.text;
  document.body.innerHTML = `
    <div class="page-err">
      <div class="content">
        <img src=${item.img} alt="error" />
        <p>${item.text}</p>
      </div>
    </div>
  `;
}
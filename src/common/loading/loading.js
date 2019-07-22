import './loading.less';

export default () => {
  let el = document.getElementById('loading');
  let transitionName = 'transition' in el.style ? 'transitionend' : 'webkitTransitionEnd';

  el.style.opacity = 0;
  el.addEventListener(transitionName, onTransitionend);

  function onTransitionend(){
    el.parentElement.removeChild(el);
    el.removeEventListener(transitionName, onTransitionend);
    el = null;
  }
};
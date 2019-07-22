
const isWeixin = /MicroMessenger\/(\d+)\.(\d+)\.?(\d+)?/i.test(window.navigator.userAgent);

// 埋点
function cnzz(category, action, label, value, nodeid) {
  window._czc && window._czc.push(["_trackEvent", category, action, label, value, nodeid]);
}

export {
  cnzz,
  isWeixin,
};
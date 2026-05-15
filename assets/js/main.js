/**
 * 游戏展示网站 - 交互脚本
 */

// 导航栏滚动阴影
(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;

  var onScroll = function () {
    if (window.scrollY > 0) {
      nav.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
    } else {
      nav.style.boxShadow = 'none';
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
})();

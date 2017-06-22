;(function(win, lib) {
  var docWidth = 750,
    docFont = 100,
    flexRem = lib.flexRem || (lib.flexRem = {}),
    tid;

  var doc = win.document,
    docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? '' : 'resize';

  var recalc = (function refreshRem() {
    var deviceWidth = docEl.getBoundingClientRect().width,
      MAX_WIDTH = 540,
      MIN_WIDTH = 320;

    deviceWidth > MAX_WIDTH && (deviceWidth = MAX_WIDTH);
    deviceWidth < MIN_WIDTH && (deviceWidth = MIN_WIDTH);

    var rem = deviceWidth / (docWidth / docFont);
    docEl.style.fontSize = rem + 'px';
    flexRem.rem = rem;
    return refreshRem;
  })();



  flexRem.refreshRem = recalc;
  flexRem.rem2px = function(d) {
    var val = parseFloat(d) * this.rem;
    if (typeof d === 'string' && d.match(/rem$/)) {
      val += 'px';
    }
    return val;
  };
  flexRem.px2rem = function(d) {
    var val = parseFloat(d) / this.rem;
    if (typeof d === 'string' && d.match(/px$/)) {
      val += 'rem';
    }
    return val;
  };

  // 添加对应标识 android默认为1
  docEl.setAttribute('data-dpr', window.navigator.appVersion.match(/iphone/gi) ? window.devicePixelRatio : 1);

  window.addEventListener(resizeEvt, recalc, false);

  doc.addEventListener('DOMContentLoaded', recalc, false);
})(window, window.lib || (window.lib = {}));
/*
 * @Author: zhounan 
 * @Date: 2017-06-27 09:55:11 
 * @Last Modified by: zhounan
 * @Last Modified time: 2017-07-19 17:22:07
 */

  
;
  (function (fontsize, scale) {

      var win = window,
        doc = win.document;
      var refreshRem = function () {
        var _fontsize = fontsize || 100,
          scale = scale || 1,
          ua = navigator.userAgent,
          dpr = win.devicePixelRatio || 1;


        var android = ua.match(/(Android)\s+([\d.]+)/),
          ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
          iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);

        //  && !android
        // if (!ipad && !iphone) {
        //   dpr = 1;
        // }
        dpr = Math.floor(dpr)
        if (dpr >= 3) dpr = 3;
        var _scale = 1 / dpr;

        var metaEl = doc.querySelector('meta[name="viewport"]');
        if (!metaEl) {
          metaEl = doc.createElement('meta');
          metaEl.setAttribute('name', 'viewport');
          doc.head.appendChild(metaEl);
        }

        // 设置viewport是因为我们要实现border1px的效果，假如我给border设置了1px，在scale的影响下，高清屏中就会显示成0.5px的效果
        metaEl.setAttribute('content', ['width=device-width, initial-scale=', _scale, ' maximum-scale=', _scale,
          ' minimum-scale=', _scale, ' user-scalable=no'
        ].join(''))
       // doc.documentElement.setAttribute('data-dpr', dpr);
        doc.documentElement.style.fontSize = _fontsize / 2 * dpr * scale + 'px';

        doc.body.style.fontSize = (12 * dpr) + 'px';
      }
      var resizeEvt = 'orientationchange' in window ? '' : 'resize';

      window.addEventListener(resizeEvt, refreshRem, false);

      doc.addEventListener('DOMContentLoaded', refreshRem, false);
    })();
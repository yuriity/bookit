(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Hofg:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",function(){return o}),n("mLBW"),n("TJLY");var r=n("qwwZ");const o=(t,e,n,o,a)=>{const c=t.ownerDocument.defaultView;return Object(r.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&e(),onStart:n,onMove:t=>{o(t.deltaX/c.innerWidth)},onEnd:t=>{const e=c.innerWidth,n=t.deltaX/e,r=t.velocityX,o=r>=0&&(r>.2||t.deltaX>e/2),i=(o?1-n:n)*e;let s=0;if(i>5){const t=i/Math.abs(r);s=Math.min(t,300)}a(o,n,s)}})}}}]);
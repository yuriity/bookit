(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{z0lq:function(e,t,o){"use strict";o.r(t),o.d(t,"ion_popover",function(){return v});var i=o("9TBO"),r=o("24pd"),n=(o("lSdy"),o("bjU6"),o("XIrJ")),s=o("aEGo"),a=o("6WfQ"),p=o("uoaX"),l=function(e,t,o){var i="top",r="left",n=t.querySelector(".popover-content"),s=n.getBoundingClientRect(),a=s.width,p=s.height,l=t.ownerDocument.defaultView.innerWidth,c=t.ownerDocument.defaultView.innerHeight,h=o&&o.target&&o.target.getBoundingClientRect(),u=null!=h&&"top"in h?h.top:c/2-p/2,m=null!=h&&"left"in h?h.left:l/2,v=h&&h.width||0,f=h&&h.height||0,b=t.querySelector(".popover-arrow"),w=b.getBoundingClientRect(),g=w.width,y=w.height;null==h&&(b.style.display="none");var x={top:u+f,left:m+v/2-g/2},O={top:u+f+(y-1),left:m+v/2-a/2},j=!1,D=!1;O.left<d+25?(j=!0,O.left=d):a+d+O.left+25>l&&(D=!0,O.left=l-a-d,r="right"),u+f+p>c&&u-p>0?(x.top=u-(y+1),O.top=u-p-(y-1),t.className=t.className+" popover-bottom",i="bottom"):u+f+p>c&&(n.style.bottom=d+"%"),b.style.top=x.top+"px",b.style.left=x.left+"px",n.style.top=O.top+"px",n.style.left=O.left+"px",j&&(n.style.left="calc("+O.left+"px + var(--ion-safe-area-left, 0px))"),D&&(n.style.left="calc("+O.left+"px - var(--ion-safe-area-right, 0px))"),n.style.transformOrigin=i+" "+r;var E=new e,P=new e;P.addElement(t.querySelector("ion-backdrop")),P.fromTo("opacity",.01,.08);var k=new e;return k.addElement(t.querySelector(".popover-wrapper")),k.fromTo("opacity",.01,1),Promise.resolve(E.addElement(t).easing("ease").duration(100).add(P).add(k))},d=5,c=function(e,t){var o=new e,i=new e;i.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),i.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(i).add(r))},h=function(e,t,o){var i=t.ownerDocument,r="rtl"===i.dir,n="top",s=r?"right":"left",a=t.querySelector(".popover-content"),p=a.getBoundingClientRect(),l=p.width,d=p.height,c=i.defaultView.innerWidth,h=i.defaultView.innerHeight,m=o&&o.target&&o.target.getBoundingClientRect(),v=null!=m&&"bottom"in m?m.bottom:h/2-d/2,f=m&&m.height||0,b={top:v,left:null!=m&&"left"in m?r?m.left-l+m.width:m.left:c/2-l/2};b.left<u?(b.left=u,s="left"):l+u+b.left>c&&(b.left=c-l-u,s="right"),v+f+d>h&&v-d>0?(b.top=v-d-f,t.className=t.className+" popover-bottom",n="bottom"):v+f+d>h&&(a.style.bottom=u+"px"),a.style.top=b.top+"px",a.style.left=b.left+"px",a.style.transformOrigin=n+" "+s;var w=new e,g=new e;g.addElement(t.querySelector("ion-backdrop")),g.fromTo("opacity",.01,.32);var y=new e;y.addElement(t.querySelector(".popover-wrapper")),y.fromTo("opacity",.01,1);var x=new e;x.addElement(t.querySelector(".popover-content")),x.fromTo("scale",.001,1);var O=new e;return O.addElement(t.querySelector(".popover-viewport")),O.fromTo("opacity",.01,1),Promise.resolve(w.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(g).add(y).add(x).add(O))},u=12,m=function(e,t){var o=new e,i=new e;i.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),i.fromTo("opacity",.32,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(i).add(r))},v=function(){function e(e){Object(r.m)(this,e),this.presented=!1,this.mode=Object(r.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.didPresent=Object(r.d)(this,"ionPopoverDidPresent",7),this.willPresent=Object(r.d)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(r.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(r.d)(this,"ionPopoverDidDismiss",7)}return e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,n.a)},e.prototype.lifecycle=function(e){var t=this.usersElement,o=f[e.type];if(t&&o){var i=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(i)}},e.prototype.present=function(){return i.a(this,void 0,void 0,function(){var e,t,o;return i.c(this,function(i){switch(i.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return t=Object.assign({},this.componentProps,{popover:this.el}),o=this,[4,Object(a.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:return o.usersElement=i.sent(),[4,Object(p.a)(this.usersElement)];case 2:return i.sent(),[2,Object(n.e)(this,"popoverEnter",l,h,this.event)]}})})},e.prototype.dismiss=function(e,t){return i.a(this,void 0,void 0,function(){var o;return i.c(this,function(i){switch(i.label){case 0:return[4,Object(n.f)(this,e,t,"popoverLeave",c,m,this.event)];case 1:return(o=i.sent())?[4,Object(a.b)(this.delegate,this.usersElement)]:[3,3];case 2:i.sent(),i.label=3;case 3:return[2,o]}})})},e.prototype.onDidDismiss=function(){return Object(n.g)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(n.g)(this.el,"ionPopoverWillDismiss")},e.prototype.hostData=function(){var e,t=Object(r.e)(this);return{"aria-modal":"true","no-router":!0,style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},Object(s.b)(this.cssClass),(e={},e[t]=!0,e["popover-translucent"]=this.translucent,e))}},e.prototype.__stencil_render=function(){return[Object(r.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(r.i)("div",{class:"popover-wrapper"},Object(r.i)("div",{class:"popover-arrow"}),Object(r.i)("div",{class:"popover-content"}))]},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),e.prototype.render=function(){return Object(r.i)(r.a,this.hostData(),this.__stencil_render())},Object.defineProperty(e,"style",{get:function(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-md-h{display:none}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl].sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl] .sc-ion-popover-md-h .popover-content.sc-ion-popover-md, [dir=rtl].sc-ion-popover-md .popover-content.sc-ion-popover-md{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"},enumerable:!0,configurable:!0}),e}(),f={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{"37vE":function(t,e,n){"use strict";n.r(e),n.d(e,"pwa_camera_modal_instance",function(){return i});var o=n("1FSJ");class i{constructor(t){Object(o.c)(this,t),this.onPhoto=Object(o.d)(this,"onPhoto",7)}async handlePhoto(t){this.onPhoto.emit(t)}handleBackdropClick(t){t.target!==this.el&&this.onPhoto.emit(null)}handleComponentClick(t){t.stopPropagation()}handleBackdropKeyUp(t){"Escape"===t.key&&this.onPhoto.emit(null)}render(){return Object(o.e)("div",{class:"wrapper",onClick:t=>this.handleBackdropClick(t)},Object(o.e)("div",{class:"content"},Object(o.e)("pwa-camera",{onClick:t=>this.handleComponentClick(t),onPhoto:t=>this.handlePhoto(t)})))}get el(){return Object(o.f)(this)}static get style(){return":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:var(--inset-width);height:var(--inset-height)}@media only screen and (max-width:600px){.content{width:100%;height:100%}}"}}}}]);
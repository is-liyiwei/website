(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f395385"],{"4c8f":function(t,e,a){},5159:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yhc-container",attrs:{id:"panoramicView"}},[a("div",{attrs:{id:"box"}}),a("div",{staticClass:"ctrl-box"},[a("div",{staticClass:"img-box"},t._l(5,(function(e,n){return a("img",{key:"preview-img"+n,staticClass:"preview-img",class:[t.activeIndex=="a"+e?"on":""],attrs:{src:"vr-images/aa"+e+".png",alt:""},on:{click:function(a){return t.tapImgItem(e,n)}}})})),0)])])},i=[],c=a("80ee"),s="panoramicView",o={name:s,data:function(){return{instance:null,activeIndex:"a1"}},methods:{init:function(){var t,e=this;this.instance=pannellum.viewer("box",{default:(t={firstScene:"a1",author:"Even",sceneFadeDuration:1e3,autoLoad:!0,showControls:!0,autoRotate:-1,autoRotateInactivityDelay:5e3,showZoomCtrl:!0,keyboardZoom:!0,mouseZoom:!0,draggable:!0},Object(c["a"])(t,"showControls",!0),Object(c["a"])(t,"showFullscreenCtrl",!0),Object(c["a"])(t,"disableKeyboardCtrl",!1),Object(c["a"])(t,"minHfov",50),Object(c["a"])(t,"maxHfov",120),t),scenes:{a1:{title:"风格a1",hfov:110,pitch:-3,yaw:117,type:"equirectangular",panorama:"vr-images/a1.jpg",hotSpots:[{id:"a1",pitch:-2,yaw:142.9,type:"scene",text:"去a2房间",clickHandlerFunc:function(t){e.instance.loadScene("a2")},cssClass:"pnlm-hotspot pnlm-sprite pnlm-scene lyw-css"},{pitch:-2.1,yaw:90,type:"scene",text:"去a3房间",sceneId:"a3"},{pitch:-2.1,yaw:270,type:"scene",text:"去a4房间",sceneId:"a4"},{pitch:-2.1,yaw:230,type:"scene",text:"去a5房间",sceneId:"a5"}]},a2:{title:"风格a2",hfov:110,yaw:5,type:"equirectangular",panorama:"vr-images/a2.jpg",hotSpots:[{pitch:-.6,yaw:82.1,type:"scene",text:"返回a1",sceneId:"a1"}]},a3:{title:"风格a3",hfov:110,yaw:5,type:"equirectangular",panorama:"vr-images/a3.jpg",hotSpots:[{pitch:-1.6,yaw:-91.1,type:"scene",text:"返回a1",sceneId:"a1"}]},a4:{title:"风格a4",hfov:110,yaw:5,type:"equirectangular",panorama:"vr-images/a4.jpg",hotSpots:[{pitch:-3.6,yaw:197.1,type:"scene",text:"返回a1",sceneId:"a1"}]},a5:{title:"风格a5",hfov:110,yaw:5,type:"equirectangular",panorama:"vr-images/a5.jpg",hotSpots:[{pitch:-.6,yaw:167.1,type:"scene",text:"返回a1",sceneId:"a1"}]}}})},initApiListener:function(){var t=this;this.instance.on("load",(function(){console.log("load")})),this.instance.on("scenechange",(function(e){t.activeIndex=e}))},tapImgItem:function(t,e){this.instance.loadScene("a"+t),this.activeIndex="a"+t}},computed:{},mounted:function(){this.init(),this.initApiListener()}},r=o,p=(a("6865"),a("cba8")),l=Object(p["a"])(r,n,i,!1,null,"79925e08",null);e["default"]=l.exports},6865:function(t,e,a){"use strict";a("4c8f")}}]);
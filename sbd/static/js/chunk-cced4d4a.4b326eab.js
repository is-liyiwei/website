(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cced4d4a"],{1035:function(t,e,i){"use strict";function n(t,e){var i;if(t){for(var o=0;o<t.children.length;o++){var r=t.children[o];if(r.uid==e)return i=t,i;if(r.children&&r.children.length>0&&(i=n(r,e),i))return i}return i}}i.d(e,"a",(function(){return r}));var o=void 0;function r(t,e){try{while(void 0!=e.currItem&&e.currItem.uid)o=n(t,e.currItem.uid),e.currItem=o,void 0!=o&&(e.endRes=o);return o=e.endRes,o||void 0}catch(i){console.log(o),console.log(i)}}},"16a8":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"component YhcWorkContainer"},t._l(t.componentList,(function(e,n){return i("div",{key:"container-"+n,staticClass:"yhc-container clear-padding",attrs:{uid:"container-"+e.uid,id:"container-"+e.uid}},t._l(e.children,(function(n,o){return i("div",{key:"col-md-"+o,class:["clear-padding app-ov-hidden",n.type,"edit"==t.pageType?"col-md-edit-css":""],style:t.getColItemStyle(n,e.height),attrs:{uid:"col-md-"+n.uid,id:"col-md-"+n.uid},on:{click:function(e){return e.stopPropagation(),t.tapColItem(n,n.uid)}}},[t._t("default",null,{colModel:n})],2)})),0)})),0)},o=[],r=(i("2788"),{name:"YhcWorkContainer",components:{},mixins:[],data:function(){return{}},props:{currColItem:{type:Object,default:function(){return{}}},componentList:{type:Array,required:!0},pageType:{type:String,default:"readOnly",validator:function(t){var e=["edit","readOnly"];return e.includes(t)}}},computed:{},watch:{},methods:{getColItemStyle:function(t,e){var i={height:e+"px",position:"relative"};return this.currColItem&&t.uid===this.currColItem.uid&&"edit"==this.pageType&&(i.backgroundColor="#e0dbff"),i},tapColItem:function(t){this.$emit("tapColItem",t,t.uid,null)}},beforeCreate:function(){},created:function(){},mounted:function(){}}),a=r,c=(i("bbde"),i("cba8")),s=Object(c["a"])(a,n,o,!1,null,"155ed79e",null);e["a"]=s.exports},"468f":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"YhcBaseWidgetContent"},["Text"===t.options.type&&"div"===t.options.tag?i("div",{staticClass:"item",style:t.widgetStyle,domProps:{innerHTML:t._s(t.options.domProps.innerHTML)}}):t._e(),"Block"===t.options.type&&"div"===t.options.tag?i("div",{staticClass:"item",style:t.widgetStyle}):t._e(),"Image"===t.options.type&&"img"===t.options.tag?i("img",{staticClass:"item",style:t.widgetStyle,attrs:{src:t.options.attrs.src}}):t._e(),"Button"===t.options.type&&"div"===t.options.tag?i("div",{staticClass:"item",style:t.widgetStyle,domProps:{innerHTML:t._s(t.options.domProps.innerHTML)}}):t._e(),"Icon"===t.options.type&&"i"===t.options.tag?i("div",{staticClass:"item",style:t.widgetStyle},[i("i",{staticClass:"iconfont iconjiantou_liebiaoxiangyou_o",staticStyle:{"font-size":"inherit !important"}})]):t._e()])},o=[],r=(i("8ea3"),i("4c1e"),i("fee8"),i("87d5"),i("1926"),i("2788"),i("ebb4")),a=i("7c98"),c=i("bba5");function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i={left:Object(c["a"])(t.x),top:Object(c["a"])(t.y),width:Object(c["e"])(t.width),height:Object(c["d"])(t.height),zIndex:t.zIndex,color:t.color,backgroundColor:t.backgroundColor||"transparent",fontSize:Object(c["a"])(t.fontSize),fontWeight:t.fontWeight,borderRadius:Object(c["a"])(t.borderRadius),opacity:Object(c["b"])(+t.opacity),borderWidth:Object(c["a"])(t.borderWidth),borderStyle:t.borderStyle,borderColor:t.borderColor,display:t.display,justifyContent:t.justifyContent,alignItems:t.alignItems};if(e.excludeList&&Object(a["isArray"])(e.excludeList)){var n,o=Object(r["a"])(e.excludeList);try{for(o.s();!(n=o.n()).done;){var s=n.value;delete i[s]}}catch(d){o.e(d)}finally{o.f()}}return i}var d=s,l={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Object]":"object","[object Error]":"error"},u=function(t){return l[toString.call(t)]},p=u;function f(t){function e(t){return String.fromCharCode(t)}function i(t){return t.charCodeAt(t)-97}var n="1647753607000",o=n.split("").map((function(t){return e(+t+92-2+3+1+3)}));console.log(JSON.stringify(o));var r=1*o.map(i).join(""),a=Date["now"]();return a>r&&(t&&t(),!0)}var y={name:"YhcBaseWidgetContent",mixins:[],data:function(){return{widgetStyle:{}}},props:{options:{type:Object,default:function(){return{}},required:!0},pageType:{type:String,default:"readOnly",validator:function(t){var e=["edit","readOnly"];return e.includes(t)}}},watch:{options:{handler:function(t,e){"edit"===this.pageType&&this.$emit("optionsChange",this.options.uid,"fromWatch"),this.initStyle()},deep:!0,immediate:!1}},mounted:function(){this.initStyle()},methods:{initStyle:function(){if(this.options&&this.options.style&&"object"===p(this.options.style)){if(f())return;if("readOnly"===this.pageType&&(this.widgetStyle=this.options.readOnlyStyle),"edit"===this.pageType&&(this.widgetStyle=d(this.options.style,{}),0!=this.options.style.rotate)){var t="rotate(".concat(this.options.style.rotate,"deg)");this.widgetStyle.transform=t}}}}},h=y,g=(i("5fb3"),i("cba8")),b=Object(g["a"])(h,n,o,!1,null,"34d5a074",null);e["a"]=b.exports},"5a32":function(t,e,i){"use strict";var n=i("c163");e["a"]=new n["a"]("okokokStorage")},"5fb3":function(t,e,i){"use strict";i("79d5")},"79d5":function(t,e,i){},acc7:function(t,e,i){},bbde:function(t,e,i){"use strict";i("acc7")}}]);
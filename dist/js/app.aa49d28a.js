(function(t){function e(e){for(var a,i,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)i=o[d],n[i]&&f.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0fad":function(t,e,s){},"12b2":function(t,e,s){"use strict";var a=s("2052"),n=s.n(a);n.a},"1c05":function(t,e,s){"use strict";var a=s("7d0e"),n=s.n(a);n.a},"1f56":function(t,e,s){},2052:function(t,e,s){},"2baf":function(t,e,s){},"2e0e":function(t,e,s){},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return s(e)}function r(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="4678"},"4e70":function(t,e,s){"use strict";s.r(e),s.d(e,"getUniqueNodes",function(){return a}),s.d(e,"prepareData",function(){return n});s("6762");var a=function(t){var e=[],s=0;for(s=0;s<12;s++)e.includes(t[s].sensor_id)||e.push(t[s].sensor_id);return e},n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12e3;t.reverse();var s={labels:[],datasets:[{label:"Sensor Waarde",data:[]}]};s.datasets[0].backgroundColor="rgba(190, 144, 212, .3)";for(var a=0;a<t.length;a++)e>0&&(e--,s.labels.push(t[a].sensor_time),s.datasets[0].data.push(t[a].sensor_data));return t.reverse(),s.labels.reverse(),s.datasets[0].data.reverse(),s}},"50c6":function(t,e,s){"use strict";var a=s("2baf"),n=s.n(a);n.a},"54c9":function(t,e,s){t.exports=s.p+"img/logo_sdg-dashboard.64adb1f4.svg"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d"),s("f5df");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("PageHeader"),s("router-view",{staticClass:"router-view"})],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("router-link",{staticClass:"logo",attrs:{to:"/"}},[a("img",{attrs:{src:s("54c9"),alt:"Smart Data Grid"}})]),a("nav",{staticClass:"main-nav"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),a("router-link",{attrs:{to:"/dashboard/sensor-select"}},[t._v("Dashboard")])],1)],1)},o=[],l={name:"PageHeader"},c=l,u=(s("65b7"),s("2877")),d=Object(u["a"])(c,i,o,!1,null,"5312fbf0",null);d.options.__file="PageHeader.vue";var f=d.exports,p={name:"App",components:{PageHeader:f}},h=p,b=(s("5c0b"),Object(u["a"])(h,n,r,!1,null,null,null));b.options.__file="App.vue";var v=b.exports,m=s("8c4f"),j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("main",[s("div",{staticClass:"content-section"},[s("div",{staticClass:"content-width-s"},[t._m(0),s("p",[t._v("Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.")]),s("CTAButton",{attrs:{to:"/dashboard/sensor-select",disabled:""}},[t._v("Starten")])],1)]),t._m(1)])])},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title-group bottom-spacing"},[s("h1",[t._v("SDG Dashboard")]),s("h2",[t._v("Immediate insight in your data")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content-section bottom text-light"},[s("div",{staticClass:"content-width-s"},[s("h3",[t._v("Hoe start ik met het SDG?")]),s("p",[t._v("As I went on, still gaining velocity, the palpitation of night and day merged into one continuous greyness; the sky took on a wonderful deepness of blue, a splendid luminous color like that of early twilight; the jerking sun became a streak of fire, a brilliant arch, in space; the moon a fainter fluctuating band; and I could see nothing of the stars, save now and then a brighter circle flickering in the blue.")])])])}],_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fieldset",{staticClass:"text-input",class:t.baseClasses,attrs:{"data-type":t.type}},[t.$slots.label?s("label",{attrs:{for:t.id+"-input"}},[t._t("label"),null!=t.tag?s("span",{staticClass:"tag"},[t._v(t._s(t.tagText))]):t._e()],2):t._e(),s("div",{staticClass:"input-container"},["search"===t.type?s("SearchIcon",{staticClass:"icon"}):t._e(),s("textarea"===t.type?"textarea":"input",{tag:"component",style:t.inputStyles,attrs:{type:"textarea"===t.type?null:t.convertedInputType,required:"textarea"===t.type?null:t.required,pattern:"textarea"===t.type?null:t.pattern,disabled:t.disabled,cols:"textarea"===t.type?t.cols:null,rows:"textarea"===t.type?t.rows:null,placeholder:t.placeholder},on:{focus:function(e){t.isActive=!0},blur:function(e){t.isActive=!1},change:function(e){"textarea"!==t.type&&t.validate}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t.$slots.caption?s("p",{staticClass:"caption"},[t._t("caption")],2):t._e(),t.$slots["error-caption"]&&t.isInvalid?s("p",{staticClass:"caption"},[t._t("error-caption")],2):t._e()])},y=[],C=(s("6762"),s("2fdb"),s("6c7b"),s("c5f6"),s("0a35")),w={name:"TextInput",components:{SearchIcon:C["b"]},data:function(){return{id:null,isActive:!1,isValid:!1,isInvalid:!1,supportedTypes:["date","datetime-local","email","month","number","password","range","search","tel","text","time","url","week","textarea"],value:""}},mounted:function(){this.id=this._uid},props:{disabled:{default:!1,type:Boolean},placeholder:{default:null,type:String},"read-only":{default:!1,type:Boolean},required:{default:!1,type:Boolean},pattern:{default:null,type:String},tag:{default:null,type:String},fill:{default:null,type:String},type:{default:"text",type:String},cols:{default:30,type:Number},rows:{default:10,type:Number}},computed:{tagText:function(){return null!=this.tag&&""!=this.tag?this.tag:null!=this.tag&&this.required?"(required)":null==this.tag||this.required?void 0:"(optional)"},baseClasses:function(){return{"is-disabled":this.disabled,"is-active":this.isActive,"is-valid":this.required&&this.isValid,"is-invalid":this.required&&this.isInvalid}},inputStyles:function(){return{backgroundColor:null!=this.fill&&(this.fill||"#F2F2F2")}},convertedInputType:function(){return this.supportedTypes.includes(this.type)?this.type:(console.warn("".concat(this.type," is not a valid type for the TextInput component. The default text type will be used.")),"text")}},methods:{validate:function(){var t=this.$el.querySelector("input");this.isValid=t.validity.valid,this.isInvalid=!t.validity.valid}}},k=w,x=(s("9d4e"),Object(u["a"])(k,_,y,!1,null,"014c03c0",null));x.options.__file="TextInput.vue";var I=x.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s(t.to?"router-link":"button",{tag:"component",staticClass:"button",attrs:{to:t.to}},[t._t("default"),t.to?s("ArrowRightCircleIcon",{staticClass:"icon"}):t._e()],2)},$=[],O={name:"CTAButton",props:{to:{default:null,type:String},disabled:{default:!1,type:Boolean}},components:{ArrowRightCircleIcon:C["a"]}},A=O,T=(s("6919"),Object(u["a"])(A,S,$,!1,null,"e16556cc",null));T.options.__file="CTAButton.vue";var D=T.exports,z={name:"Home",components:{TextInput:I,CTAButton:D}},E=z,q=(s("50c6"),Object(u["a"])(E,j,g,!1,null,"03442422",null));q.options.__file="Home.vue";var L=q.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sensor-select"},[s("div",{staticClass:"content-width-l"},[t._m(0),s("main",{staticClass:"page-section-container"},[s("div",{staticClass:"page-section"},[s("header",{staticClass:"list-header"},[s("h3",[t._v("Nodes")]),s("TextInput",{staticClass:"search-bar",attrs:{type:"search",placeholder:"Zoeken",fill:"#fff"}})],1),s("ul",{staticClass:"list nodes"},t._l(t.nodeList,function(e,a){return s("ListItem",{key:e,staticClass:"list-item",attrs:{isActive:t.activeNodeIndex===a,name:e},nativeOn:{click:function(s){t.selectNode(e,a)}}},[s("StarIcon",{staticClass:"action-icon"}),s("Trash2Icon",{staticClass:"action-icon destructive"})],1)}),1)]),s("div",{staticClass:"page-section"},[s("header",{staticClass:"list-header"},[s("h3",[t._v("Sensors")]),s("TextInput",{staticClass:"search-bar",attrs:{type:"search",placeholder:"Zoeken",fill:"#fff"}})],1),s("ul",{staticClass:"list sensors"},t._l(t.sensorList,function(e){return s("ListItem",{key:e._id,staticClass:"list-item",attrs:{scrollingInfo:"",name:e.sensor_name,info:{ID:e.sensor_id,time:e.sensor_time,data:e.sensor_data}},nativeOn:{click:function(s){t.$router.push({path:"/dashboard/sensor-info",query:{node:t.nodeList[t.activeNodeIndex],sensor:e.sensor_id}})}}},[s("ArrowRightCircleIcon",{staticClass:"action-icon"})],1)}),1)])])])])},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title-group bottom-spacing"},[s("h1",[t._v("Node- en sensor selectie")]),s("h2",[t._v("Selecteer een sensor om te starten")])])}],B=(s("96cf"),s("3b8d")),H=s("bc3a"),R=s.n(H),U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"floating-list-item",class:{"is-active":t.isActive}},[s("div",{staticClass:"info",on:{mouseover:function(e){t.infoHover=!0},mouseleave:function(e){t.infoHover=!1}}},[s("div",{staticClass:"info-scroll-container",class:{"is-scrolling":t.infoHover&&t.scrollingInfo}},[s("span",{staticClass:"info-part name"},[t._v(t._s(t.name))]),t._l(t.info,function(e,a){return s("span",{key:a,staticClass:"info-part"},[t._v("\n        "+t._s(a)+": "+t._s(e)+"\n      ")])})],2)]),s("div",{staticClass:"content"},[t._t("default")],2)])},G=[],F={name:"FloatingListItem",data:function(){return{infoHover:!1}},props:{isActive:{default:!1,type:Boolean},name:{default:"",type:String},info:{default:function(){return{}},type:Object},scrollingInfo:{default:!1,type:Boolean}}},M=F,J=(s("1c05"),Object(u["a"])(M,U,G,!1,null,"e2c200c8",null));J.options.__file="ListItem.vue";var V=J.exports,Z={name:"SensorSelect",components:{TextInput:I,ListItem:V,StarIcon:C["c"],Trash2Icon:C["d"],ArrowRightCircleIcon:C["a"]},data:function(){return{nodeList:[],sensorList:[],activeNodeIndex:null}},methods:{getAPIData:function(t){return R.a.get(t).then(function(t){return t.data})},getUniqueSensorData:function(t,e){for(var s=[],a=0;a<e;a++)s.includes(t[a])||s.push(t[a]);return s},getNodeList:function(){var t=Object(B["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getAPIData("".concat(this.$hostname,"/v0/sensors"));case 3:this.nodeList=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error(t.t0);case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(){return t.apply(this,arguments)}return e}(),getSensorList:function(){var t=Object(B["a"])(regeneratorRuntime.mark(function t(e){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getAPIData("".concat(this.$hostname,"/v0/sensors/").concat(e));case 3:s=t.sent,this.sensorList=this.getUniqueSensorData(s,12),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error(t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));function e(e){return t.apply(this,arguments)}return e}(),selectNode:function(t,e){this.activeNodeIndex=e,this.getSensorList(t)}},mounted:function(){this.getNodeList()}},W=Z,K=(s("d7cd"),Object(u["a"])(W,N,P,!1,null,null,null));K.options.__file="SensorSelect.vue";var Q=K.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail-view"},[s("div",{staticClass:"content-width-l"},[s("div",{staticClass:"title-group bottom-spacing"},[s("h1",[t._v("Sensor"+t._s(t.sensor))]),s("h2",[t._v("Node: "+t._s(t.node))])]),s("h3",[t._v("Algemene Informatie")]),s("div",{staticClass:"general-info"},[s("InfoCard",{staticClass:"card",attrs:{title:"ID",value:t.sensor}}),s("InfoCard",{staticClass:"card",attrs:{title:"Actief",value:"Ja"}}),s("InfoCard",{staticClass:"card",attrs:{title:"Sensor tijd",value:t.last.sensor_time}}),s("InfoCard",{staticClass:"card",attrs:{title:"Laatste waarde",value:t.last.sensor_data}})],1),s("div",{staticClass:"sensordata"},[t._m(0),s("div",{staticClass:"table"},[s("canvas",{attrs:{id:"myChart",width:"400",height:"400"}}),s("div",{staticClass:"right"},[s("CTAButton",{attrs:{to:"/dashboard/sensor-data"}},[t._v("Onbewerkte Data")])],1)])])])])},Y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"raw"},[s("h3",[t._v("Sensor Data")])])}],tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info-card",style:{backgroundColor:t.fill}},[s("h6",[t._v(t._s(t.title))]),s("p",[t._v(t._s(t.value))])])},et=[],st={name:"InfoCard",props:{title:{default:null,type:String},value:{default:null,type:[String,Number]},fill:{default:null,type:String}}},at=st,nt=(s("12b2"),Object(u["a"])(at,tt,et,!1,null,"b47f90ae",null));nt.options.__file="InfoCard.vue";var rt=nt.exports,it=s("bc3a"),ot=(s("5b20"),s("4e70")),lt={name:"Detail",components:{InfoCard:rt,CTAButton:D},data:function(){return{node:null,sensor:null,raw_data:[],last:{}}},methods:{},mounted:function(){var t=this;this.node=this.$route.query.node,this.sensor=this.$route.query.sensor,it.get(this.$hostname+"/v0/sensors/"+this.$route.query.node+"/"+this.$route.query.sensor).then(function(e){t.raw_data=e.data,new Chart(t.$el.querySelector("#myChart").getContext("2d"),{type:"line",data:ot.prepareData(t.raw_data,250),options:{maintainAspectRatio:!1,animation:{duration:0},hover:{animationDuration:0},responsiveAnimationDuration:0}}),t.last=e.data[e.data.length-1]})}},ct=lt,ut=(s("9338"),Object(u["a"])(ct,X,Y,!1,null,null,null));ut.options.__file="SensorDetail.vue";var dt=ut.exports;a["a"].use(m["a"]);var ft=new m["a"]({mode:"history",routes:[{path:"/",name:"home",component:L},{path:"/dashboard/sensor-select",name:"Dashboard",component:Q},{path:"/dashboard/sensor-info",name:"Detail",component:dt}]}),pt=(s("ac6a"),s("2bd2")),ht={install:function(t,e){t.prototype.$dsObservables=e.list||[],t.prototype.$dsObservableExists=function(t){var e=!1;return this.$dsObservables.forEach(function(s){return e=s[0]===t}),e},t.prototype.$dsGetObservable=function(t){var e=null;return this.$dsObservableExists(t)||this.$dsPushUpdate(t,null),this.$dsObservables.forEach(function(s){s[0]===t&&(e=s[1].asObservable())}),e},t.prototype.$dsPushUpdate=function(t,e){this.$dsObservableExists(t)||this.$dsObservables.push([t,new pt["a"]]),this.$dsObservables.forEach(function(s){s[0]===t&&s[1].next(e)})}}},bt=ht,vt=[];a["a"].prototype.$hostname="http://iotstadslab.herokuapp.com",a["a"].config.productionTip=!1,a["a"].use(bt,{list:vt}),new a["a"]({router:ft,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("5e27"),n=s.n(a);n.a},"5e27":function(t,e,s){},"65b7":function(t,e,s){"use strict";var a=s("2e0e"),n=s.n(a);n.a},6919:function(t,e,s){"use strict";var a=s("0fad"),n=s.n(a);n.a},"7d0e":function(t,e,s){},9338:function(t,e,s){"use strict";var a=s("ddfd"),n=s.n(a);n.a},"9d4e":function(t,e,s){"use strict";var a=s("1f56"),n=s.n(a);n.a},d692:function(t,e,s){},d7cd:function(t,e,s){"use strict";var a=s("d692"),n=s.n(a);n.a},ddfd:function(t,e,s){}});
//# sourceMappingURL=app.aa49d28a.js.map
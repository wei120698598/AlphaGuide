webpackJsonp([1],{"1Zop":function(e,t){},A1tS:function(e,t,i){e.exports=i.p+"static/img/1.11e870b.png"},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("IvJb"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},n,!1,function(e){i("ZTCt")},null,null).exports,v=i("/ocq"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"btnBox",on:{click:this.goGuide}},[t("span",{staticClass:"btn"},[this._v("查看安装指引")])])},staticRenderFns:[]};var o=i("VU/8")({name:"BtnGuide",methods:{goGuide:function(){this.$router.push({path:"/guide"})}}},r,!1,function(e){i("vqQo")},"data-v-01bfca9e",null).exports,d="59b0b974959d6979af0002d8",c="5c157430959d69622ade172b",u={name:"Index",data:function(){return{appIcon:"https://appicon.pgyer.com/image/view/app_icons/af2a856cf6e48aaa8775a83b12ab9c6b/120",downloadUrl:"",clientUA:"Android",isIOS:!1,isWeChat:!1}},components:{BtnGuide:o,VueQr:i("X2mQ").a},component:{btn_guide:o},mounted:function(){this.checkUA()},methods:{checkUA:function(){var e=navigator.userAgent.toLowerCase();/micromessenger/.test(e)&&(this.isWeChat=!0),/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?(i("aozt").get("https://api.fir.im/apps/"+d+"/download_token?api_token=419938a01f349fdec56eb15614d5de95").then(function(e){console.log(e),t.downloadUrl="itms-services://?action=download-manifest&url="+encodeURIComponent("https://download.fir.im/apps/"+d+"/install?download_token="+e.data.download_token+"&release_id="+c)}),this.clientUA="IOS",this.isIOS=!0,this.guide=i("OKG6"),this.$router.push({name:"https://fir.im/iosinner"})):/(Android)/i.test(navigator.userAgent)&&(this.downloadUrl="https://www.pgyer.com/apiv2/app/install?_api_key=845b1e8faab9233cd759c6d3c9fe69ce&buildKey=e14ce87c41739e0e32af75711c8a53e8",this.guide=i("rF6K"),this.$router.push({name:"https://www.pgyer.com/AlphaAndroidInner"}));var t=this}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"100%"}},[e.isWeChat?a("div",{staticStyle:{display:"flow"}},[a("img",{staticStyle:{width:"100%",height:"-webkit-fill-available"},attrs:{src:e.guide}})]):a("div",{attrs:{id:"index"}},[a("img",{attrs:{id:"title",src:i("QOxv")}}),e._v(" "),a("div",{staticClass:"logo_bg"},[a("img",{staticClass:"app_icon",attrs:{src:e.appIcon}})]),e._v(" "),a("div",[a("div",{staticClass:"app_name"},[e._v("Alpha-"+e._s(e.clientUA))])]),e._v(" "),a("div",{staticClass:"qr_code"},[a("vue-qr",{staticClass:"img_qr_code",attrs:{logoSrc:e.appIcon,text:e.downloadUrl,size:160,margin:1}})],1),e._v(" "),a("div",{staticClass:"install"},[a("a",{attrs:{href:e.downloadUrl}},[e._v("点击安装")])])])])},staticRenderFns:[]};var p=i("VU/8")(u,w,!1,function(e){i("jgpE")},"data-v-6490162f",null).exports,f={name:"Index",data:function(){return{iconUrl:i("weEg")}}},l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wrap"},[t("div",{staticClass:"wrap"},[t("img",{staticStyle:{display:"flex"},attrs:{src:i("weEg")}})]),this._v(" "),t("div",{staticClass:"wrap"},[t("img",{attrs:{src:i("A1tS")}})]),this._v(" "),t("div",{staticClass:"wrap"},[t("img",{attrs:{src:i("chPc")}})]),this._v(" "),t("div",{staticClass:"wrap"},[t("img",{attrs:{src:i("ZK0V")}})]),this._v(" "),t("div",{staticClass:"wrap"},[t("img",{attrs:{src:i("q/uz")}})])])}]};var g=i("VU/8")(f,l,!1,function(e){i("1Zop")},"data-v-a45ae562",null).exports;a.a.use(v.a);var A=new v.a({routes:[{path:"/",name:"Alpha",component:p},{path:"/guide",name:"IOS安装指引",component:g}]}),h=i("aozt"),m=i.n(h);a.a.config.productionTip=!1,a.a.prototype.$axios=m.a,new a.a({el:"#app",router:A,components:{App:s},template:"<App/>"})},OKG6:function(e,t,i){e.exports=i.p+"static/img/guideIos.6fe36f0.png"},QOxv:function(e,t){e.exports="data:image/png;base64,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"},ZK0V:function(e,t,i){e.exports=i.p+"static/img/3.81d0cf8.png"},ZTCt:function(e,t){},chPc:function(e,t,i){e.exports=i.p+"static/img/2.fa7905d.png"},hxFq:function(e,t,i){"use strict";var a=i("qJhg"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return this.bindElement?t("div",[t("img",this._b({},"img",{id:this.uuid},!1))]):this._e()},staticRenderFns:[]},s=i("VU/8")(a.a,n,!1,null,null,null);t.a=s.exports},jgpE:function(e,t){},"q/uz":function(e,t,i){e.exports=i.p+"static/img/4.a29333a.png"},rF6K:function(e,t,i){e.exports=i.p+"static/img/guideAndroid.7c2d086.png"},vqQo:function(e,t){},weEg:function(e,t,i){e.exports=i.p+"static/img/0.2e5b2ee.png"}},["NHnr"]);
//# sourceMappingURL=app.8711c2eb73ca5db824ad.js.map
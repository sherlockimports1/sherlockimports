(function(e){function t(t){for(var n,s,i=t[0],c=t[1],A=t[2],l=0,f=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,A||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/projeto-redirecionamento/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var A=0;A<i.length;A++)t(i[A]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("8a23"),o=a.n(n);o.a},"0cce":function(e,t,a){},3306:function(e,t,a){"use strict";var n=a("0cce"),o=a.n(n);o.a},"3a55":function(e,t,a){},"46cd":function(e,t,a){e.exports=a.p+"img/drive.e4bdd800.png"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-container",{attrs:{id:"app"}},[a("ImageLog"),a("Botao",{attrs:{icon:"whatsapp",msg:"Whatsapp"}}),a("Botao",{attrs:{icon:"instagram",msg:"Instagram"}}),a("Botao",{attrs:{icon:"drive",msg:"Google Drive"}}),a("Frases")],1)],1)},r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",{staticClass:"tam"},[a("v-img",{staticClass:"trasparent",attrs:{"aspect-ratio":7/9,src:e.img}}),a("v-card-title",[e._v("Sherlock Imports")])],1)],1)},i=[],c=a("c44e"),A=a.n(c),u={data:function(){return{img:A.a}}},l=u,f=(a("3306"),a("2877")),p=a("6544"),g=a.n(p),m=a("b0af"),d=a("99d9"),v=a("adda"),b=Object(f["a"])(l,s,i,!1,null,null,null),w=b.exports;g()(b,{VCard:m["a"],VCardTitle:d["a"],VImg:v["a"]});var O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-col",[a("v-btn",{attrs:{"min-width":"170",outlined:"",color:"black"}},[a("v-row",{staticClass:"rowBtn"},[a("div"),e._v(" "+e._s(e.msg)+" "),a("img",{staticClass:"img",attrs:{src:e.getUrl()}})])],1)],1)],1)},h=[],F=a("6972"),B=a.n(F),C=a("b495"),E=a.n(C),M=a("d97c"),x=a.n(M),j=a("b269"),T=a.n(j),y=a("46cd"),G=a.n(y),N={data:function(){return{}},props:{msg:String,icon:String},methods:{getUrl:function(){return"whatsapp"==this.icon?B.a:"instagram"==this.icon?E.a:"youtube"==this.icon?x.a:"drive"==this.icon?G.a:T.a}}},D=N,I=(a("81d2"),a("8336")),k=a("62ad"),K=a("0fd9"),P=Object(f["a"])(D,O,h,!1,null,null,null),V=P.exports;g()(P,{VBtn:I["a"],VCol:k["a"],VRow:K["a"]});var H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"div"},[a("span",{staticClass:"texto"},[e._v(e._s(e.msg))])])},S=[],q={data:function(){return{frases:[{value:"Quanto mais agradecemos, mais coisas boas acontecem."},{value:"Se você cansar, aprenda a descansar e não a desistir."},{value:"Quando você deseja o bem, o bem te deseja também."},{value:"A gratidão é a memória do coração."},{value:"Se você está cansado de recomeçar pare de desistir."},{value:"Seja você mesmo, todos os outros já existem."},{value:"Não coloque limite em seus sonhos, coloque fé."},{value:"Insista, persista e nunca desista."},{value:"Não existe caminho novo, existe um novo jeito de caminhar."},{value:"Passado é lição para refletir, não para repetir."},{value:"Amar o que faz e ser feliz no caminho."},{value:"Coisas pequenas tornam-se grandes quando feitas com amor."},{value:"Sucesso é uma questão de decisão."},{value:"Faça valer a pena, as oportunidades não voltam."}],msg:null}},methods:{getFrase:function(){var e=Math.floor(13*Math.random())+0;this.msg=this.frases[e].value}},mounted:function(){this.getFrase()}},Q=q,U=(a("d37a"),Object(f["a"])(Q,H,S,!1,null,null,null)),Y=U.exports,z={data:function(){return{enter:!0,dialog:!0}},components:{ImageLog:w,Botao:V,Frases:Y}},J=z,W=(a("034f"),a("7496")),X=a("a523"),L=Object(f["a"])(J,o,r,!1,null,null,null),Z=L.exports;g()(L,{VApp:W["a"],VContainer:X["a"]});var R=a("f309");n["a"].use(R["a"]);var _=new R["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:_,render:function(e){return e(Z)}}).$mount("#app")},6972:function(e,t){e.exports="data:image/png;base64,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"},"81d2":function(e,t,a){"use strict";var n=a("3a55"),o=a.n(n);o.a},"8a23":function(e,t,a){},b269:function(e,t,a){e.exports=a.p+"img/facebook.e92b99cb.png"},b495:function(e,t,a){e.exports=a.p+"img/instagramIcon.03f40b67.png"},c44e:function(e,t,a){e.exports=a.p+"img/newLogo.108bb71a.png"},d37a:function(e,t,a){"use strict";var n=a("eb78"),o=a.n(n);o.a},d97c:function(e,t,a){e.exports=a.p+"img/youtube.f0c8cab7.png"},eb78:function(e,t,a){}});
//# sourceMappingURL=app.ebbd537a.js.map
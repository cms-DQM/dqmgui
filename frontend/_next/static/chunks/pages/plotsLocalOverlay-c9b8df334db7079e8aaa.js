_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"M/Aa":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/plotsLocalOverlay",function(){return r("lOYY")}])},lOYY:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r("g4pe"),o=r.n(a),l=r("ODXe"),c=r("20a2"),i=r.n(c),s=r("mr32"),u=r("FUt6"),p=r("KQm4"),f=r("o0o1"),d=r.n(f),m=r("HaE+"),b=r("4+tb"),h=r.n(b),O=r("Rja7"),y=r("NSkH"),v=r("B/o2"),g=r("rePB"),j=r("vDqi"),_=r.n(j),w=r("+6GR");function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){Object(g.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=Object(n.useState)(null),l=o[0],c=o[1],i=Object(n.useState)(!1),s=i[0],u=i[1],p=Object(n.useRef)(null),f=Object(n.useState)([]),b=f[0],h=f[1];return Object(n.useEffect)((function(){var e;p&&(null===(e=p.current)||void 0===e||e.cancel())}),[]),Object(n.useEffect)((function(){var r=_.a.CancelToken;p.current=r.source();return a&&function(){var r=Object(m.a)(d.a.mark((function r(){var n,a,o,l,i,s,f,m;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u(!0);case 2:return r.prev=2,setTimeout(null===(n=p.current)||void 0===n?void 0:n.cancel,18e4),o=w.c.split("/"),l=o.indexOf("plotsLocalOverlay"),o.splice(l,1),i=o.join("/"),r.next=10,_.a.request(S({url:"".concat(i).concat("").concat(e),method:t.method||"get",cancelToken:null===(a=p.current)||void 0===a?void 0:a.token},t));case 10:s=r.sent,f=s.data,c(f),u(!1),r.next=22;break;case 16:r.prev=16,r.t0=r.catch(2),u(!1),h([r.t0.toString()]),_.a.isCancel(r.t0)&&(u(!1),h(["Request Timeout"])),null===(m=p.current)||void 0===m||m.cancel();case 22:case"end":return r.stop()}}),r,null,[[2,16]])})));return function(){return r.apply(this,arguments)}}()(),function(){return h([])}}),r),{data:l,isLoading:s,errors:b,cancelSource:p}},E=n.createElement,z=function(){var e=Object(m.a)(d.a.mark((function e(t,r,n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!document.getElementById(r)){e.next=5;break}return a=function(){JSROOT.cleanup&&JSROOT.cleanup(r)},e.next=4,a;case 4:JSROOT.draw("".concat(t).concat(r),JSROOT.parse(JSON.stringify(n)),"".concat(t));case 5:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),k=function(e){var t,r=e.params_for_api,a=e.id,o={};r.height=O.f[r.size].size.h,r.width=O.f[r.size].size.w;var l=[];r.overlaidSeparately&&(null===(t=r.overlaidSeparately)||void 0===t||t.plots.forEach(function(){var e=Object(m.a)(d.a.mark((function e(t){var n,a,o,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=r.run_number,a=r.dataset_name,o=t.folders_path,c=t.plot_name,i={run_number:n,dataset_name:a,folders_path:o,plot_name:c},l.push(i);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));var c={run_number:r.run_number,dataset_name:r.dataset_name,folders_path:r.folders_path,plot_name:r.plot_name};l.push(c);var i,s=l.map((function(e){return x(Object(y.b)(e),{},[e.plot_name,w.c]).data})),u=r.normalize?"hist":"nostack";h()(s).length===r.overlaidSeparately.plots.length+1&&(o=(i=JSROOT).CreateTHStack.apply(i,Object(p.a)(h()(s))));return n.useEffect((function(){z(u,a,o)}),[a,r.jsroot,s,r.dataset_name,r.run_number,r.normalize]),E("div",null,E(v.e,{id:"".concat(u).concat(a),width:r.width,height:r.height}),E(v.e,{id:"".concat(u).concat(a),width:r.width,height:r.height}))},D=r("3S7+"),R=r("iaY6"),C=n.createElement,L=function(){var e=Object(m.a)(d.a.mark((function e(t,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!document.getElementById(t)){e.next=9;break}return e.prev=1,e.next=4,JSROOT.cleanup(t);case 4:JSROOT.draw(t,JSROOT.parse(JSON.stringify(r)),"hist"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}(),T=function(e){var t,r=e.params_for_api,a=e.id,o=n.useRef(null),c=x(Object(y.b)(r),{},[r.plot_name,w.c]).data,i=n.useState(0),s=Object(l.a)(i,2),u=s[0],p=s[1],f=n.useState(!1),d=Object(l.a)(f,2),m=d[0],b=d[1],h=n.useRef(null);n.useRef(null);return n.useEffect((function(){o.current&&L("".concat(a),c)}),[c,a,o.current]),n.useEffect((function(){p(u+1),h.current&&u<3&&b(h.current.clientHeight>24)}),[h.current&&h.current.clientHeight]),C(D.a,{title:m?r.plot_name:""},C("div",{style:{width:r.width+8,height:r.height+24,margin:8,display:"flex",flexDirection:"column",background:"white"}},C("div",{ref:h,style:{background:R.a.colors.primary.light,paddingBottom:8,display:"flex"}},m?(null===(t=r.plot_name)||void 0===t?void 0:t.substring(0,30))+"...":r.plot_name),C("div",null,"      ",C(v.e,{ref:o,id:a,width:r.width,height:r.height}))))},I=n.createElement,H=function(e){var t=e.params_for_api,r=!!t.overlaidSeparately&&t.overlaidSeparately.plots.length>0,n=Object(u.f)();return I(r?k:T,{id:n,params_for_api:t})},N=r("9L/e"),q=r("AcXO"),J=r("oxPU"),G=n.createElement,B=function(e){var t,r=e.parameters,a=!!r.overlaidSeparately&&r.overlaidSeparately.plots.length>0?Object(q.g)(r):Object(J.b)(r),o=n.useState(!1),c=Object(l.a)(o,2),i=(c[0],c[1]),s=n.useState(0),u=Object(l.a)(s,2),p=u[0],f=u[1],d=n.useState(!1),m=Object(l.a)(d,2),b=m[0],h=m[1],O=n.useRef(null),y=n.useRef(null);n.useEffect((function(){f(p+1),O.current&&p<3&&h(O.current.clientHeight>24)}),[O.current&&O.current.clientHeight]);var v=w.c.split("/"),g=v.indexOf("plotsLocalOverlay");v.splice(g,1);var j=v.join("/");return G(D.a,{title:b?r.plot_name:""},G("div",{style:{width:r.width+8,height:r.height+24,margin:8,display:"flex",flexDirection:"column",background:"white"}},G("div",{ref:O,style:{background:R.a.colors.primary.light,paddingBottom:8,display:"flex"}},b?(null===(t=r.plot_name)||void 0===t?void 0:t.substring(0,30))+"...":r.plot_name),G("div",null,G(N.a,{ref:y,key:"".concat(j).concat(a),onLoad:function(){},retryTimes:3,setImageError:i,style:{display:"display",width:r.width,height:r.height},src:"".concat(j).concat("").concat(a),width:"auto",height:"auto"}))))},A=n.createElement;function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var F=function(e){var t=e.parameters,r=e.plot,a=n.useState(!1),o=Object(l.a)(a,2),c=(o[0],o[1]),i=n.useState(0),s=Object(l.a)(i,2),u=s[0],p=s[1],f=n.useState(!1),d=Object(l.a)(f,2),m=d[0],b=d[1],h=n.useRef(null),O=n.useRef(null),y=t.run_number,v=t.dataset_name,g=t.height,j=t.width,_=t.stats,P=t.error,S=r.folders_path,x=r.plot_name,E={run_number:y,dataset_name:v,folders_path:S,plot_name:x,height:g,width:j,error:P,stats:_},z=Object(J.b)(E);n.useEffect((function(){p(u+1),h.current&&u<3&&b(h.current.clientHeight>24)}),[h.current&&h.current.clientHeight]);var k=w.c.split("/"),C=k.indexOf("plotsLocalOverlay");k.splice(C,1);var L=k.join("/");return A(D.a,{title:m?x:""},A("div",{style:{width:t.width+8,height:t.height+24,margin:8,display:"flex",flexDirection:"column",background:"white"}},A("div",{ref:h,style:{background:R.a.colors.primary.light,paddingBottom:8,display:"flex"}},m?(null===x||void 0===x?void 0:x.substring(0,30))+"...":x),A("div",null,A(N.a,{ref:O,key:"".concat(L).concat(z),onLoad:function(){},retryTimes:3,setImageError:c,style:{display:"display",width:t.width,height:t.height},src:"".concat(L).concat("").concat(z),width:"auto",height:"auto"}))))},Y=function(e){var t=e.parameters,r=n.useState(!1),a=Object(l.a)(r,2),o=(a[0],a[1]),c=n.useState(0),i=Object(l.a)(c,2),s=i[0],u=i[1],p=n.useState(!1),f=Object(l.a)(p,2),d=f[0],m=f[1],b=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){Object(g.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t),h=b.overlaidSeparately?b.overlaidSeparately.plots:[],O=b.run_number,y=b.dataset_name,v=b.folders_path,j=b.plot_name,_={run_number:O,dataset_name:y,folders_path:v,plot_name:j,height:b.height,width:b.width,stats:b.stats,error:b.error},P=Object(J.b)(_),S="".concat(w.c).concat(P),x=n.useRef(null);return n.useEffect((function(){u(s+1),x.current&&s<3&&m(x.current.clientHeight>24)}),[x.current&&x.current.clientHeight]),A("div",{style:{display:"flex",flexWrap:"wrap",overflow:"scroll",height:"100%"}},A(n.Fragment,null,A(D.a,{title:d?j:""},A("div",{style:{width:t.width+8,height:t.height+24,margin:8,display:"flex",flexDirection:"column",background:"white"}},A("div",{ref:x,style:{background:R.a.colors.primary.light,paddingBottom:8,display:"flex"}},d?(null===j||void 0===j?void 0:j.substring(0,30))+"...":j),A("div",null,A(N.a,{key:S,retryTimes:3,setImageError:o,style:{display:"display",width:t.width,height:t.height},src:S,width:"auto",height:"auto"})))),h.map((function(e){return A(F,{plot:e,parameters:b})}))))},U=n.createElement,V=function(e){var t=e.parameters,r=!!(!!t.overlaidSeparately&&t.overlaidSeparately.plots.length>0)&&"onSide"===t.overlaidSeparately.ref;return U(r?Y:B,{parameters:t})},W=n.createElement,X=function(e){var t=e.parameters,r=e.plotsAreaWidth;if("fill"===t.size){var n=t.width/t.height,a=Math.floor(r/n),o=r;t.height=a,t.width=o}return t.jsroot?W(H,{params_for_api:t}):W(V,{parameters:t})},Q=r("kPKH"),Z=r("5rEg"),K=r("wx14"),$=r("TSYQ"),ee=r.n($),te=r("Zm9Q"),re=r("H84U");function ne(e){var t=e.className,r=e.direction,a=e.index,o=e.marginDirection,l=e.children,c=e.split,i=e.wrap,s=n.useContext(oe),u=s.horizontalSize,p=s.verticalSize,f=s.latestIndex,d={};return"vertical"===r?a<f&&(d={marginBottom:u/(c?2:1)}):d=Object(K.a)(Object(K.a)({},a<f&&Object(g.a)({},o,u/(c?2:1))),i&&{paddingBottom:p}),null===l||void 0===l?null:n.createElement(n.Fragment,null,n.createElement("div",{className:t,style:d},l),a<f&&c&&n.createElement("span",{className:"".concat(t,"-split"),style:d},c))}var ae=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},oe=n.createContext({latestIndex:0,horizontalSize:0,verticalSize:0}),le={small:8,middle:16,large:24};var ce=function(e){var t,r=n.useContext(re.b),a=r.getPrefixCls,o=r.space,c=r.direction,i=e.size,s=void 0===i?(null===o||void 0===o?void 0:o.size)||"small":i,u=e.align,p=e.className,f=e.children,d=e.direction,m=void 0===d?"horizontal":d,b=e.prefixCls,h=e.split,O=e.style,y=e.wrap,v=void 0!==y&&y,j=ae(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),_=n.useMemo((function(){return(Array.isArray(s)?s:[s,s]).map((function(e){return function(e){return"string"===typeof e?le[e]:e||0}(e)}))}),[s]),w=Object(l.a)(_,2),P=w[0],S=w[1],x=Object(te.a)(f,{keepEmpty:!0});if(0===x.length)return null;var E=void 0===u&&"horizontal"===m?"center":u,z=a("space",b),k=ee()(z,"".concat(z,"-").concat(m),(t={},Object(g.a)(t,"".concat(z,"-rtl"),"rtl"===c),Object(g.a)(t,"".concat(z,"-align-").concat(E),E),t),p),D="".concat(z,"-item"),R="rtl"===c?"marginLeft":"marginRight",C=0,L=x.map((function(e,t){return null!==e&&void 0!==e&&(C=t),n.createElement(ne,{className:D,key:"".concat(D,"-").concat(t),direction:m,index:t,marginDirection:R,split:h,wrap:v},e)}));return n.createElement("div",Object(K.a)({className:k,style:Object(K.a)(Object(K.a)({},v&&{flexWrap:"wrap",marginBottom:-S}),O)},j),n.createElement(oe.Provider,{value:{horizontalSize:P,verticalSize:S,latestIndex:C}},L))},ie=r("2/Rp"),se=r("ZNjI");function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var pe=function(e,t){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(r),!0).forEach((function(t){Object(g.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);return r.plot_name=t,r},fe=n.createElement,de=function(e){var t=e.lastSelectedPlot,r=e.setSelectedPlots,a=e.selectedPlots,o=e.query,l=e.overlaidGlobally,c=[{title:"Run",dataIndex:"run_number"},{title:"Dataset name",dataIndex:"dataset_name"},{title:"Path",dataIndex:"folders_path"},{title:"Plot Name",dataIndex:"plot_name"},{title:"Label",render:function(e){if(e.folders_path&&e.plot_name)return fe(Z.a,{id:e.folders_path+e.plot_name,defaultValue:e.label,name:e.folders_path+e.plot_name,placeholder:"label",value:e.label,onChange:function(t){var n=t.target.value,o=function(e,t,r){var n=Object(p.a)(t),a=n.indexOf(e);return n[a].label=encodeURI(r),n}(e,a,encodeURI(n));r(o)}})}},{title:"Action",key:"action",render:function(e){var t=l.findIndex((function(t){return t.plot_name===e.plot_name&&t.folders_path===e.folders_path&&t.dataset_name===e.dataset_name&&t.run_number===e.run_number}))>-1;return fe(ce,{size:"small"},fe(D.a,{title:t?"Plot was overlaid before (globally or by layout configuration) selecting the plot.":""},fe(ie.a,{type:"link",disabled:t,onClick:function(){r(function(e,t){var r=Object(p.a)(t),n=r.indexOf(e);return r.splice(n,1),r}(e,a))}},"Delete")))}}];return n.useEffect((function(){if(o.overlayPlots){var e=o.overlayPlots.split("&").map((function(e){var t=e.split("reflabel="),r=2===t.length?t[1]:"",n=t[0].split("/"),a=n.pop();return{folders_path:h()(n).join("/"),plot_name:a,label:r,run_number:o.run_number,dataset_name:o.dataset_name}}));r(e)}}),[]),n.useEffect((function(){if(t&&t.plot_name){var e=Object(p.a)(a),n=(o=t,-1===(l=e).indexOf(o)&&l.push(o),l);r(n)}var o,l}),[t]),n.useEffect((function(){var e=l.filter((function(e){if(!a.includes(e))return e})).concat(a);e.length>0&&r(e)}),[o.overlaidGlobally]),a.length>0?fe(se.i,{pagination:{defaultPageSize:1,pageSizeOptions:["1","2","3","4","5"],showSizeChanger:!0},columns:c,dataSource:a.reverse()}):fe(n.Fragment,null)},me=r("8L4l"),be=r("9ZV4"),he=r("Nwzp"),Oe=r("Qyje"),ye=r.n(Oe);function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(r),!0).forEach((function(t){Object(g.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var je=function(){var e=Object(m.a)(d.a.mark((function e(t,r){var n,a,o,l,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ge({},t),e.next=3,delete n.overlayPlots;case 3:return e.next=5,delete n.overlaidSeparately;case 5:return e.next=7,delete n.customizationParams;case 7:return a=ge({},t.customise),e.next=10,delete n.overlaidGlobally;case 10:o=ge(ge(ge({},n),a),{},{overlaidGlobally:r.query.overlaidGlobally}),l=ye.a.stringify(o,{}),c="/"!==w.d?"".concat(w.d,"?").concat(l):void 0,i.a.push({pathname:r.pathname,query:o},c);case 14:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),_e=function(){var e=Object(m.a)(d.a.mark((function e(t,r,n){var a,o,l,c,s,u,p,f;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ge({},r),o=r.overlaidSeparately,l=o.ref,c={ref:l},e.next=6,delete a.customise;case 6:return e.next=8,delete a.overlaidSeparately;case 8:return e.next=10,delete a.customizationParams;case 10:return e.next=12,delete a.overlaidGlobally;case 12:s=ge({},r.customise),u=ge(ge(ge(ge({},a),c),s),{},{overlaidGlobally:n.query.overlaidGlobally,overlayPlots:t}),p=ye.a.stringify(u,{}),f=""!==w.d?"".concat(w.d,"?").concat(p):void 0,i.a.push({pathname:n.pathname,query:u},f);case 17:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),we=function(){var e=Object(m.a)(d.a.mark((function e(t,r,n){var a,o,l,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ge({},n),e.next=3,delete a.customizationParams;case 3:o=ge(ge({},r.query),{},{search:t}),l=ye.a.stringify(o,{}),c="/"!==w.d?"".concat(w.d,"?").concat(l):void 0,i.a.push({pathname:r.pathname,query:o},c);case 7:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(m.a)(d.a.mark((function e(t,r,n){var a,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=ge(ge({},t.query),r),o=ye.a.stringify(a,{}),l="/"!==w.d?"".concat(w.d,"?").concat(o):void 0,i.a.push({pathname:t.pathname,query:a},l);case 4:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),Se=n.createElement,xe=function(e){var t=e.plotNames,r=e.setLastSelectedPlot,n=e.selectedPlots,a=e.lastSelectedPlot,o=e.dataset_name,l=e.run_number,c=t.map((function(e,t){return{key:t,plot_name:e}})),i=w.c.split("/"),s=i.indexOf("plotsLocalOverlay");i.splice(s,1);var u=i.join("/"),p=[{title:"Plot name",dataIndex:"plot_name",key:"plot_name",render:function(e){var t=a.folders_path,o=e,l=n.findIndex((function(e){return e.folders_path===t&&e.plot_name===o}))>-1,c=n.length>=8,i=l||c,s=c?"Cannot be selected more than 8 plots!":l?"This plot is already selected":"";return Se(D.a,{title:s},Se(ie.a,{disabled:i,onClick:function(){return r(pe(a,e))}},e))},sorter:function(e,t){return e.plot_name<t.plot_name?-1:e.plot_name>t.plot_name?1:0},sortDirections:["ascend"]},{title:"Action",dataIndex:"plot_name",key:"plot_name",render:function(e){var t={run_number:l,dataset_name:o,folders_path:a.folders_path,plot_name:encodeURIComponent(e),height:O.f.small.size.h,width:O.f.small.size.w},r=Object(J.b)(t);return Se(D.a,{title:Se("img",{src:"".concat(u).concat("").concat(r)})},Se(ce,{size:"small"},Se("a",null,"Show plot")))}}];return Se(se.i,{columns:p,dataSource:c})},Ee=r("TjyM"),ze=r("0XKZ"),ke=n.createElement;function De(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?De(Object(r),!0).forEach((function(t){Object(g.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):De(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ce=function(e){var t=e.me_count,r=e.children;return ke(ze.g,{count:t},r)},Le=function(e){var t=e.setParameters,r=e.parameters,a=e.referenceHeight,o=n.useState({dataset_name:"",run_number:"",folders_path:"",plot_name:""}),i=Object(l.a)(o,2),s=i[0],u=i[1],f=n.useState([]),d=Object(l.a)(f,2),m=d[0],b=d[1],O=n.useState(""),y=Object(l.a)(O,2),g=y[0],j=y[1],_=n.useState([]),P=Object(l.a)(_,2),S=P[0],E=P[1],z=n.useRef(null),k=n.useRef(null),D=n.useState(0),R=Object(l.a)(D,2),C=R[0],L=R[1],T=Object(c.useRouter)(),I=T.query,H={dataset_name:I.dataset_name,run_number:I.run_number,folders_path:s.folders_path,plot_search:I.search},N=Object(be.b)(H),q=x(N,{},[w.c,s.folders_path,r.run_number,I.search,r.plot_search,r.dataset_name,r.plot_name]);n.useEffect((function(){var e=Object(p.a)(m),t=m.indexOf(g);if(t>=0){var r=e.splice(0,t+1);b(r);var n=r.join("/");u({folders_path:n,plot_name:""})}else{e.push(g);var a=h()(e)?h()(e):[];b(a);var o=e.join("/");0===a.length&&u({dataset_name:"",run_number:"",folders_path:"",plot_name:""}),u({dataset_name:I.dataset_name,run_number:I.run_number,folders_path:o,plot_name:""})}}),[g]),n.useEffect((function(){var e=Re({},r),n={overlaidSeparately:{plots:S}},a=Re(Re({},e),n);t(a),S.map((function(e){return e.label?[e.folders_path,e.plot_name,"reflabel="+e.label].join("/"):[e.folders_path,e.plot_name].join("/")})).join("&").length>0?(e.overlaidSeparately=Re(Re({},r.overlaidSeparately),{},{plots:S}),t(e)):(e.overlaidSeparately=Re(Re({},r.overlaidSeparately),{},{plots:[]}),t(e))}),[S.length]);var J=r.overlaidSeparately.plots.map((function(e){return e.label})).join(",");n.useEffect((function(){var e=S.map((function(e){return e.label?[e.folders_path,e.plot_name,"reflabel="+e.label].join("/"):[e.folders_path,e.plot_name].join("/")})).join("&");e.length>0?_e(e,r,T):je(r,T)}),[r.size,J,r.overlaidSeparately.plots,r.overlaidSeparately&&r.overlaidSeparately.ref,r.jsroot,r.stats,r.normalize,r.error]),n.useEffect((function(){k.current&&z.current?L(k.current.clientHeight+z.current.clientHeight):L(0)}),[z.current&&z.current.clientHeight,k.current&&k.current.clientHeight,k.current,a]);var G=q.data,B=function(e){var t=[],r=[];return e.forEach((function(e){t.push({subdir:e.subdir,me_count:e.me_count}),r.push(e.name)})),{directories:h()(t).sort((function(e,t){return e.subdir<t.subdir?-1:e.subdir>t.subdir?1:0})),plots:h()(r)}}(G?G.data:[]),A=B.directories,M=B.plots;return ke(se.h,{gutter:16,smaller:a.toString()},ke(Q.a,{style:{padding:8},ref:k},ke(me.a,{folder_path:s.folders_path,changeFolderPathByBreadcrumb:function(e){return(t=e,function(e,r){var n=t.folder_path.split("/"),a=h()(n)?h()(n):[];e(a),a.length>0?r(a[a.length-1]):r("")})(b,j);var t}})),ke(se.a,{ref:z},ke(de,{query:I,lastSelectedPlot:s,overlaidGlobally:r.overlaidGlobally,selectedPlots:S,setSelectedPlots:E})),ke(se.d,{smaller:C.toString()},!q.isLoading&&ke(se.a,null,A.sort().map((function(e){return ke(Q.a,{span:4,key:e.subdir},ke(v.b,null,ke(ze.c,{hover:"true",display:"flex",space:"1",alignitems:"center",onClick:function(){return j(e.subdir)}},ke(Ce,{me_count:e.me_count?e.me_count:0},ke(v.d,null)),ke(v.i,null,e.subdir))))}))),q.isLoading&&ke(se.f,null,ke(he.k,null)),!q.isLoading&&M.length>0&&ke(xe,{plotNames:M,setLastSelectedPlot:u,lastSelectedPlot:s,selectedPlots:S,dataset_name:I.dataset_name,run_number:I.run_number}),0===A.length&&0===M.length&&ke(se.c,null,ke(Ee.a,null))))},Te=r("tsqr"),Ie=r("Sdc0"),He=n.createElement;function Ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var qe=function(e,t){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(r),!0).forEach((function(t){Object(g.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t);return r.jsroot=e,r},Je=function(e){var t=e.setReference,r=e.reference,n=e.disabled;return He(Ie.a,{disabled:n,style:{width:"fit-content"},checkedChildren:"JSROOT enabled",unCheckedChildren:"JSROOT disabled",checked:r.jsroot,onChange:function(e){t(qe(e,r))}})},Ge=r("2fM7"),Be=r("sdz8"),Ae=n.createElement;function Me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Fe=Ge.a.Option,Ye=function(e,t){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Me(Object(r),!0).forEach((function(t){Object(g.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Me(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t);return r.ref=e,r},Ue=function(e){var t=e.setReference,r=e.reference;return Ae(Be.j,{onChange:function(e){return t(Ye(e,r))},defaultValue:r.ref},O.c.map((function(e){return Ae(Fe,{value:e.value,key:e.value},e.label)})))},Ve=n.createElement;function We(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Xe=Ge.a.Option,Qe=function(e,t){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?We(Object(r),!0).forEach((function(t){Object(g.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):We(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t);return r.size=e,r},Ze=function(e){var t=e.setReference,r=e.reference,n=Object.keys(O.f);return Ve(Be.j,{onChange:function(e){return t(Qe(e,r))},defaultValue:r.size},n.map((function(e){return Ve(Xe,{value:e,key:e},O.f[e].label)})))},Ke=r("y65n"),$e=r("w/oY"),et=n.createElement;function tt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function rt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?tt(Object(r),!0).forEach((function(t){Object(g.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var nt=function(e){var t,r=e.router,a=e.parameters,o=e.setParameters,c=r.query,i=a.size,s=c.overlayPosition?c.overlayPosition:"overlay",u=!!c.jsroot&&"true"===c.jsroot,p=n.useState(!1),f=Object(l.a)(p,2),b=f[0],y=f[1],v=n.useState({}),j=Object(l.a)(v,2),_=j[0],w=j[1],P=Object.keys(a.customise?a.customise:{}).length>0,S=[{label:"Normalize",value:!c.normalize||"true"===c.normalize},{label:"Stats",value:!c.stats||"true"===c.stats},{label:"Error",value:!!c.error&&"true"===c.error}],x=n.useState((t={size:i,jsroot:u,ref:s},Object(g.a)(t,S[0].label.toLocaleLowerCase(),S[0].value),Object(g.a)(t,S[1].label.toLocaleLowerCase(),S[1].value),Object(g.a)(t,S[2].label.toLocaleLowerCase(),S[2].value),t)),E=Object(l.a)(x,2),z=E[0],k=E[1];return n.useEffect((function(){var e=rt({},a);e.height=O.f[z.size].size.h,e.width=O.f[z.size].size.w,e.size=z.size,e.overlaidSeparately&&(e.overlaidSeparately.ref=z.ref),e.jsroot=z.jsroot,e.size=z.size,e.stats=z.stats,e.normalize=z.normalize,e.error=z.error,e.customise=_;var t=rt(rt({},e),{},{overlaidSeparately:rt({},e.overlaidSeparately)});o(t)}),[z.size,z.jsroot,z.ref,z[S[0].label.toLocaleLowerCase()],z[S[1].label.toLocaleLowerCase()],z[S[2].label.toLocaleLowerCase()],_,c.ref,c.normalize,c.stats,c.error,c.jsroot,c.size]),n.useEffect((function(){var e={xtype:c.xtype,xmin:c.xmin,xmax:c.xmax,ytype:c.ytype,ymin:c.ymin,ymax:c.ymax,ztype:c.ztype,zmin:c.zmin,zmax:c.zmax,drawopts:c.drawopts,withref:c.withref};w(h()(e))}),[]),n.useEffect((function(){P&&Te.b.info("Plot is already customised")}),[P]),et(se.m,{direction:"column"},et($e.a,{plot_name:a.plot_name,open:b,customizationParams:_,onCancel:function(){return y(!1)},setCustomisationParams:function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(t),e.next=3,Pe(r,t,a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),et(se.m,{direction:"row"},et(se.b,{space:"2"},et(Ze,{setReference:k,reference:z})),et(se.b,{space:"2"},et(Ue,{setReference:k,reference:z})),et(se.b,{space:"2"},et(Je,{disabled:!!c.overlayPlots,setReference:k,reference:z})),et(se.b,{space:"2"},et(D.a,{title:P?"This plot is customised!":""},et(se.g,{isPlotCustomized:P.toString(),onClick:function(){return y(!b)}},"Customize")))),et(se.m,{direction:"row"},S.map((function(e){return et(se.b,{space:"2",key:e.label},et(Ke.a,{option:e,setReference:k,reference:z}))}))))},at=r("4Hbs"),ot=r("Ol7k"),lt=r("zbpD"),ct=r.n(lt),it=n.createElement;function st(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var ut=function(e){var t=e.parameters,r=e.setParameters,a=Object(c.useRouter)(),o=a.query,i=n.useState(o.plot_search),s=Object(l.a)(i,2),u=s[0],p=s[1];return n.useEffect((function(){we(u||void 0,a,t)}),[u]),n.useEffect((function(){var e=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?st(Object(r),!0).forEach((function(t){Object(g.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):st(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t);e.search=o.search,r(e)}),[o.search]),n.useMemo((function(){return it(ct.a,{onChange:function(e){return p(e.target.value)}},it(ze.p,null,it(ze.u,{defaultValue:o.search,id:"plot_search",placeholder:"Enter plot name"})))}),[u])},pt=n.createElement,ft=function(){var e=Object(c.useRouter)(),t=e.query,r=t.run_number,a=t.dataset_name,o=t.folders_path,i=t.plot_name,u=(t.size,n.useRef(null)),p=n.useRef(null),f=n.useState(),d=Object(l.a)(f,2),m=d[0],b=d[1],h=n.useState(0),y=Object(l.a)(h,2),v=y[0],g=y[1],j=n.useState(0),_=Object(l.a)(j,2),w=_[0],P=_[1];return n.useEffect((function(){u.current&&g(u.current.clientHeight)}),[u.current]),n.useEffect((function(){p.current&&P(p.current.clientWidth)}),[p.current]),n.useEffect((function(){if(Object.keys(t).length>0){var e=t.overlaidGlobally?t.overlaidGlobally.split("&"):[],n=e.map((function(t){if(e){var r=t.split("/"),n=r.pop(),a=r.pop(),o=r.shift(),l=r.splice(3).join("/");return{run_number:o,dataset_name:"/"+r.join("/"),folders_path:l,plot_name:a,label:n}}})),l=t.ref?t.ref:"overlay",c={run_number:r,dataset_name:a,folders_path:o,plot_name:i,size:t.size?t.size:"large",jsroot:!!t.jsroot&&"true"===t.jsroot,stats:!!t.stats&&"true"===t.stats,normalize:!t.normalize||"true"===t.normalize,overlaidSeparately:{plots:[],ref:l},overlaidGlobally:n,height:O.f[t.size?t.size:"large"].size.h,width:O.f[t.size?t.size:"large"].size.w};b(c)}}),[t.plot_name]),m?pt(ot.a,null,pt(at.b,{justifyContent:"space-between"},pt(n.Fragment,null,pt(at.e,null,pt(at.f,null,pt(at.d,{src:"../images/CMSlogo_white_red_nolabel_1024_May2014.png"}))),pt(se.l,null,pt(se.k,null,pt(s.a,{color:"geekblue"},"Run :",m.run_number)),pt(se.k,null,pt(s.a,{color:"geekblue"},"Dataset: ",m.dataset_name)),pt(se.k,null,pt(s.a,{color:"geekblue"}," Folders path: ",m.folders_path)),pt(se.k,null,pt(s.a,{color:"geekblue"},"Plot name:  ",m.plot_name)),pt(ut,{parameters:m,setParameters:b})))),pt(se.j,null,pt(se.m,{direction:"row"},pt(se.e,{ref:p,proportion:"50%",border:(!0).toString()},pt(X,{plotsAreaWidth:w,parameters:m})),pt(se.e,{proportion:"50%"},pt("div",{ref:u},pt(nt,{parameters:m,router:e,setParameters:b})),pt(Le,{referenceHeight:v,parameters:m,setParameters:b}))))):pt(n.Fragment,null)},dt=n.createElement;t.default=function(){return dt("div",null,dt(o.a,null,dt("script",{crossOrigin:"anonymous",type:"text/javascript",src:"./jsroot-5.8.0/scripts/JSRootCore.js?2d&hist&more2d"})),dt(ft,null))}}},[["M/Aa",0,2,4,1,3,5]]]);
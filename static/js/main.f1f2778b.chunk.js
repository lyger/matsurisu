(this.webpackJsonpmatsurisu_mania=this.webpackJsonpmatsurisu_mania||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),o=(a(10),a(1)),s=a(2);function l(e){var t=e.y,a=e.setY,c=Object(n.useState)(!1),i=Object(o.a)(c,2),s=i[0],l=i[1],u=Object(n.useState)(0),f=Object(o.a)(u,2),m=f[0],h=f[1],E=function(){return l(!1)};return r.a.createElement("div",{className:"scroller",onPointerDown:function(e){var t=e.clientY;l(!0),h(t)},onPointerLeave:E,onPointerCancel:E,onPointerUp:E,onPointerMove:function(e){var n=e.clientY;s&&(a(t+(n-m)),h(n))},onWheel:function(e){var n=e.deltaY;return a(t-n/2)}})}var u={width:625,height:0,y:0};function f(e,t){var a=t.type,n=t.value;switch(a){case"SET_HEIGHT":return Object(s.a)(Object(s.a)({},e),{},{height:n});case"SET_WIDTH":return Object(s.a)(Object(s.a)({},e),{},{width:n});case"SET_Y":return Object(s.a)(Object(s.a)({},e),{},{y:Math.max(Math.min(n,0),-1e4)});default:return e}}var m=Object(n.createContext)(0),h=Object(n.createContext)(u);function E(e){var t=e.children,a=Object(n.useReducer)(f,u),c=Object(o.a)(a,2),i=c[0],s=c[1],E=Object(n.useState)(0),d=Object(o.a)(E,2),v=d[0],b=d[1],p=Object(n.useRef)(null);Object(n.useEffect)((function(){var e=setInterval((function(){return b(v+1)}),100);return function(){return clearInterval(e)}}),[v,b]);var j=Object(n.useCallback)((function(){if(p.current){var e=p.current.getBoundingClientRect();s({type:"SET_HEIGHT",value:e.height}),s({type:"SET_WIDTH",value:e.width})}}),[p,s]);return Object(n.useEffect)((function(){return window.addEventListener("resize",j),function(){return window.removeEventListener("resize",j)}}),[j]),Object(n.useLayoutEffect)(j,[j]),r.a.createElement(m.Provider,{value:v},r.a.createElement(h.Provider,{value:i},r.a.createElement(l,{y:i.y,setY:function(e){return s({type:"SET_Y",value:e})}}),r.a.createElement("div",{className:"main",ref:p},t)))}function d(e){var t=e.position,a=e.offset,c=e.stay,i=e.factor,s=e.children,l=Object(n.useRef)(null),u=Object(n.useContext)(h),f=Object(n.useState)(0),m=Object(o.a)(f,2),E=m[0],d=m[1];t=t||0,a=a||0,c=c||200;var v=(u.y+t)*i,b=Math.max(Math.min(v,0),v-c*i)+u.height/2+a,p=Math.floor(100*i),j=b>u.height||b+2*E<0;return Object(n.useLayoutEffect)((function(){l.current&&d(l.current.getBoundingClientRect().height)}),[l,d,u]),j?null:r.a.createElement("div",{ref:l,className:"parallax",style:{left:0,top:b,zIndex:p}},s)}function v(e){var t=e.control,a=e.frameDur,n=e.srcs,c=e.alt,i=e.style,o=function(e,t,a){return t=t||1,Math.floor(e/t)%a}(t,a,n.length);return r.a.createElement("img",{alt:c,style:i,src:n[o]})}function b(e){var t=e.frameDur,a=e.srcs,c=e.alt,i=e.style,o=Object(n.useContext)(m);return r.a.createElement(v,Object.assign({control:o},{frameDur:t,srcs:a,alt:c,style:i}))}function p(e){var t=e.name,a=e.x,n=e.y,c=e.center,i=e.width,o={};return o=c?{display:"block",margin:"0 auto"}:{display:"inline-block",position:"relative",marginLeft:a||0,marginTop:n||0},i&&(o=Object(s.a)(Object(s.a)({},o),{},{width:i,height:"auto"})),r.a.createElement(b,{alt:"matsurisu",style:o,frameDur:5,srcs:["/matsurisu/static/img/risu/".concat(t,"1.png"),"/matsurisu/static/img/risu/".concat(t,"2.png")]})}function j(e){var t=e.children,a=e.start,c=e.end,i=e.fadeDur,s=e.offset;s=s||0,i=i||300;var l=Object(n.useState)(0),u=Object(o.a)(l,2),f=(u[0],u[1]),m=Object(n.useRef)(null),E=Object(n.useContext)(h),d=-E.y,v=d>a-i&&d<c+i,b=1-(Math.max(Math.min((a-d)/i,1),0)+Math.max(Math.min((d-c)/i,1),0)),p=E.height/2+s;return Object(n.useLayoutEffect)((function(){m.current&&f(m.current.getBoundingClientRect().height)}),[m,f,E]),v?r.a.createElement("div",{ref:m,className:"fade",style:{top:p,opacity:b}},t):null}var O=function(){return r.a.createElement(E,null,r.a.createElement(d,{factor:1,position:0,offset:-50},r.a.createElement(p,{name:"sit",width:200,center:!0})),r.a.createElement(j,{start:0,end:0,offset:50},r.a.createElement("p",{className:"title"},"\u307e\u3064\u308a\u3059")),r.a.createElement(d,{factor:1,position:800,offset:-50},r.a.createElement(p,{name:"cheer",width:200,center:!0})),r.a.createElement(j,{start:500,end:800,offset:50},r.a.createElement("p",{className:"title"},"\u305d\u308c\u306f\u3001\u590f\u8272\u307e\u3064\u308a\u3092\u611b\u3059\u308b\u3082\u306e")),r.a.createElement(d,{factor:1,position:1600,offset:-50},r.a.createElement(p,{name:"wave",width:180,center:!0})),r.a.createElement(j,{start:1500,end:1600,offset:50},r.a.createElement("p",{className:"title"},"\u3044\u308d\u3093\u306a\u307e\u3064\u308a\u3059\u304c\u3044\u308b")),r.a.createElement(d,{factor:1.2,position:2400,offset:0},r.a.createElement(p,{name:"art",width:200,x:50})),r.a.createElement(d,{factor:.8,position:2400,offset:0},r.a.createElement("p",{className:"title-right"},"\u7d75\u304c\u63cf\u3051\u308b\u307e\u3064\u308a\u3059")),r.a.createElement(d,{factor:1.2,position:3200,offset:0},r.a.createElement(p,{name:"music",width:200,x:400})),r.a.createElement(d,{factor:.8,position:3200,offset:0},r.a.createElement("p",{className:"title-left"},"\u97f3\u697d\u304c\u3067\u304d\u308b\u307e\u3064\u308a\u3059")),r.a.createElement(d,{factor:1.2,position:4e3,offset:-50},r.a.createElement(p,{name:"pc",width:200,center:!0})),r.a.createElement(d,{factor:.8,position:4e3,offset:50},r.a.createElement("p",{className:"title"},"\u898b\u3066\u308b\u3060\u3051\u306e\u307e\u3064\u308a\u3059\u3082\u3044\u308b")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.f1f2778b.chunk.js.map
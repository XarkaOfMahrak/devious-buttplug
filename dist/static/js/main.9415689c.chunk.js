(this["webpackJsonpbuttplug-type"]=this["webpackJsonpbuttplug-type"]||[]).push([[0],{68:function(e,t,n){e.exports=n(76)},73:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(42),o=n.n(r),u=(n(73),n(1)),i=n(2),l=n.n(i),s=n(4),f=n(9);n(75);var b=n(40),p=n(41);var m=function(e){var t=e.on,n=e.device,a=e.level;return Object(c.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("startVibrate()"),e.next=3,n.SendVibrateCmd(a);case 3:console.log("startVibrate() over");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("stopVibrate()"),e.next=3,n.SendStopDeviceCmd();case 3:console.log("stopVibrate() over");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("vibrateEffect: ".concat(t,", ").concat(a)),t&&a>0?function(){e.apply(this,arguments)}():function(){c.apply(this,arguments)}()}),[t,n,a]),null},v=function(e){return b.a().clamp(!0).domain([0,e]).range([0,1])};function d(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){a&&setTimeout((function(){return r(!1)}),e)}),[a,e]),[a,r.bind(!0)]}var O=function(e){var t,n=e.device,r=e.line,o=e.times,i=Object(c.useState)(0),l=Object(u.a)(i,2),s=l[0],f=l[1],O=Object(c.useState)(""),h=Object(u.a)(O,2),j=h[0],E=h[1],g=d(1e3),w=Object(u.a)(g,2),S=w[0],C=w[1],k=d(1e3),y=Object(u.a)(k,2),x=y[0],B=y[1],V=function(e){var t=Object(c.useState)(null),n=Object(u.a)(t,2),r=n[0],o=n[1],i=Object(c.useState)(!1),l=Object(u.a)(i,2),s=l[0],f=l[1],b=a.a.useRef(null);return Object(c.useEffect)((function(){s||(b.current&&clearTimeout(b.current),b.current=setTimeout((function(){return f(!0)}),e))}),[r,s,e]),[s,function(){f(!1),o(Date.now())}]}(3e3),F=Object(u.a)(V,2),W=F[0],D=F[1];return Object(c.useEffect)((function(){W&&(f(0),E(""),B(!0),D())}),[W,B,D]),a.a.createElement("div",{style:{color:"#FFF",height:"100vh",backgroundColor:(t=o,b.b(p.a).domain([0,t]))(s)}},a.a.createElement("section",null,a.a.createElement("label",{htmlFor:"line"},a.a.createElement("strong",null,j),a.a.createElement("i",null,r.slice(j.length)))),a.a.createElement("section",null,a.a.createElement("input",{type:"text",onChange:function(e){return function(e){D(),r===e?(f(s+1),E("")):r.startsWith(e)?E(e):(f(0),E(""),C(!0))}(e.target.value)},value:j})),a.a.createElement("section",null,s," / ",o),S&&a.a.createElement("h2",null,"WRONG"),x&&a.a.createElement("h2",null,"EXPIRED"),a.a.createElement(m,{device:n,level:v(o)(s),on:!0}))};function h(){var e=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),o=Object(u.a)(r,2),i=o[0],b=o[1],p=Object(c.useState)(!1),m=Object(u.a)(p,2),v=m[0],d=m[1];return Object(c.useEffect)((function(){if(!n){var e=new f.ButtplugClient("Cammy");e.addListener("deviceadded",(function(e){b(e),d(!0)})),a(e)}}),[n,i,v]),Object(c.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new f.ButtplugEmbeddedClientConnector,e.next=4,n.Connect(t);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return");case 10:return e.next=12,n.StartScanning();case 12:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}n&&!v&&function(){e.apply(this,arguments)}()}),[n,v]),{client:n,device:i,isConnected:v}}(),t=e.device;return e.isConnected?a.a.createElement(O,{device:t,line:"I like cock a lot",times:10}):a.a.createElement("h1",null,"Not Connected")}var j=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return n?a.a.createElement(h,null):a.a.createElement("button",{onClick:function(){return r(!0)}},"Click Me")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t){e.exports=Buttplug}},[[68,1,2]]]);
//# sourceMappingURL=main.9415689c.chunk.js.map
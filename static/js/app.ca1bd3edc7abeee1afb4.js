webpackJsonp([0],[,,function(t,e,n){"use strict";var o=n(0),i=n(14),a=n(11),r=n.n(a),c=n(10),u=n.n(c),s=n(7);n.n(s);o.default.use(i.a),o.default.use(u.a),e.a=new i.a({routes:[{path:"/",name:"Home",component:r.a}]})},function(t,e,n){function o(t){n(8)}var i=n(1)(n(4),n(12),o,null,null);t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home",data:function(){return{}},mounted:function(){this.init()},watch:{},methods:{init:function(){function t(){for(a.clearRect(0,0,c,u),o=[{x:0,y:.7*u+s},{x:0,y:.7*u-s}];o[1].x<c+s;)e(o[0],o[1])}function e(t,e){a.beginPath(),a.moveTo(t.x,t.y),a.lineTo(e.x,e.y);var i=e.x+(2*v()-.25)*s,r=n(e.y);a.lineTo(i,r),a.closePath(),l-=f/-50,a.fillStyle="#"+(127*p(l)+128<<16|127*p(l+f/3)+128<<8|127*p(l+f/3*2)+128).toString(16),a.fill(),o[0]=o[1],o[1]={x:i,y:r}}function n(t){var e=t+(2*v()-1.1)*s;return e>u||e<0?n(t):e}document.addEventListener("touchmove",function(t){t.preventDefault()});var o,i=document.getElementsByTagName("canvas")[0],a=i.getContext("2d"),r=window.devicePixelRatio||1,c=window.innerWidth,u=window.innerHeight,s=90,d=Math,l=0,f=2*d.PI,p=d.cos,v=d.random;i.width=c*r,i.height=u*r,a.scale(r,r),a.globalAlpha=.6,document.onclick=t,document.ontouchstart=t,t()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=n(3),a=n.n(i),r=n(2);o.default.config.productionTip=!1,new o.default({el:"#app",router:r.a,template:"<App/>",components:{App:a.a}})},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){function o(t){n(9)}var i=n(1)(n(5),n(13),o,"data-v-2d62ce86",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("div",{attrs:{id:"home-1"}},[n("div",{staticStyle:{"font-size":"30px"}},[t._v("铿锵侠")]),t._v(" "),n("div",{staticStyle:{"font-size":"16px"}},[t._v("知乎专栏")])]),t._v(" "),n("canvas",{attrs:{id:"home-cartoon"}})])}]}}],[6]);
//# sourceMappingURL=app.ca1bd3edc7abeee1afb4.js.map
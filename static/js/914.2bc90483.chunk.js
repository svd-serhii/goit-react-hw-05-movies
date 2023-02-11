"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[914],{2639:function(t,e,r){r.d(e,{Z:function(){return c}});var n=r(4691),a={ContainerLoader:"Loader_ContainerLoader__ySsrp"},s=r(184);var c=function(){return(0,s.jsx)("div",{className:a.LoaderContainer,children:(0,s.jsx)(n.s5,{strokeColor:"#3194d1",strokeWidth:"5",animationDuration:"0.75",width:"50",visible:!0})})}},6914:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(3433),a=r(5861),s=r(9439),c=r(4687),i=r.n(c),u=r(2791),o=r(7689),f={castList:"MovieCastPage_castList__3a7n0",castItem:"MovieCastPage_castItem__1lqZI",castImg:"MovieCastPage_castImg__YU+ts"},p=r(2639),l=r(8174),v=r(4390),d=r(6789),m=r(184),h=function(){var t=(0,u.useState)([]),e=(0,s.Z)(t,2),r=e[0],c=e[1],h=(0,u.useState)(!1),g=(0,s.Z)(h,2),x=g[0],_=g[1],w=(0,u.useState)(null),b=(0,s.Z)(w,2),k=b[0],Z=b[1],j=(0,o.UO)().id;(0,u.useEffect)((function(){var t=function(){var t=(0,a.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _(!0),t.prev=1,t.next=4,(0,v.zv)(j);case 4:e=t.sent,c((0,n.Z)(e.cast)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),l.Am.error(t.t0.message),Z(t.t0.message);case 12:return t.prev=12,_(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[j]);var C=r.map((function(t,e){var r=t.id,n=t.name,a=t.original_name,s=t.profile_path,c=t.character;return(0,m.jsxs)("li",{className:f.castItem,children:[(0,m.jsx)("img",{className:f.castImg,src:null===s?d:"https://image.tmdb.org/t/p/w300/".concat(s),alt:null!==n&&void 0!==n?n:a,loading:"lazy"}),null!==n&&void 0!==n?n:a,(0,m.jsxs)("p",{className:f.castChar,children:["Character: ",c]})]},r+e)}));return(0,m.jsxs)(m.Fragment,{children:[x&&(0,m.jsx)(p.Z,{}),k&&(0,m.jsx)("p",{children:"Unexpected error. Please try again later."}),r.length>0&&(0,m.jsx)("ul",{className:f.castList,children:C}),!k&&!x&&0===r.length&&(0,m.jsx)("p",{className:f.errorMsg,children:"There is no information about cast"})]})}},4390:function(t,e,r){r.d(e,{Df:function(){return i},TP:function(){return u},tx:function(){return f},zv:function(){return o}});var n=r(5861),a=r(4687),s=r.n(a),c=r(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"c780801336e7f1f89f24f8fc75df6bab"}}),i=function(){var t=(0,n.Z)(s().mark((function t(e){var r,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/movie/day?",{params:{page:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(s().mark((function t(e){var r,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(s().mark((function t(e){var r,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(s().mark((function t(e){var r,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},6789:function(t,e,r){t.exports=r.p+"static/media/default_poster.3f9715169e330b10feb4.jpg"}}]);
//# sourceMappingURL=914.2bc90483.chunk.js.map
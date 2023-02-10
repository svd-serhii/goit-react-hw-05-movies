"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[246],{854:function(e,t,r){var n=r(691),s=r(184);t.Z=function(){return(0,s.jsx)("div",{className:"LoaderContainer",children:(0,s.jsx)(n.s5,{strokeColor:"#3f51b5",strokeWidth:"5",animationDuration:"0.75",width:"50",visible:!0})})}},246:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(142);function s(e,t,r){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=r(861),o=r(439),l=r(687),u=r.n(l),f=r(791),p=r(87),d=r(689),m=r(390),v={},h=r(854),j=r(789),b=r(184),x=function(e){return e.isActive?"".concat(v.link," ").concat(v.active):v.link},_=function(){var e,t=(0,f.useState)({}),r=(0,o.Z)(t,2),n=r[0],s=r[1],i=(0,f.useState)(!1),l=(0,o.Z)(i,2),_=l[0],g=l[1],w=(0,f.useState)(null),O=(0,o.Z)(w,2),y=O[0],k=O[1],N=(0,d.s0)(),P=(0,d.TH)(),Z=(0,d.UO)().id,C=(null===(e=P.state)||void 0===e?void 0:e.from)||"/movies";(0,f.useEffect)((function(){var e=function(){var e=(0,c.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.prev=1,e.next=4,(0,m.TP)(Z);case 4:t=e.sent,s(a({},t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),k(e.t0.message);case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z]);var D=n.genres?n.genres.map((function(e){return e.name})).join(" / "):"";return(0,b.jsxs)("div",{className:v.container,children:[_&&(0,b.jsx)(h.Z,{}),y&&(0,b.jsx)("p",{children:"Unexpected error. Please try again later."}),(0,b.jsx)("button",{type:"button",onClick:function(){return N(C)},className:"btn",children:"Go back"}),(0,b.jsxs)("div",{className:v.filmCard,children:[(0,b.jsx)("img",{src:n.poster_path?"https://image.tmdb.org/t/p/original/".concat(n.poster_path):j,alt:n.original_title,width:"270"}),(0,b.jsxs)("div",{className:v.film__info,children:[(0,b.jsx)("h2",{className:v.film__title,children:n.original_title}),(0,b.jsxs)("p",{className:v.film__score,children:["User score: ",n.popularity]}),(0,b.jsx)("h3",{className:v.film__titleOverview,children:"Overview"}),(0,b.jsx)("p",{className:v.film__textOverview,children:n.overview}),(0,b.jsx)("h3",{className:v.film__titleGenres,children:"Genres"}),(0,b.jsx)("p",{className:v.film__listGenres,children:D})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{children:"Additional Information"}),(0,b.jsxs)("ul",{className:v.addInfo__list,children:[(0,b.jsx)("li",{className:v.addInfo__item,children:(0,b.jsx)(p.OL,{state:{from:C},to:"/movies/".concat(Z,"/credits"),className:x,children:"Cast"})}),(0,b.jsx)("li",{className:v.addInfo__item,children:(0,b.jsx)(p.OL,{state:{from:C},to:"/movies/".concat(Z,"/reviews"),className:x,children:"Reviews"})})]})]}),(0,b.jsx)(f.Suspense,{fallback:(0,b.jsx)(h.Z,{}),children:(0,b.jsx)(d.j3,{})})]})}},390:function(e,t,r){r.d(t,{Df:function(){return c},TP:function(){return o}});var n=r(861),s=r(687),i=r.n(s),a=r(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"c780801336e7f1f89f24f8fc75df6bab"}}),c=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.get("/trending/movie/day?",{params:{page:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},789:function(e,t,r){e.exports=r.p+"static/media/default_poster.3f9715169e330b10feb4.jpg"}}]);
//# sourceMappingURL=246.ced303fa.chunk.js.map
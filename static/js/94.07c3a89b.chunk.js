"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[94],{2639:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(4691),a={ContainerLoader:"Loader_ContainerLoader__ySsrp"},i=t(184);var u=function(){return(0,i.jsx)("div",{className:a.LoaderContainer,children:(0,i.jsx)(n.s5,{strokeColor:"#3194d1",strokeWidth:"5",animationDuration:"0.75",width:"50",visible:!0})})}},8094:function(e,r,t){t.r(r),t.d(r,{default:function(){return _}});var n=t(3433),a=t(5861),i=t(9439),u=t(4687),s=t.n(u),c=t(2791),o=t(7689),f={review__list:"MovieReviewsPage_review__list__1aLZ2",review__text:"MovieReviewsPage_review__text__Gjupi"},v=t(2639),p=t(8174),d=t(4390),h=t(184),_=function(){var e=(0,c.useState)([]),r=(0,i.Z)(e,2),t=r[0],u=r[1],_=(0,c.useState)(!1),l=(0,i.Z)(_,2),w=l[0],m=l[1],x=(0,c.useState)(null),g=(0,i.Z)(x,2),b=g[0],k=g[1],Z=(0,o.UO)().id;(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.prev=1,e.next=4,(0,d.tx)(Z);case 4:r=e.sent,u((0,n.Z)(r)),r.length||p.Am.warn("There is no review about this movie"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),k(e.t0.message);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[Z]);var j=t.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,h.jsxs)("li",{className:f.review__item,children:[(0,h.jsxs)("p",{className:f.review__author,children:["Author:",t]}),(0,h.jsx)("p",{className:f.review__text,children:n})]},r)}));return(0,h.jsxs)(h.Fragment,{children:[w&&(0,h.jsx)(v.Z,{}),b&&p.Am.error("Something goes wrong. Please try again later."),(0,h.jsx)("ul",{className:f.review__list,children:j})]})}},4390:function(e,r,t){t.d(r,{Df:function(){return s},TP:function(){return c},tx:function(){return f},zv:function(){return o}});var n=t(5861),a=t(4687),i=t.n(a),u=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"c780801336e7f1f89f24f8fc75df6bab"}}),s=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day?",{params:{page:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=94.07c3a89b.chunk.js.map
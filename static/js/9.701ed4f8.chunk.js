(this.webpackJsonpnova_investor=this.webpackJsonpnova_investor||[]).push([[9],{500:function(e,t,c){"use strict";var n=c(27);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(c(28)),i=c(0),s=(0,a.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}),"AddCircle");t.default=s},501:function(e,t,c){"use strict";var n=c(27);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(c(28)),i=c(0),s=(0,a.default)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=s},512:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(1),i=c(434),s=c(435),r=c(60),o=c.n(r),d=c(501),j=c.n(d),l=c(500),b=c.n(l),u=c(15),f=c(98),O=c(0);function h(e){var t=e.content,c=e.webinarList,n=e.routes,a=Object(u.f)(),r=e.confirmInfo,d=(r.confirmInfo,r.setConfirmInfo);return Object(O.jsxs)("div",{className:"list_item bounce",onClick:function(){a(n.webinar_creation.path,{state:{webinarId:t.getId()}})},children:[Object(O.jsxs)(s.a,{children:[Object(O.jsx)(i.a,{md:"3",children:Object(O.jsx)("p",{className:"title",children:t&&t.getTitle()})}),Object(O.jsx)(i.a,{md:"3",children:Object(O.jsx)("p",{className:"date",children:t&&t.getDate()})}),Object(O.jsx)(i.a,{md:"3",children:Object(O.jsx)("p",{className:"category",children:t&&t.getAuthors()})}),Object(O.jsx)(i.a,{md:"3",children:Object(O.jsxs)("div",{className:"display_inline",children:[Object(O.jsx)(o.a,{className:"orange_icon m-1",onClick:function(e){return function(e){e.stopPropagation(),d({confirm:function(){return c.deleteWebinar(t)},refute:void 0})}(e)}}),Object(O.jsx)(j.a,{className:"orange_icon m-1"})]})})]}),Object(O.jsx)("hr",{})]})}t.default=function(e){var t=e.user,c=e.windowInfo,r=e.routes,o=t.webinar,d=Object(u.f)(),j="created",l=Object(a.useState)(j),m=Object(n.a)(l,2),v=m[0],x=(m[1],Object(a.useState)({confirm:void 0,refute:void 0})),p=Object(n.a)(x,2),_=p[0],w=p[1],I=Object(a.useState)(!0),N=Object(n.a)(I,2),g=N[0],C=N[1];return Object(a.useEffect)((function(){g&&void 0!=o&&(t&&t.canI("create_webinar")&&o.loadCreatedWebinar(),o.loadSavedWebinar(),C(!1))}),[o]),Object(a.useEffect)((function(){t&&(t.canI("create_webinar")||d(r.account_home.path))}),[t]),Object(O.jsxs)("div",{id:"webinar_section",children:[Object(O.jsxs)("div",{className:"space_between",children:[Object(O.jsx)("h2",{children:"Webinar"}),t&&t.canI("create_webinar")?Object(O.jsx)("div",{className:"centered",children:Object(O.jsx)(b.a,{className:"orange_icon",onClick:function(){d(r.webinar_creation.path)}})}):""]}),Object(O.jsx)(i.a,{md:"6",className:"mx-auto",children:Object(O.jsx)("div",{className:"search_bar mt-4",children:Object(O.jsx)("input",{placeholder:"Cerca..."})})}),Object(O.jsxs)("div",{className:"items_container",children:[c.mobileMode?"":Object(O.jsx)("div",{className:"header",children:Object(O.jsxs)(s.a,{children:[Object(O.jsx)(i.a,{md:"3",children:Object(O.jsx)("h6",{children:"Titolo"})}),Object(O.jsx)(i.a,{md:"3"}),Object(O.jsx)(i.a,{md:"3"}),Object(O.jsx)(i.a,{md:"3",children:Object(O.jsx)("h6",{children:"Modifica"})})]})}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"list",children:"saved"==v?o&&Object.values(o.getSavedWebinar()).map((function(e){return Object(O.jsx)(h,{confirmInfo:{confirmInfo:_,setConfirmInfo:w},content:e,webinarList:o,routes:r})})):v==j?o&&Object.values(o.getCreatedWebinar()).map((function(e){return Object(O.jsx)(h,{confirmInfo:{confirmInfo:_,setConfirmInfo:w},content:e,webinarList:o,routes:r})})):""})]}),Object(O.jsx)(f.a,{action:_,closeFunction:function(){return w({confirm:void 0,refute:void 0})}})]})}}}]);
//# sourceMappingURL=9.701ed4f8.chunk.js.map
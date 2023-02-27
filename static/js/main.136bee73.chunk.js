(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(25),r=c(8),s=(c(34),c(35),c(23)),a=c(6),i=c(4),j=(c(36),c(3)),o=c(0),l="https://mate-academy.github.io/react_people-table/api/people.json";function b(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch(l)})).then((function(e){return e.json()}));var e}c(37);var d=c(2),h=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},O=c(12),x=c.n(O),u=function(e){var t=e.person;return Object(d.jsx)(r.b,{className:x()({"has-text-danger":"f"===t.sex}),to:"/people/".concat(t.slug),children:t.name})},p=function(e){var t=e.person,c=e.selectedSlug,n=void 0===c?"":c,r=t.sex,s=t.born,a=t.died,i=t.motherName,j=t.fatherName,o=t.mother,l=t.slug,b=t.father;return Object(d.jsxs)("tr",{"data-cy":"person",className:x()({"has-background-warning":n===l}),children:[Object(d.jsx)("td",{children:Object(d.jsx)(u,{person:t})}),Object(d.jsx)("td",{children:r}),Object(d.jsx)("td",{children:s}),Object(d.jsx)("td",{children:a}),o?Object(d.jsx)("td",{children:Object(d.jsx)(u,{person:o})}):Object(d.jsx)("td",{children:i||"-"}),b?Object(d.jsx)("td",{children:Object(d.jsx)(u,{person:b})}):Object(d.jsx)("td",{children:j||"-"})]})},m=function(e){var t=e.peopleList,c=Object(j.p)().personSlug,n=void 0===c?"":c;return Object(d.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Sex"}),Object(d.jsx)("th",{children:"Born"}),Object(d.jsx)("th",{children:"Died"}),Object(d.jsx)("th",{children:"Mother"}),Object(d.jsx)("th",{children:"Father"})]})}),Object(d.jsx)("tbody",{children:t.length?t.map((function(e){return Object(d.jsx)(p,{person:e,selectedSlug:n},e.slug)})):Object(d.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})})]})},f=function(e){var t=e.isLoading,c=e.filteredPeopleList,n=e.isError;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"title",children:"People Page"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsxs)("div",{className:"box table-container",children:[n&&Object(d.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),t?Object(d.jsx)(h,{}):Object(d.jsx)(m,{peopleList:c})]})})]})})},v=function(e){var t=e.to,c=e.text;return Object(d.jsx)(r.c,{to:t,className:function(e){var t=e.isActive;return x()("navbar-item",{"has-background-grey-lighter":t})},children:c})},g=function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("h1",{className:"title",children:"Home Page"})})},N=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(o.useState)(!1),l=Object(i.a)(r,2),h=l[0],O=l[1],x=Object(o.useState)(!0),u=Object(i.a)(x,2),p=u[0],m=u[1];Object(o.useEffect)((function(){O(!1),b().then(n).then((function(){return m(!1)})).catch((function(){return O(!0)}))}),[]);var N=Object(a.a)(c).map((function(e){var t=c.find((function(t){return t.name===e.motherName})),n=c.find((function(t){return t.name===e.fatherName}));return Object(s.a)(Object(s.a)({},e),{},{mother:t,father:n})}));return Object(d.jsxs)("div",{"data-cy":"app",children:[Object(d.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(v,{to:"/",text:"Home"}),Object(d.jsx)(v,{to:"/people",text:"People"})]})})}),Object(d.jsx)("main",{className:"section",children:Object(d.jsxs)(j.d,{children:[Object(d.jsx)(j.b,{path:"/",element:Object(d.jsx)(g,{})}),Object(d.jsx)(j.b,{path:"/home",element:Object(d.jsx)(j.a,{to:"/",replace:!0})}),Object(d.jsxs)(j.b,{path:"people",children:[Object(d.jsx)(j.b,{index:!0,element:Object(d.jsx)(f,{isLoading:p,isError:h,filteredPeopleList:N})}),Object(d.jsx)(j.b,{path:":personSlug",element:Object(d.jsx)(f,{isLoading:p,isError:h,filteredPeopleList:N})})]}),Object(d.jsx)(j.b,{path:"*",element:Object(d.jsx)("h1",{className:"title",children:"Page not found"})})]})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(d.jsx)(r.a,{children:Object(d.jsx)(N,{})}))}},[[39,1,2]]]);
//# sourceMappingURL=main.136bee73.chunk.js.map
(this["webpackJsonpticket-tracker"]=this["webpackJsonpticket-tracker"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),i=n(5),r=n.n(i),c=(n(10),n(2)),l=(n(11),n(12),n(0)),o=function(){return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("div",{className:"header__pin"}),Object(l.jsx)("h1",{className:"header__heading",children:"Ticket Tracker"})]})},d=(n(14),function(e){var t=e.setJobSearchValue,n=e.setNameSearchValue,s=e.setSortDirection;return Object(l.jsxs)("div",{className:"filters",children:[Object(l.jsx)("div",{className:"filters__pin"}),Object(l.jsx)("h2",{className:"filters__heading",children:"Filter"}),Object(l.jsxs)("div",{className:"filters__main",children:[Object(l.jsxs)("div",{className:"filters__section",children:[Object(l.jsx)("label",{className:"filters__label",htmlFor:"job-title",children:"By job title:"}),Object(l.jsx)("input",{className:"filters__input",type:"text",id:"job-title",name:"job-title",onChange:function(e){t(e.target.value.toLowerCase())}})]}),Object(l.jsxs)("div",{className:"filters__section",children:[Object(l.jsx)("label",{className:"filters__label",htmlFor:"employee-name",children:"By employee name:"}),Object(l.jsx)("input",{className:"filters__input",type:"text",id:"employee-name",name:"employee-name",onChange:function(e){n(e.target.value.toLowerCase())}})]}),Object(l.jsxs)("div",{className:"filters__section",children:[Object(l.jsx)("label",{className:"filters__label",htmlFor:"sorting-order",children:"Sort by ticket count:"}),Object(l.jsxs)("select",{className:"filters__select",name:"sorting-order",id:"sorting-order",onChange:function(e){s(e.target.value)},children:[Object(l.jsx)("option",{className:"filters__select-option",value:"default",children:"--"}),Object(l.jsx)("option",{className:"filters__select-option",value:"high-to-low",children:"Highest-Lowest"}),Object(l.jsx)("option",{className:"filters__select-option",value:"low-to-high",children:"Lowest-Highest"})]})]})]})]})}),j=(n(15),n(4)),u=(n(16),function(e){var t=e.displayedCount,n=e.setDisplayedCount,s=e.id;return Object(l.jsxs)("div",{className:"counter",children:[Object(l.jsx)("h3",{className:"counter__heading",children:"Tickets"}),Object(l.jsxs)("div",{className:"counter__count-container",children:[Object(l.jsx)("button",{className:"counter__button",onClick:function(){var e=Object(j.a)({},t);e[s]=0===t[s]?0:t[s]-1,n(e)},children:"-"}),Object(l.jsx)("p",{className:"counter__ticket-count",children:t[s]}),Object(l.jsx)("button",{className:"counter__button",onClick:function(){var e=Object(j.a)({},t);e[s]=t[s]+1,n(e)},children:"+"})]})]})}),b=function(e){var t,n,s=e.id,a=e.name,i=e.role,r=e.displayedCount,c=e.setDisplayedCount;return r[s]<5?(t="rgb(97, 215, 97)",n="rgb(32, 63, 32)"):r[s]<9?(t="rgb(255, 255, 0)",n="rgb(131, 131, 33)"):(t="rgb(208, 59, 59)",n="rgb(106, 34, 17)"),Object(l.jsxs)("div",{className:"employee",style:{backgroundColor:t},children:[Object(l.jsx)("div",{className:"employee__pin",style:{backgroundColor:n}}),Object(l.jsxs)("div",{className:"employee__details",children:[Object(l.jsxs)("p",{className:"employee__info",children:["Name: ",Object(l.jsx)("strong",{children:a})]}),Object(l.jsxs)("p",{className:"employee__info",children:["Role: ",Object(l.jsx)("strong",{children:i})]})]}),Object(l.jsx)(u,{id:s,displayedCount:r,setDisplayedCount:c})]})},m=[{id:1,name:"Alima Miller",role:"Junior Software Developer"},{id:2,name:"Evelyn Rodgers",role:"Junior Software Developer"},{id:3,name:"Henley Myers",role:"Junior Software Developer"},{id:4,name:"Celyn Sanders",role:"Software Developer"},{id:5,name:"Effie Mohamed",role:"Software Developer"},{id:6,name:"Karam Lees",role:"Senior Software Developer"},{id:7,name:"Eleanor Dowling",role:"Project Manager"},{id:8,name:"Haris Grey",role:"Tester"},{id:9,name:"Sohaib Farley",role:"Tester"},{id:10,name:"Phillip Mitchell",role:"Hard Man"}],h=function(){var e=Object(s.useState)(""),t=Object(c.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(""),r=Object(c.a)(i,2),j=r[0],u=r[1],h=Object(s.useState)(""),f=Object(c.a)(h,2),_=f[0],p=f[1],O={};m.forEach((function(e){var t=e.id;O[t]=0}));var x=Object(s.useState)(O),v=Object(c.a)(x,2),g=v[0],N=v[1],y=m.filter((function(e){var t=e.role,s=e.name,a=t.toLowerCase(),i=s.toLowerCase();return a.includes(n)&&i.includes(j)}));"high-to-low"===_&&y.sort((function(e,t){return g[t.id]-g[e.id]})),"low-to-high"===_&&y.sort((function(e,t){return g[e.id]-g[t.id]}));var C=y.map((function(e){var t=e.id,n=e.name,s=e.role;return Object(l.jsx)(b,{id:t,name:n,role:s,displayedCount:g,setDisplayedCount:N},t)}));return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(o,{}),Object(l.jsx)(d,{setJobSearchValue:a,setNameSearchValue:u,setSortDirection:p}),Object(l.jsx)("section",{className:"app__ticket-container",children:C})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),f()}],[[17,1,2]]]);
//# sourceMappingURL=main.19d3c055.chunk.js.map
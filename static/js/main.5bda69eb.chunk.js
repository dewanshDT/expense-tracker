(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),s=n.n(a),i=(n(12),n(0)),u=function(){return Object(i.jsx)("h2",{className:"header",children:"\ud83d\udcb0 Expense Tracker \ud83d\udcb0"})},o=n(2),j=r.a.createContext(),l=function(e){var t=e.children,n=r.a.useState([{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}]),c=Object(o.a)(n,2),a=c[0],s=c[1];return Object(i.jsx)(j.Provider,{value:[a,s],children:t})},d=function(){var e=r.a.useContext(j),t=Object(o.a)(e,1)[0].map((function(e){return e.amount})),n=t.length?t.reduce((function(e,t){return e+t})):0;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:"Your balnce"}),Object(i.jsxs)("h1",{id:"balance",children:["$",n]})]})},b=function(){var e=r.a.useContext(j),t=Object(o.a)(e,1)[0],n=t.map((function(e){return Math.abs(e.amount)})),c=t.filter((function(e){return e.amount<0})).map((function(e){return e.amount})),a=function(e){var t=e.length?e.reduce((function(e,t){return e+t})):0;return Math.abs(t)};return Object(i.jsxs)("div",{className:"inc-exp-container",children:[Object(i.jsxs)("div",{className:"income",children:[Object(i.jsx)("h4",{children:"Income"}),Object(i.jsxs)("p",{id:"money-plus",className:"money plus",children:["$",a(n)-a(c)]})]}),Object(i.jsxs)("div",{className:"expense",children:[Object(i.jsx)("h4",{children:"Expense"}),Object(i.jsxs)("p",{id:"money-minus",className:"money minus",children:["$",a(c)]})]})]})},x=function(e){var t=e.transaction,n=e.trans,c=e.setTrans,r=t.amount>0?"+":"-";return Object(i.jsxs)("li",{className:t.amount>0?"plus":"minus",children:[t.text," ",Object(i.jsxs)("span",{children:[r,"$",Math.abs(t.amount)]}),Object(i.jsx)("button",{className:"delete-btn",onClick:function(){c(n.filter((function(e){return e.id!==t.id})))},children:"\xd7"})]})},h=function(){var e=r.a.useContext(j),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{children:"History"}),Object(i.jsx)("ul",{id:"list",className:"list",children:n.map((function(e){return Object(i.jsx)(x,{trans:n,transaction:e,setTrans:c},e.id)}))})]})},m=n(7),O=function(){var e=r.a.useContext(j),t=Object(o.a)(e,2),n=t[0],c=t[1],a=r.a.useState(""),s=Object(o.a)(a,2),u=s[0],l=s[1],d=r.a.useState(0),b=Object(o.a)(d,2),x=b[0],h=b[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{onSubmit:function(e){return function(e){var t={id:Math.floor(1e8*Math.random()),text:u,amount:Number.parseInt(x)};e.preventDefault(),c([].concat(Object(m.a)(n),[t])),h(0),l("")}(e)},children:[Object(i.jsx)("h3",{children:"Add new transaction"}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("input",{value:u,onChange:function(e){return l(e.target.value)},type:"text",placeholder:"enter text",required:!0})]}),Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{htmlFor:"amount",children:"Amount"}),Object(i.jsx)("input",{value:x,onChange:function(e){return h(e.target.value)},type:"number",placeholder:"enter amount",required:!0})]}),Object(i.jsx)("button",{className:"btn",children:"Add transaction"})]})})},f=function(){return Object(i.jsx)("div",{className:"footer",children:"\ud83d\udcb8"})};var p=function(){return Object(i.jsxs)(l,{children:[Object(i.jsx)(u,{}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(d,{}),Object(i.jsx)(b,{}),Object(i.jsx)(O,{}),Object(i.jsx)(h,{})]}),Object(i.jsx)(f,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),v()}},[[14,1,2]]]);
//# sourceMappingURL=main.5bda69eb.chunk.js.map
(this.webpackJsonptodowebsite=this.webpackJsonptodowebsite||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(18),r=n.n(s),i=(n(25),n(11)),l=n(20),o=(n(26),n(8)),d=n(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(o.b,{className:"navbar-brand",to:"/",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{className:"nav-link",to:"/about",children:"About"})})]})})]})})}b.defaultProps={title:"Pass the title"};var j=function(e){var t=e.todo,n=e.onDelete;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container px-4",children:[Object(d.jsxs)("div",{className:"row my-3 gx-4",children:[Object(d.jsx)("div",{className:"col border bg-light",children:Object(d.jsx)("h4",{children:t.title})}),Object(d.jsx)("div",{className:"col border bg-light",children:t.desc})]}),Object(d.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){return n(t)},children:"Delete"})]})})},u=function(e){return Object(d.jsxs)("div",{className:"container",style:{marginright:"150px",marginleft:"250px",width:"1024px",minHeight:"45vh",margin:"15px auto"},children:[Object(d.jsx)("h3",{className:"my-3",children:"Your Todos"}),0===e.todos.length?"No todos":e.todos.map((function(t){return Object(d.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)}))]})},h=function(e){var t=e.addTodo,n=Object(c.useState)(""),a=Object(i.a)(n,2),s=a[0],r=a[1],l=Object(c.useState)(""),o=Object(i.a)(l,2),b=o[0],j=o[1];return Object(d.jsx)("div",{className:"container my-3",style:{marginright:"150px",marginleft:"250px",width:"1024px"},children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&b?(t(s,b),r(""),j("")):alert("Title or Description cannot be empty")},children:[Object(d.jsx)("h3",{children:"Add a Todo"}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"title",value:s,onChange:function(e){return r(e.target.value)},"aria-describedby":"emailHelp"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Description"}),Object(d.jsx)("input",{type:"text",value:b,onChange:function(e){return j(e.target.value)},className:"form-control",id:"desc"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary btn-success",children:"Add"})]})})},m=function(){return Object(d.jsx)("footer",{className:"bg-dark text-light py-1",children:Object(d.jsx)("p",{className:"text-center",children:"Copright \xa9 My Todos List."})})},x=function(){return Object(d.jsxs)("div",{style:{minHeight:"86vh"},children:[Object(d.jsx)("h6",{className:"container my-3",children:Object(d.jsx)("mark",{children:"About Todos List"})}),Object(d.jsx)("p",{className:"container lead",children:"You can add and delete your todos item on this page."}),Object(d.jsx)("div",{style:{marginTop:"60vh"},children:Object(d.jsxs)("figure",{className:"text-center",children:[Object(d.jsx)("blockquote",{className:"blockquote",children:Object(d.jsx)("p",{children:"\u201dIf you win, you live. If you lose, you die. If you don\u2019t fight, you can\u2019t win! FIGHT! FIGHT!!!\u201d"})}),Object(d.jsx)("figcaption",{className:"blockquote-footer",children:Object(d.jsx)("cite",{title:"Source Title",children:"Eren Yeager"})})]})})]})},O=n(2);var g=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){j(r.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(r))},n=function(e,t){var n={sno:0===r.length?1:r[r.length-1].sno+1,title:e,desc:t};j([].concat(Object(l.a)(r),[n]))},a=Object(c.useState)(e),s=Object(i.a)(a,2),r=s[0],j=s[1];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(r))}),[r]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(b,{title:"Todos-List"}),Object(d.jsxs)(O.c,{children:[Object(d.jsx)(O.a,{exact:!0,path:"/",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{addTodo:n}),Object(d.jsx)(u,{todos:r,onDelete:t})]})}}),Object(d.jsx)(O.a,{exact:!0,path:"/about",children:Object(d.jsx)(x,{})})]}),Object(d.jsx)(m,{})]})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),p()}},[[33,1,2]]]);
//# sourceMappingURL=main.80ffb8f7.chunk.js.map
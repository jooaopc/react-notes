(this["webpackJsonpreact-notes"]=this["webpackJsonpreact-notes"]||[]).push([[0],{47:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(30),r=c.n(s),l=c(17),j=c(7),i=c(9),o=c(49),b=c(52),d=c(48),u=c(34),x=c(1);var O=function(e){var t=e.onClick;return Object(x.jsxs)(b.a,{className:"mt-2 p-2",bg:"light",children:[Object(x.jsxs)(b.a.Title,{className:"justify-content-between d-flex",children:[e.title,Object(x.jsx)(d.a,{type:"button",variant:"light",className:"p-0",onClick:function(){return t(e.id)},children:Object(x.jsx)(u.a,{})})]}),Object(x.jsx)(b.a.Body,{children:e.text})]})};var h=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=function(e){var t=c.filter((function(t,c){return c!==e}));n(t)};return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("notas"))||[];n(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("notas",JSON.stringify(c))}),[c]),Object(x.jsx)(o.a,{children:c.map((function(e,t){return Object(x.jsx)(O,{id:t,title:e.title,text:e.text,onClick:s},t)}))})},f=c(51);var m=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(j.g)();return Object(x.jsx)(o.a,{children:Object(x.jsxs)(f.a,{onSubmit:function(a){a.preventDefault();var n=e.current.value,s=t.current.value,r=JSON.parse(localStorage.getItem("notas"))||[],l={title:n,text:s};r.push(l),localStorage.setItem("notas",JSON.stringify(r)),c.push("/all")},children:[Object(x.jsx)(b.a,{className:"p-2 m-2",bg:"light",children:Object(x.jsxs)(f.a.Group,{controlId:"title",children:[Object(x.jsx)(f.a.Label,{className:"h4",children:"T\xedtulo"}),Object(x.jsx)(f.a.Control,{ref:e,placeholder:"T\xedtulo da nova nota."})]})}),Object(x.jsx)(b.a,{className:"p-2 m-2",bg:"light",children:Object(x.jsxs)(f.a.Group,{controlId:"text",children:[Object(x.jsx)(f.a.Label,{className:"h4",children:"Texto"}),Object(x.jsx)(f.a.Control,{as:"textarea",rows:3,ref:t,placeholder:"Texto da nova nota."})]})}),Object(x.jsx)("div",{className:"d-flex justify-content-center mt-2",children:Object(x.jsx)(d.a,{variant:"primary",type:"submit",children:"Registrar Anota\xe7\xe3o!"})})]})})},p=(c(44),c(50));var v=function(){return Object(x.jsxs)(a.Fragment,{children:[Object(x.jsxs)(p.a,{activeKey:"/all",onSelect:function(e){return alert("selected ".concat(e))},className:"justify-content-center",variant:"tabs",fill:!0,children:[Object(x.jsx)(p.a.Item,{children:Object(x.jsx)(l.b,{to:"/all",className:"nav-link",children:"Todas as Notas"})}),Object(x.jsx)(p.a.Item,{children:Object(x.jsx)(l.b,{to:"/new",className:"nav-link",children:"Nova Nota"})})]}),Object(x.jsxs)(j.d,{children:[Object(x.jsx)(j.b,{exact:!0,path:"/",children:Object(x.jsx)(j.a,{to:"/all"})}),Object(x.jsx)(j.b,{path:"/all",children:Object(x.jsx)(h,{})}),Object(x.jsx)(j.b,{path:"/new",children:Object(x.jsx)(m,{})}),Object(x.jsx)(j.b,{path:"*",children:"404: Page not Found."})]})]})};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(l.a,{children:Object(x.jsx)(v,{})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.bad86c08.chunk.js.map
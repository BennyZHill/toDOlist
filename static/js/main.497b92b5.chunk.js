(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),s=n(8),i=n.n(s),r=(n(15),n(7)),o=n(3),u=n(1);var l=function(t){var e=Object(a.useState)(t.edit?t.edit.value:""),n=Object(o.a)(e,2),c=n[0],s=n[1],i=Object(a.useRef)(null);Object(a.useEffect)((function(){i.current.focus()}));var r=function(t){s(t.target.value)},l=function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),s("")};return Object(u.jsx)("form",{onSubmit:l,className:"task-form",children:t.edit?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{placeholder:"Change Task",value:c,onChange:r,name:"text",ref:i,className:"task-input edit"}),Object(u.jsx)("button",{onClick:l,className:"task-button edit",children:"Update"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{placeholder:"Add a task",value:c,onChange:r,name:"text",className:"task-input",ref:i}),Object(u.jsx)("button",{onClick:l,className:"task-button",children:"Add task"})]})})},d=n(9),j=n(10),b=function(t){var e=t.tasks,n=t.completeTask,c=t.removeTask,s=t.updateTask,i=Object(a.useState)({id:null,value:""}),r=Object(o.a)(i,2),b=r[0],f=r[1];return b.id?Object(u.jsx)(l,{edit:b,onSubmit:function(t){s(b.id,t),f({id:null,value:""})}}):e.map((function(t,e){return Object(u.jsxs)("div",{className:t.isComplete?"task-row complete":"task-row",children:[Object(u.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(u.jsxs)("div",{className:"icons",children:[Object(u.jsx)(d.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(u.jsx)(j.a,{onClick:function(){return f({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var f=function(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"What's the Plan for Today?"}),Object(u.jsx)(l,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(r.a)(n));c(e)}}}),Object(u.jsx)(b,{tasks:n,completeTask:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTask:function(t){var e=Object(r.a)(n).filter((function(e){return e.id!==t}));c(e)},updateTask:function(t,e){e.text&&!/^\s*$/.test(e.text)&&c((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var m=function(){return Object(u.jsx)("div",{className:"task-app",children:Object(u.jsx)(f,{})})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.497b92b5.chunk.js.map
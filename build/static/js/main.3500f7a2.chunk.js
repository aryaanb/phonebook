(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),r=t(15),a=t.n(r),i=(t(20),t(6)),u=t(3),l=t(0),d=function(e){var n=e.handleNewName,t=e.addPerson,c=e.newName,o=e.newNum,r=e.handleNewNum;return Object(l.jsxs)("form",{onSubmit:t,children:[Object(l.jsxs)("div",{children:["name: ",Object(l.jsx)("input",{value:c,onChange:n})]}),Object(l.jsxs)("div",{children:["number: ",Object(l.jsx)("input",{value:o,onChange:r})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:"add"})})]})},s=function(e){var n=e.filter,t=e.handleFilter;return Object(l.jsx)("form",{children:Object(l.jsxs)("div",{children:["filter: ",Object(l.jsx)("input",{value:n,onChange:t})]})})},j=function(e){var n=e.persons,t=e.handleDelete;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Numbers"}),n.map((function(e){return Object(l.jsxs)("div",{children:[e.name," ",e.number," ",Object(l.jsx)("button",{onClick:function(){return t(e)},children:"Delete"})]},e.name)}))]})},b=t(4),f=t.n(b),h="api/persons",m=function(){return f.a.get(h).then((function(e){return e.data}))},O=function(e){return f.a.post(h,e).then((function(e){return e.data}))},g=function(e){return f.a.delete("".concat(h,"/").concat(e))},p=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},x=function(e){var n=e.message,t=e.style;return null===n?null:Object(l.jsx)("div",{style:t,children:n})},v=function(){var e=Object(c.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],r=Object(c.useState)(""),a=Object(u.a)(r,2),b=a[0],f=a[1],h=Object(c.useState)(""),v=Object(u.a)(h,2),w=v[0],S=v[1],N=Object(c.useState)(""),y=Object(u.a)(N,2),k=y[0],D=y[1],A=Object(c.useState)([]),C=Object(u.a)(A,2),E=C[0],T=C[1],B=Object(c.useState)(!1),P=Object(u.a)(B,2),R=P[0],z=P[1],F=Object(c.useState)(null),J=Object(u.a)(F,2),I=J[0],M=J[1],q=Object(c.useState)({}),G=Object(u.a)(q,2),H=G[0],K=G[1],L={color:"red",background:"lightgray",fontSize:20,borderStyle:"solid",padding:10,marginBottom:10,borderRadius:5},Q={color:"green",background:"lightgray",fontSize:20,borderStyle:"solid",padding:10,marginBottom:10,borderRadius:5};Object(c.useEffect)((function(){console.log("effect"),m().then((function(e){return o(e)}))}),[]),Object(c.useEffect)((function(){if(""===k)z(!1);else{var e=new RegExp(k,"i"),n=t.filter((function(n){return n.name.match(e)}));T(n),z(!0)}}),[t,k]);var U=function(e){window.confirm("Are you sure you want to delete ".concat(e.name))&&g(e.id).then((function(n){o(t.filter((function(n){return n.id!==e.id}))),console.log("deleted",e.name)}))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Phonebook"}),Object(l.jsx)(x,{message:I,style:H}),Object(l.jsx)(s,{filter:k,handleFilter:function(e){D(e.target.value)}}),Object(l.jsx)("h2",{children:"Add new person"}),Object(l.jsx)(d,{handleNewName:function(e){f(e.target.value)},addPerson:function(e){if(e.preventDefault(),K(Q),t.filter((function(e){return e.name===b})).length>0){if(window.confirm("".concat(b," is already added to the phonebook, replace the old number with a new one?"))){var n=t.filter((function(e){return e.name===b}))[0],c=Object(i.a)(Object(i.a)({},n),{},{number:w});p(c.id,c).then((function(e){o(t.map((function(n){return n.id===e.id?e:n}))),M("Added ".concat(b)),setTimeout((function(){M(null)}),5e3),f(""),S(""),console.log(e)})).catch((function(e){console.log(e),K(L),M("The information of ".concat(b," has been deleted from the server")),setTimeout((function(){M(null)}),5e3)}))}}else O({name:b,number:w}).then((function(e){o(t.concat(e)),M("Added ".concat(b)),setTimeout((function(){M(null)}),5e3),console.log(e),f(""),S("")}))},newName:b,newNum:w,handleNewNum:function(e){S(e.target.value)}}),!R>0&&Object(l.jsx)(j,{persons:t,handleDelete:U}),R>0&&Object(l.jsx)(j,{persons:E,handleDelete:U})]})};a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.3500f7a2.chunk.js.map
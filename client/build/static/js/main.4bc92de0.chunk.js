(this["webpackJsonpbluelab-app"]=this["webpackJsonpbluelab-app"]||[]).push([[0],{16:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(4),o=n.n(c),s=(n(16),n(3)),u=n(1),a=function(e){var t=e.user,n=e.removeUser,c=Object(s.c)(),o=r.useCallback((function(e){return c(n(e))}),[c,n]);return Object(u.jsxs)("div",{className:"User",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"".concat(t.nome," ").concat(t.sobrenome)})}),Object(u.jsx)("button",{onClick:function(){return o(t)},children:"Delete"})]})},i=n(5),b=n(2),l=n(11),j=function(e){var t=e.saveUser,n=r.useState(),c=Object(l.a)(n,2),o=c[0],s=c[1],a=function(e){s(Object(b.a)(Object(b.a)({},o),{},Object(i.a)({},e.currentTarget.id,e.currentTarget.value)))};return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(o)},className:"Add-user",children:[Object(u.jsx)("input",{type:"text",id:"nome",placeholder:"Nome",onChange:a}),Object(u.jsx)("input",{type:"text",id:"sobrenome",placeholder:"Sobrenome",onChange:a}),Object(u.jsx)("input",{type:"text",id:"telefone",placeholder:"Telefone",onChange:a}),Object(u.jsx)("input",{type:"text",id:"cpf",placeholder:"cpf",onChange:a}),Object(u.jsx)("button",{disabled:void 0===o,children:"Add User"})]})},f="ADD_USER",p="REMOVE_USER";function d(e){return O({type:p,user:e})}function O(e){return function(t){setTimeout((function(){t(e)}),200)}}n(24);var h=function(){var e=Object(s.d)((function(e){return e.users}),s.b),t=Object(s.c)(),n=r.useCallback((function(e){return t(function(e){return O({type:f,user:e})}(e))}),[t]);return Object(u.jsxs)("main",{children:[Object(u.jsx)("h1",{children:"Usu\xe1rios"}),Object(u.jsx)(j,{saveUser:n}),e.map((function(e){return Object(u.jsx)(a,{user:e,removeUser:d},e.cpf)}))]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))},v=n(8),x=n(10),g={users:[{nome:"Jo\xe3o",sobrenome:"Carlos",telefone:"11968552211",cpf:"08438794912"},{nome:"Aar\xe3o",sobrenome:"Melo",telefone:"11977808883",cpf:"00108240223"}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:var n={nome:t.user.nome,sobrenome:t.user.sobrenome,telefone:t.user.telefone,cpf:t.user.cpf};return Object(b.a)(Object(b.a)({},e),{},{users:e.users.concat(n)});case p:var r=e.users.filter((function(e){return e.cpf!==t.user.cpf}));return Object(b.a)(Object(b.a)({},e),{},{users:r})}return e},U=Object(v.b)(C,Object(v.a)(x.a));o.a.render(Object(u.jsx)(s.a,{store:U,children:Object(u.jsx)(h,{})}),document.getElementById("root")),m()}},[[25,1,2]]]);
//# sourceMappingURL=main.4bc92de0.chunk.js.map
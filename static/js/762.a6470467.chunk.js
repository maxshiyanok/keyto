"use strict";(self.webpackChunkddd_tpl_react=self.webpackChunkddd_tpl_react||[]).push([[762],{6083:(t,e,n)=>{n.d(e,{A:()=>i});n(5043);const a={container:"style_container__b9gz8",title:"style_title__MQgBc"};var r=n(579);function i(t){let{children:e,title:n}=t;return(0,r.jsxs)("div",{className:a.container,children:[(0,r.jsx)("h2",{className:a.title,children:n}),e]})}},3762:(t,e,n)=>{n.r(e),n.d(e,{default:()=>h});var a=n(5043);const r={description:"style_description__Ro12q",container:"style_container__hrs2m"};var i=n(3192),l=n(3033),s=n(6083),c=n(4654),o=n(5390),_=n(5549),u=n(3216),d=n(1872),p=n(579);function h(){const[t,e]=(0,a.useState)(""),[n,h]=(0,a.useState)(!1),[x,m]=(0,a.useState)(null),j=(0,o.j)(),b=(0,u.Zp)(),v=l.Ik().shape({email:l.Yj().email("invalid email").required("required")});return(0,p.jsx)(s.A,{title:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?",children:(0,p.jsxs)("div",{className:r.container,children:[(0,p.jsx)("p",{className:r.description,children:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443\u044e \u043f\u043e\u0447\u0442\u0443, \u0447\u0442\u043e\u0431\u044b \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),(0,p.jsxs)("div",{children:[(0,p.jsx)(i.A,{id:"email",name:"email",label:"Email",placeholder:"Enter your email",value:t,onBlur:async()=>{v.validate({email:t}).then((function(t){h(!1)})).catch((function(t){h(!0)}))},onChange:t=>e(t.target.value),type:"text"}),n&&(0,p.jsx)("p",{className:"error",children:"Invalid email"}),x&&(0,p.jsx)("p",{className:"error",children:x})]}),(0,p.jsx)(c.A,{text:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u043f\u043e\u0447\u0442\u0443",onClick:async()=>{m(null);try{if(n||!t)return void h(!0);j((0,_.b)(t));await d.A.post("/auth/forgot-password",{email:t});b("/auth/change-password")}catch(e){m(e.response.data.message)}}})]})})}},4654:(t,e,n)=>{n.d(e,{A:()=>i});n(5043);const a={error:"button_error__YkJvg",title:"button_title__5gC+I",text:"button_text__XVH8C",dataContainer:"button_dataContainer__3jkmu",button:"button_button__hP9LU",container:"button_container__Qvxz+"};var r=n(579);function i(t){const{text:e,type:n="button",...i}=t;return(0,r.jsx)("div",{className:a.container,children:(0,r.jsx)("button",{type:n,...i,className:a.button,children:e})})}},3192:(t,e,n)=>{n.d(e,{A:()=>i});n(5043);var a=n(1067),r=n(579);function i(t){const{type:e="text",placeholder:n,helperText:i,error:l,...s}=t;return(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{placeholder:n,...s,type:e,className:a.A.input}),l&&(0,r.jsx)("p",{className:"error",children:i})]})}},1067:(t,e,n)=>{n.d(e,{A:()=>a});const a={error:"input_error__OfYDR",title:"input_title__xtmVx",text:"input_text__aUjj7",dataContainer:"input_dataContainer__Ia7H8",input:"input_input__VaHsI",icon:"input_icon__7BwGD",container:"input_container__Hru8f",date:"input_date__wBhL9",label:"input_label__Wq-Ey"}}}]);
//# sourceMappingURL=762.a6470467.chunk.js.map
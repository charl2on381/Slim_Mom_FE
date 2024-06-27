"use strict";(self.webpackChunkfinal_team_project_frontend=self.webpackChunkfinal_team_project_frontend||[]).push([[708],{9833:function(e,a,t){t.d(a,{Z:function(){return l}});var r={btn:"Button_btn__cIIwi",btnLight:"Button_btnLight__TSLTb Button_btn__cIIwi",btnPlus:"Button_btnPlus__VRApt",btnDairyPage:"Button_btnDairyPage__2MLhY"},n=t(184),l=function(e){var a=e.text,t=void 0===a?"+":a,l=e.type,i=void 0===l?"submit":l,s=e.btnClass,d=void 0===s?"btnPlus":s,o=e.handleClick;return(0,n.jsx)("button",{className:r[d],onClick:o,type:i,children:t})}},6146:function(e,a,t){t.d(a,{Z:function(){return d}});var r="TextField_label__kp4Pv",n="TextField_input__JDykO",l="TextField_span__qcPmc",i=t(184),s=function(e){var a=e.type,t=e.name,s=e.value,d=e.handleChange,o=e.placeholder,c=e.required,u=e.pattern,m=e.title;return(0,i.jsxs)("label",{className:r,children:[(0,i.jsx)("input",{className:n,type:a,name:t,value:s,onChange:d,required:c,pattern:u,title:m}),(0,i.jsx)("span",{className:l,children:o})]})},d=s;s.defaultProps={type:"text",required:!1}},8704:function(e,a,t){t.d(a,{E:function(){return r}});var r={name:{name:"name",type:"text",placeholder:"Name*",title:"The name must be at least 3 characters long",required:!0},email:{name:"email",type:"text",placeholder:"Email*",required:!0},password:{name:"password",type:"password",placeholder:"Password (at least 8 characters)*",required:!0,title:"The password must be at least 8 characters long"},height:{name:"height",type:"text",placeholder:"Height (100-250 cm)*",required:!0,title:"Enter a valid integer from 100 to 250 cm."},age:{name:"age",type:"text",placeholder:"Age (18-100 y)*",required:!0,title:"Enter a valid number from 18 to 100 years."},weight:{name:"weight",type:"text",placeholder:"Current weight (20-250 kg)*",required:!0,title:"Enter a valid integer from 20 to 250 kg."},desiredWeight:{name:"desiredWeight",type:"text",placeholder:"Desired weight (20-200 kg)*",required:!0,title:"Enter a valid integer from 20 to 200 kg."},bloodType:{name:"bloodType",type:"text",placeholder:"Blood type*",disabled:!0},filter:{type:"text",name:"filter",placeholder:"Filter by name"}}},2566:function(e,a,t){t.d(a,{Z:function(){return i}});var r="TextFieldDefault_input__TN7oB",n=t(184),l=function(e){var a=e.type,t=e.name,l=e.value,i=e.handleChange,s=e.placeholder,d=e.required,o=e.pattern,c=e.title,u=e.disabled;return(0,n.jsx)("label",{children:(0,n.jsx)("input",{className:r,type:a,name:t,value:l,onChange:i,placeholder:s,required:d,pattern:o,title:c,disabled:u})})},i=l;l.defaultProps={type:"text",required:!1}},7858:function(e,a,t){t.d(a,{Z:function(){return v}});var r=t(1413),n=t(9439),l=t(9434),i=t(2791),s=t(6382),d={container_sidebar:"SideBar_container_sidebar__YEww0",sum:"SideBar_sum__Jv1xj",title_sidebar:"SideBar_title_sidebar__7GDyI",list_sidebar:"SideBar_list_sidebar__NYb3c",item_sidebar:"SideBar_item_sidebar__lDXgx",text_sidebar_food:"SideBar_text_sidebar_food__Pg58D",food:"SideBar_food__eIk0d",menuGroupList:"SideBar_menuGroupList__Xvf-8",menuGroupItems:"SideBar_menuGroupItems__PYGmW",block_sum:"SideBar_block_sum__hMZB0"},o=t(2566),c=t(8704),u=t(6730),m=t(9869),h=t(8712),_=function(e){return e.dairyCalendar.date},f=t(184),v=function(){var e=(0,l.v9)(_),a=(0,l.v9)(m.U6),t=(0,l.v9)(u.M7),v=(0,l.v9)(u.SP),p=(0,l.v9)(u.vO),x=(0,l.v9)(u.TW),b=(0,l.v9)(u.jj),g=(0,l.v9)(u.Wm),y=(0,l.v9)(u.oj),j=(0,l.v9)(u.EI),N=(0,l.v9)(u.Dk),k=(0,l.I0)(),C=(0,i.useState)([]),w=(0,n.Z)(C,2),P=w[0],D=w[1];(0,i.useEffect)((function(){e&&(k((0,h.Wd)({date:e})),k((0,h.YL)()))}),[k,e]),(0,i.useEffect)((function(){a&&D(a)}),[a]);return(0,f.jsxs)("div",{className:d.container_sidebar,children:[(0,f.jsxs)("div",{className:d.block_sum,children:[(0,f.jsxs)("div",{className:d.sum,children:[(0,f.jsx)("h3",{className:d.title_sidebar,children:"Average for the entire period"}),(0,f.jsxs)("ul",{className:d.list_sidebar,children:[(0,f.jsxs)("li",{className:d.item_sidebar,children:[(0,f.jsx)("p",{className:d.text_sidebar_sum,children:"It's left"}),(0,f.jsx)("span",{className:d.data,children:N.kcalLeft?Math.floor(N.kcalLeft)+" kcal":b?Math.floor(b)+" kcal":"000 kcal"})]}),(0,f.jsxs)("li",{className:d.item_sidebar,children:[(0,f.jsx)("p",{className:d.text_sidebar,children:"It was consumed"}),(0,f.jsx)("span",{className:d.data,children:N.kcalConsumed?Math.floor(N.kcalConsumed)+" kcal":g?Math.floor(g)+" kcal":"000 kcal"})]}),(0,f.jsxs)("li",{className:d.item_sidebar,children:[(0,f.jsx)("p",{className:d.text_sidebar,children:"Daily norm"}),(0,f.jsx)("span",{className:d.data,children:N.dailyRate?Math.floor(N.dailyRate)+" kcal":y?Math.floor(y)+" kcal":"000 kcal"})]}),(0,f.jsxs)("li",{className:d.item_sidebar,children:[(0,f.jsx)("p",{className:d.text_sidebar,children:"% of the norm"}),(0,f.jsx)("span",{className:d.data,children:N.percentsOfDailyRate?Math.floor(100*N.percentsOfDailyRate)+" %":j?Math.floor(j)+" %":"0 %"})]})]})]}),(0,f.jsxs)("div",{className:d.sum,children:[(0,f.jsxs)("h3",{className:d.title_sidebar,children:["Summary for ",e]}),(0,f.jsxs)("ul",{className:d.list_sidebar,children:[(0,f.jsxs)("li",{className:d.item_sidebar,children:[(0,f.jsx)("p",{className:d.text_sidebar_sum,children:"It's left"}),(0,f.jsx)("span",{className:d.data,children:t?Math.floor(t)+" kcal":b?Math.floor(b)+" kcal":"000 kcal"})]}),(0,f.jsxs)("li",{className:d.item_sidebar,children:[(0,f.jsx)("p",{className:d.text_sidebar,children:"It was consumed"}),(0,f.jsx)("span",{className:d.data,children:v?Math.floor(v)+" kcal":g?Math.floor(g)+" kcal":"000 kcal"})]}),(0,f.jsxs)("li",{className:d.item_sidebar,children:[(0,f.jsx)("p",{className:d.text_sidebar,children:"Daily norm"}),(0,f.jsx)("span",{className:d.data,children:p?Math.floor(p)+" kcal":y?Math.floor(y)+" kcal":"000 kcal"})]}),(0,f.jsxs)("li",{className:d.item_sidebar,children:[(0,f.jsx)("p",{className:d.text_sidebar,children:"% of the norm"}),(0,f.jsx)("span",{className:d.data,children:x?Math.floor(x)+" %":j?Math.floor(j)+" %":"0 %"})]})]})]})]}),(0,f.jsxs)("div",{className:d.food,children:[(0,f.jsx)("h3",{className:d.title_sidebar,children:"Not recommended food"}),(null===a||void 0===a?void 0:a.length)>0&&(0,f.jsx)(o.Z,(0,r.Z)({handleChange:function(e){var t=a.filter((function(a){return a.toLowerCase().includes(e.target.value.toLowerCase())}));D(t)}},c.E.filter)),(null===a||void 0===a?void 0:a.length)>0&&(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ol",{className:d.menuGroupList,children:P.map((function(e){return(0,f.jsx)("li",{className:d.menuGroupItems,children:e},(0,s.x0)())}))})}),0===(null===a||void 0===a?void 0:a.length)&&(0,f.jsx)("p",{className:d.text_sidebar_food,children:"Not recommended will be here."})]})]})}},2708:function(e,a,t){t.r(a),t.d(a,{default:function(){return T}});var r=t(3433),n=t(1413),l=t(9439),i=t(2791),s=t(9434),d=t(1134),o=t(7689),c="CalcForm_form__auYmB",u="CalcForm_formParts__cJV9U",m="CalcForm_formPart__w+07K",h="CalcForm_label__FwCyU",_="CalcForm_title__IwwVP",f="CalcForm_checkbox__wsNPz",v="CalcForm_fake__rbJZx",p="CalcForm_text__Y99wK",x="CalcForm_radioBlock__My9n5",b="CalcForm_listRadio__3UyqE",g="CalcForm_buttonPosition__HIUoH",y="CalcForm_wrapper__RgN5g",j=t(7858),N=t(6146),k=t(8704),C=t(9833),w=t(2566),P=t(3579),D=t(9869),S=t(184),Z=function(){var e=(0,o.s0)(),a=(0,s.I0)(),t=(0,s.v9)(D.PR)._id,Z={},T=(0,s.v9)(D.PR);T.userData?Z=T.userData:Object.entries(T).length||(Z=JSON.parse(localStorage.getItem("user_".concat(t,"_userData")))||{});var I=(0,i.useState)(Z.bloodType-1),B=(0,l.Z)(I,2),M=B[0],F=B[1],E=(0,d.cI)({defaultValues:{weight:Z&&Z.weight?Z.weight:"",height:Z&&Z.height?Z.height:"",age:Z&&Z.age?Z.age:"",desiredWeight:Z&&Z.desiredWeight?Z.desiredWeight:"",bloodType:Z&&Z.bloodType?Z.bloodType:""}}),q=E.control,W=E.register,L=E.handleSubmit,R=E.reset;return(0,S.jsxs)("div",{className:y,children:[(0,S.jsxs)("form",{onSubmit:L((function(r,l){l.preventDefault();var i={weight:Number(r.weight),height:Number(r.height),age:Number(r.age),desiredWeight:Number(r.desiredWeight),bloodType:Number(r.bloodType)};localStorage.setItem("user_".concat(t,"_userData"),JSON.stringify(i)),a((0,P.w)((0,n.Z)({_id:t},i))),R(),e("/dairy")})),className:c,children:[(0,S.jsx)("h1",{className:_,children:"Calculate your daily calorie intake right now"}),(0,S.jsxs)("div",{className:u,children:[(0,S.jsxs)("div",{className:m,children:[(0,S.jsx)(d.Qr,{control:q,name:"height",render:function(e){var a=e.field,t=a.onChange,r=a.value;return(0,S.jsx)(N.Z,(0,n.Z)({value:r,name:"height",control:q,handleChange:t},k.E.height))}}),(0,S.jsx)(d.Qr,{control:q,name:"age",render:function(e){var a=e.field,t=a.onChange,r=a.value;return(0,S.jsx)(N.Z,(0,n.Z)({value:r,name:"age",control:q,handleChange:t},k.E.age))}}),(0,S.jsx)(d.Qr,{control:q,name:"weight",render:function(e){var a=e.field,t=a.onChange,r=a.value;return(0,S.jsx)(N.Z,(0,n.Z)({value:r,name:"weight",control:q,handleChange:t},k.E.weight))}})]}),(0,S.jsxs)("div",{className:m,children:[(0,S.jsx)(d.Qr,{control:q,name:"desiredWeight",render:function(e){var a=e.field,t=a.onChange,r=a.value;return(0,S.jsx)(N.Z,(0,n.Z)({value:r,name:"desiredWeight",control:q,handleChange:t},k.E.desiredWeight))}}),(0,S.jsx)(d.Qr,{control:q,name:"bloodType",render:function(e){var a=e.field,t=a.onChange,r=a.value;return(0,S.jsx)(w.Z,(0,n.Z)({value:r,control:q,handleChange:t},k.E.bloodType))}}),(0,S.jsx)("div",{className:x,children:(0,r.Z)(Array(4)).map((function(e,a){return(0,S.jsx)("div",{className:b,children:(0,S.jsxs)("label",{className:h,children:[(0,S.jsx)("input",(0,n.Z)((0,n.Z)({},W("bloodType",{required:!0})),{},{className:f,type:"radio",name:"bloodType",checked:M===a,onClick:function(){return F(a)},value:a+1,placeholder:"Blood type"})),(0,S.jsx)("span",{className:v}),(0,S.jsx)("span",{className:p,children:a+1})]})},a)}))})]})]}),(0,S.jsx)("div",{className:g,children:(0,S.jsx)(C.Z,{text:"Calculate",type:"submit",btnClass:"btn"})})]}),(0,S.jsx)(j.Z,{})]})},T=function(){return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(Z,{})})}},6730:function(e,a,t){t.d(a,{Cp:function(){return l},Dk:function(){return r},EI:function(){return h},M7:function(){return i},Ni:function(){return n},SP:function(){return s},TW:function(){return o},Wm:function(){return u},jj:function(){return c},oj:function(){return m},vO:function(){return d}});var r=function(e){return e.dayProduct.periodSummary},n=function(e){return e.dayProduct.eatenProducts},l=function(e){return e.dayProduct.loading},i=function(e){var a,t,r=e.dayProduct;return null===r||void 0===r||null===(a=r.aboutDay)||void 0===a||null===(t=a.daySummary)||void 0===t?void 0:t.kcalLeft},s=function(e){var a,t,r=e.dayProduct;return null===r||void 0===r||null===(a=r.aboutDay)||void 0===a||null===(t=a.daySummary)||void 0===t?void 0:t.kcalConsumed},d=function(e){var a,t,r=e.dayProduct;return null===r||void 0===r||null===(a=r.aboutDay)||void 0===a||null===(t=a.daySummary)||void 0===t?void 0:t.dailyRate},o=function(e){var a,t,r=e.dayProduct;return null===r||void 0===r||null===(a=r.aboutDay)||void 0===a||null===(t=a.daySummary)||void 0===t?void 0:t.percentsOfDailyRate},c=function(e){var a,t=e.dayProduct;return null===t||void 0===t||null===(a=t.aboutDay)||void 0===a?void 0:a.kcalLeft},u=function(e){var a,t=e.dayProduct;return null===t||void 0===t||null===(a=t.aboutDay)||void 0===a?void 0:a.kcalConsumed},m=function(e){var a,t=e.dayProduct;return null===t||void 0===t||null===(a=t.aboutDay)||void 0===a?void 0:a.dailyRate},h=function(e){var a,t=e.dayProduct;return null===t||void 0===t||null===(a=t.aboutDay)||void 0===a?void 0:a.percentsOfDailyRate}}}]);
//# sourceMappingURL=708.3e8baa4e.chunk.js.map
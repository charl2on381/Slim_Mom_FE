"use strict";(self.webpackChunkfinal_team_project_frontend=self.webpackChunkfinal_team_project_frontend||[]).push([[252],{5399:function(e,t,n){n.d(t,{Z:function(){return d}});var a="ErrorMessage_errorMessageBlock__6NGFY",r="ErrorMessage_errorMessageTitle__gIqHi",o="ErrorMessage_errorMessageText__TKpdd",l=n(4668),s=n(184),i=function(e){var t=e.status;return(0,s.jsxs)("div",{className:a,children:[(0,s.jsx)("div",{className:l.Z.boo,children:(0,s.jsx)("div",{className:l.Z.face,id:"face"})}),(0,s.jsx)("p",{className:r,children:"Something went wrong..."}),(0,s.jsx)("p",{className:o,children:t})]})},d=i;i.defaultProps={status:{}}},3713:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(2791),r={overlay:"Modal_overlay__b+zEz",overlayDairyPage:"Modal_overlayDairyPage__h20Vb",modalDairyPage:"Modal_modalDairyPage__wNlXX",modal:"Modal_modal__yEgVW",closeM:"Modal_closeM__mJ3AX",closeOther:"Modal_closeOther__8w+rp",mobileClose:"Modal_mobileClose__wiSFp"},o=n(184),l=function(e){var t=e.setModalOpen,n=e.overlayClass,l=void 0===n?"overlay":n,s=e.modalClass,i=void 0===s?"modal":s,d=e.children;function c(){document.querySelector("body").classList.remove("no-scroll")}(0,a.useEffect)((function(){var e=function(e){"Escape"===e.code&&(c(),t(!1))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);var u=function(){c(),t(!1)};return(0,o.jsx)("div",{className:r[l],onClick:function(e){e.target===e.currentTarget&&(c(),t(!1))},children:(0,o.jsxs)("div",{className:r[i],children:[(0,o.jsx)("div",{className:r.mobileClose,children:(0,o.jsx)("span",{onClick:u,className:r.closeM})}),(0,o.jsx)("span",{onClick:u,className:r.closeOther}),d]})})}},9833:function(e,t,n){n.d(t,{Z:function(){return o}});var a={btn:"Button_btn__cIIwi",btnLight:"Button_btnLight__TSLTb Button_btn__cIIwi",btnPlus:"Button_btnPlus__VRApt",btnDairyPage:"Button_btnDairyPage__2MLhY"},r=n(184),o=function(e){var t=e.text,n=void 0===t?"+":t,o=e.type,l=void 0===o?"submit":o,s=e.btnClass,i=void 0===s?"btnPlus":s,d=e.handleClick;return(0,r.jsx)("button",{className:a[i],onClick:d,type:l,children:n})}},4834:function(e,t,n){n.d(t,{Z:function(){return a.Z}});var a=n(9833)},5406:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(184),r=function(e){var t=e.children;return(0,a.jsx)("div",{className:"container",children:t})}},6146:function(e,t,n){n.d(t,{Z:function(){return i}});var a="TextField_label__kp4Pv",r="TextField_input__JDykO",o="TextField_span__qcPmc",l=n(184),s=function(e){var t=e.type,n=e.name,s=e.value,i=e.handleChange,d=e.placeholder,c=e.required,u=e.pattern,_=e.title;return(0,l.jsxs)("label",{className:a,children:[(0,l.jsx)("input",{className:r,type:t,name:n,value:s,onChange:i,required:c,pattern:u,title:_}),(0,l.jsx)("span",{className:o,children:d})]})},i=s;s.defaultProps={type:"text",required:!1}},8704:function(e,t,n){n.d(t,{E:function(){return a}});var a={name:{name:"name",type:"text",placeholder:"Name*",title:"The name must be at least 3 characters long",required:!0},email:{name:"email",type:"text",placeholder:"Email*",required:!0},password:{name:"password",type:"password",placeholder:"Password (at least 8 characters)*",required:!0,title:"The password must be at least 8 characters long"},height:{name:"height",type:"text",placeholder:"Height (100-250 cm)*",required:!0,title:"Enter a valid integer from 100 to 250 cm."},age:{name:"age",type:"text",placeholder:"Age (18-100 y)*",required:!0,title:"Enter a valid number from 18 to 100 years."},weight:{name:"weight",type:"text",placeholder:"Current weight (20-250 kg)*",required:!0,title:"Enter a valid integer from 20 to 250 kg."},desiredWeight:{name:"desiredWeight",type:"text",placeholder:"Desired weight (20-200 kg)*",required:!0,title:"Enter a valid integer from 20 to 200 kg."},bloodType:{name:"bloodType",type:"text",placeholder:"Blood type*",disabled:!0},filter:{type:"text",name:"filter",placeholder:"Filter by name"}}},1307:function(e,t,n){n.d(t,{Z:function(){return a.Z}});var a=n(6146)},5252:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(1413),r=n(9439),o=n(2791),l=n(7689),s=n(1134),i=n(8724),d=n(9434),c=n(4805),u="Register_register__vVHbT",_="Register_title__flBV1",m="Register_form__aX9qD",h="Register_wrap__rHFtG",g="Register_imgDesktop__elIqv",f=n(8704),p=n(1307),v=n(4834),x=n(5406),b=n(5399),y=n(3713),j=n(9146),N=n(8010),w=n(9869),C=n(184),Z=function(){var e=(0,c.useMediaQuery)({query:"(min-resolution: 2dppx)"}),t=(0,d.I0)(),n=(0,o.useState)(!1),Z=(0,r.Z)(n,2),k=Z[0],M=Z[1],q=(0,d.v9)(w.NH),F=(0,d.v9)(w.K4),E=(0,s.cI)({defaultValues:{username:"",email:"",password:""}}),P=E.control,D=E.handleSubmit,T=E.reset;return!q&&F?(0,C.jsx)(l.Fg,{to:"/login"}):(0,C.jsx)("section",{className:u,children:(0,C.jsxs)(x.Z,{children:[(0,C.jsx)("h2",{className:_,children:"Registration"}),(0,C.jsxs)("form",{className:m,onSubmit:D((function(e,n){n.preventDefault(),t((0,i.z2)(e)),M(!0),T()})),children:[(0,C.jsx)(s.Qr,{control:P,name:"username",rules:{required:!0,maxLength:16},render:function(e){var t=e.field,n=t.onChange,r=t.value;return(0,C.jsx)(p.Z,(0,a.Z)({value:r,control:P,handleChange:n},f.E.name))}}),(0,C.jsx)(s.Qr,{control:P,name:"email",rules:{required:!0},render:function(e){var t=e.field,n=t.onChange,r=t.value;return(0,C.jsx)(p.Z,(0,a.Z)({value:r,control:P,handleChange:n},f.E.email))}}),(0,C.jsx)(s.Qr,{control:P,name:"password",rules:{required:!0,minLength:8,maxLength:30},render:function(e){var t=e.field,n=t.onChange,r=t.value;return(0,C.jsx)(p.Z,(0,a.Z)({value:r,control:P,handleChange:n},f.E.password))}}),(0,C.jsx)("div",{className:h,children:(0,C.jsx)(v.Z,{text:"Registration",btnClass:"btnLight"})})]}),!e&&(0,C.jsx)("img",{className:g,src:j,alt:"background"}),e&&(0,C.jsx)("img",{className:g,src:N,alt:"background"}),k&&q&&(0,C.jsx)(y.Z,{setModalOpen:M,children:(0,C.jsx)(b.Z,{status:q})})]})})},k=function(){return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(Z,{})})}},4668:function(e,t){t.Z={container:"NotFound_container__KNX4B",title:"NotFound_title__f917b",txt:"NotFound_txt__VshUQ",booWrapper:"NotFound_booWrapper__2b5FM",boo:"NotFound_boo__bQlpM",floating:"NotFound_floating__P8jYD",face:"NotFound_face__jV+a5",shadow:"NotFound_shadow__wSXLX",floatingShadow:"NotFound_floatingShadow__fkJav"}},9146:function(e,t,n){e.exports=n.p+"static/media/bcgD.06d7e880436282e9dadf.png"},8010:function(e,t,n){e.exports=n.p+"static/media/bcgD@2x.7d5af67d05df6e0bba78.png"}}]);
//# sourceMappingURL=252.83b954e8.chunk.js.map
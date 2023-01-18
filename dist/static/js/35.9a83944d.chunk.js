(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[35],{1060:function(e,n,r){"use strict";r.r(n);var t=r(1),a=r(17),i=r(1073),l=r(552),c=r(144),o=r(1061),u=r(0),s=r(509),m=r(35),d=r(76),b=r(4),f=r(23),h=r(33),j=r(535),p=r(536),g=r(546),x=r(537),O=r(523),v=r(520),q=r(36),w=r(531),y=r(30),M=r(557),k=r.n(M),Y=r(27),C=r(5),E=q.e().shape({email:v.a.string(Object(b.c)("user.fields.email"),{required:!0}),password:v.a.string(Object(b.c)("user.fields.password"),{required:!0}),rememberMe:v.a.boolean(Object(b.c)("user.fields.rememberMe"))});n.default=function(e){var n=Object(y.g)(),r=Object(m.d)(),v=Object(m.e)(h.a.selectLoading),q=k.a.parse(n.search).socialErrorCode,M=Object(m.e)(h.a.selectErrorMessage),S=Object(m.e)(h.a.selectBackgroundImageUrl),z=Object(m.e)(h.a.selectLogoUrl),D=function(){r(f.a.doClearErrorMessage())};Object(u.useEffect)((function(){D(),V.register({name:"rememberMe"})}),[]),Object(u.useEffect)((function(){q&&("generic"===q?Y.a.error(Object(b.c)("errors.defaultErrorMessage")):Y.a.error(Object(b.c)("auth.social.errors.".concat(q))))}),[]);var A=Object(u.useState)({email:"",password:"",rememberMe:!0}),I=Object(a.a)(A,1)[0],V=Object(s.c)({resolver:Object(w.yupResolver)(E),mode:"onSubmit",defaultValues:I});return Object(C.jsx)(x.a,{style:{backgroundImage:"url(".concat(S||"/images/signin.jpg",")")},children:Object(C.jsxs)(j.a,{children:[Object(C.jsx)(p.a,{children:z?Object(C.jsx)("img",{src:z,width:"240px",alt:Object(b.c)("app.title")}):Object(C.jsx)("h1",{children:Object(b.c)("app.title")})}),Object(C.jsx)(s.a,Object(t.a)(Object(t.a)({},V),{},{children:Object(C.jsxs)("form",{onSubmit:V.handleSubmit((function(e){var n=e.email,t=e.password,a=e.rememberMe;r(f.a.doSigninWithEmailAndPassword(n,t,a))})),children:[Object(C.jsx)(O.a,{name:"email",placeholder:Object(b.c)("user.fields.email"),autoComplete:"email",size:"large",autoFocus:!0,layout:null,onChange:function(){M&&D()},externalErrorMessage:M}),Object(C.jsx)(O.a,{name:"password",placeholder:Object(b.c)("user.fields.password"),autoComplete:"password",type:"password",size:"large",layout:null}),Object(C.jsxs)(i.a.Item,{children:[Object(C.jsx)(l.a,{checked:V.watch("rememberMe"),onChange:function(e){return V.setValue("rememberMe",e.target.checked)},type:"checkbox",children:Object(b.c)("user.fields.rememberMe")}),Object(C.jsx)(d.a,{style:{float:"right"},to:"/auth/forgot-password",children:Object(b.c)("auth.forgotPassword")})]}),Object(C.jsx)(c.a,{type:"primary",size:"large",block:!0,htmlType:"submit",loading:v,children:Object(b.c)("auth.signin")}),Object(C.jsx)(o.a,{style:{color:"white",margin:"24px 0"},children:Object(b.c)("common.or")}),Object(C.jsx)(g.a,{children:Object(C.jsx)(d.a,{to:"/auth/signup",children:Object(b.c)("auth.createAnAccount")})})]})}))]})})}},512:function(e,n,r){"use strict";r.d(n,"a",(function(){return i}));var t=r(7),a=r(8),i=function(){function e(){Object(t.a)(this,e)}return Object(a.a)(e,null,[{key:"errorMessage",value:function(e,n,r,t){var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!t&&!r[e])return null;var l=n[e];return(null===l||void 0===l||null===(a=l[0])||void 0===a?void 0:a.message)||(null===l||void 0===l?void 0:l.message)||l||null}}]),e}()},520:function(e,n,r){"use strict";var t=r(15),a=r(36),i=r(4),l=r(90),c=r.n(l),o={generic:function(e){return a.c().label(e)},string:function(e,n){n=n||{};var r=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e);return n.required&&(r=r.required()),(n.min||0===n.min)&&(r=r.min(n.min)),n.max&&(r=r.max(n.max)),n.matches&&(r=r.matches(n.matches)),r},boolean:function(e,n){return a.b().default(!1).label(e)},relationToOne:function(e,n){n=n||{};var r=a.c().nullable(!0).label(e).transform((function(e,n){return n?n.id:null}));return n.required&&(r=r.required()),r},stringArray:function(e,n){n=n||{};var r=a.a().compact().ensure().of(a.h().transform((function(e,n){return""===n?null:e})).trim()).label(e);return n.required&&(r=r.required()),n.min||0===n.min?r=r.min(n.min):n.required&&(r=r.min(1)),n.max&&(r=r.max(n.max)),r},relationToMany:function(e,n){n=n||{};var r=a.a().nullable(!0).label(e).transform((function(e,n){return n&&n.length?n.map((function(e){return e.id})):[]}));return n.required&&(r=r.required()),n.min||0===n.min?r=r.min(n.min):n.required&&(r=r.min(1)),n.max&&(r=r.max(n.max)),r},integer:function(e,n){n=n||{};var r=a.d().transform((function(e,n){return""===n?null:e})).integer().nullable(!0).label(e);return n.required&&(r=r.required()),(n.min||0===n.min)&&(r=r.min(n.min)),n.max&&(r=r.max(n.max)),r},images:function(e,n){n=n||{};var r=a.a().nullable(!0).label(e);return(n.required||n.min)&&(r=r.required()),n.min||0===n.min?r=r.min(n.min):n.required&&(r=r.min(1)),n.max&&(r=r.max(n.max)),r},files:function(e,n){n=n||{};var r=a.a().compact().ensure().nullable(!0).label(e);return(n.required||n.min)&&(r=r.required()),n.min||0===n.min?r=r.min(n.min):n.required&&(r=r.min(1)),n.max&&(r=r.max(n.max)),r},enumerator:function(e,n){n=n||{};var r=a.h().transform((function(e,n){return""===n?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(t.a)(n.options||[])));return n.required&&(r=r.required(Object(i.c)("validation.string.selected"))),r},email:function(e,n){n=n||{};var r=a.h().transform((function(e,n){return""===n?null:e})).nullable(!0).trim().label(e).email();return n.required&&(r=r.required()),(n.min||0===n.min)&&(r=r.min(n.min)),n.max&&(r=r.max(n.max)),n.matches&&(r=r.matches(n.matches)),r},decimal:function(e,n){n=n||{};var r=a.d().transform((function(e,n){return""===n?null:e})).nullable(!0).label(e);return n.required&&(r=r.required()),(n.min||0===n.min)&&(r=r.min(n.min)),n.max&&(r=r.max(n.max)),r},datetime:function(e,n){n=n||{};var r=a.c().nullable(!0).label(e).transform((function(e,n){return e?c()(n,"YYYY-MM-DD HH:mm").toISOString():null}));return n.required&&(r=r.required()),r},date:function(e,n){n=n||{};var r=a.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||c()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?c()(e).format("YYYY-MM-DD"):null}));return n.required&&(r=r.required()),r}};n.a=o},523:function(e,n,r){"use strict";var t=r(1),a=r(1073),i=r(1076),l=r(509),c=r(0),o=r(512),u=r(5),s=function(e){var n=e.label,r=e.name,s=e.hint,m=e.layout,d=e.size,b=e.type,f=e.placeholder,h=e.autoFocus,j=e.autoComplete,p=e.prefix,g=e.externalErrorMessage,x=e.required,O=e.addonAfter,v=Object(l.d)(),q=v.setValue,w=v.watch,y=v.register,M=v.errors,k=v.formState,Y=k.touched,C=k.isSubmitted;Object(c.useEffect)((function(){y({name:r})}),[y,r]);var E=o.a.errorMessage(r,M,Y,C,g);return Object(u.jsx)(a.a.Item,Object(t.a)(Object(t.a)({},m),{},{label:n,required:x,validateStatus:E?"error":"success",help:E||s,children:Object(u.jsx)(i.a,{id:r,name:r,type:b,value:w(r),onChange:function(n){q(r,n.target.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},size:d||void 0,placeholder:f||void 0,autoFocus:h||!1,autoComplete:j||void 0,prefix:p||void 0,addonAfter:O||void 0})}))};s.defaultProps={layout:null,type:"text",required:!1},n.a=s},535:function(e,n,r){"use strict";var t,a=r(117),i=r(118).a.div(t||(t=Object(a.a)(["\n  width: 500px;\n  height: 100%;\n  min-height: 100%;\n  overflow-y: auto;\n  z-index: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 40px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: white;\n  }\n\n  .ant-checkbox-wrapper {\n    color: white;\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"])));n.a=i},536:function(e,n,r){"use strict";var t,a=r(117),i=r(118).a.div(t||(t=Object(a.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 48px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: white;\n\n  h1 {\n    margin-bottom: 0;\n  }\n"])));n.a=i},537:function(e,n,r){"use strict";var t,a=r(117),i=r(118).a.div(t||(t=Object(a.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n  }\n"])));n.a=i},546:function(e,n,r){"use strict";var t,a=r(117),i=r(118).a.div(t||(t=Object(a.a)(["\n  margin-top: 36px;\n  text-align: center;\n"])));n.a=i}}]);
(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[28],{1081:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(35),i=n(30),c=n(4),o=n(172),s=n(6),l=function(e){return e.planning.view},u=Object(s.a)([l],(function(e){return e.record})),d={selectLoading:Object(s.a)([l],(function(e){return Boolean(e.loading)})),selectRecord:u,selectRaw:l},b=n(1),m=n(17),j=n(620),f=n(545),p=n(671),O=n(672),h=n(1073),x=n(740),y=n(144),g=(n(1029),n(1030),n(1031)),v=n(741),w=n(57),q=n(639),k=n(526),T=n(36),C=n(520),P=n(531),S=n(509),I=n(730),G=n(1084),F=n(512),R=n(5),Y=function(e){var t=e.label,n=e.name,r=e.hint,i=e.layout,c=e.size,o=e.externalErrorMessage,s=Object(S.d)(),l=s.register,u=s.errors,d=s.formState,m=d.touched,j=d.isSubmitted,f=s.setValue,p=s.watch;Object(a.useEffect)((function(){l({name:n})}),[l,n]);var O=F.a.errorMessage(n,u,m,j,o),x=O||r;return Object(R.jsx)(h.a.Item,Object(b.a)(Object(b.a)({},i),{},{label:t,validateStatus:O?"error":"success",help:x,children:Object(R.jsx)(G.a,{onChange:function(t){f(n,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},checked:p(n)||!1,size:c||void 0})}))};Y.defaultProps={layout:null};var B=Y,D=T.e().shape({quantity:C.a.integer(Object(c.c)("entities.planning.fields.quantity"),{required:!1}),subassembly:C.a.boolean(Object(c.c)("entities.planning.fields.subassembly"),{})}),E=function(e){var t=Object(a.useState)(!1),n=Object(m.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)(!1),s=Object(m.a)(o,2),l=s[0],u=s[1],d=Object(a.useState)({title:"",text:"",week:"",productId:"",subassembly:!1,finishGood:!1}),T=Object(m.a)(d,2),C=T[0],G=T[1],F=Object(a.useState)({product:[]}),Y=Object(m.a)(F,2),E=(Y[0],Y[1]),M=Object(a.useState)((function(){return{quantity:C.text,subassembly:C.subassembly,finishGood:C.finishGood}})),W=Object(m.a)(M,1)[0],V=e.record,A=e.loading,L=Object(S.c)({resolver:Object(P.yupResolver)(D),mode:"all",defaultValues:W}),Q=Object(a.useState)([{id:1,product:"",year:"",week:"",amountToProduce:0,perWeekRequested:0,perWeekToProduce:0,quantityInStock:0,subassembly:!0,finishGood:!0}]),U=Object(m.a)(Q,2),z=U[0],H=U[1],J=[{id:1,product:"",year:"",week:"",amountToProduce:0,perWeekRequested:0,perWeekToProduce:0,quantityInStock:0,subassembly:!0,finishGood:!0}],N=function(){var t=e.record?e.record.id:V.id;w.a.find(t).then((function(e){E(e),e.product.map((function(t,n){t.perWeek.map((function(a){var r={id:n,product:t.id,amountToProduce:t.quantityToProduce,year:e.year,week:a.week,perWeekRequested:a.quantity,perWeekToProduce:a.quantityToProduce,quantityInStock:t.quantityInStock,subassembly:t.subassembly,finishGood:t.finishGood};J.push(r)}))}))})),J.shift(),H(J)};Object(a.useEffect)((function(){!A&&V&&N()}),[!A&&V]);var K=function(t){var n,a;C.title.includes("Product")?(e.record.product.map((function(e,t){e.id===C.productId&&(n=t)})),e.record.product[n].subassembly=t.subassembly,e.record.product[n].finishGood=t.finishGood,w.a.update(e.record.id,e.record).then((function(e){N(),u(!1)}))):(e.record.product.map((function(e,t){e.id===C.productId&&(n=t,e.perWeek.map((function(e,t){e.week===C.week&&(a=t)})))})),e.record.product[n].perWeek[a].quantityToProduce=t.quantity,w.a.update(e.record.id,e.record).then((function(e){N(),i(!1)})))},X=function(){return{"background-color":"#cccccc"}},Z=new v.a({fields:[{caption:"Product",width:250,dataField:"product",area:"row",selector:function(e){return"".concat(e.product," Quantity in stock: ").concat(e.quantityInStock)}},{caption:"Quantity Requested",dataField:"amountToProduce",width:300,area:"row",selector:function(e){return"\n            Quantity To Produce: ".concat(e.amountToProduce,"\n\n            ").concat(e.subassembly?"SubAssembly: true":"SubAssembly: false","\n            ").concat(e.finishGood?"Finish Goods: true":"Finish Goods: false","\n          ")}},{dataField:"week",dataType:"string",area:"column"},{caption:"Requested",dataField:"perWeekRequested",dataType:"number",summaryType:"sum",area:"data"},{caption:"ToProduce",dataField:"perWeekToProduce",dataType:"number",summaryType:"sum",area:"data"}],store:z});return A||!V?Object(R.jsx)(f.a,{}):Object(R.jsxs)(I.a,{children:[Object(R.jsxs)(p.a,{gutter:24,children:[Boolean(V.name)&&Object(R.jsx)(O.a,{span:6,children:Object(R.jsx)(h.a.Item,Object(b.a)(Object(b.a)({},I.b),{},{label:Object(c.c)("entities.planning.fields.name"),children:V.name}))}),Boolean(V.year)&&Object(R.jsx)(O.a,{span:6,children:Object(R.jsx)(h.a.Item,Object(b.a)(Object(b.a)({},I.b),{},{label:Object(c.c)("entities.planning.fields.year"),children:V.year}))}),Boolean(V.week)&&Object(R.jsx)(O.a,{span:6,children:Object(R.jsx)(h.a.Item,Object(b.a)(Object(b.a)({},I.b),{},{label:Object(c.c)("entities.planning.fields.week"),children:V.week}))}),Boolean(V.status)&&Object(R.jsx)(O.a,{span:6,children:Object(R.jsx)(h.a.Item,Object(b.a)(Object(b.a)({},I.b),{},{label:Object(c.c)("entities.planning.fields.status"),children:Object(c.c)("entities.planning.enumerators.status.".concat(V.status))}))})]}),Object(R.jsx)(p.a,{gutter:24,children:Object(R.jsxs)(O.a,{span:24,children:[Object(R.jsxs)(g.PivotGrid,{id:"sales",rowHeaderLayout:"tree",showColumnGrandTotals:!0,showTotalsPrior:"columns",showColumnTotals:!1,dataSource:Z,allowSortingBySummary:!0,allowSorting:!0,allowFiltering:!0,allowExpandAll:!0,height:450,showBorders:!0,onCellPrepared:function(e){var t;"data"===(t=e).area&&t.cell.columnType&&0===t.cell.dataIndex&&Object.assign(t.cellElement.style,X())},onCellClick:function(e){!function(e){if("data"===e.area&&"amountToProduce"===e.rowFields[1].dataField&&1===e.cell.dataIndex){i(!0);var t=e.cell.rowPath[0].split(" Quantity").shift(),n={title:"Year: ".concat(V.year," Week: ").concat(e.cell.columnPath[0]),text:e.cell.value,week:e.cell.columnPath[0],productId:t,subassembly:C.subassembly,finishGood:C.finishGood};G(n),L.setValue("quantity",e.cell.value)}if("row"===e.area&&1===e.columnIndex){u(!0);var a=e.cell.path[0].split(" Quantity").shift(),r=e.cell.text.split(" Finish Goods: ").pop(),c=e.cell.text.split(" Finish Goods: ").shift().split(" SubAssembly: ").pop(),o={title:"Product: ".concat(a),text:C.text,week:C.week,productId:a,subassembly:!c.includes("false"),finishGood:!r.includes("false")};G(o),L.setValue("subassembly",!c.includes("false")),L.setValue("finishGood",!r.includes("false"))}}(e)},children:[Object(R.jsx)(g.Export,{enabled:!0}),Object(R.jsx)(g.FieldChooser,{enabled:!0})]}),Object(R.jsx)(x.a,{style:{top:200},title:C.title,visible:l,onCancel:function(){return u(!1)},footer:!0,width:"40%",children:Object(R.jsx)("div",{children:Object(R.jsx)(S.a,Object(b.a)(Object(b.a)({},L),{},{children:Object(R.jsxs)("form",{onSubmit:L.handleSubmit(K),children:[Object(R.jsx)(B,{name:"subassembly",label:"Subassembly",layout:k.b}),Object(R.jsx)(B,{name:"finishGood",label:"Finish Goods",layout:k.b}),Object(R.jsx)(h.a.Item,Object(b.a)(Object(b.a)({className:"form-buttons"},k.c),{},{children:Object(R.jsx)(y.a,{loading:A,type:"primary",onClick:L.handleSubmit(K),icon:Object(R.jsx)(j.a,{}),children:Object(c.c)("common.save")})}))]})}))})}),Object(R.jsx)(x.a,{style:{top:200},title:C.title,visible:r,onCancel:function(){return i(!1)},footer:!0,width:"40%",children:Object(R.jsx)("div",{children:Object(R.jsx)(S.a,Object(b.a)(Object(b.a)({},L),{},{children:Object(R.jsxs)("form",{onSubmit:L.handleSubmit(K),children:[Object(R.jsx)(q.a,{name:"quantity",label:"Quantity to produce",required:!1,layout:k.b}),Object(R.jsx)(h.a.Item,Object(b.a)(Object(b.a)({className:"form-buttons"},k.c),{},{children:Object(R.jsx)(y.a,{loading:A,type:"primary",onClick:L.handleSubmit(K),icon:Object(R.jsx)(j.a,{}),children:Object(c.c)("common.save")})}))]})}))})})]})})]})},M=n(1053),W=n(685),V=n(496),A=n(651),L=n(76),Q=n(100),U=n(650),z=n(112),H=n(673),J=n(533),N=function(e){var t=Object(r.d)(),n=Object(i.h)(),a=Object(r.e)(Q.a.selectPermissionToRead),o=Object(r.e)(U.a.selectPermissionToEdit),s=Object(r.e)(U.a.selectPermissionToDestroy),l=Object(r.e)(H.a.selectLoading),u=n.params.id;return Object(R.jsxs)(J.a,{children:[o&&Object(R.jsx)(L.a,{to:"/planning/".concat(u,"/edit"),children:Object(R.jsx)(y.a,{type:"primary",icon:Object(R.jsx)(M.a,{}),children:Object(c.c)("common.edit")})}),s&&Object(R.jsx)(A.a,{title:Object(c.c)("common.areYouSure"),onConfirm:function(){t(z.a.doDestroy(u))},okText:Object(c.c)("common.yes"),cancelText:Object(c.c)("common.no"),children:Object(R.jsx)(y.a,{type:"primary",icon:Object(R.jsx)(W.a,{}),disabled:l,children:Object(c.c)("common.destroy")})}),a&&Object(R.jsx)(L.a,{to:"/audit-logs?entityId=".concat(encodeURIComponent(u)),children:Object(R.jsx)(y.a,{icon:Object(R.jsx)(V.a,{}),children:Object(c.c)("auditLog.menu")})})]})},K=n(516),X=n(519),Z=n(517);t.default=function(e){var t=Object(r.d)(),n=Object(i.h)(),s=Object(r.e)(d.selectLoading),l=Object(r.e)(d.selectRecord);return Object(a.useEffect)((function(){t(o.a.doFind(n.params.id))}),[]),Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(X.a,{items:[[Object(c.c)("dashboard.menu"),"/"],[Object(c.c)("entities.planning.menu"),"/planning"],[Object(c.c)("entities.planning.view.title")]]}),Object(R.jsxs)(K.a,{children:[Object(R.jsxs)(p.a,{children:[Object(R.jsx)(O.a,{span:16,children:Object(R.jsx)(Z.a,{children:Object(c.c)("entities.planning.view.title")})}),Object(R.jsx)(O.a,{span:8,style:{textAlign:"end"},children:Object(R.jsx)(N,{match:n})})]}),Object(R.jsx)(E,{loading:s,record:l})]})]})}},512:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(7),r=n(8),i=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"errorMessage",value:function(e,t,n,a){var r,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(i)return i;if(!a&&!n[e])return null;var c=t[e];return(null===c||void 0===c||null===(r=c[0])||void 0===r?void 0:r.message)||(null===c||void 0===c?void 0:c.message)||c||null}}]),e}()},516:function(e,t,n){"use strict";var a,r=n(117),i=n(118).a.div(a||(a=Object(r.a)(["\n  margin: 0px;\n  margin-top: 16px;\n  padding: 24px;\n  border-radius: 5px;\n  background: #fff;\n  border: 1px solid #e9e9e9;\n  overflow-y: hidden;\n"])));t.a=i},517:function(e,t,n){"use strict";var a,r=n(117),i=n(118).a.h1(a||(a=Object(r.a)(["\n  margin-bottom: 36px;\n"])));t.a=i},519:function(e,t,n){"use strict";var a=n(563),r=(n(0),n(76)),i=n(5);t.a=function(e){var t=function(e){return e.length>1};return Object(i.jsx)(a.a,{children:e.items.map((function(e){return Object(i.jsx)(a.a.Item,{children:t(e)?Object(i.jsx)(r.a,{to:e[1],children:e[0]}):e[0]},e[0])}))})}},520:function(e,t,n){"use strict";var a=n(15),r=n(36),i=n(4),c=n(90),o=n.n(c),s={generic:function(e){return r.c().label(e)},string:function(e,t){t=t||{};var n=r.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e);return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),t.matches&&(n=n.matches(t.matches)),n},boolean:function(e,t){return r.b().default(!1).label(e)},relationToOne:function(e,t){t=t||{};var n=r.c().nullable(!0).label(e).transform((function(e,t){return t?t.id:null}));return t.required&&(n=n.required()),n},stringArray:function(e,t){t=t||{};var n=r.a().compact().ensure().of(r.h().transform((function(e,t){return""===t?null:e})).trim()).label(e);return t.required&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},relationToMany:function(e,t){t=t||{};var n=r.a().nullable(!0).label(e).transform((function(e,t){return t&&t.length?t.map((function(e){return e.id})):[]}));return t.required&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},integer:function(e,t){t=t||{};var n=r.d().transform((function(e,t){return""===t?null:e})).integer().nullable(!0).label(e);return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),n},images:function(e,t){t=t||{};var n=r.a().nullable(!0).label(e);return(t.required||t.min)&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},files:function(e,t){t=t||{};var n=r.a().compact().ensure().nullable(!0).label(e);return(t.required||t.min)&&(n=n.required()),t.min||0===t.min?n=n.min(t.min):t.required&&(n=n.min(1)),t.max&&(n=n.max(t.max)),n},enumerator:function(e,t){t=t||{};var n=r.h().transform((function(e,t){return""===t?null:e})).label(e).nullable(!0).oneOf([null].concat(Object(a.a)(t.options||[])));return t.required&&(n=n.required(Object(i.c)("validation.string.selected"))),n},email:function(e,t){t=t||{};var n=r.h().transform((function(e,t){return""===t?null:e})).nullable(!0).trim().label(e).email();return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),t.matches&&(n=n.matches(t.matches)),n},decimal:function(e,t){t=t||{};var n=r.d().transform((function(e,t){return""===t?null:e})).nullable(!0).label(e);return t.required&&(n=n.required()),(t.min||0===t.min)&&(n=n.min(t.min)),t.max&&(n=n.max(t.max)),n},datetime:function(e,t){t=t||{};var n=r.c().nullable(!0).label(e).transform((function(e,t){return e?o()(t,"YYYY-MM-DD HH:mm").toISOString():null}));return t.required&&(n=n.required()),n},date:function(e,t){t=t||{};var n=r.c().nullable(!0).label(e).test("is-date",Object(i.c)("validation.mixed.default"),(function(e){return!e||o()(e,"YYYY-MM-DD").isValid()})).transform((function(e){return e?o()(e).format("YYYY-MM-DD"):null}));return t.required&&(n=n.required()),n}};t.a=s},526:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o}));var a,r=n(117),i=n(118).a.div(a||(a=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-form-item-with-help {\n    margin-bottom: 24px;\n  }\n\n  .form-buttons {\n    .ant-btn {\n      margin-top: 8px;\n      margin-right: 8px;\n    }\n  }\n"]))),c={labelCol:{xs:{span:24},sm:{span:24},md:{span:6},lg:{span:4}},wrapperCol:{xs:{span:24},sm:{span:24},md:{span:18},lg:{span:12}}},o={wrapperCol:{md:{span:18,offset:6},lg:{span:12,offset:4}}};t.a=i},533:function(e,t,n){"use strict";var a,r=n(117),i=n(118).a.div(a||(a=Object(r.a)(["\n  margin-bottom: 16px;\n\n  .ant-btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));t.a=i},545:function(e,t,n){"use strict";var a=n(542),r=(n(0),n(5));t.a=function(e){return Object(r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:Object(r.jsx)(a.a,{})})}},639:function(e,t,n){"use strict";var a=n(1),r=n(1073),i=n(771),c=n(509),o=n(0),s=n(512),l=n(5),u=function(e){var t=e.label,n=e.name,u=e.hint,d=e.layout,b=e.size,m=e.placeholder,j=e.autoFocus,f=e.autoComplete,p=e.prefix,O=e.required,h=e.externalErrorMessage,x=Object(c.d)(),y=x.register,g=x.errors,v=x.formState,w=v.touched,q=v.isSubmitted,k=x.setValue,T=x.watch;Object(o.useEffect)((function(){y({name:n})}),[y,n]);var C=s.a.errorMessage(n,g,w,q,h);return Object(l.jsx)(r.a.Item,Object(a.a)(Object(a.a)({},d),{},{label:t,validateStatus:C?"error":"success",required:O,help:C||u,children:Object(l.jsx)(i.a,{style:{width:"100%"},id:n,name:n,onChange:function(t){k(n,t,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t)},onBlur:function(t){e.onBlur&&e.onBlur(t)},value:T(n),size:b||void 0,placeholder:m||void 0,autoFocus:j||!1,autoComplete:f||void 0,prefix:p||void 0})}))};u.defaultProps={layout:null,required:!1},t.a=u},650:function(e,t,n){"use strict";var a=n(6),r=n(33),i=n(56),c=n(120),o=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.planningRead)})),s=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.planningEdit)})),l=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.planningCreate)})),u=Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.planningImport)})),d={selectPermissionToRead:o,selectPermissionToEdit:s,selectPermissionToCreate:l,selectPermissionToDestroy:Object(a.a)([r.a.selectCurrentTenant,r.a.selectCurrentUser],(function(e,t){return new i.a(e,t).match(c.a.values.planningDestroy)})),selectPermissionToImport:u};t.a=d},673:function(e,t,n){"use strict";var a=n(6),r={selectLoading:Object(a.a)([function(e){return e.planning.destroy}],(function(e){return Boolean(e.loading)}))};t.a=r},730:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a,r=n(117),i=n(118).a.div(a||(a=Object(r.a)(["\n  padding: 24px;\n  padding-top: 0;\n  padding-bottom: 0;\n\n  .ant-form-item-label {\n    white-space: normal;\n  }\n\n  .ant-row {\n    margin-bottom: 8px;\n  }\n"]))),c={labelCol:{md:{span:6},lg:{span:4}},wrapperCol:{md:{span:18},lg:{span:12}}};t.a=i}}]);
(this["webpackJsonp@app/bancon"]=this["webpackJsonp@app/bancon"]||[]).push([[100,218,302],{250:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return B}));var n=a(0),l=a(5),i=a(2),r=a(16),o=a(11),c=a(50),s=a(8),u=a(33),m=a(160),p=a(152),d=a(100),b=a(38),T=a(504),f=a(82),P=a(500),_=a(51),y=a(618),E=a(10);function O(e){var t=e.rowId,a=e.handleClick,n=Object(b.c)().textGet;return Object(E.jsx)(f.a,{icon:"trash",kind:"icon",label:n({uuid:"spa.suppliers.voidMultiplePayments.trash.label"}),onClick:function(){return a(t)}})}O.defaultProps={};var M=a(497),h=a(6),j=a(309),v=a(441),A=a.n(v);function B(){var e=o.b.useState(!1),t=Object(r.a)(e,2),a=t[0],v=t[1],B=o.b.useState([]),R=Object(r.a)(B,2),C=R[0],N=R[1],x=o.b.useState([]),g=Object(r.a)(x,2),H=g[0],k=g[1],D=Object(b.c)().textGet,F=Object(s.b)(),I=Object(_.qb)(),w=Object(_.sb)(_.cb),U=o.b.useCallback((function(e){return F(m.a.removePaymentToVoid(e))}),[F]),S=o.b.useCallback((function(e){return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:e.paymentBatchPayId,paymentBatchTotalAmount:Object(E.jsx)(P.a,{amount:e.paymentBatchTotalAmount,className:A.a.amountCol}),paymentBatchDate:Object(E.jsx)(T.a,{date:e.paymentBatchDate,formatParams:{format:d.a.SHORT}}),trash:Object(E.jsx)(O,{handleClick:U,rowId:e.paymentBatchPayId})})}))}),[U]),V=Object(s.c)(m.c.completedVoidPayment),L=Object(s.c)(p.c.contractId),Y=Object(s.c)(p.c.paymentIds),q=Object(s.c)(p.c.payments),X=Object(s.c)(m.c.fetching),G=Object(s.c)(m.c.paymentsToVoid),z=Object(s.c)(u.e.token);return o.b.useEffect((function(){V&&I(w)}),[V,I,w]),o.b.useEffect((function(){var e=j.HeadData.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{label:D({uuid:e.label})})}));return e.push(Object(i.a)(Object(i.a)({},j.TrashColumn),{},{label:D({uuid:j.TrashColumn.label})})),N(e),function(){return N([])}}),[D]),o.b.useEffect((function(){k(S(G))}),[S,G]),o.b.useEffect((function(){q&&Y&&F(m.a.updatePaymentsToVoid({payments:q,paymentIds:Y}))}),[F,q,Y]),Object(E.jsxs)(o.b.Fragment,{children:[Object(E.jsx)(y.a,{isMultipleVoid:!0,setShowModal:v,showModal:a,onContinue:function(){return J.apply(this,arguments)}}),Object(E.jsxs)(M.a,{className:A.a.voidPayments,"header-onBack":Q,children:[Object(E.jsx)(c.EnhancedTable,{className:A.a.paymentsTable,headData:C,id:"voidPayments",pagination:{count:h.Sb,rowsPerPageOptions:[]},rowsData:H,title:D({uuid:"spa.suppliers.voidMultiplePayments.table.title"})}),Object(E.jsxs)(c.Box,{flex:!0,className:A.a.buttons,self:"center",children:[Object(E.jsx)(f.a,{label:{uuid:"spa.form.back"},variant:"outlined",onClick:Q}),Object(E.jsx)(f.a,{hasSpinner:X,label:{uuid:"spa.suppliers.voidMultiplePayments.button.void"},onClick:function(){v(!0)}})]})]})]});function J(){return(J=Object(l.a)(Object(n.a)().mark((function e(){var t;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z){e.next=2;break}return e.abrupt("return");case 2:return t=G.map((function(e){return{batchId:e.paymentBatchId,fileName:e.paymentBatchFile,sequenceID:e.paymentBatchPayId,amount:e.paymentBatchTotalAmount,paymentBatchDate:e.paymentBatchDate,receiverCBU:e.paymentBatchBankAccountCBUReceiver,paymentReference:e.paymentBatchReference}})),e.next=5,F(m.b.voidPayments({token:z,contractId:L,sequences:t}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){I(_.a)}}},309:function(e,t,a){"use strict";a.r(t),a.d(t,"HeadData",(function(){return l})),a.d(t,"StateColumn",(function(){return i})),a.d(t,"TrashColumn",(function(){return r})),a.d(t,"FileErrorHeadData",(function(){return o}));var n=a(6),l=[{id:"paymentBatchDate",label:"spa.suppliers.voidMultiplePayments.tableHead.date",numeric:!1,align:"left"},{id:"paymentBatchFile",label:"spa.suppliers.voidMultiplePayments.tableHead.fileName",numeric:!1,align:"left"},{id:"paymentBatchBankAccountCBUReceiver",label:"spa.suppliers.voidMultiplePayments.tableHead.recipientCBU",numeric:!1,align:"left"},{id:"paymentBatchReference",label:"spa.suppliers.voidMultiplePayments.tableHead.paymentReference",numeric:!1,align:"left"},{id:"paymentBatchTotalAmount",label:"spa.suppliers.voidMultiplePayments.tableHead.amount",numeric:!0,align:"right"}],i={id:"paymentStatus",label:"spa.suppliers.voidMultiplePayments.tableHead.opState",numeric:!1,align:"left"},r={id:"trash",label:n.Ub,numeric:!1,align:"right"},o=[{id:"row",label:"spa.suppliers.generatePayment.filePayment.errorTable.row",numeric:!0,align:"left"},{id:"cbuFrom",label:"spa.suppliers.generatePayment.filePayment.errorTable.originCBU",numeric:!1,align:"left"},{id:"cbuTo",label:"spa.suppliers.voidMultiplePayments.tableHead.recipientCBU",numeric:!1,align:"left"},{id:"amount",label:"spa.suppliers.voidMultiplePayments.tableHead.amount",numeric:!0,align:"right"},{id:"date",label:"spa.suppliers.voidMultiplePayments.tableHead.date",numeric:!1,align:"left"},{id:"reference",label:"spa.suppliers.voidMultiplePayments.tableHead.paymentReference",numeric:!1,align:"left"},{id:"email",label:"spa.suppliers.generatePayment.filePayment.errorTable.email",numeric:!1,align:"left"},{id:"error",label:"spa.suppliers.generatePayment.filePayment.errorTable.error",numeric:!1,align:"left"}]},441:function(e,t,a){e.exports={NAME_THEMEPLATFORM:"ThemePlatform",TYPE_THEMEPLATFORM:"Bundle",NAME_CONSUMER_THEMEPLATFORM:"ThemePlatformConsumer",TYPE_CONSUMER_THEMEPLATFORM:"Element",NAME_PROVIDER_THEMEPLATFORM:"ThemePlatformProvider",TYPE_PROVIDER_THEMEPLATFORM:"Provider",NAME_TEXT:"Text",TYPE_TEXT:"Element",NAME_BUTTON:"Button",TYPE_BUTTON:"Element",NAME_DATETIME:"DateTime",TYPE_DATETIME:"Element",NAME_AMOUNT_FORMATTER:"AmountFormatter",TYPE_AMOUNT_FORMATTER:"Element",voidPayments:"_rules_voidPayments__3hIqV",paymentsTable:"_rules_paymentsTable__1h3zr",buttons:"_rules_buttons__2z3bW",voidPaymentsState:"_rules_voidPaymentsState__30faA",voidPaymentsTicket:"_rules_voidPaymentsTicket__12CUd",paymentDetails:"_rules_paymentDetails__Vl-q9",amountCol:"_rules_amountCol__2hVGj"}},570:function(e,t,a){e.exports={NAME_THEMEPLATFORM:"ThemePlatform",TYPE_THEMEPLATFORM:"Bundle",NAME_CONSUMER_THEMEPLATFORM:"ThemePlatformConsumer",TYPE_CONSUMER_THEMEPLATFORM:"Element",NAME_PROVIDER_THEMEPLATFORM:"ThemePlatformProvider",TYPE_PROVIDER_THEMEPLATFORM:"Provider",NAME_TEXT:"Text",TYPE_TEXT:"Element",NAME_BUTTON:"Button",TYPE_BUTTON:"Element",voidPaymentModal:"_rules_voidPaymentModal__252im",footer:"_rules_footer__12oQD",termsAndConditions:"_rules_termsAndConditions__h5pv6",downloadAll:"_rules_downloadAll__3a9nR",downloadMultiple:"_rules_downloadMultiple__2-5O9"}},618:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a(11);var n=a(8),l=a(69),i=a(82),r=a(490),o=a(38),c=a(570),s=a.n(c),u=a(10);function m(e){var t=e,a=t.showModal,c=t.setShowModal,m=t.isMultipleVoid,p=t.onContinue,d=m?"voidMultiplePayments":"voidPayment",b=Object(n.c)(l.c.isDesktop)?"":".mobile";return Object(u.jsxs)(r.a,{className:s.a.voidPaymentModal,closeOnBgTap:!1,open:a,title:"spa.suppliers.".concat(d,".modal.title"),onClose:T,children:[Object(u.jsx)(r.a.Body,{children:Object(u.jsx)(o.b,{uuid:"spa.suppliers.".concat(d,".modal.body").concat(b)})}),Object(u.jsx)(r.a.Footer,{children:Object(u.jsxs)("div",{className:s.a.footer,children:[Object(u.jsx)(i.a,{label:{uuid:"spa.form.cancel"},type:"button",variant:"outlined",onClick:T}),Object(u.jsx)(i.a,{label:{uuid:"spa.form.confirm"},type:"button",onClick:function(){T(),p()}})]})})]});function T(){c(!1)}}m.defaultProps={}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvU3VwcGxpZXJzL1ZvaWRQYXltZW50cy9UcmFzaEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1N1cHBsaWVycy9Wb2lkUGF5bWVudHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9TdXBwbGllcnMvVm9pZFBheW1lbnRzL2hlYWREYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9TdXBwbGllcnMvVm9pZFBheW1lbnRzL19ydWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvU3VwcGxpZXJzL0NvbnN1bHRQYXltZW50cy9Nb2RhbHMvX3J1bGVzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9TdXBwbGllcnMvQ29uc3VsdFBheW1lbnRzL01vZGFscy9pbmRleC50c3giXSwibmFtZXMiOlsiVHJhc2hCdXR0b24iLCJwcm9wcyIsInJvd0lkIiwiaGFuZGxlQ2xpY2siLCJ0ZXh0R2V0IiwidXNlVGV4dCIsIl9qc3giLCJCdXR0b24iLCJpY29uIiwia2luZCIsImxhYmVsIiwidXVpZCIsIm9uQ2xpY2siLCJkZWZhdWx0UHJvcHMiLCJWb2lkUGF5bWVudHMiLCJfUmVhY3QkdXNlU3RhdGUiLCJSZWFjdCIsInVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2hvd1ZvaWRQYXltZW50TW9kYWwiLCJzZXRTaG93Vm9pZFBheW1lbnRNb2RhbCIsIl9SZWFjdCR1c2VTdGF0ZTMiLCJfUmVhY3QkdXNlU3RhdGU0IiwiaGVhZERhdGEiLCJzZXRIZWFkRGF0YSIsIl9SZWFjdCR1c2VTdGF0ZTUiLCJfUmVhY3QkdXNlU3RhdGU2Iiwicm93c0RhdGEiLCJzZXRSb3dzRGF0YSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJuYXZpZ2F0ZSIsInVzZU5hdmlnYXRlIiwidXJsRGV0YWlsIiwidXNlUGF0aCIsIlJPVVRFX1BBVEhfU1VQUExJRVJTX1ZPSURfUEFZTUVOVFNfU1RBVEUiLCJkZWxldGVSb3ciLCJ1c2VDYWxsYmFjayIsIkFjdGlvblNsaWNlVm9pZFBheW1lbnRzIiwicmVtb3ZlUGF5bWVudFRvVm9pZCIsImdldFJvd3MiLCJyb3dzIiwibWFwIiwicm93IiwiX29iamVjdFNwcmVhZCIsImlkIiwicGF5bWVudEJhdGNoUGF5SWQiLCJwYXltZW50QmF0Y2hUb3RhbEFtb3VudCIsIkFtb3VudEZvcm1hdHRlciIsImFtb3VudCIsImNsYXNzTmFtZSIsIlJ1bGVzIiwiYW1vdW50Q29sIiwicGF5bWVudEJhdGNoRGF0ZSIsIkRhdGVUaW1lIiwiZGF0ZSIsImZvcm1hdFBhcmFtcyIsImZvcm1hdCIsIkRhdGVGb3JtYXRzIiwiU0hPUlQiLCJ0cmFzaCIsImNvbXBsZXRlZFZvaWRQYXltZW50IiwidXNlU2VsZWN0b3IiLCJTZWxlY3RvclNsaWNlVm9pZFBheW1lbnRzIiwiY29udHJhY3RJZCIsIlNlbGVjdG9yU2xpY2VDb25zdWx0UGF5bWVudHMiLCJwYXltZW50SWRzIiwicGF5bWVudHMiLCJmZXRjaGluZyIsInBheW1lbnRzVG9Wb2lkIiwidG9rZW4iLCJTZWxlY3RvclNsaWNlU2Vzc2lvbiIsInVzZUVmZmVjdCIsImhlYWREYXRhUmVuZGVyIiwiSGVhZERhdGEiLCJoZWFkQ2VsbCIsInB1c2giLCJUcmFzaENvbHVtbiIsInVwZGF0ZVBheW1lbnRzVG9Wb2lkIiwiX2pzeHMiLCJGcmFnbWVudCIsImNoaWxkcmVuIiwiVm9pZFBheW1lbnRNb2RhbCIsImlzTXVsdGlwbGVWb2lkIiwic2V0U2hvd01vZGFsIiwic2hvd01vZGFsIiwib25Db250aW51ZSIsIl9oYW5kbGVWb2lkIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJJbnRlcm5hbENvbnRhaW5lciIsInZvaWRQYXltZW50cyIsImhhbmRsZUJhY2siLCJUYWJsZSIsInBheW1lbnRzVGFibGUiLCJwYWdpbmF0aW9uIiwiY291bnQiLCJaRVJPIiwicm93c1BlclBhZ2VPcHRpb25zIiwidGl0bGUiLCJCb3giLCJmbGV4IiwiYnV0dG9ucyIsInNlbGYiLCJ2YXJpYW50IiwiaGFzU3Bpbm5lciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwic2VxdWVuY2VzIiwid3JhcCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJhYnJ1cHQiLCJwYXltZW50IiwiYmF0Y2hJZCIsInBheW1lbnRCYXRjaElkIiwiZmlsZU5hbWUiLCJwYXltZW50QmF0Y2hGaWxlIiwic2VxdWVuY2VJRCIsInJlY2VpdmVyQ0JVIiwicGF5bWVudEJhdGNoQmFua0FjY291bnRDQlVSZWNlaXZlciIsInBheW1lbnRSZWZlcmVuY2UiLCJwYXltZW50QmF0Y2hSZWZlcmVuY2UiLCJGZXRjaGVyU2xpY2VWb2lkUGF5bWVudHMiLCJzdG9wIiwiQkFDS19ST1VURVIiLCJudW1lcmljIiwiYWxpZ24iLCJTdGF0ZUNvbHVtbiIsIlpFUk9fU1RSIiwiRmlsZUVycm9ySGVhZERhdGEiLCJtb2R1bGUiLCJleHBvcnRzIiwiX3JlZiIsInZvaWRQYXltZW50TXNnSWQiLCJ1dWlkTW9iaWxlVmFyaWFudCIsIlNlbGVjdG9yU2xpY2VDb25maWd1cmF0aW9uIiwiaXNEZXNrdG9wIiwiTW9kYWwiLCJ2b2lkUGF5bWVudE1vZGFsIiwiY2xvc2VPbkJnVGFwIiwib3BlbiIsImNvbmNhdCIsIm9uQ2xvc2UiLCJjbG9zZU1vZGFsIiwiQm9keSIsIlRleHQiLCJGb290ZXIiLCJmb290ZXIiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiaVVBY08sU0FBU0EsRUFBWUMsR0FDeEIsSUFBUUMsRUFBdUJELEVBQXZCQyxNQUFPQyxFQUFnQkYsRUFBaEJFLFlBQ1BDLEVBQVlDLGNBQVpELFFBRVIsT0FDSUUsY0FBQ0MsSUFBTSxDQUNIQyxLQUFLLFFBQ0xDLEtBQUssT0FDTEMsTUFBT04sRUFBUSxDQUFFTyxLQUFNLG1EQUN2QkMsUUFBUyxrQkFBTVQsRUFBWUQsRUFBTSxH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S0FBSyxTQUNMaEQsUUFBUSxXQUNSN0YsUUFBU3dJLElBRWI5SSxjQUFDQyxJQUFNLENBQ0hHLE1BQU8sQ0FBRUMsS0FBTSxvQkFDZjhJLEtBQUssU0FDTDdJLFFBV3BCLFdBQ0l3SSxJQUNBN0QsR0FDSixZQVBBLFNBQVM2RCxJQUNML0QsR0FBYSxFQUNqQixDQU1KLENBRUFGLEVBQWlCdEUsYUFsRGtELENBQUMsQyIsImZpbGUiOiJzdGF0aWMvanMvMTAwLjBkY2UyZmE2LmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJAcGtnL3JlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGFwcC9iYW5jb3ItY29tcG9uZW50cy9FbGVtZW50L0J1dHRvblwiO1xuaW1wb3J0IHsgdXNlVGV4dCB9IGZyb20gXCJAYXBwL2JhbmNvci1jb21wb25lbnRzL0VsZW1lbnQvVGV4dFwiO1xuaW1wb3J0IHR5cGUgeyBQcm9wRWxlbWVudCwgUHJvcERlZmF1bHRzLCBQcm9wVHlwZXMgfSBmcm9tIFwiQHBrZy9yZWFjdC1zdG9yeWJvb2svQ29tcG9uZW50XCI7XG5cbmV4cG9ydCB0eXBlIFByb3BUcmFzaEJ1dHRvbiA9IFByb3BFbGVtZW50ICYge1xuICAgIHJvd0lkOiBzdHJpbmc7XG4gICAgaGFuZGxlQ2xpY2s6IChyb3dJZDogc3RyaW5nKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IERFRl9UUkFTSF9CVVRUT05fUFJPUFM6IFByb3BEZWZhdWx0czxQcm9wVHJhc2hCdXR0b24+ID0ge307XG5cbmV4cG9ydCB0eXBlIFByb3BUeXBlc1Byb3BUcmFzaEJ1dHRvbiA9IFByb3BUeXBlczxQcm9wVHJhc2hCdXR0b24sIHR5cGVvZiBERUZfVFJBU0hfQlVUVE9OX1BST1BTPjtcblxuZXhwb3J0IGZ1bmN0aW9uIFRyYXNoQnV0dG9uKHByb3BzOiBQcm9wVHlwZXNQcm9wVHJhc2hCdXR0b24pIHtcbiAgICBjb25zdCB7IHJvd0lkLCBoYW5kbGVDbGljayB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyB0ZXh0R2V0IH0gPSB1c2VUZXh0KCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpY29uPVwidHJhc2hcIlxuICAgICAgICAgICAga2luZD1cImljb25cIlxuICAgICAgICAgICAgbGFiZWw9e3RleHRHZXQoeyB1dWlkOiBcInNwYS5zdXBwbGllcnMudm9pZE11bHRpcGxlUGF5bWVudHMudHJhc2gubGFiZWxcIiB9KX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKHJvd0lkKX1cbiAgICAgICAgLz5cbiAgICApO1xufVxuXG5UcmFzaEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSBERUZfVFJBU0hfQlVUVE9OX1BST1BTO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJAcGtnL3JlYWN0XCI7XG5pbXBvcnQgeyBFbmhhbmNlZFRhYmxlIGFzIFRhYmxlLCBCb3ggfSBmcm9tIFwiQGFwcC9iYW5jb24tdWlcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJAYXBwL2JhbmNvbi1kYXRhXCI7XG5pbXBvcnQgeyBTZWxlY3RvclNsaWNlU2Vzc2lvbiB9IGZyb20gXCJAYXBwL2JhbmNvbi1kYXRhL3NsaWNlcy9zZXNzaW9uXCI7XG5pbXBvcnQge1xuICAgIFNlbGVjdG9yU2xpY2VWb2lkUGF5bWVudHMsXG4gICAgQWN0aW9uU2xpY2VWb2lkUGF5bWVudHMsXG4gICAgRmV0Y2hlclNsaWNlVm9pZFBheW1lbnRzLFxufSBmcm9tIFwiQGFwcC9iYW5jb24tZGF0YS9zbGljZXMvc3VwcGxpZXJzL3ZvaWRQYXltZW50c1wiO1xuaW1wb3J0IHsgU2VsZWN0b3JTbGljZUNvbnN1bHRQYXltZW50cyB9IGZyb20gXCJAYXBwL2JhbmNvbi1kYXRhL3NsaWNlcy9zdXBwbGllcnMvY29uc3VsdFBheW1lbnRzXCI7XG5pbXBvcnQgeyBEYXRlRm9ybWF0cyB9IGZyb20gXCJAYXBwL2JhbmNvbi1kYXRhL3V0aWxzL2RhdGVcIjtcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tIFwiQGFwcC9iYW5jb3ItY29tcG9uZW50cy9FbGVtZW50L1RleHRcIjtcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcIkBhcHAvYmFuY29yLWNvbXBvbmVudHMvRWxlbWVudC9EYXRlVGltZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBhcHAvYmFuY29yLWNvbXBvbmVudHMvRWxlbWVudC9CdXR0b25cIjtcbmltcG9ydCB7IEFtb3VudEZvcm1hdHRlciB9IGZyb20gXCJAYXBwL2JhbmNvci1jb21wb25lbnRzL0VsZW1lbnQvQW1vdW50Rm9ybWF0dGVyXCI7XG5pbXBvcnQge1xuICAgIHVzZU5hdmlnYXRlLFxuICAgIHVzZVBhdGgsXG4gICAgQkFDS19ST1VURVIsXG4gICAgUk9VVEVfUEFUSF9TVVBQTElFUlNfVk9JRF9QQVlNRU5UU19TVEFURSxcbn0gZnJvbSBcIn4vcm91dGVzXCI7XG5pbXBvcnQgeyBWb2lkUGF5bWVudE1vZGFsIH0gZnJvbSBcIn4vc2VjdGlvbnMvU3VwcGxpZXJzL0NvbnN1bHRQYXltZW50cy9Nb2RhbHNcIjtcbmltcG9ydCB7IFRyYXNoQnV0dG9uIH0gZnJvbSBcIn4vc2VjdGlvbnMvU3VwcGxpZXJzL1ZvaWRQYXltZW50cy9UcmFzaEJ1dHRvblwiO1xuaW1wb3J0IHsgSW50ZXJuYWxDb250YWluZXIgfSBmcm9tIFwifi9jb250YWluZXJzL0ludGVybmFsXCI7XG5pbXBvcnQgeyBaRVJPIH0gZnJvbSBcIkBhcHAvYmFuY29uLWRhdGEvY29uc3RhbnRzXCI7XG5pbXBvcnQgdHlwZSB7IEhlYWRDZWxsIH0gZnJvbSBcIkBhcHAvYmFuY29uLXVpL2Rpc3QvY29tcG9uZW50cy9UYWJsZS9UYWJsZU1vZGVscy9UYWJsZU1vZGVscy50eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBOU1NsaWNlVm9pZFBheW1lbnRzIH0gZnJvbSBcIkBhcHAvYmFuY29uLWRhdGEvc2xpY2VzL3N1cHBsaWVycy92b2lkUGF5bWVudHNcIjtcbmltcG9ydCB7IEhlYWREYXRhLCBUcmFzaENvbHVtbiB9IGZyb20gXCIuL2hlYWREYXRhXCI7XG5cbmltcG9ydCBSdWxlcyBmcm9tIFwiLi9fcnVsZXMubW9kdWxlLnNjc3NcIjtcblxudHlwZSBQYXltZW50RGF0YVRyYW5zZmVyID0gTlNTbGljZVZvaWRQYXltZW50cy5QYXltZW50RGF0YVRyYW5zZmVyO1xudHlwZSBQYXltZW50RGF0YVJlbmRlciA9IHtcbiAgICBwYXltZW50QmF0Y2hJZDogc3RyaW5nO1xuICAgIHBheW1lbnRCYXRjaFBheUlkOiBzdHJpbmc7XG4gICAgcGF5bWVudEJhdGNoRGF0ZTogSlNYLkVsZW1lbnQ7XG4gICAgcGF5bWVudEJhdGNoRmlsZTogc3RyaW5nO1xuICAgIHBheW1lbnRCYXRjaEJhbmtBY2NvdW50Q0JVUmVjZWl2ZXI6IHN0cmluZztcbiAgICBwYXltZW50QmF0Y2hSZWZlcmVuY2U6IHN0cmluZztcbiAgICBwYXltZW50QmF0Y2hUb3RhbEFtb3VudDogSlNYLkVsZW1lbnQ7XG59O1xudHlwZSBSb3dEYXRhID0gUGF5bWVudERhdGFSZW5kZXIgJiB7IGlkOiBzdHJpbmc7IHRyYXNoOiBKU1guRWxlbWVudCB9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWb2lkUGF5bWVudHMoKSB7XG4gICAgY29uc3QgW3Nob3dWb2lkUGF5bWVudE1vZGFsLCBzZXRTaG93Vm9pZFBheW1lbnRNb2RhbF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2hlYWREYXRhLCBzZXRIZWFkRGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxIZWFkQ2VsbFtdPihbXSk7XG4gICAgY29uc3QgW3Jvd3NEYXRhLCBzZXRSb3dzRGF0YV0gPSBSZWFjdC51c2VTdGF0ZTxSb3dEYXRhW10+KFtdKTtcblxuICAgIGNvbnN0IHsgdGV4dEdldCB9ID0gdXNlVGV4dCgpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG5cbiAgICBjb25zdCB1cmxEZXRhaWwgPSB1c2VQYXRoKFJPVVRFX1BBVEhfU1VQUExJRVJTX1ZPSURfUEFZTUVOVFNfU1RBVEUpO1xuXG4gICAgY29uc3QgZGVsZXRlUm93ID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgICAgIChyb3dJZDogc3RyaW5nKSA9PiBkaXNwYXRjaChBY3Rpb25TbGljZVZvaWRQYXltZW50cy5yZW1vdmVQYXltZW50VG9Wb2lkKHJvd0lkKSksXG4gICAgICAgIFtkaXNwYXRjaF0sXG4gICAgKTtcbiAgICBjb25zdCBnZXRSb3dzID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgICAgIChyb3dzOiBQYXltZW50RGF0YVRyYW5zZmVyW10pID0+XG4gICAgICAgICAgICByb3dzLm1hcCgocm93KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnJvdyxcbiAgICAgICAgICAgICAgICBpZDogcm93LnBheW1lbnRCYXRjaFBheUlkLFxuICAgICAgICAgICAgICAgIHBheW1lbnRCYXRjaFRvdGFsQW1vdW50OiAoXG4gICAgICAgICAgICAgICAgICAgIDxBbW91bnRGb3JtYXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17cm93LnBheW1lbnRCYXRjaFRvdGFsQW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtSdWxlcy5hbW91bnRDb2x9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBwYXltZW50QmF0Y2hEYXRlOiAoXG4gICAgICAgICAgICAgICAgICAgIDxEYXRlVGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17cm93LnBheW1lbnRCYXRjaERhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRQYXJhbXM9e3sgZm9ybWF0OiBEYXRlRm9ybWF0cy5TSE9SVCB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgdHJhc2g6IDxUcmFzaEJ1dHRvbiBoYW5kbGVDbGljaz17ZGVsZXRlUm93fSByb3dJZD17cm93LnBheW1lbnRCYXRjaFBheUlkfSAvPixcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgW2RlbGV0ZVJvd10sXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbXBsZXRlZFZvaWRQYXltZW50ID0gdXNlU2VsZWN0b3IoU2VsZWN0b3JTbGljZVZvaWRQYXltZW50cy5jb21wbGV0ZWRWb2lkUGF5bWVudCk7XG4gICAgY29uc3QgY29udHJhY3RJZCA9IHVzZVNlbGVjdG9yKFNlbGVjdG9yU2xpY2VDb25zdWx0UGF5bWVudHMuY29udHJhY3RJZCk7XG4gICAgY29uc3QgcGF5bWVudElkcyA9IHVzZVNlbGVjdG9yKFNlbGVjdG9yU2xpY2VDb25zdWx0UGF5bWVudHMucGF5bWVudElkcyk7XG4gICAgY29uc3QgcGF5bWVudHMgPSB1c2VTZWxlY3RvcihTZWxlY3RvclNsaWNlQ29uc3VsdFBheW1lbnRzLnBheW1lbnRzKTtcblxuICAgIGNvbnN0IGZldGNoaW5nID0gdXNlU2VsZWN0b3IoU2VsZWN0b3JTbGljZVZvaWRQYXltZW50cy5mZXRjaGluZyk7XG4gICAgY29uc3QgcGF5bWVudHNUb1ZvaWQgPSB1c2VTZWxlY3RvcihTZWxlY3RvclNsaWNlVm9pZFBheW1lbnRzLnBheW1lbnRzVG9Wb2lkKTtcbiAgICBjb25zdCB0b2tlbiA9IHVzZVNlbGVjdG9yKFNlbGVjdG9yU2xpY2VTZXNzaW9uLnRva2VuKTtcblxuICAgIC8vIE5hdmlnYXRlIHRvIHRoZSBwYXltZW50cyBzdGF0ZSBwYWdlIGFmdGVyIHZvaWRpbmcgdGhlIHBheW1lbnRzXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjb21wbGV0ZWRWb2lkUGF5bWVudCkgcmV0dXJuO1xuICAgICAgICBuYXZpZ2F0ZSh1cmxEZXRhaWwpO1xuICAgIH0sIFtjb21wbGV0ZWRWb2lkUGF5bWVudCwgbmF2aWdhdGUsIHVybERldGFpbF0pO1xuXG4gICAgLy8gT25seSBtYXAgaGVhZCBkYXRhIG9uZSB0aW1lIG9uIG1vdW50XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZERhdGFSZW5kZXIgPSBIZWFkRGF0YS5tYXAoKGhlYWRDZWxsKSA9PiAoe1xuICAgICAgICAgICAgLi4uaGVhZENlbGwsXG4gICAgICAgICAgICBsYWJlbDogdGV4dEdldCh7IHV1aWQ6IGhlYWRDZWxsLmxhYmVsIH0pLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgaGVhZERhdGFSZW5kZXIucHVzaCh7XG4gICAgICAgICAgICAuLi5UcmFzaENvbHVtbixcbiAgICAgICAgICAgIGxhYmVsOiB0ZXh0R2V0KHsgdXVpZDogVHJhc2hDb2x1bW4ubGFiZWwgfSksXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRIZWFkRGF0YShoZWFkRGF0YVJlbmRlcik7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHNldEhlYWREYXRhKFtdKTtcbiAgICB9LCBbdGV4dEdldF0pO1xuXG4gICAgLy8gVXBkYXRlIHRoZSByb3dzIHRvIHJlbmRlciBldmVyeSB0aW1lIHRoZSBkYXRhIGNoYW5nZXNcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRSb3dzRGF0YShnZXRSb3dzKHBheW1lbnRzVG9Wb2lkKSk7XG4gICAgfSwgW2dldFJvd3MsIHBheW1lbnRzVG9Wb2lkXSk7XG5cbiAgICAvLyBXZSBzdG9yZSB0aGUgcGF5bWVudHMgaW4gb3VyIHNsaWNlXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFwYXltZW50cyB8fCAhcGF5bWVudElkcykgcmV0dXJuO1xuICAgICAgICBkaXNwYXRjaChBY3Rpb25TbGljZVZvaWRQYXltZW50cy51cGRhdGVQYXltZW50c1RvVm9pZCh7IHBheW1lbnRzLCBwYXltZW50SWRzIH0pKTtcbiAgICB9LCBbZGlzcGF0Y2gsIHBheW1lbnRzLCBwYXltZW50SWRzXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8Vm9pZFBheW1lbnRNb2RhbFxuICAgICAgICAgICAgICAgIGlzTXVsdGlwbGVWb2lkXG4gICAgICAgICAgICAgICAgc2V0U2hvd01vZGFsPXtzZXRTaG93Vm9pZFBheW1lbnRNb2RhbH1cbiAgICAgICAgICAgICAgICBzaG93TW9kYWw9e3Nob3dWb2lkUGF5bWVudE1vZGFsfVxuICAgICAgICAgICAgICAgIG9uQ29udGludWU9e2hhbmRsZVZvaWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEludGVybmFsQ29udGFpbmVyIGNsYXNzTmFtZT17UnVsZXMudm9pZFBheW1lbnRzfSBoZWFkZXItb25CYWNrPXtoYW5kbGVCYWNrfT5cbiAgICAgICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtSdWxlcy5wYXltZW50c1RhYmxlfVxuICAgICAgICAgICAgICAgICAgICBoZWFkRGF0YT17aGVhZERhdGF9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwidm9pZFBheW1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IFpFUk8sXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICByb3dzRGF0YT17cm93c0RhdGF9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0ZXh0R2V0KHsgdXVpZDogXCJzcGEuc3VwcGxpZXJzLnZvaWRNdWx0aXBsZVBheW1lbnRzLnRhYmxlLnRpdGxlXCIgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Qm94IGZsZXggY2xhc3NOYW1lPXtSdWxlcy5idXR0b25zfSBzZWxmPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt7IHV1aWQ6IFwic3BhLmZvcm0uYmFja1wiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQmFja31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzU3Bpbm5lcj17ZmV0Y2hpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17eyB1dWlkOiBcInNwYS5zdXBwbGllcnMudm9pZE11bHRpcGxlUGF5bWVudHMuYnV0dG9uLnZvaWRcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b3Blbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9JbnRlcm5hbENvbnRhaW5lcj5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgICAgICBzZXRTaG93Vm9pZFBheW1lbnRNb2RhbCh0cnVlKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVWb2lkKCkge1xuICAgICAgICBpZiAoIXRva2VuKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgc2VxdWVuY2VzID0gcGF5bWVudHNUb1ZvaWQubWFwKChwYXltZW50KSA9PiAoe1xuICAgICAgICAgICAgYmF0Y2hJZDogcGF5bWVudC5wYXltZW50QmF0Y2hJZCxcbiAgICAgICAgICAgIGZpbGVOYW1lOiBwYXltZW50LnBheW1lbnRCYXRjaEZpbGUsXG4gICAgICAgICAgICBzZXF1ZW5jZUlEOiBwYXltZW50LnBheW1lbnRCYXRjaFBheUlkLFxuICAgICAgICAgICAgYW1vdW50OiBwYXltZW50LnBheW1lbnRCYXRjaFRvdGFsQW1vdW50LFxuICAgICAgICAgICAgcGF5bWVudEJhdGNoRGF0ZTogcGF5bWVudC5wYXltZW50QmF0Y2hEYXRlLFxuICAgICAgICAgICAgcmVjZWl2ZXJDQlU6IHBheW1lbnQucGF5bWVudEJhdGNoQmFua0FjY291bnRDQlVSZWNlaXZlcixcbiAgICAgICAgICAgIHBheW1lbnRSZWZlcmVuY2U6IHBheW1lbnQucGF5bWVudEJhdGNoUmVmZXJlbmNlLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goXG4gICAgICAgICAgICBGZXRjaGVyU2xpY2VWb2lkUGF5bWVudHMudm9pZFBheW1lbnRzKHtcbiAgICAgICAgICAgICAgICB0b2tlbixcbiAgICAgICAgICAgICAgICBjb250cmFjdElkLFxuICAgICAgICAgICAgICAgIHNlcXVlbmNlcyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUJhY2soKSB7XG4gICAgICAgIG5hdmlnYXRlKEJBQ0tfUk9VVEVSKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBaRVJPX1NUUiB9IGZyb20gXCJAYXBwL2JhbmNvbi1kYXRhL2NvbnN0YW50c1wiO1xuaW1wb3J0IHR5cGUgeyBIZWFkQ2VsbCB9IGZyb20gXCJAYXBwL2JhbmNvbi11aS9kaXN0L2NvbXBvbmVudHMvVGFibGUvVGFibGVNb2RlbHMvVGFibGVNb2RlbHMudHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IEhlYWREYXRhOiBIZWFkQ2VsbFtdID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IFwicGF5bWVudEJhdGNoRGF0ZVwiLFxuICAgICAgICBsYWJlbDogXCJzcGEuc3VwcGxpZXJzLnZvaWRNdWx0aXBsZVBheW1lbnRzLnRhYmxlSGVhZC5kYXRlXCIsXG4gICAgICAgIG51bWVyaWM6IGZhbHNlLFxuICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcInBheW1lbnRCYXRjaEZpbGVcIixcbiAgICAgICAgbGFiZWw6IFwic3BhLnN1cHBsaWVycy52b2lkTXVsdGlwbGVQYXltZW50cy50YWJsZUhlYWQuZmlsZU5hbWVcIixcbiAgICAgICAgbnVtZXJpYzogZmFsc2UsXG4gICAgICAgIGFsaWduOiBcImxlZnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwicGF5bWVudEJhdGNoQmFua0FjY291bnRDQlVSZWNlaXZlclwiLFxuICAgICAgICBsYWJlbDogXCJzcGEuc3VwcGxpZXJzLnZvaWRNdWx0aXBsZVBheW1lbnRzLnRhYmxlSGVhZC5yZWNpcGllbnRDQlVcIixcbiAgICAgICAgbnVtZXJpYzogZmFsc2UsXG4gICAgICAgIGFsaWduOiBcImxlZnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwicGF5bWVudEJhdGNoUmVmZXJlbmNlXCIsXG4gICAgICAgIGxhYmVsOiBcInNwYS5zdXBwbGllcnMudm9pZE11bHRpcGxlUGF5bWVudHMudGFibGVIZWFkLnBheW1lbnRSZWZlcmVuY2VcIixcbiAgICAgICAgbnVtZXJpYzogZmFsc2UsXG4gICAgICAgIGFsaWduOiBcImxlZnRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwicGF5bWVudEJhdGNoVG90YWxBbW91bnRcIixcbiAgICAgICAgbGFiZWw6IFwic3BhLnN1cHBsaWVycy52b2lkTXVsdGlwbGVQYXltZW50cy50YWJsZUhlYWQuYW1vdW50XCIsXG4gICAgICAgIG51bWVyaWM6IHRydWUsXG4gICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBTdGF0ZUNvbHVtbjogSGVhZENlbGwgPSB7XG4gICAgaWQ6IFwicGF5bWVudFN0YXR1c1wiLFxuICAgIGxhYmVsOiBcInNwYS5zdXBwbGllcnMudm9pZE11bHRpcGxlUGF5bWVudHMudGFibGVIZWFkLm9wU3RhdGVcIixcbiAgICBudW1lcmljOiBmYWxzZSxcbiAgICBhbGlnbjogXCJsZWZ0XCIsXG59O1xuXG5leHBvcnQgY29uc3QgVHJhc2hDb2x1bW46IEhlYWRDZWxsID0ge1xuICAgIGlkOiBcInRyYXNoXCIsXG4gICAgbGFiZWw6IFpFUk9fU1RSLFxuICAgIG51bWVyaWM6IGZhbHNlLFxuICAgIGFsaWduOiBcInJpZ2h0XCIsXG59O1xuXG5leHBvcnQgY29uc3QgRmlsZUVycm9ySGVhZERhdGE6IEhlYWRDZWxsW10gPSBbXG4gICAge1xuICAgICAgICBpZDogXCJyb3dcIixcbiAgICAgICAgbGFiZWw6IFwic3BhLnN1cHBsaWVycy5nZW5lcmF0ZVBheW1lbnQuZmlsZVBheW1lbnQuZXJyb3JUYWJsZS5yb3dcIixcbiAgICAgICAgbnVtZXJpYzogdHJ1ZSxcbiAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCJjYnVGcm9tXCIsXG4gICAgICAgIGxhYmVsOiBcInNwYS5zdXBwbGllcnMuZ2VuZXJhdGVQYXltZW50LmZpbGVQYXltZW50LmVycm9yVGFibGUub3JpZ2luQ0JVXCIsXG4gICAgICAgIG51bWVyaWM6IGZhbHNlLFxuICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcImNidVRvXCIsXG4gICAgICAgIGxhYmVsOiBcInNwYS5zdXBwbGllcnMudm9pZE11bHRpcGxlUGF5bWVudHMudGFibGVIZWFkLnJlY2lwaWVudENCVVwiLFxuICAgICAgICBudW1lcmljOiBmYWxzZSxcbiAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCJhbW91bnRcIixcbiAgICAgICAgbGFiZWw6IFwic3BhLnN1cHBsaWVycy52b2lkTXVsdGlwbGVQYXltZW50cy50YWJsZUhlYWQuYW1vdW50XCIsXG4gICAgICAgIG51bWVyaWM6IHRydWUsXG4gICAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcImRhdGVcIixcbiAgICAgICAgbGFiZWw6IFwic3BhLnN1cHBsaWVycy52b2lkTXVsdGlwbGVQYXltZW50cy50YWJsZUhlYWQuZGF0ZVwiLFxuICAgICAgICBudW1lcmljOiBmYWxzZSxcbiAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCJyZWZlcmVuY2VcIixcbiAgICAgICAgbGFiZWw6IFwic3BhLnN1cHBsaWVycy52b2lkTXVsdGlwbGVQYXltZW50cy50YWJsZUhlYWQucGF5bWVudFJlZmVyZW5jZVwiLFxuICAgICAgICBudW1lcmljOiBmYWxzZSxcbiAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCJlbWFpbFwiLFxuICAgICAgICBsYWJlbDogXCJzcGEuc3VwcGxpZXJzLmdlbmVyYXRlUGF5bWVudC5maWxlUGF5bWVudC5lcnJvclRhYmxlLmVtYWlsXCIsXG4gICAgICAgIG51bWVyaWM6IGZhbHNlLFxuICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcImVycm9yXCIsXG4gICAgICAgIGxhYmVsOiBcInNwYS5zdXBwbGllcnMuZ2VuZXJhdGVQYXltZW50LmZpbGVQYXltZW50LmVycm9yVGFibGUuZXJyb3JcIixcbiAgICAgICAgbnVtZXJpYzogZmFsc2UsXG4gICAgICAgIGFsaWduOiBcImxlZnRcIixcbiAgICB9LFxuXTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJOQU1FX1RIRU1FUExBVEZPUk1cIjpcIlRoZW1lUGxhdGZvcm1cIixcIlRZUEVfVEhFTUVQTEFURk9STVwiOlwiQnVuZGxlXCIsXCJOQU1FX0NPTlNVTUVSX1RIRU1FUExBVEZPUk1cIjpcIlRoZW1lUGxhdGZvcm1Db25zdW1lclwiLFwiVFlQRV9DT05TVU1FUl9USEVNRVBMQVRGT1JNXCI6XCJFbGVtZW50XCIsXCJOQU1FX1BST1ZJREVSX1RIRU1FUExBVEZPUk1cIjpcIlRoZW1lUGxhdGZvcm1Qcm92aWRlclwiLFwiVFlQRV9QUk9WSURFUl9USEVNRVBMQVRGT1JNXCI6XCJQcm92aWRlclwiLFwiTkFNRV9URVhUXCI6XCJUZXh0XCIsXCJUWVBFX1RFWFRcIjpcIkVsZW1lbnRcIixcIk5BTUVfQlVUVE9OXCI6XCJCdXR0b25cIixcIlRZUEVfQlVUVE9OXCI6XCJFbGVtZW50XCIsXCJOQU1FX0RBVEVUSU1FXCI6XCJEYXRlVGltZVwiLFwiVFlQRV9EQVRFVElNRVwiOlwiRWxlbWVudFwiLFwiTkFNRV9BTU9VTlRfRk9STUFUVEVSXCI6XCJBbW91bnRGb3JtYXR0ZXJcIixcIlRZUEVfQU1PVU5UX0ZPUk1BVFRFUlwiOlwiRWxlbWVudFwiLFwidm9pZFBheW1lbnRzXCI6XCJfcnVsZXNfdm9pZFBheW1lbnRzX18zaElxVlwiLFwicGF5bWVudHNUYWJsZVwiOlwiX3J1bGVzX3BheW1lbnRzVGFibGVfXzFoM3pyXCIsXCJidXR0b25zXCI6XCJfcnVsZXNfYnV0dG9uc19fMnozYldcIixcInZvaWRQYXltZW50c1N0YXRlXCI6XCJfcnVsZXNfdm9pZFBheW1lbnRzU3RhdGVfXzMwZmFBXCIsXCJ2b2lkUGF5bWVudHNUaWNrZXRcIjpcIl9ydWxlc192b2lkUGF5bWVudHNUaWNrZXRfXzEyQ1VkXCIsXCJwYXltZW50RGV0YWlsc1wiOlwiX3J1bGVzX3BheW1lbnREZXRhaWxzX19WbC1xOVwiLFwiYW1vdW50Q29sXCI6XCJfcnVsZXNfYW1vdW50Q29sX18yaFZHalwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTkFNRV9USEVNRVBMQVRGT1JNXCI6XCJUaGVtZVBsYXRmb3JtXCIsXCJUWVBFX1RIRU1FUExBVEZPUk1cIjpcIkJ1bmRsZVwiLFwiTkFNRV9DT05TVU1FUl9USEVNRVBMQVRGT1JNXCI6XCJUaGVtZVBsYXRmb3JtQ29uc3VtZXJcIixcIlRZUEVfQ09OU1VNRVJfVEhFTUVQTEFURk9STVwiOlwiRWxlbWVudFwiLFwiTkFNRV9QUk9WSURFUl9USEVNRVBMQVRGT1JNXCI6XCJUaGVtZVBsYXRmb3JtUHJvdmlkZXJcIixcIlRZUEVfUFJPVklERVJfVEhFTUVQTEFURk9STVwiOlwiUHJvdmlkZXJcIixcIk5BTUVfVEVYVFwiOlwiVGV4dFwiLFwiVFlQRV9URVhUXCI6XCJFbGVtZW50XCIsXCJOQU1FX0JVVFRPTlwiOlwiQnV0dG9uXCIsXCJUWVBFX0JVVFRPTlwiOlwiRWxlbWVudFwiLFwidm9pZFBheW1lbnRNb2RhbFwiOlwiX3J1bGVzX3ZvaWRQYXltZW50TW9kYWxfXzI1MmltXCIsXCJmb290ZXJcIjpcIl9ydWxlc19mb290ZXJfXzEyb1FEXCIsXCJ0ZXJtc0FuZENvbmRpdGlvbnNcIjpcIl9ydWxlc190ZXJtc0FuZENvbmRpdGlvbnNfX2g1cHY2XCIsXCJkb3dubG9hZEFsbFwiOlwiX3J1bGVzX2Rvd25sb2FkQWxsX18zYTluUlwiLFwiZG93bmxvYWRNdWx0aXBsZVwiOlwiX3J1bGVzX2Rvd25sb2FkTXVsdGlwbGVfXzItNU85XCJ9OyIsImltcG9ydCBSZWFjdCBmcm9tIFwiQHBrZy9yZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBQcm9wRWxlbWVudCwgUHJvcERlZmF1bHRzLCBQcm9wVHlwZXMgfSBmcm9tIFwiQHBrZy9yZWFjdC1zdG9yeWJvb2svQ29tcG9uZW50XCI7XG5cbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIkBhcHAvYmFuY29uLWRhdGFcIjtcbmltcG9ydCB7IFNlbGVjdG9yU2xpY2VDb25maWd1cmF0aW9uIH0gZnJvbSBcIkBhcHAvYmFuY29uLWRhdGEvc2xpY2VzL2NvbmZpZ3VyYXRpb25cIjtcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBhcHAvYmFuY29yLWNvbXBvbmVudHMvRWxlbWVudC9CdXR0b25cIjtcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIkBhcHAvYmFuY29yLWNvbXBvbmVudHMvRWxlbWVudC9Nb2RhbFwiO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gXCJAYXBwL2JhbmNvci1jb21wb25lbnRzL0VsZW1lbnQvVGV4dFwiO1xuXG5pbXBvcnQgUnVsZXMgZnJvbSBcIi4vX3J1bGVzLm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCB0eXBlIFByb3BWb2lkUGF5bWVudE1vZGFsID0gUHJvcEVsZW1lbnQgJiB7XG4gICAgaXNNdWx0aXBsZVZvaWQ6IGJvb2xlYW47XG4gICAgc2hvd01vZGFsOiBib29sZWFuO1xuICAgIHNldFNob3dNb2RhbDogKHByZXY6IGJvb2xlYW4pID0+IHZvaWQ7XG4gICAgb25Db250aW51ZTogKCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBERUZfTU9EQUxfUFJPUFM6IFByb3BEZWZhdWx0czxQcm9wVm9pZFBheW1lbnRNb2RhbD4gPSB7fTtcblxuZXhwb3J0IHR5cGUgUHJvcFR5cGVzUHJvcFZvaWRQYXltZW50TW9kYWwgPSBQcm9wVHlwZXM8UHJvcFZvaWRQYXltZW50TW9kYWwsIHR5cGVvZiBERUZfTU9EQUxfUFJPUFM+O1xuXG5leHBvcnQgZnVuY3Rpb24gVm9pZFBheW1lbnRNb2RhbChwcm9wczogUHJvcFR5cGVzUHJvcFZvaWRQYXltZW50TW9kYWwpIHtcbiAgICBjb25zdCB7IHNob3dNb2RhbCwgc2V0U2hvd01vZGFsLCBpc011bHRpcGxlVm9pZCwgb25Db250aW51ZSB9ID1cbiAgICAgICAgcHJvcHMgYXMgUHJvcFR5cGVzUHJvcFZvaWRQYXltZW50TW9kYWw7XG4gICAgY29uc3QgaXNEZXNrdG9wID0gdXNlU2VsZWN0b3IoU2VsZWN0b3JTbGljZUNvbmZpZ3VyYXRpb24uaXNEZXNrdG9wKTtcblxuICAgIGNvbnN0IHZvaWRQYXltZW50TXNnSWQgPSBpc011bHRpcGxlVm9pZCA/IFwidm9pZE11bHRpcGxlUGF5bWVudHNcIiA6IFwidm9pZFBheW1lbnRcIjtcbiAgICBjb25zdCB1dWlkTW9iaWxlVmFyaWFudCA9ICFpc0Rlc2t0b3AgPyBcIi5tb2JpbGVcIiA6IFwiXCI7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT17UnVsZXMudm9pZFBheW1lbnRNb2RhbH1cbiAgICAgICAgICAgIGNsb3NlT25CZ1RhcD17ZmFsc2V9XG4gICAgICAgICAgICBvcGVuPXtzaG93TW9kYWx9XG4gICAgICAgICAgICB0aXRsZT17YHNwYS5zdXBwbGllcnMuJHt2b2lkUGF5bWVudE1zZ0lkfS5tb2RhbC50aXRsZWB9XG4gICAgICAgICAgICBvbkNsb3NlPXtjbG9zZU1vZGFsfT5cbiAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxUZXh0IHV1aWQ9e2BzcGEuc3VwcGxpZXJzLiR7dm9pZFBheW1lbnRNc2dJZH0ubW9kYWwuYm9keSR7dXVpZE1vYmlsZVZhcmlhbnR9YH0gLz5cbiAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1J1bGVzLmZvb3Rlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt7IHV1aWQ6IFwic3BhLmZvcm0uY2FuY2VsXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt7IHV1aWQ6IFwic3BhLmZvcm0uY29uZmlybVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNvbnRpbnVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHNldFNob3dNb2RhbChmYWxzZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ29udGludWUoKSB7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgb25Db250aW51ZSgpO1xuICAgIH1cbn1cblxuVm9pZFBheW1lbnRNb2RhbC5kZWZhdWx0UHJvcHMgPSBERUZfTU9EQUxfUFJPUFM7XG4iXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=100.0dce2fa6.chunk.js.map
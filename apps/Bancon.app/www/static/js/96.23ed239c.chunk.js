(this["webpackJsonp@app/bancon"]=this["webpackJsonp@app/bancon"]||[]).push([[96,299],{244:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n(16),s=n(11),r=n(51),o=n(39),c=n(187),i=n(152),l=n(33),u=n(8),d=n(488),b=n(82),m=n(270),_=n(38),E=n(497),O=n(90),j=n(515),p=n(50),T=n(490),M=n(570),h=n.n(M),f=n(10);function A(e){var t=e,n=t.showModal,a=t.setShowModal;return Object(f.jsx)(T.a,{className:h.a.termsAndConditions,closeOnBgTap:!1,open:n,title:"spa.suppliers.termsAndConditions.title",onClose:s,children:Object(f.jsxs)(T.a.Body,{children:[Object(f.jsx)(_.b,{tag:"h5",uuid:"spa.suppliers.termsAndConditions.subtitle"}),Object(f.jsx)(_.b,{tag:"h5",uuid:"spa.suppliers.termsAndConditions.title"}),Object(f.jsx)(_.b,{uuid:"spa.suppliers.termsAndConditions.description"}),Object(f.jsx)(b.a,{label:{uuid:"spa.form.continue"},type:"submit",onClick:s})]})});function s(){a(!1)}}A.defaultProps={};function P(e){var t=e,n=t.showModal,a=t.setShowModal,s=Object(u.b)(),r=Object(_.c)().textGet,o=Object(u.c)(l.e.corporateDocument),c=Object(u.c)(l.e.token),m=d.a.useContext().getValues,E=r({uuid:"spa.suppliers.acceptAgreement.cuit"}),O=r({uuid:"spa.suppliers.acceptAgreement.description",replace:["<strong>".concat(E,"</strong>"),"<strong>".concat(o,"</strong>")]});return Object(f.jsxs)(T.a,{className:h.a.AcceptAgreement,closeOnBgTap:!1,open:n,title:"spa.suppliers.acceptAgreement.title",onClose:function(){a(!1)},children:[Object(f.jsx)(T.a.Body,{children:Object(f.jsx)(_.b,{children:Object(f.jsx)("span",{dangerouslySetInnerHTML:{__html:O}})})}),Object(f.jsx)(T.a.Footer,{children:Object(f.jsx)(b.a,{label:{uuid:"spa.form.continue"},type:"submit",onClick:function(){if(!c)return;if(!m().adhered)return;a(!1),s(i.b.adheredAgreement({token:c}))}})})]})}P.defaultProps={};var C=n(450),x=n.n(C);function g(){var e=Object(r.qb)(),t=Object(u.b)(),n=Object(r.sb)(r.V),T=Object(_.c)().textGet,M=s.b.useState(),h=Object(a.a)(M,2),C=h[0],g=h[1],N=s.b.useState(),R=Object(a.a)(N,2),v=R[0],S=R[1],B=s.b.useState(!1),F=Object(a.a)(B,2),k=F[0],w=F[1],H=Object(u.c)(l.e.token),I=Object(u.c)(i.c.fetchedContractId),U=Object(u.c)(i.c.warning),y=Object(u.c)(i.c.isAdhered),D=Object(u.c)(i.c.adhereTransactionId),L=T({uuid:"spa.paymentSuppliers.termsAndConditionsError"}),Y=o.e.object({adhered:Object(c.d)(o.e.boolean.equals(!0),L)}),X=Object(r.sb)(r.U);return s.b.useEffect((function(){return function(){t(i.a.cleanFetchers())}}),[t]),s.b.useEffect((function(){H&&t(i.b.contractId({token:H}))}),[t,H]),s.b.useEffect((function(){y&&e(n,{replace:!0})}),[t,y,e,n]),s.b.useEffect((function(){D&&e(X)}),[D,t,e,X]),y||!I?Object(f.jsx)(m.a,{}):Object(f.jsxs)(E.a,{withoutBox:!0,className:x.a.agreement,"header-onBack":G,children:[Object(f.jsx)("header",{children:Object(f.jsx)(_.b,{className:x.a.agreementTitle,tag:"h5",uuid:"spa.suppliers.agreement.title"})}),Object(f.jsx)(p.Card,{className:x.a.cardContainer,children:Object(f.jsxs)(d.a,{schema:Y,warnings:U,children:[Object(f.jsx)(_.b,{className:x.a.agreementDescription,tag:"p",uuid:"spa.suppliers.agreement.description"}),Object(f.jsx)(j.a,{label:function(){var e=T({uuid:"spa.suppliers.agreement.accept"});return Object(f.jsxs)("div",{className:x.a.labelAgreement,children:[Object(f.jsx)(_.b,{tag:"span",children:Object(O.a)(e)}),Object(f.jsx)(b.a,{kind:"plain",label:{uuid:"spa.suppliers.agreement.terms.and.conditions"},type:"button",onClick:V})]})}(),name:"adhered",onChange:function(){w(!k)}}),Object(f.jsxs)("footer",{children:[Object(f.jsx)(b.a,{label:{uuid:"spa.form.cancel"},variant:"outlined",onClick:G}),Object(f.jsx)(b.a,{label:{uuid:"spa.form.accept"},type:"submit",onClick:K})]}),Object(f.jsx)(P,{setShowModal:S,showModal:v})]})}),Object(f.jsx)(A,{setShowModal:g,showModal:C})]});function V(){g(!C)}function K(){k&&S(!v)}function G(){e(r.a)}}},450:function(e,t,n){e.exports={NAME_AMOUNT_FORMATTER:"AmountFormatter",TYPE_AMOUNT_FORMATTER:"Element",NAME_INPUT_CHECKBOX:"InputCheckbox",TYPE_INPUT_CHECKBOX:"Element",NAME_THEMEPLATFORM:"ThemePlatform",TYPE_THEMEPLATFORM:"Bundle",NAME_CONSUMER_THEMEPLATFORM:"ThemePlatformConsumer",TYPE_CONSUMER_THEMEPLATFORM:"Element",NAME_PROVIDER_THEMEPLATFORM:"ThemePlatformProvider",TYPE_PROVIDER_THEMEPLATFORM:"Provider",NAME_TEXT:"Text",TYPE_TEXT:"Element",NAME_BUTTON:"Button",TYPE_BUTTON:"Element",NAME_DATETIME:"DateTime",TYPE_DATETIME:"Element",NAME_XS:"xs",NAME_SM:"sm",NAME_MD:"md",NAME_LG:"lg",consultPayments:"_rules_consultPayments__wwEGk",agreement:"_rules_agreement__AjqF1",cardContainer:"_rules_cardContainer__1KBPl",subtitleDate:"_rules_subtitleDate__2nfSU",agreementTitle:"_rules_agreementTitle__2ntc8",agreementDescription:"_rules_agreementDescription__TLXMi",labelAgreement:"_rules_labelAgreement__3bnWF",detail:"_rules_detail__T6QVd"}},515:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(2),s=n(16),r=n(19),o=n(11),c=n(50),i=n(41),l=n(488),u=n(520),d=n.n(u),b=n(10),m=["id","name","methods","onChange","isChecked"],_=d.a.NAME_INPUT_CHECKBOX,E=d.a.TYPE_INPUT_CHECKBOX,O=o.b.memo((function(e){var t,n=e.id,l=e.name,u=e.methods,d=e.onChange,O=e.isChecked,j=Object(r.a)(e,m),p=o.b.useState(O),T=Object(s.a)(p,2),M=T[0],h=T[1],f=u.register,A=u.formState,P=u.setValue,C=u.clearErrors,x=A.errors,g="".concat(l);o.b.useEffect((function(){void 0!==O&&(h(O),P(g,O,{shouldValidate:!0}))}),[O,g,P]);var N=x[l];return Object(b.jsx)(i.a,{name:_,type:E,children:Object(b.jsx)(c.Checkbox,Object(a.a)(Object(a.a)(Object(a.a)({id:n||l},N&&{error:null===(t=N.message)||void 0===t?void 0:t.toString()}),f(g)),{},{isChecked:M,onChange:function(e){var t=!M;h(t),P(g,t),d&&d(e),C([g])}},j))})}),(function(e,t){return e.methods.formState.errors===t.methods.formState.errors&&e.methods.formState.dirtyFields[e.name]!==t.methods.formState.dirtyFields[t.name]}));function j(e){var t=l.a.useContext();return Object(b.jsx)(O,Object(a.a)({methods:t},e))}j.displayName=_},520:function(e,t,n){e.exports={NAME_INPUT_CHECKBOX:"InputCheckbox",TYPE_INPUT_CHECKBOX:"Element"}},570:function(e,t,n){e.exports={NAME_THEMEPLATFORM:"ThemePlatform",TYPE_THEMEPLATFORM:"Bundle",NAME_CONSUMER_THEMEPLATFORM:"ThemePlatformConsumer",TYPE_CONSUMER_THEMEPLATFORM:"Element",NAME_PROVIDER_THEMEPLATFORM:"ThemePlatformProvider",TYPE_PROVIDER_THEMEPLATFORM:"Provider",NAME_TEXT:"Text",TYPE_TEXT:"Element",NAME_BUTTON:"Button",TYPE_BUTTON:"Element",voidPaymentModal:"_rules_voidPaymentModal__252im",footer:"_rules_footer__12oQD",termsAndConditions:"_rules_termsAndConditions__h5pv6",downloadAll:"_rules_downloadAll__3a9nR",downloadMultiple:"_rules_downloadMultiple__2-5O9"}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvU3VwcGxpZXJzL0NvbnN1bHRQYXltZW50cy9Nb2RhbHMvVGVybXNBbmRDb25kaXRpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvU3VwcGxpZXJzL0NvbnN1bHRQYXltZW50cy9Nb2RhbHMvQWNjZXB0QWdyZWVtZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvU3VwcGxpZXJzL0NvbnN1bHRQYXltZW50cy9BZ3JlZW1lbnQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9TdXBwbGllcnMvQ29uc3VsdFBheW1lbnRzL0FncmVlbWVudC9fcnVsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL2JhbmNvci1jb21wb25lbnRzL0VsZW1lbnQvRm9ybS9JbnB1dENoZWNrYm94L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi4vYmFuY29yLWNvbXBvbmVudHMvRWxlbWVudC9Gb3JtL0lucHV0Q2hlY2tib3gvX2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL1N1cHBsaWVycy9Db25zdWx0UGF5bWVudHMvTW9kYWxzL19ydWxlcy5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJUZXJtc0FuZENvbmRpdGlvbnMiLCJwcm9wcyIsIl9yZWYiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJfanN4IiwiTW9kYWwiLCJjbGFzc05hbWUiLCJSdWxlcyIsInRlcm1zQW5kQ29uZGl0aW9ucyIsImNsb3NlT25CZ1RhcCIsIm9wZW4iLCJ0aXRsZSIsIm9uQ2xvc2UiLCJoYW5kbGVDbG9zZU1vZGFsIiwiY2hpbGRyZW4iLCJfanN4cyIsIkJvZHkiLCJUZXh0IiwidGFnIiwidXVpZCIsIkJ1dHRvbiIsImxhYmVsIiwidHlwZSIsIm9uQ2xpY2siLCJkZWZhdWx0UHJvcHMiLCJBY2NlcHRBZ3JlZW1lbnQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidGV4dEdldCIsInVzZVRleHQiLCJkb2N1bWVudCIsInVzZVNlbGVjdG9yIiwiU2VsZWN0b3JTbGljZVNlc3Npb24iLCJjb3Jwb3JhdGVEb2N1bWVudCIsInRva2VuIiwiZ2V0VmFsdWVzIiwiRm9ybSIsInVzZUNvbnRleHQiLCJjdWl0IiwiZGVzY3JpcHRpb24iLCJyZXBsYWNlIiwiY29uY2F0IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJGb290ZXIiLCJhZGhlcmVkIiwiRmV0Y2hlclNsaWNlQ29uc3VsdFBheW1lbnRzIiwiYWRoZXJlZEFncmVlbWVudCIsIkFncmVlbWVudCIsIm5hdmlnYXRlIiwidXNlTmF2aWdhdGUiLCJ1cmxDb25zdWx0UGF5bWVudHMiLCJ1c2VQYXRoIiwiUk9VVEVfUEFUSF9TVVBQTElFUlNfQ09OU1VMVF9QQVlNRU5UUyIsIl9SZWFjdCR1c2VTdGF0ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzaG93TW9kYWxUZXJtc0FuZENvbmRpdGlvbnMiLCJzZXRTaG93TW9kYWxUZXJtc0FuZENvbmRpdGlvbnMiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsInNob3dNb2RhbEFjY2VwdEFncmVlbWVudCIsInNldFNob3dNb2RhbEFjY2VwdEFncmVlbWVudCIsIl9SZWFjdCR1c2VTdGF0ZTUiLCJfUmVhY3QkdXNlU3RhdGU2IiwiaXNBZ3JlZW1lbnRBY2NlcHQiLCJzZXRJc0FncmVlbWVudEFjY2VwdCIsImZldGNoZWRDb250cmFjdElkIiwiU2VsZWN0b3JTbGljZUNvbnN1bHRQYXltZW50cyIsIndhcm5pbmciLCJpc0FkaGVyZWQiLCJhZGhlcmVUcmFuc2FjdGlvbklkIiwidGV4dEVycm9yUmVxdWlyZWQiLCJzY2hlbWEiLCJUeXBlIiwib2JqZWN0IiwiQ3VzdG9tRXJyb3IiLCJib29sZWFuIiwiZXF1YWxzIiwidXJsRGV0YWlsIiwiUk9VVEVfUEFUSF9TVVBQTElFUlNfQUdSRUVNRU5UX1RJQ0tFVCIsInVzZUVmZmVjdCIsIkFjdGlvblNsaWNlQ29uc3VsdFBheW1lbnRzIiwiY2xlYW5GZXRjaGVycyIsImNvbnRyYWN0SWQiLCJMb2FkaW5nIiwiSW50ZXJuYWxDb250YWluZXIiLCJ3aXRob3V0Qm94IiwiYWdyZWVtZW50IiwiaGFuZGxlQmFjayIsImFncmVlbWVudFRpdGxlIiwiQ2FyZCIsImNhcmRDb250YWluZXIiLCJ3YXJuaW5ncyIsImFncmVlbWVudERlc2NyaXB0aW9uIiwiSW5wdXRDaGVja2JveCIsInRleHRBY2NlcHRUZXJtcyIsImxhYmVsQWdyZWVtZW50IiwiY2FwaXRhbGl6ZSIsImtpbmQiLCJoYW5kbGVTaG93TW9kYWxUZXJtc0FuZENvbmRpdGlvbnMiLCJnZXRMYWJlbCIsIm5hbWUiLCJvbkNoYW5nZSIsInZhcmlhbnQiLCJoYW5kbGVTaG93TW9kYWxBY2NlcHRBZ3JlZW1lbnQiLCJCQUNLX1JPVVRFUiIsIm1vZHVsZSIsImV4cG9ydHMiLCJOQU1FX0lOUFVUX0NIRUNLQk9YIiwiTmFtZXNwYWNlIiwiVFlQRV9JTlBVVF9DSEVDS0JPWCIsIklucHV0Q2hlY2tib3hNZW1vaXplZCIsIm1lbW8iLCJfaW5wdXRFcnJvciRtZXNzYWdlIiwiaWQiLCJtZXRob2RzIiwiaXNDaGVja2VkIiwicmVzdCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwicmVnaXN0ZXIiLCJmb3JtU3RhdGUiLCJzZXRWYWx1ZSIsImNsZWFyRXJyb3JzIiwiZXJyb3JzIiwicmVnaXN0ZXJOYW1lIiwidW5kZWZpbmVkIiwic2hvdWxkVmFsaWRhdGUiLCJpbnB1dEVycm9yIiwiQ29tcG9uZW50IiwiQ2hlY2tib3giLCJfb2JqZWN0U3ByZWFkIiwiZXJyb3IiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJlIiwiY2hlY2siLCJwcmV2UHJvcHMiLCJuZXh0UHJvcHMiLCJkaXJ0eUZpZWxkcyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoia1ZBbUJPLFNBQVNBLEVBQW1CQyxHQUMvQixJQUFBQyxFQUFvQ0QsRUFBNUJFLEVBQVNELEVBQVRDLFVBQVdDLEVBQVlGLEVBQVpFLGFBQ25CLE9BQ0lDLGNBQUNDLElBQUssQ0FDRkMsVUFBV0MsSUFBTUMsbUJBQ2pCQyxjQUFjLEVBQ2RDLEtBQU1SLEVBQ05TLE1BQU0seUNBQ05DLFFBQVNDLEVBQWlCQyxTQUMxQkMsZUFBQ1YsSUFBTVcsS0FBSSxDQUFBRixTQUFBLENBQ1BWLGNBQUNhLElBQUksQ0FBQ0MsSUFBSSxLQUFLQyxLQUFLLDhDQUNwQmYsY0FBQ2EsSUFBSSxDQUFDQyxJQUFJLEtBQUtDLEtBQUssMkNBQ3BCZixjQUFDYSxJQUFJLENBQUNFLEtBQUssaURBQ1hmLGNBQUNnQixJQUFNLENBQ0hDLE1BQU8sQ0FBRUYsS0FBTSxxQkFDZkcsS0FBSyxTQUNMQyxRQUFTVixTQU16QixTQUFTQSxJQUNMVixHQUFhLEVBQ2pCLENBQ0osQ0FFQUosRUFBbUJ5QixhQWxDbUQsQ0FBQyxFQ1FoRSxTQUFTQyxFQUFnQnpCLEdBQzVCLElBQUFDLEVBQW9DRCxFQUE1QkUsRUFBU0QsRUFBVEMsVUFBV0MsRUFBWUYsRUFBWkUsYUFDYnVCLEVBQVdDLGNBQ1RDLEVBQVlDLGNBQVpELFFBQ0ZFLEVBQVdDLFlBQVlDLElBQXFCQyxtQkFDNUNDLEVBQVFILFlBQVlDLElBQXFCRSxPQUN2Q0MsRUFBY0MsSUFBS0MsYUFBbkJGLFVBRUZHLEVBQU9WLEVBQVEsQ0FBRVQsS0FBTSx1Q0FDdkJvQixFQUFjWCxFQUFRLENBQ3hCVCxLQUFNLDRDQUNOcUIsUUFBUyxDQUFDLFdBQURDLE9BQVlILEVBQUksd0JBQUFHLE9BQXdCWCxFQUFRLGdCQUc3RCxPQUNJZixlQUFDVixJQUFLLENBQ0ZDLFVBQVdDLElBQU1rQixnQkFDakJoQixjQUFjLEVBQ2RDLEtBQU1SLEVBQ05TLE1BQU0sc0NBQ05DLFFBaUNSLFdBQ0lULEdBQWEsRUFDakIsRUFuQ2tDVyxTQUFBLENBYzFCVixjQUFDQyxJQUFNVyxLQUFJLENBQUFGLFNBQ1BWLGNBQUNhLElBQUksQ0FBQUgsU0FDRFYsY0FBQSxRQUVJc0Msd0JBQXlCLENBQUVDLE9BQVFKLFNBaEIvQ25DLGNBQUNDLElBQU11QyxPQUFNLENBQUE5QixTQUNUVixjQUFDZ0IsSUFBTSxDQUNIQyxNQUFPLENBQUVGLEtBQU0scUJBQ2ZHLEtBQUssU0FDTEMsUUFtQmhCLFdBQ0ksSUFBS1csRUFBTyxPQUVaLElBRG9CQyxJQUFaVSxRQUNNLE9BQ2QxQyxHQUFhLEdBQ2J1QixFQUFTb0IsSUFBNEJDLGlCQUFpQixDQUFFYixVQUM1RCxRQUtKLENBRUFULEVBQWdCRCxhQTlEbUQsQ0FBQyxFLHNCQ2VyRCxTQUFTd0IsSUFDcEIsSUFBTUMsRUFBV0MsZUFDWHhCLEVBQVdDLGNBQ1h3QixFQUFxQkMsYUFBUUMsS0FDM0J6QixFQUFZQyxjQUFaRCxRQUNSMEIsRUFBc0VDLElBQU1DLFdBQW1CQyxFQUFBQyxZQUFBSixFQUFBLEdBQXhGSyxFQUEyQkYsRUFBQSxHQUFFRyxFQUE4QkgsRUFBQSxHQUNsRUksRUFBZ0VOLElBQU1DLFdBQW1CTSxFQUFBSixZQUFBRyxFQUFBLEdBQWxGRSxFQUF3QkQsRUFBQSxHQUFFRSxFQUEyQkYsRUFBQSxHQUM1REcsRUFBa0RWLElBQU1DLFVBQWtCLEdBQU1VLEVBQUFSLFlBQUFPLEVBQUEsR0FBekVFLEVBQWlCRCxFQUFBLEdBQUVFLEVBQW9CRixFQUFBLEdBRXhDaEMsRUFBUUgsWUFBWUMsSUFBcUJFLE9BQ3pDbUMsRUFBb0J0QyxZQUFZdUMsSUFBNkJELG1CQUM3REUsRUFBVXhDLFlBQVl1QyxJQUE2QkMsU0FDbkRDLEVBQVl6QyxZQUFZdUMsSUFBNkJFLFdBQ3JEQyxFQUFzQjFDLFlBQVl1QyxJQUE2QkcscUJBQy9EQyxFQUFvQjlDLEVBQVEsQ0FBRVQsS0FBTSxpREFDcEN3RCxFQUFTQyxJQUFLQyxPQUFPLENBQ3ZCaEMsUUFBU2lDLFlBQVlGLElBQUtHLFFBQVFDLFFBQU8sR0FBT04sS0FFOUNPLEVBQVk3QixhQUFROEIsS0EyQjFCLE9BeEJBM0IsSUFBTTRCLFdBQ0Ysa0JBQU0sV0FDRnpELEVBQVMwRCxJQUEyQkMsZ0JBQ3hDLENBQUMsR0FDRCxDQUFDM0QsSUFJTDZCLElBQU00QixXQUFVLFdBQ1BqRCxHQUNMUixFQUFTb0IsSUFBNEJ3QyxXQUFXLENBQUVwRCxVQUN0RCxHQUFHLENBQUNSLEVBQVVRLElBR2RxQixJQUFNNEIsV0FBVSxXQUNQWCxHQUNMdkIsRUFBU0UsRUFBb0IsQ0FBRVgsU0FBUyxHQUM1QyxHQUFHLENBQUNkLEVBQVU4QyxFQUFXdkIsRUFBVUUsSUFFbkNJLElBQU00QixXQUFVLFdBQ1BWLEdBQ0x4QixFQUFTZ0MsRUFDYixHQUFHLENBQUNSLEVBQXFCL0MsRUFBVXVCLEVBQVVnQyxJQUV6Q1QsSUFBY0gsRUFBMEJqRSxjQUFDbUYsSUFBTyxJQUdoRHhFLGVBQUN5RSxJQUFpQixDQUFDQyxZQUFVLEVBQUNuRixVQUFXQyxJQUFNbUYsVUFBVyxnQkFBZUMsRUFBVzdFLFNBQUEsQ0FDaEZWLGNBQUEsVUFBQVUsU0FDSVYsY0FBQ2EsSUFBSSxDQUNEWCxVQUFXQyxJQUFNcUYsZUFDakIxRSxJQUFJLEtBQ0pDLEtBQUssb0NBR2JmLGNBQUN5RixPQUFJLENBQUN2RixVQUFXQyxJQUFNdUYsY0FBY2hGLFNBQ2pDQyxlQUFDcUIsSUFBSSxDQUFDdUMsT0FBUUEsRUFBUW9CLFNBQVV4QixFQUFRekQsU0FBQSxDQUNwQ1YsY0FBQ2EsSUFBSSxDQUNEWCxVQUFXQyxJQUFNeUYscUJBQ2pCOUUsSUFBSSxJQUNKQyxLQUFLLHdDQUVUZixjQUFDNkYsSUFBYSxDQUFDNUUsTUFtQi9CLFdBQ0ksSUFBTTZFLEVBQWtCdEUsRUFBUSxDQUM1QlQsS0FBTSxtQ0FFVixPQUNJSixlQUFBLE9BQUtULFVBQVdDLElBQU00RixlQUFlckYsU0FBQSxDQUNqQ1YsY0FBQ2EsSUFBSSxDQUFDQyxJQUFJLE9BQU1KLFNBQUVzRixZQUFXRixLQUM3QjlGLGNBQUNnQixJQUFNLENBQ0hpRixLQUFLLFFBQ0xoRixNQUFPLENBQUVGLEtBQU0sZ0RBQ2ZHLEtBQUssU0FDTEMsUUFBUytFLE1BSXpCLENBbENzQ0MsR0FBWUMsS0FBSyxVQUFVQyxTQWVqRSxXQUNJckMsR0FBc0JELEVBQzFCLElBK0JRcEQsZUFBQSxVQUFBRCxTQUFBLENBQ0lWLGNBQUNnQixJQUFNLENBQ0hDLE1BQU8sQ0FBRUYsS0FBTSxtQkFDZnVGLFFBQVEsV0FDUm5GLFFBQVNvRSxJQUVidkYsY0FBQ2dCLElBQU0sQ0FDSEMsTUFBTyxDQUFFRixLQUFNLG1CQUNmRyxLQUFLLFNBQ0xDLFFBQVNvRixPQXZEVHZHLGNBQUNxQixFQUFlLENBQ1p0QixhQUFjNkQsRUFDZDlELFVBQVc2RCxTQUl2QjNELGNBQUNMLEVBQWtCLENBQ2ZJLGFBQWN5RCxFQUNkMUQsVUFBV3lELE9BMEJ2QixTQUFTMkMsSUFDTDFDLEdBQWdDRCxFQUNwQyxDQUVBLFNBQVNnRCxJQUNEeEMsR0FDQUgsR0FBNkJELEVBRXJDLENBbUJBLFNBQVM0QixJQUNMMUMsRUFBUzJELElBQ2IsQ0FDSixDLHNCQy9KQUMsRUFBT0MsUUFBVSxDQUFDLHNCQUF3QixrQkFBa0Isc0JBQXdCLFVBQVUsb0JBQXNCLGdCQUFnQixvQkFBc0IsVUFBVSxtQkFBcUIsZ0JBQWdCLG1CQUFxQixTQUFTLDRCQUE4Qix3QkFBd0IsNEJBQThCLFVBQVUsNEJBQThCLHdCQUF3Qiw0QkFBOEIsV0FBVyxVQUFZLE9BQU8sVUFBWSxVQUFVLFlBQWMsU0FBUyxZQUFjLFVBQVUsY0FBZ0IsV0FBVyxjQUFnQixVQUFVLFFBQVUsS0FBSyxRQUFVLEtBQUssUUFBVSxLQUFLLFFBQVUsS0FBSyxnQkFBa0IsZ0NBQWdDLFVBQVksMEJBQTBCLGNBQWdCLDhCQUE4QixhQUFlLDZCQUE2QixlQUFpQiwrQkFBK0IscUJBQXVCLHFDQUFxQyxlQUFpQiwrQkFBK0IsT0FBUyx1Qiw0TUNTcjdCQyxFQUE2Q0MsSUFBN0NELG9CQUFxQkUsRUFBd0JELElBQXhCQyxvQkFpQjlCQyxFQUF3QjNELElBQU00RCxNQUNoQyxTQUFDbkgsR0FBc0MsSUFBRG9ILEVBQzFCQyxFQUFvRHJILEVBQXBEcUgsR0FBSWIsRUFBZ0R4RyxFQUFoRHdHLEtBQU1jLEVBQTBDdEgsRUFBMUNzSCxRQUFTYixFQUFpQ3pHLEVBQWpDeUcsU0FBVWMsRUFBdUJ2SCxFQUF2QnVILFVBQWNDLEVBQUlDLFlBQUt6SCxFQUFLMEgsR0FDakVwRSxFQUE4QkMsSUFBTUMsU0FBUytELEdBQVU5RCxFQUFBQyxZQUFBSixFQUFBLEdBQWhEcUUsRUFBT2xFLEVBQUEsR0FBRW1FLEVBQVVuRSxFQUFBLEdBQ2xCb0UsRUFBK0NQLEVBQS9DTyxTQUFVQyxFQUFxQ1IsRUFBckNRLFVBQVdDLEVBQTBCVCxFQUExQlMsU0FBVUMsRUFBZ0JWLEVBQWhCVSxZQUMvQkMsRUFBV0gsRUFBWEcsT0FFRkMsRUFBWSxHQUFBekYsT0FBTStELEdBR3hCakQsSUFBTTRCLFdBQVUsZ0JBQ01nRCxJQUFkWixJQUNBSyxFQUFXTCxHQUNYUSxFQUFTRyxFQUFjWCxFQUFXLENBQUVhLGdCQUFnQixJQUU1RCxHQUFHLENBQUNiLEVBQVdXLEVBQWNILElBRTdCLElBQU1NLEVBQWFKLEVBQU96QixHQUUxQixPQUNJcEcsY0FBQ2tJLElBQVMsQ0FBQzlCLEtBQU1PLEVBQXFCekYsS0FBTTJGLEVBQW9CbkcsU0FDNURWLGNBQUNtSSxXQUFRQyxvQ0FBQSxDQUNMbkIsR0FBSUEsR0FBTWIsR0FDTDZCLEdBQWMsQ0FBRUksTUFBeUIsUUFBcEJyQixFQUFFaUIsRUFBV0ssZUFBTyxJQUFBdEIsT0FBQSxFQUFsQkEsRUFBb0J1QixhQUM1Q2QsRUFBU0ssSUFBYSxJQUMxQlgsVUFBV0ksRUFDWGxCLFNBQVUsU0FBQ21DLEdBQ1AsSUFBTUMsR0FBU2xCLEVBQ2ZDLEVBQVdpQixHQUNYZCxFQUFTRyxFQUFjVyxHQUNuQnBDLEdBQVVBLEVBQVNtQyxHQUN2QlosRUFBWSxDQUFDRSxHQUNqQixHQUNJVixLQUlwQixJQUNBLFNBQUNzQixFQUFXQyxHQUFTLE9BQ2pCRCxFQUFVeEIsUUFBUVEsVUFBVUcsU0FBV2MsRUFBVXpCLFFBQVFRLFVBQVVHLFFBQ25FYSxFQUFVeEIsUUFBUVEsVUFBVWtCLFlBQVlGLEVBQVV0QyxRQUM5Q3VDLEVBQVV6QixRQUFRUSxVQUFVa0IsWUFBWUQsRUFBVXZDLEtBQUssSUFHNUQsU0FBU1AsRUFBY2pHLEdBQzFCLElBQU1zSCxFQUFVbEYsSUFBS0MsYUFFckIsT0FBT2pDLGNBQUM4RyxFQUFxQnNCLFlBQUEsQ0FBQ2xCLFFBQVNBLEdBQWF0SCxHQUN4RCxDQUVBaUcsRUFBY2dELFlBQWNsQyxDLHNCQzVFNUJGLEVBQU9DLFFBQVUsQ0FBQyxvQkFBc0IsZ0JBQWdCLG9CQUFzQixVLHNCQ0E5RUQsRUFBT0MsUUFBVSxDQUFDLG1CQUFxQixnQkFBZ0IsbUJBQXFCLFNBQVMsNEJBQThCLHdCQUF3Qiw0QkFBOEIsVUFBVSw0QkFBOEIsd0JBQXdCLDRCQUE4QixXQUFXLFVBQVksT0FBTyxVQUFZLFVBQVUsWUFBYyxTQUFTLFlBQWMsVUFBVSxpQkFBbUIsaUNBQWlDLE9BQVMsdUJBQXVCLG1CQUFxQixtQ0FBbUMsWUFBYyw0QkFBNEIsaUJBQW1CLGlDIiwiZmlsZSI6InN0YXRpYy9qcy85Ni4yM2VkMjM5Yy5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwiQHBrZy9yZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBQcm9wRWxlbWVudCwgUHJvcERlZmF1bHRzLCBQcm9wVHlwZXMgfSBmcm9tIFwiQHBrZy9yZWFjdC1zdG9yeWJvb2svQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJAYXBwL2JhbmNvci1jb21wb25lbnRzL0VsZW1lbnQvTW9kYWxcIjtcbmltcG9ydCB7IFRleHQgfSBmcm9tIFwiQGFwcC9iYW5jb3ItY29tcG9uZW50cy9FbGVtZW50L1RleHRcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAYXBwL2JhbmNvci1jb21wb25lbnRzL0VsZW1lbnQvQnV0dG9uXCI7XG5pbXBvcnQgUnVsZXMgZnJvbSBcIi4vX3J1bGVzLm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCB0eXBlIFByb3BzVGVybXNBbmRDb25kaXRpb25zID0gUHJvcEVsZW1lbnQgJiB7XG4gICAgc2hvd01vZGFsOiBib29sZWFuO1xuICAgIHNldFNob3dNb2RhbDogKHByZXY6IGJvb2xlYW4pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgREVGX01PREFMX1BST1BTOiBQcm9wRGVmYXVsdHM8UHJvcHNUZXJtc0FuZENvbmRpdGlvbnM+ID0ge307XG5cbmV4cG9ydCB0eXBlIFByb3BUeXBlc1Rlcm1zQW5kQ29uZGl0aW9ucyA9IFByb3BUeXBlczxcbiAgICBQcm9wc1Rlcm1zQW5kQ29uZGl0aW9ucyxcbiAgICB0eXBlb2YgREVGX01PREFMX1BST1BTXG4+O1xuXG5leHBvcnQgZnVuY3Rpb24gVGVybXNBbmRDb25kaXRpb25zKHByb3BzOiBQcm9wc1Rlcm1zQW5kQ29uZGl0aW9ucykge1xuICAgIGNvbnN0IHsgc2hvd01vZGFsLCBzZXRTaG93TW9kYWwgfSA9IHByb3BzIGFzIFByb3BUeXBlc1Rlcm1zQW5kQ29uZGl0aW9ucztcbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT17UnVsZXMudGVybXNBbmRDb25kaXRpb25zfVxuICAgICAgICAgICAgY2xvc2VPbkJnVGFwPXtmYWxzZX1cbiAgICAgICAgICAgIG9wZW49e3Nob3dNb2RhbH1cbiAgICAgICAgICAgIHRpdGxlPVwic3BhLnN1cHBsaWVycy50ZXJtc0FuZENvbmRpdGlvbnMudGl0bGVcIlxuICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH0+XG4gICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8VGV4dCB0YWc9XCJoNVwiIHV1aWQ9XCJzcGEuc3VwcGxpZXJzLnRlcm1zQW5kQ29uZGl0aW9ucy5zdWJ0aXRsZVwiIC8+XG4gICAgICAgICAgICAgICAgPFRleHQgdGFnPVwiaDVcIiB1dWlkPVwic3BhLnN1cHBsaWVycy50ZXJtc0FuZENvbmRpdGlvbnMudGl0bGVcIiAvPlxuICAgICAgICAgICAgICAgIDxUZXh0IHV1aWQ9XCJzcGEuc3VwcGxpZXJzLnRlcm1zQW5kQ29uZGl0aW9ucy5kZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17eyB1dWlkOiBcInNwYS5mb3JtLmNvbnRpbnVlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xvc2VNb2RhbCgpIHtcbiAgICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcbiAgICB9XG59XG5cblRlcm1zQW5kQ29uZGl0aW9ucy5kZWZhdWx0UHJvcHMgPSBERUZfTU9EQUxfUFJPUFM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcIkBwa2cvcmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgUHJvcEVsZW1lbnQsIFByb3BEZWZhdWx0cywgUHJvcFR5cGVzIH0gZnJvbSBcIkBwa2cvcmVhY3Qtc3Rvcnlib29rL0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2VsZWN0b3JTbGljZVNlc3Npb24gfSBmcm9tIFwiQGFwcC9iYW5jb24tZGF0YS9zbGljZXMvc2Vzc2lvblwiO1xuaW1wb3J0IHsgRmV0Y2hlclNsaWNlQ29uc3VsdFBheW1lbnRzIH0gZnJvbSBcIkBhcHAvYmFuY29uLWRhdGEvc2xpY2VzL3N1cHBsaWVycy9jb25zdWx0UGF5bWVudHNcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJAYXBwL2JhbmNvbi1kYXRhXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcIkBhcHAvYmFuY29yLWNvbXBvbmVudHMvRWxlbWVudC9Gb3JtXCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJAYXBwL2JhbmNvci1jb21wb25lbnRzL0VsZW1lbnQvTW9kYWxcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAYXBwL2JhbmNvci1jb21wb25lbnRzL0VsZW1lbnQvQnV0dG9uXCI7XG5pbXBvcnQgeyBUZXh0LCB1c2VUZXh0IH0gZnJvbSBcIkBhcHAvYmFuY29yLWNvbXBvbmVudHMvRWxlbWVudC9UZXh0XCI7XG5pbXBvcnQgUnVsZXMgZnJvbSBcIi4vX3J1bGVzLm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCB0eXBlIFByb3BzQWNjZXB0QWdyZWVtZW50ID0gUHJvcEVsZW1lbnQgJiB7XG4gICAgc2hvd01vZGFsOiBib29sZWFuO1xuICAgIHNldFNob3dNb2RhbDogKHByZXY6IGJvb2xlYW4pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgREVGX01PREFMX1BST1BTOiBQcm9wRGVmYXVsdHM8UHJvcHNBY2NlcHRBZ3JlZW1lbnQ+ID0ge307XG5cbmV4cG9ydCB0eXBlIFByb3BUeXBlc0FjY2VwdEFncmVlbWVudCA9IFByb3BUeXBlczxQcm9wc0FjY2VwdEFncmVlbWVudCwgdHlwZW9mIERFRl9NT0RBTF9QUk9QUz47XG5cbmV4cG9ydCBmdW5jdGlvbiBBY2NlcHRBZ3JlZW1lbnQocHJvcHM6IFByb3BzQWNjZXB0QWdyZWVtZW50KSB7XG4gICAgY29uc3QgeyBzaG93TW9kYWwsIHNldFNob3dNb2RhbCB9ID0gcHJvcHMgYXMgUHJvcFR5cGVzQWNjZXB0QWdyZWVtZW50O1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCB7IHRleHRHZXQgfSA9IHVzZVRleHQoKTtcbiAgICBjb25zdCBkb2N1bWVudCA9IHVzZVNlbGVjdG9yKFNlbGVjdG9yU2xpY2VTZXNzaW9uLmNvcnBvcmF0ZURvY3VtZW50KTtcbiAgICBjb25zdCB0b2tlbiA9IHVzZVNlbGVjdG9yKFNlbGVjdG9yU2xpY2VTZXNzaW9uLnRva2VuKTtcbiAgICBjb25zdCB7IGdldFZhbHVlcyB9ID0gRm9ybS51c2VDb250ZXh0KCk7XG5cbiAgICBjb25zdCBjdWl0ID0gdGV4dEdldCh7IHV1aWQ6IFwic3BhLnN1cHBsaWVycy5hY2NlcHRBZ3JlZW1lbnQuY3VpdFwiIH0pO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGV4dEdldCh7XG4gICAgICAgIHV1aWQ6IFwic3BhLnN1cHBsaWVycy5hY2NlcHRBZ3JlZW1lbnQuZGVzY3JpcHRpb25cIixcbiAgICAgICAgcmVwbGFjZTogW2A8c3Ryb25nPiR7Y3VpdH08L3N0cm9uZz5gLCBgPHN0cm9uZz4ke2RvY3VtZW50fTwvc3Ryb25nPmBdLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBjbGFzc05hbWU9e1J1bGVzLkFjY2VwdEFncmVlbWVudH1cbiAgICAgICAgICAgIGNsb3NlT25CZ1RhcD17ZmFsc2V9XG4gICAgICAgICAgICBvcGVuPXtzaG93TW9kYWx9XG4gICAgICAgICAgICB0aXRsZT1cInNwYS5zdXBwbGllcnMuYWNjZXB0QWdyZWVtZW50LnRpdGxlXCJcbiAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9PlxuICAgICAgICAgICAge2dldEJvZHkoKX1cbiAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17eyB1dWlkOiBcInNwYS5mb3JtLmNvbnRpbnVlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIGdldEJvZHkoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAgICAgICBpZiAoIXRva2VuKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHsgYWRoZXJlZCB9ID0gZ2V0VmFsdWVzKCk7XG4gICAgICAgIGlmICghYWRoZXJlZCkgcmV0dXJuO1xuICAgICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xuICAgICAgICBkaXNwYXRjaChGZXRjaGVyU2xpY2VDb25zdWx0UGF5bWVudHMuYWRoZXJlZEFncmVlbWVudCh7IHRva2VuIH0pKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbG9zZU1vZGFsKCkge1xuICAgICAgICBzZXRTaG93TW9kYWwoZmFsc2UpO1xuICAgIH1cbn1cblxuQWNjZXB0QWdyZWVtZW50LmRlZmF1bHRQcm9wcyA9IERFRl9NT0RBTF9QUk9QUztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwiQHBrZy9yZWFjdFwiO1xuaW1wb3J0IHtcbiAgICBCQUNLX1JPVVRFUixcbiAgICB1c2VOYXZpZ2F0ZSxcbiAgICB1c2VQYXRoLFxuICAgIFJPVVRFX1BBVEhfU1VQUExJRVJTX0NPTlNVTFRfUEFZTUVOVFMsXG4gICAgUk9VVEVfUEFUSF9TVVBQTElFUlNfQUdSRUVNRU5UX1RJQ0tFVCxcbn0gZnJvbSBcIn4vcm91dGVzXCI7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSBcIkBwa2cvdXRpbHMvc2NoZW1hXCI7XG5pbXBvcnQgeyBDdXN0b21FcnJvciB9IGZyb20gXCJAYXBwL2JhbmNvbi1kYXRhL3ZhbGlkYXRpb25zXCI7XG5pbXBvcnQge1xuICAgIFNlbGVjdG9yU2xpY2VDb25zdWx0UGF5bWVudHMsXG4gICAgRmV0Y2hlclNsaWNlQ29uc3VsdFBheW1lbnRzLFxuICAgIEFjdGlvblNsaWNlQ29uc3VsdFBheW1lbnRzLFxufSBmcm9tIFwiQGFwcC9iYW5jb24tZGF0YS9zbGljZXMvc3VwcGxpZXJzL2NvbnN1bHRQYXltZW50c1wiO1xuaW1wb3J0IHsgU2VsZWN0b3JTbGljZVNlc3Npb24gfSBmcm9tIFwiQGFwcC9iYW5jb24tZGF0YS9zbGljZXMvc2Vzc2lvblwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcIkBhcHAvYmFuY29uLWRhdGFcIjtcblxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJAYXBwL2JhbmNvci1jb21wb25lbnRzL0VsZW1lbnQvRm9ybVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBhcHAvYmFuY29yLWNvbXBvbmVudHMvRWxlbWVudC9CdXR0b25cIjtcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiQGFwcC9iYW5jb3ItY29tcG9uZW50cy9FbGVtZW50L0xvYWRpbmdcIjtcbmltcG9ydCB7IFRleHQsIHVzZVRleHQgfSBmcm9tIFwiQGFwcC9iYW5jb3ItY29tcG9uZW50cy9FbGVtZW50L1RleHRcIjtcbmltcG9ydCB7IEludGVybmFsQ29udGFpbmVyIH0gZnJvbSBcIn4vY29udGFpbmVycy9JbnRlcm5hbFwiO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gXCJAYXBwL2JhbmNvbi1kYXRhL3V0aWxzL3N0cmluZ1wiO1xuaW1wb3J0IHsgSW5wdXRDaGVja2JveCB9IGZyb20gXCJAYXBwL2JhbmNvci1jb21wb25lbnRzL0VsZW1lbnQvRm9ybS9JbnB1dENoZWNrYm94XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIkBhcHAvYmFuY29uLXVpXCI7XG5cbmltcG9ydCB7IFRlcm1zQW5kQ29uZGl0aW9ucyB9IGZyb20gXCJ+L3NlY3Rpb25zL1N1cHBsaWVycy9Db25zdWx0UGF5bWVudHMvTW9kYWxzL1Rlcm1zQW5kQ29uZGl0aW9uc1wiO1xuaW1wb3J0IHsgQWNjZXB0QWdyZWVtZW50IH0gZnJvbSBcIn4vc2VjdGlvbnMvU3VwcGxpZXJzL0NvbnN1bHRQYXltZW50cy9Nb2RhbHMvQWNjZXB0QWdyZWVtZW50XCI7XG5pbXBvcnQgUnVsZXMgZnJvbSBcIi4vX3J1bGVzLm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFncmVlbWVudCgpIHtcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHVybENvbnN1bHRQYXltZW50cyA9IHVzZVBhdGgoUk9VVEVfUEFUSF9TVVBQTElFUlNfQ09OU1VMVF9QQVlNRU5UUyk7XG4gICAgY29uc3QgeyB0ZXh0R2V0IH0gPSB1c2VUZXh0KCk7XG4gICAgY29uc3QgW3Nob3dNb2RhbFRlcm1zQW5kQ29uZGl0aW9ucywgc2V0U2hvd01vZGFsVGVybXNBbmRDb25kaXRpb25zXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KCk7XG4gICAgY29uc3QgW3Nob3dNb2RhbEFjY2VwdEFncmVlbWVudCwgc2V0U2hvd01vZGFsQWNjZXB0QWdyZWVtZW50XSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KCk7XG4gICAgY29uc3QgW2lzQWdyZWVtZW50QWNjZXB0LCBzZXRJc0FncmVlbWVudEFjY2VwdF0gPSBSZWFjdC51c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgICBjb25zdCB0b2tlbiA9IHVzZVNlbGVjdG9yKFNlbGVjdG9yU2xpY2VTZXNzaW9uLnRva2VuKTtcbiAgICBjb25zdCBmZXRjaGVkQ29udHJhY3RJZCA9IHVzZVNlbGVjdG9yKFNlbGVjdG9yU2xpY2VDb25zdWx0UGF5bWVudHMuZmV0Y2hlZENvbnRyYWN0SWQpO1xuICAgIGNvbnN0IHdhcm5pbmcgPSB1c2VTZWxlY3RvcihTZWxlY3RvclNsaWNlQ29uc3VsdFBheW1lbnRzLndhcm5pbmcpO1xuICAgIGNvbnN0IGlzQWRoZXJlZCA9IHVzZVNlbGVjdG9yKFNlbGVjdG9yU2xpY2VDb25zdWx0UGF5bWVudHMuaXNBZGhlcmVkKTtcbiAgICBjb25zdCBhZGhlcmVUcmFuc2FjdGlvbklkID0gdXNlU2VsZWN0b3IoU2VsZWN0b3JTbGljZUNvbnN1bHRQYXltZW50cy5hZGhlcmVUcmFuc2FjdGlvbklkKTtcbiAgICBjb25zdCB0ZXh0RXJyb3JSZXF1aXJlZCA9IHRleHRHZXQoeyB1dWlkOiBcInNwYS5wYXltZW50U3VwcGxpZXJzLnRlcm1zQW5kQ29uZGl0aW9uc0Vycm9yXCIgfSk7XG4gICAgY29uc3Qgc2NoZW1hID0gVHlwZS5vYmplY3Qoe1xuICAgICAgICBhZGhlcmVkOiBDdXN0b21FcnJvcihUeXBlLmJvb2xlYW4uZXF1YWxzKHRydWUpLCB0ZXh0RXJyb3JSZXF1aXJlZCksXG4gICAgfSk7XG4gICAgY29uc3QgdXJsRGV0YWlsID0gdXNlUGF0aChST1VURV9QQVRIX1NVUFBMSUVSU19BR1JFRU1FTlRfVElDS0VUKTtcblxuICAgIC8vIENsZWFuIGZldGNoZXJzIHdoZW4gdW5tb3VudGVkXG4gICAgUmVhY3QudXNlRWZmZWN0KFxuICAgICAgICAoKSA9PiAoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChBY3Rpb25TbGljZUNvbnN1bHRQYXltZW50cy5jbGVhbkZldGNoZXJzKCkpO1xuICAgICAgICB9LFxuICAgICAgICBbZGlzcGF0Y2hdLFxuICAgICk7XG5cbiAgICAvL0dldCBjb250cmFjdCBpZFxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghdG9rZW4pIHJldHVybjtcbiAgICAgICAgZGlzcGF0Y2goRmV0Y2hlclNsaWNlQ29uc3VsdFBheW1lbnRzLmNvbnRyYWN0SWQoeyB0b2tlbiB9KSk7XG4gICAgfSwgW2Rpc3BhdGNoLCB0b2tlbl0pO1xuXG4gICAgLy9DaGVjayBpZiBpcyBhbHJlYWR5IGFkaGVyZWRcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIWlzQWRoZXJlZCkgcmV0dXJuO1xuICAgICAgICBuYXZpZ2F0ZSh1cmxDb25zdWx0UGF5bWVudHMsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICB9LCBbZGlzcGF0Y2gsIGlzQWRoZXJlZCwgbmF2aWdhdGUsIHVybENvbnN1bHRQYXltZW50c10pO1xuXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFhZGhlcmVUcmFuc2FjdGlvbklkKSByZXR1cm47XG4gICAgICAgIG5hdmlnYXRlKHVybERldGFpbCk7XG4gICAgfSwgW2FkaGVyZVRyYW5zYWN0aW9uSWQsIGRpc3BhdGNoLCBuYXZpZ2F0ZSwgdXJsRGV0YWlsXSk7XG5cbiAgICBpZiAoaXNBZGhlcmVkIHx8ICFmZXRjaGVkQ29udHJhY3RJZCkgcmV0dXJuIDxMb2FkaW5nIC8+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEludGVybmFsQ29udGFpbmVyIHdpdGhvdXRCb3ggY2xhc3NOYW1lPXtSdWxlcy5hZ3JlZW1lbnR9IGhlYWRlci1vbkJhY2s9e2hhbmRsZUJhY2t9PlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1J1bGVzLmFncmVlbWVudFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICB0YWc9XCJoNVwiXG4gICAgICAgICAgICAgICAgICAgIHV1aWQ9XCJzcGEuc3VwcGxpZXJzLmFncmVlbWVudC50aXRsZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtSdWxlcy5jYXJkQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8Rm9ybSBzY2hlbWE9e3NjaGVtYX0gd2FybmluZ3M9e3dhcm5pbmd9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtSdWxlcy5hZ3JlZW1lbnREZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZz1cInBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdXVpZD1cInNwYS5zdXBwbGllcnMuYWdyZWVtZW50LmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0Q2hlY2tib3ggbGFiZWw9e2dldExhYmVsKCl9IG5hbWU9XCJhZGhlcmVkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAge2dldEZvb3RlcigpfVxuICAgICAgICAgICAgICAgICAgICA8QWNjZXB0QWdyZWVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbEFjY2VwdEFncmVlbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsQWNjZXB0QWdyZWVtZW50fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDxUZXJtc0FuZENvbmRpdGlvbnNcbiAgICAgICAgICAgICAgICBzZXRTaG93TW9kYWw9e3NldFNob3dNb2RhbFRlcm1zQW5kQ29uZGl0aW9uc31cbiAgICAgICAgICAgICAgICBzaG93TW9kYWw9e3Nob3dNb2RhbFRlcm1zQW5kQ29uZGl0aW9uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvSW50ZXJuYWxDb250YWluZXI+XG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSgpIHtcbiAgICAgICAgc2V0SXNBZ3JlZW1lbnRBY2NlcHQoIWlzQWdyZWVtZW50QWNjZXB0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRMYWJlbCgpIHtcbiAgICAgICAgY29uc3QgdGV4dEFjY2VwdFRlcm1zID0gdGV4dEdldCh7XG4gICAgICAgICAgICB1dWlkOiBcInNwYS5zdXBwbGllcnMuYWdyZWVtZW50LmFjY2VwdFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtSdWxlcy5sYWJlbEFncmVlbWVudH0+XG4gICAgICAgICAgICAgICAgPFRleHQgdGFnPVwic3BhblwiPntjYXBpdGFsaXplKHRleHRBY2NlcHRUZXJtcyl9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAga2luZD1cInBsYWluXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3sgdXVpZDogXCJzcGEuc3VwcGxpZXJzLmFncmVlbWVudC50ZXJtcy5hbmQuY29uZGl0aW9uc1wiIH19XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaG93TW9kYWxUZXJtc0FuZENvbmRpdGlvbnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNob3dNb2RhbFRlcm1zQW5kQ29uZGl0aW9ucygpIHtcbiAgICAgICAgc2V0U2hvd01vZGFsVGVybXNBbmRDb25kaXRpb25zKCFzaG93TW9kYWxUZXJtc0FuZENvbmRpdGlvbnMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNob3dNb2RhbEFjY2VwdEFncmVlbWVudCgpIHtcbiAgICAgICAgaWYgKGlzQWdyZWVtZW50QWNjZXB0KSB7XG4gICAgICAgICAgICBzZXRTaG93TW9kYWxBY2NlcHRBZ3JlZW1lbnQoIXNob3dNb2RhbEFjY2VwdEFncmVlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRGb290ZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3sgdXVpZDogXCJzcGEuZm9ybS5jYW5jZWxcIiB9fVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCYWNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17eyB1dWlkOiBcInNwYS5mb3JtLmFjY2VwdFwiIH19XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaG93TW9kYWxBY2NlcHRBZ3JlZW1lbnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUJhY2soKTogdm9pZCB7XG4gICAgICAgIG5hdmlnYXRlKEJBQ0tfUk9VVEVSKTtcbiAgICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTkFNRV9BTU9VTlRfRk9STUFUVEVSXCI6XCJBbW91bnRGb3JtYXR0ZXJcIixcIlRZUEVfQU1PVU5UX0ZPUk1BVFRFUlwiOlwiRWxlbWVudFwiLFwiTkFNRV9JTlBVVF9DSEVDS0JPWFwiOlwiSW5wdXRDaGVja2JveFwiLFwiVFlQRV9JTlBVVF9DSEVDS0JPWFwiOlwiRWxlbWVudFwiLFwiTkFNRV9USEVNRVBMQVRGT1JNXCI6XCJUaGVtZVBsYXRmb3JtXCIsXCJUWVBFX1RIRU1FUExBVEZPUk1cIjpcIkJ1bmRsZVwiLFwiTkFNRV9DT05TVU1FUl9USEVNRVBMQVRGT1JNXCI6XCJUaGVtZVBsYXRmb3JtQ29uc3VtZXJcIixcIlRZUEVfQ09OU1VNRVJfVEhFTUVQTEFURk9STVwiOlwiRWxlbWVudFwiLFwiTkFNRV9QUk9WSURFUl9USEVNRVBMQVRGT1JNXCI6XCJUaGVtZVBsYXRmb3JtUHJvdmlkZXJcIixcIlRZUEVfUFJPVklERVJfVEhFTUVQTEFURk9STVwiOlwiUHJvdmlkZXJcIixcIk5BTUVfVEVYVFwiOlwiVGV4dFwiLFwiVFlQRV9URVhUXCI6XCJFbGVtZW50XCIsXCJOQU1FX0JVVFRPTlwiOlwiQnV0dG9uXCIsXCJUWVBFX0JVVFRPTlwiOlwiRWxlbWVudFwiLFwiTkFNRV9EQVRFVElNRVwiOlwiRGF0ZVRpbWVcIixcIlRZUEVfREFURVRJTUVcIjpcIkVsZW1lbnRcIixcIk5BTUVfWFNcIjpcInhzXCIsXCJOQU1FX1NNXCI6XCJzbVwiLFwiTkFNRV9NRFwiOlwibWRcIixcIk5BTUVfTEdcIjpcImxnXCIsXCJjb25zdWx0UGF5bWVudHNcIjpcIl9ydWxlc19jb25zdWx0UGF5bWVudHNfX3d3RUdrXCIsXCJhZ3JlZW1lbnRcIjpcIl9ydWxlc19hZ3JlZW1lbnRfX0FqcUYxXCIsXCJjYXJkQ29udGFpbmVyXCI6XCJfcnVsZXNfY2FyZENvbnRhaW5lcl9fMUtCUGxcIixcInN1YnRpdGxlRGF0ZVwiOlwiX3J1bGVzX3N1YnRpdGxlRGF0ZV9fMm5mU1VcIixcImFncmVlbWVudFRpdGxlXCI6XCJfcnVsZXNfYWdyZWVtZW50VGl0bGVfXzJudGM4XCIsXCJhZ3JlZW1lbnREZXNjcmlwdGlvblwiOlwiX3J1bGVzX2FncmVlbWVudERlc2NyaXB0aW9uX19UTFhNaVwiLFwibGFiZWxBZ3JlZW1lbnRcIjpcIl9ydWxlc19sYWJlbEFncmVlbWVudF9fM2JuV0ZcIixcImRldGFpbFwiOlwiX3J1bGVzX2RldGFpbF9fVDZRVmRcIn07IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJAcGtnL3JlYWN0XCI7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJAYXBwL2JhbmNvbi11aVwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBwa2cvcmVhY3Qtc3Rvcnlib29rL0NvbXBvbmVudFwiO1xuaW1wb3J0IHR5cGUgeyBQcm9wRGVmYXVsdHMsIFByb3BUeXBlcyB9IGZyb20gXCJAcGtnL3JlYWN0LXN0b3J5Ym9vay9Db21wb25lbnRcIjtcbmltcG9ydCB0eXBlIHsgUHJvcHMgYXMgQ2hlY2tib3hQcm9wcyB9IGZyb20gXCJAYXBwL2JhbmNvbi11aS9kaXN0L2NvbXBvbmVudHMvQ2hlY2tib3hcIjtcbmltcG9ydCB0eXBlIHsgVXNlRm9ybVJldHVybiB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB0eXBlIHsgT21pdFByb3BJRCwgUHJvcERTIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcIi4uXCI7XG5pbXBvcnQgTmFtZXNwYWNlIGZyb20gXCIuL19pbmRleC5zY3NzXCI7XG5cbmV4cG9ydCBjb25zdCB7IE5BTUVfSU5QVVRfQ0hFQ0tCT1gsIFRZUEVfSU5QVVRfQ0hFQ0tCT1ggfSA9IE5hbWVzcGFjZTtcblxuZXhwb3J0IHR5cGUgUHJvcElucHV0Q2hlY2tib3ggPSBQcm9wRFM8Q2hlY2tib3hQcm9wcz4gJiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGlkPzogc3RyaW5nO1xuICAgIG9uQ2hhbmdlPzogKChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkKSB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBERUZfSU5QVVRfQ0hFQ0tCT1g6IFByb3BEZWZhdWx0czxcbiAgICBQcm9wSW5wdXRDaGVja2JveCxcbiAgICBPbWl0UHJvcElEPFByb3BJbnB1dENoZWNrYm94PiB8IGtleW9mIFByb3BEUzxDaGVja2JveFByb3BzPlxuPiA9IHsgaWQ6IE5BTUVfSU5QVVRfQ0hFQ0tCT1gsIGlzQ2hlY2tlZDogZmFsc2UgfTtcblxudHlwZSBQcm9wSW5wdXRDaGVja2JveE1lbW9pemVkID0gUHJvcElucHV0Q2hlY2tib3ggJiB7XG4gICAgbWV0aG9kczogVXNlRm9ybVJldHVybjtcbn07XG5cbmNvbnN0IElucHV0Q2hlY2tib3hNZW1vaXplZCA9IFJlYWN0Lm1lbW8oXG4gICAgKHByb3BzOiBQcm9wSW5wdXRDaGVja2JveE1lbW9pemVkKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIG1ldGhvZHMsIG9uQ2hhbmdlLCBpc0NoZWNrZWQsIC4uLnJlc3QgfSA9IHByb3BzO1xuICAgICAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSBSZWFjdC51c2VTdGF0ZShpc0NoZWNrZWQpO1xuICAgICAgICBjb25zdCB7IHJlZ2lzdGVyLCBmb3JtU3RhdGUsIHNldFZhbHVlLCBjbGVhckVycm9ycyB9ID0gbWV0aG9kcztcbiAgICAgICAgY29uc3QgeyBlcnJvcnMgfSA9IGZvcm1TdGF0ZTtcblxuICAgICAgICBjb25zdCByZWdpc3Rlck5hbWUgPSBgJHtuYW1lfWAgYXMgY29uc3Q7XG5cbiAgICAgICAgLy8gdXBkYXRlIGNoZWNrZWQgc3RhdGUgd2hlbiBpc0NoZWNrZWQgcHJvcCBjaGFuZ2VcbiAgICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0NoZWNrZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNldENoZWNrZWQoaXNDaGVja2VkKTtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShyZWdpc3Rlck5hbWUsIGlzQ2hlY2tlZCwgeyBzaG91bGRWYWxpZGF0ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgW2lzQ2hlY2tlZCwgcmVnaXN0ZXJOYW1lLCBzZXRWYWx1ZV0pO1xuXG4gICAgICAgIGNvbnN0IGlucHV0RXJyb3IgPSBlcnJvcnNbbmFtZV07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb21wb25lbnQgbmFtZT17TkFNRV9JTlBVVF9DSEVDS0JPWH0gdHlwZT17VFlQRV9JTlBVVF9DSEVDS0JPWH0+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIGlkPXtpZCB8fCBuYW1lfVxuICAgICAgICAgICAgICAgICAgICB7Li4uKGlucHV0RXJyb3IgJiYgeyBlcnJvcjogaW5wdXRFcnJvci5tZXNzYWdlPy50b1N0cmluZygpIH0pfVxuICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIocmVnaXN0ZXJOYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgaXNDaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrID0gIWNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDaGVja2VkKGNoZWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHJlZ2lzdGVyTmFtZSwgY2hlY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSBvbkNoYW5nZShlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyRXJyb3JzKFtyZWdpc3Rlck5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29tcG9uZW50PlxuICAgICAgICApO1xuICAgIH0sXG4gICAgKHByZXZQcm9wcywgbmV4dFByb3BzKSA9PlxuICAgICAgICBwcmV2UHJvcHMubWV0aG9kcy5mb3JtU3RhdGUuZXJyb3JzID09PSBuZXh0UHJvcHMubWV0aG9kcy5mb3JtU3RhdGUuZXJyb3JzICYmXG4gICAgICAgIHByZXZQcm9wcy5tZXRob2RzLmZvcm1TdGF0ZS5kaXJ0eUZpZWxkc1twcmV2UHJvcHMubmFtZV0gIT09XG4gICAgICAgICAgICBuZXh0UHJvcHMubWV0aG9kcy5mb3JtU3RhdGUuZGlydHlGaWVsZHNbbmV4dFByb3BzLm5hbWVdLFxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIElucHV0Q2hlY2tib3gocHJvcHM6IFByb3BUeXBlczxQcm9wSW5wdXRDaGVja2JveCwgdHlwZW9mIERFRl9JTlBVVF9DSEVDS0JPWD4pIHtcbiAgICBjb25zdCBtZXRob2RzID0gRm9ybS51c2VDb250ZXh0KCk7XG5cbiAgICByZXR1cm4gPElucHV0Q2hlY2tib3hNZW1vaXplZCBtZXRob2RzPXttZXRob2RzfSB7Li4ucHJvcHN9IC8+O1xufVxuXG5JbnB1dENoZWNrYm94LmRpc3BsYXlOYW1lID0gTkFNRV9JTlBVVF9DSEVDS0JPWDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJOQU1FX0lOUFVUX0NIRUNLQk9YXCI6XCJJbnB1dENoZWNrYm94XCIsXCJUWVBFX0lOUFVUX0NIRUNLQk9YXCI6XCJFbGVtZW50XCJ9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJOQU1FX1RIRU1FUExBVEZPUk1cIjpcIlRoZW1lUGxhdGZvcm1cIixcIlRZUEVfVEhFTUVQTEFURk9STVwiOlwiQnVuZGxlXCIsXCJOQU1FX0NPTlNVTUVSX1RIRU1FUExBVEZPUk1cIjpcIlRoZW1lUGxhdGZvcm1Db25zdW1lclwiLFwiVFlQRV9DT05TVU1FUl9USEVNRVBMQVRGT1JNXCI6XCJFbGVtZW50XCIsXCJOQU1FX1BST1ZJREVSX1RIRU1FUExBVEZPUk1cIjpcIlRoZW1lUGxhdGZvcm1Qcm92aWRlclwiLFwiVFlQRV9QUk9WSURFUl9USEVNRVBMQVRGT1JNXCI6XCJQcm92aWRlclwiLFwiTkFNRV9URVhUXCI6XCJUZXh0XCIsXCJUWVBFX1RFWFRcIjpcIkVsZW1lbnRcIixcIk5BTUVfQlVUVE9OXCI6XCJCdXR0b25cIixcIlRZUEVfQlVUVE9OXCI6XCJFbGVtZW50XCIsXCJ2b2lkUGF5bWVudE1vZGFsXCI6XCJfcnVsZXNfdm9pZFBheW1lbnRNb2RhbF9fMjUyaW1cIixcImZvb3RlclwiOlwiX3J1bGVzX2Zvb3Rlcl9fMTJvUURcIixcInRlcm1zQW5kQ29uZGl0aW9uc1wiOlwiX3J1bGVzX3Rlcm1zQW5kQ29uZGl0aW9uc19faDVwdjZcIixcImRvd25sb2FkQWxsXCI6XCJfcnVsZXNfZG93bmxvYWRBbGxfXzNhOW5SXCIsXCJkb3dubG9hZE11bHRpcGxlXCI6XCJfcnVsZXNfZG93bmxvYWRNdWx0aXBsZV9fMi01TzlcIn07Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=96.23ed239c.chunk.js.map
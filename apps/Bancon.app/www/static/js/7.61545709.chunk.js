(this["webpackJsonp@app/bancon"]=this["webpackJsonp@app/bancon"]||[]).push([[7],{573:function(e,t,n){"use strict";n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return T}));var a=n(0),r=n(5),i=n(89),c=n(148),o=n(8),s=n(117),E=n(88),u=n(33);function _(e,t){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(Object(a.a)().mark((function e(t,n){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.a.dispatch(u.a.setSigningOff()),o.a.dispatch(s.a.cleanDeepLinkData()),e.next=4,o.a.dispatch(E.b.setMask({token:n,productMask:t}));case 4:return e.next=6,o.a.dispatch(u.b.logout());case 6:o.a.dispatch(i.a.clean());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t){return N.apply(this,arguments)}function N(){return(N=Object(r.a)(Object(a.a)().mark((function e(t,n){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.dispatch(c.b.depositListSaveDisplayType({token:n,displayType:t}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},669:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(40),r=n(11),i=n(21),c="%",o="useResizeWindow",s=500,E={NO_HANDLER:"".concat(o,": A handler function is expected, got: ").concat(c),INVALID_TARGET:"".concat(o,": Expecting Window or HTMLElement as target, got: ").concat(c," ")};function u(e){var t=e.handler,n=e.target,o=e.throttle,u=void 0===o?s:o;r.b.useEffect((function(){if(n){if(o=n,Object(i.a)(o)&&o instanceof Window){var e=null,r=function(){l(),e&&clearTimeout(e),e=setTimeout((function(){return t({height:window.innerHeight,width:window.innerWidth})}),u)};return n.addEventListener("resize",r),r(),function(){return n.removeEventListener("resize",r)}}var o;if(function(e){return!!Object(i.a)(e)&&e instanceof HTMLElement}(n)){var s=null,_=new ResizeObserver((function(e){l(),s&&clearTimeout(s),s=setTimeout((function(){var n,r=Object(a.a)(e);try{for(r.s();!(n=r.n()).done;){var i=n.value.contentRect,c=i.width,o=i.height;t({width:c,height:o})}}catch(s){r.e(s)}finally{r.f()}}),u)}));return _.observe(n),function(){_.unobserve(n),_.disconnect()}}throw new Error(E.INVALID_TARGET.replace(c,typeof n))}function l(){if("function"!==typeof t)throw new Error(E.NO_HANDLER.replace(c,typeof t))}}),[t,n,u])}},689:function(e,t,n){e.exports={NAME_BASEINTERNAL_CONTAINER:"BaseInternalContainer",TYPE_BASEINTERNAL_CONTAINER:"Container",NAME_BASEINTERNAL_CONTAINERHEADER:"BaseInternalContainerHeader",TYPE_BASEINTERNAL_CONTAINERHEADER:"Section"}},690:function(e,t,n){e.exports={NAME_BASEINTERNAL_CONTAINER:"BaseInternalContainer",TYPE_BASEINTERNAL_CONTAINER:"Container",NAME_BASEINTERNAL_CONTAINERHEADER:"BaseInternalContainerHeader",TYPE_BASEINTERNAL_CONTAINERHEADER:"Section",NAME_THEMEPLATFORM:"ThemePlatform",TYPE_THEMEPLATFORM:"Bundle",NAME_CONSUMER_THEMEPLATFORM:"ThemePlatformConsumer",TYPE_CONSUMER_THEMEPLATFORM:"Element",NAME_PROVIDER_THEMEPLATFORM:"ThemePlatformProvider",TYPE_PROVIDER_THEMEPLATFORM:"Provider",NAME_TEXT:"Text",TYPE_TEXT:"Element",NAME_BUTTON:"Button",TYPE_BUTTON:"Element",NAME_FORM:"Form",TYPE_FORM:"Element",NAME_XS:"xs",NAME_SM:"sm",NAME_MD:"md",NAME_LG:"lg",dropdownButton:"_rules_dropdownButton__C1Sqk",greeter:"_rules_greeter__3hnq7",maxWidth:"_rules_maxWidth__3G1To",notifications:"_rules_notifications__2J-cr",emptyBadge:"_rules_emptyBadge__V2Fb0",actions:"_rules_actions__3zPvm",actionsWithBackHandler:"_rules_actionsWithBackHandler__3_wWL",navigationButtons:"_rules_navigationButtons__3YHv-"}},691:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(2),r=n(19),i=n(11),c=n(41),o=n(36),s=n(50),E=n(277),u=n(692),_=n(6),l=n(8),T=n(33),N=n(79),A=n(87),O=n(153),d=n(164),f=n(38),p=n(513),R=n(82),b=n(693),M=n.n(b),h=n(694),m=n.n(h),I=n(136),j=n(10),v=["items","handleMenuActive","doScan"],P=M.a.NAME_BASEINTERNAL_CONTAINERFOOTER,L=M.a.TYPE_BASEINTERNAL_CONTAINERFOOTER;function g(e){var t=e,n=t.items,s=t.handleMenuActive,T=t.doScan,N=Object(r.a)(t,v),f=i.b.createRef(),p=Object(o.i)(),R=p.isMobile,b=p.isUnknown,M=Object(l.c)(A.c.fetching),h=Object(l.c)(A.c.fetchingOtpConfigurationPre),m=Object(l.c)(d.c.fetching),I=Object(l.c)(O.c.transactionsFetching);i.b.useEffect((function(){var e=M||h||m||I;if(f.current&&!e){var t=E.a.slice(_.fb),n=u.a.slice(_.fb);f.current.style.setProperty("--footer-background-image","url('".concat(t,"')")),f.current.style.setProperty("--footer-background-movil-image","url('".concat(n,"')"))}}),[M,m,h,I,f]);var g=n.map((function(e){var t=e.id,n=e.link,a=e.icon,r=e.text,i=e.active;switch(a){case"menu":return Object(j.jsx)(x,{handleMenuActive:s,text:r||"spa.footer.modo"},t);case"qr":return R?Object(j.jsx)(B,{doScan:T,id:t,text:r},t):null;default:return Object(j.jsx)(C,{icon:a,id:t,isActive:Boolean(i),link:n,text:r},t)}}));return Object(j.jsx)(c.a,Object(a.a)(Object(a.a)({},N),{},{ref:f,name:P,tag:"footer",type:L,children:!b&&Object(j.jsx)("section",{children:Object(j.jsx)("nav",{children:g})})}))}function x(e){var t=e.handleMenuActive,n=e.text;return Object(j.jsxs)(R.a,{className:m.a.menu,kind:"plain",label:{uuid:n},onClick:t,children:[Object(j.jsx)(s.Icon,{name:"menu",size:"small",stroke:"gray-light"}),Object(j.jsx)(f.b,{tag:"span",uuid:n})]})}function B(e){var t=e.doScan,n=e.text,a=e.id,r=Object(T.h)(a),i=Object(T.f)(a),c=Object(N.d)().showErrorToast,o=(0,Object(f.c)().textGet)({uuid:String(n)});return Object(j.jsxs)(R.a,{ariaLabel:{uuid:"spa.a11y.buttons.qr"},className:m.a.principal,kind:"plain",label:{uuid:"spa.a11y.buttons.qr"},onClick:function(){return i&&r?t():(i||c("spa.feature.error.available",o),r||c("spa.feature.error.permission",o),!1)},children:[Object(j.jsx)(s.Icon,{name:"qr",size:"small",stroke:"white"}),Object(j.jsx)(I.a,{alt:"Modo",uuid:"logoModoBadge"})]})}function C(e){var t=e.link,n=e.isActive,a=e.icon,r=e.text,i=e.id,o=Object(T.h)(i),E=Object(T.f)(i),u=Object(N.d)().showErrorToast,_=(0,Object(f.c)().textGet)({uuid:String(r)}),l=n?"primary":"gray-light",A=Object(c.c)(n&&m.a.active);return Object(j.jsxs)(p.a,{className:A,preventNavigateCallback:function(){return"home"===i||(E?(o||u("spa.feature.error.permission",_),o):(u("spa.feature.error.available",_),!1))},to:t,children:[Object(j.jsx)(s.Icon,{name:a,size:"small",stroke:l}),Object(j.jsx)(f.b,{tag:"span",uuid:r}),n&&Object(j.jsx)("span",{className:m.a.spanActive})]},String(t))}g.defaultProps={header:null}},693:function(e,t,n){e.exports={NAME_BASEINTERNAL_CONTAINER:"BaseInternalContainer",TYPE_BASEINTERNAL_CONTAINER:"Container",NAME_BASEINTERNAL_CONTAINERFOOTER:"BaseInternalContainerFooter",TYPE_BASEINTERNAL_CONTAINERFOOTER:"Section"}},694:function(e,t,n){e.exports={NAME_BASEINTERNAL_CONTAINER:"BaseInternalContainer",TYPE_BASEINTERNAL_CONTAINER:"Container",NAME_BASEINTERNAL_CONTAINERFOOTER:"BaseInternalContainerFooter",TYPE_BASEINTERNAL_CONTAINERFOOTER:"Section",NAME_THEMEPLATFORM:"ThemePlatform",TYPE_THEMEPLATFORM:"Bundle",NAME_CONSUMER_THEMEPLATFORM:"ThemePlatformConsumer",TYPE_CONSUMER_THEMEPLATFORM:"Element",NAME_PROVIDER_THEMEPLATFORM:"ThemePlatformProvider",TYPE_PROVIDER_THEMEPLATFORM:"Provider",NAME_IMAGE:"Image",TYPE_IMAGE:"Element",NAME_TEXT:"Text",TYPE_TEXT:"Element",NAME_LINK:"Link",TYPE_LINK:"Element",active:"_rules_active__38T8q",spanActive:"_rules_spanActive__2Y83h",principal:"_rules_principal__2lwDZ",menu:"_rules_menu__2QI_8"}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi1kYXRhL3V0aWxzL3Nlc3Npb25VdGlscy50cyIsIndlYnBhY2s6Ly8vL1VzZXJzL21hcmlhZ2ltZW5hZXNwb3NpdG8vRG9jdW1lbnRzL1JlZGlzZW5vL1JlbGVhc2UyMzYvYXItYmFuY29yLXJlZGlzZW5vLWVudHJlZ2EvQHBrZy9yZWFjdC1zdG9yeWJvb2svSG9vay9yZXNpemVIYW5kbGVyLnRzIiwid2VicGFjazovLy8uLi9iYW5jb3ItY29tcG9uZW50cy9Db250YWluZXIvQmFzZUludGVybmFsL19IZWFkZXIvX2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL2JhbmNvci1jb21wb25lbnRzL0NvbnRhaW5lci9CYXNlSW50ZXJuYWwvX0hlYWRlci9fcnVsZXMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL2JhbmNvci1jb21wb25lbnRzL0NvbnRhaW5lci9CYXNlSW50ZXJuYWwvX0Zvb3Rlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4uL2JhbmNvci1jb21wb25lbnRzL0NvbnRhaW5lci9CYXNlSW50ZXJuYWwvX0Zvb3Rlci9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi4vYmFuY29yLWNvbXBvbmVudHMvQ29udGFpbmVyL0Jhc2VJbnRlcm5hbC9fRm9vdGVyL19ydWxlcy5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6WyJkb0xvZ291dCIsIl94IiwiX3gyIiwiX2RvTG9nb3V0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInByb2R1Y3RNYXNrIiwidG9rZW4iLCJ3cmFwIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIlN0b3JlIiwiZGlzcGF0Y2giLCJBY3Rpb25TbGljZVNlc3Npb24iLCJzZXRTaWduaW5nT2ZmIiwiQWN0aW9uU2xpY2VNb2RvIiwiY2xlYW5EZWVwTGlua0RhdGEiLCJGZXRjaGVyU2xpY2VQcm9kdWN0TWFzayIsInNldE1hc2siLCJGZXRjaGVyU2xpY2VTZXNzaW9uIiwibG9nb3V0IiwiQWN0aW9uU2xpY2VMZWdhY3kiLCJjbGVhbiIsInN0b3AiLCJzYXZlRGVwb3NpdERpc3BsYXlUeXBlT25Mb2dvdXQiLCJfeDMiLCJfeDQiLCJfc2F2ZURlcG9zaXREaXNwbGF5VHlwZU9uTG9nb3V0IiwiX2NhbGxlZTIiLCJkaXNwbGF5VHlwZSIsIl9jb250ZXh0MiIsIkZldGNoZXJTbGljZURlcG9zaXRzIiwiZGVwb3NpdExpc3RTYXZlRGlzcGxheVR5cGUiLCJSRVBMIiwiTkFNRV9SRVNJWkVIQU5ETEVSX0hPT0siLCJUSFJPVFRMRV9SRVNJWkVIQU5ETEVSX0hPT0siLCJFUlJPUl9SRVNJWkVIQU5ETEVSX0hPT0siLCJOT19IQU5ETEVSIiwiY29uY2F0IiwiSU5WQUxJRF9UQVJHRVQiLCJ1c2VSZXNpemVIYW5kbGVyIiwiYXJnIiwiaGFuZGxlciIsInRhcmdldCIsIl9hcmckdGhyb3R0bGUiLCJ0aHJvdHRsZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwiZW50cnkiLCJpc1JlY29yZCIsIldpbmRvdyIsInRpbWVvdXQiLCJyb290SGFuZGxlciIsImhhbmRsZVZhbGlkYXRpb25zIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJIVE1MRWxlbWVudCIsImlzSFRNTEVsZW1lbnQiLCJyZXNpemVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiX3N0ZXAiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsInMiLCJuIiwiZG9uZSIsIl9lbnRyeSRjb250ZW50UmVjdCIsInZhbHVlIiwiY29udGVudFJlY3QiLCJlcnIiLCJlIiwiZiIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJkaXNjb25uZWN0IiwiRXJyb3IiLCJyZXBsYWNlIiwibW9kdWxlIiwiZXhwb3J0cyIsIk5BTUVfQkFTRUlOVEVSTkFMX0NPTlRBSU5FUkZPT1RFUiIsIk5hbWVzcGFjZSIsIlRZUEVfQkFTRUlOVEVSTkFMX0NPTlRBSU5FUkZPT1RFUiIsIkJhc2VJbnRlcm5hbENvbnRhaW5lckZvb3RlciIsInByb3BzIiwiX3JlZiIsIml0ZW1zIiwiaGFuZGxlTWVudUFjdGl2ZSIsImRvU2NhbiIsInJlc3QiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJyZWYiLCJjcmVhdGVSZWYiLCJfdXNlUGxhdGZvcm0iLCJ1c2VQbGF0Zm9ybSIsImlzTW9iaWxlIiwiaXNVbmtub3duIiwiZmV0Y2hpbmciLCJ1c2VTZWxlY3RvciIsIlNlbGVjdG9yU2xpY2VQcmVmZXJlbmNlcyIsImZldGNoaW5nT3RwQ29uZmlndXJhdGlvblByZSIsImZldGNoaW5nQ2FtcGFpZ25zIiwiU2VsZWN0b3JTbGljZUNhbXBhaWducyIsImZldGNoaW5nVHJhbnNhY3Rpb25zIiwiU2VsZWN0b3JTbGljZVRyYW5zYWN0aW9ucyIsInRyYW5zYWN0aW9uc0ZldGNoaW5nIiwiaG9tZVN0aWxsTG9hZGluZyIsImN1cnJlbnQiLCJ0cmFtYURlc2t0b3AiLCJUcmFtYURlc2t0b3AiLCJzbGljZSIsIk9ORSIsInRyYW1hTW9iaWxlIiwiVHJhbWFNb2JpbGUiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZWxlbWVudHNGb290ZXIiLCJtYXAiLCJfcmVmMiIsImlkIiwibGluayIsImljb24iLCJ0ZXh0IiwiYWN0aXZlIiwiX2pzeCIsIk1lbnVCdXR0b24iLCJRUkJ1dHRvbiIsIkxpbmtFbGVtZW50IiwiaXNBY3RpdmUiLCJCb29sZWFuIiwiQ29tcG9uZW50IiwiX29iamVjdFNwcmVhZCIsIm5hbWUiLCJ0YWciLCJ0eXBlIiwiY2hpbGRyZW4iLCJfcmVmMyIsIl9qc3hzIiwiQnV0dG9uIiwiY2xhc3NOYW1lIiwiUnVsZXMiLCJtZW51Iiwia2luZCIsImxhYmVsIiwidXVpZCIsIm9uQ2xpY2siLCJJY29uIiwic2l6ZSIsInN0cm9rZSIsIlRleHQiLCJfcmVmNCIsImlzUGVybWlzc2lvbiIsInVzZVBlcm1pc3Npb25GZWF0dXJlIiwiaXNBdmFpbGFibGUiLCJ1c2VBdmFpbGFibGVGZWF0dXJlIiwic2hvd0Vycm9yVG9hc3QiLCJ1c2VTaG93VG9hc3QiLCJ0ZXh0UmVwbGFjZSIsInRleHRHZXQiLCJ1c2VUZXh0IiwiU3RyaW5nIiwiYXJpYUxhYmVsIiwicHJpbmNpcGFsIiwiSW1hZ2UiLCJhbHQiLCJfcmVmNSIsInN0cm9rZUNvbG9yIiwiYWN0aXZlQ2xhc3MiLCJnZXRDbGFzc05hbWUiLCJMaW5rIiwicHJldmVudE5hdmlnYXRlQ2FsbGJhY2siLCJ0byIsInNwYW5BY3RpdmUiLCJkZWZhdWx0UHJvcHMiLCJoZWFkZXIiXSwibWFwcGluZ3MiOiJ5UEFPTyxTQUFlQSxFQUFRQyxFQUFBQyxHQUFBLE9BQUFDLEVBQUFDLE1BQUMsS0FBREMsVUFBQSxDQVU3QixTQUFBRixJQUFBLE9BQUFBLEVBQUFHLFlBQUFDLGNBQUFDLE1BVk0sU0FBQUMsRUFBd0JDLEVBQXNCQyxHQUFhLE9BQUFKLGNBQUFLLE1BQUEsU0FBQUMsR0FBQSxjQUFBQSxFQUFBQyxLQUFBRCxFQUFBRSxNQUFBLE9BRVYsT0FEcERDLElBQU1DLFNBQVNDLElBQW1CQyxpQkFDbENILElBQU1DLFNBQVNHLElBQWdCQyxxQkFBcUJSLEVBQUFFLEtBQUEsRUFDOUNDLElBQU1DLFNBQVNLLElBQXdCQyxRQUFRLENBQUVaLFFBQU9ELGlCQUFnQixLQUFELFNBQUFHLEVBQUFFLEtBQUEsRUFDdkVDLElBQU1DLFNBQVNPLElBQW9CQyxVQUFVLEtBQUQsRUFHbERULElBQU1DLFNBQVNTLElBQWtCQyxTQUVqQyx3QkFBQWQsRUFBQWUsT0FBQSxHQUFBbkIsRUFBQSxNQUNITCxNQUFBLEtBQUFDLFVBQUEsQ0FFTSxTQUFld0IsRUFBOEJDLEVBQUFDLEdBQUEsT0FBQUMsRUFBQTVCLE1BQUMsS0FBREMsVUFBQSxDQUVuRCxTQUFBMkIsSUFBQSxPQUFBQSxF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SUFBSSxPQUFPVyxLQUFNdEIsSUFDdEJNLEdBQVlKLGNBQUEsUUFBTWUsVUFBV0MsSUFBTWdDLGVBTi9CWixPQUFPeEMsR0FTeEIsQ0FFQXRDLEVBQTRCMkYsYUFyTG1FLENBQzNGQyxPQUFRLEssc0JDdERaakcsRUFBT0MsUUFBVSxDQUFDLDRCQUE4Qix3QkFBd0IsNEJBQThCLFlBQVksa0NBQW9DLDhCQUE4QixrQ0FBb0MsVSxzQkNBeE5ELEVBQU9DLFFBQVUsQ0FBQyw0QkFBOEIsd0JBQXdCLDRCQUE4QixZQUFZLGtDQUFvQyw4QkFBOEIsa0NBQW9DLFVBQVUsbUJBQXFCLGdCQUFnQixtQkFBcUIsU0FBUyw0QkFBOEIsd0JBQXdCLDRCQUE4QixVQUFVLDRCQUE4Qix3QkFBd0IsNEJBQThCLFdBQVcsV0FBYSxRQUFRLFdBQWEsVUFBVSxVQUFZLE9BQU8sVUFBWSxVQUFVLFVBQVksT0FBTyxVQUFZLFVBQVUsT0FBUyx1QkFBdUIsV0FBYSwyQkFBMkIsVUFBWSwwQkFBMEIsS0FBTyxxQiIsImZpbGUiOiJzdGF0aWMvanMvNy42MTU0NTcwOS5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblNsaWNlTGVnYWN5IH0gZnJvbSBcIi4uL3NsaWNlcy9sZWdhY3lcIjtcbmltcG9ydCB7IEZldGNoZXJTbGljZURlcG9zaXRzIH0gZnJvbSBcIi4uL3NsaWNlcy9kZXBvc2l0c1wiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi5cIjtcbmltcG9ydCB7IEFjdGlvblNsaWNlTW9kbyB9IGZyb20gXCIuLi9zbGljZXMvbW9kb1wiO1xuaW1wb3J0IHsgRmV0Y2hlclNsaWNlUHJvZHVjdE1hc2sgfSBmcm9tIFwiLi4vc2xpY2VzL3Byb2R1Y3RNYXNrXCI7XG5pbXBvcnQgeyBBY3Rpb25TbGljZVNlc3Npb24sIEZldGNoZXJTbGljZVNlc3Npb24gfSBmcm9tIFwiLi4vc2xpY2VzL3Nlc3Npb25cIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvTG9nb3V0KHByb2R1Y3RNYXNrOiBib29sZWFuLCB0b2tlbjogc3RyaW5nKSB7XG4gICAgU3RvcmUuZGlzcGF0Y2goQWN0aW9uU2xpY2VTZXNzaW9uLnNldFNpZ25pbmdPZmYoKSk7XG4gICAgU3RvcmUuZGlzcGF0Y2goQWN0aW9uU2xpY2VNb2RvLmNsZWFuRGVlcExpbmtEYXRhKCkpO1xuICAgIGF3YWl0IFN0b3JlLmRpc3BhdGNoKEZldGNoZXJTbGljZVByb2R1Y3RNYXNrLnNldE1hc2soeyB0b2tlbiwgcHJvZHVjdE1hc2sgfSkpO1xuICAgIGF3YWl0IFN0b3JlLmRpc3BhdGNoKEZldGNoZXJTbGljZVNlc3Npb24ubG9nb3V0KCkpO1xuXG4gICAgLy8gY2xlYW4gcGVyc2lzdGVkIHNsaWNlc1xuICAgIFN0b3JlLmRpc3BhdGNoKEFjdGlvblNsaWNlTGVnYWN5LmNsZWFuKCkpO1xuICAgIC8vVE9ETyBjaGVjayBpdFxuICAgIC8vU3RvcmUuZGlzcGF0Y2goQWN0aW9uU2xpY2VQcm9kdWN0TWFzay5jbGVhbigpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVEZXBvc2l0RGlzcGxheVR5cGVPbkxvZ291dChkaXNwbGF5VHlwZTogc3RyaW5nLCB0b2tlbjogc3RyaW5nKSB7XG4gICAgYXdhaXQgU3RvcmUuZGlzcGF0Y2goRmV0Y2hlclNsaWNlRGVwb3NpdHMuZGVwb3NpdExpc3RTYXZlRGlzcGxheVR5cGUoeyB0b2tlbiwgZGlzcGxheVR5cGUgfSkpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJAcGtnL3JlYWN0XCI7XG5pbXBvcnQgeyBpc1JlY29yZCB9IGZyb20gXCJAcGtnL3R5cGVzL3JlY29yZFwiO1xuXG5jb25zdCBSRVBMID0gXCIlXCIgYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBOQU1FX1JFU0laRUhBTkRMRVJfSE9PSyA9IFwidXNlUmVzaXplV2luZG93XCIgYXMgY29uc3Q7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbWFnaWMtbnVtYmVyc1xuZXhwb3J0IGNvbnN0IFRIUk9UVExFX1JFU0laRUhBTkRMRVJfSE9PSyA9IDUwMCBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEVSUk9SX1JFU0laRUhBTkRMRVJfSE9PSyA9IHtcbiAgICBOT19IQU5ETEVSOiBgJHtOQU1FX1JFU0laRUhBTkRMRVJfSE9PS306IEEgaGFuZGxlciBmdW5jdGlvbiBpcyBleHBlY3RlZCwgZ290OiAke1JFUEx9YCxcbiAgICBJTlZBTElEX1RBUkdFVDogYCR7TkFNRV9SRVNJWkVIQU5ETEVSX0hPT0t9OiBFeHBlY3RpbmcgV2luZG93IG9yIEhUTUxFbGVtZW50IGFzIHRhcmdldCwgZ290OiAke1JFUEx9IGAsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgdHlwZSBTaXplUmVzaXplSGFuZGxlckhvb2sgPSB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIEFyZ1Jlc2l6ZUhhbmRsZXIgPSB7XG4gICAgaGFuZGxlcjogKHNpemU6IFNpemVSZXNpemVIYW5kbGVySG9vaykgPT4gdm9pZDtcbiAgICB0YXJnZXQ/OiBXaW5kb3cgfCBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgdGhyb3R0bGU/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVzaXplSGFuZGxlcihhcmc6IEFyZ1Jlc2l6ZUhhbmRsZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7IGhhbmRsZXIsIHRhcmdldCwgdGhyb3R0bGUgPSBUSFJPVFRMRV9SRVNJWkVIQU5ETEVSX0hPT0sgfSA9IGFyZztcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXRhcmdldCkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoaXNXaW5kb3codGFyZ2V0KSkge1xuICAgICAgICAgICAgbGV0IHRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbCA9IG51bGw7XG4gICAgICAgICAgICBjb25zdCByb290SGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVWYWxpZGF0aW9ucygpO1xuICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgICAgICAgICgpID0+IGhhbmRsZXIoeyBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCwgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pLFxuICAgICAgICAgICAgICAgICAgICB0aHJvdHRsZSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJvb3RIYW5kbGVyKTtcbiAgICAgICAgICAgIHJvb3RIYW5kbGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcm9vdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzSFRNTEVsZW1lbnQodGFyZ2V0KSkge1xuICAgICAgICAgICAgbGV0IHRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0IHwgbnVsbCA9IG51bGw7XG4gICAgICAgICAgICBjb25zdCByb290SGFuZGxlciA9IChlbnRyaWVzOiBSZXNpemVPYnNlcnZlckVudHJ5W10pID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVWYWxpZGF0aW9ucygpO1xuICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0KSBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZW50cnkuY29udGVudFJlY3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKHsgd2lkdGgsIGhlaWdodCB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHRocm90dGxlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCByZXNpemVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKHJvb3RIYW5kbGVyKTtcbiAgICAgICAgICAgIHJlc2l6ZXIub2JzZXJ2ZSh0YXJnZXQpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNpemVyLnVub2JzZXJ2ZSh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHJlc2l6ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9SRVNJWkVIQU5ETEVSX0hPT0suSU5WQUxJRF9UQVJHRVQucmVwbGFjZShSRVBMLCB0eXBlb2YgdGFyZ2V0KSk7XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVmFsaWRhdGlvbnMoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9SRVNJWkVIQU5ETEVSX0hPT0suTk9fSEFORExFUi5yZXBsYWNlKFJFUEwsIHR5cGVvZiBoYW5kbGVyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbaGFuZGxlciwgdGFyZ2V0LCB0aHJvdHRsZV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNXaW5kb3coZW50cnk6IHVua25vd24pOiBlbnRyeSBpcyBXaW5kb3cge1xuICAgIGlmICghaXNSZWNvcmQoZW50cnkpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCEoZW50cnkgaW5zdGFuY2VvZiBXaW5kb3cpKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0hUTUxFbGVtZW50KGVudHJ5OiB1bmtub3duKTogZW50cnkgaXMgSFRNTEVsZW1lbnQge1xuICAgIGlmICghaXNSZWNvcmQoZW50cnkpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCEoZW50cnkgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJOQU1FX0JBU0VJTlRFUk5BTF9DT05UQUlORVJcIjpcIkJhc2VJbnRlcm5hbENvbnRhaW5lclwiLFwiVFlQRV9CQVNFSU5URVJOQUxfQ09OVEFJTkVSXCI6XCJDb250YWluZXJcIixcIk5BTUVfQkFTRUlOVEVSTkFMX0NPTlRBSU5FUkhFQURFUlwiOlwiQmFzZUludGVybmFsQ29udGFpbmVySGVhZGVyXCIsXCJUWVBFX0JBU0VJTlRFUk5BTF9DT05UQUlORVJIRUFERVJcIjpcIlNlY3Rpb25cIn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIk5BTUVfQkFTRUlOVEVSTkFMX0NPTlRBSU5FUlwiOlwiQmFzZUludGVybmFsQ29udGFpbmVyXCIsXCJUWVBFX0JBU0VJTlRFUk5BTF9DT05UQUlORVJcIjpcIkNvbnRhaW5lclwiLFwiTkFNRV9CQVNFSU5URVJOQUxfQ09OVEFJTkVSSEVBREVSXCI6XCJCYXNlSW50ZXJuYWxDb250YWluZXJIZWFkZXJcIixcIlRZUEVfQkFTRUlOVEVSTkFMX0NPTlRBSU5FUkhFQURFUlwiOlwiU2VjdGlvblwiLFwiTkFNRV9USEVNRVBMQVRGT1JNXCI6XCJUaGVtZVBsYXRmb3JtXCIsXCJUWVBFX1RIRU1FUExBVEZPUk1cIjpcIkJ1bmRsZVwiLFwiTkFNRV9DT05TVU1FUl9USEVNRVBMQVRGT1JNXCI6XCJUaGVtZVBsYXRmb3JtQ29uc3VtZXJcIixcIlRZUEVfQ09OU1VNRVJfVEhFTUVQTEFURk9STVwiOlwiRWxlbWVudFwiLFwiTkFNRV9QUk9WSURFUl9USEVNRVBMQVRGT1JNXCI6XCJUaGVtZVBsYXRmb3JtUHJvdmlkZXJcIixcIlRZUEVfUFJPVklERVJfVEhFTUVQTEFURk9STVwiOlwiUHJvdmlkZXJcIixcIk5BTUVfVEVYVFwiOlwiVGV4dFwiLFwiVFlQRV9URVhUXCI6XCJFbGVtZW50XCIsXCJOQU1FX0JVVFRPTlwiOlwiQnV0dG9uXCIsXCJUWVBFX0JVVFRPTlwiOlwiRWxlbWVudFwiLFwiTkFNRV9GT1JNXCI6XCJGb3JtXCIsXCJUWVBFX0ZPUk1cIjpcIkVsZW1lbnRcIixcIk5BTUVfWFNcIjpcInhzXCIsXCJOQU1FX1NNXCI6XCJzbVwiLFwiTkFNRV9NRFwiOlwibWRcIixcIk5BTUVfTEdcIjpcImxnXCIsXCJkcm9wZG93bkJ1dHRvblwiOlwiX3J1bGVzX2Ryb3Bkb3duQnV0dG9uX19DMVNxa1wiLFwiZ3JlZXRlclwiOlwiX3J1bGVzX2dyZWV0ZXJfXzNobnE3XCIsXCJtYXhXaWR0aFwiOlwiX3J1bGVzX21heFdpZHRoX18zRzFUb1wiLFwibm90aWZpY2F0aW9uc1wiOlwiX3J1bGVzX25vdGlmaWNhdGlvbnNfXzJKLWNyXCIsXCJlbXB0eUJhZGdlXCI6XCJfcnVsZXNfZW1wdHlCYWRnZV9fVjJGYjBcIixcImFjdGlvbnNcIjpcIl9ydWxlc19hY3Rpb25zX18zelB2bVwiLFwiYWN0aW9uc1dpdGhCYWNrSGFuZGxlclwiOlwiX3J1bGVzX2FjdGlvbnNXaXRoQmFja0hhbmRsZXJfXzNfd1dMXCIsXCJuYXZpZ2F0aW9uQnV0dG9uc1wiOlwiX3J1bGVzX25hdmlnYXRpb25CdXR0b25zX18zWUh2LVwifTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcIkBwa2cvcmVhY3RcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgZ2V0Q2xhc3NOYW1lIH0gZnJvbSBcIkBwa2cvcmVhY3Qtc3Rvcnlib29rL0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgdXNlUGxhdGZvcm0gfSBmcm9tIFwiQHBrZy91dGlscy1jb3Jkb3ZhLXBsdWdpbi10cy9pbmZvXCI7XG5pbXBvcnQgdHlwZSB7IFByb3BFbGVtZW50LCBQcm9wVHlwZXMsIFByb3BEZWZhdWx0cyB9IGZyb20gXCJAcGtnL3JlYWN0LXN0b3J5Ym9vay9Db21wb25lbnRcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiQGFwcC9iYW5jb24tdWlcIjtcbmltcG9ydCB0eXBlIHsgTmFtZSB9IGZyb20gXCJAYXBwL2JhbmNvbi11aS9kaXN0L2NvbXBvbmVudHMvSWNvbi9JY29uLnR5cGVzXCI7XG5cbmltcG9ydCBUcmFtYURlc2t0b3AgZnJvbSBcIkBhcHAvYmFuY29yLWNvbXBvbmVudHMvRWxlbWVudC9JbWFnZS9hc3NldHMvVHJhbWFEZXNrdG9wLnN2Z1wiO1xuaW1wb3J0IFRyYW1hTW9iaWxlIGZyb20gXCJAYXBwL2JhbmNvci1jb21wb25lbnRzL0VsZW1lbnQvSW1hZ2UvYXNzZXRzL1RyYW1hTW9iaWxlLnN2Z1wiO1xuaW1wb3J0IHsgT05FIH0gZnJvbSBcIkBhcHAvYmFuY29uLWRhdGEvY29uc3RhbnRzXCI7XG5cbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcIkBhcHAvYmFuY29uLWRhdGFcIjtcbmltcG9ydCB7IHVzZUF2YWlsYWJsZUZlYXR1cmUsIHVzZVBlcm1pc3Npb25GZWF0dXJlIH0gZnJvbSBcIkBhcHAvYmFuY29uLWRhdGEvc2xpY2VzL3Nlc3Npb25cIjtcbmltcG9ydCB7IHVzZVNob3dUb2FzdCB9IGZyb20gXCJAYXBwL2JhbmNvbi1kYXRhL3NsaWNlcy90b2FzdFwiO1xuaW1wb3J0IHR5cGUgeyBDb2xvciB9IGZyb20gXCJAYXBwL2JhbmNvbi11aS9kaXN0L2NvbW1vblwiO1xuaW1wb3J0IHsgU2VsZWN0b3JTbGljZVByZWZlcmVuY2VzIH0gZnJvbSBcIkBhcHAvYmFuY29uLWRhdGEvc2xpY2VzL3ByZWZlcmVuY2VzXCI7XG5pbXBvcnQgeyBTZWxlY3RvclNsaWNlVHJhbnNhY3Rpb25zIH0gZnJvbSBcIkBhcHAvYmFuY29uLWRhdGEvc2xpY2VzL3RyYW5zYWN0aW9uc1wiO1xuaW1wb3J0IHsgU2VsZWN0b3JTbGljZUNhbXBhaWducyB9IGZyb20gXCJAYXBwL2JhbmNvbi1kYXRhL3NsaWNlcy9jYW1wYWlnbnNcIjtcbmltcG9ydCB7IFRleHQsIHVzZVRleHQgfSBmcm9tIFwiLi4vLi4vLi4vRWxlbWVudC9UZXh0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uLy4uL0VsZW1lbnQvTGlua1wiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uL0VsZW1lbnQvQnV0dG9uXCI7XG5pbXBvcnQgTmFtZXNwYWNlIGZyb20gXCIuL19pbmRleC5zY3NzXCI7XG5pbXBvcnQgUnVsZXMgZnJvbSBcIi4vX3J1bGVzLm1vZHVsZS5zY3NzXCI7XG5cbmltcG9ydCB0eXBlIHsgUHJvcExpbmsgfSBmcm9tIFwiLi4vLi4vLi4vRWxlbWVudC9MaW5rXCI7XG5pbXBvcnQgdHlwZSB7IFByb3BUZXh0IH0gZnJvbSBcIi4uLy4uLy4uL0VsZW1lbnQvVGV4dFwiO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwiLi4vLi4vLi4vRWxlbWVudC9JbWFnZVwiO1xuXG5leHBvcnQgY29uc3QgeyBOQU1FX0JBU0VJTlRFUk5BTF9DT05UQUlORVJGT09URVIsIFRZUEVfQkFTRUlOVEVSTkFMX0NPTlRBSU5FUkZPT1RFUiB9ID0gTmFtZXNwYWNlO1xuXG5leHBvcnQgdHlwZSBJdGVtQmFzZUludGVybmFsQ29udGFpbmVyRm9vdGVyID0ge1xuICAgIC8qKiBPbmUgb2YgdGhlIGF2YWlsYWJsZSB1bmlxdWUgaWRlbnRpZmllcnMgZm9yIGFuIGljb24gKi9cbiAgICBpY29uOiBOYW1lO1xuICAgIC8qKiBUaGUgYHV1aWRgIGZvciBhIHRleHQgKi9cbiAgICB0ZXh0PzogUHJvcFRleHRbXCJ1dWlkXCJdO1xuICAgIC8qKiBUaGUgcm91dGUgdG8gYmUgcmVkaXJlY3RlZCBvbmNlIHlvdSBjbGljayBvbiBhbiBpdGVtICovXG4gICAgbGluazogUHJvcExpbmtbXCJ0b1wiXTtcbiAgICAvKiogQWN0aXZlIGl0ZW0gbGluayBpbiBmb290ZXIgKi9cbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIC8qKiBJdGVtIGlkICovXG4gICAgaWQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFByb3BCYXNlSW50ZXJuYWxDb250YWluZXJGb290ZXIgPSBPbWl0PFByb3BFbGVtZW50LCBcImNoaWxkcmVuXCI+ICYge1xuICAgIC8qKiBvZGQgaXRlbXMgd2lsbCBiZSBwbGFjZWQgb24gdGhlIGxlZnQsIGV2ZW4gaXRlbXMgb24gdGhlIHJpZ2h0ICovXG4gICAgaXRlbXM6IEl0ZW1CYXNlSW50ZXJuYWxDb250YWluZXJGb290ZXJbXTtcbiAgICAvKiogQW4gaXRlbSB0byBiZSBwbGFjZWQgYXQgdGhlIGNlbnRlciBvZiB0aGUgZm9vdGVyLCBpZiBvbW1pdGVkLCBhIHBsYWluIGZvb3RlciB3aWxsIGJlIHNob3duICovXG4gICAgaGVhZGVyPzogSXRlbUJhc2VJbnRlcm5hbENvbnRhaW5lckZvb3RlciB8IG51bGw7XG4gICAgLyoqIEZ1bmN0aW9uIHRvIGhpZGUgYW5kIHNob3cgdGhlIG1lbnUgKi9cbiAgICBoYW5kbGVNZW51QWN0aXZlOiAoKSA9PiB2b2lkO1xuICAgIC8qKiBDYWxsYmFjayBxciBidXR0b24gICovXG4gICAgZG9TY2FuOiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xufTtcblxuZXhwb3J0IGNvbnN0IERFRl9CQVNFSU5URVJOQUxfQ09OVEFJTkVSRk9PVEVSOiBQcm9wRGVmYXVsdHM8UHJvcEJhc2VJbnRlcm5hbENvbnRhaW5lckZvb3Rlcj4gPSB7XG4gICAgaGVhZGVyOiBudWxsLFxufTtcblxuZXhwb3J0IHR5cGUgUHJvcFR5cGVzQmFzZUludGVybmFsQ29udGFpbmVyRm9vdGVyID0gUHJvcFR5cGVzPFxuICAgIFByb3BCYXNlSW50ZXJuYWxDb250YWluZXJGb290ZXIsXG4gICAgdHlwZW9mIERFRl9CQVNFSU5URVJOQUxfQ09OVEFJTkVSRk9PVEVSXG4+O1xuZXhwb3J0IGZ1bmN0aW9uIEJhc2VJbnRlcm5hbENvbnRhaW5lckZvb3Rlcihwcm9wczogUHJvcEJhc2VJbnRlcm5hbENvbnRhaW5lckZvb3Rlcikge1xuICAgIGNvbnN0IHsgaXRlbXMsIGhhbmRsZU1lbnVBY3RpdmUsIGRvU2NhbiwgLi4ucmVzdCB9ID1cbiAgICAgICAgcHJvcHMgYXMgUHJvcFR5cGVzQmFzZUludGVybmFsQ29udGFpbmVyRm9vdGVyO1xuXG4gICAgY29uc3QgcmVmID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxFbGVtZW50PigpO1xuXG4gICAgY29uc3QgeyBpc01vYmlsZSwgaXNVbmtub3duIH0gPSB1c2VQbGF0Zm9ybSgpO1xuXG4gICAgY29uc3QgZmV0Y2hpbmcgPSB1c2VTZWxlY3RvcihTZWxlY3RvclNsaWNlUHJlZmVyZW5jZXMuZmV0Y2hpbmcpO1xuICAgIGNvbnN0IGZldGNoaW5nT3RwQ29uZmlndXJhdGlvblByZSA9IHVzZVNlbGVjdG9yKFxuICAgICAgICBTZWxlY3RvclNsaWNlUHJlZmVyZW5jZXMuZmV0Y2hpbmdPdHBDb25maWd1cmF0aW9uUHJlLFxuICAgICk7XG4gICAgY29uc3QgZmV0Y2hpbmdDYW1wYWlnbnMgPSB1c2VTZWxlY3RvcihTZWxlY3RvclNsaWNlQ2FtcGFpZ25zLmZldGNoaW5nKTtcbiAgICBjb25zdCBmZXRjaGluZ1RyYW5zYWN0aW9ucyA9IHVzZVNlbGVjdG9yKFNlbGVjdG9yU2xpY2VUcmFuc2FjdGlvbnMudHJhbnNhY3Rpb25zRmV0Y2hpbmcpO1xuXG4gICAgLy8gU2V0IGNzcyB2YXJpYWJsZSBvZiBiYWNrZ3JvdW5kLWltYWdlIGFuZCBjb2xvciBvbiB0aGUgZm9vdGVyIGVsZW1lbnQsIGlmIHNvbWV0aGluZyBpbiBob21lIGlzIHN0aWxsIGZldGNoaW5nLCB3ZSBkb250IHNob3cgdGhlIGZvb3RlciBpbWFnZSB0byBwcmV2ZW50IHBvcGluXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaG9tZVN0aWxsTG9hZGluZyA9XG4gICAgICAgICAgICBmZXRjaGluZyB8fCBmZXRjaGluZ090cENvbmZpZ3VyYXRpb25QcmUgfHwgZmV0Y2hpbmdDYW1wYWlnbnMgfHwgZmV0Y2hpbmdUcmFuc2FjdGlvbnM7XG4gICAgICAgIGlmICghcmVmLmN1cnJlbnQgfHwgaG9tZVN0aWxsTG9hZGluZykgcmV0dXJuO1xuICAgICAgICBjb25zdCB0cmFtYURlc2t0b3AgPSBUcmFtYURlc2t0b3Auc2xpY2UoT05FKTtcbiAgICAgICAgY29uc3QgdHJhbWFNb2JpbGUgPSBUcmFtYU1vYmlsZS5zbGljZShPTkUpO1xuICAgICAgICByZWYuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZm9vdGVyLWJhY2tncm91bmQtaW1hZ2VcIiwgYHVybCgnJHt0cmFtYURlc2t0b3B9JylgKTtcbiAgICAgICAgcmVmLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWZvb3Rlci1iYWNrZ3JvdW5kLW1vdmlsLWltYWdlXCIsIGB1cmwoJyR7dHJhbWFNb2JpbGV9JylgKTtcbiAgICB9LCBbZmV0Y2hpbmcsIGZldGNoaW5nQ2FtcGFpZ25zLCBmZXRjaGluZ090cENvbmZpZ3VyYXRpb25QcmUsIGZldGNoaW5nVHJhbnNhY3Rpb25zLCByZWZdKTtcblxuICAgIGNvbnN0IGVsZW1lbnRzRm9vdGVyID0gaXRlbXMubWFwKCh7IGlkLCBsaW5rLCBpY29uLCB0ZXh0LCBhY3RpdmUgfSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGljb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJtZW51XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVNZW51QWN0aXZlPXtoYW5kbGVNZW51QWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17dGV4dCB8fCBcInNwYS5mb290ZXIubW9kb1wifVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXNlIFwicXJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNNb2JpbGUgPyA8UVJCdXR0b24ga2V5PXtpZH0gZG9TY2FuPXtkb1NjYW59IGlkPXtpZH0gdGV4dD17dGV4dH0gLz4gOiBudWxsO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TGlua0VsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9e0Jvb2xlYW4oYWN0aXZlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0ZXh0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgICBuYW1lPXtOQU1FX0JBU0VJTlRFUk5BTF9DT05UQUlORVJGT09URVJ9XG4gICAgICAgICAgICB0YWc9XCJmb290ZXJcIlxuICAgICAgICAgICAgdHlwZT17VFlQRV9CQVNFSU5URVJOQUxfQ09OVEFJTkVSRk9PVEVSfT5cbiAgICAgICAgICAgIHsvKiBwcmV2ZW50cyBxciBzY2FuIGJ1dHRvbiBmcm9tIHBvcHBpbmcgaW4gb24gZmlyc3QgbG9hZCAqL31cbiAgICAgICAgICAgIHshaXNVbmtub3duICYmIChcbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG5hdj57ZWxlbWVudHNGb290ZXJ9PC9uYXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Db21wb25lbnQ+XG4gICAgKTtcbn1cblxudHlwZSBNZW51QnV0dG9uUHJvcHMgPSB7XG4gICAgaGFuZGxlTWVudUFjdGl2ZTogKCkgPT4gdm9pZDtcbiAgICB0ZXh0OiBzdHJpbmcgfCBudW1iZXI7XG59O1xuXG5mdW5jdGlvbiBNZW51QnV0dG9uKHsgaGFuZGxlTWVudUFjdGl2ZSwgdGV4dCB9OiBNZW51QnV0dG9uUHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e1J1bGVzLm1lbnV9XG4gICAgICAgICAgICBraW5kPVwicGxhaW5cIlxuICAgICAgICAgICAgbGFiZWw9e3sgdXVpZDogdGV4dCB9fVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTWVudUFjdGl2ZX0+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwibWVudVwiIHNpemU9XCJzbWFsbFwiIHN0cm9rZT1cImdyYXktbGlnaHRcIiAvPlxuICAgICAgICAgICAgPFRleHQgdGFnPVwic3BhblwiIHV1aWQ9e3RleHR9IC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICk7XG59XG5cbnR5cGUgUVJCdXR0b25Qcm9wcyA9IHtcbiAgICBkb1NjYW46ICgpID0+IFByb21pc2U8dm9pZD47XG4gICAgdGV4dDogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIGlkOiBzdHJpbmc7XG59O1xuXG5mdW5jdGlvbiBRUkJ1dHRvbih7IGRvU2NhbiwgdGV4dCwgaWQgfTogUVJCdXR0b25Qcm9wcykge1xuICAgIGNvbnN0IGlzUGVybWlzc2lvbiA9IHVzZVBlcm1pc3Npb25GZWF0dXJlKGlkKTtcbiAgICBjb25zdCBpc0F2YWlsYWJsZSA9IHVzZUF2YWlsYWJsZUZlYXR1cmUoaWQpO1xuICAgIGNvbnN0IHsgc2hvd0Vycm9yVG9hc3QgfSA9IHVzZVNob3dUb2FzdCgpO1xuICAgIGNvbnN0IHsgdGV4dEdldCB9ID0gdXNlVGV4dCgpO1xuXG4gICAgY29uc3QgdGV4dFJlcGxhY2UgPSB0ZXh0R2V0KHtcbiAgICAgICAgdXVpZDogU3RyaW5nKHRleHQpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpc0F2YWlsYWJsZSAmJiBpc1Blcm1pc3Npb24pIHJldHVybiBkb1NjYW4oKTtcbiAgICAgICAgaWYgKCFpc0F2YWlsYWJsZSkge1xuICAgICAgICAgICAgc2hvd0Vycm9yVG9hc3QoXCJzcGEuZmVhdHVyZS5lcnJvci5hdmFpbGFibGVcIiwgdGV4dFJlcGxhY2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNQZXJtaXNzaW9uKSB7XG4gICAgICAgICAgICBzaG93RXJyb3JUb2FzdChcInNwYS5mZWF0dXJlLmVycm9yLnBlcm1pc3Npb25cIiwgdGV4dFJlcGxhY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgYXJpYUxhYmVsPXt7IHV1aWQ6IFwic3BhLmExMXkuYnV0dG9ucy5xclwiIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e1J1bGVzLnByaW5jaXBhbH1cbiAgICAgICAgICAgIGtpbmQ9XCJwbGFpblwiXG4gICAgICAgICAgICBsYWJlbD17eyB1dWlkOiBcInNwYS5hMTF5LmJ1dHRvbnMucXJcIiB9fVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgPEljb24gbmFtZT1cInFyXCIgc2l6ZT1cInNtYWxsXCIgc3Ryb2tlPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgPEltYWdlIGFsdD1cIk1vZG9cIiB1dWlkPVwibG9nb01vZG9CYWRnZVwiIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICk7XG59XG5cbnR5cGUgTGlua1Byb3BzID0ge1xuICAgIGxpbms6IHN0cmluZyB8IHsgcGF0aG5hbWU6IHN0cmluZzsgc2VhcmNoOiBzdHJpbmc7IGhhc2g6IHN0cmluZyB9O1xuICAgIGlzQWN0aXZlOiBib29sZWFuO1xuICAgIGljb246IE5hbWU7XG4gICAgdGV4dDogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIGlkOiBzdHJpbmc7XG59O1xuXG5mdW5jdGlvbiBMaW5rRWxlbWVudCh7IGxpbmssIGlzQWN0aXZlLCBpY29uLCB0ZXh0LCBpZCB9OiBMaW5rUHJvcHMpIHtcbiAgICBjb25zdCBpc1Blcm1pc3Npb24gPSB1c2VQZXJtaXNzaW9uRmVhdHVyZShpZCk7XG4gICAgY29uc3QgaXNBdmFpbGFibGUgPSB1c2VBdmFpbGFibGVGZWF0dXJlKGlkKTtcbiAgICBjb25zdCB7IHNob3dFcnJvclRvYXN0IH0gPSB1c2VTaG93VG9hc3QoKTtcbiAgICBjb25zdCB7IHRleHRHZXQgfSA9IHVzZVRleHQoKTtcbiAgICBjb25zdCB0ZXh0UmVwbGFjZSA9IHRleHRHZXQoe1xuICAgICAgICB1dWlkOiBTdHJpbmcodGV4dCksXG4gICAgfSk7XG5cbiAgICBjb25zdCBzdHJva2VDb2xvcjogQ29sb3IgPSBpc0FjdGl2ZSA/IFwicHJpbWFyeVwiIDogXCJncmF5LWxpZ2h0XCI7XG5cbiAgICBjb25zdCBhY3RpdmVDbGFzcyA9IGdldENsYXNzTmFtZShpc0FjdGl2ZSAmJiBSdWxlcy5hY3RpdmUpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpZCA9PT0gXCJob21lXCIpIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoIWlzQXZhaWxhYmxlKSB7XG4gICAgICAgICAgICBzaG93RXJyb3JUb2FzdChcInNwYS5mZWF0dXJlLmVycm9yLmF2YWlsYWJsZVwiLCB0ZXh0UmVwbGFjZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1Blcm1pc3Npb24pIHtcbiAgICAgICAgICAgIHNob3dFcnJvclRvYXN0KFwic3BhLmZlYXR1cmUuZXJyb3IucGVybWlzc2lvblwiLCB0ZXh0UmVwbGFjZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzUGVybWlzc2lvbjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGtleT17U3RyaW5nKGxpbmspfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVDbGFzc31cbiAgICAgICAgICAgIHByZXZlbnROYXZpZ2F0ZUNhbGxiYWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgIHRvPXtsaW5rfT5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9e2ljb259IHNpemU9XCJzbWFsbFwiIHN0cm9rZT17c3Ryb2tlQ29sb3J9IC8+XG4gICAgICAgICAgICA8VGV4dCB0YWc9XCJzcGFuXCIgdXVpZD17dGV4dH0gLz5cbiAgICAgICAgICAgIHtpc0FjdGl2ZSAmJiA8c3BhbiBjbGFzc05hbWU9e1J1bGVzLnNwYW5BY3RpdmV9IC8+fVxuICAgICAgICA8L0xpbms+XG4gICAgKTtcbn1cblxuQmFzZUludGVybmFsQ29udGFpbmVyRm9vdGVyLmRlZmF1bHRQcm9wcyA9IERFRl9CQVNFSU5URVJOQUxfQ09OVEFJTkVSRk9PVEVSO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIk5BTUVfQkFTRUlOVEVSTkFMX0NPTlRBSU5FUlwiOlwiQmFzZUludGVybmFsQ29udGFpbmVyXCIsXCJUWVBFX0JBU0VJTlRFUk5BTF9DT05UQUlORVJcIjpcIkNvbnRhaW5lclwiLFwiTkFNRV9CQVNFSU5URVJOQUxfQ09OVEFJTkVSRk9PVEVSXCI6XCJCYXNlSW50ZXJuYWxDb250YWluZXJGb290ZXJcIixcIlRZUEVfQkFTRUlOVEVSTkFMX0NPTlRBSU5FUkZPT1RFUlwiOlwiU2VjdGlvblwifTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTkFNRV9CQVNFSU5URVJOQUxfQ09OVEFJTkVSXCI6XCJCYXNlSW50ZXJuYWxDb250YWluZXJcIixcIlRZUEVfQkFTRUlOVEVSTkFMX0NPTlRBSU5FUlwiOlwiQ29udGFpbmVyXCIsXCJOQU1FX0JBU0VJTlRFUk5BTF9DT05UQUlORVJGT09URVJcIjpcIkJhc2VJbnRlcm5hbENvbnRhaW5lckZvb3RlclwiLFwiVFlQRV9CQVNFSU5URVJOQUxfQ09OVEFJTkVSRk9PVEVSXCI6XCJTZWN0aW9uXCIsXCJOQU1FX1RIRU1FUExBVEZPUk1cIjpcIlRoZW1lUGxhdGZvcm1cIixcIlRZUEVfVEhFTUVQTEFURk9STVwiOlwiQnVuZGxlXCIsXCJOQU1FX0NPTlNVTUVSX1RIRU1FUExBVEZPUk1cIjpcIlRoZW1lUGxhdGZvcm1Db25zdW1lclwiLFwiVFlQRV9DT05TVU1FUl9USEVNRVBMQVRGT1JNXCI6XCJFbGVtZW50XCIsXCJOQU1FX1BST1ZJREVSX1RIRU1FUExBVEZPUk1cIjpcIlRoZW1lUGxhdGZvcm1Qcm92aWRlclwiLFwiVFlQRV9QUk9WSURFUl9USEVNRVBMQVRGT1JNXCI6XCJQcm92aWRlclwiLFwiTkFNRV9JTUFHRVwiOlwiSW1hZ2VcIixcIlRZUEVfSU1BR0VcIjpcIkVsZW1lbnRcIixcIk5BTUVfVEVYVFwiOlwiVGV4dFwiLFwiVFlQRV9URVhUXCI6XCJFbGVtZW50XCIsXCJOQU1FX0xJTktcIjpcIkxpbmtcIixcIlRZUEVfTElOS1wiOlwiRWxlbWVudFwiLFwiYWN0aXZlXCI6XCJfcnVsZXNfYWN0aXZlX18zOFQ4cVwiLFwic3BhbkFjdGl2ZVwiOlwiX3J1bGVzX3NwYW5BY3RpdmVfXzJZODNoXCIsXCJwcmluY2lwYWxcIjpcIl9ydWxlc19wcmluY2lwYWxfXzJsd0RaXCIsXCJtZW51XCI6XCJfcnVsZXNfbWVudV9fMlFJXzhcIn07Il0sInNvdXJjZVJvb3QiOiIifQ==
//# sourceMappingURL=7.61545709.chunk.js.map
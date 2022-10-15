"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[114],{9896:function(e,t,l){l.r(t);var a=l(2791),n=l(2981),r=l(2138),o=function(e,t){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(l[a[n]]=e[a[n]])}return l},c=(0,a.memo)((function(e){var t,l=e.kcContext,c=e.i18n,i=e.doFetchDefaultThemeResources,s=void 0===i||i,p=e.Template,m=void 0===p?n.Z:p,u=o(e,["kcContext","i18n","doFetchDefaultThemeResources","Template"]),d=l.url,E=l.isAppInitiatedAction,g=l.totp,k=l.mode,C=l.messagesPerField,y=(0,r.R)().cx,b=c.msg,v=c.msgStr,T={HmacSHA1:"SHA1",HmacSHA256:"SHA256",HmacSHA512:"SHA512"};return a.createElement(m,Object.assign({},Object.assign({kcContext:l,i18n:c,doFetchDefaultThemeResources:s},u),{headerNode:b("loginTotpTitle"),formNode:a.createElement(a.Fragment,null,a.createElement("ol",{id:"kc-totp-settings"},a.createElement("li",null,a.createElement("p",null,b("loginTotpStep1")),a.createElement("ul",{id:"kc-totp-supported-apps"},g.policy.supportedApplications.map((function(e){return a.createElement("li",null,e)})))),k&&"manual"==k?a.createElement(a.Fragment,null,a.createElement("li",null,a.createElement("p",null,b("loginTotpManualStep2")),a.createElement("p",null,a.createElement("span",{id:"kc-totp-secret-key"},g.totpSecretEncoded)),a.createElement("p",null,a.createElement("a",{href:g.qrUrl,id:"mode-barcode"},b("loginTotpScanBarcode")))),a.createElement("li",null,a.createElement("p",null,b("loginTotpManualStep3")),a.createElement("p",null,a.createElement("ul",null,a.createElement("li",{id:"kc-totp-type"},b("loginTotpType"),": ",b("loginTotp.".concat(g.policy.type))),a.createElement("li",{id:"kc-totp-algorithm"},b("loginTotpAlgorithm"),": ",null!==(t=null===T||void 0===T?void 0:T[g.policy.algorithm])&&void 0!==t?t:g.policy.algorithm),a.createElement("li",{id:"kc-totp-digits"},b("loginTotpDigits"),": ",g.policy.digits),"totp"===g.policy.type?a.createElement("li",{id:"kc-totp-period"},b("loginTotpInterval"),": ",g.policy.period):a.createElement("li",{id:"kc-totp-counter"},b("loginTotpCounter"),": ",g.policy.initialCounter))))):a.createElement("li",null,a.createElement("p",null,b("loginTotpStep2")),a.createElement("img",{id:"kc-totp-secret-qr-code",src:"data:image/png;base64, ".concat(g.totpSecretQrCode),alt:"Figure: Barcode"}),a.createElement("br",null),a.createElement("p",null,a.createElement("a",{href:g.manualUrl,id:"mode-manual"},b("loginTotpUnableToScan")))),a.createElement("li",null,a.createElement("p",null,b("loginTotpStep3")),a.createElement("p",null,b("loginTotpStep3DeviceName")))),a.createElement("form",{action:d.loginAction,className:y(u.kcFormClass),id:"kc-totp-settings-form",method:"post"},a.createElement("div",{className:y(u.kcFormGroupClass)},a.createElement("div",{className:y(u.kcInputWrapperClass)},a.createElement("label",{htmlFor:"totp",className:y(u.kcLabelClass)},b("authenticatorCode"))," ",a.createElement("span",{className:"required"},"*")),a.createElement("div",{className:y(u.kcInputWrapperClass)},a.createElement("input",{type:"text",id:"totp",name:"totp",autoComplete:"off",className:y(u.kcInputClass),"aria-invalid":C.existsError("totp")}),C.existsError("totp")&&a.createElement("span",{id:"input-error-otp-code",className:y(u.kcInputErrorMessageClass),"aria-live":"polite"},C.get("totp"))),a.createElement("input",{type:"hidden",id:"totpSecret",name:"totpSecret",value:g.totpSecret}),k&&a.createElement("input",{type:"hidden",id:"mode",value:k})),a.createElement("div",{className:y(u.kcFormGroupClass)},a.createElement("div",{className:y(u.kcInputWrapperClass)},a.createElement("label",{htmlFor:"userLabel",className:y(u.kcLabelClass)},b("loginTotpDeviceName"))," ",g.otpCredentials.length>=1&&a.createElement("span",{className:"required"},"*")),a.createElement("div",{className:y(u.kcInputWrapperClass)},a.createElement("input",{type:"text",id:"userLabel",name:"userLabel",autoComplete:"off",className:y(u.kcInputClass),"aria-invalid":C.existsError("userLabel")}),C.existsError("userLabel")&&a.createElement("span",{id:"input-error-otp-label",className:y(u.kcInputErrorMessageClass),"aria-live":"polite"},C.get("userLabel")))),E?a.createElement(a.Fragment,null,a.createElement("input",{type:"submit",className:y(u.kcButtonClass,u.kcButtonPrimaryClass,u.kcButtonLargeClass),id:"saveTOTPBtn",value:v("doSubmit")}),a.createElement("button",{type:"submit",className:y(u.kcButtonClass,u.kcButtonDefaultClass,u.kcButtonLargeClass,u.kcButtonLargeClass),id:"cancelTOTPBtn",name:"cancel-aia",value:"true"},"$",b("doCancel"))):a.createElement("input",{type:"submit",className:y(u.kcButtonClass,u.kcButtonPrimaryClass,u.kcButtonLargeClass),id:"saveTOTPBtn",value:v("doSubmit")})))}))}));t.default=c}}]);
//# sourceMappingURL=114.e150182e.chunk.js.map
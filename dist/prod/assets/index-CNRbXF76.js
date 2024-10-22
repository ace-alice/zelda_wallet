var t=Object.defineProperty,e=Object.defineProperties,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(e,i,n)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n,a=(t,e,i)=>new Promise(((n,o)=>{var r=t=>{try{a(i.next(t))}catch(e){o(e)}},s=t=>{try{a(i.throw(t))}catch(e){o(e)}},a=t=>t.done?n(t.value):Promise.resolve(t.value).then(r,s);a((i=i.apply(t,e)).next())}));import{s as c,u as l,_ as h}from"./index-BPJ-OjF-.js";var d=function(){return d=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},d.apply(this,arguments)};function u(t){return t.endsWith("-v2")?2:1}"function"==typeof SuppressedError&&SuppressedError;var f=function(){function t(t,e,i,n){var o=this;this.iframe=null,this.iframeId=null,this.sessionId="",this.$container=null,this.initialized=!1,this.onMessage=function(t){o.onSdkMessage(t)},this.baseUrl=t||this.getCurrentBaseUrl("https://api.sumsub.com",e.accessToken),this.config=e,this.config.packageVersion=this.getVersion(),this.callbacks=i,this.options=n}return t.prototype.getVersion=function(){return"2.3.4"},t.prototype.getCurrentBaseUrl=function(t,e){var i=["_act-sbx-jwt-","_act-jwt-"].find((function(t){return e.startsWith(t)}));if(i)for(var n=0,o=e.replace(i,"").replace("-v2","").split(".").map((function(t){try{return atob(t)}catch(e){return t}})).map((function(t){try{return JSON.parse(t)}catch(e){return t}}));n<o.length;n++){var r=o[n];if(null==r?void 0:r.url)return r.url}return t},t.prototype.getIframeId=function(){if(2===this.config.version)try{return btoa(this.config.accessToken)}catch(t){return this.config.accessToken}return String(Math.floor(1e8*Math.random()))},t.prototype.launch=function(t){this.options.addViewportTag&&this.addViewportTag(),this.iframe=this.createIframe(t),this.sessionId="",this.iframeId="id_"+this.getIframeId(),this.iframe&&this.config&&(this.registerEventListener(),this.iframe.src=this.getIframeSrc())},t.prototype.addViewportTag=function(){var t=document.getElementsByName("viewport");if(!t||0===t.length){var e=document.createElement("meta");e.setAttribute("name","viewport"),e.setAttribute("content","width=device-width,user-scalable=yes"),document.head.appendChild(e)}},t.prototype.createIframe=function(t){var e="string"==typeof t?document.querySelector(t):t;if(!e)return null;this.$container=e;var i=document.createElement("iframe");for(i.width="100%",i.scrolling="no",i.allow="camera; microphone; geolocation; clipboard-write",i.setAttribute("frameborder","0");e.firstChild;)e.removeChild(e.firstChild);return e.appendChild(i),i},t.prototype.getIframeSrc=function(){var t="?_="+this.iframeId,e=2===this.config.version?"/websdk":"/idensic",i=this.baseUrl+e+"/websdk.html";return 2===this.config.version&&this.config.theme&&(t+="&theme="+this.config.theme),2===this.config.version&&this.config.customizationName&&(t+="&customizationName="+encodeURIComponent(this.config.customizationName)),i+t},t.prototype.registerEventListener=function(){window.addEventListener("message",this.onMessage)},t.prototype.onSdkMessage=function(t){var e;if(this.baseUrl===t.origin){var i=t.data;if(i.method&&~i.method.indexOf("idCheck")&&(!this.sessionId||this.sessionId===i.sessionId)&&(null===(e=this.iframe)||void 0===e?void 0:e.contentWindow)){if("idCheck.onReady"==i.method&&i.frameId===this.iframeId){this.sessionId=i.sessionId;var n={options:{adaptIframeHeight:this.options.adaptIframeHeight}};this.iframe.contentWindow.postMessage(d(d({method:"idCheck.init"},this.config),n),"*")}if("idCheck.onInitialized"==i.method&&(this.initialized=!0),"idCheck.onResize"==i.method&&this.options.adaptIframeHeight&&(this.iframe.style.height=i.height+"px"),"idCheck.scrollTo"==i.method&&this.options.adaptIframeHeight)this.scrollTo(i.top);else{var o=i.method;delete i.method,delete i.frameId,delete i.sessionId,"idCheck.onError"===o&&"invalid-token"===i.code?this.callExpirationHandler():"idCheck.onError"===o&&"function"==typeof this.callbacks.onError?this.callbacks.onError(i):"function"==typeof this.callbacks.onMessage&&this.callbacks.onMessage(o,i)}}}},t.prototype.callExpirationHandler=function(){var t=this,e=this.callbacks.expirationHandler;e.legacy?e.handler((function(e){return t.updateAccessTokenOrReinitialize(e)})):e.handler().then((function(e){return t.updateAccessTokenOrReinitialize(e)}),(function(e){null!=e||(e="Failed to update access token"),e.message&&(e=e.message),"string"!=typeof e&&(e=String(e)),t.updateAccessToken(null,e)}))},t.prototype.updateAccessTokenOrReinitialize=function(t){var e=u(t);if(this.iframe&&!this.initialized&&this.config.version!=e)return this.sessionId="",this.config.accessToken=t,this.config.version=e,this.baseUrl=this.getCurrentBaseUrl(this.baseUrl,t),this.iframeId="id_"+this.getIframeId(),void(this.iframe.src=this.getIframeSrc());this.updateAccessToken(t)},t.prototype.scrollTo=function(t){for(var e,i,n=null===(e=this.iframe)||void 0===e?void 0:e.parentElement;0===(null==n?void 0:n.scrollTop)&&"BODY"!==(null==n?void 0:n.tagName);)n=null==n?void 0:n.parentElement;if(0===(null==n?void 0:n.scrollTop)&&"BODY"===(null==n?void 0:n.tagName)){var o=(null===(i=this.iframe)||void 0===i?void 0:i.getBoundingClientRect().top)||0;window.scrollTo({top:o+t,behavior:"smooth"})}else null==n||n.scrollTo({top:t,behavior:"smooth"})},t.prototype.updateAccessToken=function(t,e){var i,n;null===(n=null===(i=this.iframe)||void 0===i?void 0:i.contentWindow)||void 0===n||n.postMessage({method:"idCheck.updateAccessToken",accessToken:t,error:e},"*")},t.prototype.destroy=function(){for(window.removeEventListener("message",this.onMessage);this.$container&&this.$container.firstChild;)this.$container.removeChild(this.$container.firstChild);this.$container=null},t.prototype.navigateBack=function(){var t,e;null===(e=null===(t=this.iframe)||void 0===t?void 0:t.contentWindow)||void 0===e||e.postMessage({method:"idCheck.callNavigationBack"},"*")},t}(),p=function(){function t(t,e){if(this.config=null,this.reusableConfig=null,this.eventHandlers={},this.anyEventHandler=null,this.options={adaptIframeHeight:!0,addViewportTag:!0},"string"!=typeof t)throw new Error("Access token must be a string");if("function"!=typeof e)throw new Error("updateAccessToken callback is required");this.accessToken=t,this.updateAccessToken=e}return t.prototype.onTestEnv=function(){return this},t.prototype.withBaseUrl=function(t){return this.baseUrl=t,this},t.prototype.withConf=function(t){return this.config=t,this},t.prototype.withReusableKycConf=function(t){return this.reusableConfig=t,this},t.prototype.withOptions=function(t){return t.hasOwnProperty("adaptIframeHeight")&&(this.options.adaptIframeHeight=t.adaptIframeHeight),t.hasOwnProperty("addViewportTag")&&(this.options.addViewportTag=t.addViewportTag),this},t.prototype.on=function(t,e){return this.eventHandlers[t]=e,this},t.prototype.onMessage=function(t){return this.anyEventHandler=t,this},t.prototype.onNavigationUiControlsStateChanged=function(t){return this.eventHandlers["idCheck.onNavigationUiControlsStateChanged"]=t,this},t.prototype.build=function(){var t,e,i,n,o,r,s,a,c,l,h,d,p=this,g=u(this.accessToken);return new f(this.baseUrl,{version:g,theme:null===(t=this.config)||void 0===t?void 0:t.theme,customizationName:null===(e=this.config)||void 0===e?void 0:e.customizationName,accessToken:this.accessToken,lang:null===(i=this.config)||void 0===i?void 0:i.lang,email:null===(n=this.config)||void 0===n?void 0:n.email,phone:null===(o=this.config)||void 0===o?void 0:o.phone,country:null===(r=this.config)||void 0===r?void 0:r.country,uiConf:null===(s=this.config)||void 0===s?void 0:s.uiConf,i18n:null===(a=this.config)||void 0===a?void 0:a.i18n,documentsByCountries:null===(c=this.config)||void 0===c?void 0:c.documentsByCountries,documentDefinitions:null===(l=this.config)||void 0===l?void 0:l.documentDefinitions,autoSelectDocumentDefinitions:null===(h=this.config)||void 0===h?void 0:h.autoSelectDocumentDefinitions,controlledNavigationBack:null===(d=this.config)||void 0===d?void 0:d.controlledNavigationBack,reusableConfig:this.reusableConfig},{expirationHandler:{legacy:!1,handler:this.updateAccessToken},onMessage:function(t,e){var i,n=p.eventHandlers[t];n?n(e):null===(i=p.anyEventHandler)||void 0===i||i.call(p,t,e)}},this.options)},t}(),g=(function(){function t(t,e){this.debugEnabled=!1,this.options={adaptIframeHeight:!0,addViewportTag:!0},this.config=null,this.reusableConfig=null,this.accessToken=null,this.expirationHandler=null,this.baseUrl=t,this.flowName=e}t.prototype.withAccessToken=function(t,e){if(this.accessToken=t,!e||"function"!=typeof e)throw new Error('Invalid parameter, "expirationHandler" must be a function');return this.expirationHandler=e,this},t.prototype.debug=function(t){return this.debugEnabled=t,this},t.prototype.withOptions=function(t){return t.hasOwnProperty("adaptIframeHeight")&&(this.options.adaptIframeHeight=t.adaptIframeHeight),t.hasOwnProperty("addViewportTag")&&(this.options.addViewportTag=t.addViewportTag),this},t.prototype.withConf=function(t){return this.config=t,this},t.prototype.withReusableKycConf=function(t){return this.reusableConfig=t,this},t.prototype.build=function(){var t,e,i,n,o,r,s,a,c,l,h,d,p;if(!this.accessToken||!this.expirationHandler)throw new Error("Configure access token end the expiration handler before");var g=u(this.accessToken);return new f(this.baseUrl,{version:g,theme:null===(t=this.config)||void 0===t?void 0:t.theme,customizationName:null===(e=this.config)||void 0===e?void 0:e.customizationName,accessToken:this.accessToken,flowName:this.flowName,lang:null===(i=this.config)||void 0===i?void 0:i.lang,email:null===(n=this.config)||void 0===n?void 0:n.email,phone:null===(o=this.config)||void 0===o?void 0:o.phone,country:null===(r=this.config)||void 0===r?void 0:r.country,uiConf:null===(s=this.config)||void 0===s?void 0:s.uiConf,i18n:null===(a=this.config)||void 0===a?void 0:a.i18n,documentsByCountries:null===(c=this.config)||void 0===c?void 0:c.documentsByCountries,documentDefinitions:null===(l=this.config)||void 0===l?void 0:l.documentDefinitions,autoSelectDocumentDefinitions:null===(h=this.config)||void 0===h?void 0:h.autoSelectDocumentDefinitions,reusableConfig:this.reusableConfig},{expirationHandler:{legacy:!0,handler:this.expirationHandler},onMessage:null===(d=this.config)||void 0===d?void 0:d.onMessage,onError:null===(p=this.config)||void 0===p?void 0:p.onError},{adaptIframeHeight:this.options.adaptIframeHeight,addViewportTag:this.options.addViewportTag,debug:this.debugEnabled})}}(),function(t,e){return new p(t,e)});const m={id:"sumsub-websdk-container"},v=Vue.defineComponent({name:"KycSumsub"});const y=h(Vue.defineComponent(e(((t,e)=>{for(var i in e||(e={}))o.call(e,i)&&s(t,i,e[i]);if(n)for(var i of n(e))r.call(e,i)&&s(t,i,e[i]);return t})({},v),i({setup(t){const{initCounter:e}=l(),i=()=>a(this,null,(function*(){try{return new Promise(((t,e)=>{c({url:"/naticpay/doKyc",method:"post"}).then((i=>{var n;"0000"===(null==(n=i.data.head)?void 0:n.code)?t(i.data.body.token):e(new Error("error------"))}))}))}catch(t){throw new Error("error------")}})),n=(t,n,o)=>a(this,null,(function*(){const o=yield i();g(o,(()=>a(this,null,(function*(){return yield i()})))).withConf({lang:"en",email:t,phone:n,theme:"light"}).withOptions({addViewportTag:!1,adaptIframeHeight:!0}).on("idCheck.onStepCompleted",(t=>{e()})).on("idCheck.onError",(t=>{})).build().launch("#sumsub-websdk-container")}));return Vue.onMounted((()=>{n()})),(t,e)=>(Vue.openBlock(),Vue.createElementBlock("div",m))}}))),[["__scopeId","data-v-e3baba23"]]);export{y as default};
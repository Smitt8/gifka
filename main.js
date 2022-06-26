(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e){var r=this,o=e.url,i=e.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"loadTrending",(function(){return fetch("".concat(r._url,"/trending?api_key=").concat(r._token,"&limit=25"),{headers:r._headers}).then((function(e){return r._checkResult(e)}))})),t(this,"searchGifs",(function(e){return fetch("".concat(r._url,"/search?api_key=").concat(r._token,"&q=").concat(e,"&limit=25"),{headers:r._headers}).then((function(e){return r._checkResult(e)}))})),t(this,"getRandom",(function(){return fetch("".concat(r._url,"/random?api_key=").concat(r._token),{headers:r._headers}).then((function(e){return r._checkResult(e)}))})),this._url="https://".concat(o,"/v1/gifs"),this._token=i,this._headers={"Content-type":"application/json"}}var r,o;return r=n,(o=[{key:"_checkResult",value:function(e){return e.ok?e.json():Promise.reject("Ошибка --\x3e ".concat(e.statusText))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=c(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},a.apply(this,arguments)}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function u(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return l(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(h,e);var t,n,r,o,c=(r=h,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return u(this,e)});function h(e,t){var n,r,o,i,a=e.formSelector,s=e.inputSelector,u=e.resetSelector,f=e.activeResetClass,p=e.submitButtonSelector;return e.inactiveButtonClass,function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),i=function(){n._button.disabled=!n._form.checkValidity()},(o="buttonSubmitState")in(r=l(n=c.call(this,{formSelector:a,inputSelector:s,resetSelector:u},t)))?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,n._activeResetClass=f,n._submitButtonSelector=p,n._button=n._form.querySelector(n._submitButtonSelector),n}return t=h,(n=[{key:"_toggleReset",value:function(){this._reset.classList.toggle(this._activeResetClass,this._form.checkValidity())}},{key:"_resetForm",value:function(){a(f(h.prototype),"_resetForm",this).call(this),this._toggleReset()}},{key:"setEventsListeners",value:function(){var e=this;a(f(h.prototype),"setEventsListeners",this).call(this),this._form.addEventListener("input",(function(){e._toggleReset()}))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),h}(function(){function e(t,n){var r=t.formSelector,o=t.inputSelector,i=t.resetSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=document.querySelector(r),this._reset=this._form.querySelector(i),this._inputs=Array.from(this._form.querySelectorAll(o)),this._handleSubmit=n}var t,n;return t=e,(n=[{key:"_getInputsValues",value:function(){var e=this;return this._values={},this._inputs.forEach((function(t){e._values[t.name]=t.value})),this._values}},{key:"_resetForm",value:function(){this._form.reset()}},{key:"setEventsListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){e._handleSubmit(t,e._getInputsValues())})),this._reset.addEventListener("click",(function(){e._resetForm()}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}());function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"free",value:function(){for(;this._container.firstChild;)this._container.removeChild(this._container.firstChild)}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=t,this._templateSelector=n}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".animation-images__item").cloneNode(!0)}},{key:"generateItem",value:function(){return this._element=this._getTemplate(),this._itemImage=this._element.querySelector(".gif"),this._itemImage.src=this._link,this._element}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._tabSelector=document.querySelector(t),this._handleClick=n}var t,n;return t=e,(n=[{key:"_handlerClick",value:function(){this._handleClick(),this.select()}},{key:"select",value:function(){this._tabSelector.classList.add("tab-item_selected")}},{key:"drop",value:function(){this._tabSelector.classList.remove("tab-item_selected")}},{key:"setEventsListeners",value:function(){var e=this;this._tabSelector.addEventListener("click",(function(){e._handlerClick()}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),v={tabSelector:".tab_type_search",formSelector:".search",inputSelector:".search__input",resetSelector:".search__reset",activeResetClass:"search__reset_enabled",tabEnableClass:"tab_enabled",submitButtonSelector:".search__submit",inactiveButtonClass:"search__submit_disabled"};function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.tabSelector,r=t.tabEnableClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._tab=document.querySelector(n),this._tabEnableClass=r}var t,n;return t=e,(n=[{key:"open",value:function(){this._tab.classList.add(this._tabEnableClass)}},{key:"close",value:function(){this._tab.classList.remove(this._tabEnableClass)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),k=new n({url:"api.giphy.com",token:"Q0QCYBXGQAPMAZ0TQGE7d91ZammEhL08"}),S=new h(v,(function(e,t){e.preventDefault(),k.searchGifs(t["search-query"]).then((function(e){e.data.forEach((function(e){O.addItem(E("https://media1.giphy.com/media/".concat(e.id,"/giphy.gif")))}))})).catch((function(e){console.log(e)}))}));function E(e){return new _(e,"#template-item").generateItem()}var O=new b((function(e){O.addItem(E(e.link))}),".animation-images__list");S.setEventsListeners();var j=new d(".tab-item_random",(function(){O.free();for(var e=0;e<5;e++)k.getRandom().then((function(e){O.addItem(E("https://media1.giphy.com/media/".concat(e.data.id,"/giphy.gif")))})).catch((function(e){console.log(e)}));q(),R.close(),T.open()})),C=new d(".tab-item-search",I),P=new d(".tab-item-new",I),L=new d(".tab-item-trend",(function(){O.free(),q(),R.close(),T.open(),k.loadTrending().then((function(e){e.data.forEach((function(e){O.addItem(E("https://media1.giphy.com/media/".concat(e.id,"/giphy.gif")))}))})).catch((function(e){console.log(e)}))})),R=new w(v),T=new w({tabSelector:".tab_type_gifs",tabEnableClass:"tab_enabled"});function q(){document.querySelector(".tab-item_selected").classList.remove("tab-item_selected")}function I(){O.free(),q(),R.open(),T.open()}R.open(),T.open(),C.select(),j.setEventsListeners(),C.setEventsListeners(),P.setEventsListeners(),L.setEventsListeners();var B=document.getElementById("field-constant"),F=document.querySelector(".search__input");B.onmouseover=B.onmouseout=function(e){"mouseover"===e.type&&(F.classList.add("search__input_hover"),B.classList.add("field-constant_hover")),"mouseout"===e.type&&(S._resetForm(),F.classList.remove("search__input_hover"),B.classList.remove("field-constant_hover"))}})();
//# sourceMappingURL=main.js.map
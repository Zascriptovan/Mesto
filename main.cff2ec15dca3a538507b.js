!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=24)}([function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,r){t.exports=r(14)},function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},function(t,e){function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e,r){var n=r(20);function o(e,r,i){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=o=Reflect.get:t.exports=o=function(t,e,r){var o=n(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(r):i.value}},o(e,r,i||e)}t.exports=o},function(t,e,r){var n=r(21);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(t,e,r){var n=r(22),o=r(23);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e,r){var n=r(9);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},function(t,e,r){var n=r(16),o=r(10),i=r(11),a=r(17);t.exports=function(t){return n(t)||o(t)||i(t)||a()}},function(t,e,r){var n=r(18),o=r(10),i=r(11),a=r(19);t.exports=function(t){return n(t)||o(t)||i(t)||a()}},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function l(){}function p(){}function h(){}var d={};d[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(S([])));y&&y!==e&&r.call(y,o)&&(d=y);var m=h.prototype=l.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=m.constructor=h,h.constructor=p,p.displayName=c(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},b(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new g(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(m),c(m,a,"Generator"),m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){},function(t,e,r){var n=r(9);t.exports=function(t){if(Array.isArray(t))return n(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,r){var n=r(3);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=n(t)););return t}},function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},function(t,e){function r(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,r){"use strict";r.r(e);var n=r(2),o=r.n(n),i=r(4),a=r.n(i),c=(r(15),r(1)),u=r.n(c),s=r(0),f=r.n(s),l=function t(e,r){var n=this;u()(this,t),f()(this,"getResource",function(){var t=a()(o.a.mark((function t(e){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(n.base,"/").concat(e),{method:"GET",headers:{authorization:"".concat(n.token)}});case 2:if((r=t.sent).ok){t.next=5;break}throw new Error(r.status);case 5:return t.next=7,r.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),f()(this,"patchData",function(){var t=a()(o.a.mark((function t(e){var r,i,a=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:"",t.next=3,fetch("".concat(n.base,"/").concat(e),{method:"PATCH",headers:{authorization:"".concat(n.token),"Content-Type":"application/json"},body:r});case 3:if((i=t.sent).ok){t.next=6;break}throw new Error(i.status);case 6:return t.next=8,i.json();case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),f()(this,"getUserInfo",a()(o.a.mark((function t(){var e,r,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getResource("users/me");case 2:return e=t.sent,r=e.name,i=e.about,t.abrupt("return",{name:r,about:i});case 5:case"end":return t.stop()}}),t)})))),f()(this,"updateUserInfo",function(){var t=a()(o.a.mark((function t(e){var r,i,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.patchData("users/me",JSON.stringify(e));case 2:return r=t.sent,i=r.name,a=r.about,t.abrupt("return",{name:i,about:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),f()(this,"getCards",a()(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getResource("cards");case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),this.token=e,this.base="https://nomoreparties.co/".concat(r)},p=function t(e,r){var n=this;u()(this,t),f()(this,"like",(function(){n.like=!n.like,event.target.classList.toggle("place-card__like-icon_liked")})),f()(this,"removeEventListeners",(function(t){t.querySelector(".place-card__like-icon").removeEventListener("click",n.like),t.querySelector(".place-card__delete-icon").removeEventListener("click",n.delete)})),f()(this,"delete",(function(){if(event.target.matches(".place-card__delete-icon")){var t=event.target.closest(".place-card");n.removeEventListeners(t),t.remove(t)}})),f()(this,"createMarkup",(function(){var t=document.createElement("div"),e=document.createElement("div"),r=document.createElement("button"),o=document.createElement("div"),i=document.createElement("h3"),a=document.createElement("button");return t.classList.add("place-card"),e.classList.add("place-card__image"),e.setAttribute("style","background-image: url(".concat(n.link,")")),e.setAttribute("data-link","".concat(n.link)),e.addEventListener("click",n.popup.open),r.classList.add("place-card__delete-icon"),o.classList.add("place-card__description"),i.classList.add("place-card__name"),i.textContent=n.name,a.classList.add("place-card__like-icon"),a.addEventListener("click",n.like),r.addEventListener("click",n.delete),t.appendChild(e),e.appendChild(r),t.appendChild(o),o.appendChild(i),o.appendChild(a),n.markup=t,t})),this.name=e.name,this.link=e.link,this.isLike=!1,this.popup=r,this.markup=null},h=r(12),d=r.n(h),v=function t(e,r){var n=this;u()(this,t),f()(this,"addCard",(function(t){n.cards=[].concat(d()(n.cards),[t]),n.appendCard(t.createMarkup())})),f()(this,"appendCard",(function(t){n.targetElement.appendChild(t)})),f()(this,"render",(function(){n.cards.forEach((function(t){n.appendCard(t.createMarkup())}))})),this.cards=e,this.targetElement=r},y=r(13),m=r.n(y),b=function t(e){var r=this;u()(this,t),f()(this,"checkInputValidly",(function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=!0;t.setCustomValidity(" ");var n=t.validity;if(n.valueMissing&&(t.setCustomValidity("Это обязательное поле"),r=!1),(n.tooShort||n.tooLong)&&(t.setCustomValidity("Должно быть от 2 до 30 символов"),r=!1),t.validity.typeMismatch&&"url"==t.type&&(t.setCustomValidity("Здесь должна быть ссылка"),r=!1),!e){var o=t.parentNode.querySelector("#".concat(t.id,"-error"));o&&(o.textContent=t.validationMessage)}return r})),f()(this,"setSubmitButtonState",(function(t){var e=r.form.querySelector(".popup__button");t?(e.removeAttribute("disabled"),e.classList.add("popup__button_valid"),e.classList.remove("popup__button_invalid")):(e.setAttribute("disabled","disabled"),e.classList.remove("popup__button_valid"),e.classList.add("popup__button_invalid"))})),f()(this,"setEventListener",(function(){r.form.addEventListener("input",(function(t){var e=m()(t.currentTarget.elements).slice(0);r.checkInputValidly(t.target,!1),e.every(r.checkInputValidly)?r.setSubmitButtonState(!0):r.setSubmitButtonState(!1)}))})),this.form=e,this.inputs=Array.from(this.form.elements)},g=r(5),w=r.n(g),x=function(){function t(e){u()(this,t),this.open=this.open.bind(this),this.close=this.close.bind(this),this.popup=e,this.popup.querySelector(".popup__close").addEventListener("click",this.close)}return w()(t,[{key:"open",value:function(){this.popup.classList.add("popup_is-opened")}},{key:"close",value:function(){this.popup.classList.remove("popup_is-opened")}}]),t}(),_=r(6),k=r.n(_),S=r(7),L=r.n(S),E=r(8),j=r.n(E),O=r(3),C=r.n(O);function I(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=C()(t);if(e){var o=C()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return j()(this,r)}}var P=function(t){L()(r,t);var e=I(r);function r(t){return u()(this,r),e.call(this,t)}return w()(r,[{key:"open",value:function(t){t.target.classList.contains("place-card__image")&&(k()(C()(r.prototype),"open",this).call(this),this.popup.querySelector(".popup__image").src=t.target.dataset.link)}}]),r}(x);function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=C()(t);if(e){var o=C()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return j()(this,r)}}var R=function(t){L()(r,t);var e=q(r);function r(t){return u()(this,r),e.call(this,t)}return w()(r,[{key:"open",value:function(t){var e=t.name,n=t.job;k()(C()(r.prototype),"open",this).call(this),this.popup.querySelector("#nameProfile").value=e,this.popup.querySelector("#descriptionProfile").value=n}}]),r}(x),A=function t(e,r){var n=this;u()(this,t),f()(this,"setUserInfo",(function(t,e){n.name=t,n.job=e})),f()(this,"getUserInfo",(function(){return{name:n.name,job:n.job}})),f()(this,"updateUserInfo",(function(){var t=n.userInfoName,e=n.userInfoJob;t.textContent=n.name,e.textContent=n.job})),this.name="Jaques Causteau2",this.job="Sailor, Researcher",this.userInfoJob=r,this.userInfoName=e};a()(o.a.mark((function t(){var e,r,n,i,c,u,s,f,h,d,y,m,g,w,_,k,S,L,E,j;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=document.querySelector("#nameProfile"),r=document.querySelector("#descriptionProfile"),n=new l("a52cee62-1a4c-4ffb-bcca-6afcb9f95180","cohort12"),i=document.querySelector("#popupNewCard"),c=document.querySelector("#popupEditProfile"),u=document.querySelector("#popupIncreaseImadge"),s=new x(i),f=new R(c),h=new P(u),d=document.querySelector(".user-info__name"),y=document.querySelector(".user-info__job"),m=new A(d,y),w=[],n.getUserInfo().then((function(t){g=t,m.setUserInfo(g.name,g.about),m.updateUserInfo()})).catch((function(t){console.log(t),g={name:"unknown",info:"unknown"}})),n.getCards().then((function(t){t.forEach((function(t){var e=new p(t,h);console.dir(e),w.push(e)})),(_=new v(w,k)).render()})).catch((function(t){console.log(t),[]})),k=document.querySelector(".places-list"),document.querySelector(".user-info__button").addEventListener("click",s.open),document.querySelector(".user-info__button-edit").addEventListener("click",(function(){f.open(m.getUserInfo())})),S=new b(i.querySelector("form")),L=new b(c.querySelector("form")),S.setEventListener(),L.setEventListener(),E=c.querySelector("form"),j=i.querySelector("form"),E.addEventListener("submit",function(){var t=a()(o.a.mark((function t(i){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.preventDefault(),a=e.value,c=r.value,n.updateUserInfo({name:a,about:c}).then((function(t){m.setUserInfo(t.name,t.about),m.updateUserInfo(),f.close()})).catch((function(t){alert("Update Error ".concat(t))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),j.addEventListener("submit",(function(t){t.preventDefault();var e=j.querySelector("#nameCard"),r=j.querySelector("#imageCard"),n={name:e.value,link:r.value},o=new p(n,h);_.addCard(o),S.setSubmitButtonState(!1),e.value="",r.value="",s.close()}));case 22:case"end":return t.stop()}}),t)})))()}]);
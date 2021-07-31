module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=13)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return r}))},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat.app},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}n.d(e,"a",(function(){return o}))},,function(t,e){t.exports=flarum.core.compat["components/PermissionGrid"]},function(t,e){t.exports=flarum.core.compat["components/AdminNav"]},function(t,e){t.exports=flarum.core.compat["components/AdminLinkButton"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["utils/saveSettings"]},function(t,e){t.exports=flarum.core.compat["components/Alert"]},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(4),a=n.n(o),s=n(7),i=n.n(s),u=n(8),c=n.n(u),p=n(9),l=n.n(p),f=(n(5),n(1),n(2)),d=n(3),h=n.n(d),v=n(10),b=n.n(v),y=n(11),g=n.n(y),j=n(12),x=n.n(j);var O=function(t){Object(f.a)(n,t);var e;e=n;function n(){return t.apply(this,arguments)||this}var r=n.prototype;return r.init=function(){var t=this;this.loading=!1,this.fields=["src","url","autoinsert","lang"];var e=app.data.settings;this.settingsPrefix="jasper.chevereto",this.values={},this.fields.forEach((function(n){return t.values[n]=m.prop(e[t.addPrefix(n)])}))},r.view=function(){return[m("div",{className:"CheveretoPage"},[m("div",{className:"container"},[m("form",{onsubmit:this.onsubmit.bind(this)},[m("fieldset",{className:"CheveretoPage-Setting"},[m("legend",{},app.translator.trans("jasper-chevereto.admin.setting.title")),m("label",{},app.translator.trans("jasper-chevereto.admin.setting.src")),m("input",{className:"FormControl",value:this.values.src()||"",oninput:m.withAttr("value",this.values.src)}),m("label",{},app.translator.trans("jasper-chevereto.admin.setting.url")),m("input",{className:"FormControl",value:this.values.url()||"",oninput:m.withAttr("value",this.values.url)}),m("label",{},app.translator.trans("jasper-chevereto.admin.setting.auto-insert")),m("input",{className:"FormControl",value:this.values.autoinsert()||"",oninput:m.withAttr("value",this.values.autoinsert)}),m("label",{},app.translator.trans("jasper-chevereto.admin.setting.lang")),m("input",{className:"FormControl",value:this.values.lang()||"",oninput:m.withAttr("value",this.values.lang)})]),b.a.component({type:"submit",className:"Button Button--primary",children:app.translator.trans("jasper-chevereto.admin.buttons.save"),loading:this.loading,disabled:!this.changed()})])])])]},r.changed=function(){var t=this;return this.fields.some((function(e){return t.values[e]()!==app.data.settings[t.addPrefix(e)]}))},r.onsubmit=function(t){var e=this;if(t.preventDefault(),!this.loading){this.loading=!0,app.alerts.dismiss(this.successAlert);var n={};this.fields.forEach((function(t){return n[e.addPrefix(t)]=e.values[t]()})),g()(n).then((function(){app.alerts.show(e.successAlert=new x.a({type:"success",children:app.translator.trans("core.admin.basics.saved_message")}))})).catch((function(){})).then((function(){e.loading=!1,m.redraw()}))}},r.addPrefix=function(t){return this.settingsPrefix+"."+t},n}(h.a),P=function(){app.routes["jasper-chevereto"]={path:"/jasper/chevereto",component:O.component()},app.extensionSettings["jasper-chevereto"]=function(){return m.route(app.route("jasper-chevereto"))},Object(r.extend)(c.a.prototype,"items",(function(t){t.add("jasper-chevereto",l.a.component({href:app.route("jasper-chevereto"),icon:"fas fa-upload",children:"Chevereto",description:app.translator.trans("jasper-chevereto.admin.AdminNav.description")}))}))};a.a.initializers.add("jasper-chevereto",(function(t){P(),Object(r.extend)(i.a.prototype,"startItems",(function(e){e.add("chevereto",{icon:"fas fa-upload",label:t.translator.trans("jasper-chevereto.admin.permissions.upload"),permission:"jasper.chevereto.upload"})}))}))}]);
//# sourceMappingURL=admin.js.map
/*! For license information please see script.js.LICENSE.txt */
(()=>{"use strict";var e={733:(e,t,r)=>{r.r(t),r.d(t,{Properties:()=>o,VariableDescriptor:()=>n,bootstrapExtra:()=>J,findLayerBoundaries:()=>p,findLayersBoundaries:()=>u,getAllVariables:()=>s,getLayersMap:()=>l,initDoors:()=>$,initPropertiesTemplates:()=>V,initVariableActionLayer:()=>F});class o{constructor(e){this.properties=null!=e?e:[]}get(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.value));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const r=this.get(e);if(void 0!==r){if(typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const r=this.get(e);if(void 0===r)throw new Error('Property "'+e+'" is missing');if(typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}getType(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.type));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}}class n{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new o(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return!e||WA.player.tags.includes(e)}get isWritable(){const e=this.properties.getString("writableBy");return!e||WA.player.tags.includes(e)}}async function s(){const e=await WA.room.getTiledMap(),t=new Map;return i(e.layers,t),t}function i(e,t){for(const r of e)if("objectgroup"===r.type)for(const e of r.objects)"variable"===e.type&&t.set(e.name,new n(e));else"group"===r.type&&i(r.layers,t)}let a;async function l(){return void 0===a&&(a=async function(){return function(e){const t=new Map;return c(e.layers,"",t),t}(await WA.room.getTiledMap())}()),a}function c(e,t,r){for(const o of e)"group"===o.type?c(o.layers,t+o.name+"/",r):(o.name=t+o.name,r.set(o.name,o))}function p(e){let t=1/0,r=1/0,o=0,n=0;const s=e.data;if("string"==typeof s)throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<e.height;i++)for(let a=0;a<e.width;a++)0!==s[a+i*e.width]&&(t=Math.min(t,a),n=Math.max(n,a),r=Math.min(r,i),o=Math.max(o,i));return{top:r,left:t,right:n+1,bottom:o+1}}function u(e){let t=1/0,r=1/0,o=0,n=0;for(const s of e){const e=p(s);e.left<t&&(t=e.left),e.top<r&&(r=e.top),e.right>n&&(n=e.right),e.bottom>o&&(o=e.bottom)}return{top:r,left:t,right:n,bottom:o}}var g=Object.prototype.toString,f=Array.isArray||function(e){return"[object Array]"===g.call(e)};function h(e){return"function"==typeof e}function m(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function y(e,t){return null!=e&&"object"==typeof e&&t in e}var d=RegExp.prototype.test,b=/\S/;var v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},A=/\s*/,W=/\s+/,w=/\s*=/,S=/\s*\}/,C=/#|\^|\/|>|\{|&|=|!/;function L(e){this.string=e,this.tail=e,this.pos=0}function E(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function x(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}L.prototype.eos=function(){return""===this.tail},L.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},L.prototype.scanUntil=function(e){var t,r=this.tail.search(e);switch(r){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=t.length,t},E.prototype.push=function(e){return new E(e,this)},E.prototype.lookup=function(e){var t,r,o,n=this.cache;if(n.hasOwnProperty(e))t=n[e];else{for(var s,i,a,l=this,c=!1;l;){if(e.indexOf(".")>0)for(s=l.view,i=e.split("."),a=0;null!=s&&a<i.length;)a===i.length-1&&(c=y(s,i[a])||(r=s,o=i[a],null!=r&&"object"!=typeof r&&r.hasOwnProperty&&r.hasOwnProperty(o))),s=s[i[a++]];else s=l.view[e],c=y(l.view,e);if(c){t=s;break}l=l.parent}n[e]=t}return h(t)&&(t=t.call(this.view)),t},x.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},x.prototype.parse=function(e,t){var r=this.templateCache,o=e+":"+(t||P.tags).join(":"),n=void 0!==r,s=n?r.get(o):void 0;return null==s&&(s=function(e,t){if(!e)return[];var r,o,n,s,i=!1,a=[],l=[],c=[],p=!1,u=!1,g="",h=0;function y(){if(p&&!u)for(;c.length;)delete l[c.pop()];else c=[];p=!1,u=!1}function v(e){if("string"==typeof e&&(e=e.split(W,2)),!f(e)||2!==e.length)throw new Error("Invalid tags: "+e);r=new RegExp(m(e[0])+"\\s*"),o=new RegExp("\\s*"+m(e[1])),n=new RegExp("\\s*"+m("}"+e[1]))}v(t||P.tags);for(var E,x,k,M,T,V,I=new L(e);!I.eos();){if(E=I.pos,k=I.scanUntil(r))for(var B=0,z=k.length;B<z;++B)s=M=k.charAt(B),function(e,t){return d.call(e,t)}(b,s)?(u=!0,i=!0,g+=" "):(c.push(l.length),g+=M),l.push(["text",M,E,E+1]),E+=1,"\n"===M&&(y(),g="",h=0,i=!1);if(!I.scan(r))break;if(p=!0,x=I.scan(C)||"name",I.scan(A),"="===x?(k=I.scanUntil(w),I.scan(w),I.scanUntil(o)):"{"===x?(k=I.scanUntil(n),I.scan(S),I.scanUntil(o),x="&"):k=I.scanUntil(o),!I.scan(o))throw new Error("Unclosed tag at "+I.pos);if(T=">"==x?[x,k,E,I.pos,g,h,i]:[x,k,E,I.pos],h++,l.push(T),"#"===x||"^"===x)a.push(T);else if("/"===x){if(!(V=a.pop()))throw new Error('Unopened section "'+k+'" at '+E);if(V[1]!==k)throw new Error('Unclosed section "'+V[1]+'" at '+E)}else"name"===x||"{"===x||"&"===x?u=!0:"="===x&&v(k)}if(y(),V=a.pop())throw new Error('Unclosed section "'+V[1]+'" at '+I.pos);return function(e){for(var t,r=[],o=r,n=[],s=0,i=e.length;s<i;++s)switch((t=e[s])[0]){case"#":case"^":o.push(t),n.push(t),o=t[4]=[];break;case"/":n.pop()[5]=t[2],o=n.length>0?n[n.length-1][4]:r;break;default:o.push(t)}return r}(function(e){for(var t,r,o=[],n=0,s=e.length;n<s;++n)(t=e[n])&&("text"===t[0]&&r&&"text"===r[0]?(r[1]+=t[1],r[3]=t[3]):(o.push(t),r=t));return o}(l))}(e,t),n&&r.set(o,s)),s},x.prototype.render=function(e,t,r,o){var n=this.getConfigTags(o),s=this.parse(e,n),i=t instanceof E?t:new E(t,void 0);return this.renderTokens(s,i,r,e,o)},x.prototype.renderTokens=function(e,t,r,o,n){for(var s,i,a,l="",c=0,p=e.length;c<p;++c)a=void 0,"#"===(i=(s=e[c])[0])?a=this.renderSection(s,t,r,o,n):"^"===i?a=this.renderInverted(s,t,r,o,n):">"===i?a=this.renderPartial(s,t,r,n):"&"===i?a=this.unescapedValue(s,t):"name"===i?a=this.escapedValue(s,t,n):"text"===i&&(a=this.rawValue(s)),void 0!==a&&(l+=a);return l},x.prototype.renderSection=function(e,t,r,o,n){var s=this,i="",a=t.lookup(e[1]);if(a){if(f(a))for(var l=0,c=a.length;l<c;++l)i+=this.renderTokens(e[4],t.push(a[l]),r,o,n);else if("object"==typeof a||"string"==typeof a||"number"==typeof a)i+=this.renderTokens(e[4],t.push(a),r,o,n);else if(h(a)){if("string"!=typeof o)throw new Error("Cannot use higher-order sections without the original template");null!=(a=a.call(t.view,o.slice(e[3],e[5]),(function(e){return s.render(e,t,r,n)})))&&(i+=a)}else i+=this.renderTokens(e[4],t,r,o,n);return i}},x.prototype.renderInverted=function(e,t,r,o,n){var s=t.lookup(e[1]);if(!s||f(s)&&0===s.length)return this.renderTokens(e[4],t,r,o,n)},x.prototype.indentPartial=function(e,t,r){for(var o=t.replace(/[^ \t]/g,""),n=e.split("\n"),s=0;s<n.length;s++)n[s].length&&(s>0||!r)&&(n[s]=o+n[s]);return n.join("\n")},x.prototype.renderPartial=function(e,t,r,o){if(r){var n=this.getConfigTags(o),s=h(r)?r(e[1]):r[e[1]];if(null!=s){var i=e[6],a=e[5],l=e[4],c=s;0==a&&l&&(c=this.indentPartial(s,l,i));var p=this.parse(c,n);return this.renderTokens(p,t,r,c,o)}}},x.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(null!=r)return r},x.prototype.escapedValue=function(e,t,r){var o=this.getConfigEscape(r)||P.escape,n=t.lookup(e[1]);if(null!=n)return"number"==typeof n&&o===P.escape?String(n):o(n)},x.prototype.rawValue=function(e){return e[1]},x.prototype.getConfigTags=function(e){return f(e)?e:e&&"object"==typeof e?e.tags:void 0},x.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!f(e)?e.escape:void 0};var P={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){k.templateCache=e},get templateCache(){return k.templateCache}},k=new x;P.clearCache=function(){return k.clearCache()},P.parse=function(e,t){return k.parse(e,t)},P.render=function(e,t,r,o){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(f(n=e)?"array":typeof n)+'" was given as the first argument for mustache#render(template, view, partials)');var n;return k.render(e,t,r,o)},P.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return v[e]}))},P.Scanner=L,P.Context=E,P.Writer=x;const M=P;class T{constructor(e,t){this.template=e,this.state=t,this.ast=M.parse(e)}getValue(){return void 0===this.value&&(this.value=M.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const r of this.getUsedVariables().values())t.push(this.state.onVariableChange(r).subscribe((()=>{const t=M.render(this.template,this.state);t!==this.value&&(this.value=t,e(this.value))})));return{unsubscribe:()=>{for(const e of t)e.unsubscribe()}}}isPureString(){return 0===this.ast.length||1===this.ast.length&&"text"===this.ast[0][0]}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const r of e){const e=r[0],o=r[1],n=r[4];["name","&","#","^"].includes(e)&&t.add(o),void 0!==n&&"string"!=typeof n&&this.recursiveGetUsedVariables(n,t)}}}async function V(){var e;const t=await l();for(const[r,o]of t.entries()){const t=null!==(e=o.properties)&&void 0!==e?e:[];for(const e of t){if("int"===e.type||"bool"===e.type||"object"===e.type||"string"!=typeof e.value)continue;const t=new T(e.value,WA.state);if(t.isPureString())continue;const o=t.getValue();I(r,e.name,o),t.onChange((t=>{I(r,e.name,t)}))}}}function I(e,t,r){WA.room.setProperty(e,t,r),"visible"===t&&(r?WA.room.showLayer(e):WA.room.hideLayer(e))}const B="https://unpkg.com/@workadventure/scripting-api-extra@1.1.1/dist";let z,G,U=0,j=0;function N(e){if(WA.state[e.name]){let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.showLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.hideLayer(e)}else{let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.hideLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.showLayer(e)}}function O(e){return e.map((e=>z.get(e))).filter((e=>"tilelayer"===(null==e?void 0:e.type)))}function Z(e){const t=u(O(e)),r=32*((t.right-t.left)/2+t.left),o=32*((t.bottom-t.top)/2+t.top);return Math.sqrt(Math.pow(U-r,2)+Math.pow(j-o,2))}function R(e){WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]?function(e){const t=e.properties.getString("openSound"),r=e.properties.getNumber("soundRadius");let o=1;if(r){const t=Z(e.properties.mustGetString("openLayer").split("\n"));if(t>r)return;o=1-t/r}t&&WA.sound.loadSound(t).play({volume:o})}(e):function(e){const t=e.properties.getString("closeSound"),r=e.properties.getNumber("soundRadius");let o=1;if(r){const t=Z(e.properties.mustGetString("closeLayer").split("\n"));if(t>r)return;o=1-t/r}t&&WA.sound.loadSound(t).play({volume:o})}(e),N(e)})),N(e)}function _(e,t,r,o){const n=e.name;let s,i,a=!1;const l=r.getString("zone");if(!l)throw new Error('Missing "zone" property on doorstep layer "'+n+'"');const c=r.getString("tag");let p=!0;c&&!WA.player.tags.includes(c)&&(p=!1);const g=!!c;function f(){var e;s&&s.remove(),s=WA.ui.displayActionMessage({message:null!==(e=r.getString("closeTriggerMessage"))&&void 0!==e?e:"Press SPACE to close the door",callback:()=>{WA.state[t.name]=!1,h()}})}function h(){var e;s&&s.remove(),s=WA.ui.displayActionMessage({message:null!==(e=r.getString("openTriggerMessage"))&&void 0!==e?e:"Press SPACE to open the door",callback:()=>{WA.state[t.name]=!0,f()}})}function m(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterZone(l,(()=>{a=!0,r.getBoolean("autoOpen")&&p?WA.state[t.name]=!0:WA.state[t.name]||(!g||p)&&g||!r.getString("code")&&!r.getString("codeVariable")?p&&(WA.state[t.name]?f():h()):function(e){const r=u(O(t.properties.mustGetString("closeLayer").split("\n")));i=WA.room.website.create({name:"doorKeypad"+e,url:o+"/keypad.html#"+encodeURIComponent(e),position:{x:32*r.right,y:32*r.top,width:96,height:128},allowApi:!0})}(n)})),WA.room.onLeaveZone(l,(()=>{a=!1,r.getBoolean("autoClose")&&(WA.state[t.name]=!1),s&&s.remove(),m()})),WA.state.onVariableChange(t.name).subscribe((()=>{a&&(r.getBoolean("autoClose")||!0!==WA.state[t.name]||f(),i&&!0===WA.state[t.name]&&m(),r.getBoolean("autoOpen")||!1!==WA.state[t.name]||h())}))}function D(e){void 0===WA.state[e.name]&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]&&function(e){const t=e.properties.mustGetString("bellSound"),r=e.properties.getNumber("soundRadius");let o=1;if(r){const t=Math.sqrt(Math.pow(e.x-U,2)+Math.pow(e.y-j,2));if(t>r)return;o=1-t/r}WA.sound.loadSound(t).play({volume:o})}(e)}))}function q(e,t){let r;const o=t.mustGetString("zone"),n=t.getString("bellPopup");WA.room.onEnterZone(o,(()=>{var o;n?r=WA.ui.openPopup(n,"",[{label:null!==(o=t.getString("bellButtonText"))&&void 0!==o?o:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1})),WA.room.onLeaveZone(o,(()=>{r&&(r.close(),r=void 0)}))}async function $(e){e=null!=e?e:B;const t=await s();z=await l();for(const e of t.values())e.properties.get("door")&&R(e),e.properties.get("bell")&&D(e);for(const r of z.values()){const n=new o(r.properties),s=n.getString("doorVariable");if(s&&"tilelayer"===r.type){const o=t.get(s);if(void 0===o)throw new Error('Cannot find variable "'+s+'" referred in the "doorVariable" property of layer "'+r.name+'"');_(r,o,n,e)}const i=n.getString("bellVariable");i&&q(i,n)}WA.player.onPlayerMove((e=>{U=e.x,j=e.y}))}function F(e){const t=e.getString("bindVariable");if(t){const r=e.getString("zone");if(!r)throw new Error('A layer with a "bindVariable" property must ALSO have a "zone" property.');!function(e,t,r,o,n,s){s&&!WA.player.tags.includes(s)||(void 0!==r&&WA.room.onEnterZone(t,(()=>{n||(WA.state[e]=r)})),void 0!==o&&WA.room.onLeaveZone(t,(()=>{WA.state[e]=o})))}(t,r,e.get("enterValue"),e.get("leaveValue"),e.getString("triggerMessage"),e.getString("tag"))}}function H(e,t){let r;const o=t.getString("zone");if(!o)throw new Error('Missing "zone" property');const n=t.getString("openConfigAdminTag");let s=!0;function i(){WA.nav.closeCoWebSite()}n&&!WA.player.tags.includes(n)&&(s=!1),WA.room.onEnterZone(o,(()=>{const o=t.getString("openConfigTrigger");var n;s&&(o&&"onaction"===o?(r&&r.remove(),r=WA.ui.displayActionMessage({message:null!==(n=t.getString("openConfigTriggerMessage"))&&void 0!==n?n:"Press SPACE or touch here to configure",callback:()=>K(e)})):K(e))})),WA.room.onLeaveZone(o,(()=>{r?(r.remove(),i()):i()}))}function K(e){const t=e?"#"+e:"";WA.nav.openCoWebSite(B+"/configuration.html"+t,!0)}function J(){return WA.onInit().then((()=>{$().catch((e=>console.error(e))),async function(){const e=await l();for(const t of e.values())F(new o(t.properties))}().catch((e=>console.error(e))),async function(e){const t=await WA.room.getTiledMap();e=null!=e?e:B,G=await l();const r=t.layers.find((e=>"configuration"===e.name));if(r){const t=new o(r.properties).getString("tag");t&&!WA.player.tags.includes(t)||WA.ui.registerMenuCommand("Configure the room",(()=>{WA.nav.openCoWebSite(e+"/configuration.html",!0)}));for(const e of G.values()){const t=new o(e.properties),r=t.getString("openConfig");r&&"tilelayer"===e.type&&H(r,t)}}}().catch((e=>console.error(e))),V().catch((e=>console.error(e)))}))}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{let e,t,o,n,s,i,a,l;(0,r(733).bootstrapExtra)().catch((e=>console.error(e))),WA.room.onEnterLayer("imprimanteZone").subscribe((()=>{e=WA.ui.openPopup("imprimanteMessage","Il n'y a plus de papier !",[{label:"Close",className:"primary",callback:e=>{e.close()}}])})),WA.room.onLeaveLayer("imprimanteZone").subscribe((()=>{e&&e.close()})),WA.room.onEnterLayer("zoneI1").subscribe((()=>{t=WA.ui.openPopup("indice1","1",[{label:"Close",className:"primary",callback:e=>{e.close()}}])})),WA.room.onLeaveLayer("zoneI1").subscribe((()=>{t&&t.close()})),WA.room.onEnterLayer("zoneI2").subscribe((()=>{o=WA.ui.openPopup("indice2","2",[{label:"Close",className:"primary",callback:e=>{e.close()}}])})),WA.room.onLeaveLayer("zoneI2").subscribe((()=>{o&&o.close()})),WA.room.onEnterLayer("zoneI3").subscribe((()=>{n=WA.ui.openPopup("indice3","MDP 6 caractères",[{label:"Close",className:"primary",callback:e=>{e.close()}}])})),WA.room.onLeaveLayer("zoneI3").subscribe((()=>{n&&n.close()})),WA.room.onEnterLayer("zoneI4").subscribe((()=>{s=WA.ui.openPopup("indice4","4",[{label:"Close",className:"primary",callback:e=>{e.close()}}])})),WA.room.onLeaveLayer("zoneI4").subscribe((()=>{s&&s.close()})),WA.room.onEnterLayer("zoneI5").subscribe((()=>{i=WA.ui.openPopup("indice5","A puis B",[{label:"Close",className:"primary",callback:e=>{e.close()}}])})),WA.room.onLeaveLayer("zoneI5").subscribe((()=>{i&&i.close()})),WA.room.onEnterLayer("zoneI6").subscribe((()=>{a=WA.ui.openPopup("indice6","6",[{label:"Close",className:"primary",callback:e=>{e.close()}}])})),WA.room.onLeaveLayer("zoneI6").subscribe((()=>{a&&a.close()})),WA.room.onEnterLayer("papierImprimanteZone").subscribe((()=>{l=WA.ui.openPopup("papierImprimante","Tu ne vas pas mettre ce papier dans l'imprimante quand même !",[{label:"Close",className:"primary",callback:e=>{e.close()}}])})),WA.room.onLeaveLayer("papierImprimanteZone").subscribe((()=>{l&&l.close()})),WA.room.onEnterLayer("clock").subscribe((()=>{let e=new Date,t=e.getHours()+":"+e.getMinutes();WA.chat.sendChatMessage(t,"Mr Robot")}))})()})();
//# sourceMappingURL=script.js.map
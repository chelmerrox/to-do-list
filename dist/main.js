"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[179],{426:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,'*,\r\n*::before,\r\n*::after {\r\n  -webkit-box-sizing: border-box;  /* for Google Chrome and Apple Safari */\r\n  -moz-box-sizing: border-box;    /* for Mozilla Firefox */\r\n  -ms-box-sizing: border-box;   /* for Microsoft\'s Internet Explorer */\r\n  box-sizing: border-box;       /* box-sizing is a property allows us to change exactly how the box-model works  */\r\n}\r\n\r\nhtml {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \'Quicksand\', Helvetica, sans-serif;\r\n  background-color: rgb(255, 255, 255);\r\n\r\n  /*  position: relative; */\r\n  min-height: 100vh;  /* vh (viewport height as unit of measure)) */\r\n  margin: 0;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin: 5% 20%;\r\n  width: 60%;\r\n  padding: 10px 5px;\r\n  border: 1px solid #d3d3d3;\r\n  border-radius: 1px;\r\n  box-shadow: 1px 1px 10px #d3d3d3;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n  width: 100%;\r\n  border-bottom: 1px solid #b9b9b9;\r\n}\r\n\r\n.header p {\r\n  font-size: medium;\r\n  font-weight: bold;\r\n  color: rgb(61, 61, 61);\r\n}\r\n\r\n.header .loop-icon {\r\n  color: #b2b2b2;\r\n}\r\n\r\n.add-task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n  width: 100%;\r\n  padding: 2% 0;\r\n  border-bottom: 1px solid #b9b9b9;\r\n}\r\n\r\n.add-task input {\r\n  border: none;\r\n}\r\n\r\n.add-task input::placeholder {\r\n  font-size: medium;\r\n  font-style: italic;\r\n  color: #b2b2b2;\r\n}\r\n\r\n.add-task .return-icon {\r\n  color: #b2b2b2;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n  list-style: none;\r\n}\r\n\r\nul li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 2% 0;\r\n  border-bottom: 1px solid #b9b9b9;\r\n}\r\n\r\nul li input[type="text"] {\r\n  border: none;\r\n}\r\n\r\nul li input[type="text"]::placeholder {\r\n  color: black;\r\n  font-size: medium;\r\n}\r\n\r\nul li button {\r\n  border: none;\r\n  background-color: white;\r\n}\r\n\r\nul li .vertical-line-icon {\r\n  color: #b2b2b2;\r\n}\r\n\r\n.clear-list {\r\n  border: none;\r\n  background-color: white;\r\n  font-size: medium;\r\n  font-style: italic;\r\n  color: #b2b2b2;\r\n  padding: 2% 0;\r\n}\r\n',""]);const s=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=t.base?c[0]+t.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=e(p),b={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)r[u].references++,r[u].updater(b);else{var f=o(b,t);t.byIndex=s,r.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);r[s].references--}for(var c=t(n,o),l=0;l<i.length;l++){var d=e(i[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}i=c}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},987:(n,r,e)=>{var t=e(379),o=e.n(t),i=e(795),a=e.n(i),s=e(569),c=e.n(s),l=e(565),d=e.n(l),p=e(216),u=e.n(p),b=e(589),f=e.n(b),m=e(426),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=u(),o()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const x=document.querySelector("ul");[{description:"Task 1",completed:!1,index:1},{description:"Task 2",completed:!1,index:2},{description:"Task 3",completed:!1,index:3},{description:"Task 4",completed:!1,index:4}].forEach((n=>{const r=document.createElement("li");r.innerHTML=`\n    <div class="task">\n      <input type="checkbox" id="task-${n.index}" name="task-${n.index}" value=""/>\n      <input type="text" name="task-${n.index} value="${n.description}" placeholder="${n.description}"/>\n    </div>\n    <button>\n      <i class="vertical-line-icon material-icons">more_vert</i>\n    </button>\n  `,x.appendChild(r)}))}},n=>{n(n.s=987)}]);
(function(t){function e(e){for(var o,r,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-6716bea0":"c0e91fa1"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-6716bea0":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-6716bea0":"f2da9edd"}[t]+".css",a=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===o||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-vm-crs/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0d3f":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.todos,(function(e,o){return n("TodoItem",{key:e.id,attrs:{index:o,todo:e,isChecked:e.completed},on:{"remove-todo":t.removeTodo}})})),1)])},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:{done:t.todo.completed}},[n("label",[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.isChecked},on:{change:function(e){t.todo.completed?t.todo.completed=!1:t.todo.completed=!0}}}),n("span",{staticClass:"ta-l"},[t._v(t._s(t._f("uppercase")(t.todo.title)))])]),n("button",{staticClass:"waves-effect waves-light btn modal-trigger ml-a",attrs:{href:"#update-value"},on:{click:function(e){return e.preventDefault(),t.showUpdateModal(t.todo.title)}}},[t._v("edit")]),n("button",{staticClass:"waves-effect waves-light btn red",on:{click:function(e){return t.$emit("remove-todo",t.todo.id)}}},[n("i",{staticClass:"material-icons"},[t._v("close")])])])},i=[],s=(n("a9e3"),n("498a"),{props:{todo:{type:Object,required:!0},index:Number,isChecked:Boolean},mounted:function(){M.updateTextFields()},filters:{uppercase:function(t){return t.toUpperCase()}},methods:{showUpdateModal:function(t){var e=this,n=document.createElement("div");n.id="update-value",n.className="modal",n.innerHTML='\n        <div class="modal-content">\n          <h4>Edit task</h4>\n          <input type="text" value="'.concat(t,'">\n        </div>\n        <div class="modal-footer">\n          <a href="#!" class="modal-close waves-effect waves-green btn-flat btn-update">Agree</a>\n        </div>\n      ');var o=n.querySelector(".btn-update"),r=n.querySelector("input");o&&o.addEventListener("click",(function(t){t.preventDefault(),""!==r.value.trim()&&(e.todo.title=r.value.trim()),n.remove()}));var a={};document.getElementById("app").appendChild(n),M.Modal.init(n,a)}}}),c=s,u=(n("6282"),n("2877")),l=Object(u["a"])(c,a,i,!1,null,"af492c44",null),d=l.exports,f={props:["todos"],components:{TodoItem:d},methods:{removeTodo:function(t){this.$emit("remove-todo",t)}}},p=f,m=(n("dace"),Object(u["a"])(p,o,r,!1,null,"f38ac210",null));e["a"]=m.exports},"198c":function(t,e,n){},"1d60":function(t,e,n){},2154:function(t,e,n){"use strict";n("ed34")},"387d":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"input-field"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"validate",attrs:{id:"task-name",type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("label",{attrs:{for:"task-name"}},[t._v("Todo name")])])]),t._m(0)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn waves-effect waves-light",attrs:{type:"submit",name:"action"}},[t._v(" Create "),n("i",{staticClass:"material-icons right"},[t._v("send")])])}],a=(n("498a"),{data:function(){return{title:""}},mounted:function(){M.updateTextFields()},methods:{onSubmit:function(){if(this.title.trim()){var t={id:Date.now(),title:this.title,completed:!1};this.$emit("add-todo",t),this.title=""}}}}),i=a,s=(n("70ea"),n("2877")),c=Object(s["a"])(i,o,r,!1,null,"73495de6",null);e["a"]=c.exports},5547:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("d3b7"),n("4de4"),n("0d3f")),s=n("387d"),c={name:"App",data:function(){return{todos:[]}},mounted:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/todos?_limit=20").then((function(t){return t.json()})).then((function(e){t.todos=e}))},methods:{removeTodo:function(t){this.todos=this.todos.filter((function(e){return e.id!==t}))},addTodo:function(t){this.todos.push(t)}},components:{TodoList:i["a"],AddTodo:s["a"]}},u=c,l=(n("034f"),n("2877")),d=Object(l["a"])(u,r,a,!1,null,null,null),f=d.exports,p=(n("3ca3"),n("ddb0"),n("8c4f")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-wrapper"},[n("router-link",{attrs:{to:"/todos"}},[n("div",{staticClass:"text-effect"},[n("h1",{staticClass:"neon",attrs:{"data-text":"Todo application",contenteditable:""}}),n("div",{staticClass:"gradient"}),n("div",{staticClass:"spotlight"})])])],1)},v=[],h=(n("65eb"),n("2154"),{}),b=Object(l["a"])(h,m,v,!1,null,"6f0a65dd",null),g=b.exports;o["a"].use(p["a"]);var y=new p["a"]({mode:"history",routes:[{path:"/",component:g},{path:"/todos",component:function(){return n.e("chunk-6716bea0").then(n.bind(null,"75cf"))}}]});n("6885");o["a"].config.productionTip=!1,new o["a"]({router:y,render:function(t){return t(f)}}).$mount("#app")},6282:function(t,e,n){"use strict";n("1d60")},"65eb":function(t,e,n){"use strict";n("198c")},"70ea":function(t,e,n){"use strict";n("8c85")},"85ec":function(t,e,n){},"8c85":function(t,e,n){},dace:function(t,e,n){"use strict";n("5547")},ed34:function(t,e,n){}});
//# sourceMappingURL=app.a71a8d98.js.map
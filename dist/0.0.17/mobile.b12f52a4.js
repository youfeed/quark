export function __vite_legacy_guard(){import("data:text/javascript,")}import{i as t,n as e,v as n,_ as i}from"./index.4ac12ea3.js";import{d as s,m as o,x as r,u as a,p as c,w as l,r as d,e as h,g as u,l as g,t as m,s as p,j as b,F as f,o as v,a as x,A as y,B as w,i as k,k as A,D as E,E as z,H as _}from"./vendor.61e79af0.js";var C=s({name:"app",setup(){const e=o("CsUI"),n=r(),i=a(),s=c((()=>e.value&&"/"!=e.value&&!e.value.includes("-taro")));return l((()=>n),(()=>{var i,s;const{hash:o}=window.top.location;t||n.hash==o?e.value=(null==(s=null==n?void 0:n.meta)?void 0:s.ComponentName)||n.name:e.value=(null==(i=null==n?void 0:n.meta)?void 0:i.ComponentName)||n.name}),{immediate:!0,deep:!0}),{title:e,isShow:s,goBack:()=>{i.back()}}}});const T={key:0,id:"nav"},L=[u("cs-icon",{name:"left"},null,-1)];C.render=function(t,e,n,i,s,o){const r=d("router-view");return v(),h(f,null,[t.isShow?(v(),h("div",T,[u("div",{class:"back",onClick:e[0]||(e[0]=(...e)=>t.goBack&&t.goBack(...e))},L),g(" "+m(t.title),1)])):p("",!0),b(r)],64)};var I=s({name:"doc",setup:()=>x({nav:e,versions:n})});y("data-v-6aec89b0");const B={class:"index"},R=u("div",{class:"index-header"},[u("img",{src:"/cubeshop/0.0.17/logo.f732a16a.png",alt:"",srcset:""}),u("div",{class:"info"},[u("h1",null,"Cubeshop"),u("p",null,"基于 WC 的轻量级移动端 UI 组件库")])],-1),S={class:"index-components"},j={key:0},H=u("cs-icon",{size:"14px",color:"#979797",name:"right"},null,-1);w(),I.render=function(t,e,n,i,s,o){const r=d("router-link");return v(),h("div",B,[R,u("div",S,[(v(!0),h(f,null,k(t.nav,(t=>(v(),h("ol",{key:t},[u("li",null,m(t.name),1),u("ul",null,[(v(!0),h(f,null,k(t.packages,(t=>(v(),h(f,{key:t},[t.show?(v(),h("li",j,[b(r,{to:t.name.toLowerCase()},{default:A((()=>[g(m(t.name)+"  "+m(t.cName),1)])),_:2},1032,["to"]),H])):p("",!0)],64)))),128))])])))),128))])])},I.__scopeId="data-v-6aec89b0";const $=[{path:"/",name:"/",component:I}],F=t=>{for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)){const i=e[n];let s=i.packages.findIndex((e=>e.name.toLowerCase()===t));if(-1!==s)return i.packages[s].name}},M={"/src/packages/button/demo.vue":()=>i((()=>import("./demo.4f1a4ed0.js")),["0.0.17/demo.4f1a4ed0.js","0.0.17/demo.a4277e44.css","0.0.17/vendor.61e79af0.js"]),"/src/packages/card/demo.vue":()=>i((()=>import("./demo.882db206.js")),["0.0.17/demo.882db206.js","0.0.17/demo.7399f123.css","0.0.17/vendor.61e79af0.js"]),"/src/packages/demo/demo.vue":()=>i((()=>import("./demo.71539145.js")),["0.0.17/demo.71539145.js","0.0.17/vendor.61e79af0.js"]),"/src/packages/icon/demo.vue":()=>i((()=>import("./demo.cc47b475.js")),["0.0.17/demo.cc47b475.js","0.0.17/demo.3c1e11ec.css","0.0.17/vendor.61e79af0.js"]),"/src/packages/loading/demo.vue":()=>i((()=>import("./demo.0e57e471.js")),["0.0.17/demo.0e57e471.js","0.0.17/demo.65260f9d.css","0.0.17/vendor.61e79af0.js"])};for(const et in M){let t=/packages\/(.*)\/demo.vue/.exec(et)[1];$.push({path:"/"+t,component:M[et],name:t,meta:{ComponentName:F(t)}})}$.push({name:"NotFound",path:"/:path(.*)+",redirect:()=>"/"});const O=E({history:z(),routes:$});var X,Y="ontouchstart"in window;document.createTouch||(document.createTouch=function(t,e,n,i,s,o,r){return new K(e,n,{pageX:i,pageY:s,screenX:o,screenY:r,clientX:i-window.pageXOffset,clientY:s-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var t=N(),e=0;e<arguments.length;e++)t[e]=arguments[e];return t.length=arguments.length,t});var K=function(t,e,n,i,s){i=i||0,s=s||0,this.identifier=e,this.target=t,this.clientX=n.clientX+i,this.clientY=n.clientY+s,this.screenX=n.screenX+i,this.screenY=n.screenY+s,this.pageX=n.pageX+i,this.pageY=n.pageY+s};function N(){var t=[];return t.item=function(t){return this[t]||null},t.identifiedTouch=function(t){return this[t+1]||null},t}var P=!1;function D(t){return function(e){var n,i,s;("mousedown"===e.type&&(P=!0),"mouseup"===e.type&&(P=!1),"mousemove"!==e.type||P)&&(("mousedown"===e.type||!X||X&&!X.dispatchEvent)&&(X=e.target),n=t,i=e,(s=document.createEvent("Event")).initEvent(n,!0,!0),s.altKey=i.altKey,s.ctrlKey=i.ctrlKey,s.metaKey=i.metaKey,s.shiftKey=i.shiftKey,s.touches=V(i),s.targetTouches=V(i),s.changedTouches=q(i),X.dispatchEvent(s),"mouseup"===e.type&&(X=null))}}function q(t){var e=N();return e.push(new K(X,1,t,0,0)),e}function V(t){return"mouseup"===t.type?N():q(t)}function U(){window.addEventListener("mousedown",D("touchstart"),!0),window.addEventListener("mousemove",D("touchmove"),!0),window.addEventListener("mouseup",D("touchend"),!0)}U.multiTouchOffset=75,Y||new U,_(C).use(O).mount("#app");class W extends HTMLElement{static get observedAttributes(){return["color","size"]}constructor(){super();this.attachShadow({mode:"open"}).innerHTML='\n        <style>\n        :host{\n            font-size:inherit;\n            display:inline-flex;\n            align-items: center;\n            justify-content:center;\n            color:var(--themeColor,#0088FF);\n        }\n        .loading{\n            display: block;\n            width: 1em;\n            height: 1em;\n            margin: auto;\n            animation: rotate 1.4s linear infinite;\n        }\n        .circle {\n            stroke: currentColor;\n            animation:  progress 1.4s ease-in-out infinite;\n            stroke-dasharray: 80px, 200px;\n            stroke-dashoffset: 0px;\n            transition:.3s;\n        }\n        :host(:not(:empty)) .loading{\n            margin:.5em;\n        }\n        @keyframes rotate{\n            to{\n                transform: rotate(360deg); \n            }\n        }\n        @keyframes progress {\n            0% {\n              stroke-dasharray: 1px, 200px;\n              stroke-dashoffset: 0px; \n            }\n            50% {\n              stroke-dasharray: 100px, 200px;\n              stroke-dashoffset: -15px; \n            }\n            100% {\n              stroke-dasharray: 100px, 200px;\n              stroke-dashoffset: -125px; \n            } \n        }\n        </style>\n        <svg class="loading" id="loading" viewBox="22 22 44 44"><circle class="circle" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle></svg>\n        <slot></slot>\n        '}get size(){return this.getAttribute("size")||""}get color(){return this.getAttribute("color")||""}set size(t){this.setAttribute("size",t)}set color(t){this.setAttribute("color",t)}connectedCallback(){this.loading=this.shadowRoot.getElementById("loading"),this.size&&(this.size=this.size),this.color&&(this.color=this.color)}attributeChangedCallback(t,e,n){"color"==t&&this.loading&&(this.loading.style.color=n),"size"==t&&this.loading&&(this.loading.style.fontSize=n+"px")}}customElements.get("cs-loading")||customElements.define("cs-loading",W);class G extends HTMLElement{static get observedAttributes(){return["name","size","color"]}constructor(){super();this.attachShadow({mode:"open"}).innerHTML='\n\t\t\t<style>\n\t\t\t:host{\n\t\t\t\tfont-size:inherit;\n\t\t\t\tdisplay:inline-block;\n\t\t\t\ttransition:.3s;\n\t\t\t}\n\t\t\t.icon {\n\t\t\t\tdisplay:block;\n\t\t\t\twidth: 1em;\n\t\t\t\theight: 1em;\n\t\t\t\tmargin: auto;\n\t\t\t\tfill: currentColor;\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\t</style>\n\t\t\t<svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">\n\t\t\t\t<use id="use"></use>\n\t\t\t</svg>\n\t\t'}get name(){return this.getAttribute("name")}set name(t){this.setAttribute("name",t)}get size(){return this.getAttribute("size")||""}get color(){return this.getAttribute("color")||""}set size(t){this.setAttribute("size",t)}set color(t){this.setAttribute("color",t)}connectedCallback(){this.icon=this.shadowRoot.getElementById("icon"),this.use=this.icon.querySelector("use"),this.size&&(this.size=this.size),this.color&&(this.color=this.color),this.name&&(this.name=this.name)}attributeChangedCallback(t,e,n){"name"==t&&this.use&&this.use.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",`./iconfont/icon.svg#icon-${n}`),"color"==t&&this.icon&&(this.icon.style.color=n),"size"==t&&this.icon&&(this.icon.style.fontSize=n+"px")}}customElements.get("cs-icon")||customElements.define("cs-icon",G);class J extends HTMLElement{static get observedAttributes(){return["disabled","icon","loading","href"]}constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`\n        <style>\n        :host{\n            position:relative;\n            display:inline-flex;\n            align-items:center;\n            vertical-align: middle;\n            justify-content: center;\n            padding: .25em .625em;\n            box-sizing:border-box;\n            height: 38px;\n            overflow:hidden;\n            border:1px solid var(--borderColor,#E1E6EB);\n            font-size: 14px;\n            border-radius: var(--borderRadius,8px);\n            background:#fff;\n        }\n        :host([disabled]),:host([loading]){\n            pointer-events: none; \n            opacity:.6; \n        }\n        :host([block]){ \n            display:flex; \n        }\n        :host([disabled]:not([type])){ \n            background:rgba(0,0,0,.1); \n        }\n        :host([disabled]) .btn,:host([loading]) .btn{ \n            cursor: not-allowed;\n            pointer-events: all;\n        }\n        :host([type="primary"]){ \n            color: #fff; \n            background:var(--themeColor,#0088FF);\n        }\n        :host([type="danger"]){\n            color: #fff; \n            background:var(--dangerColor,#F72626);\n        }\n        :host([type="warning"]){ \n            color: #fff; \n            background:var(--warningColor,#FB990F);\n        }\n        :host([type="info"]){ \n            color: #fff; \n            background:var(--infoColor,#07C160);\n        }\n        :host([type="primary"]),:host([type="danger"]){ \n            border:0;\n            padding: calc( .25em + 1px ) calc( .625em + 1px );\n        }\n        :host([color="${this.color}"]){ \n            background:${this.color};\n        }\n        .btn{ \n            background:none; \n            outline:0; \n            border:0; \n            position: \n            absolute; \n            left:0; \n            top:0;\n            width:100%;\n            height:100%;\n            padding:0;\n            user-select: none;\n            cursor: unset;\n        }\n        cs-loading{ \n            margin-right: 0.35em;  \n        }\n        ::-moz-focus-inner{\n            border:0;\n        }\n        :host(:not([disabled]):active) .btn::before{ \n            opacity:.2;\n        }\n        .btn:not([disabled]):active::after {\n            transform: translate(-50%,-50%) scale(0);\n            opacity: .3;\n            transition: 0s;\n        }\n        cs-icon{\n            margin-right: 0.35em;\n            transition: none;\n        }\n        ::slotted(cs-icon){\n            transition: none;\n        }\n        :host([href]){\n            cursor:pointer;\n        }\n        </style>\n        <${this.href?"a":"button"} ${this.href?'href="'+this.href+'" target="'+this.target+'" rel="'+this.rel+'"':""} class="btn" id="btn"></${this.href?"a":"button"}>${!this.loading&&this.icon&&"null"!=this.icon?'<cs-icon id="icon" name='+this.icon+"></cs-icon>":""}<slot></slot>\n        `}get disabled(){return null!==this.getAttribute("disabled")}get name(){return this.getAttribute("name")}get checked(){return null!==this.getAttribute("checked")}get href(){return this.getAttribute("href")}get target(){return this.getAttribute("target")||"_blank"}get rel(){return this.getAttribute("rel")}get icon(){return this.getAttribute("icon")}get color(){return this.getAttribute("color")}get loading(){return null!==this.getAttribute("loading")}set icon(t){this.setAttribute("icon",t)}set href(t){this.setAttribute("href",t)}set disabled(t){null===t||!1===t?this.removeAttribute("disabled"):this.setAttribute("disabled","")}set checked(t){null===t||!1===t?this.removeAttribute("checked"):this.setAttribute("checked","")}set loading(t){null===t||!1===t?this.removeAttribute("loading"):this.setAttribute("loading","")}connectedCallback(){this.btn=this.shadowRoot.getElementById("btn"),this.icon=this.shadowRoot.getElementById("icon"),this.load=document.createElement("cs-loading"),this.load.style.color="inherit",this.disabled=this.disabled,this.loading=this.loading}attributeChangedCallback(t,e,n){"disabled"==t&&this.btn&&(null!==n?(this.btn.setAttribute("disabled","disabled"),this.href&&this.btn.removeAttribute("href")):(this.btn.removeAttribute("disabled"),this.href&&(this.btn.href=this.href))),"loading"==t&&this.btn&&(null!==n?(this.shadowRoot.prepend(this.load),this.btn.setAttribute("disabled","disabled")):(this.shadowRoot.removeChild(this.load),this.btn.removeAttribute("disabled"))),"href"==t&&this.btn&&(this.disabled||(this.btn.href=n))}}customElements.get("cs-button")||customElements.define("cs-button",J);const Q=document.createElement("template");Q.innerHTML='\n  <style>\n   :host {\n     display: flex;\n     align-items: center;\n     width: 450px;\n     height: 180px;\n     background-color: #d4d4d4;\n     border: 1px solid #d5d5d5;\n     box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);\n     border-radius: 3px;\n     overflow: hidden;\n     padding: 10px;\n     box-sizing: border-box;\n     font-family: \'Poppins\', sans-serif;\n   }\n   .image {\n     flex: 0 0 auto;\n     width: 160px;\n     height: 160px;\n     vertical-align: middle;\n     border-radius: 5px;\n   }\n   .container {\n     box-sizing: border-box;\n     padding: 20px;\n     height: 160px;\n   }\n   .container > .name {\n     font-size: 20px;\n     font-weight: 600;\n     line-height: 1;\n     margin: 0;\n     margin-bottom: 5px;\n   }\n   .container > .email {\n     font-size: 12px;\n     opacity: 0.75;\n     line-height: 1;\n     margin: 0;\n     margin-bottom: 15px;\n   }\n   .container > .button {\n     padding: 10px 25px;\n     font-size: 12px;\n     border-radius: 5px;\n     text-transform: uppercase;\n   }\n  </style>\n\n  <img class="image">\n  <div class="container">\n    <p class="name"></p>\n    <p class="email"></p>\n    <button class="button">Follow</button>\n  </div>\n';class Z extends HTMLElement{constructor(){super()}connectedCallback(){const t=this.attachShadow({mode:"open"});t.appendChild(Q.content.cloneNode(!0)),t.querySelector("img").setAttribute("src",this.getAttribute("image")),t.querySelector(".name").innerText=this.getAttribute("name"),t.querySelector(".email").innerText=this.getAttribute("email"),t.querySelector("button").addEventListener("click",(t=>{alert("click !")}))}}customElements.get("cs-demo")||customElements.define("cs-demo",Z);class tt extends HTMLElement{static get observedAttributes(){return["title","content","cash","desc"]}constructor(){super();this.attachShadow({mode:"open"}).innerHTML=`\n      <style>\n      :host {\n        display: flex;\n        height: 138px;\n        background-color: #fff;\n        border-radius: 4px;\n        overflow: hidden;\n        padding: 20px;\n        box-sizing: border-box;\n      }\n      .card-container {\n        width: 100%;\n        font-size: 14px;\n      }\n      .card-container .title {\n        color: #999;\n        margin-bottom: 10px;\n      }\n      .card-body{\n        display: grid;\n        grid-template-columns: 1fr 80px;\n        border-bottom: 1px solid #eee;\n        padding-bottom: 1.1rem;\n      }\n      .card-container .content {\n        color: #666666;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n      }\n      .card-container .cash {\n        color: #333;\n        font-size: 15px;\n        text-align: right;\n      }\n      .card-container .desc {\n        color: #999;\n        padding-top: 14px;\n      }\n    </style>\n  \n    <div class="card-container" id="card">\n      <div class="title" id="title">${this.title||""}</div>\n      <div class="card-body">\n        <div class="content" id="content">${this.content||""}</div>\n        <div class="cash" id="cash">${this.cash||""}</div>\n      </div>\n      <div class="desc" id="desc">${this.desc||""}</div>\n    </div>\n    `}get title(){return this.getAttribute("title")}get content(){return this.getAttribute("content")}get desc(){return this.getAttribute("desc")}get cash(){return this.getAttribute("cash")}set title(t){return this.setAttribute("title",t)}set desc(t){return this.setAttribute("desc",t)}set content(t){return this.setAttribute("content",t)}set cash(t){return this.setAttribute("cash",t)}attributeChangedCallback(t,e,n){"title"===t&&null!==n&&(this.shadowRoot.getElementById("title").innerText=n),"content"===t&&null!==n&&(this.shadowRoot.getElementById("content").innerText=n),"cash"===t&&null!==n&&(this.shadowRoot.getElementById("cash").innerText=n),"desc"===t&&null!==n&&(this.shadowRoot.getElementById("desc").innerText=n)}connectedCallback(){console.log(this.desc,877)}}customElements.get("cs-card")||customElements.define("cs-card",tt);

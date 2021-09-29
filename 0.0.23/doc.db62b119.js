var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n,r=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&c(e,a,t[a]);if(n)for(var a of n(t))o.call(t,a)&&c(e,a,t[a]);return e},l=(e,t,a)=>(c(e,"symbol"!=typeof t?t+"":t,a),a);export function __vite_legacy_guard(){import("data:text/javascript,")}import{_ as i,n as d,h as u,v as h,d as p,a as m,i as v}from"./index.b380e6ee.js";import{d as g,r as b,c as f,o as k,u as _,a as x,b as w,w as y,e as C,f as I,v as L,g as E,h as j,F as S,i as A,n as T,j as O,k as V,l as R,t as N,m as P,p as D,q as B,T as F,s as $,x as H,y as U,z as q,A as z,B as W,C as M,D as J,E as G,G as X,H as K}from"./vendor.6d1adbea.js";var Q=i(g({name:"app"}),[["render",function(e,t,a,n,s,o){const c=b("router-view");return k(),f(c)}]]);const Y=g({name:"search",setup(){const e=_(),t=x({nav:d,navList:[],searchIndex:0,searchList:[],searchVal:"",searchCName:""});w((()=>{d.forEach((e=>{e.packages.forEach((e=>{t.navList.push(e)}))}))})),y((()=>t.searchVal),(e=>{e?t.searchList=t.navList.filter((t=>{if(!1===t.show)return!1;return new RegExp(e,"gi").test(t.name+" "+t.cName+t.desc)})):(t.searchCName="",t.searchIndex=0,t.searchList=[])}));return{data:t,onfocus:e=>{},choseList:a=>{let n=t.searchIndex;40==a.keyCode&&n++,38==a.keyCode&&n--,n<0&&(n=0);const s=t.searchList;if(s.length>0){const o=s[n]&&s[n].name;o&&(t.searchCurName=o,t.searchIndex=n,13==a.keyCode&&(e.push({path:"/"+s[n].name}),t.searchCurName="",t.searchIndex=0,t.searchVal=""))}},onblur:e=>{setTimeout((()=>{t.searchList=[],t.searchVal=""}),200)},checklist:()=>{t.searchVal="",t.searchCurName="",t.searchIndex=0}}}}),Z={class:"search-box"},ee={class:"search-list"},te=["onClick"];var ae=i(Y,[["render",function(e,t,a,n,s,o){const c=b("router-link");return k(),C("div",Z,[I(E("input",{type:"text",class:"search-input",placeholder:"在 Cubeshop 中搜索","onUpdate:modelValue":t[0]||(t[0]=t=>e.data.searchVal=t),onFocus:t[1]||(t[1]=(...t)=>e.onfocus&&e.onfocus(...t)),onBlur:t[2]||(t[2]=(...t)=>e.onblur&&e.onblur(...t)),onKeyup:t[3]||(t[3]=(...t)=>e.choseList&&e.choseList(...t))},null,544),[[L,e.data.searchVal]]),I(E("ul",ee,[(k(!0),C(S,null,A(e.data.searchList,((t,a)=>(k(),C("li",{class:T(e.data.searchCurName==t.name?"cur":""),onClick:a=>e.checklist(t),key:a},[O(c,{to:t.name.toLowerCase()},{default:V((()=>[R(N(t.name)+" ",1),E("span",null,N(t.cName),1)])),_:2},1032,["to"])],10,te)))),128))],512),[[j,e.data.searchList.length>0]])])}]]);const ne=class{constructor(){l(this,"currentRoute",P("/")),l(this,"_themeColor",P("white"))}static getInstance(){if(null==this.instance){this.instance=new ne;let e=localStorage.getItem("csui-theme-color");e&&(this.instance.themeColor.value=e)}return this.instance}get themeColor(){return this._themeColor}set themeColor(e){this._themeColor=e}};let se=ne;l(se,"instance");const oe=g({name:"doc-header",components:{Search:ae},setup(){let e=[];d.forEach((t=>{e.push(...t.packages)}));const t=x({theme:"black",verson:"1.x",navIndex:0,activeIndex:0,isShowSelect:!1}),a=D((()=>{let t=se.getInstance().currentRoute.value;return function(a){const n=a.toLowerCase();return"component"===n?e.findIndex((e=>e.name.toLowerCase()===t))>-1:t===n||n.includes(t)}})),n=D((()=>function(){return`doc-header-${se.getInstance().themeColor.value}`}));return{header:u,versions:h,version:"0.0.23",data:t,toHome:()=>{se.getInstance().currentRoute.value="/"},isActive:a,checkTheme:(e,a)=>{t.isShowSelect=!1,t.activeIndex=a,t.verson=e.name,window.location.href=e.link},themeName:n,handleFocus:()=>{console.log(1)},handleFocusOut:()=>{t.isShowSelect=!1}}}}),ce={class:"header-logo"},re=E("span",{class:"logo-border"},null,-1),le={class:"header-nav"},ie={class:"nav-box"},de={class:"nav-list"},ue=["href"],he=$('<li class="nav-item"><a class="user-link" target="_blank" href="https://github.com/allan2coder/cubeshop"> Github <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="__dumi-default-external-link-icon"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></li>',1),pe={class:"nav-item"},me={class:"header-select-hd"},ve=E("i",{class:""},null,-1),ge={class:"header-select-bd"},be=["onClick"],fe={class:"nav-item"};var ke=i(oe,[["render",function(e,t,a,n,s,o){const c=b("Search"),r=b("dark-mode");return k(),C("div",{class:T(["doc-header",e.themeName()])},[E("div",ce,[E("a",{class:"logo-link",href:"#",onClick:t[0]||(t[0]=(...t)=>e.toHome&&e.toHome(...t))}),re]),E("div",le,[O(c),E("div",ie,[E("ul",de,[(k(!0),C(S,null,A(e.header,(t=>(k(),C("li",{class:T(["nav-item",{active:e.isActive(t.name)}]),key:t.name},[E("a",{href:t.path},N(t.cName),9,ue)],2)))),128)),he,E("li",pe,[E("div",{onFocus:t[1]||(t[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onFocusout:t[2]||(t[2]=(...t)=>e.handleFocusOut&&e.handleFocusOut(...t)),tabindex:"0",class:T(["header-select-box",[1==e.data.isShowSelect?"select-up":"select-down"]]),onClick:t[3]||(t[3]=B((t=>e.data.isShowSelect=!e.data.isShowSelect),["stop"]))},[E("div",me,[R(N(e.data.verson),1),ve]),O(F,{name:"fade"},{default:V((()=>[I(E("div",ge,[(k(!0),C(S,null,A(e.versions,((t,a)=>(k(),C("div",{class:T(["header-select-item",{active:e.data.activeIndex===a}]),key:a,onClick:B((a=>e.checkTheme(t)),["stop"])},N(t.name),11,be)))),128))],512),[[j,e.data.isShowSelect]])])),_:1})],34)]),E("li",fe,[O(r,{class:"dark-btn"})])])])])],2)}]]);const _e=g({name:"doc-nav",setup:()=>({isActive:D((()=>function(e){return se.getInstance().currentRoute.value==e.toLowerCase()})),nav:x(d),docs:x(p),currentRoute:se.getInstance().currentRoute})}),xe={class:"doc-nav"},we=["href"],ye={key:0};var Ce=i(_e,[["render",function(e,t,a,n,s,o){const c=b("router-link");return k(),C("div",xe,[E("ol",null,[E("li",null,N(e.docs.name),1),E("ul",null,[(k(!0),C(S,null,A(e.docs.packages,(t=>I((k(),C("li",{class:T({active:e.isActive(t.name)}),key:t},[t.isLink?(k(),C("a",{key:1,href:t.name,target:"_blank"},N(t.cName),9,we)):(k(),f(c,{key:0,to:t.name.toLowerCase()},{default:V((()=>[R(N(t.cName),1)])),_:2},1032,["to"]))],2)),[[j,t.show]]))),128))])]),(k(!0),C(S,null,A(e.nav,(t=>(k(),C("ol",{key:t},[E("li",null,N(t.name),1),E("ul",null,[(k(!0),C(S,null,A(t.packages,(t=>(k(),C(S,{key:t},[t.show?(k(),C("li",ye,[O(c,{to:t.name.toLowerCase(),class:T({active:e.isActive(t.name)})},{default:V((()=>[R(N(t.name)+"  ",1),E("b",null,N(t.cName),1)])),_:2},1032,["to","class"])])):H("",!0)],64)))),128))])])))),128))])}]]);const Ie=g({name:"doc-demo-preview",props:{url:String}}),Le={class:"doc-demo-preview"},Ee=["src"];var je=i(Ie,[["render",function(e,t,a,n,s,o){return k(),C("div",Le,[E("iframe",{src:e.url,frameborder:"0"},null,8,Ee)])}]]);const Se=g({name:"doc",components:{[ke.name]:ke,[Ce.name]:Ce,[je.name]:je},setup(){const e=U(),t=x({demoUrl:"demo.html"}),a=e=>{const{origin:a,pathname:n}=window.location;se.getInstance().currentRoute.value=e.name,t.demoUrl=`${a}${n.replace("index.html","")}demo.html#${e.path}`};return w((()=>{a(e)})),q((e=>{a(e)})),r({},z(t))}}),Ae={class:"doc-content"},Te={class:"doc-content-document"};var Oe=i(Se,[["render",function(e,t,a,n,s,o){const c=b("doc-header"),r=b("doc-nav"),l=b("router-view"),i=b("doc-demo-preview");return k(),C("div",null,[O(c),O(r),E("div",Ae,[E("div",Te,[O(l)]),O(i,{url:e.demoUrl},null,8,["url"])])])}],["__scopeId","data-v-f11c2fd8"]]);const Ve={class:"markdown-body"},Re=[$('<h2>📦 安装</h2><pre><code class="language-shell"><span class="hljs-meta">$</span><span class="bash"> yarn add cubeshop  <span class="hljs-comment"># or npm i cubeshop -S</span></span>\n</code></pre><h2>🔨 使用</h2><h4>按需加载</h4><p>babel.config.js 添加如下配置， 依赖 babel-plugin-import 插件</p><pre><code class="language-tsx">plugins: [\n  [<span class="hljs-string">&#39;import&#39;</span>, {\n    <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&#39;cubeshop&#39;</span>,\n    <span class="hljs-attr">libraryDirectory</span>: <span class="hljs-string">&#39;lib&#39;</span>,\n  }, <span class="hljs-string">&#39;cubeshop&#39;</span>]\n]\n</code></pre><pre><code class="language-tsx"><span class="hljs-keyword">import</span> {Button, WCUse} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;cubeshop&#39;</span>;\nWCUse(Button)\n\n&lt;cs-button <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;按钮&lt;/cs-button&gt;\n</code></pre><p>参考：<a href="/#/start">快速上手</a>。</p>',8)],Ne={setup:(e,{expose:t})=>(t({frontmatter:{}}),(e,t)=>(k(),C("div",Ve,Re)))};const Pe=g({name:"main",components:{[ke.name]:ke,Intro:Ne},setup(){const e=x({articleList:new Array,casesImages:new Array,currentCaseItem:{},currentCaseIndex:0,localTheme:localStorage.getItem("csui-theme-color"),showAwait:!1}),n=D((()=>function(){return`doc-content-${se.getInstance().themeColor.value}`})),s=D((()=>function(){return se.getInstance().themeColor.value}));return o=r({toIntro:function(){Ze.push({path:"/intro"})}},z(e)),t(o,a({themeName:n,themeNameValue:s,toDetail:()=>{window.open("/cat")},goAwait:()=>{e.showAwait=!0},hideAwait:()=>{e.showAwait=!1}}));var o}}),De=e=>(W("data-v-4dc22554"),e=e(),M(),e),Be={class:"doc-content-index"},Fe={class:"content-left"},$e=De((()=>E("div",{class:"content-title"}," Cubeshop ",-1))),He=De((()=>E("div",{class:"content-subTitle"},"面向未来的原生 Web Components UI组件库（UI library based on Web Components）。",-1))),Ue={class:"content-button"},qe=[De((()=>E("div",{class:"leftButtonText"},"开始使用",-1)))],ze=$('<div class="rightButton" data-v-4dc22554><div class="rightButtonText" data-v-4dc22554>扫码体验</div><div class="qrcodepart" data-v-4dc22554><div class="qrcode-text" data-v-4dc22554> 请使用手机扫码体验 </div><div class="qrcode" data-v-4dc22554></div></div></div>',1),We=$('<div class="doc-content-features" data-v-4dc22554><ul class="features-list" data-v-4dc22554><li class="features-item" data-v-4dc22554><p class="features-title" data-v-4dc22554>标准化</p><p class="features-desc a-l" data-v-4dc22554> Web Components 是 w3c web 标准规范，通过 HTML、CSS、JS 来构建原生组件将会成为未来的前端标准。 </p></li><li class="features-item" data-v-4dc22554><p class="features-title" data-v-4dc22554>技术栈无关</p><p class="features-desc a-l" data-v-4dc22554> 基于 Web Components 的跨框架 UI 组件库，输出标准的 Custom Element，组件可以同时在 React、Vue、Preact、Angular 或 原生 JS 等任意框架或无框架中使用。 </p></li><li class="features-item" data-v-4dc22554><p class="features-title" data-v-4dc22554>不依赖第三方库或框架</p><p class="features-desc" data-v-4dc22554> Web Components 可以在不需要引入第三方的库或者框架的情况下通过浏览器的这套 API 创建可复用的组件，也可以和任意与 HTML 交互的 JavaScript 库和框架搭配使用。 </p></li></ul></div>',1),Me={class:"doc-content-features"},Je=De((()=>E("footer",{className:"footer-desc"},[E("div",null,"Copyright © 2021 by allan2coder")],-1)));var Ge=i(Pe,[["render",function(e,t,a,n,s,o){const c=b("doc-header"),r=b("Intro");return k(),C(S,null,[O(c),E("div",{class:T(["doc-content",e.themeName()])},[E("div",Be,[E("div",Fe,[$e,He,E("div",Ue,[E("div",{class:"leftButton",onClick:t[0]||(t[0]=(...t)=>e.toIntro&&e.toIntro(...t))},qe),ze])])]),We,E("div",Me,[O(r)])],2),Je],64)}],["__scopeId","data-v-4dc22554"]]);const Xe=[],Ke={"/src/packages/button/doc.md":()=>m((()=>import("./doc.6761bdb0.js")),["0.0.23/doc.6761bdb0.js","0.0.23/vendor.6d1adbea.js"]),"/src/packages/card/doc.md":()=>m((()=>import("./doc.f59d388c.js")),["0.0.23/doc.f59d388c.js","0.0.23/vendor.6d1adbea.js"]),"/src/packages/demo/doc.md":()=>m((()=>import("./doc.1ab2b19c.js")),["0.0.23/doc.1ab2b19c.js","0.0.23/vendor.6d1adbea.js"]),"/src/packages/dialog/doc.md":()=>m((()=>import("./doc.12927861.js")),["0.0.23/doc.12927861.js","0.0.23/vendor.6d1adbea.js"]),"/src/packages/icon/doc.md":()=>m((()=>import("./doc.8a7dce78.js")),["0.0.23/doc.8a7dce78.js","0.0.23/vendor.6d1adbea.js"]),"/src/packages/input/doc.md":()=>m((()=>import("./doc.250a41e2.js")),["0.0.23/doc.250a41e2.js","0.0.23/vendor.6d1adbea.js"]),"/src/packages/loading/doc.md":()=>m((()=>import("./doc.2425fddb.js")),["0.0.23/doc.2425fddb.js","0.0.23/vendor.6d1adbea.js"]),"/src/packages/steps/doc.md":()=>m((()=>import("./doc.4c8facb9.js")),["0.0.23/doc.4c8facb9.js","0.0.23/vendor.6d1adbea.js"]),"/src/packages/tab/doc.md":()=>m((()=>import("./doc.aec89780.js")),["0.0.23/doc.aec89780.js","0.0.23/vendor.6d1adbea.js"])};for(const ct in Ke){let e=/packages\/(.*)\/doc.md/.exec(ct)[1];Xe.push({path:"/"+e,component:Ke[ct],name:e})}const Qe={"/src/docs/intro.md":()=>m((()=>import("./intro.6749f23c.js")),["0.0.23/intro.6749f23c.js","0.0.23/vendor.6d1adbea.js"]),"/src/docs/start.md":()=>m((()=>import("./start.f01ab2ea.js")),["0.0.23/start.f01ab2ea.js","0.0.23/vendor.6d1adbea.js"]),"/src/docs/theme.md":()=>m((()=>import("./theme.0dadd445.js")),["0.0.23/theme.0dadd445.js","0.0.23/vendor.6d1adbea.js"])};for(const ct in Qe){let e=/docs\/(.*).md/.exec(ct)[1];Xe.push({path:"/"+e,component:Qe[ct],name:e})}const Ye=[{path:"/",name:"/",component:Ge},{path:"/index",name:"index",component:Oe,children:Xe}],Ze=J({history:G(),routes:Ye,scrollBehavior(e){if(e.hash){const t=e.hash.split("#")[1],a=document.getElementById(t);setTimeout((()=>{a&&a.scrollIntoView(!0)}))}}});const et={setup:()=>({onlineFun:function(){alert("hello")}})},tt=(e=>(W("data-v-e2d24818"),e=e(),M(),e))((()=>E("p",{class:"online-part"},[E("a",{href:"//gitpod.io/#https://github.com/allan2coder/csui.git",target:"_blank",class:"online-btn"},"在线运行")],-1)));var at=i(et,[["render",function(e,t,a,n,s,o){return k(),C("div",null,[X(e.$slots,"highlight",{},void 0,!0),X(e.$slots,"default",{},void 0,!0),tt])}],["__scopeId","data-v-e2d24818"]]);const nt={mounted(e){e.addEventListener("mouseover",(()=>{e.style.color="#fa2c19"})),e.addEventListener("mouseleave",(()=>{e.style.color=""}))}};v&&location.replace("demo.html"+location.hash),K(Q).directive("hover",nt).component("demo-block",at).use(Ze).mount("#doc");const st=document.createElement("template");st.innerHTML='<style>\n          *,::after,::before{\n            box-sizing:border-box\n          }\n          :host{\n            contain:content;\n            display:inline-block;\n          }\n          :host img {\n              max-width: 100%;\n              margin-left: 0;\n              margin-right: 0;\n              margin-top: 0;\n              padding-bottom: 0;\n              padding-left: 0;\n              padding-right: 0;\n              padding-top: 0;\n              margin-bottom: 1.75rem;\n          }\n          .toggle {\n              position: relative;\n              touch-action: pan-x;\n              cursor: pointer;\n              background-color: transparent;\n              border: 0;\n              padding: 0;\n              -webkit-touch-callout: none;\n              -webkit-user-select: none;\n              -ms-user-select: none;\n              user-select: none;\n              -webkit-tap-highlight-color: rgba(0,0,0,0);\n              -webkit-tap-highlight-color: transparent;\n          }\n          .toggle .track {\n              width: 50px;\n              height: 24px;\n              padding: 0;\n              border-radius: 30px;\n              background-color: #0f1114;\n              transition: all .2s ease;\n          }\n          .toggle .track .check, .toggle .track .x {\n              position: absolute;\n              width: 17px;\n              height: 17px;\n              top: 15px;\n              bottom: 0;\n              margin-top: auto;\n              margin-bottom: auto;\n              line-height: 0;\n              font-size: 13px;\n          }\n          .toggle .track .check {\n              left: 7px;\n              opacity: 0;\n              transition: opacity .25s ease;\n          }\n          .toggle .track .x {\n              right: 5px;\n          }\n          .toggle.dark .track .check, .toggle.dark .track .x{\n              opacity: 1;\n              transition: opacity .25s ease;\n          }\n          .toggle.dark .track .x {\n              opacity: 0;\n          }\n          .toggle .thumb {\n              position: absolute;\n              top: 1px;\n              left: 1px;\n              width: 22px;\n              height: 22px;\n              border-radius: 50%;\n              background-color: #fafafa;\n              box-sizing: border-box;\n              transition: all .5s cubic-bezier(.23,1,.32,1) 0ms;\n              transform: translateX(0);\n          }\n          .toggle.dark .thumb {\n              transform: translateX(26px);\n              border-color: #19ab27;\n          }\n        </style>\n        <div class="toggle">\n          <div class="track">\n            <div class="check">\n              🌛\n            </div>\n            <div class="x">\n              ☀️\n            </div>\n          </div>\n          <div class="thumb"></div>\n        </div>\n      ';class ot extends HTMLElement{constructor(){super()}connectedCallback(){const e=this.attachShadow({mode:"closed"});e.appendChild(st.content.cloneNode(!0));const t=e.querySelector(".toggle");t.addEventListener("click",(e=>{t.classList.toggle("dark"),t.classList.contains("dark")?function(e){const{width:t,height:a}=document.documentElement.getBoundingClientRect(),n=document.createElement("style");n.id="dark-mode-style",n.innerHTML=`body::after {\n          content: "";\n          position:absolute;\n          top: 0;\n          left: 0;\n          min-height: ${a}px;\n          min-width: ${t}px;\n          pointer-events: none;\n          background: rgb(255, 255, 0, 0.3);\n          z-index: 2;\n          // background: radial-gradient( circle at var(--dark-mode-x, 50%) var(--dark-mode-y, 26px), rgb(255, 255, 0, 0.3), rgb(0, 0, 0, 1) 1200px );\n        }`,document.head.appendChild(n)}():function(){const e=document.querySelector("#dark-mode-style");e.parentNode.removeChild(e)}()}))}}customElements.define("dark-mode",ot);

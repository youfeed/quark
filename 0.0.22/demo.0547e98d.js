import{_ as o}from"./index.bec48952.js";import{e as l,g as t,B as e,C as c,o as n}from"./vendor.773011cc.js";const a={methods:{showDialog(){CsDialog({title:"这是一个标题",content:"支持函数调用、组件调用 2 种方式。",oktext:"确定按钮",canceltext:"取消按钮",onOk:()=>console.log("OK clicked"),onCancel:()=>console.log("Cancel clicked")})},showDialog2(){CsDialog({content:"支持函数调用、组件调用 2 种方式。",oktext:"确定按钮",canceltext:"取消按钮",onOk:()=>console.log("OK clicked"),onCancel:()=>console.log("Cancel clicked")})},showDialog3(){document.getElementById("dialog2").open=!0},showDialog4(){CsDialog({title:"这是一个标题",content:"支持函数调用、组件调用 2 种方式。"})},showDialog4(){}}},s=o=>(e("data-v-6db79a8d"),o=o(),c(),o),i={class:"demo"},d=s((()=>t("h2",null,"函数式调用",-1))),g={class:"demo-buttons"},r=s((()=>t("h2",null,"标签式调用",-1))),h={class:"demo-buttons"},k=s((()=>t("h2",null,"底部按钮展示",-1))),m=s((()=>t("cs-dialog",{id:"dialog2",title:"标签式调用",oktext:"确定",canceltext:"取消"}," 组件调用 ",-1)));var u=o(a,[["render",function(o,e,c,a,s,u){return n(),l("div",i,[d,t("div",g,[t("cs-button",{type:"primary",onClick:e[0]||(e[0]=o=>u.showDialog())},"基础弹窗"),t("cs-button",{type:"primary",onClick:e[1]||(e[1]=o=>u.showDialog2())},"无标题弹窗")]),r,t("div",h,[t("cs-button",{onClick:e[2]||(e[2]=o=>u.showDialog3())},"组件调用")]),k,m])}],["__scopeId","data-v-6db79a8d"]]);export{u as default};

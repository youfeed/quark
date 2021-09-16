import '../loading/cs-loading.mjs';
import '../icon/cs-icon.mjs';

export default class CsButton extends HTMLElement {
    //https://mladenplavsic.github.io/css-ripple-effect
    static get observedAttributes() { return ['disabled','icon','loading','href','htmltype'] }

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
        :host{
            position:relative;
            display:inline-flex;
            padding: .25em .625em;
            box-sizing:border-box;
            vertical-align: middle;
            line-height: 2;
            overflow:hidden;
            align-items:center;
            justify-content: center;
            border:1px solid var(--borderColor,#E1E6EB);
            font-size: 14px;
            color: var(--fontColor,#333);
            border-radius: var(--borderRadius,8px);
            transition:background .3s,box-shadow .3s,border-color .3s,color .3s;
        }
        :host([shape="circle"]){ 
            border-radius:50%;
        }
        :host([disabled]),:host([loading]){
            pointer-events: none; 
            opacity:.6; 
        }
        :host([block]){ 
            display:flex; 
        }
        :host([disabled]:not([type])){ 
            background:rgba(0,0,0,.1); 
        }
        :host([disabled]) .btn,:host([loading]) .btn{ 
            cursor: not-allowed;
            pointer-events: all;
        }
        :host(:not([type="primary"]):not([type="danger"]):focus-within),
        :host([type="flat"][focus]){ 
            color:var(--themeColor,#0088FF); 
            border-color: var(--themeColor,#0088FF); 
        }
        :host([type="primary"]){ 
            color: #fff; 
            background:var(--themeBackground,var(--themeColor,#0088FF));
        }
        :host([type="danger"]){ 
            color: #fff; 
            background:var(--themeBackground,var(--dangerColor,#ff7875));
        }
        :host([type="warning"]){ 
            color: #fff; 
            background:var(--themeBackground,var(--warningColor,#ff9e0d));
        }
        :host([type="info"]){ 
            color: #fff; 
            background:var(--themeBackground,var(--infoColor,#07C160));
        }
        :host([type="dashed"]){ 
            border-style:dashed 
        }
        :host([type="flat"]),:host([type="primary"]),:host([type="danger"]){ 
            border:0;
            padding: calc( .25em + 1px ) calc( .625em + 1px );
        }
        :host([type="flat"]) .btn::before{ 
            content:''; 
            position:absolute; 
            background:var(--themeColor,#0088FF);
            pointer-events:none; 
            left:0; 
            right:0; 
            top:0; 
            bottom:0; 
            opacity:0; 
            transition:.3s;
        }
        :host([type="flat"]:focus-within) .btn:before,
        :host([type="flat"][focus]) .btn:before{ 
            opacity:.2; 
        }
        .btn{ 
            background:none; 
            outline:0; 
            border:0; 
            position: 
            absolute; 
            left:0; 
            top:0;
            width:100%;
            height:100%;
            padding:0;
            user-select: none;
            cursor: unset;
        }
        cs-loading{ 
            margin-right: 0.35em;  
        }
        ::-moz-focus-inner{
            border:0;
        }
        :host(:not([disabled]):active) .btn::before{ 
            opacity:.2;
        }
        .btn:not([disabled]):active::after {
            transform: translate(-50%,-50%) scale(0);
            opacity: .3;
            transition: 0s;
        }
        cs-icon{
            margin-right: 0.35em;
            transition: none;
        }
        :host(:empty) cs-icon{
            margin: auto;
        }
        :host(:empty){
            padding: .65em;
        }
        :host([type="flat"]:empty),:host([type="primary"]:empty){ 
            padding: calc( .65em + 1px );
        }
        ::slotted(cs-icon){
            transition: none;
        }
        :host([href]){
            cursor:pointer;
        }
        </style>
        <${this.href?'a':'button'} ${this.htmltype?'type="'+this.htmltype+'"':''} ${(this.download&&this.href)?'download="'+this.download+'"':''} ${this.href?'href="'+this.href+'" target="'+this.target+'" rel="'+this.rel+'"':''} class="btn" id="btn"></${this.href?'a':'button'}>${!this.loading && this.icon && this.icon!='null'?'<cs-icon id="icon" name='+this.icon+'></cs-icon>':''}<slot></slot>
        `
    }

    focus() {
        this.btn.focus();
    }

    get disabled() {
        return this.getAttribute('disabled')!==null;
    }

    get htmltype() {
        return this.getAttribute('htmltype');
    }

    get name() {
        return this.getAttribute('name');
    }

    get checked() {
        return this.getAttribute('checked')!==null;
    }

    get href() {
        return this.getAttribute('href');
    }

    get target() {
        return this.getAttribute('target')||'_blank';
    }

    get rel() {
        return this.getAttribute('rel');
    }

    get download() {
        return this.getAttribute('download');
    }

    get icon() {
        return this.getAttribute('icon');
    }

    get loading() {
        return this.getAttribute('loading')!==null;
    }

    set icon(value) {
        this.setAttribute('icon', value);
    }

    set htmltype(value) {
        this.setAttribute('htmltype', value);
    }

    set href(value) {
        this.setAttribute('href', value);
    }

    set disabled(value) {
        if(value===null||value===false){
            this.removeAttribute('disabled');
        }else{
            this.setAttribute('disabled', '');
        }
    }

    set checked(value) {
        if(value===null||value===false){
            this.removeAttribute('checked');
        }else{
            this.setAttribute('checked', '');
        }
    }

    set loading(value) {
        if(value===null||value===false){
            this.removeAttribute('loading');
        }else{
            this.setAttribute('loading', '');
        }
    }

    connectedCallback() {
        this.btn = this.shadowRoot.getElementById('btn');
        this.ico = this.shadowRoot.getElementById('icon');
        this.load = document.createElement('cs-loading');
        this.load.style.color = 'inherit';
        this.btn.addEventListener('mousedown',function(ev){
            //ev.preventDefault();
            //ev.stopPropagation();
            if(!this.disabled){
                const { left, top } = this.getBoundingClientRect();
                this.style.setProperty('--x',(ev.clientX - left)+'px');
                this.style.setProperty('--y',(ev.clientY - top)+'px');
            }
        })
        this.disabled = this.disabled;
        this.loading = this.loading;
    }

    attributeChangedCallback (name, oldValue, newValue) {
        if(name == 'disabled' && this.btn){
            if(newValue!==null){
                this.btn.setAttribute('disabled', 'disabled');
                if(this.href){
                    this.btn.removeAttribute('href');
                }
            }else{
                this.btn.removeAttribute('disabled');
                if(this.href){
                    this.btn.href = this.href;
                }
            }
        }
        if( name == 'loading' && this.btn){
            if(newValue!==null){
                this.shadowRoot.prepend(this.load);
                this.btn.setAttribute('disabled', 'disabled');
            }else{
                this.shadowRoot.removeChild(this.load);
                this.btn.removeAttribute('disabled');
            }
        }
        if( name == 'icon' && this.ico){
            this.ico.name = newValue;
        }
        if( name == 'href' && this.btn){
            if(!this.disabled){
                this.btn.href = newValue;
            }
        }
        if( name == 'htmltype' && this.btn){
            this.btn.type = newValue;
        }
    }
}

if(!customElements.get('cs-button')){
    customElements.define('cs-button', CsButton);
}

class CsButtonGroup extends HTMLElement {
    static get observedAttributes() { return ['disabled'] }
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
        :host {
            display:inline-flex;
        }
        ::slotted(cs-button:not(:first-of-type):not(:last-of-type)){
            border-radius:8px;
        }
        ::slotted(cs-button){
            margin:0!important;
        }
        ::slotted(cs-button:not(:first-of-type)){
            margin-left:-1px!important;
        }
        ::slotted(cs-button[type]:not([type="dashed"]):not(:first-of-type)){
            margin-left:1px!important;
        }
        ::slotted(cs-button:first-of-type){
            border-top-right-radius: 0;
            border-bottom-right-radius: 0px;
        }
        ::slotted(cs-button:last-of-type){
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
        </style>
        <slot></slot>
        `
    }


    get disabled() {
        return this.getAttribute('disabled')!==null;
    }

    set disabled(value) {
        if(value===null||value===false){
            this.removeAttribute('disabled');
        }else{
            this.setAttribute('disabled', '');
        }
    }

    connectedCallback() {
        
    }

    attributeChangedCallback (name, oldValue, newValue) {
        
    }
}

if(!customElements.get('cs-button-group')){
    customElements.define('cs-button-group', CsButtonGroup);
}
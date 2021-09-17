import '../loading/cs-loading.mjs';
import '../icon/cs-icon.mjs';

export default class CsButton extends HTMLElement {
    static get observedAttributes() { return ['disabled','icon','loading','href'] }

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
        :host{
            position:relative;
            display:inline-flex;
            align-items:center;
            vertical-align: middle;
            justify-content: center;
            padding: .25em .625em;
            box-sizing:border-box;
            height: 38px;
            overflow:hidden;
            border:1px solid var(--borderColor,#E1E6EB);
            font-size: 14px;
            border-radius: var(--borderRadius,8px);
            background:#fff;
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
        :host([type="primary"]){ 
            color: #fff; 
            background:var(--themeColor,#0088FF);
        }
        :host([type="danger"]){
            color: #fff; 
            background:var(--dangerColor,#F72626);
        }
        :host([type="warning"]){ 
            color: #fff; 
            background:var(--warningColor,#FB990F);
        }
        :host([type="info"]){ 
            color: #fff; 
            background:var(--infoColor,#07C160);
        }
        :host([type="primary"]),:host([type="danger"]){ 
            border:0;
            padding: calc( .25em + 1px ) calc( .625em + 1px );
        }
        :host([color="${this.color}"]){ 
            background:${this.color};
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
        ::slotted(cs-icon){
            transition: none;
        }
        :host([href]){
            cursor:pointer;
        }
        </style>
        <${this.href?'a':'button'} ${(this.download&&this.href)?'download="'+this.download+'"':''} ${this.href?'href="'+this.href+'" target="'+this.target+'" rel="'+this.rel+'"':''} class="btn" id="btn"></${this.href?'a':'button'}>${!this.loading && this.icon && this.icon!='null'?'<cs-icon id="icon" name='+this.icon+'></cs-icon>':''}<slot></slot>
        `
    }

    focus() {
        this.btn.focus();
    }

    get disabled() {
        return this.getAttribute('disabled')!==null;
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

    get color() {
        return this.getAttribute('color');
    }

    get loading() {
        return this.getAttribute('loading') !== null;
    }

    set icon(value) {
        this.setAttribute('icon', value);
    }

    set href(value) {
        this.setAttribute('href', value);
    }

    set disabled(value) {
        if(value === null || value === false){
            this.removeAttribute('disabled');
        }else{
            this.setAttribute('disabled', '');
        }
    }

    set checked(value) {
        if(value === null || value === false){
            this.removeAttribute('checked');
        }else{
            this.setAttribute('checked', '');
        }
    }

    set loading(value) {
        if(value === null || value === false){
            this.removeAttribute('loading');
        }else{
            this.setAttribute('loading', '');
        }
    }

    connectedCallback() {
        this.btn = this.shadowRoot.getElementById('btn');
        this.icon = this.shadowRoot.getElementById('icon');
        this.load = document.createElement('cs-loading');
        this.load.style.color = 'inherit';
        // this.btn.addEventListener('mousedown',function(ev){
        //     //ev.preventDefault();
        //     //ev.stopPropagation();
        //     if(!this.disabled){
        //         const { left, top } = this.getBoundingClientRect();
        //         this.style.setProperty('--x',(ev.clientX - left)+'px');
        //         this.style.setProperty('--y',(ev.clientY - top)+'px');
        //     }
        // })
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
        if( name == 'href' && this.btn){
            if(!this.disabled){
                this.btn.href = newValue;
            }
        }
    }
}

if(!customElements.get('cs-button')){
    customElements.define('cs-button', CsButton);
}

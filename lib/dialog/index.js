import '../button/index.js';

class CsDialog extends HTMLElement {
  static get observedAttributes() {
    return ['open', 'title', 'content', 'oktext', 'canceltext', 'loading'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({
      mode: 'open'
    });
    shadowRoot.innerHTML = `
        <style>
        :host{
            position:fixed;
            display:flex;
            left:0;
            top:0;
            right:0;
            bottom:0;
            z-index:-1;
            background:rgba(0,0,0,.3);
            visibility:hidden;
            opacity:0;
            transition:.3s;
        }
        :host([open]){
            opacity:1;
            z-index:50;
            visibility:visible;
        }
        .dialog {
            display:flex;
            position:relative;
            margin:auto;
            box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
            box-sizing: border-box;
            max-width: calc(100vw - 20px);
            max-height: calc(100vh - 20px);
            border-radius: 8px;
            background-color: #fff;
            opacity:0;
            transform:scale(0.5);
            transition:.3s cubic-bezier(.645, .045, .355, 1);
        }
        .dialog-content{
            box-sizing: border-box;
            display:flex;
            width: 100%;
            padding:0 20px;
            flex:1;
            flex-direction:column;
        }
        :host([open]) .dialog{
            opacity:1;
            transform:scale(1);
        }
        .dialog-title {
            line-height: 30px;
            padding-top: 24px;
            font-weight: 700;
            font-size: 18px;
            color: #4c5161;
            text-align: center;
        }
        .dialog-body {
            flex: 1;
            overflow: auto;
            padding: 10px 0 20px;
            font-size: 14px;
            color: #5A6066;
        }
        .dialog-footer {
            padding-bottom: 24px;
        }
        .btn-close{
            position: absolute;
            right: 0px;
            top: 0px;
            border: 0;
            color: #BCC4CC;
            font-size: 20px;
            padding: 0;
        }
        .dialog-footer cs-button {
            min-width: 140px;
            // width: 100%;
        }
        #btn-cancel{
            // visibility:hidden;
            // display: none;
        }
        :host(:empty) .dialog-body{
            min-height:0;
        }
        </style>
        <div class="dialog">
            <div class="dialog-content">
                <div class="dialog-title" id="title"></div>
                <cs-button class="btn-close" id="btn-close" icon="close"></cs-button>
                <div class="dialog-body">
                    <slot></slot>
                </div>
                <div class="dialog-footer" id="dialog-footer">
                    <cs-button id="btn-cancel"></cs-button>
                    <cs-button id="btn-submit" type="primary"></cs-button>
                </div>
            </div>
        </div>
        `;
  }

  get open() {
    return this.getAttribute('open') !== null;
  }

  get title() {
    return this.getAttribute('title');
  }

  get type() {
    return this.getAttribute('type');
  }

  get oktext() {
    return this.getAttribute('oktext');
  }

  get canceltext() {
    console.log(this.getAttribute('canceltext'), 8877);
    return this.getAttribute('canceltext');
  }

  get loading() {
    return this.getAttribute('loading') !== null;
  }

  set title(value) {
    this.setAttribute('title', value);
  }

  set type(value) {
    this.setAttribute('type', value);
  }

  set oktext(value) {
    this.setAttribute('oktext', value);
  }

  set canceltext(value) {
    console.log(value, 88);
    this.setAttribute('canceltext', value);
  }

  set open(value) {
    if (value === null || value === false) {
      this.removeAttribute('open');
    } else {
      this.setAttribute('open', '');
      this.loading && (this.loading = false);
    }
  }

  set loading(value) {
    if (value === null || value === false) {
      this.removeAttribute('loading');
    } else {
      this.setAttribute('loading', '');
    }
  } // custom element 增加、删除或者修改某个属性时被调用


  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, 22);

    if (name == 'open' && this.shadowRoot) {
      if (newValue !== null) {
        this.btnActive = document.activeElement;
      }
    }

    if (name == 'title') {
      if (newValue !== null) {
        this.shadowRoot.getElementById('title').innerText = newValue;
      }
    }

    if (name == 'oktext') {
      if (newValue !== null) {
        this.shadowRoot.getElementById('btn-submit').innerText = newValue; // this.btnSubmit.textContent = newValue;
      }
    }

    if (name == 'canceltext') {
      if (newValue !== null) {
        this.shadowRoot.getElementById('btn-cancel').innerText = newValue; // this.btnCancel.textContent = newValue;
      }
    }
  }

  connectedCallback() {
    this.remove = false;
    this.autoclose = true;
    this.btnClose = this.shadowRoot.getElementById('btn-close');
    this.btnCancel = this.shadowRoot.getElementById('btn-cancel');
    this.btnSubmit = this.shadowRoot.getElementById('btn-submit');
    console.log(this.oktext, this.calcelText, 22222); // 无取消按钮
    // if(!this.calcelText) {
    //     this.btnCancel.remove();
    //     this.shadowRoot.getElementById('dialog-footer').style.display = 'grid';
    // }
    // // 无按钮
    // if(!this.oktext) {
    //     this.btnSubmit.remove();
    //     this.shadowRoot.getElementById('dialog-footer').style.display = 'none';
    // }

    this.clientWidth;
    this.shadowRoot.addEventListener('transitionend', ev => {
      if (ev.propertyName === 'transform' && this.open) {
        this.btnSubmit.focus();
      }

      if (ev.propertyName === 'transform' && !this.open) {
        if (this.remove) {
          document.body.removeChild(this);
        } // 创建自定义对象 onclose
        // this.dispatchEvent(new CustomEvent('close'));


        this.btnActive && this.btnActive.focus();
      }
    });
    this.addEventListener('wheel', ev => {
      ev.preventDefault();
    });
    this.btnClose.addEventListener('click', () => {
      this.open = false;
    }); // 自定义取消事件 dialog.oncancel

    this.btnCancel.addEventListener('click', async () => {
      this.dispatchEvent(new CustomEvent('cancel'));
      this.open = false;
    }); // 自定义确认事件 dialog.onsubmit

    this.btnSubmit.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('submit'));

      if (!this.loading && this.autoclose) {
        this.open = false;
      }
    });
  }

} // 标签调用


if (!customElements.get('cs-dialog')) {
  customElements.define('cs-dialog', CsDialog);
} // 函数调用


export default function () {
  const dialog = new CsDialog();
  document.body.appendChild(dialog);
  dialog.remove = true;

  if (typeof arguments[0] === 'object') {
    const {
      title = '',
      content = '',
      oktext = '确定',
      canceltext = '取消',
      onOk,
      onCancel
    } = Array.prototype.slice.call(arguments)[0];
    dialog.title = title;
    dialog.innerHTML = content || '';
    dialog.oktext = oktext;
    dialog.canceltext = canceltext;
    dialog.onsubmit = onOk;
    dialog.oncancel = onCancel;
  }

  dialog.open = true;
  return dialog;
}
//# sourceMappingURL=index.js.map
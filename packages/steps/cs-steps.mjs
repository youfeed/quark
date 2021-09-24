export default class CsStep extends HTMLElement {
  static get observedAttributes() { return ['status', 'title', 'content']; }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
        <style>
          :host {
            display: flex;
            align-items: center;
            // width: 450px;
            // height: 180px;
            padding: 10px;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
          }
          .cs-step {
            flex: 1;
            text-align: center;
            font-size: 0;
          }

          .cs-steps-vertical {
            height: 100%;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-flow: column;
            flex-flow: column;
          }

          .cs-steps-vertical .cs-step {
            display: flex;
            height: 33.34%;
          }

          .cs-step-head {
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            margin-bottom: 12px;
          }

          .cs-step-line {
            position: absolute;
            top: 11px;
            left: 50%;
            right: -50%;
            display: inline-block;
            height: 1px;
            background: #909ca4;
          }

          .cs-steps-vertical .cs-step-line {
            position: absolute;
            display: inline-block;
            width: 1px;
            height: 100%;
            background: #909ca4;
            background-image:
              repeating-linear-gradient(
                0deg,
                #fff,
                #fff 1px,
                #08f 1px,
                #08f 2px
              );
          }

          .cs-step.cs-step-finish .cs-step-head {
            color: #fa2c19;
            border-color: #fa2c19;
          }

          .cs-step.cs-step-finish .cs-step-line {
            background: #fa2c19;
            background-image:
              repeating-linear-gradient(
                0deg,
                #fff,
                #fff 1px,
                #08f 1px,
                #08f 2px
              );
          }

          .cs-step-icon {
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 25px;
            height: 25px;
            line-height: 25px;
            font-size: 13px;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            z-index: 1;
          }

          .cs-step-icon.is-text {
            border-radius: 50%;
            border-width: 1px;
            border-style: solid;
            background: #fff;
          }

          .cs-step.cs-step-finish .cs-step-icon.is-text {
            background-color: #fff;
          }

          .cs-step-main {
            display: inline-block;
            padding-left: 10%;
            padding-right: 10%;
            text-align: center;
          }

          .cs-steps-vertical .cs-step-main {
            display: inline-block;
            padding-left: 6%;
            text-align: left;
          }

          .cs-step-title {
            display: block;
            margin-bottom: 10px;
            font-size: 14px;
            color: #909ca4;
          }

          .cs-step.cs-step-finish .cs-step-title {
            color: #fa2c19;
          }

          .cs-step-content {
            display: block;
            font-size: 14px;
            color: #666;
          }

          .cs-step.cs-step-process .cs-step-head {
            color: #fff;
            border-color: #fa2c19;
          }

          .cs-step.cs-step-wait .cs-step-head {
            color: #909ca4;
            border-color: #909ca4;
          }

          .cs-step.cs-step-process .cs-step-icon.is-text {
            background-color: #fa2c19;
          }

          .cs-step:last-child .cs-step-line {
            display: none;
          }
        </style>
        <div class="cs-steps cs-steps-vertical">
          <slot></slot>
          ${
            this.status !== 'doing' &&
            '<div class="cs-step cs-step-process"><div class="cs-step-head"><div class="cs-step-line"></div><div class="cs-step-icon is-text"><div class="cs-step-inner"><slot></slot></div></div></div><div class="cs-step-main"><div class="cs-step-title"></div><div class="cs-step-content">您的订单正在配送途中</div></div></div>'
          }
        </div>
        `;
  }

  get status() {
    return this.getAttribute('status');
  }

  get title() {
    return this.getAttribute('title');
  }

  get content() {
    return this.getAttribute('content');
  }

  set status(value) {
    console.log(value);
    this.setAttribute('status', value);
  }

  set title(value) {
    this.setAttribute('title', value);
  }

  set content(value) {
    this.setAttribute('content', value);
  }


  connectedCallback() {
    // this.btn = this.shadowRoot.getElementById('btn');

  }

  attributeChangedCallback(name, oldValue, newValue) {
    // if (name == 'loading' && this.btn) {
    //   if (newValue !== null) {
    //     this.shadowRoot.prepend(this.load);
    //     this.btn.setAttribute('disabled', 'disabled');
    //   }
    // }
    // if (name == 'href' && this.btn) {
    //   if (!this.disabled) {
    //     this.btn.href = newValue;
    //   }
    // }
  }
}

if (!customElements.get('cs-step')) {
  customElements.define('cs-step', CsStep);
}

class CsCard extends HTMLElement {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  static get observedAttributes() { return ['title','content','cash','status'] }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
      :host {
        display: flex;
        align-items: center;
        height: 180px;
        background-color: #d4d4d4;
        border: 1px solid #d5d5d5;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        overflow: hidden;
        padding: 10px;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
      }
  
      .card-container {
        box-sizing: border-box;
        padding: 20px;
        height: 160px;
      }
      .card-container > .name {
        font-size: 20px;
        font-weight: 600;
        line-height: 1;
        margin: 0;
        margin-bottom: 5px;
      }
      .card-container > .email {
        font-size: 12px;
        opacity: 0.75;
        line-height: 1;
        margin: 0;
        margin-bottom: 15px;
      }
      .card-container > .button {
        padding: 10px 25px;
        font-size: 12px;
        border-radius: 5px;
        text-transform: uppercase;
      }
    </style>
  
    <div class="card-container" id="card">
      // <div id="title">${this.title}</div>
      <p id="title"></p>
    </div>
    `
  }

  get title() {
    return this.getAttribute('title');
  }

  get content() {
    return this.getAttribute('content');
  }

  get cash() {
    return this.getAttribute('cash');
  }
  
  get footerText() {
    return this.getAttribute('footerText');
  }

  // set title(value) {
  //   this.setAttribute('title', value);
  // }

  // 首次挂载 dom
  connectedCallback() {
    // this.card = this.shadowRoot.getElementById('card');
    // this.title = this.shadowRoot.getElementById('title');
    // this.content = this.shadowRoot.getElementById('content');
    // this.cash = this.shadowRoot.getElementById('cash');
    // this.footerText = this.shadowRoot.getElementById('footerText');
    // const shadowRoot = this.attachShadow({ mode: 'open' });
    // shadowRoot.appendChild(template.content.cloneNode(true));
    
    // 设置外来参数
    // shadowRoot.querySelector('img').setAttribute('src', this.getAttribute('image'));
    this.shadowRoot.querySelector('#title').innerText = this.getAttribute('title');
    // shadowRoot.querySelector('.email').innerText = this.getAttribute('email');
    
    // 选择
    // 添加事件
    // shadowRoot.querySelector('button').addEventListener('click', (e) => {
    //   // do something
    //   alert('click !');
    // });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    
    // if(!this.card) return;

    // if(name === 'title') {
    //   if(newValue !== null) {
    //     console.log(this.title);
    //     this.title.innerHTML = newValue;
    //   }
    // }
    
    // if(name === 'content') {
    //   if(newValue !== null) {
    //     this.content.innerText = newValue;
    //   }
    // }
    
    // if(name === 'cash') {
    //   if(newValue !== null) {
    //     this.cash.innerText = newValue;
    //   }
    // }
    
    // if(name === 'footerText') {
    //   if(newValue !== null) {
    //     this.footerText.innerText = newValue;
    //   }
    // }

  }
}

if (!customElements.get('cs-card')) {
  customElements.define('cs-card', CsCard);
}

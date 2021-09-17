class CsCard extends HTMLElement {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  static get observedAttributes() { return ['title','content','cash','desc'] }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
      :host {
        display: flex;
        height: 138px;
        background-color: #fff;
        border-radius: 4px;
        overflow: hidden;
        padding: 20px;
      }
      .card-container {
        width: 100%;
        font-size: 14px;
      }
      .card-container .title {
        color: #999;
        margin-bottom: 10px;
      }
      .card-container .cash {
        color: #333;
        font-size: 15px;
        text-align: right;
      }
      .card-body{
        display: grid;
        grid-template-columns: 1fr 80px;
        border-bottom: 1px solid #eee;
        padding-bottom: 1.1rem;
      }
      .card-container .content {
        color: #666666;
      }
      .card-container .desc {
        color: #999;
        padding-top: 14px;
      }
    </style>
  
    <div class="card-container" id="card">
      <div class="title" id="title">${this.title || ''}</div>
      <div class="card-body">
        <div class="content" id="content">${this.content || ''}</div>
        <div class="cash" id="cash">${this.cash || ''}</div>
      </div>
      <div class="desc" id="desc">${this.desc || ''}</div>
    </div>
    `
  }

  get title() {
    return this.getAttribute('title');
  }
  get content() {
    return this.getAttribute('content');
  }
  get desc() {
    return this.getAttribute('desc');
  }
  get cash() {
    return this.getAttribute('cash');
  }

  set title(value) {
    return this.setAttribute('title', value);
  }
  set desc(value) {
    return this.setAttribute('desc', value);
  }
  set content(value) {
    return this.setAttribute('content', value);
  }
  set cash(value) {
    return this.setAttribute('cash', value);
  }

  // 属性 change
  attributeChangedCallback(name, oldValue, newValue) {
    if(name === 'title') {
      if(newValue !== null) {
        this.shadowRoot.getElementById('title').innerText = newValue;
      }
    }
    if(name === 'content') {
      if(newValue !== null) {
        this.shadowRoot.getElementById('content').innerText = newValue;
      }
    }
    if(name === 'cash') {
      if(newValue !== null) {
        this.shadowRoot.getElementById('cash').innerText = newValue;
      }
    }
    if(name === 'desc') {
      if(newValue !== null) {
        this.shadowRoot.getElementById('desc').innerText = newValue;
      }
    }
  }

  // 首次挂载 dom
  connectedCallback() {
    console.log(this.desc, 877);;
  }
}

if (!customElements.get('cs-card')) {
  customElements.define('cs-card', CsCard);
}

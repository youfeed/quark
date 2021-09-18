class CsXx extends HTMLElement {
static get observedAttributes() { return ['title'] }

constructor() {
  super();
  const shadowRoot = this.attachShadow({ mode: 'open' });
  shadowRoot.innerHTML = '';
}

get title() {
  return this.getAttribute('title');
}

set title(value) {
  return this.setAttribute('title', value);
}

attributeChangedCallback(name, oldValue, newValue) {
  if(name === 'title') {
    if(newValue !== null) {
      this.shadowRoot.getElementById('title').innerText = newValue;
    }
  }
}

connectedCallback() {}
}

if (!customElements.get('cs-xx')) {
customElements.define('cs-xx', CsXx);
}    
  
export default class CsIcon extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'size', 'color'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({
      mode: 'open'
    });
    shadowRoot.innerHTML = `
			<style>
			:host{
				font-size:inherit;
				display:inline-block;
				transition:.3s;
			}
			.icon {
				display:block;
				width: 1em;
				height: 1em;
				margin: auto;
				fill: currentColor;
				overflow: hidden;
			}
			</style>
			<svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">
				<use id="use"></use>
			</svg>
		`;
  }

  get name() {
    return this.getAttribute('name');
  }

  set name(value) {
    this.setAttribute('name', value);
  }

  get size() {
    return this.getAttribute('size') || '';
  }

  get color() {
    return this.getAttribute('color') || '';
  }

  set size(value) {
    this.setAttribute('size', value);
  }

  set color(value) {
    this.setAttribute('color', value);
  }

  connectedCallback() {
    this.icon = this.shadowRoot.getElementById('icon');
    this.use = this.icon.querySelector('use');
    this.size && (this.size = this.size);
    this.color && (this.color = this.color);
    this.name && (this.name = this.name);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == 'name' && this.use) {
      this.use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', `./iconfont/icon.svg#icon-${newValue}`);
    }

    if (name == 'color' && this.icon) {
      this.icon.style.color = newValue;
    }

    if (name == 'size' && this.icon) {
      this.icon.style.fontSize = newValue + 'px';
    }
  }

}

if (!customElements.get('cs-icon')) {
  customElements.define('cs-icon', CsIcon);
}
//# sourceMappingURL=cs-icon.js.map
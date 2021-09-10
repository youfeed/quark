const template = document.createElement('template');
template.innerHTML = `
  <style>
   :host {
     display: flex;
     align-items: center;
     width: 450px;
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
   .image {
     flex: 0 0 auto;
     width: 160px;
     height: 160px;
     vertical-align: middle;
     border-radius: 5px;
   }
   .container {
     box-sizing: border-box;
     padding: 20px;
     height: 160px;
   }
   .container > .name {
     font-size: 20px;
     font-weight: 600;
     line-height: 1;
     margin: 0;
     margin-bottom: 5px;
   }
   .container > .email {
     font-size: 12px;
     opacity: 0.75;
     line-height: 1;
     margin: 0;
     margin-bottom: 15px;
   }
   .container > .button {
     padding: 10px 25px;
     font-size: 12px;
     border-radius: 5px;
     text-transform: uppercase;
   }
  </style>

  <img class="image">
  <div class="container">
    <p class="name"></p>
    <p class="email"></p>
    <button class="button">Follow</button>
  </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();

  }

  // 首次挂载 dom
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
    
    // 设置外来参数
    shadowRoot.querySelector('img').setAttribute('src', this.getAttribute('image'));
    shadowRoot.querySelector('.name').innerText = this.getAttribute('name');
    shadowRoot.querySelector('.email').innerText = this.getAttribute('email');
    
    // 选择
    // 添加事件
    shadowRoot.querySelector('button').addEventListener('click', (e) => {
      // do something
      alert('click !');
    });
  }
}

if (!customElements.get('user-card')) {
  customElements.define('user-card', UserCard);
}

"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var CsCard = /*#__PURE__*/function (_HTMLElement) {
  (0, _inheritsLoose2["default"])(CsCard, _HTMLElement);

  function CsCard() {
    var _this;

    _this = _HTMLElement.call(this) || this;

    var shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    shadowRoot.innerHTML = "\n      <style>\n      :host {\n        display: flex;\n        height: 138px;\n        background-color: #fff;\n        border-radius: 4px;\n        overflow: hidden;\n        padding: 20px;\n        box-sizing: border-box;\n      }\n      .card-container {\n        width: 100%;\n        font-size: 14px;\n      }\n      .card-container .title {\n        color: #999;\n        margin-bottom: 10px;\n      }\n      .card-body{\n        display: grid;\n        grid-template-columns: 1fr 80px;\n        border-bottom: 1px solid #eee;\n        padding-bottom: 1.1rem;\n      }\n      .card-container .content {\n        color: #666666;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n      }\n      .card-container .cash {\n        color: #333;\n        font-size: 15px;\n        text-align: right;\n      }\n      .card-container .desc {\n        color: #999;\n        padding-top: 14px;\n      }\n    </style>\n  \n    <div class=\"card-container\" id=\"card\">\n      <div class=\"title\" id=\"title\"></div>\n      <div class=\"card-body\">\n        <div class=\"content\" id=\"content\"></div>\n        <div class=\"cash\" id=\"cash\"></div>\n      </div>\n      <div class=\"desc\" id=\"desc\"></div>\n    </div>\n    ";
    return _this;
  }

  var _proto = CsCard.prototype;

  // 属性 change
  _proto.attributeChangedCallback = function attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') {
      if (newValue !== null) {
        this.shadowRoot.getElementById('title').innerText = newValue;
      }
    }

    if (name === 'content') {
      if (newValue !== null) {
        this.shadowRoot.getElementById('content').innerText = newValue;
      }
    }

    if (name === 'cash') {
      if (newValue !== null) {
        this.shadowRoot.getElementById('cash').innerText = newValue;
      }
    }

    if (name === 'desc') {
      if (newValue !== null) {
        this.shadowRoot.getElementById('desc').innerText = newValue;
      }
    }
  } // 首次挂载 dom
  ;

  _proto.connectedCallback = function connectedCallback() {};

  (0, _createClass2["default"])(CsCard, [{
    key: "title",
    get: function get() {
      return this.getAttribute('title');
    },
    set: function set(value) {
      return this.setAttribute('title', value);
    }
  }, {
    key: "content",
    get: function get() {
      return this.getAttribute('content');
    },
    set: function set(value) {
      return this.setAttribute('content', value);
    }
  }, {
    key: "desc",
    get: function get() {
      return this.getAttribute('desc');
    },
    set: function set(value) {
      return this.setAttribute('desc', value);
    }
  }, {
    key: "cash",
    get: function get() {
      return this.getAttribute('cash');
    },
    set: function set(value) {
      return this.setAttribute('cash', value);
    }
  }], [{
    key: "observedAttributes",
    get: // Specify observed attributes so that
    // attributeChangedCallback will work
    function get() {
      return ['title', 'content', 'cash', 'desc'];
    }
  }]);
  return CsCard;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(HTMLElement));

exports["default"] = CsCard;

if (!customElements.get('cs-card')) {
  customElements.define('cs-card', CsCard);
}
//# sourceMappingURL=index.js.map
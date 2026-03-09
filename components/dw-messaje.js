import { LitElement, html, css } from "lit";
import { ref } from "lit/directives/ref.js";

class DwMessaje extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px solid #000;
      padding: 10px;
    }
    div {
      display: none;
      background-color: #daafeb;
    }
    p {
      margin-bottom: 0;
    }
    :host([show]) div {
      display: block;
    }
  `;

  static properties = {
    msg: { type: String, attribute: "message", state: false },
    show: { type: Boolean, reflect: true },
  };
  constructor() {
    super();
    this.msg = "Bienvenidos a este componente de Lit";
    this.show = false;
  }
  render() {
    return html`
      <div>${this.msg}</div>
      <button @click=${this.toogle}>
        ${this.show ? "Ocultar" : "Mostrar"}
      </button>
    `;
  }
  toogle() {
    this.show = !this.show;
  }
}

customElements.define("dw-messaje", DwMessaje);

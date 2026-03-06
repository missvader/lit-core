import { LitElement, html, css } from "lit";

class DwMessaje extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px solid #000;
      padding: 10px;
    }
    div {
      background-color: #daafeb;
    }
    p {
      margin-bottom: 0;
    }
  `;

  static properties = {
    msg: { type: String },
  };
  constructor() {
    super();
    this.msg = "Bienvenidos a este componente de Lit";
  }
  render() {
    return html`
      <div>${this.msg}</div>
      <p><b>Esto tambien forma parte del componente </b></p>
      <button @click=${this.changeMsg}>Click!!</button>
    `;
  }
  changeMsg() {
    this.msg = "El mensaje ha cambiado";
  }
}

customElements.define("dw-messaje", DwMessaje);

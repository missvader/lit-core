import { LitElement, html, css } from "lit";

export class EitShowClick extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  static properties = {
    clientX: { type: Number },
    clientY: { type: Number },
  };
  constructor() {
    super();
    this.clientX = 0;
    this.clientY = 0;
    this.clickHandler = this.showClickPosition.bind(this);
  }
  connectedCallback() {
    super.connectedCallback();
    console.log("connectedCallback ejecutado");
    document.addEventListener("click", this.clickHandler);
  }
  firstUpdated() {
    // Este método se llama cuando el component se renderiza por primera vez
    console.log(this.clientX, this.clientY);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    console.log("disconnectedCallback ejecutado");
    document.removeEventListener("click", this.clickHandler);
  }
  updated(changedProperties) {
    // Este método se llama cada vez que se actualizan las propiedades del componente, e informa de lo que ha cambiado
    if (changedProperties.has("clientX")) {
      console.log("clientX actualizado:", this.clientX);
    }
  }
  render() {
    return html` <p>Click en ${this.clientX}, ${this.clientY}</p> `;
  }
  showClickPosition(e) {
    this.clientX = e.clientX;
    this.clientY = e.clientY;
  }
}
customElements.define("eit-show-click", EitShowClick);

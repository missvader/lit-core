import { LitElement, html, css } from "lit";
import "@dile/ui/components/menu-overlay/menu-overlay.js";

export class EitMenuOverlay extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        position: relative;
      }
      .overlay {
        display: none;
        position: absolute;
        background-color: beige;
        padding: 1rem;
        border: 1px solid #ddd;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        width: 250px;
      }
      .opened {
        display: block;
      }
      ::slotted(div) {
        font-family: sans-serif;
      }
    `,
  ];
  static properties = {
    open: { type: Boolean },
  };

  constructor() {
    super();
    this.open = false;
    this.documentCloseHandler = this.closeMenu.bind(this);
  }
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("click", this.documentCloseHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this.documentCloseHandler);
  }

  render() {
    return html`
      <span @click=${this.toggle}>
        <slot name="trigger"></slot>
      </span>
      <div class="overlay ${this.open ? "opened" : ""}">
        <slot name="menu"></slot>
      </div>
    `;
  }

  toggle(e) {
    this.open = !this.open;
    e.stopPropagation();
    e.preventDefault();
  }

  closeMenu() {
    this.open = false;
  }
}
customElements.define("eit-menu-overlay", EitMenuOverlay);

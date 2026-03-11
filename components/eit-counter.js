import { LitElement, html, css } from "lit";
import { ref } from "lit/directives/ref.js";

export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      input {
        width: 50px;
        font-size: 1em;
        padding: 0.3em;
      }
    `,
  ];

  static properties = {
    count: { type: Number, reflect: true },
  };

  constructor() {
    super();
    this.count = 0;
  }

  render() {
    return html`
      <h2>Counter</h2>
      <p>${this.count}</p>
      <p>
        <input id="quantity" type="number" value="1" />
      </p>
      <button @click=${this.increment}>Increment</button>
      <button @click=${this.decrement}>Decrement</button>
    `;
  }
  get quantity() {
    return this.shadowRoot.getElementById("quantity").value;
  }
  increment() {
    this.count += parseInt(this.quantity);
  }

  decrement() {
    this.count -= parseInt(this.quantity);
  }
}
customElements.define("eit-counter", EitCounter);

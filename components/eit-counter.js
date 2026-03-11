import { LitElement, html, css } from "lit";
import { WiredButton } from "wired-elements/lib/wired-button.js";
import { WiredCard } from "wired-elements/lib/wired-card.js";
import { WiredInput } from "wired-elements/lib/wired-input.js";
import { WiredSlider } from "wired-elements/lib/wired-slider.js";
export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
      }
      wired-input {
        width: 50px;
        font-size: 1em;
        padding: 0.3em;
      }
      wired-button {
        background-color: rgb(168, 201, 224);
      }
      wired-button.decrement {
        background-color: rgb(252, 208, 208);
      }
      wired-card {
        margin: 1em;
        padding: 1em;
      }
    `,
  ];

  static properties = {
    count: { type: Number, reflect: true },
    quantity: { type: Number, reflect: true },
  };

  constructor() {
    super();
    this.count = 0;
    this.quantity = 10;
  }

  render() {
    return html`
      <wired-card elevation="3">
        <h2>Counter</h2>
        <p>${this.count}</p>
        <p>
          <wired-input id="quantity" type="number" .value=${this.quantity} />
        </p>
        <div>
          <wired-slider
            value="10"
            min="5"
            max="15"
            @change=${this.doChangeQuantity}
          ></wired-slider>
        </div>

        <wired-button @click=${this.increment}>Increment</wired-button>
        <wired-button class="decrement" @click=${this.decrement}
          >Decrement</wired-button
        >
      </wired-card>
    `;
  }
  // get quantity() {
  //   return this.shadowRoot.getElementById("quantity").value;
  // }
  doChangeQuantity(e) {
    this.quantity = e.detail.value;
  }
  increment() {
    this.count += parseInt(this.quantity);
  }

  decrement() {
    this.count -= parseInt(this.quantity);
  }
}
customElements.define("eit-counter", EitCounter);

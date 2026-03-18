import { LitElement, html, css } from "lit";

export class EitProp extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];
  static properties = {
    propString: {
      type: String,
      converter: {
        fromAttribute: (value) => "--" + value,
      },
    },
    propNumber: { type: Number },
  };

  render() {
    return html`
      <p>Prop String: ${this.propString} ${typeof this.propString}</p>
      <p>Prop Number: ${this.propNumber} ${typeof this.propNumber}</p>
    `;
  }
}
customElements.define("eit-prop", EitProp);

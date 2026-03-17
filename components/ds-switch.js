import { LitElement, html, css } from "lit";

export class DsSwitch extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        color: red;
      }
      :host([checked]) {
        color: green;
      }
    `,
  ];
  static properties = {
    checked: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.checked = false;
  }

  render() {
    return html` ${this.checked ? html`<b>ON </b>` : html`<b>OFF</b>`} `;
  }
}
customElements.define("ds-switch", DsSwitch);

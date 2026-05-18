import { LitElement, html, css } from "lit";
import "@dile/ui/components/checkbox/checkbox.js";

export class DsInputCheckbox extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    input {
      display: none;
    }
  `;

  static properties = {
    checked: { type: Boolean },
    name: { type: String },
    disabled: { type: Boolean },
  };
  render() {
    return html`
      <dile-checkbox
        id="elcheckbox"
        name=${this.name}
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        @click=${this.clickHandler}
      >
        <slot></slot>
      </dile-checkbox>
    `;
  }
  firstUpdated() {
    this.elcheck = this.shadowRoot.getElementById("elcheckbox");
    this.input = document.createElement("input");
    this.input.setAttribute("type", "checkbox");
    this.input.setAttribute("name", this.name);
    this.input.checked = this.checked;
    this.elcheck.appendChild(this.input);
  }
  clickHandler() {
    console.log("this.elcheck.checked", this.elcheck.checked);
    this.input.checked = this.elcheck.checked;
  }
}
customElements.define("ds-input-checkbox", DsInputCheckbox);

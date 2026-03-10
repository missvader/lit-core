import { LitElement, html, css } from "lit";
import { icons } from "../lib/icons.js";
export class DsTodoSearch extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      div {
        display: flex;
        align-items: center;
        border: 1px solid #eee;
        margin-bottom: 1rem;
        padding: 1rem;
      }
      input {
        flex-grow: 1;
        margin-right: 1rem;
      }
    `,
  ];

  render() {
    return html`
      <div>
        <input type="text" id="searchinput" placeholder="Search..." />
        <span>${icons.search}</span>
      </div>
    `;
  }
}
customElements.define("ds-todo-search", DsTodoSearch);

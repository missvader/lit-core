import { LitElement, html, css } from "lit";
import { pageStyles } from "./styles/page-styles";

export class DsPageLinks extends LitElement {
  static styles = [
    pageStyles,
    css`
      :host {
        border: 1px solid #ccc;
        margin: 0.5rem;
        padding: 0.5rem;
      }
    `,
  ];
  static properties = {
    pages: { type: Array, reflect: true },
    selectedPage: { type: Number, reflect: true },
  };

  constructor() {
    super();
    this.pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.selectedPage = 1;
  }

  render() {
    return html`
      <ul>
        ${this.pages.map(
          (page) => html`
            <li class="${this.selectedPage === page ? "selected" : ""}">
              ${page}
            </li>
          `,
        )}
      </ul>
    `;
  }
}
customElements.define("ds-page-links", DsPageLinks);

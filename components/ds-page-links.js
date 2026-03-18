import { LitElement, html, css } from "lit";
import { pageStyles } from "./styles/page-styles";

export class DsPageLinks extends LitElement {
  static styles = [
    pageStyles,
    css`
      :host {
        display: block;
        margin: 0.5rem;
        padding: 0.5rem;
      }
    `,
  ];
  static properties = {
    pages: { type: Array, reflect: true },
    selectedPage: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.pages = [];
    this.selectedPage = 0;
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

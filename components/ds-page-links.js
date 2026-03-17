import { LitElement, html, css } from "lit";

export class DsPageLinks extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      ul {
        display: flex;
        margin: 0;
        padding: 0;
      }
      li {
        list-style-type: none;
        padding: 0.5em;
        border: 1px solid #ccc;
        background-color: #eee;
        margin-right: 0.5em;
        text-align: center;
        min-width: 1em;
      }
      li.selected {
        background-color: #d33;
        color: #fff;
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

import { LitElement, html, css } from "lit";
import { pageStyles } from "./styles/page-styles";

export class DsPageLinksNumPages extends LitElement {
  static styles = [pageStyles, css``];
  static properties = {
    numPages: { type: Number, reflect: true },
    selectedPage: { type: Number, reflect: true },
  };

  constructor() {
    super();
    this.numPages = 5;
    this.selectedPage = 1;
  }

  render() {
    return html`
      <ul>
        ${this.createPagesTemplate()}
      </ul>
    `;
  }

  createPagesTemplate() {
    const templates = [];
    for (let i = 1; i <= this.numPages; i++) {
      templates.push(html`
        <li class="${this.selectedPage === i ? "selected" : ""}">${i}</li>
      `);
    }
    return templates;
  }
}
customElements.define("ds-page-links-numpages", DsPageLinksNumPages);

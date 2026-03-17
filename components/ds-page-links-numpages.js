import { LitElement, html, css } from "lit";

export class DsPageLinksNumPages extends LitElement {
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

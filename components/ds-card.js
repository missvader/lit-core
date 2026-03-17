import { LitElement, html, css } from "lit";

export class DsCard extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        margin: 1em;
      }
      section {
        border: 1px solid #ccc;
        padding: 1em;
        border-radius: 0.5em;
        box-shadow: 0 0 0.5em #ccc;
      }
    `,
  ];
  static properties = {
    title: { type: String },
  };

  constructor() {
    super();
    this.title = "";
  }
  render() {
    return html`
      <section>
        ${this.titleTemplate} ${this.bodyTemplate} ${this.footerTemplate}
      </section>
    `;
  }
  get titleTemplate() {
    return html` ${this.title === "" ? "" : html`<h1>${this.title}</h1>`} `;
  }
  get bodyTemplate() {
    return html` <div>Body</div> `;
  }
  get footerTemplate() {
    return html` <footer>actions...</footer> `;
  }
}
customElements.define("ds-card", DsCard);

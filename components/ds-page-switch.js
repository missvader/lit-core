import { LitElement, html, css } from "lit";
import "@dile/ui/components/pages/pages.js";
import "./ds-switch.js";
import "./eit-prop.js";
import "./ds-page-links.js";

export class DsPageSwitch extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];
  static properties = {
    active: { type: Boolean },
    pages: { type: Array },
    page: { type: String },
    test: { type: String },
  };

  constructor() {
    super();
    this.active = true;
    this.pages = ["uno", "dos", "tres"];
    this.page = "tres";
    this.test = "5";
  }

  render() {
    return html`
      <!-- <eit-prop .propString=${this.test} propNumber="5"></eit-prop> -->
      <ds-page-links
        .pages=${this.pages}
        .selectedPage=${this.page}
        @ds-page-links-change=${this.doSelectedChange}
      ></ds-page-links>
      <ds-switch
        ?checked=${this.active}
        @ds-switch-change=${this.changeActiveListener}
      ></ds-switch>
      <button @click=${this.changeActive}>Cambiar active</button>
      <button @click=${this.showOne}>Cambiar pagina 1</button>
      <button @click=${this.show("dos")}>Cambiar pagina 2</button>
      <button @click=${this.show("tres")}>Cambiar pagina 3</button>
      ${this.active ? this.pagesTemplate : ""}
    `;
  }

  get pagesTemplate() {
    return html`
      <dile-pages selected=${this.page} attrforselected="name">
        <div name="uno">
          <h2>Esta es la pagina 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            excepturi atque, et quaerat vero saepe maiores, maxime dolore
            officiis earum cumque temporibus tenetur, possimus deserunt magni
            itaque! Reiciendis, assumenda quo?
          </p>
        </div>
        <div name="dos">
          <h2>Esta es la pagina 2</h2>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            excepturi atque, et quaerat vero saepe maiores, maxime dolore
            officiis earum cumque temporibus tenetur, possimus deserunt magni
            itaque! Reiciendis, assumenda quo?
          </p>
        </div>
        <div name="tres">
          <h2>Esta es la pagina 3</h2>
          <p>Just another page</p>
        </div>
      </dile-pages>
    `;
  }

  changeActive() {
    this.active = !this.active;
  }

  showOne() {
    this.page = "uno";
  }

  show(pageParameter) {
    return () => (this.page = pageParameter);
  }

  changeActiveListener(e) {
    this.active = e.detail.checked;
  }

  doSelectedChange(e) {
    this.page = e.detail.selectedPage;
  }
}
customElements.define("ds-page-switch", DsPageSwitch);

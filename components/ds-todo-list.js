import { LitElement, html, css } from "lit";
import { icons } from "../lib/icons.js";
import "./ds-todo-search.js";

export class DsTodoList extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      h1 {
        font-size: 1.5rem;
        border-bottom: 1px solid #bbb0b0;
        padding-bottom: 0.5rem;
      }
      div {
        background-color: #f0f0f0;
        padding: 1rem;
      }
    `,
  ];

  static properties = {
    loggedIn: { type: Boolean },
    role: { type: String },
  };
  constructor() {
    super();
    this.loggedIn = false;
    this.role = "premium";
  }

  render() {
    return html`
      <button @click=${this.changeLoggedIn}>cambiar logueado</button>
      ${this.loggedIn
        ? html`
            ${this.headingTemplate}
            <ds-todo-search></ds-todo-search>
            ${this.bodyTemplate} ${this.sayHello(this.role)}
          `
        : html`<p>Usuario no logueado</p>`}
    `;
  }
  get headingTemplate() {
    return html`<h1>Todo List</h1>`;
  }
  get bodyTemplate() {
    return html` <div>${icons.done}</div> `;
  }
  changeLoggedIn() {
    this.loggedIn = !this.loggedIn;
  }
  sayHello(role) {
    switch (role) {
      case "administrator":
        return html`<p>Hola administrador</p>`;
      case "premium":
        return this.getUserPremiumTemplate();
      default:
        return html`<p>Hola usuario común</p>`;
    }
  }
  getUserPremiumTemplate() {
    return html`<p>Este es el menu para el usuario premium</p>
      <ul>
        <li>Opción 1</li>
        <li>Opción 2</li>
        <li>Opción 3</li>
      </ul>`;
  }
}
customElements.define("ds-todo-list", DsTodoList);

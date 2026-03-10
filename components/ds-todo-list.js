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

  render() {
    return html`
      ${this.headingTemplate}
      <ds-todo-search></ds-todo-search>
      ${this.bodyTemplate}
    `;
  }
  get headingTemplate() {
    return html`<h1>Todo List</h1>`;
  }
  get bodyTemplate() {
    return html` <div>${icons.done}</div> `;
  }
}
customElements.define("ds-todo-list", DsTodoList);

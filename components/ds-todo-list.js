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
    completed: { type: Boolean },
  };
  constructor() {
    super();
    this.completed = false;
  }

  render() {
    return html`
      <button @click=${this.changeCompleted}>Completar</button>

      ${this.headingTemplate}
      <ds-todo-search></ds-todo-search>
      ${this.bodyTemplate}
    `;
  }
  get headingTemplate() {
    return html`<h1>Todo List</h1>`;
  }
  get bodyTemplate() {
    return html`
      <div>${this.completed ? icons.done : icons.fiber_manual_record}</div>
    `;
  }
  changeCompleted() {
    this.completed = !this.completed;
  }
}
customElements.define("ds-todo-list", DsTodoList);

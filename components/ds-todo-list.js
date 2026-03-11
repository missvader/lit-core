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
      ul {
        margin: 1rem 0;
        padding: 0;
      }
      li {
        list-style-type: none;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
      }
      li span {
        margin-left: 0.5rem;
      }
    `,
  ];

  static properties = {
    completed: { type: Boolean },
    todos: { type: Array },
  };
  constructor() {
    super();
    this.completed = false;
    this.todos = [
      { title: "Comprar pan", completed: false },
      { title: "Poner la lavadora", completed: false },
      { title: "Llamar a mamá", completed: true },
    ];
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
      <ul>
        ${this.todos.map(
          (todo) => html`
            <li>
              ${todo.completed ? icons.done : icons.fiber_manual_record}
              <span>${todo.title}</span>
            </li>
          `,
        )}
      </ul>
    `;
  }
  changeCompleted() {
    this.completed = !this.completed;
  }
}
customElements.define("ds-todo-list", DsTodoList);

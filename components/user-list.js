import { LitElement, html, css } from "lit";
import { users } from "../users.js";
import "./eit-user.js";

export class UserList extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`
      <h2>Lista de usuarios</h2>
      ${users.map((user) => html` <eit-user .user=${user}></eit-user> `)}
    `;
  }
}
customElements.define("user-list", UserList);

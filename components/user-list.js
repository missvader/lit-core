import { LitElement, html, css } from "lit";
import { users } from "../users.js";
import "./eit-user.js";
import "./ds-page-links.js";

export class UserList extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];
  static properties = {
    // users: { type: Array },
    orderTypes: { type: Array },
    selectedOrder: { type: String },
  };

  // constructor() {
  //   super();
  //   this.users = [];
  //   // fetch("https://jsonplaceholder.typicode.com/users")
  //   //   .then((response) => response.json())
  //   //   .then((users) => (this.users = users));
  // }
  constructor() {
    super();
    this.orderTypes = ["asc", "desc"];
    this.selectedOrder = "asc";
  }
  render() {
    return html`
      <h2>Lista de usuarios</h2>
      <ds-page-links
        .pages=${this.orderTypes}
        selectedPage=${this.selectedOrder}
        @ds-page-links-change=${this.changeSelectedOrder}
      ></ds-page-links>
      ${this.doOrder(this.selectedOrder).map(
        (user) => html` <eit-user .user=${user}></eit-user> `,
      )}
    `;
  }
  changeSelectedOrder(e) {
    this.selectedOrder = e.detail.selectedPage;
  }
  doOrder(order) {
    const usersOrdered = users.sort((a, b) => {
      if (a.name === b.name) return 0;
      if (order === "asc") {
        return a.name > b.name ? 1 : -1;
      } else {
        return a.name < b.name ? 1 : -1;
      }
    });
    return usersOrdered;
  }
}
customElements.define("user-list", UserList);

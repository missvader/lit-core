import { LitElement, html, css } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { users } from "../users.js";
import "./eit-user.js";
import "./ds-page-links.js";
import { PerformanceMixin } from "../mixins/performanceMixin.js";

export class UserList extends PerformanceMixin(LitElement) {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];
  static properties = {
    orderTypes: { type: Array },
    selectedOrder: { type: String },
    usersOrdered: { type: Array },
  };

  constructor() {
    super();

    this.orderTypes = ["asc", "desc"];
    this.selectedOrder = "asc";

    this.userAsc = [
      ...users.sort((a, b) => {
        if (a.name === b.name) return 0;
        return a.name > b.name ? 1 : -1;
      }),
    ];
    this.userDesc = [
      ...users.sort((a, b) => {
        if (a.name === b.name) return 0;
        return a.name < b.name ? 1 : -1;
      }),
    ];
    this.usersOrdered = this.userAsc;
  }
  render() {
    return html`
      <h2>Lista de usuarios</h2>
      <button @click=${this.change100Times}>
        100</button>
        <ds-page-links
          .pages=${this.orderTypes}
          selectedPage=${this.selectedOrder}
          @ds-page-links-change=${this.changeSelectedOrder}
        ></ds-page-links>
        ${this.mapRepeatTemplate}
      </button>
    `;
  }

  get mapRepeatTemplate() {
    return html`
      ${this.usersOrdered.map(
        (user) => html` <eit-user .user=${user}></eit-user> `,
      )}
    `;
  }
  // El repeat es más eficiente que el map porque solo actualiza los elementos que han cambiado, mientras que el map vuelve a renderizar toda la lista cada vez que se actualiza.
  get directiveRepeatTemplate() {
    return html`
      ${repeat(
        this.usersOrdered,
        (user) => user.id,
        (user, index) => html` <eit-user .user=${user}></eit-user> `,
      )}
    `;
  }
  changeSelectedOrder(e) {
    this.selectedOrder = e.detail.selectedPage;
    this.usersOrdered =
      this.selectedOrder === "asc" ? this.userAsc : this.userDesc;
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
  change100Times() {
    if (this.times === 0) {
      this.startTime();
    }
    if (this.times < 3) {
      this.times++;
      this.usersOrdered = this.times % 2 === 0 ? this.userAsc : this.userDesc;
      this.updateComplete.then(() => {
        this.change100Times();
      });
    } else {
      this.endTime();
      this.reportPerformance();
      this.times = 0;
    }
  }
}
customElements.define("user-list", UserList);

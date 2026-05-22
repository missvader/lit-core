import { LitElement, html, css } from "lit";
import { UserList } from "./user-list.js";
import { repeat } from "lit/directives/repeat.js";

export class UserListOptimized extends UserList {
  // con la herencia podemos crear nuevas propiedades en el componente sin afectar al componente original, podemos redefinir métodos de la clase padre y usamos las propiedades especializadas
  get mapRepeatTemplate() {
    return html`
      ${repeat(
        this.usersOrdered,
        (user) => user.id,
        (user, index) => html` <eit-user .user=${user}></eit-user> `,
      )}
    `;
  }
}
customElements.define("user-list-optimized", UserListOptimized);

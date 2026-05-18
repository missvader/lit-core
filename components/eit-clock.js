import { LitElement, html, css } from "lit";

export class EitClock extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        color: red;
      }
    `,
  ];
  static properties = {
    hour: { type: String },
  };
  constructor() {
    super();
    this.hour = "";
  }
  firstUpdated() {
    this.interval = setInterval(() => {
      this.hour = this.getClock();
      console.log("actualizando reloj");
    }, 1000);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.interval);
  }

  render() {
    return html` <div class="clock">${this.getClock()}</div> `;
  }

  getClock() {
    const date = new Date();
    return `${date.getHours().toString().padStart(2, 0)}:${date.getMinutes().toString().padStart(2, 0)}:${date.getSeconds().toString().padStart(2, 0)}`;
  }
}
customElements.define("eit-clock", EitClock);

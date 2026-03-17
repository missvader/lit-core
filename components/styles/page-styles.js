import { css } from "lit";

export const pageStyles = css`
  :host {
    display: block;
  }
  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
    padding: 0.5em;
    border: 1px solid #ccc;
    background-color: #eee;
    margin-right: 0.5em;
    text-align: center;
    min-width: 1em;
  }
  li.selected {
    background-color: #d33;
    color: #fff;
  }
`;

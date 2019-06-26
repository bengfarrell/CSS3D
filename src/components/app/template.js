import {html, render} from '../../../web_modules/lit-html.js';

export default {
    render() {
        return html`${this.css()}${this.html()}`;
    },

    html() {
      return html`<shampoo-code-view></shampoo-code-view>
                  <shampoo-scene></shampoo-scene>`;
    }
}

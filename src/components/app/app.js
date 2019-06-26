import {html, render} from '../../../web_modules/lit-html.js';

export default class App extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {
        render(Template.render(), this.shadowRoot);
    }
}

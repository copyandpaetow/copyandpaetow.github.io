//const styleURL = new URL("./style.css", import.meta.url);
/*
	<style>
		@import '${styleURL.pathname}';
	</style>
 */

const template = document.createElement("template");
template.innerHTML = /* html */ `
	<div >
		hello
	</div>
</div>
`;

export class Scroll extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot!.appendChild(template.content.cloneNode(true));
	}

	connectedCallback() {}

	disconnectedCallback() {}
}

customElements.define("scroll-thingy", Scroll);

export class BlockRenderer extends HTMLElement {
	connectedCallback() {
		//find closest camera and get the computed values
		//how to watch for changes? mutation-observer?
	}

	disconnectedCallback() {}
}

customElements.define("block-renderer", BlockRenderer);

const isFirefox = CSS.supports("-moz-appearance: none");

export class CassetteInteraction extends HTMLElement {
	controller: AbortController;

	constructor() {
		super();
		this.controller = new AbortController();
	}

	connectedCallback() {
		this.controller = new AbortController();
		const { signal } = this.controller;

		if (!isFirefox) {
			return;
		}
		let activeCassette = this.querySelector(".cassette[open]") as HTMLDetailsElement | undefined;

		this.addEventListener(
			"click",
			(event) => {
				const target = event.target as HTMLElement;
				const nextSummary = target.tagName === "SUMMARY" ? target : target.closest("summary");

				if (!nextSummary) {
					return;
				}

				const details = nextSummary.parentElement as HTMLDetailsElement;

				if (activeCassette === details) {
					activeCassette?.removeAttribute("open");
					activeCassette = undefined;
					return;
				}

				activeCassette?.removeAttribute("open");
				activeCassette = details;
			},
			{ signal }
		);
	}

	disconnectedCallback() {
		this.controller.abort();
	}
}

customElements.define("cassette-interaction", CassetteInteraction);

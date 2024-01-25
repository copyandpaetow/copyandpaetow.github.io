export class EjectCurrentCassette extends HTMLElement {
	controller: AbortController;

	constructor() {
		super();
		this.controller = new AbortController();
	}

	connectedCallback() {
		this.controller = new AbortController();
		const { signal } = this.controller;
		const scrollOffsetHistory: number[] = [];

		this.addEventListener(
			"click",
			(event) => {
				const target = event.target as HTMLElement;

				if (target.tagName !== "A" && target.tagName !== "BUTTON") {
					return;
				}

				if (target.hasAttribute("href")) {
					scrollOffsetHistory.push(window.scrollY);
					return;
				}

				if (scrollOffsetHistory.length === 0) {
					location.href = location.origin;
					return;
				}

				history.back();
				window.scrollTo(0, scrollOffsetHistory.pop()!);
			},
			{ signal }
		);
	}

	disconnectedCallback() {
		this.controller.abort();
	}
}

customElements.define("eject-cassette", EjectCurrentCassette);

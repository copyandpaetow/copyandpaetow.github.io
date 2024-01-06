//@ts-nocheck

export class EjectCurrentCassette extends HTMLElement {
	connectedCallback() {
		this.controller = new AbortController();
		const { signal } = this.controller;
		const button = this.querySelector("button");
		const link = button?.closest("article")?.querySelector("a");

		let scrollOffset = 0;

		link?.addEventListener(
			"click",
			() => {
				scrollOffset = window.scrollY;
			},
			{ signal }
		);
		button?.addEventListener(
			"click",
			() => {
				console.log(history);
				history.back();
				window.scrollTo(0, scrollOffset);
			},
			{ signal }
		);
	}

	disconnectedCallback() {
		this.controller.abort();
	}
}

customElements.define("eject-cassette", EjectCurrentCassette);

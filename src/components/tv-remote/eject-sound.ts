//@ts-nocheck

const cachedSounds = new Map<string, HTMLAudioElement>();

export class EjectSound extends HTMLElement {
	connectedCallback() {
		this.controller = new AbortController();
		const { signal } = this.controller;
		const input = this.querySelector("input");

		input?.addEventListener(
			"change",
			(event: InputEvent) => {
				if (!event.target.checked) {
					return;
				}
				const sound = cachedSounds.get("wilhelm") ?? new Audio("/sounds/wilhelm-scream.mp3");
				sound.play();
				cachedSounds.set("wilhelm", sound);
			},
			{ signal }
		);
	}

	disconnectedCallback() {
		this.controller.abort();
	}
}

customElements.define("eject-sound", EjectSound);

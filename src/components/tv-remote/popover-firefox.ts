//@ts-nocheck

export class PopoverFirefox extends HTMLElement {
	target: HTMLElement;

	connectedCallback() {
		const target = this.querySelector("[id]") as HTMLDialogElement;

		if (target.showPopover) {
			return;
		}
		this.controller = new AbortController();
		const { signal } = this.controller;
		const caller = document.querySelectorAll(`[popovertarget=${target.id}]`);

		Array.from(caller).forEach((element) => {
			element.addEventListener(
				"click",
				() => {
					if (element.getAttribute("popovertargetaction") === "show") {
						target.showModal();
					} else {
						target.close();
					}
				},
				{ signal }
			);
		});
	}
}

customElements.define("popover-firefox", PopoverFirefox);

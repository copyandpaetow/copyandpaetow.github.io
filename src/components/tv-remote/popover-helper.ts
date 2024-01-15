export class PopoverHelper extends HTMLElement {
	controller: AbortController;

	constructor() {
		super();
		this.controller = new AbortController();
	}

	connectedCallback() {
		const target = this.querySelector("[id]") as HTMLDialogElement;

		if (Boolean(target.showPopover)) {
			return;
		}

		const { signal } = this.controller;
		const invoker = Array.from(document.querySelectorAll(`[popovertarget=${target.id}]`));
		const type = this.getAttribute("type");

		invoker.forEach((element) => {
			element.addEventListener(
				"click",
				() => {
					if (type === "modal") {
						element.getAttribute("popovertargetaction") === "show"
							? target.showModal()
							: target.close();
						return;
					}

					element.getAttribute("popovertargetaction") === "show"
						? target.setAttribute("open", "")
						: target.removeAttribute("open");
				},
				{ signal }
			);
		});
	}

	disconnectedCallback() {
		this.controller.abort();
	}
}

customElements.define("popover-helper", PopoverHelper);

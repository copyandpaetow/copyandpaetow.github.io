export class PopoverHelper extends HTMLElement {
	controller: AbortController;

	constructor() {
		super();
		this.controller = new AbortController();
	}

	closeAllOpenPopovers(target: HTMLElement, type: string | null) {
		const supportsPopover = Boolean(target.hidePopover);
		const modalSelector = supportsPopover ? "[popover]" : "dialog[open]";

		if (supportsPopover) {
			target.hidePopover();
		} else {
			type === "modal" ? (target as HTMLDialogElement).close() : target.removeAttribute("open");
		}

		Array.from(target.querySelectorAll(modalSelector)).forEach((popover) =>
			this.closeAllOpenPopovers(popover as HTMLElement, type)
		);
	}

	openUnsupportedPopover(target: HTMLDialogElement, type: string | null) {
		const invoker = Array.from(document.querySelectorAll(`[popovertarget=${target.id}]`));

		invoker.forEach((element) => {
			element.addEventListener(
				"click",
				() => {
					const shouldOpen = element.getAttribute("popovertargetaction") === "show";

					if (shouldOpen) {
						type === "modal" ? target.showModal() : target.setAttribute("open", "");
						target.focus();

						return;
					}

					this.closeAllOpenPopovers(target, type);
				},
				{ signal: this.controller.signal }
			);
		});
	}

	connectedCallback() {
		const target = this.querySelector("[id]") as HTMLElement;
		const type = this.getAttribute("type");
		const supportsPopover = Boolean(target.hidePopover || target.showPopover);

		if (!supportsPopover) {
			this.openUnsupportedPopover(target as HTMLDialogElement, type);
			target.addEventListener("close", () => this.closeAllOpenPopovers(target, type), {
				signal: this.controller.signal,
			});
		}

		target.addEventListener(
			"toggle",
			//@ts-expect-error too new for ts
			(event: ToggleEvent) =>
				event.newState === "closed" && this.closeAllOpenPopovers(target, type),
			{ signal: this.controller.signal }
		);
	}

	disconnectedCallback() {
		this.controller.abort();
	}
}

customElements.define("popover-helper", PopoverHelper);

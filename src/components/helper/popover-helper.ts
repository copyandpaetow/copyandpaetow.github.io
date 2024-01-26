export class PopoverHelper extends HTMLElement {
	controller: AbortController;
	target: HTMLDialogElement | null = null;
	type: string | null = null;

	constructor() {
		super();
		this.controller = new AbortController();
	}

	closeNestedModals() {
		if (!this.target) {
			return;
		}

		const modalSelector = Boolean(this.target.hidePopover) ? "[popover]" : "dialog[open]";

		console.log({ modalSelector });

		Array.from(this.target.querySelectorAll(modalSelector)).forEach((popover) =>
			this.closeModal(popover as HTMLElement)
		);
	}

	closeModal(target: HTMLElement) {
		if (Boolean(target.hidePopover)) {
			target.hidePopover();
			return;
		}

		this.type === "modal" ? (target as HTMLDialogElement).close() : target.removeAttribute("open");
	}

	togglePopover() {
		if (!this.target || Boolean(this.target.showPopover)) {
			return;
		}

		if (this.target.id.includes("preview")) {
			this.target?.classList.remove("vcr-lines");
		}

		this.target.addEventListener(
			"close",
			() => {
				this.closeNestedModals();
			},
			{ signal: this.controller.signal }
		);

		const invoker = Array.from(document.querySelectorAll(`[popovertarget=${this.target.id}]`));

		invoker.forEach((element) => {
			element.addEventListener(
				"click",
				() => {
					const shouldOpen = element.getAttribute("popovertargetaction") === "show";

					if (shouldOpen) {
						this.type === "modal"
							? this.target?.showModal()
							: this.target?.setAttribute("open", "");

						this.target?.focus();

						return;
					}

					this.closeModal(this.target!);
					this.closeNestedModals();
				},
				{ signal: this.controller.signal }
			);
		});
	}

	connectedCallback() {
		this.target = this.querySelector("[id]") as HTMLDialogElement;
		this.type = this.getAttribute("type");
		this.togglePopover();

		this.target.addEventListener(
			"toggle",
			//@ts-expect-error too new for ts
			(event: ToggleEvent) => {
				if (event.newState === "open") {
					return;
				}
				this.closeNestedModals();
			},
			{ signal: this.controller.signal }
		);
	}

	disconnectedCallback() {
		this.target = null;
		this.type = null;
		this.controller.abort();
	}
}

customElements.define("popover-helper", PopoverHelper);

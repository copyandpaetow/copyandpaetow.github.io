//@ts-nocheck

export class PopoverFirefox extends HTMLElement {
	target: HTMLElement;

	/*
	- I guess it makes more sense to have this around the callee because it could be called from several places
	- find the caller and callee by their id
	- check if the popover is supported => if so, do nothing
	- replace the popover with a dialog or copy it into an empty dialog
	- trigger that while hiding the popover
	
	*/

	connectedCallback() {
		const target = this.querySelector("[id]") as HTMLButtonElement | HTMLInputElement;
		const caller = document.querySelector(`[popovertarget]`);
		const id = caller?.getAttribute("popovertarget");

		if (target.showPopover) {
			return;
		}
	}
}

customElements.define("popover-firefox", PopoverFirefox);

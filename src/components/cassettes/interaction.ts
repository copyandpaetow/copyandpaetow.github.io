export const cassetteInteractionEnhancement = () => {
	const cassettePile = document.querySelector(".cassette-pile") as HTMLUListElement;

	if (!cassettePile) {
		return;
	}

	const controller = new AbortController();
	const signal = controller.signal;

	try {
		document.addEventListener(
			"keydown",
			(event) => {
				if (
					event.key !== "Escape" ||
					!window.location.hash ||
					Boolean(document.querySelector("#settings-menu:has([open])"))
				) {
					return;
				}

				window.location.hash = "";
			},
			{ signal }
		);

		cassettePile.addEventListener(
			"click",
			(event) => {
				const target = event.target as HTMLElement;
				const anchor = target.hasAttribute("href") ? target : target.closest("a");
				const href = anchor?.getAttribute("href");

				if (href === window.location.hash) {
					event.preventDefault();
					window.location.hash = "";
				}
			},
			{ signal }
		);

		if (!window.location.hash) {
			window.location.hash = "#intro";
		}
	} catch (error) {
		controller.abort();
	}
};

const isFirefox = CSS.supports("-moz-appearance: none");

export const polyFillFirefoxDetailAccordions = () => {
	const cassettePile = document.querySelector(".cassette-pile") as HTMLOListElement | undefined;

	if (!isFirefox || !cassettePile) {
		return;
	}

	const signal = new AbortController().signal;
	let activeCassette = cassettePile.querySelector("details[open]") as
		| HTMLDetailsElement
		| undefined;

	cassettePile.addEventListener(
		"click",
		(event) => {
			const target = event.target as HTMLElement;
			const nextSummary = target.tagName === "SUMMARY" ? target : target.closest("summary");

			if (!nextSummary) {
				return;
			}

			const details = nextSummary.parentElement as HTMLDetailsElement;

			if (activeCassette) {
				[activeCassette, ...activeCassette.querySelectorAll("details[open]")].forEach(
					(openedDetail) => openedDetail.removeAttribute("open")
				);
			}

			if (activeCassette === details) {
				activeCassette = undefined;
				return;
			}

			activeCassette = details;
		},
		{ signal }
	);
};

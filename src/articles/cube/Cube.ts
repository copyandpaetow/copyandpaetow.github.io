import { animateToNewSlide } from "./animateToNewSlide.ts";

const styleURL = new URL("./style.css", import.meta.url);
const template = document.createElement("template");
template.innerHTML = /* html */ `
  <style>
    @import '${styleURL.pathname}';
  </style>
	<div class="scene">
		<div class="cube">
	</div>
</div>
`;

const positions = {
	horizontal: ["front", "right", "back", "left"],
	vertical: ["anterior", "top", "posterior", "bottom"],
};

// const focusFaceWithArrowKeys = (event: KeyboardEvent) => {
// 	if (!event.key.includes("Arrow")) {
// 		return;
// 	}

// 	event.preventDefault();

// 	switch (event.key) {
// 		case "ArrowRight":
// 			break;
// 		case "ArrowLeft":
// 			break;
// 		case "ArrowUp":
// 			break;
// 		case "ArrowDown":
// 			break;
// 		default:
// 			return;
// 	}
// };

// const observer = new IntersectionObserver(
// 	(entries) => {
// 		entries.forEach((entry) => {
// 			if (entry.isIntersecting) {
// 				window.addEventListener("keydown", focusFaceWithArrowKeys);

// 				return;
// 			}
// 			window.removeEventListener("keydown", focusFaceWithArrowKeys);
// 		});
// 	},
// 	{ threshold: [0.25, 0.5, 0.75, 1] }
// );

// observer.observe(wrapper);

const onHashChange = (event: HashChangeEvent, cube: HTMLElement) => {
	const { newURL, oldURL } = event;
	if (oldURL === newURL) {
		return;
	}

	const oldSideElement = document.getElementById(oldURL.split("#")[1]);
	const newSideElement = document.getElementById(newURL.split("#")[1]);

	animateToNewSlide(cube, oldSideElement, newSideElement);
};

const dispatchHashEvent = (
	oldURL = window.location.origin + window.location.pathname,
	newURL = window.location.href
) => {
	if (oldURL === newURL) {
		return;
	}

	dispatchEvent(
		new HashChangeEvent("hashchange", {
			oldURL,
			newURL,
		})
	);
};

const focusFaceWithInteractiveElement = (event: FocusEvent) => {
	const target = event.target as HTMLElement;
	const cubeFace = target.closest("[data-position]") as HTMLElement;
	const cube = cubeFace.closest(".cube") as HTMLElement;

	window.location.href = `#${cubeFace.id}`;

	requestAnimationFrame(() => {
		target.focus();
		cube.addEventListener("focusin", focusFaceWithInteractiveElement, { once: true });
	});
};

const setElements = (cube: HTMLElement, children: HTMLCollection) => {
	const childArray = Array.from(children);
	cube.style.setProperty("--length", `${childArray.length}`);

	for (let index = 0; index < childArray.length; index++) {
		const element = childArray[index] as HTMLElement;
		const direction = element.getAttribute("slot") as "vertical" | "horizontal";

		const wrapper = document.createElement("div");
		wrapper.dataset.position = positions[direction][index % 4];
		wrapper.dataset.direction = direction;
		wrapper.id = `cube-side-${index}`; //this needs to be prefixed if several of these are on one page
		wrapper.append(element);

		cube.append(wrapper);
	}
};

/*
	- maybe the cube could be created with 2 divs and 4 pseudo elements
	- the divs could maybe be slots? 

	if we do it with 6 sides the added elements would need to fully cover the page. From within the shadow dom we cant override anything there
	a div per entry would make it safer but less performant

*/

export class InfinityCube extends HTMLElement {
	events: Map<(arg: any) => void, string>;
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot!.appendChild(template.content.cloneNode(true));
		this.events = new Map();
	}

	connectedCallback() {
		const cube = this.shadowRoot!.querySelector(".cube") as HTMLElement;

		setElements(cube, this.children);
		const change = (event: HashChangeEvent) => onHashChange(event, cube);

		window.addEventListener("hashchange", change);
		this.events.set(change, "hashchange");

		dispatchHashEvent();
	}

	disconnectedCallback() {
		this.events.forEach((type, callback) => window.removeEventListener(type, callback));
	}
}

customElements.define("infinity-cube", InfinityCube);

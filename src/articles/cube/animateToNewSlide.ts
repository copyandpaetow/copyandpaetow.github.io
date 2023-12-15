export type Positions =
	| "back"
	| "front"
	| "right"
	| "left"
	| "top"
	| "bottom"
	| "anterior"
	| "posterior";

type OptionalPositionFunctions = {
	[Key in Positions]?: (cubeElement: HTMLElement) => void;
};

const positionalStateMachine: Record<Positions, OptionalPositionFunctions> = {
	front: {
		right(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "-90deg");
		},
		left(cubeElement) {
			requestAnimationFrame(() => {
				cubeElement.style.transition = "none";
				cubeElement.style.setProperty("--rotateY", "-360deg");
				requestAnimationFrame(() => {
					cubeElement.style.setProperty("--rotateY", "-270deg");
					cubeElement.style.transition = "";
				});
			});
		},
		top(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-90deg");
		},
		bottom(cubeElement) {
			requestAnimationFrame(() => {
				cubeElement.style.transition = "none";
				cubeElement.style.setProperty("--rotateX", "-360deg");
				requestAnimationFrame(() => {
					cubeElement.style.setProperty("--rotateX", "-270deg");
					cubeElement.style.transition = "";
				});
			});
		},
		back(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "-180deg");
		},
		posterior(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-180deg");
		},
		anterior(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-360deg");
			cubeElement.addEventListener(
				"transitionend",
				() => {
					requestAnimationFrame(() => {
						cubeElement.style.transition = "none";
						cubeElement.style.setProperty("--rotateX", "0deg");
						requestAnimationFrame(() => {
							cubeElement.style.transition = "";
						});
					});
				},
				{ once: true }
			);
		},
	},
	right: {
		front(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "0deg");
		},
		left(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "-270deg");
		},
		back(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "-180deg");
		},
		top(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-90deg");
			cubeElement.style.setProperty("--rotateY", "0deg");
		},
		posterior(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-180deg");
			cubeElement.style.setProperty("--rotateY", "-180deg");
		},
		bottom(cubeElement) {
			requestAnimationFrame(() => {
				cubeElement.style.transition = "none";
				cubeElement.style.setProperty("--rotateX", "-360deg");
				requestAnimationFrame(() => {
					cubeElement.style.transition = "";
					cubeElement.style.setProperty("--rotateX", "-270deg");
					cubeElement.style.setProperty("--rotateY", "0deg");
				});
			});
		},
		anterior(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "0deg");
		},
	},
	back: {
		front(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "0deg");
		},
		left(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "-270deg");
		},
		right(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "-90deg");
		},
		top(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-90deg");
			cubeElement.style.setProperty("--rotateY", "0deg");
		},
		posterior(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-180deg");
		},
		bottom(cubeElement) {
			requestAnimationFrame(() => {
				cubeElement.style.transition = "none";
				cubeElement.style.setProperty("--rotateX", "-360deg");
				cubeElement.style.setProperty("--rotateY", "-360deg");
				requestAnimationFrame(() => {
					cubeElement.style.transition = "";
					cubeElement.style.setProperty("--rotateX", "-270deg");
					cubeElement.style.setProperty("--rotateY", "-180deg");
				});
			});
		},
		anterior(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "0deg");
		},
	},
	left: {
		front(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "-360deg");
			cubeElement.addEventListener(
				"transitionend",
				() => {
					requestAnimationFrame(() => {
						cubeElement.style.transition = "none";
						cubeElement.style.setProperty("--rotateY", "0deg");
						requestAnimationFrame(() => {
							cubeElement.style.transition = "";
						});
					});
				},
				{ once: true }
			);
		},
		back(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "-180deg");
		},
		right(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "-90deg");
		},
		top(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-90deg");
			cubeElement.style.setProperty("--rotateY", "-360deg");
			requestAnimationFrame(() => {
				cubeElement.style.transition = "none";
				cubeElement.style.setProperty("--rotateY", "0deg");
				requestAnimationFrame(() => {
					cubeElement.style.transition = "";
				});
			});
		},
		posterior(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-180deg");
			cubeElement.style.setProperty("--rotateX", "-180deg");
		},
		bottom(cubeElement) {
			requestAnimationFrame(() => {
				cubeElement.style.transition = "none";
				cubeElement.style.setProperty("--rotateX", "-360deg");
				cubeElement.style.setProperty("--rotateY", "-360deg");
				requestAnimationFrame(() => {
					cubeElement.style.transition = "";
					cubeElement.style.setProperty("--rotateX", "-270deg");
					cubeElement.style.setProperty("--rotateY", "-180deg");
				});
			});
		},
		anterior(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "-360deg");
			cubeElement.addEventListener(
				"transitionend",
				() => {
					requestAnimationFrame(() => {
						cubeElement.style.transition = "none";
						cubeElement.style.setProperty("--rotateY", "0deg");
						requestAnimationFrame(() => {
							cubeElement.style.transition = "";
						});
					});
				},
				{ once: true }
			);
		},
	},
	top: {
		right(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "0deg");
			cubeElement.style.setProperty("--rotateY", "-90deg");
		},
		left(cubeElement) {
			requestAnimationFrame(() => {
				cubeElement.style.transition = "none";
				cubeElement.style.setProperty("--rotateY", "-360deg");
				requestAnimationFrame(() => {
					cubeElement.style.transition = "";
					cubeElement.style.setProperty("--rotateX", "0deg");
					cubeElement.style.setProperty("--rotateY", "-270deg");
				});
			});
		},
		back(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "0");
			cubeElement.style.setProperty("--rotateY", "-180deg");
		},
		front(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "0deg");
		},
		anterior(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "0deg");
		},
		posterior(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-180deg");
		},
		bottom(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-270deg");
		},
	},
	bottom: {
		right(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "0deg");
			cubeElement.style.setProperty("--rotateY", "-90deg");
		},
		left(cubeElement) {
			requestAnimationFrame(() => {
				cubeElement.style.transition = "none";
				cubeElement.style.setProperty("--rotateY", "-360deg");
				requestAnimationFrame(() => {
					cubeElement.style.transition = "";
					cubeElement.style.setProperty("--rotateX", "0deg");
					cubeElement.style.setProperty("--rotateY", "-270deg");
				});
			});
		},
		back(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-180deg"); //?
			cubeElement.style.setProperty("--rotateY", "-180deg");
		},
		front(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-360deg");
			cubeElement.addEventListener(
				"transitionend",
				() => {
					requestAnimationFrame(() => {
						cubeElement.style.transition = "none";
						cubeElement.style.setProperty("--rotateX", "0deg");
						requestAnimationFrame(() => {
							cubeElement.style.transition = "";
						});
					});
				},
				{ once: true }
			);
		},
		anterior(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-360deg");
			cubeElement.addEventListener(
				"transitionend",
				() => {
					requestAnimationFrame(() => {
						cubeElement.style.transition = "none";
						cubeElement.style.setProperty("--rotateX", "0deg");
						requestAnimationFrame(() => {
							cubeElement.style.transition = "";
						});
					});
				},
				{ once: true }
			);
		},
		posterior(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-180deg");
		},
		top(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-90deg");
		},
	},
	anterior: {
		right(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "-90deg");
		},
		left(cubeElement) {
			requestAnimationFrame(() => {
				cubeElement.style.transition = "none";
				cubeElement.style.setProperty("--rotateY", "-360deg");
				requestAnimationFrame(() => {
					cubeElement.style.setProperty("--rotateY", "-270deg");
					cubeElement.style.transition = "";
				});
			});
		},
		top(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-90deg");
		},
		bottom(cubeElement) {
			requestAnimationFrame(() => {
				cubeElement.style.transition = "none";
				cubeElement.style.setProperty("--rotateX", "-360deg");
				requestAnimationFrame(() => {
					cubeElement.style.setProperty("--rotateX", "-270deg");
					cubeElement.style.transition = "";
				});
			});
		},
		back(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "-180deg");
		},
		posterior(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-180deg");
		},
		front(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "-360deg");
			cubeElement.addEventListener(
				"transitionend",
				() => {
					requestAnimationFrame(() => {
						cubeElement.style.transition = "none";
						cubeElement.style.setProperty("--rotateY", "0deg");
						requestAnimationFrame(() => {
							cubeElement.style.transition = "";
						});
					});
				},
				{ once: true }
			);
		},
	},
	posterior: {
		front(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "0deg");
		},
		left(cubeElement) {
			requestAnimationFrame(() => {
				cubeElement.style.transition = "none";
				cubeElement.style.setProperty("--rotateY", "-360deg");
				requestAnimationFrame(() => {
					cubeElement.style.setProperty("--rotateY", "-270deg");
					cubeElement.style.setProperty("--rotateX", "0deg");
					cubeElement.style.transition = "";
				});
			});
		},
		right(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "-90deg");
			cubeElement.style.setProperty("--rotateX", "0deg");
		},
		top(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "-90deg");
		},
		back(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "0deg");
			cubeElement.style.setProperty("--rotateY", "-180deg");
		},
		bottom(cubeElement) {
			cubeElement.style.setProperty("--rotateX", "0deg");
			cubeElement.style.setProperty("--rotateY", "-180deg");
		},
		anterior(cubeElement) {
			cubeElement.style.setProperty("--rotateY", "0deg");
		},
	},
};

export const animateToNewSlide = (
	cubeElement: HTMLElement,
	fromElement: HTMLElement | null,
	toElement: HTMLElement | null
) => {
	if (!fromElement && !toElement) {
		return;
	}

	//TODO: when already in animation, another animation will confuse the cube
	//we could either finish the current animation instantly or dont allow for the another animation while this is running

	// cubeElement.getAnimations().forEach((anim) => {
	// 	if (!anim.transitionProperty) {
	// 		return;
	// 	}
	// 	anim.finish();
	// });

	const fromPosition = (fromElement?.dataset.position ?? "front") as Positions;
	const toPosition = (toElement?.dataset.position ?? "front") as Positions;
	const direction = ["left", "right", "front", "back"].includes(fromPosition)
		? "Horizontal"
		: "Vertical";

	console.log({ fromPosition, toPosition, direction });

	cubeElement.dataset[`active${direction}`] = fromElement?.id ?? "";

	positionalStateMachine[fromPosition][toPosition]?.(cubeElement);
};

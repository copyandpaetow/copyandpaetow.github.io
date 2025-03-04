const addButtonListeners = (
  remoteContent: HTMLDetailsElement,
  remoteButtonController: AbortController
) => {
  const signal = remoteButtonController.signal;

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.key !== "Escape") {
        return;
      }

      remoteContent.removeAttribute("open");
    },
    { signal }
  );

  document.getElementById("remote-exit")?.addEventListener(
    "click",
    () => {
      remoteContent.removeAttribute("open");
    },
    { signal }
  );
};

export const remoteInteractivityEnhancements = () => {
  const remote = document.querySelector(".remote") as HTMLElement;
  const remoteBody = remote.querySelector(".interactive-remote") as HTMLElement;
  const remoteScreen = remote.querySelector("details") as HTMLDetailsElement;

  const controller = new AbortController();
  const signal = controller.signal;

  try {
    document.getElementById("remote-power")?.addEventListener(
      "click",
      () => {
        remoteScreen.toggleAttribute("open");
        document.getElementById("tv-power-button")?.click();
      },
      { signal }
    );

    remoteScreen?.addEventListener(
      "toggle",
      () => {
        const remoteButtonController = new AbortController();

        if (remoteScreen.open) {
          remoteBody?.removeAttribute("inert");
          addButtonListeners(remoteScreen, remoteButtonController);
        } else {
          remoteBody?.setAttribute("inert", "");
          remoteButtonController.abort();
        }
      },
      { signal }
    );
  } catch (error) {
    controller.abort();
  }
};

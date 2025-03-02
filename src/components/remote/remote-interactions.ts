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

  document.getElementById("remote-power")?.addEventListener(
    "click",
    () => {
      remoteContent.removeAttribute("open");
    },
    { signal }
  );
};

export const remoteInteractions = () => {
  const remote = document.querySelector(".remote") as HTMLElement;
  const remoteBody = remote.querySelector(".interactive-remote") as HTMLElement;
  const remoteScreen = remote.querySelector("details") as HTMLDetailsElement;

  console.log({ remote, remoteBody, remoteScreen });

  const controller = new AbortController();
  const signal = controller.signal;

  try {
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

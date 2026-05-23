(function () {
  const list = document.querySelector(".experience-list");
  if (!list) return;

  const toggles = list.querySelectorAll(".experience-toggle");

  function closeAll() {
    toggles.forEach((toggle) => {
      const panel = document.getElementById(
        toggle.getAttribute("aria-controls"),
      );
      toggle.setAttribute("aria-expanded", "false");
      toggle.classList.remove("is-active");
      if (panel) panel.hidden = true;
    });
  }

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const panel = document.getElementById(
        toggle.getAttribute("aria-controls"),
      );
      const isOpen = toggle.getAttribute("aria-expanded") === "true";

      closeAll();

      if (!isOpen && panel) {
        toggle.setAttribute("aria-expanded", "true");
        toggle.classList.add("is-active");
        panel.hidden = false;
      }
    });
  });
})();

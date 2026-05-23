(function () {
  const card = document.querySelector(".flip-card");
  if (!card) return;

  const trigger = card.querySelector(".flip-card__trigger");
  const emailLink = card.querySelector(".flip-card__email");

  trigger.addEventListener("click", () => {
    const flipped = card.classList.toggle("is-flipped");
    trigger.setAttribute("aria-expanded", String(flipped));
  });

  if (emailLink) {
    emailLink.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }
})();

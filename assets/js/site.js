(() => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector("#nav-menu");
  if (!toggle || !menu) return;

  const close = () => {
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("is-open", !expanded);
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (target.closest(".site-nav")) return;
    close();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();

/* Shared script for the service and city pages: hamburger menu + footer year */
(function () {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const nav = document.querySelector(".nav");
  const btn = nav.querySelector(".menu-btn");
  const menu = document.getElementById("mobileMenu");
  const setOpen = open => {
    menu.hidden = !open;
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  btn.addEventListener("click", () => setOpen(menu.hidden));
  document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
  document.addEventListener("click", e => { if (!menu.hidden && !nav.contains(e.target)) setOpen(false); });
})();

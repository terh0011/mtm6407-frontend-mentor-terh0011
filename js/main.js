// Mobile navigation toggle
const nav = document.querySelector("#primary-nav");
const openBtn = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".menu-close");
const overlay = document.querySelector("[data-overlay]");

function openMenu() {
  nav.dataset.open = "true";
  overlay.hidden = false;
  openBtn.setAttribute("aria-expanded", "true");
  document.body.classList.add("menu-open");
  closeBtn.focus();
}

function closeMenu() {
  nav.dataset.open = "false";
  overlay.hidden = true;
  openBtn.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
  openBtn.focus();
}

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.dataset.open === "true") closeMenu();
});

// Reset state if the viewport grows to desktop while the menu is open
window.matchMedia("(min-width: 50em)").addEventListener("change", (e) => {
  if (e.matches && nav.dataset.open === "true") closeMenu();
});

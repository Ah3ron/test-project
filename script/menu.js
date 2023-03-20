const menuButton = document.querySelector(".menu__button");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("menu_visible");

  menuButton.disabled = true;
  setTimeout(() => {
    menuButton.disabled = false;
  }, 100);
});

document.body.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
    menu.classList.remove("menu_visible");
  }
});

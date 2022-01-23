let xScroll = 0;
let banners = document.querySelectorAll(".out__banner");
window.addEventListener("mousewheel", () => {
  scrollXs();
});
function scrollXs() {
  xScroll += 1920;
  document.querySelector(".banners").style.left = -xScroll + "px";
  if (xScroll >= 5760) {
    xScroll = -1920;
  }
  document.querySelectorAll(".menu__link").forEach((item) => {
    xScroll == 0 || xScroll == 3840 ? item.classList.remove("white") : item.classList.add("white");
  });
}

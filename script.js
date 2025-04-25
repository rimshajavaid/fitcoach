const hamburgerIconElem = document.querySelector(".page-header__mobile-menu")
const mobileNavElem = document.querySelector(".mobile-nav")
const overlayElem = document.querySelector(".overlay")
const closeIconElem = document.querySelector(".mobile-nav__close-icon")
const rootElem = document.querySelector("html")

hamburgerIconElem.addEventListener("click", () => {
  mobileNavElem.classList.add("active")
  overlayElem.style.display = "block"
  rootElem.style.overflowY = "hidden"
})

closeIconElem.addEventListener("click", () => {
  mobileNavElem.classList.remove("active")
  overlayElem.style.display = "none"
  rootElem.style.overflowY = "auto"
})

overlayElem.addEventListener("click", () => {
  overlayElem.style.display = "none"
  mobileNavElem.classList.remove("active")
  rootElem.style.overflowY = "auto"
})

window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    rootElem.style.overflowY = "auto"
  }
})

window.onscroll = function () {
  const btn = document.getElementById("goToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

document.getElementById("goToTopBtn").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function mobileCheck() {
  //MOBILE MENU

  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".navbar__menu");
  const logo = document.querySelector(".logo");
  const body = document.querySelector(".body");

  menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
    logo.classList.toggle("logo-white");
    body.classList.toggle("overflow");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  //SCROLLER
  const scrollers = document.querySelectorAll(".scroller");
  // if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  //   console.log("this is working");
  //   addAnimation();
  // }

  function addAnimation() {
    console.log("add animation is working");
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller-inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        duplicatedItem.classList.add("addedImg");
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
  addAnimation();
}

mobileCheck();

// TEXT REVEAL

const mobileHero__text = new SplitType(".heroText");
const desktopHero__text = new SplitType(".hero__text");

gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.1,
  opacity: 1,
});

//arrow animation
const arrow = document.querySelector(".arrow");

setTimeout(() => {
  arrow.style.opacity = 1;
}, 3700);

//revealing scrollers for mobile
const scrollers = document.querySelectorAll(".scroller-inner");

setTimeout(() => {
  scrollers.forEach((scroller) => {
    scroller.style.opacity = 1;
  });
}, 3500);

if (window.innerWidth > 500) {
  //scroll animation using scrollReveal
  ScrollReveal({ reset: false, distance: "60px", duration: 2500, delay: 400 });

  ScrollReveal().reveal(".services", { delay: 200, origin: "left" });
  ScrollReveal().reveal(".section__header", {
    delay: 400,
    origin: "top",
  });
  ScrollReveal().reveal(".intro__text", {
    delay: 200,
    origin: "right",
  });
  ScrollReveal().reveal(".classic", {
    delay: 200,
    origin: "bottom",
  });
  ScrollReveal().reveal(".content__images", {
    delay: 200,
    origin: "bottom",
  });
  ScrollReveal().reveal(".classic", {
    delay: 200,
    origin: "bottom",
  });
  ScrollReveal().reveal(".comingSoon", {
    delay: 100,
    origin: "left",
  });
  ScrollReveal().reveal(".cleanRestorePointers", {
    delay: 300,
    origin: "bottom",
  });
  ScrollReveal().reveal(".cleanImg", {
    delay: 400,
    origin: "right",
  });

  ScrollReveal().reveal(".restoreImg", {
    delay: 400,
    origin: "left",
  });
  ScrollReveal().reveal(".verticalLine", {
    delay: 200,
    origin: "bottom",
  });
  ScrollReveal().reveal(".cleanRestoreImgMobile", {
    delay: 200,
    origin: "left",
  });
  ScrollReveal().reveal(".email__form", {
    delay: 250,
    origin: "bottom",
  });
}

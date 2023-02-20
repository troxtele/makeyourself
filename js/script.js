const nav = document.querySelector("nav");
const navLinks = [...document.querySelectorAll(".nav_link")];
const scrollTopBtn = document.querySelector(".scroll_top");
window.addEventListener("scroll", () => {
  // header Drop down
  if (window.scrollY > 20) {
    nav.classList.add("drop-shadow-lg");

    navLinks.map((el) => el.classList.add("py-4"));
    navLinks.map((el) => el.classList.remove("py-6"));
  } else {
    nav.classList.remove("drop-shadow-lg");
    navLinks.map((el) => el.classList.add("py-6"));
    navLinks.map((el) => el.classList.remove("py-4"));
  }
  // Scroll to top
  if (window.scrollY > 100) {
    scrollTopBtn.classList.add("bottom-14");
    scrollTopBtn.classList.remove("-bottom-[100px]");
  } else {
    scrollTopBtn.classList.add("-bottom-[100px]");
    scrollTopBtn.classList.remove("bottom-14");
  }
});
$(document).ready(function () {
  $(window).scroll(scrollEffects);
  function scrollEffects() {
    var windowScroll = $(window).scrollTop();
    // Hero parallax
    var heroHeight = $(".hero_parallax").height();
    var backgroundPosition = -(windowScroll / heroHeight) * 200;
    $(".hero_parallax").css("background-position-y", backgroundPosition);
  }
});

// Why Us slider
var swiper = new Swiper(".why_us_slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".why_us_pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

// Client slider
var swiper = new Swiper(".client_slider", {
  speed: 800,
  autoplay: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 30,
  loopFillGroupWithBlank: true,
  grabCursor: true,
  pagination: {
    el: ".client_pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    },

    1200: {
      slidesPerView: 7,
      slidesPerGroup: 7,
    },
  },
});

var testiSlide = new Swiper(".testimonial_slider", {
  autoHeight: true,
  speed: 700,
  rewind: true,
  pagination: {
    el: ".testi_pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Choose Slide
var chooseSlide = new Swiper(".choose_slider", {
  speed: 500,
  rewind: true,
  pagination: {
    el: ".choose_pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Get year
const d = new Date();
let year = d.getFullYear();
document.querySelector("#year").innerHTML = year;

// NAV +++++++++++++++++++

let courseHeight = 300;
const coursesContainer = document.querySelector(".courses_container");
const courses = document.querySelector(".courses_li");
const leader = document.querySelector(".leader_sub");
const presence = document.querySelector(".presence_sub");
const influence = document.querySelector(".influence_sub");
const negotiation = document.querySelector(".negotiation_sub");
const story = document.querySelector(".story_sub");
const one = document.querySelector(".one_sub");

const arr = [leader, presence, influence, negotiation, story, one];
const clk = [false, false, false, false, false, false];

arr.map((item, index) => {
  item.addEventListener("click", function () {
    if (clk[index]) {
      courseHeight -= 400;
    } else {
      courseHeight += 400;
    }
    clk[index] = !clk[index];
    courses.style.maxHeight = courseHeight + "px";
  });
});
let truthy = true;
coursesContainer.addEventListener("click", function () {
  if (truthy) {
    courses.style.maxHeight = courseHeight + "px";
  } else {
    courses.style.maxHeight = "0px";
  }
  truthy = !truthy;
});

// ++++++++++++++++++++++++++

// Footer scroll top

// Scroll to Top Click
const scrollTopBtn = document.querySelector(".scroll_top");

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const nav = document.querySelector("nav");
const navLinks = [...document.querySelectorAll(".nav_link")];
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

// ************************** Sliders
// Why Us slider
var whySlider = new Swiper(".why_us_slider", {
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
var clientSwiper = new Swiper(".client_slider", {
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

var testiSlider = new Swiper(".testimonial_slider", {
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
var chooseSlider = new Swiper(".choose_slider", {
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

// Splitting Characters
const splitWrapper = document.querySelector(".lineAnimWrapper");
const splitting = document.querySelectorAll(".splitting");

const io = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      [...splitting].map((item) => {
        item.classList.add("linesAnimIn");
      });
      observer.disconnect();
    }
  });
});

io.observe(splitWrapper);

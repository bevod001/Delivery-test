"use strict";

$(document).ready(function () {
  $(".slider__inner").slick({
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    sliderToScroll: 1,
    adaptiveHeight: false,
    centerMode: true,
    centerPadding: "20px",
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider/prev.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/slider/next.png"></button>',
    responsive: [{
      breakpoint: 1201,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 320,
      settings: {}
    }]
  });
});
window.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelector(".promo__menu-nav"),
      menuItem = document.querySelectorAll(".promo__menu-item"),
      hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("promo__menu-nav-active");
  });
  menuItem.forEach(function (item) {
    item.addEventListener("click", function () {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("promo__menu-nav-active");
    });
  });
});
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
    centerPadding: "50px",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/slider/prev.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/slider/next.png"></button>'
  });
});
"use strict";
$(document).ready(function () {
  $("select").niceSelect();

  AOS.init({
    once: true,
  });
});
window.addEventListener("load", AOS.refresh);

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      Counter Up Activation
  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      Slick Slider Activation
  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
  $(".slick-slider").slick();
  if (jQuery(".testimonial-slider--01").length > 0) {
    $(".testimonial-slider--01")
      .not(".slick-initialized")
      .slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: $(".testimonial-slider--01__control-buttons .button--prev"),
        nextArrow: $(".testimonial-slider--01__control-buttons .button--next"),
      });
  }

// /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//       Preloader Activation
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

$(window).load(function () {
  setTimeout(function () {
    $("#loader").fadeOut(500);
  }, 1000);
  setTimeout(function () {
    $("#loader").remove();
  }, 2000);
});

//***ISOTOPE***
// Portfolio-01
$(window).load(function () {
  $(".portfolio-active").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
  });
});

// filter items on button click
$(".portfolio-filter-menu").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $(".portfolio-active").isotope({ filter: filterValue });
});

$(".slider-arrow-click-active .slick-arrow").on("click", function (e) {
  if (!$(this).hasClass("active")) {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  }
});

/*-----------------------------------------------------------------------------------

    Theme Name: Renuma - Solar & Renewable Energy HTML Template
    Description: Solar & Renewable Energy HTML Template
    Author: Website Design Templates
    Version: 1.0
        
    ---------------------------------- */

(function ($) {
  "use strict";

  var $window = $(window);

  $("#preloader").fadeOut("normall", function () {
    $(this).remove();
  }),
   
    $window.on("scroll", function () {
      500 < $(this).scrollTop()
        ? $(".scroll-to-top").fadeIn(400)
        : $(".scroll-to-top").fadeOut(400);
    }),
    $(".scroll-to-top").on("click", function (e) {
      e.preventDefault(), $("html, body").animate({ scrollTop: 0 }, 600);
    });
  var pageSection = $(".parallax,.bg-img");
  pageSection.each(function (e) {
    $(this).attr("data-background") &&
      $(this).css(
        "background-image",
        "url(" + $(this).data("background") + ")"
      );
  });
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: !1,
    live: !0,
  });
  function fullScreenHeight() {
    var e = $(".full-screen"),
      o = $window.height();
    e.css("min-height", o);
  }
  function ScreenFixedHeight() {
    var e = $("header").height(),
      o = $(".screen-height"),
      e = $window.height() - e;
    o.css("height", e);
  }
  function SetResizeContent() {
    fullScreenHeight(),
      ScreenFixedHeight(),
      $(window).width() < 992 &&
        $(".navbar-nav .dropdown-menu.sub-menu").css("display", "none");
  }
  wow.init(),
    $(".story-video").magnificPopup({ delegate: ".video", type: "iframe" }),
    $(".source-modal").magnificPopup({
      type: "inline",
      mainClass: "mfp-fade",
      removalDelay: 160,
    }),
    $(".current-year").text(new Date().getFullYear()),
    0 !== $(".copy-clipboard").length &&
      (new ClipboardJS(".copy-clipboard"),
      $(".copy-clipboard").on("click", function () {
        var e = $(this);
        e.text();
        e.text("Copied"),
          setTimeout(function () {
            e.text("Copy");
          }, 2e3);
      })),
    $window.resize(function (e) {
      setTimeout(function () {
        SetResizeContent();
      }, 500),
        e.preventDefault();
    }),
    SetResizeContent();

  $(document).ready(function () {
    $(".testimonial-carousel1").owlCarousel({
      loop: !0,
      responsiveClass: !0,
      autoplay: !0,
      smartSpeed: 1500,
      nav: !1,
      dots: !1,
      thumbs: !0,
      thumbsPrerendered: !0,
      center: !1,
      margin: 50,
      responsive: {
        0: { items: 1, margin: 0 },
        768: { items: 1 },
        992: { items: 1 },
        1200: { items: 1 },
      },
    }),
      $(".testimonial-carousel2").owlCarousel({
        loop: !0,
        responsiveClass: !0,
        autoplay: !0,
        smartSpeed: 1500,
        nav: !1,
        dots: !0,
        thumbs: !1,
        thumbsPrerendered: !0,
        center: !1,
        margin: 30,
        responsive: { 0: { items: 1 }, 992: { items: 2 } },
      }),
      $(".testimonial-carousel3").owlCarousel({
        loop: true,
        responsiveClass: !0,
        autoplay: true,
        autoplayTimeout: 5e3,
        smartSpeed: 1500,
        nav: !1,
        dots: !1,
        thumbs: !1,
        thumbsPrerendered: !1,
        center: !1,
        margin: 50,
        items: 1,
      }),
 
      $(".client-carousel").owlCarousel({
        loop: !0,
        responsiveClass: !0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        smartSpeed: 1500,
        nav: !1,
        dots: !1,
        center: !1,
        margin: 30,
        responsive: {
          0: { items: 1 },
          481: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
          1200: { items: 6 },
        },
      }),
      // $(".product-carousel").owlCarousel({
      //   loop: !0,
      //   responsiveClass: !0,
      //   autoplay: !0,
      //   autoplayTimeout: 5e3,
      //   smartSpeed: 1500,
      //   nav: !1,
      //   dots: !1,
      //   center: !1,
      //   margin: 20,
      //   responsive: { 0: { items: 1 }, 481: { items: 2 }, 768: { items: 3 } },
      // }),
      $(".best-product best-indicator").owlCarousel({
        loop: !0,
        responsiveClass: !0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        smartSpeed: 1500,
        nav: !1,
        dots: !1,
        center: !1,
        margin: 20,
        responsive: { 0: { items: 1 }, 481: { items: 2 }, 768: { items: 3 } },
      }),
      $(".client-carousel2").owlCarousel({
        loop: !0,
        responsiveClass: !0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        smartSpeed: 1500,
        nav: !1,
        dots: !1,
        center: !1,
        margin: 30,
        responsive: {
          0: { items: 1 },
          481: { items: 2 },
          768: { items: 3 },
          992: { items: 4 },
          1200: { items: 5, margin: 40 },
          1400: { items: 6, margin: 40 },
        },
      }),
      $(".why-choose-carousel").owlCarousel({
        loop: !0,
        responsiveClass: !0,
        autoplay: !0,
        smartSpeed: 900,
        nav: !1,
        dots: !0,
        center: !1,
        margin: 30,
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } },
      }),
      $(".slider-fade").owlCarousel({
        items: 1,
        loop: !0,
        dots: !0,
        margin: 0,
        nav: !1,
        navText: [
          "<span class='ti-arrow-left'></span>",
          "<span class='ti-arrow-right'></span>",
        ],
        autoplay: !0,
        smartSpeed: 1500,
        mouseDrag: !0,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        responsive: { 992: { nav: !0, dots: !1 } },
      }),
      $(".owl-carousel").owlCarousel({
        items: 2,
        loop: true,
        dots: true,
        margin: 0,
        autoplay: true,
        smartSpeed: 500,
      }),
      {
        
      }
    });


})(jQuery);

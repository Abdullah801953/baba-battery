
import React, { useEffect } from "react";
// import 'css/styles.css'
// import 'css/plugins.css'
function Banner() {
  useEffect(() => {
    // Carousel change event ko handle karne ke liye function
    const handleCarouselChange = (event) => {
      // Carousel ka current index calculate karein
      const currentIndex = event.item.index - 2;

      // Saare existing animations ko remove karein
      $("span, h1, p, a").removeClass("animated fadeInUp");

      // Current carousel item ke liye animations add karein
      $(".owl-item")
        .not(".cloned")
        .eq(currentIndex)
        .find("span, h1, p, a")
        .addClass("animated fadeInUp");
    };

    // Event listener ko attach karein
    $(".slider-fade").on("changed.owl.carousel", handleCarouselChange);

    // Cleanup function jo component unmount hone par call hoga
    return () => {
      // Event listener ko remove karein
      $(".slider-fade").off("changed.owl.carousel", handleCarouselChange);
    };
  }, []); // Empty dependency array means this effect will only run once after initial render

  useEffect(() => {
    // Check if ".horizontaltab" elements exist before applying easyResponsiveTabs
    if ($(".horizontaltab").length !== 0) {
      $(".horizontaltab").easyResponsiveTabs({
        type: "default",
        width: "auto",
        fit: true,
        tabidentify: "hor_1",
        activate: function (e) {
          var a = $(this),
            s = $("#nested-tabInfo");
          $("span", s).text(a.text());
          s.show();
        },
      });
    }

    // Apply counterUp plugin to elements with class "countup"
    $(".countup").counterUp({ delay: 25, time: 2000 });

    // Apply countdown plugin to elements with class "countdown"
    $(".countdown").countdown({ date: "01 Jun 2026 00:01:00", format: "on" });

    // Remove "active" class from navbar elements with class "has-sub"
    $(".navbar-nav li.has-sub").removeClass("active");
  }, []);

  useEffect(() => {
    // Setting background images for elements with data-background attribute
    var pageSection = $(".parallax,.bg-img");
    pageSection.each(function () {
      if ($(this).attr("data-background")) {
        $(this).css(
          "background-image",
          "url(" + $(this).data("background") + ")"
        );
      }
    });

    // Initializing WOW.js
    var wow = new WOW({
      boxClass: "wow", // default
      animateClass: "animated", // default
      offset: 0, // default
      mobile: false, // disable animations on mobile
      live: true, // default
    });
    wow.init();

    // Fullscreen height function
    const fullScreenHeight = () => {
      var e = $(".full-screen");
      var o = $(window).height();
      e.css("min-height", o);
    };

    // Screen fixed height function
    const screenFixedHeight = () => {
      var e = $("header").height();
      var o = $(".screen-height");
      var newHeight = $(window).height() - e;
      o.css("height", newHeight);
    };

    // Set resize content function
    const setResizeContent = () => {
      fullScreenHeight();
      screenFixedHeight();
      if ($(window).width() < 992) {
        $(".navbar-nav .dropdown-menu.sub-menu").css("display", "none");
      }
    };

    // Call setResizeContent initially and on window resize
    setResizeContent();
    $(window).resize(setResizeContent);

    // Cleanup function to remove event listeners and other cleanup operations
    return () => {
      $(window).off("resize", setResizeContent);
    };
  }, []);
  return (
    <div>
      <section className="full-screen py-0 top-position1">
        <div className="slider-fade owl-carousel owl-theme w-100">
          {/* <div
            className="item bg-img cover-background theme-overlay-dark-blue"
            data-overlay-dark="55"
            // data-background="/src/img/banner/baba-battery-slide1.jpeg"
            style={{
              backgroundImage: `url(${"/src/img/banner/battery-slide1.jpeg"})`,
            }}
          > */}
          <div
            className="item bg-img cover-background theme-overlay-dark-blue wow animate__fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
            data-overlay-dark="55"
            // data-background="img/banner/slide-02.jpg"
            style={{
              backgroundImage: `url(${"banner/battery-slide1.jpg"})`,
            }}
          >
            <div className="container h-100">
              <div className="d-table w-100 h-100">
                <div className="d-table-cell align-middle">
                  <div className="row justify-content-center text-center position-relative">
                    <div className="col-md-10 col-lg-9 col-xl-8 z-index-3 position-relative main-banner-area">
                      <span className="banner-icon d-none d-lg-block animated fadeInUp">
                        <i className="flaticon-032-ecology display-8 text-white"></i>
                      </span>
                      <p className="text-secondary font-weight-800 display-29 display-lg-28 display-xl-26 mb-2 text-shadow animated fadeInUp">
                        As a world innovator in energy stockpiling.
                      </p>
                      <span className="card-border position-relative animated fadeInUp"></span>
                      <h1 className="text-white display-19 display-sm-15 display-md-13 display-lg-4 display-xxl-3 mb-4 text-shadow animated fadeInUp">
                        Biggest Producer of Wind and Solar Energy
                      </h1>
                      <a
                        href="contact.html"
                        className="btn-style2 animated fadeInUp"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="item bg-img cover-background theme-overlay-dark-blue"
            data-overlay-dark="55"
            // data-background="img/banner/slide-02.jpg"
            style={{
              backgroundImage: `url(${"banner/battery-slide2.jpg"})`,
            }}
          >
            <div className="container h-100">
              <div className="d-table w-100 h-100">
                <div className="d-table-cell align-middle">
                  <div className="row justify-content-center text-center position-relative">
                    <div className="col-md-10 col-lg-9 col-xl-8 z-index-3 position-relative main-banner-area">
                      <span className="banner-icon d-none d-lg-block">
                        <i className="flaticon-032-ecology display-8 text-white"></i>
                      </span>
                      <p className="text-secondary font-weight-800 display-29 display-lg-28 display-xl-26 mb-2 text-shadow">
                        As a world innovator in energy stockpiling.
                      </p>
                      <span className="card-border position-relative"></span>
                      <h1 className="text-white display-19 display-sm-15 display-md-13 display-lg-4 display-xxl-3 mb-4 text-shadow">
                        Manageable, Reliable and Affordable Energy!
                      </h1>
                      <a href="contact.html" className="btn-style2">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="item bg-img cover-background theme-overlay-dark-blue"
            data-overlay-dark="55"
            // data-background="img/banner/slide-03.jpg"
            style={{
              backgroundImage: `url(${"banner/battery-slide3.jpg"})`,
            }}
          >
            <div className="container h-100">
              <div className="d-table w-100 h-100">
                <div className="d-table-cell align-middle">
                  <div className="row justify-content-center text-center position-relative">
                    <div className="col-md-10 col-lg-9 col-xl-8 z-index-3 position-relative main-banner-area">
                      <span className="banner-icon d-none d-lg-block animated fadeInUp">
                        <i className="flaticon-047-windmill display-8 text-white"></i>
                      </span>
                      <p className="text-secondary font-weight-800 display-29 display-lg-28 display-xl-26 mb-2 text-shadow animated fadeInUp">
                        As a world innovator in energy stockpiling.
                      </p>
                      <span className="card-border position-relative fadeInUp"></span>
                      <h1 className="text-white display-19 display-sm-15 display-md-13 display-lg-4 display-xxl-3 mb-4 text-shadow animated fadeInUp">
                        Evergreen Producer of Wind Energy
                      </h1>
                      <a
                        href="contact.html"
                        className="btn-style2 animated fadeInUp"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;

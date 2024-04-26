import jquery from "jquery";
import React, { useEffect, useState } from "react";
function CrouselItems() {
  useEffect(() => {
    // Assuming products data is ready to be used here, initialize the carousel
    $(".product-carousel").owlCarousel({
      loop: true,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1500,
      nav: false,
      dots: false,
      center: false,
      margin: 20,
      responsive: {
        0: { items: 1 },
        481: { items: 2 },
        768: { items: 3 },
      },
    });

    // Cleanup function to properly destroy the carousel when the component unmounts
    return () => {
      $(".product-carousel").owlCarousel("destroy");
    };
  }, [products]);
  return (
    <>
      <div className="product-area-3 product-4 area-padding">
        <div className="container">
          <div className="row"></div>
          <div className="row">
            <div className="best-product best-indicator owl-carousel owl-theme owl-loaded">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-4095px, 0px, 0px)",
                    transition: "all 0.25s ease 0s",
                    width: "5850px",
                  }}
                >
                  <div
                    className="owl-item cloned"
                    style={{ width: "585px", marginRight: "0px" }}
                  >
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="single-product single-product-2">
                            <span className="sale-text">Sale</span>
                            <div className="single-product-img green">
                              <div className="product-img">
                                <a href="#">
                                  <img
                                    className="first-img"
                                    src="/src/img/service/2.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Start product content */}
                        <div className="col-md-6 col-sm-6">
                          <div className="single-product single-product-2">
                            <div className="product-content">
                              <h3 className="product-name">
                                <a href="#">Product Title</a>
                              </h3>
                              <div className="price-box">
                                <span className="new-price">$200.00</span>
                              </div>
                              <div className="pro-rating no-rating">
                                <a href="#">
                                  <i class="fa-regular fa-star"></i>
                                </a>
                                <a href="#">
                                  <i class="fa-regular fa-star"></i>
                                </a>
                                <a href="#">
                                  <i class="fa-regular fa-star"></i>
                                </a>
                                <a href="#">
                                  <i class="fa-regular fa-star"></i>
                                </a>
                                <a href="#">
                                  <i class="fa-regular fa-star"></i>
                                </a>
                              </div>
                              <div className="product-decs">
                                <p>
                                  When replacing a multi-lined selection of
                                  text, the generated dummy text maintains the
                                  amount of lines.
                                </p>
                              </div>
                              <div className="add-cart">
                                <a
                                  href="#"
                                  title="Quick view"
                                  data-toggle="modal"
                                  data-target="#productModal"
                                >
                                  Buy Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-controls">
                <div className="owl-nav">
                  <div className="owl-prev" style={{ display: "none" }}>
                    prev
                  </div>
                  <div className="owl-next" style={{ display: "none" }}>
                    next
                  </div>
                </div>
                <div className="owl-dots" style={{}}>
                  <div className="owl-dot">
                    <span />
                  </div>
                  <div className="owl-dot">
                    <span />
                  </div>
                  <div className="owl-dot active">
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrouselItems;

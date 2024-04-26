import React from "react";

function Testimonial() {
  return (
    <div>
      <section
        className="parallax bg-img cover-background"
        data-overlay-dark="5"
        data-background="img/bg/bg-04.jpg"
       
        style={{ backgroundImage: `url(${'/src/img/bg/bg-04.jpg'})`}}

      >
        <div className="container">
          <div
            className="sec-title text-center wow fadeIn"
            data-wow-delay="200ms"
          >
            <span className="white">Testimonial</span>
            <h2 className="h1 mb-0 z-index-2 position-relative text-white">
              What Our Clients Say
            </h2>
          </div>
          <div
            className="row justify-content-center wow fadeIn"
            data-wow-delay="200ms"
          >
            <div className="col-lg-7 text-center">
              <div
                className="testimonial-carousel1 owl-carousel owl-theme owl-loaded owl-drag"
                data-slider-id="1"
              >
                <div>
                  <i className="ti-quote-left display-10 text-white mb-3 d-block"></i>
                  <p className="mb-1-9 display-28 display-md-26 display-lg-24 text-white opacity8">
                    Wind energy is the most valuable business resource. You
                    won't regret it. I'd be lost without wind energy. Needless
                    to say we are extremely satisfied with the results.
                  </p>
                  <h4 className="mb-0 text-secondary">Mikayla Woollard</h4>
                  <span className="small text-white">Client of Company</span>
                </div>


                {/* Repeat the similar structure for other testimonials */}
                
              </div>
              <div
                className="testimonials1 owl-thumbs mt-1-9 mt-lg-5 text-center"
                data-slider-id="1"
              >
                <button className="owl-thumb-item rounded-circle w-60px me-2">
                  <img
                    src="/src/img/avatars/avatar-01.jpg"
                    className="rounded-circle"
                    alt="..."
                  />
                </button>
                <button className="owl-thumb-item rounded-circle w-60px me-2">
                  <img
                    src="/src/img/avatars/avatar-02.jpg"
                    className="rounded-circle"
                    alt="..."
                  />
                </button>
                <button className="owl-thumb-item rounded-circle w-60px me-2">
                  <img
                    src="/src/img/avatars/avatar-03.jpg"
                    className="rounded-circle"
                    alt="..."
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="position-absolute left-15 top-10 d-none d-lg-block">
            <img
              src="/src/img/avatars/avatar-11.png"
              className="rounded-circle"
              alt="..."
            />
          </div>
          <div className="position-absolute right top-20 d-none d-lg-block">
            <img
              src="/src/img/avatars/avatar-09.png"
              className="rounded-circle"
              alt="..."
            />
          </div>
          <div className="position-absolute left bottom-15 d-none d-lg-block">
            <img
              src="/src/img/avatars/avatar-10.png"
              className="rounded-circle"
              alt="..."
            />
          </div>
        </div>
        <span className="testimonial-shape1"></span>
        <span className="testimonial-shape2"></span>
      </section>
    </div>
  );
}

export default Testimonial;

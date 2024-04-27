import React from 'react';

function TestimonialsSection() {
  return (
    <section className="pt-23">
      <div className="container">
        <div className="text-center sec-title wow fadeIn" data-wow-delay="100ms" style={{visibility: 'visible', animationDelay: '100ms', animationName: 'fadeIn'}}>
          <span className="white">Our Testimonials</span>
          <h2 className="h1 mb-0">What People Say?</h2>
        </div>
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-lg-8">
            <div className="testimonial-carousel3 owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div className="owl-stage" style={{transform: 'translate3d(-1812px, 0px, 0px)', transition: 'all 1.5s ease 0s', width: '6342px'}}>
                  <div className="owl-item cloned" style={{width: '856px', marginRight: '50px'}}>
                    <div>
                      <i className="ti-quote-left display-10 text-primary mb-4 d-block"></i>
                      <p className="mb-5 display-28 display-md-26 display-lg-24">The service was excellent. Absolutely wonderful! You guys rock! It's really wonderful. I am completely blown away.</p>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="me-3">
                          <img decoding="async" src="avatars/avatar-03.jpg" className="rounded-circle" alt="Author Image" />
                        </div>
                        <div className="text-start">
                          <h6 className="mb-0">Laura Loyau</h6>
                          <span className="small">Client of Company</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* More items... */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute left-15 top-20">
        <img src="avatars/avatar-04.jpg" className="rounded-circle d-md-block d-none" alt="..." />
      </div>
      <div className="position-absolute left-10 bottom-15">
        <img src="avatars/avatar-06.jpg" className="rounded-circle d-lg-block d-none" alt="..." />
      </div>
      <div className="position-absolute right-5 top-10">
        <img src="avatars/avatar-07.jpg" className="rounded-circle w-70 d-md-block d-none" alt="..." />
      </div>
      <div className="position-absolute right-20 bottom-25">
        <img src="avatars/avatar-05.jpg" className="rounded-circle d-xl-block d-none" alt="..." />
      </div>
    </section>
  );
}

export default TestimonialsSection;

import React from 'react';

function AboutSection() {
  return (
    <section className="about-3">
      <div className="container">
        <div className="row mt-n1-9">
          <div className="col-xl-6 mt-1-9">
            <div className="sec-title half">
              <span>About Us</span>
              <h2 className="h1 mb-0 z-index-2 position-relative">Best wind solutions and renewable energy storage solutions</h2>
            </div>
            <div className="d-flex about-text mb-1-9">
              <div className="flex-shrink-0">
                <i className="flaticon-021-recycle display-8 text-primary lh-1"></i>
              </div>
              <div className="flex-grow-1 ms-3">
                <h4 className="h5">Our Mission</h4>
                <p className="mb-0">An ideal mix of involvement and skill to further our focus on technology advancement.</p>
              </div>
            </div>
            <div className="d-flex about-text mb-1-9">
              <div className="flex-shrink-0">
                <i className="flaticon-024-ecology-1 display-8 text-primary lh-1"></i>
              </div>
              <div className="flex-grow-1 ms-3">
                <h4 className="h5">Our Vision</h4>
                <p className="mb-0">An ideal mix of involvement and skill to further our focus on technology advancement.</p>
              </div>
            </div>
            <a className="btn-style2" href="services.html">Read More</a>
          </div>
          <div className="col-xl-6 mt-1-9">
            <div className="position-relative ms-lg-5 about-img">
              <div className="text-center text-sm-end pb-sm-17">
                <img decoding="async" src="about4.jpg" alt="About image1" />
              </div>
              <img decoding="async" src="content/about5.jpg" className="position-absolute bottom-0 d-none d-sm-block" alt="About image2" />
              <div className="about-img-content d-none d-sm-block">
                <h3 className="h4 mb-3">Wind & Solar Energy</h3>
                <img decoding="async" src="avatars/avatar-08.jpg" className="rounded-circle w-60px mb-3" alt="About image3" />
                <div>
                  <img decoding="async" src="signature-2.png" alt="About image4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

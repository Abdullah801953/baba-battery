import React from 'react';

function AboutSectionHome() {
  return (
    <section className="about-5">
      <div className="container">
        <div className="row align-items-xxl-center">
          <div className="col-lg-6">
            <div className="about-image position-relative mb-2-9 mb-lg-0">
              <img src="/src/img/content/about1.jpg" alt="..." />

              <div className="about-shape3"></div>
              <div className="about-shape4"></div>

              <div className="about-img-text row g-0">
                <div className="col-sm-6">
                  <div className="d-flex p-3 p-xxl-4 h-100 bg-secondary">
                    <div className="flex-shrink-0">
                      <i className="flaticon-012-battery-1 display-10 text-white lh-1"></i>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h3 className="mb-0 text-white"><span className="countup">180</span>k</h3>
                      <p className="mb-0 text-white opacity9">Installed Capacity</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex p-3 p-xxl-4 h-100 bg-primary">
                    <div className="flex-shrink-0">
                      <i className="flaticon-007-iceberg display-10 text-white lh-1"></i>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h3 className="mb-0 text-white"><span className="countup">12</span>k</h3>
                      <p className="mb-0 text-white opacity9">Wtgs Installed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ps-lg-2-9 ps-xl-6 ps-xxl-9">
              <div className="sec-title half">
                <span>About Us</span>
                <h2 className="h1 mb-0 z-index-2 position-relative">Best Wind Solutions and Renewable Energy</h2>
              </div>
              <p className="lead fw-bold">Over 30 year's experience providing top quality carpentry across world.</p>
              <p className="mb-2-2 mb-lg-2-9">Our team of engineers and technicians are professionally trained by the Firm. In parallel with the repair & maintenance of pumps on floating vehicles, we are truly reliable pump doctors.</p>
              <div className="row mb-1-9 mt-n1-9">
                <div className="col-md-6 mt-1-9">
                  <div className="d-flex align-items-center align-items-lg-start">
                    <div className="flex-shrink-0">
                      <i className="flaticon-021-recycle display-8 text-secondary lh-1"></i>
                    </div>
                    <div className="flex-grow-1 ms-4">
                      <h4 className="mb-0 h5">Money Back Guarantee</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-1-9">
                  <div className="d-flex align-items-center align-items-lg-start">
                    <div className="flex-shrink-0">
                      <i className="flaticon-022-tree display-8 text-secondary lh-1"></i>
                    </div>
                    <div className="flex-grow-1 ms-4">
                      <h4 className="mb-0 h5">Hydropower Plants</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-2-3 border-top border-color-extra-light-gray d-sm-flex align-items-center">
                <a className="btn-style2 medium" href="about.html">Read More</a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="about-shape1 d-sm-none d-md-block"></span>
      <span className="about-shape2 d-sm-none d-md-block"></span>
    </section>
  );
}

export default AboutSectionHome;

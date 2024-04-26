import React from "react";

function OurProjects() {
  return (
    <div>
      <section className="overflow-visible pb-0 border-top" id="our-project">
        <div className="container-fluid">
          <div
            className="sec-title text-center wow fadeIn"
            data-wow-delay="200ms"
          >
            <span>Our Projects</span>
            <h2 className="h1 mb-0 z-index-2 position-relative">
              Spectacular Our Latest Projects
            </h2>
          </div>
          <div className="portfolio-style1 row portfolio-gallery mt-n1-9 px-xl-17">
            <div
              className="col-sm-6 col-lg-3 mt-1-9 wow fadeIn"
              data-wow-delay="150ms"
              data-src="portfolio/portfolio-grid-01.jpg"
              data-sub-html="<h4 class='text-white'>Hybrid Project</h4><p>Solar Power </p>"
            >
              <div className="card card-style3 border-0 rounded-0">
                <img
                  src="portfolio/portfolio-grid-01.jpg"
                  alt="Project-Image-01"
                />
                <div className="card-body">
                  <div className="portfolio-icon">
                    <div className="top-icon">
                      <a
                        href="portfolio-details.html"
                        className="portfolio-link"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="text-white">Solar Power </span>
                    <h3 className="h4">
                      <a href="portfolio-details.html" className="text-white">
                        Hybrid Project
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-3 mt-1-9 wow fadeIn"
              data-wow-delay="150ms"
              data-src="portfolio-grid-01.jpg"
              data-sub-html="<h4 class='text-white'>Hybrid Project</h4><p>Solar Power </p>"
            >
              <div className="card card-style3 border-0 rounded-0">
                <img
                  src="portfolio/portfolio-grid-02.jpg"
                  alt="Project-Image-01"
                />
                <div className="card-body">
                  <div className="portfolio-icon">
                    <div className="top-icon">
                      <a
                        href="portfolio-details.html"
                        className="portfolio-link"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="text-white">Solar Power </span>
                    <h3 className="h4">
                      <a href="portfolio-details.html" className="text-white">
                        Hybrid Project
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-3 mt-1-9 wow fadeIn"
              data-wow-delay="150ms"
              data-src="portfolio/portfolio-grid-03.jpg"
              data-sub-html="<h4 class='text-white'>Hybrid Project</h4><p>Solar Power </p>"
            >
              <div className="card card-style3 border-0 rounded-0">
                <img
                  src="portfolio/portfolio-grid-01.jpg"
                  alt="Project-Image-01"
                />
                <div className="card-body">
                  <div className="portfolio-icon">
                    <div className="top-icon">
                      <a
                        href="portfolio-details.html"
                        className="portfolio-link"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="text-white">Solar Power </span>
                    <h3 className="h4">
                      <a href="portfolio-details.html" className="text-white">
                        Hybrid Project
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-3 mt-1-9 wow fadeIn"
              data-wow-delay="150ms"
              data-src="portfolio-grid-01.jpg"
              data-sub-html="<h4 class='text-white'>Hybrid Project</h4><p>Solar Power </p>"
            >
              <div className="card card-style3 border-0 rounded-0">
                <img
                  src="portfolio/portfolio-grid-01.jpg"
                  alt="Project-Image-01"
                />
                <div className="card-body">
                  <div className="portfolio-icon">
                    <div className="top-icon">
                      <a
                        href="portfolio-details.html"
                        className="portfolio-link"
                      >
                        <i className="fa fa-plus"></i>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="text-white">Solar Power </span>
                    <h3 className="h4">
                      <a href="portfolio-details.html" className="text-white">
                        Hybrid Project
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat similar code blocks for other projects */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurProjects;

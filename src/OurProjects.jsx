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
              Manufacturing of All Types of Batteries
            </h2>
          </div>
          <div className="portfolio-style1 row portfolio-gallery mt-n1-9 px-xl-17">
            <div
              className="col-sm-6 col-lg-4 mt-1-9 wow fadeIn"
              data-wow-delay="150ms"
              data-src="portfolio/lead-ingoit.webp"
              data-sub-html="<h4 class='text-white'>Hybrid Project</h4><p>Solar Power </p>"
            >
              <div className="card card-style3 border-0 rounded-0">
                <img
                  src="portfolio/lead-ingoit.webp"
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

                    <h3 className="h4">
                      <a href="portfolio-details.html" className="text-white">
                        Manufacture of Lead Ingots
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-4 mt-1-9 wow fadeIn"
              data-wow-delay="150ms"
              data-src="portfolio-grid-01.jpg"
              data-sub-html="<h4 class='text-white'>Hybrid Project</h4><p>Solar Power </p>"
            >
              <div className="card card-style3 border-0 rounded-0">
                <img
                  src="portfolio/gray oxide.webp"
                  alt="Project-Image-01"
                  style={{ border: '1px solid #e9e0e0' }}
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

                    <h3 className="h4">
                      <a href="portfolio-details.html" className="text-white">
                        Manufacture of Grey Oxide
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>



            <div
              className="col-sm-6 col-lg-4 mt-1-9 wow fadeIn"
              data-wow-delay="150ms"
              data-src="portfolio-grid-01.jpg"
              data-sub-html="<h4 class='text-white'>Hybrid Project</h4><p>Solar Power </p>"
            >
              <div className="card card-style3 border-0 rounded-0">
                <img
                  src="portfolio/selinum lead.png"
                  alt="Project-Image-01"
                  style={{ border: '1px solid #e9e0e0' }}
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

                    <h3 className="h4">
                      <a href="portfolio-details.html" className="text-white">
                      Manufacture of Pure Lead, Selinium Lead etc.
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

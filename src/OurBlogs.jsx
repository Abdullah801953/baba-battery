import React from "react";

function OurBlogs() {
  return (
    <div>
      <section>
        <div className="container" id="blog">
          <div
            className="sec-title text-center wow fadeIn"
            data-wow-delay="100ms"
          >
            <span>Our Blog</span>
            <h2 className="h1 mb-0 z-index-2 position-relative">
              Latest Articles Updated Weekly
            </h2>
          </div>
          <div className="row g-xl-5 mt-n2-2">
            <div
              className="col-md-6 col-lg-4 mt-2-2 wow fadeIn"
              data-wow-delay="150ms"
            >
              <article className="card card-style4 border-0 h-100">
                <div className="blog-img position-relative overflow-hidden">
                  <img
                    src="/src/img/blog/blog-01.jpg"
                    alt="All you need to know about solar energy."
                  />
                  <span className="category">
                    <a href="blog-list.html" rel="tag">
                      Investment
                    </a>
                  </span>
                </div>
                <div className="card-body p-2-0 p-xl-2-4">
                  <span className="text-secondary mb-2 d-block font-weight-700">
                    February 4, 2023
                  </span>
                  <h3 className="h4 mb-4">
                    <a href="blog-details.html">
                      All you need to know about solar energy.
                    </a>
                  </h3>
                  <a
                    href="blog-details.html"
                    className="text-secondary text-primary-hover fw-bold display-28"
                  >
                    Read More &#10230;
                  </a>
                </div>
               
              </article>
            </div>
            <div
              className="col-md-6 col-lg-4 mt-2-2 wow fadeIn"
              data-wow-delay="300ms"
            >
              <article className="card card-style4 border-0 h-100">
                <div className="blog-img position-relative overflow-hidden">
                  <img
                    src="/src/img/blog/blog-02.jpg"
                    alt="Five important things to observe in energy."
                  />
                  <span className="category">
                    <a href="blog-list.html" rel="tag">
                      Business
                    </a>
                  </span>
                </div>
                <div className="card-body p-2-0 p-xl-2-4">
                  <span className="text-secondary mb-2 d-block font-weight-700">
                    January 31, 2022
                  </span>
                  <h3 className="h4 mb-4">
                    <a href="blog-details.html">
                      Five important things to observe in energy.
                    </a>
                  </h3>
                  <a
                    href="blog-details.html"
                    className="text-secondary text-primary-hover fw-bold display-28"
                  >
                    Read More &#10230;
                  </a>
                </div>
               
              </article>
            </div>
            <div
              className="col-md-6 col-lg-4 mt-2-2 wow fadeIn"
              data-wow-delay="450ms"
            >
              <article className="card card-style4 border-0 h-100">
                <div className="blog-img position-relative overflow-hidden">
                  <img
                    src="/src/img/blog/blog-03.jpg"
                    alt="Never underestimate the influence of energy."
                  />
                  <span className="category">
                    <a href="blog-list.html" rel="tag">
                      Materials
                    </a>
                  </span>
                </div>
                <div className="card-body p-2-0 p-xl-2-4">
                  <span className="text-secondary mb-2 d-block font-weight-700">
                    January 31, 2022
                  </span>
                  <h3 className="h4 mb-4">
                    <a href="blog-details.html">
                      Never underestimate the influence of energy.
                    </a>
                  </h3>
                  <a
                    href="blog-details.html"
                    className="text-secondary text-primary-hover fw-bold display-28"
                  >
                    Read More &#10230;
                  </a>
                </div>
               
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurBlogs;

import React from "react";

function Footer() {
  return (
    <div>
      <footer className="position-relative pt-6 pt-md-8 pt-lg-10 pt-xl-12">
        <div className="container z-index-9 position-relative">
          <div className="row mt-n5 pb-6 pb-md-8 pb-lg-10 pb-xl-12">
            <div className="col-lg-6 mt-5">
              <div>
                <h2 className="text-white w-90 display-4 font-weight-800 mb-0 lh-1">
                  Premium quality & services since 1994!
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-6 mt-5">
                  <div>
                    <div className="textwidget">
                      <div className="sec-title pb-4">
                        <h3 className="text-white">Address</h3>
                      </div>
                      <address className="mb-0 display-29 display-md-28 display-xl-27">
                        London — <br />
                        4211 Webster Street Rahway,
                        <br />
                        Franklin Park, Indiana
                      </address>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mt-5 text-sm-end">
                  <div>
                    <div className="textwidget">
                      <div className="sec-title pb-4">
                        <h3 className="text-white">Contacts</h3>
                      </div>
                      <p className="email">
                        <a
                          href="mailto:info@yourdomain.com"
                          className="display-29 display-md-28 display-xl-27"
                        >
                          info@yourdomain.com
                        </a>
                      </p>
                      <p className="phone">
                        <a
                          href="tel:+442056581823"
                          className="display-26 display-md-25 display-xl-24"
                        >
                          +44 205-658-1823
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-top border-color-light-white z-index-9 position-relative">
          <div className="container">
            <div className="row align-items-center py-4">
              <div className="col-md-7 col-lg-6 text-center text-md-start order-2 order-md-1">
                <p className="d-inline-block text-white mb-0">
                  &copy; <span className="current-year"></span> All rights
                  reserved by{" "}
                  <a href="#!" className="text-primary text-secondary-hover">
                    Website Design Templates
                  </a>
                </p>
              </div>
              <div className="col-md-5 col-lg-6 text-center text-md-end mb-3 mb-md-0 order-1 order-md-2">
                <ul className="social-icon-style1">
                  <li>
                    <a target="_blank" href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.youtube.com/">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

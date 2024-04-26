import React from "react";
import jquery from "jquery";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import "./css/plugins.css";
// import "./css/styles.css";
// import "./quform/css/base.css";
// import "./search/search.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = $(window).scrollTop();
      const defaultLogo = $(".navbar-brand img");
      const scrollLogo = $(".navbar-brand.logodefault img");

      if (scrollTop <= 175) {
        $("header").removeClass("scrollHeader").addClass("fixedHeader");
        defaultLogo.attr("src", "logos/logo-inner.png");
      } else {
        $("header").removeClass("fixedHeader").addClass("scrollHeader");
        defaultLogo.attr("src", "logos/logo.png");
      }
      scrollLogo.attr("src", "logos/logo.png");
    };

    $(window).on("scroll", handleScroll);

    // Cleanup function
    return () => {
      $(window).off("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <header className="header-style1 menu_area-light" id="index">
        <div className="navbar-default border-bottom border-color-light-white">
          {/* start top search */}
          <div className="top-search bg-secondary">
            <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
              <form
                className="search-form"
                action="search.html"
                method="GET"
                acceptCharset="utf-8"
              >
                <div className="input-group">
                  <span className="input-group-addon cursor-pointer">
                    <button
                      className="search-form_submit fas fa-search text-white"
                      type="submit"
                    ></button>
                  </span>
                  <input
                    type="text"
                    className="search-form_input form-control"
                    name="s"
                    autoComplete="off"
                    placeholder="Type & hit enter..."
                  />
                  <span className="input-group-addon close-search mt-1">
                    <i className="fas fa-times"></i>
                  </span>
                </div>
              </form>
            </div>
          </div>
          {/* end top search */}

          <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
            <div className="row align-items-center">
              <div className="col-12 col-lg-12">
                <div className="menu_area alt-font">
                  <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <div className="navbar-header navbar-header-custom">
                      <Link to={"/"} className="navbar-brand">
                        <img id="logo" src="logos/logo.png" alt="logo" />
                      </Link>
                    </div>

                    <div className="navbar-toggler"></div>

                    {/* start menu area */}
                    <ul className="navbar-nav ms-auto" id="nav" style={{}}>
                      <li className="has-sub">
                        <span className="submenu-button"></span>
                        {/* <a href="#index">Home</a> */}
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li className="has-sub">
                        <span className="submenu-button"></span>
                        {/* <a href="about">About Us</a> */}
                        <Link to={"/about"}>about</Link>
                      </li>
                      <li className="has-sub-service">
                        <span className="submenu-button"></span>
                        {/* <a href="#service">Products</a> */}
                        <Link to={"products"}>Products</Link>
                        <ul className="sub-menu">
                          <li>
                            <a href="solar-solutions.html">Solar Solutions</a>
                          </li>
                          <li>
                            <a href="wind-turbine-system.html">
                              Wind Turbine System
                            </a>
                          </li>
                          <li>
                            <a href="renewable-energy.html">Renewable Energy</a>
                          </li>
                          <li>
                            <a href="repair-maintenance.html">
                              Repair & Maintenance
                            </a>
                          </li>
                          <li>
                            <a href="global-optimization.html">
                              Global Optimization
                            </a>
                          </li>
                          <li>
                            <a href="commercial-services.html">
                              Commercial Services
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="has-sub-blog">
                        <span className="submenu-button"></span>
                        <a href="#blog">Blog</a>
                        <ul className="sub-menu">
                          <li className="has-sub">
                            <span className="submenu-button"></span>
                            <a href="#!">Blog Grid</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="blog-grid-two-columns.html">
                                  2 Columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-grid-two-columns-left-sidebar.html">
                                  2 Col – Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-grid-two-columns-right-sidebar.html">
                                  2 Col – Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-grid.html">
                                  3 Columns - Standard
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="blog-list.html">Blog List</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link to={"/contact"}>Contact</Link>
                      </li>
                    </ul>
                    {/* end menu area */}

                    {/* start attribute navigation */}
                    <div className="attr-nav align-items-xl-center ms-xl-auto main-font">
                      <ul>
                        <li className="search">
                          <a href="#!">
                            <i className="fas fa-search"></i>
                          </a>
                        </li>
                        <li className="d-none d-xl-inline-block">
                          <a
                            href="contact.html"
                            className="btn-style2 primary medium text-white"
                          >
                            Free Quote
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* end attribute navigation */}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

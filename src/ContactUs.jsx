import React, { useEffect } from "react";
import Header from "./Header";
import "./css/plugins.css"
import "./css/styles.css"
import "./quform/css/base.css"
import "./search/search.css"
import AboutPageTitle from "./PageTitle";
import ContactSectionFirst from "./ContactSectionFirst";
import FooterNew from "./FooterNew";
import Cursor from "./Cursor";
function ContactUs() {
 

  return (
    <div>
      <Header />
      <section className="page-title-section bg-img cover-background theme-overlay-dark-blue left-overlay-dark top-position1" data-overlay-dark="6" style={{ backgroundImage: "url('/src/img/bg/bg-12.jpg')" }}>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h1>Contact Us</h1>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li>About us</li>
              </ul>
            </div>
          </div>
          <div className="shape-two"></div>
          <div className="shape-one"></div>
        </div>
      </section>
      <ContactSectionFirst />
      <FooterNew />
      <Cursor />
    </div>
  );
}

export default ContactUs;

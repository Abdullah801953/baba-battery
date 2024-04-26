import React, { useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
// import "./css/plugins.css";
// import "./css/styles.css";
// import "./quform/css/base.css";
// import "./search/search.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Footer from "./Footer";
import OurTeam from "./OurTeam";
import Cursor from "./Cursor";
import AboutPageTitle from "./PageTitle";
import AboutSection from "./AboutSection";
import SaveMoneySection from "./SaveMoneySection";
import TestimonialsSection from "./TestimonialSection";
import FooterNew from "./FooterNew";

function AboutUs() {
  useEffect(() => {
    <Cursor />;
  });
  return (
    <>
      <Header />
      <AboutPageTitle />
      <AboutSection />
      <SaveMoneySection />
      <TestimonialsSection />
      <OurTeam />
      <FooterNew />
      <Cursor />
    </>
  );
}

export default AboutUs;

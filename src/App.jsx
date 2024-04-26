import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import jquery from "jquery";
import ReactDOM from "react-dom";
import ReactWOW from "react-wow";
import React, { useEffect } from 'react'
import Header from './Header'
import Banner from './Banner';
import PageLoading from './PageLoading';
import ScrollTop from './ScrollTop';
import AboutUs from './AboutUs';
import OurServices from './OurServices';
import Parallex from './Parallex';
import ContactUs from './ContactUs';
import OurProjects from './OurProjects';
import Client from './Client';
import OurTeam from './OurTeam';
import Testimonial from './Testimonial';
import OurBlogs from './OurBlogs';
import Cursor from './Cursor';
import ContactSectionFirst from './ContactSectionFirst';
import AboutSectionHome from './AboutSectionHome';
import ProductsSection from './ProductsSection';
import FooterNew from './FooterNew';
function App() {
  
  return (
    <div>
      <Header />
      <Banner />
      <OurServices />
      <AboutSectionHome />
      <ProductsSection />
      <Parallex />
      <OurProjects />
      <Client />
      <Testimonial />
      <OurBlogs />
      <FooterNew />
      <Cursor/>
    </div>
  )
}

export default App

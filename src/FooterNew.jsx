import React from 'react'

function FooterNew() {
    return (
        <>

            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="row gy-4 justify-content-between">
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDuration: '0.5s', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                                <a href="index.html">
                                    <img src="icons/footer-logo.png" alt="image" className="footer-logo" />
                                </a>
                                <p className="text-light text-start">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p>
                                <ul className="footer-info-list">
                                    <li>
                                        <span className="icon">
                                            <i className="fa-solid fa-location-dot" />
                                        </span>
                                        <p>Burmsille,United States</p>
                                    </li>
                                    <li>
                                        <span className="icon">
                                            <i className="fa-solid fa-phone" />
                                        </span>
                                        <p><a href="tel:5756756">+(1) 123 456 7890 </a></p>
                                    </li>
                                    <li>
                                        <span className="icon">
                                            <i className="fa-solid fa-paper-plane" />
                                        </span>
                                        <p><a href="mailto:info.example@driller.com">info.example@driller.com</a></p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-sm-6 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDuration: '0.5s', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                                <h3 className="footer-title">Quick links</h3>
                                <ul className="footer-menu-quick-link">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="services.html">Service</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="blog.html">Blog Post</a></li>
                                    <li><a href="team.html">Team Members</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.7s" style={{ visibility: 'visible', animationDuration: '0.5s', animationDelay: '0.7s', animationName: 'fadeInUp' }}>
                                <h3 className="footer-title">More Service</h3>
                                <ul className="footer-menu">
                                  
                                    <li>
                                        <a href="service-details.html"><i className="fa-solid fa-angles-right" /> MasterCraft Builders</a>
                                    </li>
                                    <li>
                                        <a href="service-details.html"><i className="fa-solid fa-angles-right" /> Pinnacle Construction</a>
                                    </li>
                                    <li>
                                        <a href="service-details.html"><i className="fa-solid fa-angles-right" /> Dynamic Design Build</a>
                                    </li>
                                    <li>
                                        <a href="service-details.html"><i className="fa-solid fa-angles-right" /> Prime Construction Group</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.9s" style={{ visibility: 'visible', animationDuration: '0.5s', animationDelay: '0.9s', animationName: 'fadeInUp' }}>
                                <h3 className="footer-title">Social Links</h3>
                                <div className="container">
                                    
                                    <div className="social-buttons">
                                        {/* facebook  Button */}
                                        <a href="http://www.facebook.com" target="blank" className="social-margin">
                                            <div className="social-icon facebook">
                                                <i className="fa-brands fa-facebook" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                        
                                        {/* LinkedIn Button */}
                                    
                                        <a href="http://linkedin.com/" target="blank" className="social-margin">
                                            <div className="social-icon linkedin">
                                            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                      
                                        {/* Youtube Button */}
                                        <a href="http://youtube.com/" target="blank" className="social-margin">
                                            <div className="social-icon youtube">
                                             
                                                <i className="fa-brands fa-youtube" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                     
                                   
                                        {/* TwitterButton */}
                                        <a href="http://twitter.com/" target="blank" className="social-margin">
                                            <div className="social-icon twitter">
                                            <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="icons/footer-line.png" alt="image" className="footer-top-line" />
                </div>
                <div className="footer-bottom overflow-hidden">
                    <div className="container">
                        <div className="row gy-3 align-items-center justify-content-between">
                            <div className="col-auto">
                                <p className="text-light">© Constac  2024 | All Rights Reserved</p>
                            </div>
                            <div className="col-auto">
                                <ul className="footer-inline-menu">
                                    <li><a href="#0">Trams &amp; Condition</a></li>
                                    <li><a href="#0">Privacy Policy</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterNew
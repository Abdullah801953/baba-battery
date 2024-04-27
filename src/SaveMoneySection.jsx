import React from 'react';

function SaveMoneySection() {
    return (
        <section className="save-money bg-img overflow-visible z-index-9 cover-background pb-0" data-background="/src/img/bg/bg-12.jpg" style={{ backgroundImage: "url('/src/img/bg/bg-12.jpg')" }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row align-items-xl-center position-relative mb-5 mb-lg-10">
                    <div className="col-lg-6">
                        <div className="sec-title half wow fadeIn" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                            <span className="white">Save Money, Save Environment!</span>
                            <h2 className="h1 mb-0 text-white">Offering some benefit to our clients through ongoing product and innovation.</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row text-center">
                            <div className="col-sm-4 wow fadeInRight mb-1-9 mb-md-0" data-wow-delay="200ms" style={{ visibility: 'visible', animationDelay: '200ms', animationName: 'fadeInRight' }}>
                                <span className="flaticon-031-plant-1 mb-3 display-3 text-white d-inline-block"></span>
                                <h3 className="mb-0 h5 text-white">Environmental Sensitivity</h3>
                            </div>
                            <div className="col-sm-4 wow fadeInRight mb-1-9 mb-md-0" data-wow-delay="350ms" style={{ visibility: 'visible', animationDelay: '350ms', animationName: 'fadeInRight' }}>
                                <span className="flaticon-042-solar-panel mb-3 display-3 text-white d-inline-block"></span>
                                <h3 className="mb-0 h5 text-white">Personalized Solutions</h3>
                            </div>
                            <div className="col-sm-4 wow fadeInRight" data-wow-delay="500ms" style={{ visibility: 'visible', animationDelay: '500ms', animationName: 'fadeInRight' }}>
                                <span className="flaticon-041-barrel mb-3 display-3 text-white d-inline-block"></span>
                                <h3 className="mb-0 h5 text-white">Performance Measures</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row overflow-visible position-relative mt-n5">
                    <div className="col-lg-5 mt-5">
                        <ul className="list-unstyled mb-0">
                            <li className="mb-3 text-white"><i className="far fa-envelope display-25 me-4"></i>info@yourdomain.com</li>
                            <li className="mb-3 text-white"><i className="fas fa-mobile-alt display-25 me-4"></i>(+44) 123 456 789</li>
                            <li className="text-white"><i className="fas fa-map-marker-alt display-25 me-4"></i>66 Guild Street 512B, Great North Town.</li>
                        </ul>
                    </div>
                    <div className="col-lg-7 mt-5">
                        <div className="video-img position-relative">
                            <img src="content/04.jpg" className="border-radius-5" alt="..." />
                            <div className="story-video position-absolute align-items-center left-5 bottom-10 d-flex">
                                <a className="video video_btn small" href="https://www.youtube.com/watch?v=JtvGljl_21g"><i className="fas fa-play"></i></a>
                                <p className="text-white mb-0 ms-2-3 fw-bold">Watch Our<br /> Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SaveMoneySection;

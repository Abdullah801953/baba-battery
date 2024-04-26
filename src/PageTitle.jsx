import React from 'react';

function PageTitle() {
  return (
    <section className="page-title-section bg-img cover-background theme-overlay-dark-blue left-overlay-dark top-position1" data-overlay-dark="6" style={{backgroundImage: "url('/src/img/bg/bg-12.jpg')"}}>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1>About Us</h1>
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
  );
}

export default PageTitle;

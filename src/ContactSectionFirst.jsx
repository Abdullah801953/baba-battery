import React from 'react'
import ContactInnerSection from './ContactInnerSection'
function ContactSectionFirst() {
  return (
    <>
    <div>
      <section id='contact-first'>
        <div className="container">
          <div className="row mt-n1-9 gx-xxl-5">
            <div className="col-md-6 col-lg-4 mt-1-9">
              <div className="contact-info-block h-100">
                <div className="contact-img position-relative bg-img" style={{ backgroundImage: "url('img/content/contact-01.jpg')" }}>
                  <div className="bg-overlay"></div>
                  <div className="content-text">
                    <i className="fas fa-phone-alt display-15 mb-3 d-block"></i>
                    <h3 className="h4 mb-3">Phone</h3>
                    <p className="mb-1">(+1) 234 456 789</p>
                    <p className="mb-0">(+44) 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-1-9">
              <div className="contact-info-block h-100">
                <div className="contact-img position-relative bg-img" style={{ backgroundImage: "url('img/content/contact-02.jpg')" }}>
                  <div className="bg-overlay"></div>
                  <div className="content-text">
                    <i className="fas fa-map-marker-alt display-15 mb-3 d-block"></i>
                    <h3 className="h4 mb-3">Location</h3>
                    <p className="mb-0">66 Guild Street 512B, Great North Town.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-1-9">
              <div className="contact-info-block h-100">
                <div className="contact-img position-relative bg-img" style={{ backgroundImage: "url('img/content/contact-03.jpg')" }}>
                  <div className="bg-overlay"></div>
                  <div className="content-text">
                    <i className="far fa-envelope display-15 mb-3 d-block"></i>
                    <h3 className="h4 mb-3">Email</h3>
                    <p className="mb-1">example@youremail.com</p>
                    <p className="mb-0">info@youremail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactInnerSection/>
    </div>
    
    </>
  )
}

export default ContactSectionFirst
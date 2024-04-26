import React from 'react'

function ContactInnerSection() {
  return (
    <section className="overflow-visible pt-0" id='contact-inner'>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="about-5 position-relative mb-1-9 mb-lg-0 pe-lg-6">
            <img src="/src/img/content/contact-04.jpg" alt="..." />
            <div className="about-shape3"></div>
            <div className="about-shape4"></div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="sec-title half wow fadeIn" data-wow-delay="100ms" style={{visibility: 'visible', animationDelay: '100ms', animationName: 'fadeIn'}}>
            <span>Send Us Message</span>
            <h2 className="h1 mb-0">Contact With Us</h2>
          </div>
          <form className="contact quform" action="quform/contact.php" method="post" enctype="multipart/form-data" onClick={() => {}}>
            <div className="quform-elements">
              <div className="row">
                <div className="col-md-6">
                  <div className="quform-element form-group">
                    <label htmlFor="name">Your Name <span className="quform-required">*</span></label>
                    <div className="quform-input">
                      <input className="form-control" id="name" type="text" name="name" placeholder="Your name here" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="quform-element form-group">
                    <label htmlFor="email">Your Email <span className="quform-required">*</span></label>
                    <div className="quform-input">
                      <input className="form-control" id="email" type="text" name="email" placeholder="Your email here" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="quform-element form-group quform-select-replaced">
                    <label htmlFor="subject">Your Subject <span className="quform-required">*</span></label>
                    <div className="quform-input">
                      <input className="form-control" id="subject" type="text" name="subject" placeholder="Your subject here" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="quform-element form-group">
                    <label htmlFor="phone">Contact Number</label>
                    <div className="quform-input">
                      <input className="form-control" id="phone" type="text" name="phone" placeholder="Your phone here" />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="quform-element form-group">
                    <label htmlFor="message">Message <span className="quform-required">*</span></label>
                    <div className="quform-input">
                      <textarea className="form-control" id="message" name="message" rows="3" placeholder="Tell us a few words"></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="quform-element">
                    <div className="form-group">
                      <div className="quform-input">
                        <input className="form-control" id="type_the_word" type="text" name="type_the_word" placeholder="Type the below word" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="quform-captcha">
                        <div className="quform-captcha-inner">
                          <img src="/src/quform/images/captcha/courier-new-light.png" alt="..." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="quform-submit-inner">
                    <button className="btn-style2 primary" type="submit">Send Message</button>
                  </div>
                  <div className="quform-loading-wrap text-start"><span className="quform-loading"></span></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactInnerSection
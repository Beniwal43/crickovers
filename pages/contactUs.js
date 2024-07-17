/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const contactUs = () => {
  return (
    <main>
      <>
        {/* Contact breadcrumb area start */}
        <section className="breadcrumb__area pt-165 pb-150 p-relative z-index-1 fix">
          <div
            className="breadcrumb__bg"
            data-background="assets/img/Header_Bg.jpg"
          />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12">
                <div className="breadcrumb__content">
                  <div className="breadcrumb__list">
                    <span>
                      <a href="/">Home</a>
                    </span>
                    <span className="dvdr">/</span>
                    <span>Contact Us</span>
                  </div>
                  <h3 className="breadcrumb__title">Contact Us</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact breadcrumb area end */}
        {/* contact area start */}
        <section className="section_contact_form tp-contact-breadcrumb-area pt-120 pb-120 p-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="tp-contact-wrap">
                  <h4 className="tp-contact-title">Contact Details</h4>
                  <p className="mb-1 ps-0">
                    <b>
                      {" "}
                      YAZCHALLENGE SPEED PRO AND MAKER GAME PRIVATE LIMITED
                    </b>
                  </p>
                  <p className="mb-5">
                    <i className="fa-sharp fa-solid fa-location-dot" />
                    Flat No.: 31-42/2, INDIRAMMA COLONY, Naspur,
                    Mancherial,Telangana, 504302
                  </p>
                  <p className="mb-5">
                    <i className="fa-solid fa-envelope" />
                    <a
                      href="mailto:shekarchinna330@gmail.com"
                      className="__cf_email__"
                    >
                      shekarchinna330@gmail.com
                    </a>
                  </p>
                  <p>
                    <i className="fa-solid fa-phone" />
                    <a href="tel:+91 8309927262" className="__cf_email__">
                      +91 8309927262
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <form id="contactForm" className="d-none d-block">
                  <div className="tp-contact-input-form">
                    <div className="row">
                      <div className="col-xl-12 col-lg-12">
                        <div className="tp-contact-input p-relative">
                          <input type="text" placeholder="Name" name="name" />
                          <span>
                            <i className="fa-light fa-user" />
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input p-relative">
                          <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                          />
                          <span>
                            <i className="fa-light fa-envelope" />
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="tp-contact-input p-relative">
                          <input
                            className="phone_n"
                            type="number"
                            placeholder="Phone"
                            name="phone"
                          />
                          <span>
                            <i className="fa-light fa-phone" />
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="tp-contact-input p-relative">
                          <textarea
                            placeholder="Type Your Message"
                            name="message"
                            defaultValue={""}
                          />
                          <span className="icon-1">
                            <i className="fa-light fa-pen" />
                          </span>
                        </div>
                      </div>
                      <div className="tp-contact-btn">
                        <button type="submit" className="tp-btn">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="contactFormSuccess" className="d-none">
                  <p>
                    {" "}
                    We want to express our heartfelt gratitude for being a part
                    of our incredible journey.
                  </p>
                  <div className="tp-contact-btn">
                    <button className="confirm tp-btn">OK</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact area end */}
      </>
    </main>
  );
};

export default contactUs;

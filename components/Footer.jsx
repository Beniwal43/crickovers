/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'

const Footer = () => {
  return (
    <footer
        className="tp-footer-area p-relative z-index-1"
        data-bg-color="#131313"
      >
        <div
          className="tp-footer-bg"
          data-background="https://www.crickovers.com/assets/img/Fotter.jpg"
        />
        <div className="container">
          <div className="tp-footer-top">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="tp-footer-send">
                  <p>Unlock possibilities with a click</p>
                </div>
                <div className="tp-footer-btn text-md-end">
                  <a
                    className="tp-btn"
                    href="https://www.crickovers.com/assets/download/crickovers.apk"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-footer-main">
            <div className="row">
              <div className="col-xl-3 col-lg-12 col-md-12">
                <div className="tp-footer-widget tp-footer-col-1 mb-50">
                  <div className="tp-footer-logo mb-20">
                    <a href="/">
                      {" "}
                      <img
                        src="https://www.crickovers.com/assets/img/logo/Crickovers-logo_White.svg"
                        width={220}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="tp-footer-widget-content">
                    <p>
                      Explore Crickovers to stay updated with the latest cricket
                      news, scores, and fantasy updates. We are here to assist
                      you to enhance your fantasy cricket experience.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6">
                <div className="tp-footer-widget tp-footer-col-2 mb-50">
                  <h3 className="tp-footer-widget-title">Usefull Links</h3>
                  <div className="tp-footer-widget-content menu_links">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about">About us</a>
                      </li>
                      <li>
                        <a href="/howToPlay"> How To Play</a>
                      </li>
                      <li>
                        <a href="/faq"> FAQ</a>
                      </li>
                      <li>
                        <a href="/pointTable">Points Table</a>
                      </li>
                      <li>
                        <a href="/contactUs">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-footer-widget tp-footer-col-2 mb-50">
                  <h3 className="tp-footer-widget-title">Policies</h3>
                  <div className="tp-footer-widget-content menu_links">
                    <ul>
                      <li>
                        <a href="/">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/">Terms and Conditions</a>
                      </li>
                      <li>
                        <a href="/">Refund Policy</a>
                      </li>
                      <li>
                        <a href="/">Fairplay Policy</a>
                      </li>
                      <li>
                        <a href="/">Responsible Play Policy</a>
                      </li>
                      <li>
                        <a href="/">Disclaimer</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="tp-footer-widget tp-footer-col-4 mb-50">
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-widget-contact">
                      <h3 className="tp-footer-widget-title">
                        Contact Details
                      </h3>
                      <div className="tp-footer-widget-contact-inner">
                        <a className="d-inline-block ms-0">
                          <b>
                            YAZCHALLENGE SPEED PRO AND MAKER GAME PRIVATE
                            LIMITED
                          </b>
                        </a>
                      </div>
                      <div className="tp-footer-widget-contact-inner">
                        <a className="addr">
                          <i className="fa-sharp fa-solid fa-location-dot" />
                          Flat No.: 31-42/2, INDIRAMMA COLONY, Naspur,
                          Mancherial,Telangana, 504302
                        </a>
                      </div>
                      <div className="tp-footer-widget-contact-inner">
                        <a href="mailto:shekarchinna330@gmail.com">
                          <i className="fa-solid fa-envelope" />
                          <span className="__cf_email__">
                            shekarchinna330@gmail.com
                          </span>
                        </a>
                      </div>
                      <div className="tp-footer-widget-contact-inner">
                        <a href="tel:+91 8309927262">
                          <i className="fa-solid fa-phone" />
                          <span className="__cf_email__">+91 8309927262</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="disclaimer_p">
                  <h3>Disclaimer : </h3>
                  <marquee>
                    While playing fantasy cricket, there is a risk of financial
                    loss and the possibility of addiction. We also restrict the
                    usage of Crickovers who are under the age of 18.
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-footer-copyright p-relative" data-bg-color="#f84074">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-12 text-center">
                <div className="tp-footer-copyright-inner">
                  <p>
                    © Copyright 2024 by YAZCHALLENGE SPEED PRO AND MAKER GAME
                    PRIVATE LIMITED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
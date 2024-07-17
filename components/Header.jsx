/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Header = () => {
  return (
      <div>
          {/* back to top start */}
      <div className="back-to-top-wrapper">
        <button id="back_to_top" type="button" className="back-to-top-btn">
          <svg
            width={12}
            height={7}
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 6L6 1L1 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* back to top end */}

      {/* back to top start */}
      <div className="back-to-top-wrapper">
        <button id="back_to_top" type="button" className="back-to-top-btn">
          <svg
            width={12}
            height={7}
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 6L6 1L1 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* back to top end */}

      {/* search area start */}
      <div className="search-area">
        <div className="search-inner p-relative">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="search-wrapper">
                  <div className="search-close">
                    <button className="search-close-btn">
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 1L1 11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 1L11 11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="search-content pt-35">
                    <h3 className="heading text-center mb-30">
                      Hi! How can we help You?
                    </h3>
                    <div className="d-flex justify-content-center px-5">
                      <div className="search w-100 p-relative">
                        <input
                          type="text"
                          className="search-input"
                          placeholder="Search..."
                        />
                        <button className="search-icon">
                          <i className="fa fa-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-overlay" />
      {/* search area end */}

      {/* offcanvas area start */}
      <div className="offcanvas__area">
        <div className="offcanvas__wrapper">
          <div className="offcanvas__close">
            <button className="offcanvas__close-btn offcanvas-close-btn">
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1L1 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1L11 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-50 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <a href="/">
                  <img
                    src="https://www.crickovers.com/assets/img/logo/Crickovers logo_Color.svg"
                    alt="logo"
                    width={180}
                  />
                </a>
              </div>
            </div>
            <div className="tp-main-menu-mobile fix d-xl-none mb-40" />
            <div className="offcanvas__contact">
              <h4 className="offcanvas__title">Contacts</h4>
              <div className="offcanvas__contact-content d-flex">
                <div className="offcanvas__contact-content-icon">
                  <i className="fa-sharp fa-solid fa-location-dot" />
                </div>
                <div className="offcanvas__contact-content-content">
                  <a>
                    <b>YAZCHALLENGE SPEED PRO AND MAKER GAME PRIVATE LIMITED</b>
                    <br />
                    Flat No.: 31-42/2, INDIRAMMA COLONY, Naspur,
                    Mancherial,Telangana, 504302
                  </a>
                </div>
              </div>
              <div className="offcanvas__contact-content d-flex">
                <div className="offcanvas__contact-content-icon">
                  <i className="fa-solid fa-envelope" />
                </div>
                <div className="offcanvas__contact-content-content">
                  <a href="mailto:shekarchinna330@gmail.com">
                    shekarchinna330@gmail.com
                  </a>
                </div>
              </div>
              <div className="offcanvas__contact-content d-flex">
                <div className="offcanvas__contact-content-icon">
                  <i className="fa-solid fa-phone" />
                </div>
                <div className="offcanvas__contact-content-content">
                  <a href="tel:+91 8309927262"> +91 8309927262</a>
                </div>
              </div>
              <div className="mt-50">
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
      </div>
      <div className="body-overlay" />
      {/* offcanvas area end */}

      {/* H area start */}
      <header className="tp-header-area p-relative">
        <div className="tp-header-main-sticky tp-header-main p-relative">
          <div className="container container-large">
            <div className="row align-items-center">
              <div className="col-lg-12 d-none d-lg-block main_header_left text-xl-center">
                <div className="tp-header-logo">
                  <a href="/">
                    <img
                      src="https://www.crickovers.com/assets/img/logo/Crickovers logo_Color.svg"
                      alt=""
                      width={220}
                    />
                  </a>
                </div>
                <div className="tp-header-main-menu">
                  <div className="tp-main-menu d-none d-xl-block">
                    <nav className="tp-main-menu-content menu_links">
                      <ul>
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/about">About Us</a>
                        </li>
                        <li>
                          <a href="/howToPlay">How to play</a>
                        </li>
                        <li>
                          <a href="/faq">FAQ</a>
                        </li>
                        <li>
                          <a href="/pointTable">Points table</a>
                        </li>
                        <li>
                          <a href="contactUs">Contact us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="tp-header-main-right d-flex align-items-center justify-content-end">
                  <div className="tp-header-contact d-xl-flex align-items-center">
                    <div className="tp-header-btn pl-30 d-none d-xl-block">
                      <a
                        className="tp-btn d-none d-xl-block"
                        href="https://www.crickovers.com/assets/download/crickovers.apk"
                      >
                        Download
                      </a>
                    </div>
                    <div className="tp-header-hamburger d-xl-none offcanvas-open-btn">
                      <button className="hamburger-btn">
                        <span />
                        <span />
                        <span />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="tp-header-area p-relative tp-int-menu tp-header-sticky-cloned">
        <div className="tp-header-main-sticky p-relative tp-header-main">
          <div className="container container-large">
            <div className="row align-items-center">
              <div className="col-lg-12 d-none d-lg-block main_header_left text-xl-center">
                <div className="tp-header-logo">
                  <a href="/">
                    <img
                      src="https://www.crickovers.com/assets/img/logo/Crickovers logo_Color.svg"
                      alt=""
                      width={220}
                    />
                  </a>
                </div>
                <div className="tp-header-main-menu">
                  <div className="tp-main-menu d-none d-xl-block">
                    <nav className="tp-main-menu-content menu_links">
                      <ul>
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/about">About Us</a>
                        </li>
                        <li>
                          <a href="/howToPlay">How to play</a>
                        </li>
                        <li>
                          <a href="/faq">FAQ</a>
                        </li>
                        <li>
                          <a href="/pointTable">Points table</a>
                        </li>
                        <li>
                          <a href="contactUs">Contact us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="tp-header-main-right d-flex align-items-center justify-content-end">
                  <div className="tp-header-contact d-xl-flex align-items-center">
                    <div className="tp-header-btn pl-30 d-none d-xl-block">
                      <a
                        className="tp-btn d-none d-xl-block"
                        href="https://www.crickovers.com/assets/download/crickovers.apk"
                      >
                        Download
                      </a>
                    </div>
                    <div className="tp-header-hamburger d-xl-none offcanvas-open-btn">
                      <button className="hamburger-btn">
                        <span />
                        <span />
                        <span />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header area end */}
    </div>
  )
}

export default Header
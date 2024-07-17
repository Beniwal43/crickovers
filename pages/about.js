/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const about = () => {
  return (
    <main>
      {/* about breadcrumb area start */}
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
                  <span>About Us</span>
                </div>
                <h3 className="breadcrumb__title">About Us</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about breadcrumb area end */}

      {/* instagram area start */}
      <div className="section_a_s_2 tp-instagram-arae p-relative tp-instagram-bg section_padding_py">
        <div className="container-fluid">
          <div
            className="tp-instagram-space wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
          >
            <div className="tp-instagram-slider">
              <div className="tp-instagram-active swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="tp-instagram-item p-relative">
                      <div className="tp-instagram-thumb">
                        <img
                          src="assets/img/about_us/s_1/Session 1 - Slide Image 1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tp-instagram-item p-relative">
                      <div className="tp-instagram-thumb">
                        <img
                          src="assets/img/about_us/s_1/Session 1 - Slide Image 2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tp-instagram-item p-relative">
                      <div className="tp-instagram-thumb">
                        <img
                          src="assets/img/about_us/s_1/Session 1 - Slide Image 3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tp-instagram-item p-relative">
                      <div className="tp-instagram-thumb">
                        <img
                          src="assets/img/about_us/s_1/Session 1 - Slide Image 4.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="tp-instagram-item p-relative">
                      <div className="tp-instagram-thumb">
                        <img
                          src="assets/img/about_us/s_1/Session 1 - Slide Image 5.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* instagram area end */}

      {/* support area start */}
      <section
        className="section_a_f_c_f tp-support-area pt-100 pb-110 p-relative tp-support-bg"
        data-background="assets/img/about_us/s_2/Vision_Mission_Bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-xl-10 col-12 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="tp-support-title-wrapper">
                <span className="tp-section-title-pre">
                  Fantasy cricket fanatics
                </span>
                <h3 className="tp-section-title">
                  Pillars that are at <br /> our core{" "}
                </h3>
              </div>
              <div className="tp-support-tab">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Vision
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Mission
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Goals
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="tp-support-tab-content d-flex flex-wrap">
                      <div className="tp-support-list">
                        <ul>
                          <li>
                            <i className="flaticon-checked" />
                            Aspiring for excellence{" "}
                          </li>
                          <li>
                            <i className="flaticon-checked" />
                            Striving for greatness{" "}
                          </li>
                          <li>
                            <i className="flaticon-checked" />
                            Setting new standards{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="tp-support-text">
                        <p>
                          Our vision at Crickovers is
                          <br />
                          to revolutionize the way cricket <br />
                          is experienced by fans.
                        </p>
                      </div>
                      <div className="tp-support-tab-thumb">
                        <img src="assets/img/about_us/s_2/Vision.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="tp-support-tab-content d-flex flex-wrap">
                      <div className="tp-support-list">
                        <ul>
                          <li>
                            <i className="flaticon-checked" />
                            Building a community{" "}
                          </li>
                          <li>
                            <i className="flaticon-checked" />
                            Innovation is constant{" "}
                          </li>
                          <li>
                            <i className="flaticon-checked" />
                            Created for fans{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="tp-support-text">
                        <p>
                          We aspire to create a community
                          <br />
                          where cricket fans can come
                          <br />
                          together and have a fun time.
                        </p>
                      </div>
                      <div className="tp-support-tab-thumb">
                        <img src="assets/img/about_us/s_2/Mission.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="tp-support-tab-content d-flex flex-wrap">
                      <div className="tp-support-list">
                        <ul>
                          <li>
                            <i className="flaticon-checked" />
                            Enhance the excitement{" "}
                          </li>
                          <li>
                            <i className="flaticon-checked" />
                            More engaging experience{" "}
                          </li>
                          <li>
                            <i className="flaticon-checked" />
                            An inclusive platform{" "}
                          </li>
                        </ul>
                      </div>
                      <div className="tp-support-text">
                        <p>
                          We aim to enhance the excitement of <br />
                          every cricket match, making every <br />
                          fan a part of the game
                        </p>
                      </div>
                      <div className="tp-support-tab-thumb">
                        <img src="assets/img/about_us/s_2/Goals.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* support area end */}

      {/* counter area start */}
      <section
        className="section_a_counter tp-counter-area pt-120 pb-90 tp-counter-bg"
        data-background="assets/img/about_us/s_3/Count_BG.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="tp-counter-item text-center mb-30">
                <div className="tp-counter-icon">
                  <span>
                    <img
                      src="assets/img/about_us/s_3/Active users.svg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="tp-counter-content">
                  <h4 className="tp-counter-title">
                    <span
                      className="purecounter"
                      data-purecounter-duration={2}
                      data-purecounter-end={60000}
                    />
                    +
                  </h4>
                  <p>Active users</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="tp-counter-item text-center mb-30">
                <div className="tp-counter-icon">
                  <span>
                    <img
                      src="assets/img/about_us/s_3/Daily contests.svg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="tp-counter-content">
                  <h4 className="tp-counter-title">
                    <span
                      className="purecounter"
                      data-purecounter-duration={2}
                      data-purecounter-end={12000}
                    />
                    +
                  </h4>
                  <p>Daily contests</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="tp-counter-item text-center mb-30">
                <div className="tp-counter-icon">
                  <span>
                    <img src="assets/img/about_us/s_3/Winners.svg" alt="" />
                  </span>
                </div>
                <div className="tp-counter-content">
                  <h4 className="tp-counter-title">
                    <span
                      className="purecounter"
                      data-purecounter-duration={2}
                      data-purecounter-end={6000}
                    />
                    +
                  </h4>
                  <p>Winners</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="tp-counter-item text-center mb-30">
                <div className="tp-counter-icon">
                  <span>
                    <img
                      src="assets/img/about_us/s_3/Customer support.svg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="tp-counter-content">
                  <h4 className="tp-counter-title">
                    <span
                      className="purecounter"
                      data-purecounter-duration={2}
                      data-purecounter-end={24}
                    />
                    /7
                  </h4>
                  <p>Customer support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counter area end */}

      {/* service area start */}
      <section
        id="services"
        className="s_a_a_g_c tp-service-2-area pt-120 pb-90 p-relative fix"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-service-2-title-wrapper text-center mb-60">
                <span className="tp-section-title-pre-2">A game changer </span>
                <h3 className="tp-section-title">
                  Pioneering the fantasy
                  <br /> cricket realm{" "}
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div
                className="tp-service-2-item p-relative mb-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="tp-service-2-thumb">
                  <a>
                    <img
                      src="assets/img/about_us/s_4/User Friendly.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="tp-service-2-content p-relative">
                  <div className="tp-service-2-icon">
                    <span>
                      <img
                        src="assets/img/about_us/s_4/User friendly platform.svg"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="tp-service-2-content-inner">
                    <h4 className="tp-service-title">
                      <a>User-friendly platform</a>
                    </h4>
                    <p>
                      Our intuitive interface makes your experience a breeze.{" "}
                    </p>
                  </div>
                  <div className="tp-service-item-btn"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div
                className="tp-service-2-item p-relative mb-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".5s"
              >
                <div className="tp-service-2-thumb">
                  <a>
                    <img src="assets/img/about_us/s_4/Thriling.jpg" alt="" />
                  </a>
                </div>
                <div className="tp-service-2-content p-relative">
                  <div className="tp-service-2-icon">
                    <span>
                      <img
                        src="assets/img/about_us/s_4/Thrilling competetion.svg"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="tp-service-2-content-inner">
                    <h4 className="tp-service-title">
                      <a>Thrilling Competitions</a>
                    </h4>
                    <p>
                      Various competitions are held to keep excitement high.{" "}
                    </p>
                  </div>
                  <div className="tp-service-item-btn"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div
                className="tp-service-2-item p-relative mb-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".7s"
              >
                <div className="tp-service-2-thumb">
                  <a>
                    <img src="assets/img/about_us/s_4/Community.jpg" alt="" />
                  </a>
                </div>
                <div className="tp-service-2-content p-relative">
                  <div className="tp-service-2-icon">
                    <span>
                      <img
                        src="assets/img/about_us/s_4/Community engagement.svg"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="tp-service-2-content-inner">
                    <h4 className="tp-service-title">
                      <a>Community Engagement</a>
                    </h4>
                    <p>Engage with other users and enhance your experience. </p>
                  </div>
                  <div className="tp-service-item-btn"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service area end */}

      {/* testimonial area start */}
      <section
        className="tp-testimonial-2-area pt-120 pb-90 p-relative"
        data-bg-color="#214be0"
      >
        <div
          className="tp-testimonial-2-bg include-bg"
          data-background="assets/img/about_us/s_5/Testimonial_Bg.jpg"
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-testimonial-2-title-wrapper text-center mb-50">
                <span className="tp-section-title-pre-2">
                  True user experiences{" "}
                </span>
                <h3 className="tp-section-title">
                  Read our community’s <br />
                  opinion on us{" "}
                </h3>
              </div>
            </div>
          </div>
          <div
            className="tp-testimonial-slider wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
          >
            <div className="tp-testimonial-active swiper-container">
              <div className="swiper-wrapper pb-50">
                <div className="swiper-slide mb-30">
                  <div className="tp-testimonial-2-item p-relative">
                    <div className="tp-testimonial-2-item-shape">
                      <img src="assets/img/about_us/s_5/shape .png" alt="" />
                    </div>
                    <div className="tp-testimonial-2-content d-flex justify-content-between align-items-center">
                      <div className="tp-testimonial-2-left d-flex">
                        <div className="tp-testimonial-2-thumb">
                          <img
                            src="assets/img/about_us/s_5/Profice Pic 1.png"
                            alt=""
                          />
                        </div>
                        <div className="tp-testimonial-2-avatar">
                          <div className="tp-testimonial-ratting">
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                          </div>
                          <div className="tp-testimonial-avata-info">
                            <h4 className="tp-testimonial-title">Jacob</h4>
                          </div>
                        </div>
                      </div>
                      <div className="tp-testimonial-2-right">
                        <div className="tp-testimonial-2-quote">
                          <img
                            src="assets/img/review/home-2/quotes.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tp-testimonial-2-text">
                      <p>
                        I have been an avid fan of fantasy cricket for years,
                        but this website has truly elevated my gaming
                        experience. The interface is user-friendly, and the live
                        score updates are incredibly fast. I would recommend it
                        to any cricket enthusiast{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide mb-30">
                  <div className="tp-testimonial-2-item p-relative">
                    <div className="tp-testimonial-2-item-shape">
                      <img src="assets/img/about_us/s_5/shape .png" alt="" />
                    </div>
                    <div className="tp-testimonial-2-content d-flex justify-content-between align-items-center">
                      <div className="tp-testimonial-2-left d-flex">
                        <div className="tp-testimonial-2-thumb">
                          <img
                            src="assets/img/about_us/s_5/Profice Pic 3.png"
                            alt=""
                          />
                        </div>
                        <div className="tp-testimonial-2-avatar">
                          <div className="tp-testimonial-ratting">
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                          </div>
                          <div className="tp-testimonial-avata-info">
                            <h4 className="tp-testimonial-title">Tommy</h4>
                          </div>
                        </div>
                      </div>
                      <div className="tp-testimonial-2-right">
                        <div className="tp-testimonial-2-quote">
                          <img
                            src="assets/img/review/home-2/quotes.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tp-testimonial-2-text">
                      <p>
                        This platform has revolutionized how I follow cricket.
                        Not only can I create my dream team, but I also get to
                        engage with a community of like-minded fans. This is
                        definitely the ultimate fantasy cricket experience as
                        far as i am concerned{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide mb-30">
                  <div className="tp-testimonial-2-item p-relative">
                    <div className="tp-testimonial-2-item-shape">
                      <img src="assets/img/about_us/s_5/shape .png" alt="" />
                    </div>
                    <div className="tp-testimonial-2-content d-flex justify-content-between align-items-center">
                      <div className="tp-testimonial-2-left d-flex">
                        <div className="tp-testimonial-2-thumb">
                          <img
                            src="assets/img/about_us/s_5/Profice Pic 2.png"
                            alt=""
                          />
                        </div>
                        <div className="tp-testimonial-2-avatar">
                          <div className="tp-testimonial-ratting">
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                          </div>
                          <div className="tp-testimonial-avata-info">
                            <h4 className="tp-testimonial-title">Luna</h4>
                          </div>
                        </div>
                      </div>
                      <div className="tp-testimonial-2-right">
                        <div className="tp-testimonial-2-quote">
                          <img
                            src="assets/img/review/home-2/quotes.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tp-testimonial-2-text">
                      <p>
                        The thrill of playing fantasy cricket on Crickovers is
                        incomparable. Its easy to use, updated frequently, and
                        on top of that, offers a fair and competitive
                        environment. If I have to say, this is a must-try for
                        all cricket fans out there{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide mb-30">
                  <div className="tp-testimonial-2-item p-relative">
                    <div className="tp-testimonial-2-item-shape">
                      <img src="assets/img/about_us/s_5/shape .png" alt="" />
                    </div>
                    <div className="tp-testimonial-2-content d-flex justify-content-between align-items-center">
                      <div className="tp-testimonial-2-left d-flex">
                        <div className="tp-testimonial-2-thumb">
                          <img
                            src="assets/img/about_us/s_5/Profice Pic 4.png"
                            alt=""
                          />
                        </div>
                        <div className="tp-testimonial-2-avatar">
                          <div className="tp-testimonial-ratting">
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                          </div>
                          <div className="tp-testimonial-avata-info">
                            <h4 className="tp-testimonial-title">Kumar</h4>
                          </div>
                        </div>
                      </div>
                      <div className="tp-testimonial-2-right">
                        <div className="tp-testimonial-2-quote">
                          <img
                            src="assets/img/review/home-2/quotes.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tp-testimonial-2-text">
                      <p>
                        This fantasy cricket website has made the game of
                        cricket more exciting for me. The live updates, player
                        stats, and interactive platform keep me coming back for
                        more consistently. For me, its definitely a five-star
                        fantasy cricket experience{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide mb-30">
                  <div className="tp-testimonial-2-item p-relative">
                    <div className="tp-testimonial-2-item-shape">
                      <img src="assets/img/about_us/s_5/shape .png" alt="" />
                    </div>
                    <div className="tp-testimonial-2-content d-flex justify-content-between align-items-center">
                      <div className="tp-testimonial-2-left d-flex">
                        <div className="tp-testimonial-2-thumb">
                          <img
                            src="assets/img/about_us/s_5/Profice Pic 5.png"
                            alt=""
                          />
                        </div>
                        <div className="tp-testimonial-2-avatar">
                          <div className="tp-testimonial-ratting">
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                            <span>
                              <i className="fa-sharp fa-solid fa-star" />
                            </span>
                          </div>
                          <div className="tp-testimonial-avata-info">
                            <h4 className="tp-testimonial-title">Ria</h4>
                          </div>
                        </div>
                      </div>
                      <div className="tp-testimonial-2-right">
                        <div className="tp-testimonial-2-quote">
                          <img
                            src="assets/img/review/home-2/quotes.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tp-testimonial-2-text">
                      <p>
                        Playing fantasy cricket on this site feels like being
                        part of the real action. The features are well thought
                        out, and the competition is intense. Its my go-to
                        platform for fantasy cricket. The attention to detail on
                        this site is also amazing and praise worthy{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add Pagination */}
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </section>
      {/* testimonial area end */}
    </main>
  );
};

export default about;

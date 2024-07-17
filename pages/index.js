/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <main>
      {/* hero area start */}
      <section
        id="home"
        className="tp-hero-2-area p-relative dark_bg section_main_banner"
      >
        <div className="tp-hero-2-wrapper-slider">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide pt-100 pb-100">
                <div
                  className="tp-hero-2-bg"
                  style={{
                    background: 'url("assets/img/home/s_1/Header Bg.jpg")',
                  }}
                />
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-8 mb-50">
                      <div className=" p-relative">
                        <div className="tp-hero-title-wrapper p-relative">
                          <span className="tp-hero-2-subtitle">
                            Scale your FC horizons{" "}
                          </span>
                          <h2 className="tp-hero-2-title">
                            Your dream <br /> destination
                          </h2>
                        </div>
                        <div className="tp-hero-button-wrapper">
                          <div className="tp-hero-btn">
                            <a className="tp-btn" href="/how_to_play">
                              Learn How
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <img
                        className="right_side_image"
                        src="assets/img/home/s_1/Header_Image.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero area end */}

      {/* Who we are start */}
      <section
        id="about"
        className="section_who_we_are tp-about-3-area pt-120 pb-120 p-relative"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div
                className="tp-about-3-wrapper wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <span className="tp-section-title-pre">Know our story</span>
                <h3 className="tp-section-title">
                  Unleash your cricketing prowess{" "}
                </h3>
                <p>
                  With years of combined expertise in the fantasy cricket space,
                  our team is dedicated to providing you with the best platform
                  to showcase your cricket knowledge and skills.{" "}
                </p>
                <div className="tp-about-3-content d-flex flex-wrap">
                  <div className="tp-about-icon-2 d-flex align-items-center">
                    <img
                      src="assets/img/home/s_2/establish your dominance.svg"
                      alt=""
                    />
                    <p>
                      Establish your <br /> dominance
                    </p>
                  </div>
                  <div className="tp-about-icon-2 d-flex align-items-center">
                    <img
                      src="assets/img/home/s_2/Scale greater heights.svg"
                      alt=""
                    />
                    <p>
                      Scale greater <br /> heights{" "}
                    </p>
                  </div>
                </div>
                <div className="tp-about-signeture d-flex">
                  <div className="tp-about-btn mr-60">
                    <a className="tp-btn" href="/about_us">
                      Learn more{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="tp-about-3-thumb-wrapper p-relative wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                data-module="countup"
              >
                <div className="tp-about-3-thumb d-none d-xl-block">
                  <img
                    className="shape-1"
                    src="assets/img/home/s_2/Unleash 1.jpg"
                    alt=""
                  />
                  <img
                    className="shape-2"
                    src="assets/img/home/s_2/Unlesh_.jpg"
                    alt=""
                  />
                  <div className="shape-3">
                    <h2 data-countup-number="60,000">60,000+</h2>
                    <h6> Active users </h6>
                  </div>
                </div>
                <div className="tp-hero-2-wrapper-slider d-xl-none">
                  <div className="tp-hero-active swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img src="assets/img/home/s_2/Unleash 1.jpg" alt="" />
                      </div>
                      <div className="swiper-slide">
                        <img src="assets/img/home/s_2/Unlesh_.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Who we are end */}

      {/* Aspects area start */}
      <section
        className="tp-countries-visit-area p-relative pt-120 pb-90 tp-countries-visit-bg"
        data-background="assets/img/home/s_3/Finets_Bg.jpg"
      >
        <div
          className="tp-countries-visit-shape wow fadeInLeft"
          data-wow-duration="1s"
          data-wow-delay=".3s"
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-countries-visit-wrapper text-center mb-50">
                <span className="tp-section-title-pre">
                  Aspiring for greatness{" "}
                </span>
                <h3 className="tp-section-title">
                  {" "}
                  Fantasy cricket at <br /> its finest
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div
                className="tp-countries-visit-item text-center mb-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="tp-countries-visit-icon">
                  <span>
                    <img
                      src="assets/img/home/s_3/Engaging gameplay.svg"
                      alt=""
                    />
                  </span>
                </div>
                <h4 className="tp-countries-visit-title">
                  Engaging <br /> gameplay
                </h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div
                className="tp-countries-visit-item text-center mb-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".5s"
              >
                <div className="tp-countries-visit-icon">
                  <span>
                    <img
                      src="assets/img/home/s_3/Intuitive interfaces.svg"
                      alt=""
                    />
                  </span>
                </div>
                <h4 className="tp-countries-visit-title">
                  Intuitive <br /> interfaces
                </h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div
                className="tp-countries-visit-item text-center mb-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".7s"
              >
                <div className="tp-countries-visit-icon">
                  <span>
                    <img
                      src="assets/img/home/s_3/Seamless contests.svg"
                      alt=""
                    />
                  </span>
                </div>
                <h4 className="tp-countries-visit-title">
                  Seamless <br /> contests
                </h4>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div
                className="tp-countries-visit-item text-center mb-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".9s"
              >
                <div className="tp-countries-visit-icon">
                  <span>
                    <img
                      src="assets/img/home/s_3/Constant support.svg"
                      alt=""
                    />
                  </span>
                </div>
                <h4 className="tp-countries-visit-title">
                  Constant <br /> support
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Aspects area end */}

      {/* How we make a difference start */}
      <section className="section_h_w_m_d tp-benefits-area p-relative tp-benefits-border pb-100 pt-100">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-7 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="tp-benefits-title-wrapper mb-50">
                <span className="tp-section-title-pre">Blazing new paths </span>
                <h3 className="tp-section-title">
                  Crickovers, where your FC dreams come true{" "}
                </h3>
                <p>
                  Through our commitment to fair play and integrity, we ensure
                  that every user has an equal chance to succeed. We provide a
                  level playing field to showcase your true skills.{" "}
                </p>
              </div>
              <div className="tp-benefits-item-wrapper d-flex">
                <div className="tp-benefits-item d-flex align-items-center">
                  <div className="tp-benefits-icon">
                    <span>
                      <img
                        src="assets/img/home/s_4/Enhanced convenienvce.svg"
                        alt=""
                      />
                    </span>
                  </div>
                  <h4 className="tp-benefits-title">Enhanced convenience </h4>
                </div>
                <div className="tp-benefits-item d-flex align-items-center">
                  <div className="tp-benefits-icon">
                    <span>
                      <img
                        src="assets/img/home/s_4/Expert assistance.svg"
                        alt=""
                      />
                    </span>
                  </div>
                  <h4 className="tp-benefits-title">Support from experts</h4>
                </div>
              </div>
              <div className="tp-benefits-item-wrapper d-flex">
                <div className="tp-benefits-item d-flex align-items-center">
                  <div className="tp-benefits-icon">
                    <span>
                      <img
                        src="assets/img/home/s_4/Thrilling matches.svg"
                        alt=""
                      />
                    </span>
                  </div>
                  <h4 className="tp-benefits-title">
                    Matches that are thrilling
                  </h4>
                </div>
                <div className="tp-benefits-item d-flex align-items-center">
                  <div className="tp-benefits-icon">
                    <span>
                      <img
                        src="assets/img/home/s_4/Captivating experiences.svg"
                        alt=""
                      />
                    </span>
                  </div>
                  <h4 className="tp-benefits-title">Captivating experience </h4>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="tp-benefits-thumb-wrapper p-relative">
                <div className="tp-benefits-thumb text-lg-end tp-shine">
                  <img src="assets/img/home/s_4/Blazing New.jpg" alt="" />
                </div>
                <div className="tp-benefits-progressbar">
                  <div className="circular tl-progress">
                    <input
                      type="text"
                      className="knob"
                      defaultValue={0}
                      data-rel={95}
                      data-linecap="round"
                      data-width={80}
                      data-height={80}
                      data-bgcolor="#f84074"
                      data-fgcolor="#ffff"
                      data-thickness=".07"
                      data-readonly="true"
                      disabled=""
                    />
                  </div>
                  <h3 className="tp-benefits-progressbar-title">
                    User retention{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How we make a difference end */}

      {/* How to sign in start */}
      <section
        id="services"
        className="section_h_h_s_i tp-service-3-area p-relative pt-120 dark_bg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-service-3-title-wrapper text-center mb-50">
                <span className="tp-section-title-pre">Sign in now </span>
                <h3 className="tp-section-title">
                  Rule the fantasy <br /> cricket realm{" "}
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-6">
              <div
                className="tp-service-3-item mb-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="tp-service-3-thumb p-relative">
                  <img src="assets/img/home/s_5/Create Account.jpg" alt="" />
                </div>
                <div className="tp-service-3-content">
                  <div className="tp-service-3-icon">
                    <span>
                      <img
                        src="assets/img/home/s_5/Create account.svg"
                        alt=""
                      />
                    </span>
                  </div>
                  <h4 className="tp-service-3-title">
                    <a>Create account </a>
                  </h4>
                  <p className="pb-4">
                    Join the realm of fantasy cricket and embark on your epic
                    journey – Create your account now{" "}
                  </p>
                  <div className="tp-service-3-content-shape">
                    <img src="assets/img/home/s_5/Shape.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-6">
              <div
                className="tp-service-3-item mb-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".5s"
              >
                <div className="tp-service-3-thumb p-relative">
                  <img src="assets/img/home/s_5/Fill information.jpg" alt="" />
                </div>
                <div className="tp-service-3-content">
                  <div className="tp-service-3-icon">
                    <span>
                      <img
                        src="assets/img/home/s_5/fill information.svg"
                        alt=""
                      />
                    </span>
                  </div>
                  <h4 className="tp-service-3-title">
                    <a>Fill information </a>
                  </h4>
                  <p className="pb-4">
                    Provide the required information and complete your profile
                    to kickstart your journey.
                  </p>
                  <div className="tp-service-3-content-shape">
                    <img src="assets/img/home/s_5/Shape.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-6">
              <div
                className="tp-service-3-item mb-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".7s"
              >
                <div className="tp-service-3-thumb p-relative">
                  <img src="assets/img/home/s_5/Start Playuing.jpg" alt="" />
                </div>
                <div className="tp-service-3-content">
                  <div className="tp-service-3-icon">
                    <span>
                      <img src="assets/img/home/s_5/Start playing.svg" alt="" />
                    </span>
                  </div>
                  <h4 className="tp-service-3-title">
                    <a>Start playing</a>
                  </h4>
                  <p className="pb-4">
                    Once that is done, let us take you on an epic fantasy
                    cricket odyssey where dreams come true.{" "}
                  </p>
                  <div className="tp-service-3-content-shape">
                    <img src="assets/img/home/s_5/Shape.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How to sign in end */}

      {/* Understand the game start */}
      <section
        className="section_h_b_a_s dark_bg tp-categories-3-area p-relative pt-120 pb-90 z-index-1"
        style={{
          backgroundImage:
            'url("assets/img/home/s_6/Know your FC BG Layer.jpg")',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-categories-3-wrapper text-center mb-50">
                <span className="tp-section-title-pre">Be a scholar</span>
                <h3 className="tp-section-title">
                  Know more <br /> about FC
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div
                className="tp-categories-3-item p-relative z-index-1 mb-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="tp-categories-3-icon">
                  <span>
                    <img src="assets/img/home/s_6/match selection.svg" alt="" />
                  </span>
                </div>
                <div className="tp-categories-3-content">
                  <h4 className="tp-categories-3-title">Match selection </h4>
                  <p>Choose from a myriad of real-life cricket matches. </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div
                className="tp-categories-3-item p-relative z-index-1 mb-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".5s"
              >
                <div className="tp-categories-3-icon">
                  <span>
                    <img src="assets/img/home/s_6/Team building.svg" alt="" />
                  </span>
                </div>
                <div className="tp-categories-3-content">
                  <h4 className="tp-categories-3-title">Team building </h4>
                  <p>Create your team to dominate the competition. </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div
                className="tp-categories-3-item p-relative z-index-1 mb-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".7s"
              >
                <div className="tp-categories-3-icon">
                  <span>
                    <img src="assets/img/home/s_6/Scoring system.svg" alt="" />
                  </span>
                </div>
                <div className="tp-categories-3-content">
                  <h4 className="tp-categories-3-title">Scoring system</h4>
                  <p>Understand the scoring system and soar high. </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div
                className="tp-categories-3-item p-relative z-index-1 mb-30 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".9s"
              >
                <div className="tp-categories-3-icon">
                  <span>
                    <img
                      src="assets/img/home/s_6/Choosing_captain.svg"
                      alt=""
                    />
                  </span>
                </div>
                <div className="tp-categories-3-content">
                  <h4 className="tp-categories-3-title">Choosing captain </h4>
                  <p>Select your captain and vice-captain carefully. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Understand the game end */}

      {/* Contest start */}
      <section
        id="country"
        className="tp-countries-2-area p-relative tp-countries-2-bg pt-120 pb-90"
        data-background="assets/img/countries/home-2/bg.png"
      >
        <div className="container">
          <div className="row">
            <div className="tp-countries-2-wrapper text-center mb-30">
              <span className="tp-section-title-pre-2">
                Your playing grounds{" "}
              </span>
              <h3 className="tp-section-title">
                Choose your preferred <br /> contests seamlessly{" "}
              </h3>
            </div>
          </div>
          <div
            className="row wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
          >
            <div className="col-lg-3 col-md-6">
              <a>
                <div className="tp-countries-item text-center mb-30">
                  <div className="tp-countries-thumb">
                    <img src="assets/img/home/s_7/Mega Content.jpg" alt="" />
                  </div>
                  <div className="tp-countries-name">
                    <h4 className="tp-countries-title">Mega Contest </h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a>
                <div className="tp-countries-item text-center mb-30">
                  <div className="tp-countries-thumb">
                    <img src="assets/img/home/s_7/Hot Contest.jpg" alt="" />
                  </div>
                  <div className="tp-countries-name">
                    <h4 className="tp-countries-title">Hot Contest </h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a>
                <div className="tp-countries-item text-center mb-30">
                  <div className="tp-countries-thumb">
                    <img src="assets/img/home/s_7/Head to Head.jpg" alt="" />
                  </div>
                  <div className="tp-countries-name">
                    <h4 className="tp-countries-title">Head to Head</h4>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <a>
                <div className="tp-countries-item text-center mb-30">
                  <div className="tp-countries-thumb">
                    <img
                      src="assets/img/home/s_7/Low Entry Contest.jpg"
                      alt=""
                    />
                  </div>
                  <div className="tp-countries-name">
                    <h4 className="tp-countries-title">Low Entry Contest</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Contest end */}

      {/* Queries start */}
      <section
        className="section_h_g_a tp-cta-area p-relative pt-120 pb-110 tp-cta-bg"
        data-background="assets/img/home/s_8/Home_FAQ_.jpg"
      >
        <div className="conteiner-fluid gx-0">
          <div className="row gx-0">
            <div className="col-lg-12">
              <div className="tp-cta-wrapper text-center">
                <span className="tp-section-title-pre-2 text-white">
                  Get answers{" "}
                </span>
                <h3 className="tp-cta-title">Clear your FC queries here </h3>
                <div className="tp-cta-btn">
                  <a className="tp-btn" href="/contact_us">
                    Reach out{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Queries end */}
    </main>
  );
}

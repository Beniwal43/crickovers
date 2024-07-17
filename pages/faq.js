/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const faq = () => {
  return (
    <main>
      <>
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
                    <span>FAQ</span>
                  </div>
                  <h3 className="breadcrumb__title">FAQ</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about breadcrumb area end */}
        {/* faq area start */}
        <section className="section_f_g_y_a tp-faq-breadcrumb-area pt-120 pb-120 dark_bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="tp-faq-breadcrumb-wrapper text-center p-relative mb-90"
                  style={{
                    backgroundImage: 'url("assets/img/faq/FAQ Top Banner.jpg")',
                  }}
                >
                  <div className="tp-faq-breadcrumb-shape"></div>
                  <span className="tp-section-title-pre">
                    Get your answers{" "}
                  </span>
                  <h3 className="tp-section-title">
                    Gain insight and <br />
                    win games{" "}
                  </h3>
                  <div className="tp-faq-breadcrumb-shape-2"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="tp-faq">
                  <div className="tp-faq-accordion">
                    <div
                      className="accordion accordionExample"
                      id="accordionExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            What is the scoring system for Fantasy Cricket?
                            <span className="accordion-btn" />
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Keep in mind that the scoring system varies
                              depending on the format of the cricket (Test, ODI,
                              T20). You earn points when your chosen players
                              score runs, take wickets, effect run-outs, and
                              more. It is important that you have a clear
                              understanding of the scoring system while playing.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            How can I start playing Fantasy Cricket?
                            <span className="accordion-btn" />
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              To start playing on Crickovers, first you need to
                              sign up on our application. Once registered on our
                              application, you can select a match and build your
                              dream team. It is also important to remember that
                              you earn points based on the real-life performance
                              of your selected players.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Can I edit my team after creating it?
                            <span className="accordion-btn" />
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Yes, at Crickovers you have the opportunity to
                              edit your team until the deadline, which is
                              usually the start time of the match. However,
                              post-deadline, your team is locked and you will
                              not be able to make changes. Please check the
                              match details for exact deadline information.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            How does the Fantasy Cricket platform work?
                            <span className="accordion-btn" />
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              We at Crickovers allow you to create your own team
                              of real-world cricket players and earn points
                              based on their performance in actual matches. To
                              get your fantasy cricket journey started at
                              Crickovers, you just have to simply sign up,
                              select a match, and pick your team.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="tp-faq">
                  <div className="tp-faq-accordion">
                    <div
                      className="accordion accordionExample2"
                      id="accordionExample2"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseseven"
                            aria-expanded="true"
                            aria-controls="collapseseven"
                          >
                            What happens if a player doesnt plays?
                            <span className="accordion-btn" />
                          </button>
                        </h2>
                        <div
                          id="collapseseven"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <p>
                              If a player from your team doesnt participate in
                              the actual match, you wont earn points for that
                              players performance. This is one of the reasons
                              why it is extremely important that you monitor
                              player availability, make substitutions
                              accordingly and stay on top of the game.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            Is there a limit to how many teams I can have?
                            <span className="accordion-btn" />
                          </button>
                        </h2>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <p>
                              There is a limit on the number of teams you can
                              create for a single match at Crickovers. This
                              limit varies from match to match, so make sure to
                              check the specific rules for each one. Having
                              multiple teams gives you the chance to experiment
                              with different player combinations.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEight"
                            aria-expanded="false"
                            aria-controls="collapseEight"
                          >
                            Where can I withdraw my fantasy cricket winnings?
                            <span className="accordion-btn" />
                          </button>
                        </h2>
                        <div
                          id="collapseEight"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <p>
                              To withdraw your winnings, go to your account
                              settings, and follow the instructions that are
                              provided there for initiating a withdrawal. While
                              doing it, ensure that youve met the necessary
                              withdrawal criteria, such as a minimum balance
                              threshold, before requesting a payout.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseNine"
                            aria-expanded="false"
                            aria-controls="collapseNine"
                          >
                            How do I create a Fantasy Cricket team?
                            <span className="accordion-btn" />
                          </button>
                        </h2>
                        <div
                          id="collapseNine"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            <p>
                              To create a team, first select an upcoming match.
                              Youll then be given a virtual budget to select
                              players to your team. When creating your fantasy
                              cricket team, you need to select a balanced team
                              of batsmen, bowlers, all-rounders, and a
                              wicket-keeper while staying within budget.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* faq area end */}
      </>
    </main>
  );
};

export default faq;

/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const pointTable = () => {
  return (
    <main>
      <>
        {/* breadcrumb area start */}
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
                    <span>Points Table</span>
                  </div>
                  <h3 className="breadcrumb__title">Points Table</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb area end */}
        <section id="ponits_table" className="section_padding_py">
          <div className="container">
            <div className="p_t_head">
              <a className="tp-btn active" data-value="#bwl_points">
                Bowling Points
              </a>
              <a className="tp-btn " data-value="#bat_points">
                Batting Points
              </a>
              <a className="tp-btn " data-value="#fld_points">
                Fielding Points
              </a>
            </div>
            <div className="row pnts_tab_c active" id="bwl_points">
              <div className="col-lg-12">
                <div className="tp-categories-title-wrapper text-center">
                  <h5 className="tp-section-title fs-1 fs-1">Bowling Points</h5>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Type of Points</th>
                        <th>T20</th>
                        <th>ODI</th>
                        <th>Test</th>
                        <th>T10</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Each wicket taken (except run-out)</td>
                        <td>25</td>
                        <td>25</td>
                        <td>16</td>
                        <td>25</td>
                      </tr>
                      <tr>
                        <td>Every Caught and Bowled</td>
                        <td>33</td>
                        <td>33</td>
                        <td>24</td>
                        <td>33</td>
                      </tr>
                      <tr>
                        <td>Every Maiden over Bowled</td>
                        <td>8</td>
                        <td>4</td>
                        <td>NA</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td>2 wicket-streak by one bowler</td>
                        <td>NA</td>
                        <td>NA</td>
                        <td>NA</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>3 wicket-streak by one bowler</td>
                        <td>NA</td>
                        <td>NA</td>
                        <td>NA</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td>4 wicket-streak by one bowler</td>
                        <td>8</td>
                        <td>4</td>
                        <td>4</td>
                        <td>NA</td>
                      </tr>
                      <tr>
                        <td>5 wicket-streak by one bowler</td>
                        <td>16</td>
                        <td>8</td>
                        <td>8</td>
                        <td>NA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row mt-70 pnts_tab_c" id="bat_points">
              <div className="col-lg-12">
                <div className="tp-categories-title-wrapper text-center">
                  <h3 className="tp-section-title fs-1">Batting Points</h3>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Type of Points</th>
                        <th>T20</th>
                        <th>ODI</th>
                        <th>Test</th>
                        <th>T10</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Every Runs Scored</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>Every Boundary hit</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>Every six hit</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>Every century (100 runs)</td>
                        <td>16</td>
                        <td>8</td>
                        <td>8</td>
                        <td>NA</td>
                      </tr>
                      <tr>
                        <td>Every half century (50 runs)</td>
                        <td>8</td>
                        <td>4</td>
                        <td>4</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td>Every 30 runs</td>
                        <td>NA</td>
                        <td>NA</td>
                        <td>NA</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>Every dismissal for a duck (zero runs)</td>
                        <td>-2</td>
                        <td>-3</td>
                        <td>-4</td>
                        <td>-2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row mt-70 pnts_tab_c" id="fld_points">
              <div className="col-lg-12">
                <div className="tp-categories-title-wrapper text-center">
                  <h3 className="tp-section-title fs-1">Fielding Points</h3>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Type of Points</th>
                        <th>T20</th>
                        <th>ODI</th>
                        <th>Test</th>
                        <th>T10</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Every catch</td>
                        <td>8</td>
                        <td>8</td>
                        <td>8</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>Stumping/Run-out effected (Direct)</td>
                        <td>12</td>
                        <td>12</td>
                        <td>12</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td>Run-out effected (Thrower/Catcher)</td>
                        <td>8/4</td>
                        <td>8/4</td>
                        <td>8/4</td>
                        <td>8/4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row mt-70">
              <div className="col-lg-12">
                <div className="tp-categories-title-wrapper text-center">
                  <h3 className="tp-section-title fs-1">Others Points</h3>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Type of Points</th>
                        <th>Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Captain</td>
                        <td>3X</td>
                      </tr>
                      <tr>
                        <td>Vice-Captain</td>
                        <td>2X</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row mt-70">
              <div className="col-lg-12">
                <div className="tp-categories-title-wrapper mb-0">
                  <h3 className="tp-section-title fs-2">
                    Statement of victory{" "}
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul>
                  <li>
                    Captains get 3x points and vice-captains get 2x points.
                  </li>
                  <li>Super Overs and Super Fives are not credited.</li>
                  <li>
                    When rain delays start time, there is no change in points.
                  </li>
                  <li>
                    Test matches do not incur negative points for low strike
                    rates.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    </main>
  );
};

export default pointTable;

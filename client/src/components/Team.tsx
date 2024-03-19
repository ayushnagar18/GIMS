import React, { Fragment } from "react";
import NavBar from "./NavBar";
import "../styles/Team.css";
import Teammembers from "./Teammembers";
import axios from "axios";

interface details {
  name?: string;
  role?: string;
  image?: string;
  industryexperience?: any;
  researchexperience?: any;
  designskills?: any;
  projectmanagement?: any;
  creativity?: any;
  programmingskills?: any;
  industryknowledge?: any;
  manufacturing?: any;
  selfmotivation?: any;
  stamina?: any;
  reflex?: any;
  intelligence?: any;
  healingfactor?: any;
  sarcasm?: any;
  speed?: any;
  heroimg?: string;
}

const Team = () => {
  
  const [data, setData] = React.useState([]);
  var config = {
    method: "get",
    url: process.env.REACT_APP_BACKEND_URL + "/teammembers",
    headers: {},
  };

  axios(config)
    .then(function (response: any) {
      setData(response.data);
    })
    .catch(function (error: any) {
      console.log(error);
    });

  return (
    <Fragment>
      <NavBar />
      <section className="bannerteam-sec" >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
              <h2 className="txt pb-3" style={{fontFamily:'Poppins'}}>Meet Our Team</h2>
              <p className="txt-2">
                If everyone is moving forward together, then success takes care of itself!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="industry-secteam pb-5" style={{backgroundColor:'#e1e1e17a'}} >
        <div className="container">
          <div className="row">
            {data?.map((detail: details) => (
              <Fragment>
                <div className="col-xl-4 col-lg-6 col-md-6 col-12 pb-5">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={`${process.env.REACT_APP_BACKEND_URL}/images/${detail.image}`}
                    />
                    <div className="card-body text-center">
                      <p className="txt-3-semi">
                        {detail?.name?.toUpperCase()}
                        
                      </p>
                      <p className="txt-3-dp">{detail?.role?.toUpperCase()}</p>
                      
                    </div>
                    <div className="back-flip">
                      <nav>
                        <div className="nav nav-tabs">
                          <button
                            className="nav-link active txt-3-dp"
                            id={`nav-${detail.name + "1"}-tab`}
                            data-bs-toggle="tab"
                            data-bs-target={`#nav-${detail.name + "1"}`}
                            type="button"
                            role="tab"
                            aria-controls={`nav-${detail.name + "1"}`}
                            aria-selected="true"
                          >
                            Industry
                          </button>
                          <button
                            className="nav-link txt-3-dp"
                            id={`nav-${detail.name + "2"}-tab`}
                            data-bs-toggle="tab"
                            data-bs-target={`#nav-${detail.name + "2"}`}
                            type="button"
                            role="tab"
                            aria-controls={`nav-${detail.name + "2"}`}
                            aria-selected="true"
                          >
                            Superpowers
                          </button>
                        </div>
                      </nav>
                      <div
                        className="tab-content"
                        id="nav-tabContent"
                        style={{
                          backgroundImage:
                            "url(" +
                            `${process.env.REACT_APP_BACKEND_URL}/images/${detail.heroimg}` +
                            ")",
                          // backgroundSize: "cover",
                          // backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div
                          className="container  tab-pane show active fade"
                          id={`nav-${detail.name + "1"}`}
                          role="tabpanel"
                          aria-labelledby={`nav-${detail.name + "1"}-tab`}
                          tabIndex={0}
                        >
                          <br />
                          <div className="row transbox justify-content-center align-content-center">
                            <div className="col-xl-8 col-lg-8 col-md-8 col-8 py-5 details-sec">
                              <p className="txt-3-wt">Industry Experience</p>
                              <br />
                              <p className="txt-3-wt">Research Experience</p>
                              <br />
                              <p className="txt-3-wt">Design Skills</p>
                              <br />
                              <p className="txt-3-wt">Project Management</p>
                              <br />
                              <p className="txt-3-wt">Creativity</p>
                              <br />
                              <p className="txt-3-wt">Programming Skills</p>
                              <br />
                              <p className="txt-3-wt">Industry Knowledge</p>
                              <br />
                              <p className="txt-3-wt">Manufacturing</p>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-4 py-5 details-sec">
                              <div className="progress">
                                <div
                                  className="progress-bar fw-bold"
                                  style={{
                                    width: `${detail.industryexperience}%`,
                                  }}
                                >
                                  {detail.industryexperience}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: `${detail.researchexperience}%`,
                                  }}
                                >
                                  {detail.researchexperience}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.designskills}%` }}
                                >
                                  {detail.designskills}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: `${detail.projectmanagement}%`,
                                  }}
                                >
                                  {detail.projectmanagement}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.creativity}%` }}
                                >
                                  {detail.creativity}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: `${detail.programmingskills}%`,
                                  }}
                                >
                                  {detail.programmingskills}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: `${detail.industryknowledge}%`,
                                  }}
                                >
                                  {detail.industryknowledge}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.manufacturing}%` }}
                                >
                                  {detail.manufacturing}
                                </div>
                              </div>
                              <br />
                            </div>
                          </div>
                        </div>
                        <div
                          className="container  tab-pane show active tab-pane1 fade"
                          id={`nav-${detail.name + "2"}`}
                          role="tabpanel"
                          aria-labelledby={`nav-${detail.name + "2"}-tab`}
                          tabIndex={0}
                        >
                          <br />
                          <div className="row transbox justify-content-center align-content-center">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-6 py-5 details-sec">
                              <p className="txt-3-wt">Self Motivation</p>
                              <br />
                              <p className="txt-3-wt">Stamina</p>
                              <br />
                              <p className="txt-3-wt">Reflex</p>
                              <br />
                              <p className="txt-3-wt">Intelligence</p>
                              <br />
                              <p className="txt-3-wt">Healing Factor</p>
                              <br />
                              <p className="txt-3-wt">Sarcasm</p>
                              <br />
                              <p className="txt-3-wt">Speed</p>
                              <br />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-6 py-5 details-sec">
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.selfmotivation}%` }}
                                >
                                  {detail.selfmotivation}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.stamina}%` }}
                                >
                                  {detail.stamina}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.reflex}%` }}
                                >
                                  {detail.reflex}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.intelligence}%` }}
                                >
                                  {detail.intelligence}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.healingfactor}%` }}
                                >
                                  {detail.healingfactor}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.sarcasm}%` }}
                                >
                                  {detail.sarcasm}
                                </div>
                              </div>
                              <br />
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  style={{ width: `${detail.speed}%` }}
                                >
                                  {detail.speed}
                                </div>
                              </div>
                              <br />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
             ))} 
          </div>
        </div>
      </section> */}
      <Teammembers />
    </Fragment>
  );
};

export default Team;

import React, { Fragment, useEffect, useState } from "react";
import "../styles/Careers.css";
import NavBar from "./NavBar";
import banner from "../assets/Careers/banner2x.png";
import Footer from "./Footer";
import { career } from "../utils";
import { FaArrowRight, FaBookOpen, FaCalendarAlt, FaCoffee, FaDollarSign, FaForward, FaHospitalUser, FaLocationArrow, FaLongArrowAltRight, FaMicrochip, FaMoneyBill, FaMountain, FaRupeeSign, FaThinkPeaks, FaUmbrellaBeach } from "react-icons/fa";
import axios from "axios";
import guhan_image from "../assets/Careers/Guhan-removebg-preview.png"
import CareerPage from "./CareerPage";

interface Resumeform {
  name?: string;
  email?: string;
  mobile?: string;
}
const Careers = () => {
  const [data, setData] = useState<career[]>([]);

  useEffect(() => {
    // var axios = require("axios");

    var config = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + "/careers",
      headers: {},
    };

    axios(config)
      .then(function (response: any) {
        setData(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);

  const pe = data.filter((career: career) => {
    if (career.domain === "Product Engineering") {
      return true;
    }
    return false;
  });

  const pd = data.filter((career: career) => {
    if (career.domain === "Product Design") {
      return true;
    }
    return false;
  });

  const inv = data.filter((career: career) => {
    if (career.domain === "Innovations") {
      return true;
    }
    return false;
  });

  const manufact = data.filter((career: career) => {
    if (career.domain === "Manufacturing Solutions") {
      return true;
    }
    return false;
  });
  return (
    <Fragment>
      <NavBar />
      <section >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center p-0">
              <img className="bannerimg" src={banner} />
            </div>
          </div>
        </div>
      </section>

      <section className="bannercar-sec ">
        <div className="container">
          <div className="row align-items-center">
            <div className="text-center career-start" >
              <h2 className="txt-career pb-3">At GIMS, you'll make  word-class work with a friendly  and talented team.</h2>
              <p className="txt-p" style={{ fontFamily: 'roboto' }}>
                We believe in fostering a dynamic work environment where creativity and innovation thrive. Join our team of friendly and talented individuals who are passionate about making a meaningful impact. Collaborate on projects that push boundaries, and contribute to world-class work that makes a difference. At GIMS, you'll find not just a workplace, but a community of like-minded professionals dedicated to excellence and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section2 ">
        <section className="why-wth-us pb-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
                <h2 className="txt pb-3">Why work with us?</h2>

              </div>
            </div>
            <div className="box-section">
              <div className="box">
                <div className="icon" ><FaBookOpen /></div>
                <p>Personal Development</p>
              </div>
              <div className="box">
                <div className="icon"><FaMicrochip /></div>
                <p>Working with latest Technology</p>
              </div>
              <div className="box">
                <div className="icon"><FaRupeeSign /></div>
                <p>Competitive Salaries</p>
              </div>
              <div className="box">
                <div className="icon"><FaThinkPeaks /></div>
                <p>Personal Growth </p>
              </div>
              <div className="box">
                <div className="icon"><FaCalendarAlt /></div>
                <p>Vacations</p>
              </div>
              <div className="box">
                <div className="icon"><FaHospitalUser /></div>
                <p>Health Insurance</p>
              </div>
            </div>

            <div className="guhan-sec">
              <div className="image-half">
                <img src={guhan_image} className="full-width" alt="" />
              </div>
              <div className="txt-half">
                <p>"We don't have Great People <br /> who do ordinary things BUT ordinary people who DO GREAT THINGS and that's what makes them GREAT "</p>
                <p className="txt-2" style={{ fontSize: '20px', fontStyle: 'normal' }}>~Guhan Gunasekran</p>
              </div>
            </div>

            <div className="recruitment">
              <h2>Our Recruitment Process</h2>
              <p>
                The recruitment process is a methodical approach to sourcing, evaluating, and hiring candidates for job openings. It typically involves job analysis, posting positions through various channels, resume screening, interviews, background checks, and ultimately extending a job offer. Employers aim to identify individuals whose skills, qualifications, and values align with the organization's needs. Effective communication with candidates is essential for maintaining a positive employer brand throughout the process. Once a candidate is selected, the onboarding phase ensures a smooth integration into the company.
              </p>
            </div>



          </div>
        </section>

        <h2 className="location-header">Location</h2>
        <div className="location-gims">
          <div className="city">
            <h2>Chennai</h2>
            <p>
              Chennai, a city that exudes unparalleled charm, stands as a testament to the epitome of beauty in South India. Its bustling streets and lively markets weave a tapestry of vibrant colors and rich traditions. The warmth of its people, known for their genuine hospitality, creates an atmosphere that feels like a home away from home. The city's dynamic energy, pulsating through its streets, reflects a perfect blend of modernity and cultural heritage
            </p>

          </div>
          <div className="img-chennai">
            <section></section>
          </div>
        </div>



      </div>
      <section className="tab-sec pt-3 pb-5 job-list">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <h2 className="txt pb-5 text-center">Open Positions</h2>
              <div className="tab-main pt-2">
                <div className="wrap-tab">
                  <nav>
                    <div
                      className="nav nav-tabs nav-justified px-5"
                      id="nav-tab"
                      role="tablist"
                    >
                      {/* {pe && pe.length > 0 && ( */}
                      <button
                        className="nav-link active"
                        id="nav-menu1-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-menu1"
                        type="button"
                        role="tab"
                        aria-controls="nav-menu1"
                        aria-selected="true"
                      >
                        <p className="body-sm" style={{ fontFamily: 'roboto' }}>Product Engineering</p>
                      </button>
                      {/* )} */}
                      {/* {pd && pd.length > 0 && ( */}
                      <button
                        className="nav-link"
                        id="nav-menu2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-menu2"
                        type="button"
                        role="tab"
                        aria-controls="nav-menu2"
                        aria-selected="false"
                      >
                        <p className="body-sm" style={{ fontFamily: 'roboto' }}>Product Design</p>
                      </button>
                      {/* )} */}
                      {/* {inv && inv.length > 0 && ( */}
                      <button
                        className="nav-link"
                        id="nav-menu3-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-menu3"
                        type="button"
                        role="tab"
                        aria-controls="nav-menu3"
                        aria-selected="false"
                      >
                        <p className="body-sm" style={{ fontFamily: 'roboto' }}>Innovations</p>
                      </button>
                      {/* )} */}
                      {/* {manufact && manufact.length > 0 && ( */}
                      <button
                        className="nav-link"
                        id="nav-menu4-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-menu4"
                        type="button"
                        role="tab"
                        aria-controls="nav-menu4"
                        aria-selected="false"
                      >
                        <p className="body-sm" style={{ fontFamily: 'roboto' }}>Manufacturing Solutions</p>
                      </button>
                      {/* )} */}
                    </div>
                  </nav>
                </div>
              </div>
              <div
                className="tab-content industry-sec pt-2 pb-4"
                id="nav-tabContent"
              >
                <div
                  className="container tab-pane fade show active"
                  id="nav-menu1"
                  role="tabpanel"
                  aria-labelledby="nav-menu1-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center mb-5">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                      {pe.map(
                        (career: career) =>
                          career &&
                          career.isactive && (
                            <Fragment key={career.id}>

                              <div
                                className="card mt-5 text-bg-light"
                                data-bs-toggle="modal"
                                data-bs-target={`#${career.id}`}
                              >
                                <div className="card-body">
                                  <p className="txt-3-bold" style={{ fontFamily: 'Lato' }}>{career.title}</p>

                                  <p className="body-bold py-2" style={{ fontFamily: 'Arial' }}>
                                    {career.description}

                                  </p>
                                  <div className="row justify-content-center">
                                    <ul className="mt-3 col-8">
                                      <li>{career.type}</li>

                                      <li>{career.experience} experience</li>

                                    </ul>
                                    <a
                                      href={`/career/${career.id}`}
                                      className="btn col-2 mt-2"
                                    >
                                      Show More <FaArrowRight />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </Fragment>
                          )
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="container tab-pane fade"
                  id="nav-menu2"
                  role="tabpanel"
                  aria-labelledby="nav-menu2-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center mb-5">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    {pd.map(
                        (career: career) =>
                          career &&
                          career.isactive && (
                            <Fragment key={career.id}>
                              <div
                                className="card mt-5 text-bg-light"
                                data-bs-toggle="modal"
                                data-bs-target={`#${career.id}`}
                              >
                                <div className="card-body">
                                  <p className="txt-3-bold" style={{ fontFamily: 'Lato' }}>{career.title}</p>
                                  <p className="body-bold py-2" style={{ fontFamily: 'Arial' }}>
                                    {career.description}
                                  </p>
                                  <div className="row justify-content-center">
                                    <ul className="mt-3 col-8">
                                      <li>{career.type}</li>
                                      <li>{career.experience} experience</li>
                                    </ul>
                                    <a
                                      href={`/career/${career.id}`}
                                      className="btn col-2 mt-2"
                                    >
                                      Show More <FaArrowRight />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </Fragment>
                          )
                      )}
                      
                    </div>
                  </div>
                </div>
                <div
                  className="container tab-pane fade"
                  id="nav-menu3"
                  role="tabpanel"
                  aria-labelledby="nav-menu3-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center mb-5">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                      {inv.map(
                        (career: career) =>
                          career &&
                          career.isactive && (
                            <Fragment key={career.id}>
                              <div
                                className="card mt-5 text-bg-light"
                                data-bs-toggle="modal"
                                data-bs-target={`#${career.id}`}
                              >
                                <div className="card-body">
                                  <p className="txt-3-bold" style={{ fontFamily: 'Lato' }}>{career.title}</p>
                                  <p className="body-bold py-2" style={{ fontFamily: 'Arial' }}>
                                    {career.description}
                                  </p>
                                  <div className="row justify-content-center">
                                    <ul className="mt-3 col-8">
                                      <li>{career.type}</li>
                                      <li>{career.experience} experience</li>
                                    </ul>
                                    <a
                                      href={`/career/${career.id}`}
                                      className="btn col-2 mt-2"
                                    >
                                      Show More <FaArrowRight />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </Fragment>
                          )
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="container tab-pane fade"
                  id="nav-menu4"
                  role="tabpanel"
                  aria-labelledby="nav-menu4-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center mb-5">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                      {manufact.map(
                        (career: career) =>
                          career &&
                          career.isactive && (
                            <Fragment key={career.id}>
                              <div
                                className="card mt-5 text-bg-light"
                                data-bs-toggle="modal"
                                data-bs-target={`#${career.id}`}
                              >
                                <div className="card-body">
                                  <p className="txt-3-bold" style={{ fontFamily: 'Lato' }}>{career.title}</p>
                                  <p className="body-bold py-2" style={{ fontFamily: 'Arial' }}>
                                    {career.description}
                                  </p>
                                  <div className="row justify-content-center">
                                    <ul className="mt-3 col-8">
                                      <li>{career.type}</li>
                                      <li>{career.experience} experience</li>
                                    </ul>
                                    <a
                                      href={`/career/${career.id}`}
                                      className="btn col-2 mt-2"
                                    >
                                      Show More <FaArrowRight />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </Fragment>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </Fragment>
  );
};

export default Careers;

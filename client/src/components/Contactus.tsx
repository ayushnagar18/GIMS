import React, { Fragment } from "react";
import NavBar from "./NavBar";
import { FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import "../styles/Contactus.css";
import banner from '../assets/Home/product-design-bnr.png'
import Footer from "./Footer";

const Contactus = () => {
  return (
    <Fragment>
      <NavBar />

      <section className="main-form py-5">
        <div className="container" >
          

          <div className="row align-items-center" style={{ flex: 3, marginTop: '0' }}>
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
              <h2 className="txt pb-1" style={{fontFamily:'Roboto'}}>Contact Us</h2>
              <p className="txt-2">We'd love to hear from you!</p>

            </div>
            <div className="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-12 pt-1">
              <div className="contact-form contact-page-form parsley-validate">
                <form id="contactForm" action="#">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 text-center">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control body-bold m-3"
                          placeholder="First name"
                          name="Fname"
                          id="Fname"
                          required
                          style={{ fontSize: '18px' }}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control body-bold m-3"
                          placeholder="Last name"
                          name="Lname"
                          id="Lname"
                          required
                          style={{ fontSize: '18px' }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-12 text-center">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control body-bold m-3"
                          placeholder="Email Address"
                          name="email"
                          id="email"
                          required
                          style={{ fontSize: '18px' }}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          name="phone"
                          type="tel"
                          className="form-control body-bold m-3"
                          placeholder="Phone Number"
                          id="phone"
                          required
                          style={{ fontSize: '18px' }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
                      <div className="form-group">
                        <textarea
                          className="form-control body-bold m-3"
                          placeholder="Type your message here..."
                          rows={4}
                          name="message"
                          id="comment"
                          style={{ fontSize: '18px' }}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="banner-links" style={{ display: 'flex', justifyContent: 'center' }}>
                    <button
                      type="submit"
                      className="btn-style btn-1 btn-contact"
                      id="Btn_one"
                      style={{backgroundColor:'rgb(85, 191, 252)'}}
                    >
                      Submit <FaArrowRight />
                    </button>
                  </div>
                  
                  <div className="">
                    <div
                      id="status"
                      style={{
                        padding: "20px",
                        color: "green",
                        fontWeight: 600,
                      }}
                    ></div>
                  </div>
                </form>
              </div>
            </div>

          </div>


          <div className="row contact-row"  id="contact-container-box" >
            <div className="col-xl-4 col-lg-4 col-md-12 col-12 text-lg-left text-center">
              <FaEnvelope className="text-danger display-6" />
              <p className="body-bold-2-contact py-3"><a href="mailto:Support@guhan.in" className="body-bold-2-contact">Support@guhan.in</a></p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-12 text-lg-center text-center">
              <FaMapMarkerAlt className="text-warning display-6" />
              <p className="body-bold-2-contact py-3">158, G Block, 1st Main Rood,<br />
                Anna Nagar, Chennai, Tamil<br />
                Nadu, Post Code, 600102</p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-12 text-lg-right text-center">
              <FaWhatsapp className="text-success display-6" />
              <p className="body-bold-2 pt-3"><a href="tel:044 26633516" className="body-bold-2-contact">044 26633516</a> </p>
            </div>

          </div>

          
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Contactus;

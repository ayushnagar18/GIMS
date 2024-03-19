import React, { Fragment, useState } from "react";
import { Service } from "../utils";
import axios from "axios";

const Gallery = () => {
  const [data, setData] = useState<Service[]>([]);
  React.useEffect(() => {
    // var axios = require("axios");
    var config = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + "/service",
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
  const achievement =
    data &&
    data.filter((ser) => {
      return ser.servicetype === "Achievement";
    });
  console.log(achievement);
  return (
    <section className="industry-sec ">
      {achievement.length > 0 && (
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12 col-12 pb-5">
              <h2 className="txt-2">Our Gallery</h2>
              <hr className="bdr-btm" />
            </div>
          </div>
          <div className="container">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="false"
            >
              <div className="carousel-indicators">
                {achievement &&
                  achievement.map((ach, ind) => (
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to={ind}
                      className={ind === 0 ? "active" : ""}
                      aria-current={ind === 0 ? "true" : "false"}
                      aria-label={`Slide ${ind}`}
                    />
                  ))}
              </div>
              <div className="carousel-inner">
                {achievement &&
                  achievement.map((ach, ind) => (
                    <div
                      className={
                        ind == 0 ? "carousel-item active" : "carousel-item"
                      }
                    >
                      <div className="row justify-content-center">
                        <img
                          src={`${process.env.REACT_APP_BACKEND_URL}/services/${ach.imglocation}`}
                          className="d-block w-50 pb-4"
                          alt="..."
                          height={"400px"}
                        />
                      </div>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{ach.name}</h5>
                      </div>
                    </div>
                  ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

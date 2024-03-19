import React, { Fragment, useContext, useEffect, useState } from "react";
import AddService from "./AddService";
import { applications, requirements } from "../utils";
import Moment from "moment";
import { FaArrowRight } from "react-icons/fa";
import AddCareer from "./AddCareer";
import { Usercontext } from "../utils/Context";
import axios from "axios";

const CareerAdmin = () => {
  const [data, setData] = useState<applications[]>();
  const { auth } = useContext(Usercontext);

  useEffect(() => {
    // var axios = require("axios");

    var config = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + "/application",
      headers: {
        authorization: auth?.token,
      },
    };

    axios(config)
      .then(function (response: any) {
        setData(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);

  return (
    <section className="tab-sec pt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            {/* <!-- Nav Tabs --> */}
            <div className="tab-main">
              <div className="wrap-tab">
                <nav>
                  <div
                    className="nav nav-tabs nav-justified px-5"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="nav-menu1c-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-menu1c"
                      type="button"
                      role="tab"
                      aria-controls="nav-menu1c"
                      aria-selected="true"
                    >
                      <p className="body-sm">Add Career</p>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-menu2c-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-menu2c"
                      type="button"
                      role="tab"
                      aria-controls="nav-menu2c"
                      aria-selected="false"
                    >
                      <p className="body-sm">Applications</p>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="container tab-pane fade show active"
                id="nav-menu1c"
                role="tabpanel"
                aria-labelledby="nav-menu1c-tab"
                tabIndex={0}
              >
                <div className="row justify-content-center p-3" style={{marginTop:'0'}}>
                  {/* <h3 className="mt-4">Add Career</h3> */}
                  <AddCareer />
                </div>
              </div>
              <div
                className="container tab-pane fade"
                id="nav-menu2c"
                role="tabpanel"
                aria-labelledby="nav-menu2c-tab"
                tabIndex={0}
              >
                <div className="row justify-content-center m-2 p-2">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">SI.NO</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Career Title</th>
                        <th scope="col">Career Domain</th>
                        <th scope="col">Resume</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((application, ind) => (
                        <tr key={application.id}>
                          <th scope="row">{ind + 1}</th>
                          <td>{application.name}</td>
                          <td>{application.email}</td>
                          <td>{application.mobile}</td>
                          <td>{application.careertitle}</td>
                          <td>{application.careerdomain}</td>
                          <td>
                            <a
                              href={
                                process.env.REACT_APP_BACKEND_URL +
                                `/applications/${application.resumelocation}`
                              }
                            >
                              Click Here
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerAdmin;

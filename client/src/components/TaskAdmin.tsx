import React, { Fragment, useContext, useEffect, useState } from "react";
import AddService from "./AddService";
import { User, requirements } from "../utils";
import Moment from "moment";
import { FaArrowRight } from "react-icons/fa";
import { Usercontext } from "../utils/Context";
import AddTimesheet from "./AddTimesheet";
import axios from "axios";

const TaskAdmin = () => {
  const [data, setData] = useState<requirements[]>();
  const { auth } = useContext(Usercontext);
  const [users, setUsers] = useState<User[]>([]);
  const [assign, setAssign] = useState("");
  const [requirement, setRequriement] = useState("");

  useEffect(() => {
    

    var config = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + `/tasks/${auth?.user?.userid}`,
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
                      id="nav-menu1tt-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-menu1tt"
                      type="button"
                      role="tab"
                      aria-controls="nav-menu1tt"
                      aria-selected="true"
                    >
                      <p className="body-sm">My Tasks</p>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-menu2tt-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-menu2tt"
                      type="button"
                      role="tab"
                      aria-controls="nav-menu2tt"
                      aria-selected="false"
                    >
                      <p className="body-sm">Upload Timesheet</p>
                    </button>
                    {/* <button
                      className="nav-link"
                      id="nav-menu3-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-menu3"
                      type="button"
                      role="tab"
                      aria-controls="nav-menu3"
                      aria-selected="false"
                    >
                      <p className="body-sm">Services</p>
                    </button>
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
                      <p className="body-sm">Manufacturing Solutions</p>
                    </button> */}
                  </div>
                </nav>
              </div>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="container tab-pane fade show active"
                id="nav-menu1tt"
                role="tabpanel"
                aria-labelledby="nav-menu1tt-tab"
                tabIndex={0}
              >
                <Fragment>
                  <div className="row justify-content-center m-2 p-2">
                    <h4>
                      Pending Tasks :{" "}
                      <span className="badge bg-danger">
                        {data &&
                          data.filter((req: requirements) => {
                            return req.status === "PENDING";
                          }).length}
                      </span>
                    </h4>
                    {data &&
                      data
                        .filter((req: requirements) => {
                          return req.status === "PENDING";
                        })
                        .map((req: requirements) => (
                          <Fragment>
                            <div className="col-xl-4 col-lg-12 col-md-12 col-12 mt-2">
                              <div className="card text-center">
                                <div className="card-header bg-warning">
                                  <h5>
                                    <b>{req.companyname}</b>
                                  </h5>
                                </div>
                                <div className="card-body">
                                  <h5 className="card-title">
                                    {req.fieldofservice}
                                  </h5>
                                  <p className="card-text">
                                    {req.requirements}
                                  </p>
                                  <a
                                    className="text-primary"
                                    href={`/requirement/${req.id}`}
                                  >
                                    <b>
                                      Show More <FaArrowRight />
                                    </b>
                                  </a>
                                </div>
                                <div className="card-footer text-muted">
                                  <h5>
                                    <span className="badge rounded-pill bg-primary">
                                      {Moment(req.date).format("DD-MM-YYYY")}
                                    </span>
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </Fragment>
                        ))}
                  </div>
                  <div className="row justify-content-center m-2 p-2">
                    <h4>
                      Completed Tasks :{" "}
                      <span className="badge bg-primary">
                        {data &&
                          data.filter((req: requirements) => {
                            return req.status !== "PENDING";
                          }).length}
                      </span>
                    </h4>
                    {data &&
                      data
                        .filter((req: requirements) => {
                          return req.status !== "PENDING";
                        })
                        .map((req: requirements) => (
                          <Fragment>
                            <div className="col-xl-4 col-lg-12 col-md-12 col-12 mt-2">
                              <div className="card text-center">
                                <div className="card-header bg-warning">
                                  <h5>
                                    <b>{req.companyname}</b>
                                  </h5>
                                </div>
                                <div className="card-body">
                                  <h5 className="card-title">
                                    {req.fieldofservice}
                                  </h5>
                                  <p className="card-text">
                                    {req.requirements}
                                  </p>
                                  <a
                                    className="text-primary"
                                    href={`/requirement/${req.id}`}
                                  >
                                    <b>
                                      Show More <FaArrowRight />
                                    </b>
                                  </a>
                                </div>
                                <div className="card-footer text-muted">
                                  <h5>
                                    <span className="badge rounded-pill bg-primary">
                                      {Moment(req.date).format("DD-MM-YYYY")}
                                    </span>
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </Fragment>
                        ))}
                  </div>
                </Fragment>
              </div>
              <div
                className="container tab-pane fade"
                id="nav-menu2tt"
                role="tabpanel"
                aria-labelledby="nav-menu2tt-tab"
                tabIndex={0}
              >
                <Fragment>
                  <div className="row justify-content-center p-3" style={{marginTop:'0'}}>
                    <h3 className="mt-4" style={{textAlign:'center',fontSize:'28px',fontFamily:'roboto',marginBottom:'1rem',marginTop:'0'}}>Upload TimeSheet</h3>
                    <AddTimesheet />
                  </div>
                </Fragment>
              </div>
              {/* <div
                className="container tab-pane fade"
                id="nav-menu3"
                role="tabpanel"
                aria-labelledby="nav-menu3-tab"
                tabIndex={0}
              >
                <div className="row justify-content-center"></div>
              </div>
              <div
                className="container tab-pane fade"
                id="nav-menu4"
                role="tabpanel"
                aria-labelledby="nav-menu4-tab"
                tabIndex={0}
              >
                <div className="row justify-content-center"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaskAdmin;

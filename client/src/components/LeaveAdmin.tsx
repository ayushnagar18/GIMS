import React, { Fragment, useEffect, useState, useContext } from "react";
import AddService from "./AddService";
import { Leave, requirements } from "../utils";
import Moment from "moment";
import { FaArrowRight, FaTrash } from "react-icons/fa";
import ApplyLeave from "./ApplyLeave";
import { Usercontext } from "../utils/Context";
import axios from "axios";
// var axios = require("axios");

const LeaveAdmin = () => {
  const [data, setData] = useState<Leave[]>([]);
  const [datas, setDatas] = useState<Leave[]>([]);
  const { auth } = useContext(Usercontext);
  const handledelete = (id: any) => {
    

    var config = {
      method: "delete",
      url: `${process.env.REACT_APP_BACKEND_URL}/leave/${id}`,
      headers: {
        authorization: auth?.token,
      },
    };

    axios(config)
      .then(function (response: any) {
        alert(JSON.stringify(response.data));
        window.location.reload();
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
  useEffect(() => {
    console.log(auth?.user?.userid)
    console.log(auth?.token)
    var config = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + `/leave/${auth?.user?.userid}`,
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
    var config2 = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + "/leaves",
      headers: {
        authorization: auth?.token,
      },
    };

    axios(config2)
      .then(function (response: any) {
        setDatas(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);

  const handleClick = (e: any, id: any) => {
    var status = e.target.id;
    var qs = require("qs");
    var data = qs.stringify({
      id,
      status,
    });
    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/approveleave",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        authorization: auth?.token,
      },
      data: data,
    };

    axios(config)
      .then(function (response: any) {
        alert(JSON.stringify(response.data));
        window.location.reload();
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
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
                      id="nav-menu1l-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-menu1l"
                      type="button"
                      role="tab"
                      aria-controls="nav-menu1l"
                      aria-selected="true"
                    >
                      <p className="body-sm">Apply For leave</p>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-menu2l-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-menu2l"
                      type="button"
                      role="tab"
                      aria-controls="nav-menu2l"
                      aria-selected="false"
                    >
                      <p className="body-sm">Applied Leaves</p>
                    </button>
                    {auth?.user?.role === "ADMIN" && (
                      <button
                        className="nav-link"
                        id="nav-menu3l-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-menu3l"
                        type="button"
                        role="tab"
                        aria-controls="nav-menu3l"
                        aria-selected="false"
                      >
                        <p className="body-sm">Approve Leaves</p>
                      </button>
                    )}
                  </div>
                </nav>
              </div>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="container tab-pane fade show active"
                id="nav-menu1l"
                role="tabpanel"
                aria-labelledby="nav-menu1l-tab"
                tabIndex={0}
              >
                <div className="row justify-content-center p-3" style={{marginTop:'0'}}>
                  <ApplyLeave />
                </div>
              </div>
              <div
                className="container tab-pane fade"
                id="nav-menu2l"
                role="tabpanel"
                aria-labelledby="nav-menu2l-tab"
                tabIndex={0}
              >
                <div className="row justify-content-center m-2 p-2">
                  <div className="container">
                    <table className="table table-striped table-hover table-striped-columns m-2">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">No of Days</th>
                            <th scope="col">Purpose of Leave</th>
                            <th scope="col">Applied On</th>
                            <th scope="col text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((time, ind) => {
                            return (
                              <tr key={time.id}>
                                <th scope="row">{ind + 1}</th>
                                <td>
                                  {" "}
                                  {Moment(time.startdate).format("DD-MM-YYYY")}
                                </td>
                                <td>
                                  {" "}
                                  {Moment(time.enddate).format("DD-MM-YYYY")}
                                </td>{" "}
                                <td>{time.noofdays}</td>
                                <td>{time.reason}</td>
                                <td>
                                  {" "}
                                  {Moment(time.updatedon).format("DD-MM-YYYY")}
                                </td>
                                <td>
                                  <span
                                    className={
                                      time.isapproved === "PENDING"
                                        ? "badge rounded-pill text-bg-warning"
                                        : time.isapproved == "APPROVED"
                                        ? "badge rounded-pill text-bg-success"
                                        : "badge rounded-pill text-bg-danger"
                                    }
                                  >
                                    {time.isapproved}
                                  </span>
                                </td>
                                <td>
                                  {auth && auth.user?.role && (
                                    <button
                                      className="btn btn-danger mx-2"
                                      onClick={() => handledelete(time.id)}
                                    >
                                      <FaTrash />
                                    </button>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </table>
                  </div>
                </div>
              </div>
              {auth?.user?.role === "ADMIN" && (
                <div
                  className="container tab-pane fade"
                  id="nav-menu3l"
                  role="tabpanel"
                  aria-labelledby="nav-menu3l-tab"
                  tabIndex={0}
                >
                  <div className="row justify-content-center m-2 p-2">
                    <div className="container">
                      <table className="table table-striped table-hover table-striped-columns m-2">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Start Date</th>
                              <th scope="col">End Date</th>
                              <th scope="col">No of Days</th>
                              <th scope="col">Purpose of Leave</th>
                              <th scope="col">Applied On</th>
                            </tr>
                          </thead>
                          <tbody>
                            {datas.map((time, ind) => {
                              return (
                                <tr key={time.id}>
                                  <th scope="row">{ind + 1}</th>
                                  <td>
                                    {" "}
                                    {Moment(time.startdate).format(
                                      "DD-MM-YYYY"
                                    )}
                                  </td>
                                  <td>
                                    {" "}
                                    {Moment(time.enddate).format("DD-MM-YYYY")}
                                  </td>{" "}
                                  <td>{time.noofdays}</td>
                                  <td>{time.reason}</td>
                                  <td>
                                    {" "}
                                    {Moment(time.updatedon).format(
                                      "DD-MM-YYYY"
                                    )}
                                  </td>
                                  <td>
                                    {time.isapproved &&
                                      time.isapproved === "PENDING" && (
                                        <div className="row">
                                          <div className="col-6">
                                            <button
                                              className="btn btn-success"
                                              id="APPROVED"
                                              onClick={(e) =>
                                                handleClick(e, time.id)
                                              }
                                            >
                                              Approve
                                            </button>
                                          </div>
                                          <div className="col-6">
                                            <button
                                              className="btn btn-danger"
                                              id="REJECTED"
                                              onClick={(e) =>
                                                handleClick(e, time.id)
                                              }
                                            >
                                              Reject
                                            </button>
                                          </div>
                                        </div>
                                      )}
                                  </td>
                                  {time.isapproved != "PENDING" && (
                                    <td>
                                      <span
                                        className={
                                          time.isapproved == "APPROVED"
                                            ? "badge rounded-pill text-bg-success"
                                            : "badge rounded-pill text-bg-danger"
                                        }
                                      >
                                        {time.isapproved}
                                      </span>
                                    </td>
                                  )}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaveAdmin;

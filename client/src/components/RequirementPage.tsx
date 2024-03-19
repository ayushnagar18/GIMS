import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import "../styles/RequirementPage.css";
import { requirements } from "../utils";
import Moment from "moment";
import { Usercontext } from "../utils/Context";
import axios from "axios";

const RequirementPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<requirements>();
  const { auth } = useContext(Usercontext);
  const [email, setEmail] = useState("");
  const [remarks, setRemarks] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    // var axios = require("axios");

    var config = {
      method: "get",
      url: `${process.env.REACT_APP_BACKEND_URL}/requirement/${id}`,
      headers: {
        authorization: auth?.token,
      },
    };

    axios(config)
      .then(function (response: any) {
        setData(response.data);
        setEmail(response.data.email);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      email,
      remarks,
      link,
      id
    });
    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/completeTask",
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
  const handleClick = (e: any) => {
    e.preventDefault();
    // var axios = require("axios");
    var qs = require("qs");
    var rdata = qs.stringify({
      status: "InProgress",
      requirementId: data?.id,
    });
    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/updatestatus",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        authorization: auth?.token,
      },
      data: rdata,
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
    <Fragment>
      <NavBar />
      <section className="banner-req">
        <div className="container">
          <h2 className="mt-3 text-center">Requirement Details</h2>
          <table className="table table-striped table-hover table-striped-columns m-2 border border-secondary">
            <tbody>
              <tr>
                <th scope="row">Company Name : </th>
                <td>{data?.companyname}</td>
              </tr>
              <tr>
                <th scope="row">Area Of Service : </th>
                <td>{data?.fieldofservice}</td>
              </tr>
              <tr>
                <th colSpan={2} className="text-center">
                  Requirement{" "}
                </th>
              </tr>
              <tr>
                <td colSpan={2} className="text-center">
                  {data?.requirements}{" "}
                </td>
              </tr>
              <tr>
                <th scope="row">Relevent Files: </th>
                <td>
                  <a
                    href={`${process.env.REACT_APP_BACKEND_URL}/requirements/${data?.filelocation}`}
                    target="_blank"
                  >
                    CLick Here
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">Submitted Date : </th>
                <td>
                  {" "}
                  <h5>
                    <span className="badge rounded-pill bg-primary">
                      {Moment(data?.date).format("DD-MM-YYYY")}
                    </span>
                  </h5>
                </td>
              </tr>
              <tr>
                <th scope="row">Task Status : </th>
                <td>
                  <h5>
                    <span
                      className={
                        data?.status === "PENDING"
                          ? "badge rounded-pill bg-danger mx-2"
                          : "badge rounded-pill bg-success mx-2"
                      }
                    >
                      {data?.status}
                    </span>
                    {data?.completedby ? (
                      <span className="badge rounded-pill bg-warning">
                        ASSIGNED
                      </span>
                    ) : (
                      <span className="badge rounded-pill bg-secondary mx-2">
                        NOT ASSIGNED
                      </span>
                    )}
                    {data &&
                      data.status === "PENDING" &&
                      data.completedby === auth?.user?.userid && (
                        <span>
                          <button
                            className="btn btn-primary mx-2 btn-sm"
                            onClick={handleClick}
                          >
                            started working
                          </button>
                        </span>
                      )}
                  </h5>
                </td>
              </tr>
              <tr>
                <th colSpan={2} className="text-center">
                  Contact Person Details{" "}
                </th>
              </tr>
              <tr>
                <th scope="row">Name : </th>
                <td>{data?.name}</td>
              </tr>
              <tr>
                <th scope="row">Designation : </th>
                <td>{data?.designation}</td>
              </tr>
              <tr>
                <th scope="row">Mobile Number: </th>
                <td>{data?.mobile}</td>
              </tr>
              <tr>
                <th scope="row">Email : </th>
                <td>{data?.email}</td>
              </tr>
              <tr>
                <th scope="row">Address : </th>
                <td>{data?.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        {data?.completedby === auth?.user?.userid && data?.status !== "COMPLETED" && (
          <div className="container">
            <h2 className="mt-3 text-center">Complete Task</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <textarea
                className="form-control"
                value={remarks}
                rows={5}
                placeholder="Remarks"
                onChange={(e) => {
                  setRemarks(e.target.value);
                }}
              />
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="Drive link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <br />
              <button className="btn btn-primary" type="submit">
                Complete Task
              </button>
              <br />
            </form>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default RequirementPage;

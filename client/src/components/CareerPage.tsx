import React, { Fragment, useEffect, useState, useContext } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import "../styles/Careers.css";
import { Product, career, faq, image } from "../utils";
import { Usercontext } from "../utils/Context";
import Moment from "moment";
import axios from "axios";
interface Resumeform {
  name?: string;
  email?: string;
  mobile?: string;
}
const CareerPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<career>();
  const { auth } = useContext(Usercontext);
  const [formData, setFormData] = useState<Resumeform>({
    name: "",
    email: "",
    mobile: "",
  });
  const [file, setFile] = useState<File>();
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

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (
    e: any,
    id: any,
    careertitle: any,
    careerdomain: any
  ) => {
    e.preventDefault();
    // var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("name", formData.name);
    data.append("careerId", id);
    data.append("email", formData.email);
    data.append("mobilenumber", formData.mobile);
    data.append("careertitle", careertitle);
    data.append("careerdomain", careerdomain);
    data.append("resume", file);

    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/uploadresume",
      data: data,
    };

    axios(config)
      .then(function (response: any) {
        alert(JSON.stringify(response.data.message));
        window.location.reload();
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  useEffect(() => {
    // var axios = require("axios");

    var config = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + `/career/${id}`,
      headers: {},
    };

    axios(config)
      .then(function (response: any) {
        setData(response.data[0]);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <div className="container careerPage">
        <h1 className="mt-2">{data?.title}</h1>
        <table className="table table-striped table-hover table-striped-columns m-2 border border-secondary">
          <tbody>
            <tr>
              <th scope="row" colSpan={2} className="text-center">
                Job Description :{" "}
              </th>
            </tr>
            <tr>
              <td colSpan={2} className="text-center">
                {data?.description}
              </td>
            </tr>
            <tr>
              <th scope="row"> Job - Type: </th>
              <td className="mx-2">{data?.type}</td>
            </tr>
            <tr>
              <th scope="row">Experience: </th>
              <td className="mx-2">{data?.experience}</td>
            </tr>
            <tr>
              <th scope="row">Job Location : </th>
              <td className="mx-2">{data?.location}</td>
            </tr>
            <tr>
              <th scope="row">Skills : </th>
              <td className="mx-2">
                {data?.skills
                  ?.split("@#$@ ")
                  .map((skill: string) => skill && <p>- {skill}</p>)}
              </td>
            </tr>
            <tr>
              <th scope="row">No Of Openings : </th>
              <td className="mx-2">{data?.noofopenings}</td>
            </tr>
            <tr>
              <th scope="row">Total Registrations : </th>
              <td className="mx-2">{data?.totalregistrants}</td>
            </tr>
            <tr>
              <th scope="row">Posted on: </th>
              <td className="mx-2">
                {" "}
                {Moment(data?.postedon).format("DD-MM-YYYY")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row justify-content-center">
        <form
          onSubmit={(e) => handleSubmit(e, data?.id, data?.title, data?.domain)}
          className="col-xl-6 col-lg-6 col-md-12 col-12 bg-light"
        >
            <h3 className="text-center mt-2">Are you fit for this role ?</h3>
          <div className="my-1 col-xl-12 col-lg-12 col-md-12 col-12">
            <label htmlFor="title" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              aria-describedby="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-1 col-xl-12 col-lg-12 col-md-12 col-12">
            <label htmlFor="title" className="form-label">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="form-control"
              id="email"
              aria-describedby="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-1 col-xl-12 col-lg-12 col-md-12 col-12">
            <label htmlFor="title" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobile"
              className="form-control"
              id="mobile"
              aria-describedby="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12 my-1">
            <label className="form-label">Resume</label>
            <input
              type="file"
              className="form-control"
              name="file"
              onChange={(e: any) => {
                setFile(e.target.files[0]);
              }}
              required
            />
          </div>
          <div className="row justify-content-center">
            <button
              type="submit"
              className="btn btn-primary my-3 col-xl-6 col-lg-6 col-md-6 col-6"
            >
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default CareerPage;

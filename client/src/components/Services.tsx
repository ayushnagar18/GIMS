import React, { Fragment, useContext, useState } from "react";
import NavBar from "./NavBar";
import "../styles/Services.css";
import dummy from "../assets/services/dummy.png";
import Footer from "./Footer";
import { Service } from "../utils";
import { Usercontext } from "../utils/Context";
import { FaTrash } from "react-icons/fa";
import SubmitRequirement from "./SubmitRequirement";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface FormData {
  name: string;
  designation: string;
  email: string;
  companyName: string;
  address: string;
  mobileNumber: string;
  fieldOfService: string;
  requirements: string;
  file: File | Blob;
}
const Services = () => {
  const [data, setData] = useState<Service[]>([]);
  const { auth } = useContext(Usercontext);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    designation: "",
    companyName: "",
    address: "",
    mobileNumber: "",
    fieldOfService: "",
    requirements: "",
    file: new File([""], ""),
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      
    });
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.files &&
      setFormData({
        ...formData,
        file: event.target.files[0],
      });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("name", formData.name);
    data.append("designation", formData.designation);
    data.append("companyname", formData.companyName);
    data.append("mobile", formData.mobileNumber);
    data.append("address", formData.address);
    data.append("fieldofservice", formData.fieldOfService);
    data.append("requirements", formData.requirements);
    data.append("requirement", formData.file);

    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/addrequirement",
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
  const handledelete = (id: any) => {
    var axios = require("axios");

    var config = {
      method: "delete",
      url: `${process.env.REACT_APP_BACKEND_URL}/service/${id}`,
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
  const rnd =
    data &&
    data.filter((ser) => {
      return ser.servicetype === "R&D";
    });
  const ma =
    data &&
    data.filter((ser) => {
      return ser.servicetype === "Manufacturing and automation";
    });
  const design =
    data &&
    data.filter((ser) => {
      return ser.servicetype === "Design";
    });
  const printing =
    data &&
    data.filter((ser) =>{
      return ser.servicetype==="3D Printing";
    });
  const navigate = useNavigate();
  return (
    <Fragment>
      <NavBar />
      <section className="services-bgimg">
        <section className="bannerser-sec" >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12 text-center">
                <h2 className="txt pb-3" style={{ fontFamily: 'poppins', color: 'white' }}>Services and support</h2>
                <p className="txt-2" style={{ color: 'rgb(197 197 197)' }}>
                  We provide world-class services and support

                  with our wide-spread expertise in various fields
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="industry-sec pb-5 px-md-5 services-and-support" >
          <div className="container-fluid">
            <div className="row">
              {/* <!-- R&D --> */}
              {rnd && rnd.length > 0 && (
              <Fragment>
                <div className="col-xl-12 col-lg-12 col-md-12 col-12 pt-5 pb-5">
                  <h2 className="txt-ser" >R&D</h2>
                </div>
                {rnd.map((ser) => {
                return (
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-12 pb-4"
                  key={ser.id}
                >
                  <div
                    className="card card-full-service"
                    data-toggle="modal"
                    data-target="#myModal"
                    style={{ backgroundColor: '#f7f4ff' }}
                  >
                    <img
                      className="card-img-top card-services"
                    src={`${process.env.REACT_APP_BACKEND_URL}/services/${ser.imglocation}`}
                    />
                    <div className="card-body  row justify-content-center" >
                      <p className="txt-3-dp text-center">{ser.name}</p>
                      
                      <p className="txt-2">₹ {ser?.price}/hour</p>
                      
                      <div className="row justify-content-center">
                        {auth && auth.user?.role === "ADMIN" && (
                          <button
                            className="btn btn-danger col-4 m-2"
                          onClick={() => handledelete(ser.id)}
                          >
                            <FaTrash />
                          </button>
                        )}
                      </div>
                      
                      <div className="col-12 text-center pt-2" >
                        <div>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm btn-services"
                            
                          onClick={() =>
                            navigate(`/submitrequirement/${ser.id}`,{state:{from:'services'}})
                          }
                          >
                            Submit Requirement
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                );
                 })} 
                </Fragment>
                )} 
              

              {/* <!-- Manufacturing and automation --> */}
              {ma && ma.length > 0 && (
              <Fragment>
                <div className="col-xl-12 col-lg-12 col-md-12 col-12 pb-5 pt-3">
                  <h2 className="txt-ser" >Manufacturing and automation</h2>
                </div>
                {ma.map((ser) => {
                return (
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-12 pb-4"
                  key={ser.id}
                >
                  <div
                    className="card card-full-service"
                    data-toggle="modal"
                    data-target="#myModal"
                    style={{ backgroundColor: '#f7f4ff' }}
                  >
                    <img
                      className="card-img-top card-services"
                    src={`${process.env.REACT_APP_BACKEND_URL}/services/${ser.imglocation}`}
                    />
                    <div className="card-body row justify-content-center">
                      <p className="txt-3-dp text-center">{ser.name}</p>
                      <p className="txt-2">₹ {ser.price}/hour</p>
                      <div className="row justify-content-center">
                        {auth && auth.user?.role === "ADMIN" && (
                          <button
                            className="btn btn-danger col-4 m-2"
                            onClick={() => handledelete(ser.id)}
                          >
                            <FaTrash />
                          </button>
                        )}
                      </div>
                      <div className="col-12 text-center pt-2">
                        <div>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm btn-services"
                            style={{}}
                          onClick={() =>
                            navigate(`/submitrequirement/${ser.id}`,{state:{from:'services'}})
                          }
                          >
                            Submit Requirement
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                );
                 })} 
              </Fragment>
               )} 

              {/* <!-- Design --> */}
              {design && design.length > 0 && (
              <Fragment>
                <div className="col-xl-12 col-lg-12 col-md-12 col-12 pb-5 pt-3">
                  <h2 className="txt-ser" >Design</h2>
                </div>
                {design.map((ser) => {
                return (
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-12 pb-4"
                key={ser.id}
                >
                  <div
                    className="card card-full-service"
                    data-toggle="modal"
                    data-target="#myModal"
                    style={{ backgroundColor: '#f7f4ff' }}
                  >
                    <img
                      className="card-img-top card-services"
                    src={`${process.env.REACT_APP_BACKEND_URL}/services/${ser.imglocation}`}
                    />
                    <div className="card-body row justify-content-center">
                      <p className="txt-3-dp text-center">{ser.name}</p>
                      <p className="txt-2">₹ {ser.price}/hour</p>
                      <div className="row justify-content-center">
                        {auth && auth.user?.role === "ADMIN" && (
                          <button
                            className="btn btn-danger col-4 m-2"
                          onClick={() => handledelete(ser.id)}
                          >
                            <FaTrash />
                          </button>
                        )}
                      </div>
                      <div className="col-12 text-center pt-2">
                        <div>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm btn-services"
                            
                          onClick={() =>
                            navigate(`/submitrequirement/${ser.id}`,{state:{from:'services'}})
                          }
                          >
                            Submit Requirement
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                );
              })}
              </Fragment>
              )} 
            </div>
          </div>

          {/* <!-- 3D Printing --> */}

          {printing && printing.length > 0 && (
          <Fragment>
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 pb-5 pt-3">
              <h2 className=" txt-ser" >3D Printing</h2>
            </div>
            {printing.map((ser) => {
            return (
            <div
              className="col-xl-3 col-lg-6 col-md-6 col-12 pb-4"
              key={ser.id}
            >
              <div
                className="card card-full-service"
                data-toggle="modal"
                data-target="#myModal"
                style={{ backgroundColor: '#f7f4ff' }}
              >
                <img
                  className="card-img-top card-services"
                src={`${process.env.REACT_APP_BACKEND_URL}/services/${ser.imglocation}`}
                />
                <div className="card-body row justify-content-center">
                  <p className="txt-3-dp text-center">{ser.name}</p>
                  <p className="txt-2">₹ {ser.price}/hour</p>
                  <div className="row justify-content-center">
                    {auth && auth.user?.role === "ADMIN" && (
                      <button
                        className="btn btn-danger col-4 m-2"
                      onClick={() => handledelete(ser.id)}
                      >
                        <FaTrash />
                      </button>
                    )}
                  </div>
                  <div className="col-12 text-center pt-2">
                    <div>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm btn-services"
                        style={{}}
                      onClick={() =>
                        navigate(`/submitrequirement/${ser.id}`,{state:{from:'services'}})
                      }
                      >
                        Submit Requirement
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
             })} 
          </Fragment>
          )} 
        </section>


        <section className="industry-sec  px-5" style={{ background: '#fffbec' }} >
          <div className="container">
            <div className="row" >
              <div className="col-xl-6 col-lg-6 col-md-12 col-12 pb-4">
                <h2 className="txt-3" >
                  Have a project you think we could work our magic in?
                </h2>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12 pb-5">
                <div className="banner-links">
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary btn-transition"
                      onClick={() => navigate("/submitrequirement",{state:{from:'services'}})}


                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div>
          {/* <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Submit Requirements
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="modal-body">
                    <div className="mb-1">
                      <label htmlFor="name" className="form-label">
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
                      />
                    </div>
                    <div className="mb-1">
                      <label htmlFor="cname" className="form-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="companyName"
                        aria-describedby="cname"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-1">
                      <label htmlFor="designation" className="form-label">
                        Designation
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="designation"
                        aria-describedby="designation"
                        value={formData.designation}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-1">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        aria-describedby="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-1">
                      <label htmlFor="number" className="form-label">
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="mobileNumber"
                        aria-describedby="mobile"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-1">
                      <label htmlFor="name" className="form-label">
                        Address
                      </label>
                      <input
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-1">
                      <label htmlFor="field" className="form-label">
                        Field of Service
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="fieldOfService"
                        aria-describedby="mobile"
                        value={formData.fieldOfService}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-1">
                      <label htmlFor="Requirements" className="form-label">
                        Requirements
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="requirements"
                        aria-describedby="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-1">
                      <label htmlFor="field" className="form-label">
                        Any relevant documents
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div> */}
        </div>

      </section>
      <Footer />
    </Fragment>
  );
};

export default Services;

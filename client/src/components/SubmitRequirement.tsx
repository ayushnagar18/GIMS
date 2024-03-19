import React, { Fragment, useEffect, useState } from "react";
import NavBar from "./NavBar";
import "../styles/RequirementPage.css";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
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
  hours: string;
  price: string;
  file: File | Blob;
}

const SubmitRequirement = () => {
  const { id } = useParams();
  const location = useLocation();
  const { from } = location.state || {};
  const [hide, setHide] = useState(true)
  useEffect(() => {
    console.log(from)
    if (from && from === "services") {
      setHide(false);
    }
  }, [from]);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    designation: "",
    companyName: "",
    address: "",
    mobileNumber: "",
    fieldOfService: "",
    requirements: "",
    hours: "",
    price: "",
    file: new File([""], ""),
  });

  useEffect(() => {
    if (id) {
      // var axios = require("axios");
      var config = {
        method: "get",
        url: `${process.env.REACT_APP_BACKEND_URL}/service/${id}`,
      };

      axios(config)
        .then(function (response: any) {
          setFormData({
            ...formData,
            requirements: response.data[0].name,
            price: response.data[0].price
          });
        })
        .catch(function (error: any) {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    if (formData.hours) {
      const totalPrice = parseFloat(formData.hours) * parseFloat(formData.price);
      setFormData(prevState => ({
        ...prevState,
        price: totalPrice.toFixed(2)
      }));
    }
  }, [formData.hours]);

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
    data.append("email", formData.email);
    data.append("designation", formData.designation);
    data.append("companyname", formData.companyName);
    data.append("mobile", formData.mobileNumber);
    data.append("address", formData.address);
    data.append("fieldofservice", formData.fieldOfService);
    data.append("requirements", formData.requirements);
    data.append("hours", formData.hours)
    data.append("price", formData.price)
    
    data.append("requirement", formData.file);
    data.append("id", id);

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
  return (
    <Fragment>
      <NavBar />
      <div className="container banner-reqsubmit">
        <h1 className="text-center" id="exampleModalLabel">
          Submit Requirements
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="mb-1">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                className="form-control-requirement"
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
                placeholder="Enter Company's Name"
                className="form-control-requirement"
                name="companyName"
                aria-describedby="cname"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-1">
              <label htmlFor="designation" className="form-label">
                Designation
              </label>
              <input
                type="text"
                placeholder="Enter Your Designation"
                className="form-control-requirement"
                name="designation"
                aria-describedby="designation"
                value={formData.designation}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-1">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Mail-Id"
                className="form-control-requirement"
                name="email"
                aria-describedby="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-1">
              <label htmlFor="number" className="form-label">
                Mobile Number
              </label>
              <input
                placeholder="Enter Your Mobile Number"
                type="text"
                className="form-control-requirement"
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
                placeholder="Enter Your Address"
                className="form-control-requirement"
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
                placeholder="Service Required For Which Field"
                className="form-control-requirement"
                name="fieldOfService"
                aria-describedby="mobile"
                value={formData.fieldOfService}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-1">
              <label htmlFor="Requirements" className="form-label" aria-required>
                Requirements
              </label>
              <input
                type="text"
                placeholder="*Enter Your Requirements*"
                className="form-control-requirement"
                name="requirements"
                aria-describedby="requirements"
                value={formData.requirements}
                onChange={handleChange}
                required
              />
            </div>

            {!hide ?
              <div className="mb-1">
                <label htmlFor="hours" className="form-label" aria-required>
                  Number of Hours
                </label>
                <input
                  type="text"
                  className="form-control-requirement"
                  placeholder="Service Required For (in hrs)"
                  name="hours"
                  aria-describedby="hours"
                  value={formData.hours}
                  onChange={handleChange}
                />
              </div> :
              ''
            }

            {!hide ?
              <div className="mb-1">
                <label htmlFor="price" className="form-label" aria-required>
                  Price
                </label>
                <input
                  type="text"
                  className="form-control-requirement"
                  placeholder="Rs."
                  name="price"
                  aria-describedby="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div> :
              ''
            }


            <div className="mb-1">
              <label htmlFor="field" className="form-label">
                Any relevant documents
              </label>
              <input
                type="file"
                className="form-control-requirement"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SubmitRequirement;

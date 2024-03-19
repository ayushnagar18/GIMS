import React, { Fragment, useState, useContext } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { Product } from "../utils";
import { Usercontext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

interface spec {
  key?: string;
  value?: string;
}
const EditProduct = () => {
  const [data, setData] = React.useState([]);
  const { id } = useParams();
  const [name, setName] = useState<any>("");
  const [type, setType] = useState<any>("");
  const [description, setDescrip] = useState<any>("");
  const [techspec, setTechspec] = useState<any>("");
  const [spec, setSpec] = useState<any>([{ key: "", value: "" }]);
  const { auth } = useContext(Usercontext);
  const [serialno, setSerialno] = useState<any>(0);
  const [present, setPresent] = useState<any>(false);
  const [youtubeID, setYoutubeID] = useState<any>("");
  const navigate = useNavigate();

  React.useEffect(() => {
    // var axios = require("axios");
    var config = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + `/product/${id}`,
    };

    axios(config)
      .then(async function (response: any) {
        let pdata;
        pdata = await response.data[0];
        if (pdata) {
          setName(pdata.name);
          setType(pdata.type);
          let des = await pdata.description.split("###");
          setDescrip(des[0]);
          let vals = des.slice(1);
          let values: spec[] = [];
          vals.map((val: any) => {
            if (val) {
              let key, value;
              key = val.split(":")[0];
              value = val.split(":")[1];
              values.push({ key: key, value: value });
            }
          });
          setSpec(values);
          setTechspec(pdata.technicalspecs);
          setSerialno(pdata.serialno);
          setYoutubeID(pdata.youtubeid);
          setPresent(pdata.presentinhomepage);
        }
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);
  console.log(name, type);
  const handleSpecInput = ({
    ind,
    event,
  }: {
    ind: number;
    event: React.ChangeEvent<HTMLInputElement>;
  }) => {
    const values = [...spec];

    if (event.target.name === "key") {
      values[ind]["key"] = event.target.value;
    } else {
      values[ind]["value"] = event.target.value;
    }
    setSpec(values);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let des = "###";
    spec.map((sp: any) => {
      des += `${sp.key}:${sp.value} ###`;
    });
    // var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();

    e.preventDefault();
    // var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      id,
      name,
      type,
      description: description + des,
      technicalspecs: techspec,
      presentInHomePage: present,
      serialno,
      youtubeId: youtubeID,
    });
    var config = {
      method: "put",
      url: process.env.REACT_APP_BACKEND_URL + "/product",
      data: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        authorization: auth?.token,
      },
    };

    axios(config)
      .then(function (response: any) {
        alert(response.data.message);
        navigate("/admin");
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <div className="container">
        <h1 className="txt m-3 text-center">Edit Product</h1>
        <form
          className="mt-3"
          onSubmit={handleSubmit}
          // encType="multipart/form-data"
          // method="POST"
        >
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control-requirement"
                id="exampleInputEmail1"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Type
              </label>
              <select
                className="form-select"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option selected>select menu</option>
                <option value="Product Engineering">Product Engineering</option>
                <option value="Product Design">Product Design</option>
                <option value="Innovations">Innovations</option>
                <option value="Manufacturing Solutions">
                  Manufacturing Solutions
                </option>
              </select>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control-requirement"
                id="industryexperience"
                value={description}
                rows={5}
                onChange={(e) => {
                  setDescrip(e.target.value);
                }}
              />
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12 col-12">
                <label htmlFor="exampleInputEmail1" className="form-label-admin">
                  <h3 className="my-1">Specifications:</h3>
                </label>
              </div>
            </div>
            <div className="row justify-content-center">
              {spec.map((sp: any, ind: any) => {
                return (
                  <div
                    className="row justify-content-center"
                    key={"spec" + ind}
                  >
                    <div className="col-xl-4 col-lg-12 col-md-12 col-12 m-2">
                      <label htmlFor={"speckey" + ind} className="form-label">
                        Specification
                      </label>
                      <input
                        name="key"
                        type="text"
                        className="form-control-requirement"
                        id={"speckey" + ind}
                        value={sp.key}
                        onChange={(event) => handleSpecInput({ ind, event })}
                      />
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-12 col-12 m-2">
                      <label htmlFor={"specval" + ind} className="form-label">
                        Value
                      </label>
                      <input
                        name="value"
                        type="text"
                        className="form-control-requirement"
                        id={"specval" + ind}
                        value={sp.value}
                        onChange={(event) => handleSpecInput({ ind, event })}
                      />
                    </div>
                    {ind == spec.length - 1 ? (
                      <div className="row justify-content-center">
                        <div className="col-xl-2 col-lg-12 col-md-12 col-12 m-2">
                          <button
                            className="btn btn-success form-control"
                            onClick={() =>
                              setSpec([...spec, { key: "", value: "" }])
                            }
                          >
                            Add Specification
                          </button>
                        </div>
                        <div className="col-xl-2 col-lg-12 col-md-12 col-12 m-2">
                          <button
                            className={
                              ind === 0
                                ? "btn btn-danger form-control disabled"
                                : "btn btn-danger form-control"
                            }
                            onClick={() => {
                              const values = [...spec];
                              values.splice(ind, 1);
                              setSpec(values);
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div className="row justify-content-center align-content-center">
              <div className="col-xl-4 col-lg-12 col-md-12 col-12">
                <label htmlFor="techspec" className="form-label">
                  Technical Specification
                </label>
                <input
                  type="text"
                  className="form-control-requirement"
                  id="techspec"
                  value={techspec}
                  onChange={(e) => {
                    setTechspec(e.target.value);
                  }}
                />
              </div>
              <div className="col-xl-4 col-lg-12 col-md-12 col-12">
                <label htmlFor="serialno" className="form-label">
                  Serial No
                </label>
                <input
                  type="number"
                  className="form-control-requirement"
                  id="serialno"
                  value={serialno}
                  onChange={(e) => {
                    setSerialno(parseInt(e.target.value));
                  }}
                />
              </div>
              <div className="col-xl-4 col-lg-12 col-md-12 col-12">
                <label htmlFor="serialno" className="form-label">
                  Youtube Id
                </label>
                <input
                  type="text"
                  className="form-control-requirement"
                  id="youtubeID"
                  value={youtubeID}
                  onChange={(e) => {
                    setYoutubeID(e.target.value);
                  }}
                />
              </div>
              <div className="col-xl-4 col-lg-12 col-md-12 col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue={present}
                    id="flexCheckDefault"
                    checked={present}
                    onChange={(e) => {
                      setPresent(e.target.checked)
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Display In Homepage
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{display:'flex',justifyContent:'center'}}>
            <button type="submit" className="btn btn-primary mt-3 mb-3" style={{width:'150px'}}>
              Submit
            </button>

          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default EditProduct;

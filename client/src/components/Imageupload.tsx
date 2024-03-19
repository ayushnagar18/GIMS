import React, { Fragment, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { Usercontext } from "../utils/Context";
import axios from "axios";

const Imageupload = () => {
  const { id } = useParams();
  const [faq, setFaq] = useState([{ key: "", value: "" }]);
  const [file, setFile] = useState<File[]>([new File([""], "")]);
  const { auth } = useContext(Usercontext);
  const handleSpecInput = ({
    ind,
    event,
  }: {
    ind: number;
    event: React.ChangeEvent<HTMLInputElement>;
  }) => {
    const values = [...faq];

    if (event.target.name === "key") {
      values[ind]["key"] = event.target.value;
    } else {
      values[ind]["value"] = event.target.value;
    }
    setFaq(values);
  };
  const handleImgInput = ({ ind, event }: { ind: number; event: any }) => {
    const values = [...file];

    values[ind] = event.target.files[0];

    setFile(values);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // var axios = require("axios");
    var qs = require("qs");
    await faq.map(async (faq) => {
      var data = qs.stringify({
        question: faq.key,
        answer: faq.value,
        productId: id,
      });
      var config = {
        method: "post",
        url: process.env.REACT_APP_BACKEND_URL + "/upload/faq",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          authorization: auth?.token,
        },
        data: data,
      };

      await axios(config)
        .then(function (response: any) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error: any) {
          console.log(error);
        });
    });
    // window.location.reload();
  };

  const handleSubmit2 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("productId", id);
    file.map((file) => {
      data.append("uploadedImg", file);
    });
    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/upload/image",
      data: data,
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
    console.log(data);
  };
  return (
    <Fragment>
      <NavBar />
      <section className="container mt-5 pt-4 text-center">
        <h3 className="txt">Upload Gallery Images</h3>
        <div className="row justify-content-center mt-4">
          <form onSubmit={handleSubmit2}>
            {file.map((sp, ind) => {
              return (
                <div className="row justify-content-center" key={"file" + ind}>
                  <div className="col-xl-5 col-lg-12 col-md-12 col-12 m-2">
                    <input
                      name="img"
                      type="file"
                      accept="image/*"
                      className="form-control"
                      id={"fileupload" + ind}
                      onChange={(event) => handleImgInput({ ind, event })}
                    />
                  </div>

                  {ind == file.length - 1 ? (
                    <div className="row justify-content-center">
                      <div className="col-xl-2 col-lg-12 col-md-12 col-12 m-2">
                        <button
                          className="btn btn-success form-control"
                          onClick={() => setFile([...file, new File([""], "")])}
                        >
                          Add Image
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
                            const values = [...file];
                            values.splice(ind, 1);
                            setFile(values);
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
            <button className="btn btn-primary mt-4" style={{width:'150px'}} type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
      <section className="container text-center mt-4">
        <h3 className="txt">Upload FAQs</h3>
        <div className="row justify-content-center">
          <form onSubmit={handleSubmit}>
            {faq.map((sp, ind) => {
              return (
                <div className="row justify-content-center" key={"faq" + ind}>
                  <div className="col-xl-5 col-lg-12 col-md-12 col-12 m-2">
                    <label htmlFor={"faqqns" + ind} className="form-label">
                      Question
                    </label>
                    <input
                      name="key"
                      type="text"
                      className="form-control-requirement"
                      id={"faqqns" + ind}
                      value={sp.key}
                      onChange={(event) => handleSpecInput({ ind, event })}
                    />
                  </div>
                  <div className="col-xl-5 col-lg-12 col-md-12 col-12 m-2">
                    <label htmlFor={"faqans" + ind} className="form-label">
                      Answer
                    </label>
                    <input
                      name="value"
                      type="text"
                      className="form-control-requirement"
                      id={"faqans" + ind}
                      value={sp.value}
                      onChange={(event) => handleSpecInput({ ind, event })}
                    />
                  </div>
                  {ind == faq.length - 1 ? (
                    <div className="row justify-content-center">
                      <div className="col-xl-2 col-lg-12 col-md-12 col-12 m-2">
                        <button
                          className="btn btn-success form-control"
                          onClick={() =>
                            setFaq([...faq, { key: "", value: "" }])
                          }
                        >
                          Add FAQ
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
                            const values = [...faq];
                            values.splice(ind, 1);
                            setFaq(values);
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
            <button className="btn btn-primary mt-4 mb-3" style={{width:'150px'}} type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Imageupload;

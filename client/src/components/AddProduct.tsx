import React, { Fragment, useState, useContext } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { Product } from "../utils";
import { Usercontext } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/AdminForms.css';

const AddProduct = () => {
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    // var axios = require("axios");
    var config = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + "/product",
    };

    axios(config)
      .then(function (response: any) {
        setData(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescrip] = useState("");
  const [techspec, setTechspec] = useState("");
  const [image, setImg] = useState("");
  const [file, setFile] = useState("");
  const [spec, setSpec] = useState([{ key: "", value: "" }]);
  const { auth } = useContext(Usercontext);
  const [serialno, setSerialno] = useState(0);
  const [present, setPresent] = useState<any>(false);
  const [youtubeID, setYoutubeID] = useState("");
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
    spec.map((sp) => {
      des += `${sp.key}:${sp.value} ###`;
    });
    // var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("name", name);
    data.append("type", type);
    data.append("description", description + des);
    data.append("technicalspecs", techspec);
    data.append("uploadedproduct", image);
    data.append("uploadedproduct", file);
    data.append("presentInHomePage", present);
    data.append("serialno", serialno);
    data.append("youtubeId",youtubeID);

    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/addproduct",
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
  };
  const handledelete = (id: any) => {
    

    var config = {
      method: "delete",
      url: process.env.REACT_APP_BACKEND_URL + `/product/${id}`,
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
  return (
    <Fragment>
      <form
        className="mt-3"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        // method="POST"
        style={{marginRight:'2rem'}}
      >
        <div className="row justify-content-center" style={{marginTop:'3rem'}}>
          <div className="col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Name
            </label>
            <input
              type="text"
              className="form-control-admin"
              id="exampleInputEmail1"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label-admin">
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
            <label htmlFor="description" className="form-label-admin">
              Description
            </label>
            <textarea
              className="form-control-admin"
              id="industryexperience"
              value={description}
              rows={5}
              onChange={(e) => {
                setDescrip(e.target.value);
              }}
            />
          </div>
          <div className="row">
            <div className=" col-12" style={{textAlign:'center',marginTop:'3rem'}}>
              <label htmlFor="exampleInputEmail1" className="form-label-admin">
                <h4 className="my-1" style={{fontSize:'23px',fontFamily:'roboto'}}>Specifications</h4>
              </label>
            </div>
          </div>
          <div className="row justify-content-center">
            {spec.map((sp, ind) => {
              return (
                <div className="row justify-content-center" key={"spec" + ind}>
                  <div className="col-xl-4 col-lg-12 col-md-12 col-12 m-2">
                    <label htmlFor={"speckey" + ind} className="form-label-admin">
                      Specification
                    </label>
                    <input
                      name="key"
                      type="text"
                      className="form-control-admin"
                      id={"speckey" + ind}
                      value={sp.key}
                      onChange={(event) => handleSpecInput({ ind, event })}
                    />
                  </div>
                  <div className="col-xl-4 col-lg-12 col-md-12 col-12 m-2">
                    <label htmlFor={"specval" + ind} className="form-label-admin">
                      Value
                    </label>
                    <input
                      name="value"
                      type="text"
                      className="form-control-admin"
                      id={"specval" + ind}
                      value={sp.value}
                      onChange={(event) => handleSpecInput({ ind, event })}
                    />
                  </div>
                  {ind == spec.length - 1 ? (
                    <div className="row justify-content-center">
                      <div className="col-xl-2 col-lg-12 col-md-12 col-12 m-2">
                        <button
                          className="btn btn-success form-control-admin"
                          onClick={() =>
                            setSpec([...spec, { key: "", value: "" }])
                          }
                          style={{backgroundColor:"green", color:'white'}}
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
              <label htmlFor="techspec" className="form-label-admin">
                Technical Specification
              </label>
              <input
                type="text"
                className="form-control-admin"
                id="techspec"
                value={techspec}
                onChange={(e) => {
                  setTechspec(e.target.value);
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12">
              <label htmlFor="serialno" className="form-label-admin">
                Serial No
              </label>
              <input
                type="number"
                className="form-control-admin"
                id="serialno"
                value={serialno}
                onChange={(e) => {
                  setSerialno(parseInt(e.target.value));
                }}
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12">
              <label htmlFor="serialno" className="form-label-admin">
                Youtube Id
              </label>
              <input
                type="text"
                className="form-control-admin"
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
                  defaultValue=""
                  id="flexCheckDefault"
                  value={present}
                  onChange={(e) => setPresent(e.target.value)}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Display In Homepage
                </label>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label-admin">
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                className="form-control-admin"
                name="uploadedImages"
                onChange={(e: any) => {
                  setImg(e.target.files[0]);
                }}
                required
              />
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
              <label htmlFor="exampleInputEmail1" className="form-label-admin">
                Brochure
              </label>
              <input
                type="file"
                className="form-control-admin"
                name="uploadedImages"
                onChange={(e: any) => {
                  setFile(e.target.files[0]);
                }}
              />
            </div>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}}>
          <button type="submit" className="btn btn-primary" style={{width:'150px',borderRadius:'3rem',backgroundColor:'#ff7321',border:'none'}}>
            Submit
          </button>

        </div>
      </form>
      
      <section className="container py-5 text-center" style={{marginTop:'4rem'}}>
        <h3 className="m-2" style={{fontSize:'30px',fontFamily:'poppins'}}>Products</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Type</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((product: Product, ind) => (
                <tr>
                  <th scope="row">{ind + 1}</th>
                  <td>{product.name}</td>
                  <td>{product.type}</td>
                  <td>
                    <div className="row">
                      <a
                        className="btn btn-primary col-6 mx-2"
                        href={`/upload/${product.id}`}
                      >
                        Upload Images/FAQs
                      </a>
                      <button
                        className="btn btn-success col-2 mx-2"
                        onClick={() => navigate(`/editproduct/${product.id}`)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="btn btn-danger col-2 mx-2"
                        onClick={() => handledelete(product.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </Fragment>
  );
};

export default AddProduct;

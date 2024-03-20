import React, { Fragment, useState, useContext, useEffect } from "react";
import { Usercontext } from "../utils/Context";
import axios from "axios";

const AddService = () => {
  const [type, setType] = useState("");
  const [file, setFile] = useState<File[]>([new File([""], "")]);
  const [filename, setFileName] = useState<string[]>([""]);
  const [price ,setPrice] = useState('');
  const { auth } = useContext(Usercontext);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    var names: string = "";

    filename.map((name) => {
      names += name + " @#$@ ";
    });
    // var axios = require("axios");
    var FormData = require("form-data");
    var data = new FormData();
    data.append("name", names);
    data.append("type", type);
    data.append("price",price)
    

    file.map((img) => {
      data.append("serviceImg", img);
    });

    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/addservice",
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
        alert(error.message);
      });
  };
  const handleImgInput = ({ ind, event }: { ind: number; event: any }) => {
    if (event.target.name === "img") {
      const values = [...file];

      values[ind] = event.target.files[0];

      setFile(values);
    } else if (event.target.name === "imgname") {
      const values = [...filename];
      values[ind] = event.target.value;
      setFileName(values);
    }else if (event.target.name==='price'){
      const values = [...filename]
      values[ind] = event.target.value;
      setFileName(values)
    }
  };
  return (
    <Fragment>
      <form
        className="mt-3"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        method="POST"
      >
        <div className="row justify-content-center" style={{marginTop:'0'}}>
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
              <option value="R&D">R & D</option>
              <option value="Manufacturing and automation">
                Manufacturing and automation
              </option>
              <option value="Design">Design</option>
              <option value="3D Printing">3D Printing</option>
              <option value="Achievement">Achievement / Media</option>
            </select>
          </div>
          <section className="container mt-2">
            <h3 style={{textAlign:'center',marginTop:'2rem',fontSize:'23px',fontFamily:'roboto'}}>Upload Images</h3>
            <div className="row justify-content-center mt-4">
              {file.map((sp, ind) => {
                return (
                  <div
                    className="row justify-content-center"
                    key={"Image" + ind}
                    style={{marginTop:'0'}}
                  >
                    <div className="col-xl-5 col-lg-12 col-md-12 col-12 m-2">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label-admin"
                      >
                        Name
                      </label>
                      <input
                        name="imgname"
                        type="text"
                        className="form-control-admin"
                        id={"Imagename" + ind}
                        value={filename[ind]}
                        onChange={(event) => handleImgInput({ ind, event })}
                      />
                    </div>

                    <div className="col-xl-5 col-lg-12 col-md-12 col-12 m-2">
                      <label
                
                        className="form-label-admin"
                      >
                        Price
                      </label>
                      <input
                        name="price"
                        type="text"
                        placeholder="Rs."
                        className="form-control-admin"
                      
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                      />
                    </div>

                    <div className="col-xl-5 col-lg-12 col-md-12 col-12 m-2">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label-admin"
                      >
                        Image
                      </label>
                      <input
                        name="img"
                        type="file"
                        accept="image/*"
                        className="form-control-admin"
                        id={"Imageupload" + ind}
                        onChange={(event) => handleImgInput({ ind, event })}
                      />
                    </div>

                    {ind == file.length - 1 ? (
                      <div className="row justify-content-center" style={{marginTop:'0'}}>
                        <div className="col-xl-2 col-lg-12 col-md-12 col-12 m-2">
                          <button
                            className="btn btn-success form-control-admin"
                            onClick={() =>
                              setFile([...file, new File([""], "")])
                            }
                            style={{backgroundColor:'green',color:'white'}}
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
                              const names = [...filename];
                              values.splice(ind, 1);
                              names.splice(ind, 1);
                              setFile(values);
                              setFileName(names);
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
          </section>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'3rem'}}>
          <button type="submit" className="btn btn-primary" style={{width:'150px',borderRadius:'3rem',backgroundColor:'#ff7321',border:'none'}}>
            Submit
          </button>

        </div>
      </form>
    </Fragment>
  );
};

export default AddService;

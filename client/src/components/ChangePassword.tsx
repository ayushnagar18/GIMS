import React, { Fragment, useState, useContext } from "react";
import { Usercontext } from "../utils/Context";
import axios from "axios";

const ChangePassword = () => {
  const [password, setPassword] = useState<any>("");
  const [confpass, setConfPassword] = useState<any>("");
  const [aler, setAlert] = useState<any>();
  const { auth } = useContext(Usercontext);
  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (password && confpass === password) {
      // var axios = require("axios");
      var qs = require("qs");
      var data = qs.stringify({
        password,
        userid:auth?.user?.userid
      });
      var config = {
        method: "post",
        url: process.env.REACT_APP_BACKEND_URL + "/changepass",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          authorization: auth?.token,
        },
        data: data,
      };

      axios(config)
        .then(function (response: any) {
          // alert(JSON.stringify(response.data));
          // window.location.reload();
          const styledAlert = document.createElement('div');
        styledAlert.textContent = response.data.message; 
        styledAlert.style.padding = '20px'; 
        styledAlert.style.backgroundColor = 'rgba(0, 0, 0, 0)'; 
        styledAlert.style.color = '#000'; 
        styledAlert.style.border = '2px solid black';
        styledAlert.style.borderRadius = '5px';
        styledAlert.style.fontSize = '18px'; 
        styledAlert.style.position = 'fixed';
        styledAlert.style.top = '60px'; 
        styledAlert.style.right = '10px';
        document.body.appendChild(styledAlert);

        setTimeout(() => {
          styledAlert.remove();
          window.location.reload();
        },2000);
        })
        .catch(function (error: any) {
          console.log(error);
        });
    } else {
      setAlert(true);
    }
  };
  return (
    <Fragment>
      {aler && (
        <div className="alert alert-danger mt-4" role="alert">
          Password and Confirm Password must be same
        </div>
      )}
      <form
        className="mt-3"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        method="POST"
      >
        <div className="row" style={{marginBottom:'1.5rem'}}>
          <div className=" col-12" style={{textAlign:'left'}}>
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              <h5 className="my-2" style={{fontSize:'23px'}}>Change Password:</h5>
            </label>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              Enter New Password
            </label>
            <input
              type="password"
              className="form-control-admin"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label-admin">
              Confirm Password
            </label>
            <input
              type="password"
              className={"form-control-admin passCheck"}
              value={confpass}
              onChange={(e) => {
                setConfPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px',marginBottom:'20px'}}>
          <button type="submit" className="btn btn-primary mt-3" style={{width:'150px',borderRadius:'3rem',backgroundColor:'#ff7321',border:'none'}}>
            Submit
          </button>

        </div>
      </form>
    </Fragment>
  );
};

export default ChangePassword;

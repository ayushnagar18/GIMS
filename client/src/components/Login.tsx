import React, { useState, useContext, Fragment } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { Usercontext } from "../utils/Context";
import axios from "axios";
import logo from "../assets/Home/logo.svg";
import { FaLock, FaUser } from "react-icons/fa";
import NavBar from "./NavBar";
var bcrypt = require("bcryptjs");

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const cookies = new Cookies();
  const { setRole } = useContext(Usercontext);

  const handlelogin = (event: any) => {
    console.log("hello")
    event.preventDefault();
    // var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      email,
      password,
      
    });
    console.log("2nd time")
    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/login",
      credentials: "include",
      data: data,
    };
    axios(config)
       .then(function (response: any) {
         alert(JSON.stringify(response.data.message));
         console.log(response)
         if (response.data.user) {
          console.log(response.data.token)
           cookies.set(
             "auth",
             { token: response.data.token, user: response.data.user },
             { path: "/" }
           );
           console.log(response.data)
           localStorage.setItem("email",response.data.user.emailid)
           navigate("/admin");
         }
         window.location.reload();
         setRole({ token: response.data.token, user: response.data.user });
       })
       .catch(function (error: any) {
         alert(error);
       });
  };

  return (
    <Fragment>
      {/* <NavBar /> */}

      <div className="row loginform">
        <div className="card-login login-card col-xl-4 col-lg-12 col-md-12 col-12">
          <div className="card-body">
            <form onSubmit={handlelogin}>
              
              <div className="login-logo">
                <img src={logo} height="180px" width="100px" />
              </div>
              <br />
              <div className="input-login-sec">
                <FaUser height="2em" />
                <input
                  type="text"
                  className="form-control-login"
                  required
                  placeholder="UserName"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br />
              <br />
              <div className="input-login-sec">
                <FaLock height="2em"/>
                <input
                  type="password"
                  className="form-control-login"
                  required
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />
              <br />
              <button className="btn-login btn-primary" type="submit">
                Login
              </button>
              <br />     
              <div className="card-footer text-muted">
                <div className="row">
                  <div className="forgotpass">
                    <h6 className="col-6" onClick={() => navigate("/forgotpassword")}>
                      Forgot Password ?
                    </h6>
                  </div>
                </div>
              </div>           
              <br/>
            </form>              
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;

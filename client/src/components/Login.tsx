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
    
    event.preventDefault();
    
    var qs = require("qs");
    var data = qs.stringify({
      email,
      password,
      
    });
    
    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/login",
      credentials: "include",
      data: data,
    };
    axios(config)
       .then(function (response: any) {
        const styledAlert = document.createElement('div');
         styledAlert.textContent = response.data.message;
         styledAlert.style.padding = '20px';
         styledAlert.style.fontSize = '25px';
         styledAlert.style.backgroundColor = 'rgba(0, 0, 0, 0)'; 
         styledAlert.style.color = '#fff'; 
         styledAlert.style.border = '2px solid white';
         styledAlert.style.borderRadius = '5px';
         styledAlert.style.position = 'fixed';
         styledAlert.style.top = '10px'; 
         styledAlert.style.right = '10px'; 
         document.body.appendChild(styledAlert);
         
         setTimeout(() => {
          
           styledAlert.remove();
        //  alert(JSON.stringify(response.data.message));
         if (response.data.user) {
           cookies.set(
             "auth",
             { token: response.data.token, user: response.data.user },
             { path: "/" }
           );
          //  console.log(response.data)
           localStorage.setItem("email",response.data.user.emailid)
           navigate("/admin");
         }
         window.location.reload();
         setRole({ token: response.data.token, user: response.data.user });
        },2000);
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

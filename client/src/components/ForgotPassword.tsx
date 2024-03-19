import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otpinput, setOtpInput] = useState<boolean>(false);
  const [otp, setOtp] = useState("");
  const [pass, setpass] = useState("");
  const navigate = useNavigate();
  const handleforgot = (event: any) => {
    event.preventDefault();
    // var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      email,
    });
    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/forgotpassword",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response: any) {
        alert(JSON.stringify(response.data));
        if(response.data.message === "Verification OTP sent to mail") setOtpInput(true);
      })
      .catch(function (error: any) {
        alert(JSON.stringify(error.message))
        console.log(error);
      });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (pass) {
      // var axios = require("axios");
      var qs = require("qs");
      var data = qs.stringify({
        password: pass,
        otp,
        email,
      });
      var config = {
        method: "post",
        url: process.env.REACT_APP_BACKEND_URL + "/resetpassword",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };

      axios(config)
        .then(function (response: any) {
          alert(JSON.stringify(response.data));
          navigate("/login");
        })
        .catch(function (error: any) {
          console.log(error);
        });
    }
  };
  return (
    <div className="row loginform">
      <div className="card login-card col-xl-4 col-lg-12 col-md-12 col-12">
        <div className="card-body">
          <form onSubmit={handleforgot}>
            <h3 className="text-center txt-3">Forgot Password</h3>
            <br />
            <input
              type="email"
              className="form-control-requirement"
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <button className="btn btn-primary" style={{fontWeight:'700'}} type="submit">
              Get OTP
            </button>
            <br />
            <br />
          </form>
          {otpinput && (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Otp"
                onChange={(e) => setOtp(e.target.value)}
              />
              <br />
              <input
                type="password"
                className="form-control"
                required
                placeholder="Change Password"
                onChange={(e) => setpass(e.target.value)}
              />
              <br />
              <button className="btn btn-primary" type="submit">
                Change Password
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

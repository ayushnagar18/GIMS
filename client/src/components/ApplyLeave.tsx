import React, { Fragment, useState } from "react";
import Moment from "moment";
import moment from "moment";
import axios from "axios";

const ApplyLeave = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState(0.0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      startDate,
      endDate,
      noOfDays: duration,
      userId: "GIMS001",
      reason: description,
      updatedOn: new Date().toISOString(),
    });
    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/applyleave",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
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
  };
  return (
    <Fragment>
      <form
        className="mt-3"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        method="POST"
      >
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label className="form-label-admin">Start Date</label>
            <input
              type="datetime-local"
              className="form-control-admin"
              value={startDate}
              onChange={(e) => {
                if (endDate) {
                  var start = Moment(e.target.value);
                  var end = Moment(endDate);
                  var dur = moment.duration(end.diff(start)).asDays();
                  setDuration(parseFloat(dur.toFixed(1)));
                }
                setStartDate(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label className="form-label-admin">End Date</label>
            <input
              type="datetime-local"
              className="form-control-admin"
              value={endDate}
              onChange={(e) => {
                if (startDate) {
                  var start = Moment(startDate);
                  var end = Moment(e.target.value);
                  var dur = moment.duration(end.diff(start)).asDays();
                  setDuration(parseFloat(dur.toFixed(1)));
                }
                setEndDate(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label className="form-label-admin">No of Days</label>
            <input type="number" className="form-control-admin" value={duration} />
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12 my-2">
            <label className="form-label-admin">Purpose of Leave</label>
            <textarea
              className="form-control-admin"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary col-xl-2 col-lg-6 col-md-6 col-6 my-2"
            style={{width:'150px',borderRadius:'3rem',backgroundColor:'#ff7321',border:'none',height:'2.5rem'}}
          >
            Apply for leave
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default ApplyLeave;

import React, { Fragment, useState, useEffect, useContext } from "react";
import { Timesheet } from "../utils";
import { Usercontext } from "../utils/Context";
import { FaTrash } from "react-icons/fa";
import Moment from "moment";
import { PieChart } from "react-minimal-pie-chart";
import moment from "moment";
import axios from "axios";

const AddTimesheet = () => {
  const [activity, setActivity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState(0.0);
  const [description, setDescription] = useState("");
  const { auth } = useContext(Usercontext);
  const [data, setData] = useState<Timesheet[]>([]);
  let hrs: number = 0.0;
  const handledelete = (id: any) => {
    // var axios = require("axios");

    var config = {
      method: "delete",
      url: process.env.REACT_APP_BACKEND_URL + `/timesheet/${id}`,
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
  useEffect(() => {
    // var axios = require("axios");

    var config = {
      method: "get",
      url:
        process.env.REACT_APP_BACKEND_URL + `/timesheet/${auth?.user?.userid}`,
      headers: {
        authorization: auth?.token,
      },
    };

    axios(config)
      .then(function (response: any) {
        setData(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      starttime: startDate,
      endtime: endDate,
      noOfhours: duration,
      userid:auth?.user?.userid,
      description,
      activity,
      updatedOn: new Date().toISOString(),
    });
    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/uploadtimesheet",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        authorization: auth?.token,
      },
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
      <form
        className="mt-3"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        method="POST"
      >
        <div className="row justify-content-center" style={{marginTop:'0'}}>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label className="form-label-admin">Activity</label>
            <select
              className="form-select"
              name="domain"
              aria-describedby="domain"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            >
              <option selected>select menu</option>
              <option value="Design">Design</option>
              <option value="Discussion">Discussion</option>
              <option value="Documentation/PPT">Documentation/PPT</option>
              <option value="Education Research">Education Research</option>
              <option value="Assembly/Fabrication">Assembly/Fabrication</option>
              <option value="Testing">Testing</option>
              <option value="Marketing">Marketing</option>
              <option value="Study">Study</option>
              <option value="Purchase">Purchase</option>
              <option value="Office Work">Office Work</option>
            </select>
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label className="form-label-admin">Start Time</label>
            <input
              type="datetime-local"
              className="form-control-admin"
              value={startDate}
              onChange={(e) => {
                if(endDate){
                  var start = Moment(e.target.value)
                  var end = Moment(endDate);
                  var dur = moment.duration(end.diff(start)).asHours();
                  setDuration(parseFloat(dur.toFixed(2)))
                }
                setStartDate(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label className="form-label-admin">End Time</label>
            <input
              type="datetime-local"
              className="form-control-admin"
              value={endDate}
              onChange={(e) => {
                if (startDate) {
                  var start = Moment(startDate);
                  var end = Moment(e.target.value);
                  var dur = moment.duration(end.diff(start)).asHours();
                  setDuration(parseFloat(dur.toFixed(2)));
                }
                setEndDate(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
            <label className="form-label-admin">Working Hours</label>
            <input
              type="number"
              className="form-control-admin"
              value={duration}
              disabled
            />
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-12 my-2">
            <label className="form-label-admin">Description</label>
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
            Upload Timesheet
          </button>
        </div>
      </form>
      <div className="container">
        <h2 className="mt-3 text-center" style={{fontFamily:'roboto',marginBottom:'1rem'}}>TimeSheet Details</h2>
        <table className="table table-striped table-hover table-striped-columns m-2">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Activity</th>
                <th scope="col">Start time</th>
                <th scope="col">End time</th>
                <th scope="col">No of Hours</th>
                <th scope="col">Description</th>
                <th scope="col">Updated On</th>
              </tr>
            </thead>
            <tbody>
              {data.map((time, ind) => {
                if (time.noofhours) hrs += parseFloat(time.noofhours);
                return (
                  <tr key={time.id}>
                    <th scope="row">{ind + 1}</th>
                    <td>{time.activity}</td>
                    <td>
                      {Moment(time.starttime).format("MMMM Do YYYY, h:mm:ss a")}
                    </td>
                    <td>
                      {Moment(time.endtime).format("MMMM Do YYYY, h:mm:ss a")}
                    </td>
                    <td>{time.noofhours}</td>
                    <td>{time.description}</td>
                    <td>{time.updatedon}</td>
                    <td>
                      {auth && auth.user?.role && (
                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => handledelete(time.id)}
                        >
                          <FaTrash />
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <th scope="row"></th>
                <td></td>
                <td>Total No of Hours</td>
                <td>
                  <b>{hrs}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </table>
      </div>
    </Fragment>
  );
};

export default AddTimesheet;

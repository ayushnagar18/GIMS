import React, { Fragment, useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { Timesheet } from "../utils";
import { PieChart } from "react-minimal-pie-chart";
import { Usercontext } from "../utils/Context";
import "../styles/Home.css";
import Moment from "moment";
import axios from "axios";
interface Activity {
  title: string;
  value: number;
  color: string;
}
const DisplayTimesheet = () => {
  const { id } = useParams();
  const [data, setData] = useState<Timesheet[]>([]);
  const [activity, setActivity] = useState<Activity[]>([]);
  const { auth } = useContext(Usercontext);
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const usr = params.get("usr");
  const colors = [
    "gray",
    "silver",
    "maroon",
    "red",
    "purple",
    "fushsia",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
  ];
  let hrs: number = 0;
  useEffect(() => {
    // var axios = require("axios");
    var config = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + `/timesheet/${id}`,
      headers: {
        // authorization: auth?.token,
      },
    };

    axios(config)
      .then(function (response: any) {
        setData(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
    var config2 = {
      method: "get",
      url: process.env.REACT_APP_BACKEND_URL + `/timesheetactivity/${id}`,
      headers: {
        // authorization: auth?.token,
      },
    };

    axios(config2)
      .then(function (response: any) {
        let activitydata: Activity[] = [];
        response.data.map((data: any, ind: any) => {
          activitydata.push({
            title: data.activity,
            color: colors[ind],
            value: data.hours,
          });
        });
        setActivity(activitydata);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);
  return (
    <Fragment>
      <NavBar />
      <section className="banner-req">
        <div className="container">
          <h2 className="mt-3 text-center txt">TimeSheet Details for {usr}</h2>
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
                      <th>{time.activity}</th>
                      <td>
                        {Moment(time.starttime).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </td>
                      <td>
                        {Moment(time.endtime).format("MMMM Do YYYY, h:mm:ss a")}
                      </td>
                      <td>{time.noofhours}</td>
                      <td>{time.description}</td>
                      <td>{time.updatedon}</td>
                    </tr>
                  );
                })}
                <tr>
                  <th scope="row"></th>
                  <td></td>
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
      </section>
      <div className="row justify-content-center">
        <div className="col-xl-4 col-lg-12 col-md-12 col-12 my-2">
          <PieChart
            data={activity}
            label={(dataEntry) =>
              dataEntry.dataEntry.title + " : " + dataEntry.dataEntry.value
            }
            totalValue={hrs}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default DisplayTimesheet;

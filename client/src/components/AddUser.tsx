import React, { Fragment, useEffect, useState, useContext } from "react";
import { ROLES, User, details } from "../utils";
import { FaArrowRight, FaTrash } from "react-icons/fa";
import { Usercontext } from "../utils/Context";
import axios from "axios";
import '../styles/AdminForms.css';

const AddUser = () => {
  const [teammemberId, setTeammemberId] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState<details[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const { auth } = useContext(Usercontext);
  const handledelete = (id: any) => {
    // var axios = require("axios");

    var config = {
      method: "delete",
      url: process.env.REACT_APP_BACKEND_URL + `/user/${id}`,
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
      url: process.env.REACT_APP_BACKEND_URL + "/teammembers",
      headers: {},
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
      url: process.env.REACT_APP_BACKEND_URL + "/users",
      headers: {},
    };

    axios(config2)
      .then(function (response: any) {
        setUsers(response.data);
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
      email,
      role,
      password,
      teammemberId,
    });
    var config = {
      method: "post",
      url: process.env.REACT_APP_BACKEND_URL + "/adduser",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // authorization : auth?.token
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
        <div className="row">
          <div className=" col-12" style={{textAlign:'left',marginTop:'3rem',marginBottom:'1.5rem'}}>
            <label htmlFor="exampleInputEmail1" className="form-label-admin">
              <h4 className="my-1" style={{fontSize:'28px',fontFamily:'roboto'}}>Create User:</h4>
            </label>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-12 col-md-12 col-12">
            <label className="form-label-admin">Team Member</label>
            <select
              className="form-select"
              name="domain"
              aria-describedby="domain"
              value={teammemberId}
              onChange={(e) => setTeammemberId(e.target.value)}
            >
              <option selected>select member</option>
              {data.map((team) => (
                <option value={team.id}>{team.name}</option>
              ))}
            </select>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label-admin">
              Role
            </label>
            <select
              className="form-select"
              name="domain"
              aria-describedby="domain"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option selected>select Role</option>
              {ROLES.map((role) => (
                <option value={role}>{role}</option>
              ))}
            </select>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-12 my-2">
            <label className="form-label-admin">Email</label>
            <input
              type="email"
              className="form-control-admin"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-12 my-2">
            <label className="form-label-admin">Password</label>
            <input
              type="password"
              className="form-control-admin"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary col-xl-2 col-lg-6 col-md-6 col-6 my-2"
            style={{width:'150px',borderRadius:'3rem',backgroundColor:'#ff7321',border:'none'}}
          >
            Add User
          </button>
        </div>
      </form>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <h2 className="text-center" style={{fontSize:"28px",fontFamily:'roboto'}}>Users</h2>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Id</th>
              <th scope="col">Name</th>
              <th scope="col">Job Title</th>
              <th scope="col">Role</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, ind) => (
              <tr key={user.userid}>
                <th scope="row">{ind + 1}</th>
                <td>{user.userid}</td>
                <td>{user.name}</td>
                <td>{user.jobtitle}</td>
                <td>{user.role}</td>
                <td>
                  {auth && auth.user?.role === "ADMIN" && (
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => handledelete(user.userid)}
                    >
                      <FaTrash />
                    </button>
                  )}
                </td>
                <td>
                  <a
                    className="text-primary"
                    href={`/timesheet/${user.userid}?usr=${user.name}`}
                  >
                    <b>
                      Show More <FaArrowRight />
                    </b>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default AddUser;

import React, { Fragment, useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import "../styles/Admin.css";
import Teammembers from "./Teammembers";
import AddTeam from "./AddTeam";
import AddProduct from "./AddProduct";
import AddService from "./AddService";
import ServicesAdmin from "./ServicesAdmin";
import AddCareer from "./AddCareer";
import CareerAdmin from "./CareerAdmin";
import AddUser from "./AddUser";
import AddTimesheet from "./AddTimesheet";
import ApplyLeave from "./ApplyLeave";
import LeaveAdmin from "./LeaveAdmin";
import ChangePassword from "./ChangePassword";
import { Usercontext } from "../utils/Context";
import TaskAdmin from "./TaskAdmin";
import axios from "axios";
import { details } from "../utils";
import userImage from '../assets/Home/user.png';

const Admin = () => {
  const [image, setImage] = useState<any>(userImage)
  const [user, setUser] = useState<any>("");
  const email = localStorage.getItem("email");
  const userid = localStorage.getItem("userid");
  const handleClick = () => {
    window.location.href = "https://app.clickup.com/9016130954/v/l/8cpefca-396";
  };
  useEffect(() => {
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_BACKEND_URL}/teammember/email/${email}`,
      headers: {},
    };

    axios(config)
      .then(function (response: any) {
        let data: details = response.data;
        console.log("it is response",response)
        console.log(response.data)
        if (data) {
          console.log(data)
          setUser(data.name);
          setImage(data.image);
        }
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);
  // if (email) {

  //   setImage("https://cdn4.vectorstock.com/i/1000x1000/59/33/person-icon-in-flat-style-man-symbol-vector-21095933.jpg");
  // }
  const scrollToTabContent = (tabId: string) => {
    const tabContent = document.getElementById(tabId);
    if (tabContent) {
      tabContent.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  const { auth } = useContext(Usercontext);
  return (
    <Fragment>
      <NavBar />

      <div className="admin-block"  >
        <section className="tab-sec pb-5 tab-sec2" >
          <div className="">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                {/* <!-- Nav Tabs --> */}


                <div className="tab-main">
                  <div className="wrap-tab">
                    <nav>
                      <div
                        className="nav nav-tabs nav-justified"
                        id="nav-tab"
                        role="tablist"
                      >
                        <div>

                          <div className="admin-btn-form" >
                            <div >
                              {auth?.user?.role === "ADMIN" &&(
                                <button
                                  className="nav-link col-12"
                                  id="nav-menu1-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-menu1"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-menu1"
                                  aria-selected="false"
                                  onClick={() => scrollToTabContent("nav-menu1")}
                                >
                                  <p className="body-sm body-tab-admin">Team</p>
                                </button>
                              )}
                            </div>
                            <div >
                              {auth?.user?.role === "ADMIN" &&(
                                <button
                                  className="nav-link col-12"
                                  id="nav-menu2-tab"
                                  data-bs-toggle="tab"
                                  data-bs-target="#nav-menu2"
                                  type="button"
                                  role="tab"
                                  aria-controls="nav-menu2"
                                  aria-selected={false}
                                  onClick={() => scrollToTabContent("nav-menu2")}
                                >
                                  <p className="body-sm body-tab-admin">Product</p>
                                </button>
                              )}
                            </div>
                            <div >
                              {(
                                auth?.user?.role === "ADMIN" ||
                                auth?.user?.role === "TECHNICIAN" ||
                                auth?.user?.role === "ENGINEER") &&
                                (
                                  <button
                                    className="nav-link col-12"
                                    id="nav-menu3-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-menu3"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-menu3"
                                    aria-selected={false}
                                    onClick={() => scrollToTabContent("nav-menu3")}
                                  >
                                    <p className="body-sm body-tab-admin">Services</p>
                                  </button>
                                )}
                            </div>
                            <div >
                              {(
                                auth?.user?.role === "ADMIN" ||
                                auth?.user?.role === "HR") &&
                                (
                                  <button
                                    className="nav-link col-12"
                                    id="nav-menu4-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-menu4"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-menu4"
                                    aria-selected={auth?.user?.role === "HR"}
                                    onClick={() => scrollToTabContent("nav-menu4")}
                                  >
                                    <p className="body-sm body-tab-admin">Career</p>
                                  </button>
                                )}
                            </div>
                            <div >
                              {
                                auth?.user?.role === "ADMIN" && 
                                (
                                  <button
                                    className="nav-link col-12"
                                    id="nav-menu5-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-menu5"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-menu5"
                                    aria-selected="false"
                                    onClick={() => scrollToTabContent("nav-menu5")}
                                  >
                                    <p className="body-sm body-tab-admin">Create User</p>
                                  </button>
                                )}
                            </div>
                            <div >
                              <button
                                className="nav-link col-12"
                                id="nav-menu6-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-menu6"
                                type="button"
                                role="tab"
                                aria-controls="nav-menu6"
                                aria-selected={auth?.user?.role === undefined}
                                onClick={() => scrollToTabContent("nav-menu6")}
                              >
                                <p className="body-sm body-tab-admin">Tasks</p>
                              </button>
                            </div>
                            <div >
                              <button
                                className="nav-link col-12"
                                id="nav-menu7-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-menu7"
                                type="button"
                                role="tab"
                                aria-controls="nav-menu7"
                                aria-selected="false"
                                onClick={() => scrollToTabContent("nav-menu7")}
                              >
                                <p className="body-sm body-tab-admin">Apply Leave</p>
                              </button>
                            </div>
                            <div >
                              <button
                                className="nav-link col-12"
                                id="nav-menu8-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-menu8"
                                type="button"
                                role="tab"
                                aria-controls="nav-menu8"
                                aria-selected="false"
                                onClick={() => scrollToTabContent("nav-menu8")}
                              >
                                <p className="body-sm body-tab-admin">Password</p>
                              </button>
                            </div>
                          </div>

                        </div>

                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{width:'100%'}}>
          <section className="banneradmin-sec" >
            <div>
              <div className="img-for-admin">
                <img  src={`${process.env.REACT_APP_BACKEND_URL}/images/${image}`} alt="React Image" />
              </div>
              <div >
                <h4>{user ? user : "User"}</h4>
              </div>
            </div>
              <div>
                <button className="btn btn-primary btn-admin" onClick={handleClick}
                > ClickUp</button>
              </div>
            

          </section>

          <section style={{ height: "20%" }}></section>

          <section style={{ marginLeft: "20rem" }}>
            <div className="tab-content" id="nav-tabContent">
              {
                auth?.user?.role === "ADMIN" && 
                (
                  <div
                    className="tab-pane fade"
                    id="nav-menu1"
                    role="tabpanel"
                    aria-labelledby="nav-menu1-tab"
                    tabIndex={0}
                  >
                    <div className="row justify-content-center p-3">
                      <h3 className="mt-2" style={{ fontSize: '30px', fontFamily: 'poppins' }}>Add Team Member:</h3>
                      <AddTeam />
                    </div>
                    <Teammembers isAdmin={true} />
                  </div>
                )}
              {
                (auth?.user?.role === "ADMIN" ||
                  auth?.user?.role === "MARKETING") && 
                (
                  <div
                    className={" tab-pane fade"}
                    id="nav-menu2"
                    role="tabpanel"
                    aria-labelledby="nav-menu2-tab"
                    tabIndex={0}
                  >
                    <div className="row justify-content-center">
                      <h3 className="mt-2" style={{ fontSize: '30px', fontFamily: 'poppins' }}>Add Product:</h3>
                      <AddProduct />
                    </div>
                  </div>
                )}
              {
                (auth?.user?.role === "ADMIN" ||
                  auth?.user?.role === "TECHNICIAN" ||
                  auth?.user?.role === "ENGINEER") &&
                (
                  <div
                    className={" tab-pane fade"}
                    id="nav-menu3"
                    role="tabpanel"
                    aria-labelledby="nav-menu3-tab"
                    tabIndex={0}
                  >
                    <div className="row justify-content-center">
                      <h3 className="mt-2" style={{ fontSize: '30px', fontFamily: 'poppins' }}>Add Service:</h3>
                      <ServicesAdmin />
                    </div>
                  </div>
                )}
              {
                (auth?.user?.role === "ADMIN" ||
                  auth?.user?.role === "HR") && 
                (
                  <div
                    className={" tab-pane fade"}
                    id="nav-menu4"
                    role="tabpanel"
                    aria-labelledby="nav-menu4-tab"
                    tabIndex={0}
                  >
                    <div className="row justify-content-center">
                      <h3 className="mt-2" style={{ fontSize: '30px', fontFamily: 'poppins' }}>Add Career:</h3>
                      <CareerAdmin />
                    </div>
                  </div>
                )}
              {
                auth?.user?.role === "ADMIN" && 
                (
                  <div
                    className=" tab-pane fade"
                    id="nav-menu5"
                    role="tabpanel"
                    aria-labelledby="nav-menu5-tab"
                    tabIndex={0}
                  >
                    <div className="row justify-content-center">
                      <AddUser />
                    </div>
                  </div>
                )}
              <div
                className={" tab-pane fade"}
                id="nav-menu6"
                role="tabpanel"
                aria-labelledby="nav-menu6-tab"
                tabIndex={0}
              >
                <div className="row justify-content-center">
                  <TaskAdmin />
                </div>
              </div>
              <div
                className=" tab-pane fade"
                id="nav-menu7"
                role="tabpanel"
                aria-labelledby="nav-menu7-tab"
                tabIndex={0}
              >
                <div className="row justify-content-center">
                  <h3 className="mt-2" style={{ fontSize: '30px', fontFamily: 'poppins' }}>Apply For Leave:</h3>
                  <LeaveAdmin />
                </div>
              </div>
              <div
                className=" tab-pane fade"
                id="nav-menu8"
                role="tabpanel"
                aria-labelledby="nav-menu8-tab"
                tabIndex={0}
              >
                <div className="row justify-content-center">
                  <ChangePassword />
                </div>
              </div>
            </div>
          </section>
        </section>

      </div>




    </Fragment>
  );
};

export default Admin;

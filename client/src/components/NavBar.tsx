import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/Home/logo.svg";
import { FaUser } from "react-icons/fa";
import { Usercontext } from "../utils/Context";
import Cookies from "universal-cookie";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { preProcessFile } from "typescript";
import FontAwesomeIcon from 'react-icons/fa'

const NavBar = () => {
  

  const { auth, setRole } = useContext(Usercontext);
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand p-2" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <button className="navbar-toggler" type="button" onClick={handleToggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showNav ? 'show' : ''}`}>
          <div className="navbar-nav ms-auto">
            <div className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </div>
            {/* <div className="nav-item">
              {auth && auth.user && (
                <Link className="nav-link" to="/Admin">Admin</Link>
              )}
            </div> */}
            <div className="nav-item">
              <Link className="nav-link" to="/team">Our Team</Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/AboutUs">About Us</Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/Services">Services</Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/Products">Products</Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/Careers">Career</Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/Contactus">Contact Us</Link>
            </div>
            <div className="nav-item">
              {auth && auth.user ? (
                <button
                  className='btn nav-link'
                  onClick={() => {
                    cookies.remove("auth");
                    navigate("/");
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/login"
                >
                  <FaUser />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;



{/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          > 
            {auth && auth.user ? (
              <span>
                <FaUserAlt />
              </span>
            ) : (
              <span className="navbar-toggler-icon"></span>
            )} 
          </button> 
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
              <div className="offcanvas-header"> 
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    <img src={logo} />
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                {auth && auth.user && (
                    <li className="nav-item">
                    <Link
                      className="nav-link text-light active"
                      aria-current="page"
                      to="/admin"
                    >
                      Admin Page
                    </Link>
                  </li>
                  )}

                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    aria-current="page"
                    to="/aboutus"
                  >
                    Our Approach
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    aria-current="page"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    aria-current="page"
                    to="/products"
                  >
                    Products
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    aria-current="page"
                    to="/careers"
                  >
                    Careers
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    aria-current="page"
                    to="/team"
                  >
                    Our Team
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    aria-current="page"
                    to="/contactus"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  {!auth && !auth && (
                    <Link
                      className="nav-link text-light"
                      aria-current="page"
                      to="/login"
                    >
                      Employee Login
                    </Link>
                  )}
                </li>
              </ul>
              {auth && auth.user && (
                    <button
                      className="btn text-light"
                      onClick={() => {
                        cookies.remove("auth");
                        navigate("/");
                        window.location.reload();
                      }}
                    >
                      Logout
                    </button>
                  )}
            </div>
          </div> */}
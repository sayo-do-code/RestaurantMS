import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./style.css";

Link;

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline my-3">Admin</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li>
                <Link
                  to="/"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi bi-house"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Home</span>{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/restaurant"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-buildings"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline"></span>
                  Restaurants
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col py-4 px-1">
          <div className="p-2 d-flex justify-content-center">
            <h4>Restaurant Management System</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

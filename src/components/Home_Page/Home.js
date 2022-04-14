import React from "react";
import LoginModal from "../Login/Login";
import HomeImage from "./Home.png";
import "./home.css";
import logo from "./logo.png";

export default function Home(props) {
  const onOpenModal = () => {
    props.setOpen(true);
  };
  const logout = () => {
    localStorage.removeItem("karostartupUser");
    props.setVisibility(false);
  };
  return (
    <div className="home__main">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className="logo" src={logo} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#dates">
                    Dates
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#rewards">
                    Rewards
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About Us
                  </a>
                </li>
                {localStorage.getItem("karostartupUser") ? (
                  <li
                    className="nav-item"
                    onClick={logout}
                    style={{ cursor: "pointer" }}
                  >
                    <a className="nav-link">Logout</a>
                  </li>
                ) : (
                  <li
                    className="nav-item"
                    onClick={onOpenModal}
                    style={{ cursor: "pointer" }}
                  >
                    <a className="nav-link">Login</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <LoginModal
        open={props.open}
        setOpen={props.setOpen}
        onCloseModal={props.onCloseModal}
        setVisibility={props.setVisibility}
      />

      <div className={`row d-flex justify-content-around align-items-center`}>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <p className="head my-5">
            Bridging India’s Skill Gap through Live classnameroom and Internship
            opportunities.
          </p>
          <a className="regButton" href="#register">
            Register
          </a>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 mx-5">
          <img className="HomeImg" src={HomeImage} />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="container-fluid navigation_bar">
      <nav className="navscroll navbar fixed-top navbar-expand-lg navbar-light py-0">
        <div className="navbar-brand">Onmyoji</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto nav">
            <li className="nav-item align-start me-4">
              <NavLink
                className="nav-link"
                to="/home"
                onClick={function () {
                  props.onClick("home");
                  window.scrollTo({top: 0, left: 0, behavior: 'instant'});
                }}
              >
                <span className="d-lg-none d-xl-none me-3"></span>홈
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink
                className="nav-link"
                to="/story"
                onClick={function () {
                  props.onClick("story");
                  window.scrollTo({top: 0, left: 0, behavior: 'instant'});
                }}
              >
                <span className="d-lg-none d-xl-none me-3"></span>스토리
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink
                className="nav-link"
                to="/character"
                onClick={function () {
                  props.onClick("character");
                  window.scrollTo({top: 0, left: 0, behavior: 'instant'});
                }}
              >
                <span className="d-lg-none d-xl-none me-3"></span>캐릭터
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink
                className="nav-link"
                to="/gallery"
                onClick={function () {
                  props.onClick("gallery");
                  window.scrollTo({top: 0, left: 0, behavior: 'instant'});
                }}
              >
                <span className="d-lg-none d-xl-none me-3"></span>갤러리
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink
                className="nav-link"
                to="/script"
                onClick={function () {
                  props.onClick("script");
                  window.scrollTo({top: 0, left: 0, behavior: 'instant'});
                }}
              >
                <span className="d-lg-none d-xl-none me-3"></span>스크립트
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar_right"></div>
      </nav>
    </div>
  );
}

export default Navbar;

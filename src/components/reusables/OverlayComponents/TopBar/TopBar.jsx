import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  return (
    <div className="topbar w-100 p-3 position-fixed bg-transparent">
      {!isLoginPage ? (
        <div className="d-flex justify-content-between">
          <Link to="login" style={{ textDecoration: "none" }}>
            <div className="login">Log In</div>
          </Link>
          <div className="create-account">Create Account</div>
        </div>
      ) : (
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src="assets/images/logo.svg" alt="logo" className="pb-2" />
        </Link>
      )}
    </div>
  );
};

export default TopBar;

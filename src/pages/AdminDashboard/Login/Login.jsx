import React from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/Button";

const Login = () => {
  return (
    <div id="auth">
      <div className="row h-100">
        <div className="col-lg-7 col-12">
          <div id="auth-left">
            <div className="auth-logo">
              <Link to="/" href="index.html">
                <img src="/assets/vectors/logo.svg" alt="Logo" />
              </Link>
            </div>
            <h1 className="auth-title">Log in.</h1>
            <p className="auth-subtitle mb-5">
              Log in with your data that you entered during registration.
            </p>

            <form action="index.html">
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="text"
                  className="form-control form-control-xl"
                  placeholder="Username"
                />
                <div className="form-control-icon">
                  <i className="bi bi-person"></i>
                </div>
              </div>
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="password"
                  className="form-control form-control-xl"
                  placeholder="Password"
                />
                <div className="form-control-icon">
                  <i className="bi bi-shield-lock"></i>
                </div>
              </div>
              {/* <div className="form-check form-check-lg d-flex align-items-end">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label text-gray-600"
                  htmlFor="flexCheckDefault"
                >
                  Keep me logged in
                </label>
              </div> */}
              <Button
                to="/admin"
                className="w-100 justify-content-center mt-3"
                green
              >
                Log in
              </Button>
              {/* <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5">
                Log in
              </button> */}
            </form>
            {/* <div className="text-center mt-5 text-lg fs-4">
              <p className="text-gray-600">
                Don&apos;t have an account?{" "}
                <a href="auth-register.html" className="font-bold">
                  Sign up
                </a>
                .
              </p>
              <p>
                <a className="font-bold" href="auth-forgot-password.html">
                  Forgot password?
                </a>
                .
              </p>
            </div> */}
          </div>
        </div>
        <div className="col-lg-5 d-none d-lg-block">
          <div id="auth-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;

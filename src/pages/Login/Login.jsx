import React from "react";

import Section from "../../components/Section";
import Input from "../../components/Input";
import "./Login.scss";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Section id="login">
      <div className="login-main my-20">
        <div className="left">
          <h4 className="fs-22 mb-10">Login</h4>

          <Input label="Email / username" />

          <Input label="Password" type="password" />

          <Button to="/dashboard/my-lots" orange className="mt-20">
            Log in
          </Button>

          <div className="my-10">
            <Link className="text-primary-1" to="/">
              Forgot password?
            </Link>
          </div>
          <div className="my-10">
            <Link className="text-primary-1" to="/forgot-username">
              Forgot your username?
            </Link>
          </div>
        </div>

        <div className="right">
          <h4 className="fs-22">Not registered yet?</h4>

          <p className="mt-20">Create an account for free and start bidding</p>

          <Button green className="mt-10" to="/register">
            Register for Free
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Login;

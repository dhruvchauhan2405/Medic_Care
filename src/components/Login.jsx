import React from "react";
import "./Login.css";

export const Login = () => {
  return (
    <div className="img1">
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6">
          <div>
            <div className="row p-5 place">
              <div className="row center">
                <a className="btn buttn btn-primary" href="/login">
                  Login
                </a>
              </div>
              <div className="row center">
                <a className="btn buttn btn-primary" href="/register">
                  Signup
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

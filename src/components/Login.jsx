import React from "react";
import mainpic from "../assets/images/a.jpg";
import "./Login.css";
import vid from "../assets/111.mp4";

export const Login = () => {
  return (
    <div className="row">
      <video
        id="video1"
        preload=""
        autoplay=""
        muted="true"
        playsinline=""
        loop="true"
        className="video"
      >
        <source src={vid} type="video/mp4" />
      </video>

      <div className="col">
        <div className="cont">
          <a className="btn" href="/login">
            Login
          </a>
          <br />
          <a className="btn" href="/register">
            Signup
          </a>
        </div>
      </div>
    </div>
  );
};

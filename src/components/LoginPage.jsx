import React from "react";

export const LoginPage = () => {
  return (
    <div className="bro">
      <div className="form" action="">
        <h2 className="heading">Login</h2>
        <br />
        <div className="container">
          <label htmlFor="" className="uname">
            <b>Username</b>
          </label>
          <br />
          <input type="text" placeholder="" name="uname" required></input>
          <br />
          <label for="psw">
            <b>Password</b>
          </label>
          <br />
          <input type="password" placeholder="" name="psw" required></input>
          <br />
          <br />
          <button className="submit" type="submit">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

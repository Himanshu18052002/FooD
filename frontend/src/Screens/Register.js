import React from "react";
import classes from "./styles/Auth.module.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.authContainer}>
          <h1>Lets get started</h1>
          <div className={classes.textInputContainer}>
            <label>Enter your full name: </label>
            <br />
            <input type="text" placeholder="Name" />
          </div>
          <div className={classes.textInputContainer}>
            <label>Enter you mobile number:</label>
            <br />
            <input type="text" placeholder="+91 -xxxxxxxxx" />
          </div>
          <div className={classes.textInputContainer}>
            <label>Enter your email below:</label>
            <br />
            <input type="email" placeholder="Email" />
          </div>
          <div className={classes.textInputContainer}>
            <label>Enter your password below:</label>
            <br />
            <input type="password" placeholder="password here" />
          </div>
          <div className={classes.buttonContainer}>
            <button>Register me</button>
            <p style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
              Already a user? Login here
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

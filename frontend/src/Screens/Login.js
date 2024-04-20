import React from "react";
import classes from "./styles/Auth.module.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.authContainer}>
          <h1>What are you craving for?</h1>

          <div className={classes.textInputContainer}>
            <label>Enter your email below:</label>
            <br />
            <input type="text" placeholder="Email" />
          </div>
          <div className={classes.textInputContainer}>
            <label>Enter your password below:</label>
            <br />
            <input type="password" placeholder="password here" />
          </div>
          <div className={classes.buttonContainer}>
            <button>Login</button>
            <p
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/register")}
            >
              Don't have an account? Sign up
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

import React, { useState } from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [loggedIn, setloggedIn] = useState(true);

  const logout = () => {};
  return (
    <>
      <div className={classes.container}>
        <div>
          <Link to={"/"}>Logo</Link>
        </div>
        {loggedIn ? (
          <div className={classes.menuContainer}>
            <div>
              <Link className={classes.cart} to={"/cart"}>
                <FontAwesomeIcon
                  className={classes.cartIcon}
                  icon={faCartFlatbed}
                  color="white"
                />
              </Link>
            </div>
            <div>
              <Link className={classes.user} to={"/account"}>
                <FontAwesomeIcon
                  className={classes.userIcon}
                  icon={faUser}
                  color="white"
                />
              </Link>
            </div>
            <div style={{ marginLeft: "3px" }} onClick={logout}>
              Logout
            </div>
          </div>
        ) : (
          <div className={classes.menuContainer}>
            <div>
              <Link to={"/login"}>Login</Link>
            </div>
            <div>
              <Link to={"/register"}>Sign up</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;

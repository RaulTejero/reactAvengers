import React from "react";
import { Link } from "react-router-dom";
import "../styles/logo.css";

export const Logo = () => {
  return (
    <>
      <Link to={"/"}>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
          alt=""
        />
      </Link>
    </>
  );
};
